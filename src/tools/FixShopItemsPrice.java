/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import database.DBConPool;
import server.MapleItemInformationProvider;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class FixShopItemsPrice {

    private List<Integer> loadFromDB() {
        List<Integer> shopItemsId = new ArrayList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT itemid FROM shopitems ORDER BY itemid");
            ResultSet rs = ps.executeQuery();
            int itemId = 0;
            while (rs.next()) {
                if (itemId != rs.getInt("itemid")) {
                    itemId = rs.getInt("itemid");
                    // System.out.println("商品道具ID:" + itemId);
                    shopItemsId.add(itemId);
                }
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.err.println("无法载入商店");
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return shopItemsId;
    }

    private void changePrice(int itemId) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con
                    .prepareStatement("SELECT shopid, price FROM shopitems WHERE itemid = ? ORDER BY price");
            ps.setInt(1, itemId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                // double a = ii.getPrice(itemId);
                if (ii.getPrice(itemId) != rs.getLong("price") && rs.getLong("price") != 0 && ii.getPrice(itemId) > 1) {
                    System.out.println("道具: " + MapleItemInformationProvider.getInstance().getName(itemId) + "道具ID: "
                            + itemId + " 商店: " + rs.getInt("shopid") + " 原价格: " + rs.getLong("price") + " 新价格:"
                            + (long) ii.getPrice(itemId));
                    PreparedStatement pp = con
                            .prepareStatement("UPDATE shopitems SET price = ? WHERE itemid = ? AND shopid = ?");
                    pp.setLong(1, (long) ii.getPrice(itemId));
                    pp.setInt(2, itemId);
                    pp.setInt(3, rs.getInt("shopid"));
                    pp.execute();
                    pp.close();
                }
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.out.println("处理商品失败, 道具ID:" + itemId);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public static void main(String[] args) {
        System.setProperty("wzpath", System.getProperty("wzpath"));
        FixShopItemsPrice i = new FixShopItemsPrice();
        System.out.println("正在加载道具数据......");
        MapleItemInformationProvider.getInstance().load();
        System.out.println("正在读取商店所有商品......");
        List<Integer> list = i.loadFromDB();
        System.out.println("正在处理商店商品价格......");
        for (int ii : list) {
            i.changePrice(ii);
        }
        System.out.println("处理商店商品价格异常结束。");
    }
}
