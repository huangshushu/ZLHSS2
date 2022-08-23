/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.wztosql;

import client.inventory.MapleInventoryType;
import database.DBConPool;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.CashItemFactory;
import server.CashItemInfo;
import server.MapleItemInformationProvider;
import tools.FileoutputUtil;

import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

/**
 * @author XiaoMaDengDengWo
 */
public class DumpCashShop {

    private static final MapleDataProvider data = MapleDataProviderFactory.getDataProvider(new File((System.getProperty("wzpath") != null ? System.getProperty("wzpath") : "") + "wz/Etc.wz"));

    public static final CashItemInfo.CashModInfo getModInfo(int sn) {
        CashItemInfo.CashModInfo ret = null;

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * FROM cashshop_modified_items WHERE serial = ?")) {
            ps.setInt(1, sn);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    ret = new CashItemInfo.CashModInfo(sn, rs.getInt("discount_price"), rs.getInt("mark"), rs.getInt("showup") > 0, rs.getInt("itemid"), rs.getInt("priority"), rs.getInt("package") > 0, rs.getInt("period"), rs.getInt("gender"), rs.getInt("count"), rs.getInt("meso"), rs.getInt("unk_1"), rs.getInt("unk_2"), rs.getInt("unk_3"), rs.getInt("extra_flags"), rs.getInt("mod"));

                }
            }

        } catch (Exception ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);

        }

        return ret;
    }

    public static void main(String[] args) {
        MapleItemInformationProvider.getInstance().load();
        CashItemInfo.CashModInfo m = getModInfo(20000393);
        CashItemFactory.getInstance().initialize();
        Collection<CashItemInfo.CashModInfo> list = CashItemFactory.getInstance().getAllModInfo();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            final List<Integer> itemids = new ArrayList<Integer>();
            List<Integer> qq = new ArrayList<Integer>();

            //所有的道具
            Map<Integer, Map<String, Integer>> itemConmes = new HashMap<>();
            for (MapleData field : data.getData("Commodity.img").getChildren()) {
                Map<String, Integer> itemConme = new HashMap<>();
                int itemId = MapleDataTool.getIntConvert("ItemId", field, 0);
                int sn = MapleDataTool.getIntConvert("SN", field, 0);
                int count = MapleDataTool.getIntConvert("Count", field, 0);
                int price = MapleDataTool.getIntConvert("Price", field, 0);
                int priority = MapleDataTool.getIntConvert("Priority", field, 0);
                int period = MapleDataTool.getIntConvert("Period", field, 0);
                int gender = MapleDataTool.getIntConvert("Gender", field, -1);
                int meso = MapleDataTool.getIntConvert("Meso", field, 0);
                if (price == 0) {
                    continue;
                }
                if (sn / 10000000 == 2 || sn / 10000000 == 3 || sn / 10000000 == 5 || sn / 10000000 == 6 || sn / 10000000 == 7) {
                    if (itemConmes.containsKey(itemId)) {
                        if (itemConmes.get(itemId).get("price") > price) {
                            continue;
                        }
                    }
                }
                itemConme.put("itemId", itemId);
                itemConme.put("sn", sn);
                itemConme.put("count", count);
                itemConme.put("price", price);
                itemConme.put("priority", priority);
                itemConme.put("period", period);
                itemConme.put("gender", gender);
                itemConme.put("meso", meso);
                itemConmes.put(itemId, itemConme);
            }

            Map<Integer, List<String>> dics = new HashMap<>();
            for (Map<String, Integer> field : itemConmes.values()) {
                try {
                    final int itemId = field.get("itemId");
                    final int sn = field.get("sn");
                    final int count = field.get("count");
                    final int price = field.get("price");
                    final int priority = field.get("priority");
                    final int period = field.get("period");
                    final int gender = field.get("gender");
                    final int meso = field.get("meso");
                    //if(qq.contains(itemId))
                    //    continue;
                    if (itemId == 0) {
                        continue;
                    }
                    if (sn > 80000000) {
                        continue;
                    }
                    if (sn / 100000 == 102) {//活动
                        continue;
                    }

                    if (sn / 100000 == 101) {//达人卡
                        continue;
                    }
                    if (sn / 100000 == 100) {//推荐商品
                        continue;
                    }

                    if (sn / 100000 == 700) {//推荐商品
                        continue;
                    }

                    //if (price < 5) {
                    //continue;
                    //}
                    int cat = itemId / 10000;
                    if (dics.get(cat) == null) {
                        dics.put(cat, new ArrayList());
                    }
                    boolean check = meso > 0;
                    if (MapleItemInformationProvider.getInstance().getInventoryTypeCS(itemId) == MapleInventoryType.EQUIP) {
                        if (!MapleItemInformationProvider.getInstance().isCashItem(itemId)) {
                            check = true;
                        }
                    }
                    if (MapleItemInformationProvider.getInstance().getInventoryTypeCS(itemId) == MapleInventoryType.EQUIP) {
                        if (period > 0) {
                            check = true;
                        }
                    }

                    if (check) {
                        System.out.println(MapleItemInformationProvider.getInstance().getName(itemId));
                        continue;
                    }

                    PreparedStatement ps = con.prepareStatement("INSERT INTO cashshop_modified_items (serial, showup,itemid,priority,period,gender,count,meso,discount_price,mark, unk_1, unk_2, unk_3, name) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    ps.setInt(1, sn);
                    ps.setInt(2, 1);
                    ps.setInt(3, itemId);
                    ps.setInt(4, 0);
                    ps.setInt(5, 0);
                    ps.setInt(6, gender);
                    ps.setInt(7, count > 1 ? count : 0);
                    ps.setInt(8, meso);
                    ps.setInt(9, price);
                    qq.add(itemId);
                    ps.setInt(10, 0);
                    ps.setInt(11, 0);
                    ps.setInt(12, 0);
                    ps.setInt(13, 0);
                    ps.setString(14, MapleItemInformationProvider.getInstance().getName(itemId));

                    //String sql = ps.toString().split(":")[1].trim() + ";";
                    ps.executeUpdate();
                    ps.toString();
                    //dics.get(cat).add("-- " + MapleItemInformationProvider.getInstance().getName(itemId) + "\n" + sql);
                    ps.close();

                } catch (SQLException ex) {
                    FileoutputUtil.outError("logs/CashShopDumper.txt", ex);
                }
            }
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }

        /*for (Integer key : dics.keySet()) {

         File fout = new File("cashshopItems/" + key.toString() + ".sql");
         List<String> l = dics.get(key);
         FileOutputStream fos = null;
         try {
         if (!fout.exists()) {
         fout.createNewFile();
         }
         fos = new FileOutputStream(fout);
         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
         for (int i = 0; i < l.size(); i++) {
         bw.write(l.get(i));
         bw.newLine();
         }

         bw.close();

         } catch (FileNotFoundException ex) {
         FileoutputUtil.printError("CashShopDumper.txt", ex);
         } catch (IOException ex) {
         FileoutputUtil.printError("CashShopDumper.txt", ex);
         } finally {
         try {
         if (fos != null) {
         fos.close();
         }
         } catch (IOException ex) {
         FileoutputUtil.printError("CashShopDumper.txt", ex);
         }
         }

         }*/
    }
}
