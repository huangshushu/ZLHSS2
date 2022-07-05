/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

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
package server.life;

import database.DBConPool;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.FileoutputUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class MapleMonsterInformationProvider {

    private static final MapleMonsterInformationProvider instance = new MapleMonsterInformationProvider();
    private final Map<Integer, String> mobCache = new HashMap<>();
    private final Map<Integer, List<MonsterDropEntry>> drops = new HashMap<>();
    private final List<MonsterGlobalDropEntry> globaldrops = new ArrayList<>();

    protected MapleMonsterInformationProvider() {
        retrieveGlobal();
    }

    public static final MapleMonsterInformationProvider getInstance() {
        return instance;
    }

    public final List<MonsterGlobalDropEntry> getGlobalDrop() {
        return globaldrops;
    }

    public Map<Integer, String> getAllMonsters() {
        if (mobCache.isEmpty()) {
            final MapleDataProvider stringData = MapleDataProviderFactory.getDataProvider("String.wz");
            MapleData mobsData = stringData.getData("Mob.img");
            for (MapleData itemFolder : mobsData.getChildren()) {
                mobCache.put(Integer.parseInt(itemFolder.getName()), MapleDataTool.getString("name", itemFolder, "NO-NAME"));
            }
        }
        return mobCache;
    }

    private void retrieveGlobal() {
        PreparedStatement ps = null;
        ResultSet rs = null;

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("SELECT * FROM drop_data_global WHERE chance > 0");
            rs = ps.executeQuery();

            while (rs.next()) {
                globaldrops.add(
                        new MonsterGlobalDropEntry(
                                rs.getInt("itemid"),
                                rs.getInt("chance"),
                                rs.getInt("continent"),
                                rs.getByte("dropType"),
                                rs.getInt("minimum_quantity"),
                                rs.getInt("maximum_quantity"),
                                rs.getShort("questid")));
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error retrieving drop" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException ignore) {
                FileoutputUtil.outError("logs/资料库异常.txt", ignore);
            }
        }
    }

    public final List<MonsterDropEntry> retrieveDrop(final int monsterId) {
        if (drops.containsKey(monsterId)) {
            return drops.get(monsterId);
        }
        final List<MonsterDropEntry> ret = new LinkedList<>();

        PreparedStatement ps = null;
        ResultSet rs = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("SELECT * FROM drop_data WHERE dropperid = ?");
            ps.setInt(1, monsterId);
            rs = ps.executeQuery();
            int itemid, chance;
            while (rs.next()) {
                itemid = rs.getInt("itemid");
                chance = rs.getInt("chance");
                /*if (GameConstants.getInventoryType(itemid) == MapleInventoryType.EQUIP) {
                 chance *= 10; //in GMS/SEA it was raised
                 }*/
                ret.add(new MonsterDropEntry(
                        itemid,
                        chance,
                        rs.getInt("minimum_quantity"),
                        rs.getInt("maximum_quantity"),
                        rs.getShort("questid")));
            }
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return ret;
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException ignore) {
                FileoutputUtil.outError("logs/资料库异常.txt", ignore);
                return ret;
            }
        }
        drops.put(monsterId, ret);
        return ret;
    }

    public final void clearDrops() {
        drops.clear();
        globaldrops.clear();
        retrieveGlobal();
    }

    public int getDropQuest(int monsterId) {
        int quest = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT questid FROM drop_data where dropperid = ?");
            ps.setInt(1, monsterId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                quest = rs.getInt("questid");
            }
        } catch (SQLException e) {
            System.out.println("Error getDropQuest" + e);
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
        }
        return quest;
    }

    public List<Integer> getMobByItem(final int itemId) {
        final List<Integer> mobs = new LinkedList<>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("SELECT * FROM drop_data WHERE itemid = ?");
            ps.setInt(1, itemId);
            rs = ps.executeQuery();
            int mobid;
            while (rs.next()) {
                mobid = rs.getInt("dropperid");
                if (!mobs.contains(mobid)) {
                    mobs.add(mobid);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error getMobByItem" + e);
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException ignore) {
                System.out.println("Error getMobByItem" + ignore);
                FileoutputUtil.outputFileError("logs/资料库异常.txt", ignore);
                return null;
            }
        }
        return mobs;
    }

    public int getDropChance(int monsterId) {
        int chance = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT chance FROM drop_data where dropperid = ?");
            ps.setInt(1, monsterId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {

                chance = rs.getInt("chance");

            }
        } catch (SQLException e) {
            System.out.println("Error getDropChance" + e);
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
        }
        return chance;
    }

    public void UpdateDropChance(int chance, int dropperid, int itemid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("UPDATE drop_data SET chance = ? WHERE dropperid = ? AND itemid = ?")) {
            ps.setInt(1, chance);
            ps.setInt(2, dropperid);
            ps.setInt(3, itemid);
            ps.executeUpdate();
        } catch (SQLException ex) {
            System.out.println("Error UpdateDropChance" + ex);
            FileoutputUtil.outputFileError("logs/更新爆率几率异常.txt", ex);
        }
    }

    public void AddDropData(int chance, int dropperid, int itemid, int questid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("INSERT INTO drop_data SET chance = ? , dropperid = ? , itemid = ?, questid = ?")) {
            ps.setInt(1, chance);
            ps.setInt(2, dropperid);
            ps.setInt(3, itemid);
            ps.setInt(4, questid);
            //   System.out.println(chance+" "+dropperid+" "+itemid+" "+questid);
            ps.executeUpdate();
        } catch (SQLException ex) {
            System.out.println("Error AddDropData" + ex);
            FileoutputUtil.outputFileError("logs/添加爆率异常.txt", ex);
        }
    }

    public void DeleteDropData(int dropperid, int itemid) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps = con.prepareStatement("DELETE FROM drop_data WHERE dropperid = ? AND itemid = ?")) {
            ps.setInt(1, dropperid);
            ps.setInt(2, itemid);
            ps.executeUpdate();
        } catch (SQLException ex) {
            System.out.println("Error DeleteDropData" + ex);
            FileoutputUtil.outputFileError("logs/删除爆率异常.txt", ex);
        }
    }
}
