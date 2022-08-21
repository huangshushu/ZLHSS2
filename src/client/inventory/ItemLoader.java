/*
 This file is part of the ZeroFusion MapleStory Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 ZeroFusion organized by "RMZero213" <RMZero213@hotmail.com>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package client.inventory;

import constants.GameConstants;
import database.DBConPool;
import tools.FileoutputUtil;
import tools.Pair;

import java.sql.*;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public enum ItemLoader {

    INVENTORY("inventoryitems", "inventoryequipment", 0, "characterid"),
    STORAGE("inventoryitems", "inventoryequipment", 1, "accountid"),
    CASHSHOP_EXPLORER("csitems", "csequipment", 2, "accountid"),
    CASHSHOP_CYGNUS("csitems", "csequipment", 3, "accountid"),
    CASHSHOP_ARAN("csitems", "csequipment", 4, "accountid"),
    HIRED_MERCHANT("hiredmerchitems", "hiredmerchequipment", 5, "packageid", "accountid"),
    DUEY("dueyitems", "dueyequipment", 6, "packageid"),
    CASHSHOP_EVAN("csitems", "csequipment", 7, "accountid"),
    MTS("mtsitems", "mtsequipment", 8, "packageid"),
    MTS_TRANSFER("mtstransfer", "mtstransferequipment", 9, "characterid"),
    CASHSHOP_DB("csitems", "csequipment", 10, "accountid"),
    CASHSHOP_RESIST("csitems", "csequipment", 11, "accountid");

    private final int value;
    private final String table, table_equip;
    private final List<String> arg;

    ItemLoader(String table, String table_equip, int value, String... arg) {
        this.table = table;
        this.table_equip = table_equip;
        this.value = value;
        this.arg = Arrays.asList(arg);
    }

    public int getValue() {
        return value;
    }

    // does not need connection con to be auto commit
    public Map<Long, Pair<IItem, MapleInventoryType>> loadItems(boolean login, Integer... id) throws SQLException {
        List<Integer> lulz = Arrays.asList(id);
        Map<Long, Pair<IItem, MapleInventoryType>> items = new LinkedHashMap<>();
        if (lulz.size() != arg.size()) {
            return items;
        }
        StringBuilder query = new StringBuilder();
        query.append("SELECT * FROM `");
        query.append(table);
        query.append("` LEFT JOIN `");
        query.append(table_equip);
        query.append("` USING(`inventoryitemid`) WHERE `type` = ?");
        for (String g : arg) {
            query.append(" AND `");
            query.append(g);
            query.append("` = ?");
        }

        if (login) {
            query.append(" AND `inventorytype` = ");
            query.append(MapleInventoryType.EQUIPPED.getType());
        }

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(query.toString());
            ps.setInt(1, value);
            for (int i = 0; i < lulz.size(); i++) {
                ps.setInt(i + 2, lulz.get(i));
            }
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                MapleInventoryType mit = MapleInventoryType.getByType(rs.getByte("inventorytype"));

                if (mit.equals(MapleInventoryType.EQUIP) || mit.equals(MapleInventoryType.EQUIPPED)) {
                    Equip equip = new Equip(rs.getInt("itemid"), rs.getShort("position"), rs.getInt("uniqueid"),
                            rs.getByte("flag"));
                    if (!login) {
                        equip.setQuantity((short) 1);
                        equip.setInventoryId(rs.getLong("inventoryitemid"));
                        equip.setOwner(rs.getString("owner"));
                        equip.setExpiration(rs.getLong("expiredate"));
                        equip.setUpgradeSlots(rs.getByte("upgradeslots"));
                        equip.setLevel(rs.getByte("level"));
                        equip.setStr(rs.getShort("str"));
                        equip.setDex(rs.getShort("dex"));
                        equip.setInt(rs.getShort("int"));
                        equip.setLuk(rs.getShort("luk"));
                        equip.setHp(rs.getShort("hp"));
                        equip.setMp(rs.getShort("mp"));
                        equip.setWatk(rs.getShort("watk"));
                        equip.setMatk(rs.getShort("matk"));
                        equip.setWdef(rs.getShort("wdef"));
                        equip.setMdef(rs.getShort("mdef"));
                        equip.setAcc(rs.getShort("acc"));
                        equip.setAvoid(rs.getShort("avoid"));
                        equip.setHands(rs.getShort("hands"));
                        equip.setSpeed(rs.getShort("speed"));
                        equip.setJump(rs.getShort("jump"));
                        equip.setViciousHammer(rs.getByte("ViciousHammer"));
                        equip.setItemEXP(rs.getInt("itemEXP"));
                        equip.setGMLog(rs.getString("GM_Log"));
                        equip.setDurability(rs.getInt("durability"));
                        equip.setEnhance(rs.getByte("enhance"));
                        equip.setPotential1(rs.getShort("potential1"));
                        equip.setPotential2(rs.getShort("potential2"));
                        equip.setPotential3(rs.getShort("potential3"));
                        equip.setHpR(rs.getShort("hpR"));
                        equip.setMpR(rs.getShort("mpR"));
                        equip.setGiftFrom(rs.getString("sender"));
                        equip.setGrade(rs.getInt("grade"));
                        equip.setRate(rs.getInt("rate"));
                        // equip.setLimitBreak(rs.getInt("limitBreak")); //武器攻击突破上限
                        if (equip.getUniqueId() > -1) {
                            if (GameConstants.isEffectRing(rs.getInt("itemid"))) {
                                MapleRing ring = MapleRing.loadFromDb(equip.getUniqueId(),
                                        mit.equals(MapleInventoryType.EQUIPPED));
                                if (ring != null) {
                                    equip.setRing(ring);
                                }
                            }
                        }
                    }
                    items.put(rs.getLong("inventoryitemid"), new Pair<>(equip.copy(), mit));
                } else {
                    Item item = new Item(rs.getInt("itemid"), rs.getShort("position"), rs.getShort("quantity"),
                            rs.getByte("flag"));
                    item.setUniqueId(rs.getInt("uniqueid"));
                    item.setOwner(rs.getString("owner"));
                    item.setInventoryId(rs.getLong("inventoryitemid"));
                    item.setExpiration(rs.getLong("expiredate"));
                    item.setGMLog(rs.getString("GM_Log"));
                    item.setGiftFrom(rs.getString("sender"));
                    item.setRate(rs.getInt("rate"));
                    if (GameConstants.isPet(item.getItemId())) {
                        if (item.getUniqueId() > -1) {
                            MaplePet pet = MaplePet.loadFromDb(item.getItemId(), item.getUniqueId(),
                                    item.getPosition());
                            if (pet != null) {
                                item.setPet(pet);
                            }
                        } else {
                            // O_O hackish fix
                            final int new_unique = MapleInventoryIdentifier.getInstance();
                            item.setUniqueId(new_unique);
                            item.setPet(MaplePet.createPet(item.getItemId(), new_unique));
                        }
                    }
                    items.put(rs.getLong("inventoryitemid"), new Pair<>(item.copy(), mit));
                }
            }

            rs.close();
            ps.close();
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return items;
    }

    public void saveItems(List<Pair<IItem, MapleInventoryType>> items, Integer... id) throws SQLException {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            saveItems(items, con, id);
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public void saveItems(List<Pair<IItem, MapleInventoryType>> items, final Connection con, Integer... id)
            throws SQLException {
        try {
            List<Integer> lulz = Arrays.asList(id);
            if (lulz.size() != arg.size()) {
                return;
            }
            StringBuilder query = new StringBuilder();
            query.append("DELETE FROM `");
            query.append(table);
            query.append("` WHERE `type` = ? AND (`");
            query.append(arg.get(0));
            query.append("` = ?");
            if (arg.size() > 1) {
                for (int i = 1; i < arg.size(); i++) {
                    query.append(" OR `");
                    query.append(arg.get(i));
                    query.append("` = ?");
                }
            }
            query.append(")");

            PreparedStatement ps = con.prepareStatement(query.toString());
            ps.setInt(1, value);
            for (int i = 0; i < lulz.size(); i++) {
                ps.setInt(i + 2, lulz.get(i));
            }
            ps.executeUpdate();
            ps.close();
            if (items == null) {
                return;
            }
            StringBuilder query_2 = new StringBuilder("INSERT INTO `");
            query_2.append(table);
            query_2.append("` (");
            for (String g : arg) {
                query_2.append(g);
                query_2.append(", ");
            }
            query_2.append(
                    "itemid, inventorytype, position, quantity, owner, GM_Log, uniqueid, expiredate, flag, `type`, sender, equipOnlyId, rate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?");
            for (String g : arg) {
                query_2.append(", ?");
            }
            query_2.append(")");
            ps = con.prepareStatement(query_2.toString(), Statement.RETURN_GENERATED_KEYS);
            PreparedStatement pse = con.prepareStatement("INSERT INTO " + table_equip
                    + " VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS);
            final Iterator<Pair<IItem, MapleInventoryType>> iter = items.iterator();
            Pair<IItem, MapleInventoryType> pair;
            while (iter.hasNext()) {
                pair = iter.next();
                IItem item = pair.getLeft();
                MapleInventoryType mit = pair.getRight();
                int i = 1;
                for (int x = 0; x < lulz.size(); x++) {
                    ps.setInt(i, lulz.get(x));
                    i++;
                }
                ps.setInt(i, item.getItemId());
                ps.setInt(i + 1, mit.getType());
                ps.setInt(i + 2, item.getPosition());
                ps.setInt(i + 3, item.getQuantity());
                ps.setString(i + 4, item.getOwner());
                ps.setString(i + 5, item.getGMLog());
                ps.setInt(i + 6, item.getUniqueId());
                ps.setLong(i + 7, item.getExpiration());
                ps.setByte(i + 8, item.getFlag());
                ps.setByte(i + 9, (byte) value);
                ps.setString(i + 10, item.getGiftFrom());
                ps.setLong(i + 11, item.getEquipOnlyId());
                ps.setInt(i + 12, item.getRate());
                ps.executeUpdate();

                if (mit.equals(MapleInventoryType.EQUIP) || mit.equals(MapleInventoryType.EQUIPPED)) {
                    try (ResultSet rs = ps.getGeneratedKeys()) {
                        if (!rs.next()) {
                            throw new RuntimeException("Inserting item failed.");
                        }

                        pse.setLong(1, rs.getLong(1));
                    }
                    IEquip equip = (IEquip) item;
                    pse.setInt(2, equip.getUpgradeSlots());
                    pse.setInt(3, equip.getLevel());
                    pse.setInt(4, equip.getStr());
                    pse.setInt(5, equip.getDex());
                    pse.setInt(6, equip.getInt());
                    pse.setInt(7, equip.getLuk());
                    pse.setInt(8, equip.getHp());
                    pse.setInt(9, equip.getMp());
                    pse.setInt(10, equip.getWatk());
                    pse.setInt(11, equip.getMatk());
                    pse.setInt(12, equip.getWdef());
                    pse.setInt(13, equip.getMdef());
                    pse.setInt(14, equip.getAcc());
                    pse.setInt(15, equip.getAvoid());
                    pse.setInt(16, equip.getHands());
                    pse.setInt(17, equip.getSpeed());
                    pse.setInt(18, equip.getJump());
                    pse.setInt(19, equip.getViciousHammer());
                    pse.setInt(20, equip.getItemEXP());
                    pse.setInt(21, equip.getDurability());
                    pse.setByte(22, equip.getEnhance());
                    pse.setInt(23, equip.getPotential1());
                    pse.setInt(24, equip.getPotential2());
                    pse.setInt(25, equip.getPotential3());
                    pse.setInt(26, equip.getHpR());
                    pse.setInt(27, equip.getMpR());
                    pse.setInt(28, equip.getGrade());
                    // pse.setInt(29, equip.getLimitBreak()); //武器攻击突破上限
                    pse.executeUpdate();
                }
            }
            pse.close();
            ps.close();
        } catch (SQLException ex) {
            System.out.println(ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public static boolean isExistsByUniqueid(int uniqueid) {
        for (ItemLoader il : ItemLoader.values()) {
            StringBuilder query = new StringBuilder();
            query.append("SELECT * FROM `inventoryitems` WHERE `type` = ? AND uniqueid = ?");
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps = con.prepareStatement(query.toString());
                ps.setInt(1, il.value);
                ps.setInt(2, uniqueid);
                ResultSet rs = ps.executeQuery();
                if (rs.first()) {
                    ps.close();
                    rs.close();
                    return true;
                }
                ps.close();
                rs.close();
            } catch (SQLException ex) {
                Logger.getLogger(ItemLoader.class.getName()).log(Level.SEVERE, null, ex);
                FileoutputUtil.outError("logs/资料库异常.txt", ex);
            }
        }
        return false;
    }
}
