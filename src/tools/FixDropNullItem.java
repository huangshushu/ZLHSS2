/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import database.DBConPool;
import server.MapleItemInformationProvider;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class FixDropNullItem {

    private List<Integer> loadFromDB(int type) {
        List<Integer> dropid = new ArrayList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            StringBuilder sb = new StringBuilder();
            sb.append("SELECT itemid FROM drop_data ORDER BY itemid");
            if (type == 1) {
                sb.append(" DESC");
            }
            PreparedStatement ps = con.prepareStatement(sb.toString());
            ResultSet rs = ps.executeQuery();
            int itemId = 0;
            while (rs.next()) {
                try {
                    itemId = rs.getInt("itemid");
                } catch (Exception ex) {

                }
                if (itemId != 0) {
                    dropid.add(itemId);
                }
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.err.println("无法载入掉落物");
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return dropid;
    }

    private void FixDropData(int type, int itemId) {

        StringBuilder sb = new StringBuilder();
        sb.append("SELECT itemid, dropperid FROM drop_data WHERE itemid = ? ORDER BY itemid");
        if (type == 1) {
            sb.append(" DESC");
        }
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(sb.toString());
            ps.setInt(1, itemId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (!ii.itemExists(itemId)) {
                    System.out.println("道具: " + MapleItemInformationProvider.getInstance().getName(itemId) + " 道具ID: "
                            + itemId + " 怪物ID: " + rs.getInt("dropperid") + " 不存在，已从资料库移除");
                    try {
                        PreparedStatement pp = con.prepareStatement("Delete From drop_data WHERE itemid = ?");
                        pp.setInt(1, itemId);
                        pp.executeUpdate();
                        pp.close();
                    } catch (Exception ex) {
                        System.out.println(ex);
                    }
                }
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.out.println("处理掉落物失败, 道具ID:" + itemId);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public static void main(String[] args) {
        System.out.println("请输入种类，0为降逆排列 1为升幂排列");
        int type = 0;
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            type = Integer.parseInt(br.readLine());
        } catch (IOException ex) {
            Logger.getLogger(FixDropNullItem.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (type > 1 || type < 0) {
            type = 0;
        }
        // System.setProperty("wzpath", System.getProperty("wzpath"));
        FixDropNullItem i = new FixDropNullItem();
        System.out.println("正在加载道具数据......");
        MapleItemInformationProvider.getInstance().load();
        System.out.println("正在读取掉落物品......");
        List<Integer> list = i.loadFromDB(type);
        System.out.println("正在处理不存在之掉落物......， 种类为 : " + type);
        for (int ii : list) {
            i.FixDropData(type, ii);
        }
        System.out.println("处理不存在之掉落物结束。");
    }
}
