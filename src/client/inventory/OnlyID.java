/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.inventory;

import database.DBConPool;
import handling.world.World;
import server.MapleItemInformationProvider;
import server.Timer;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Quadra;
import tools.Triple;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class OnlyID {

    private final static OnlyID instance = new OnlyID();
    private static List<Triple<Integer, Long, Long>> OnlyIDList = new ArrayList();

    public static OnlyID getInstance() {
        return instance;
    }

    protected OnlyID() {
        Timer.WorldTimer.getInstance().register(new run(), 12 * 60 * 60 * 1000);
    }

    public static List<Triple<Integer, Long, Long>> getData() {
        return OnlyIDList;
    }

    public static void addData(int chrid, long inventoryitemid, long ItemOnlyID) {
        OnlyIDList.add(new Triple(chrid, inventoryitemid, ItemOnlyID));
    }

    public static void removeData(int chrid) {
        OnlyIDList.remove(chrid);
    }

    public static void clearData() {
        if (!OnlyIDList.isEmpty()) {
            OnlyIDList.clear();
        }
    }

    public void StartCheckings() {
        StartChecking();
    }

    public static void StartChecking() {
        if (!OnlyIDList.isEmpty()) {
            OnlyIDList.clear();
        }

        StringBuilder chrs = new StringBuilder();
        StringBuilder Sql = new StringBuilder();
        List<Quadra<Integer, Integer, Long, Integer>> equipOnlyIds = new ArrayList();
        Map checkItems = new HashMap();
        List<Integer> all = new LinkedList<>();
        List<Integer> gm = new LinkedList<>();

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT characterid FROM inventoryitems WHERE equipOnlyId > 0");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                int chr = rs.getInt("characterid");
                if (chr != 0) {
                    all.add(chr);
                }
            }
            ps.close();
            rs.close();

            Sql = new StringBuilder();
            if (!all.isEmpty()) {
                Sql.append("and (id = ");
                for (int i = 0; i < all.size(); i++) {
                    Sql.append(all.get(i));
                    if (i < (all.size() - 1)) {
                        Sql.append(" OR id = ");
                    }
                }
                Sql.append(")");
            }

            ps = con.prepareStatement("SELECT id FROM characters WHERE gm > 0 " + Sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                int chr = rs.getInt("id");
                if (chr != 0) {
                    gm.add(chr);
                }
            }
            ps.close();
            rs.close();

            Sql = new StringBuilder();

            if (!gm.isEmpty()) {
                Sql.append("and characterid != ");
                for (int i = 0; i < gm.size(); i++) {
                    Sql.append(gm.get(i));
                    if (i < (gm.size() - 1)) {
                        Sql.append(" and characterid != ");
                    }
                }
            }

            ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE equipOnlyId > 0 " + Sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                int chr = rs.getInt("characterid");
                int ac = rs.getInt("accountid");
                int itemId = rs.getInt("itemId");
                long equipOnlyId = rs.getLong("equipOnlyId");
                long inventoryitemid = rs.getLong("inventoryitemid");
                if (equipOnlyId > 0) {
                    if (checkItems.containsKey(equipOnlyId)) {
                        if (((Integer) checkItems.get(equipOnlyId)) == itemId) {
                            equipOnlyIds.add(new Quadra(chr, ac, equipOnlyId, itemId));
                            addData(chr, inventoryitemid, equipOnlyId);
                        }
                    } else {
                        checkItems.put(equipOnlyId, itemId);
                    }
                }
            }

            rs.close();
            ps.close();

            final ListIterator<Quadra<Integer, Integer, Long, Integer>> OnlyId = equipOnlyIds.listIterator();
            while (OnlyId.hasNext()) {
                chrs = new StringBuilder();
                Quadra<Integer, Integer, Long, Integer> Only = OnlyId.next();
                long itemonly = Only.getThird();
                int item = Only.getForth();

                ps = con.prepareStatement("SELECT characterid FROM inventoryitems WHERE equipOnlyId = " + itemonly);
                rs = ps.executeQuery();
                while (rs.next()) {
                    int chr = rs.getInt("characterid");
                    if (chr != 0) {
                        chrs.append("角色 [").append(chr).append("]");
                    }
                }
                ps.close();
                rs.close();
                String itemname = "null";
                itemname = MapleItemInformationProvider.getInstance().getName(item);
                String msg = "发现复制,唯一ID [" + itemonly + "] " + chrs.toString() + " 物品[" + itemname + "](" + item + ")";
                System.out.println(msg);
                World.Broadcast.broadcastGMMessage((MaplePacketCreator.serverNotice(6, msg)));
                FileoutputUtil.logToFile("Hack/复制装备.txt",
                        FileoutputUtil.CurrentReadable_TimeGMT() + " " + msg + "\r\n");
            }

        } catch (SQLException ex) {
            System.out.println("[EXCEPTION] 复制装备出现错误." + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public static class run implements Runnable {

        public void run() {
            StartChecking();
        }
    }

}
