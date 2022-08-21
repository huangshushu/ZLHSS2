package tools.wztosql;

import client.inventory.EquipAdditions;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import database.DBConPool;
import provider.*;
import provider.WzXML.MapleDataType;
import server.life.Element;
import tools.FileoutputUtil;
import tools.Pair;

import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class DumpItems {

    private MapleDataProvider item, string = MapleDataProviderFactory.getDataProvider(new File((System.getProperty("wzpath") != null ? System.getProperty("wzpath") : "") + "wz/String.wz")), character;
    protected final MapleData cashStringData = string.getData("Cash.img");
    protected final MapleData consumeStringData = string.getData("Consume.img");
    protected final MapleData eqpStringData = string.getData("Eqp.img");
    protected final MapleData etcStringData = string.getData("Etc.img");
    protected final MapleData insStringData = string.getData("Ins.img");
    protected final MapleData petStringData = string.getData("Pet.img");
    protected final Set<Integer> doneIds = new LinkedHashSet<Integer>();
    protected boolean hadError = false;
    protected boolean update = false;
    protected int id = 0;

    public DumpItems(boolean update) throws Exception {
        this.update = update;
        this.item = MapleDataProviderFactory.getDataProvider(new File((System.getProperty("wzpath") != null ? System.getProperty("wzpath") : "") + "wz/Item.wz"));
        this.character = MapleDataProviderFactory.getDataProvider(new File((System.getProperty("wzpath") != null ? System.getProperty("wzpath") : "") + "wz/Character.wz"));
        if (item == null || string == null || character == null) {
            hadError = true;
        }
    }

    public boolean isHadError() {
        return hadError;
    }

    public void dumpItems() throws Exception {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            if (!hadError) {
                PreparedStatement psa = con.prepareStatement("INSERT INTO wz_itemadddata(itemid, `key`, value1, value2) VALUES (?, ?, ?, ?)");
                PreparedStatement psr = con.prepareStatement("INSERT INTO wz_itemrewarddata(itemid, item, prob, quantity, period, worldMsg, effect) VALUES (?, ?, ?, ?, ?, ?, ?)");
                PreparedStatement ps = con.prepareStatement("INSERT INTO wz_itemdata(itemid, name, msg, `desc`, slotMax, price, wholePrice, stateChange, flags, karma, meso, monsterBook, itemMakeLevel, questId, scrollReqs, consumeItem, totalprob, incSkill, replaceId, replaceMsg, `create`, afterImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                PreparedStatement pse = con.prepareStatement("INSERT INTO wz_itemequipdata(itemid, itemLevel, `key`, `value`) VALUES (?, ?, ?, ?)");
                try {
                    dumpItems(psa, psr, ps, pse);
                } catch (Exception e) {
                    System.out.println(id + " quest.");
                    e.printStackTrace();
                    hadError = true;
                } finally {
                    psr.executeBatch();
                    psr.close();
                    psa.executeBatch();
                    psa.close();
                    pse.executeBatch();
                    pse.close();
                    ps.executeBatch();
                    ps.close();
                }
            }
        } catch (SQLException ex) {
            FileoutputUtil.outputFileError("logs/资料库异常.txt", ex);
        }
    }

    public void delete(String sql) throws Exception {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(sql);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            FileoutputUtil.outputFileError("logs/资料库异常.txt", ex);
        }
    }

    public boolean doesExist(String sql) throws Exception {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            boolean ret = rs.next();
            rs.close();
            ps.close();
            return ret;
        } catch (SQLException ex) {
            FileoutputUtil.outputFileError("logs/资料库异常.txt", ex);
            return false;
        }
    }

    public void dumpItems(MapleDataProvider d, PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse, boolean charz) throws Exception {
        for (MapleDataDirectoryEntry topDir : d.getRoot().getSubdirectories()) { //requirements first
            if (!topDir.getName().equalsIgnoreCase("Special") && !topDir.getName().equalsIgnoreCase("Hair") && !topDir.getName().equalsIgnoreCase("Face") && !topDir.getName().equalsIgnoreCase("Afterimage")) {
                for (MapleDataFileEntry ifile : topDir.getFiles()) {
                    final MapleData iz = d.getData(topDir.getName() + "/" + ifile.getName());
                    if (charz || topDir.getName().equalsIgnoreCase("Pet")) {
                        dumpItem(psa, psr, ps, pse, iz);
                    } else {
                        for (MapleData itemData : iz) {
                            dumpItem(psa, psr, ps, pse, itemData);
                        }
                    }
                }
            }
        }
    }

    public void dumpItem(PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse, MapleData iz) throws Exception {
        try {
            if (iz.getName().endsWith(".img")) {
                this.id = Integer.parseInt(iz.getName().substring(0, iz.getName().length() - 4));
            } else {
                this.id = Integer.parseInt(iz.getName());
            }
        } catch (NumberFormatException nfe) { //not we need
            return;
        }

        if (doneIds.contains(id) || GameConstants.getInventoryType(id) == MapleInventoryType.UNDEFINED) {
            return;
        }

        doneIds.add(id);
        if (update && doesExist("SELECT * FROM wz_itemdata WHERE itemid = " + id)) {
            return;
        }
        ps.setInt(1, id);
        final MapleData stringData = getStringData(id);

        if (stringData == null) {
            ps.setString(2, "");
            ps.setString(3, "");
            ps.setString(4, "");
        } else {
            ps.setString(2, MapleDataTool.getString("name", stringData, ""));
            ps.setString(3, MapleDataTool.getString("msg", stringData, ""));
            ps.setString(4, MapleDataTool.getString("desc", stringData, ""));
        }
        short ret = 0;
        final MapleData smEntry = iz.getChildByPath("info/slotMax");
        if (smEntry == null) {
            if (GameConstants.getInventoryType(id) == MapleInventoryType.EQUIP) {
                ret = 1;
            } else {
                ret = 100;
            }
        } else {
            ret = (short) MapleDataTool.getIntConvert(smEntry, -1);
        }
        ps.setInt(5, ret);
        double pEntry = 0.0;
        MapleData pData = iz.getChildByPath("info/unitPrice");

        if (pData != null) {
            try {
                pEntry = MapleDataTool.getDouble(pData);
            } catch (Exception e) {
                pEntry = (double) MapleDataTool.getIntConvert(pData, -1);
            }
        } else {
            pData = iz.getChildByPath("info/price");
            if (pData == null) {
                pEntry = -1.0;
            } else {
                pEntry = (double) MapleDataTool.getIntConvert(pData, -1);
            }
        }

        if (id == 2070019 || id == 2330007) {
            pEntry = 1.0;
        }

        ps.setString(6, String.valueOf(pEntry));
        ps.setInt(7, MapleDataTool.getIntConvert("info/price", iz, -1));
        ps.setInt(8, MapleDataTool.getIntConvert("info/stateChangeItem", iz, 0));
        int flags = MapleDataTool.getIntConvert("info/bagType", iz, 0);

        if (MapleDataTool.getIntConvert("info/notSale", iz, 0) > 0) {
            flags |= 0x10;
        }
        if (MapleDataTool.getIntConvert("info/expireOnLogout", iz, 0) > 0) {
            flags |= 0x20;
        }
        if (MapleDataTool.getIntConvert("info/pickUpBlock", iz, 0) > 0) {
            flags |= 0x40;
        }
        if (MapleDataTool.getIntConvert("info/only", iz, 0) > 0) {
            flags |= 0x80;
        }
        if (MapleDataTool.getIntConvert("info/accountSharable", iz, 0) > 0) {
            flags |= 0x100;
        }
        if (MapleDataTool.getIntConvert("info/quest", iz, 0) > 0) {
            flags |= 0x200;
        }
        if (MapleDataTool.getIntConvert("info/tradeBlock", iz, 0) > 0) {
            flags |= 0x400;
        }
        if (MapleDataTool.getIntConvert("info/accountShareTag", iz, 0) > 0) {
            flags |= 0x800;
        }
        if (MapleDataTool.getIntConvert("info/mobHP", iz, 0) > 0 && MapleDataTool.getIntConvert("info/mobHP", iz, 0) < 100) {
            flags |= 0x1000;
        }
        ps.setInt(9, flags);
        ps.setInt(10, MapleDataTool.getIntConvert("info/tradeAvailable", iz, 0));
        ps.setInt(11, MapleDataTool.getIntConvert("info/meso", iz, 0));
        ps.setInt(12, MapleDataTool.getIntConvert("info/mob", iz, 0));
        ps.setInt(13, MapleDataTool.getIntConvert("info/lv", iz, 0));
        ps.setInt(14, MapleDataTool.getIntConvert("info/questId", iz, 0));
        int totalprob = 0;
        StringBuilder scrollReqs = new StringBuilder(), consumeItem = new StringBuilder(), incSkill = new StringBuilder();
        MapleData dat = iz.getChildByPath("req");
        if (dat != null) {
            for (MapleData req : dat) {
                if (scrollReqs.length() > 0) {
                    scrollReqs.append(",");
                }
                scrollReqs.append(MapleDataTool.getIntConvert(req, 0));
            }
        }
        dat = iz.getChildByPath("consumeItem");
        if (dat != null) {
            for (MapleData req : dat) {
                if (consumeItem.length() > 0) {
                    consumeItem.append(",");
                }
                consumeItem.append(MapleDataTool.getIntConvert(req, 0));
            }
        }
        ps.setString(15, scrollReqs.toString());
        ps.setString(16, consumeItem.toString());
        Map<Integer, Map<String, Integer>> equipStats = new HashMap<Integer, Map<String, Integer>>();
        equipStats.put(-1, new HashMap<String, Integer>());
        dat = iz.getChildByPath("mob");
        if (dat != null) {
            for (MapleData child : dat) {
                equipStats.get(-1).put("mob" + MapleDataTool.getIntConvert("id", child, 0), MapleDataTool.getIntConvert("prob", child, 0));
            }
        }
        dat = iz.getChildByPath("info/level/case");
        if (dat != null) {
            for (MapleData info : dat) {
                for (MapleData data : info) {
                    if (data.getName().length() == 1 && data.getChildByPath("Skill") != null) {
                        for (MapleData skil : data.getChildByPath("Skill")) {
                            int incSkillz = MapleDataTool.getIntConvert("id", skil, 0);
                            if (incSkillz != 0) {
                                if (incSkill.length() > 0) {
                                    incSkill.append(",");
                                }
                                incSkill.append(incSkillz);
                            }
                        }
                    }
                }
            }
        }
        dat = iz.getChildByPath("info/level/info");
        if (dat != null) {
            for (MapleData info : dat) {
                if (MapleDataTool.getIntConvert("exp", info, 0) == 0) {
                    continue;
                }
                final int lv = Integer.parseInt(info.getName());
                if (equipStats.get(lv) == null) {
                    equipStats.put(lv, new HashMap<>());
                }
                for (MapleData data : info) {
                    if (data.getName().length() > 3) {
                        if (data.getType() != MapleDataType.CANVAS) {
                            equipStats.get(lv).put(data.getName().substring(3), MapleDataTool.getIntConvert(data, 0));
                        }
                    }
                }
            }
        }
        dat = iz.getChildByPath("info");
        if (dat != null) {
            ps.setString(22, MapleDataTool.getString("afterImage", dat, ""));
            final Map<String, Integer> rett = equipStats.get(-1);
            for (final MapleData data : dat.getChildren()) {
                if (data.getName().startsWith("inc")) {
                    final int gg = MapleDataTool.getIntConvert(data, 0);
                    if (gg != 0) {
                        rett.put(data.getName().substring(3), gg);
                    }
                }
            }
            //save sql, only do the ones that exist
            for (String stat : GameConstants.stats) {
                final MapleData d = dat.getChildByPath(stat);
                if (stat.equals("canLevel")) {
                    if (dat.getChildByPath("level") != null) {
                        rett.put(stat, 1);
                    }
                } else if (d != null) {
                    if (stat.equals("skill")) {
                        for (int i = 0; i < d.getChildren().size(); i++) { // List of allowed skillIds
                            rett.put("skillid" + i, MapleDataTool.getIntConvert(Integer.toString(i), d, 0));
                        }
                    } else {
                        final int dd = MapleDataTool.getIntConvert(d, 0);
                        if (dd != 0) {
                            rett.put(stat, dd);
                        }
                    }
                }
            }
        } else {
            ps.setString(22, "");
        }
        pse.setInt(1, id);
        for (Entry<Integer, Map<String, Integer>> stats : equipStats.entrySet()) {
            pse.setInt(2, stats.getKey());
            for (Entry<String, Integer> stat : stats.getValue().entrySet()) {
                pse.setString(3, stat.getKey());
                pse.setInt(4, stat.getValue());
                pse.addBatch();
            }
        }
        dat = iz.getChildByPath("info/addition");
        if (dat != null) {
            psa.setInt(1, id);
            for (MapleData d : dat.getChildren()) {
                EquipAdditions z = EquipAdditions.fromString(d.getName());
                if (z != null) {
                    Pair<Integer, Integer> incs = null;
                    if (z.isElement()) {
                        String ele = MapleDataTool.getString(z.getValue1(), d, "F30"); //value1=value2
                        incs = new Pair<Integer, Integer>(Element.getFromChar(ele.charAt(0)).getValue(), Integer.parseInt(ele.substring(1, ele.length()))); //E.G. F30
                    } else {
                        incs = new Pair<Integer, Integer>(MapleDataTool.getIntConvert(z.getValue1(), d, 0), MapleDataTool.getIntConvert(z.getValue2(), d, 0));
                    }
                    psa.setString(2, d.getName());
                    psa.setInt(3, incs.left);
                    psa.setInt(4, incs.right);
                    psa.addBatch();
                } else {
                    System.out.println("UNKNOWN EQ ADDITION : " + d.getName() + " from " + id);
                }
            }
        }
        dat = iz.getChildByPath("reward");
        if (dat != null) {
            psr.setInt(1, id);
            for (MapleData reward : dat) {
                psr.setInt(2, MapleDataTool.getIntConvert("item", reward, 0));
                psr.setInt(3, MapleDataTool.getIntConvert("prob", reward, 0));
                psr.setInt(4, MapleDataTool.getIntConvert("count", reward, 0));
                psr.setInt(5, MapleDataTool.getIntConvert("period", reward, 0));
                psr.setString(6, MapleDataTool.getString("worldMsg", reward, ""));
                psr.setString(7, MapleDataTool.getString("Effect", reward, ""));
                psr.addBatch();
                totalprob += MapleDataTool.getIntConvert("prob", reward, 0);
            }
        }
        ps.setInt(17, totalprob);
        ps.setString(18, incSkill.toString());
        dat = iz.getChildByPath("replace");
        if (dat != null) {
            ps.setInt(19, MapleDataTool.getInt("itemid", dat, 0));
            ps.setString(20, MapleDataTool.getString("msg", dat, ""));
        } else {
            ps.setInt(19, 0);
            ps.setString(20, "");
        }
        ps.setInt(21, MapleDataTool.getInt("info/create", iz, 0));
        ps.addBatch();
    }

    public void dumpItems(PreparedStatement psa, PreparedStatement psr, PreparedStatement ps, PreparedStatement pse) throws Exception {
        if (!update) {
            delete("DELETE FROM wz_itemdata");
            delete("DELETE FROM wz_itemequipdata");
            delete("DELETE FROM wz_itemadddata");
            delete("DELETE FROM wz_itemrewarddata");
            System.out.println("Deleted wz_itemdata successfully.");
        }
        System.out.println("Adding into wz_itemdata.....");
        dumpItems(item, psa, psr, ps, pse, false);
        dumpItems(character, psa, psr, ps, pse, true);
        System.out.println("Done wz_itemdata...");
    }

    public int currentId() {
        return id;
    }

    public static void main(String[] args) {
        boolean hadError = false;
        boolean update = false;
        long startTime = System.currentTimeMillis();
        for (String file : args) {
            if (file.equalsIgnoreCase("-update")) {
                update = true;
            }
        }
        int currentQuest = 0;
        try {
            final DumpItems dq = new DumpItems(update);
            System.out.println("Dumping Items");
            dq.dumpItems();
            hadError |= dq.isHadError();
            currentQuest = dq.currentId();
        } catch (Exception e) {
            hadError = true;
            e.printStackTrace();
            System.out.println(currentQuest + " quest.");
        }
        long endTime = System.currentTimeMillis();
        double elapsedSeconds = (endTime - startTime) / 1000.0;
        int elapsedSecs = (((int) elapsedSeconds) % 60);
        int elapsedMinutes = (int) (elapsedSeconds / 60.0);
        String withErrors = "";
        if (hadError) {
            withErrors = " with errors";
        }
        System.out.println("Finished" + withErrors + " in " + elapsedMinutes + " minutes " + elapsedSecs + " seconds");
    }

    protected final MapleData getStringData(final int itemId) {
        String cat = null;
        MapleData data;

        if (itemId >= 5010000) {
            data = cashStringData;
        } else if (itemId >= 2000000 && itemId < 3000000) {
            data = consumeStringData;
        } else if ((itemId >= 1132000 && itemId < 1183000) || (itemId >= 1010000 && itemId < 1040000) || (itemId >= 1122000 && itemId < 1123000)) {
            data = eqpStringData;
            cat = "Eqp/Accessory";
        } else if (itemId >= 1172000 && itemId < 1173000) {
            data = eqpStringData;
            cat = "Eqp/MonsterBook";
        } else if (itemId >= 1662000 && itemId < 1680000) {
            data = eqpStringData;
            cat = "Eqp/Android";
        } else if (itemId >= 1000000 && itemId < 1010000) {
            data = eqpStringData;
            cat = "Eqp/Cap";
        } else if (itemId >= 1102000 && itemId < 1103000) {
            data = eqpStringData;
            cat = "Eqp/Cape";
        } else if (itemId >= 1040000 && itemId < 1050000) {
            data = eqpStringData;
            cat = "Eqp/Coat";
        } else if (itemId >= 20000 && itemId < 22000) {
            data = eqpStringData;
            cat = "Eqp/Face";
        } else if (itemId >= 1080000 && itemId < 1090000) {
            data = eqpStringData;
            cat = "Eqp/Glove";
        } else if (itemId >= 30000 && itemId < 35000) {
            data = eqpStringData;
            cat = "Eqp/Hair";
        } else if (itemId >= 1050000 && itemId < 1060000) {
            data = eqpStringData;
            cat = "Eqp/Longcoat";
        } else if (itemId >= 1060000 && itemId < 1070000) {
            data = eqpStringData;
            cat = "Eqp/Pants";
        } else if (itemId >= 1610000 && itemId < 1660000) {
            data = eqpStringData;
            cat = "Eqp/Mechanic";
        } else if (itemId >= 1802000 && itemId < 1820000) {
            data = eqpStringData;
            cat = "Eqp/PetEquip";
        } else if (itemId >= 1920000 && itemId < 2000000) {
            data = eqpStringData;
            cat = "Eqp/Dragon";
        } else if (itemId >= 1112000 && itemId < 1120000) {
            data = eqpStringData;
            cat = "Eqp/Ring";
        } else if (itemId >= 1092000 && itemId < 1100000) {
            data = eqpStringData;
            cat = "Eqp/Shield";
        } else if (itemId >= 1070000 && itemId < 1080000) {
            data = eqpStringData;
            cat = "Eqp/Shoes";
        } else if (itemId >= 1900000 && itemId < 1920000) {
            data = eqpStringData;
            cat = "Eqp/Taming";
        } else if (itemId >= 1300000 && itemId < 1800000) {
            data = eqpStringData;
            cat = "Eqp/Weapon";
        } else if (itemId >= 4000000 && itemId < 5000000) {
            data = etcStringData;
            cat = "Etc";
        } else if (itemId >= 3000000 && itemId < 4000000) {
            data = insStringData;
        } else if (itemId >= 5000000 && itemId < 5010000) {
            data = petStringData;
        } else {
            return null;
        }
        if (cat == null) {
            return data.getChildByPath(String.valueOf(itemId));
        } else {
            return data.getChildByPath(cat + "/" + itemId);
        }
    }
}
