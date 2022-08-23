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
package client.inventory;

import client.MapleCharacter;
import database.DBConPool;
import server.MapleInventoryManipulator;
import tools.FilePrinter;
import tools.FileoutputUtil;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Comparator;

public class MapleRing implements Serializable {

    private static final long serialVersionUID = 9179541993413738579L;
    private final int ringId;
    private final int ringId2;
    private final int partnerId;
    private final int itemId;
    private String partnerName;
    private boolean equipped = false;

    private MapleRing(int id, int id2, int partnerId, int itemid, String partnerName) {
        this.ringId = id;
        this.ringId2 = id2;
        this.partnerId = partnerId;
        this.itemId = itemid;
        this.partnerName = partnerName;
    }

    public static MapleRing loadFromDb(int ringId) {
        return loadFromDb(ringId, false);
    }

    public static MapleRing loadFromDb(int ringId, boolean equipped) {
        MapleRing ret;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
             PreparedStatement ps = con.prepareStatement("SELECT * FROM rings WHERE ringId = ?")) {
            ps.setInt(1, ringId);
            try (ResultSet rs = ps.executeQuery()) {
                ret = null;
                if (rs.next()) {
                    ret = new MapleRing(ringId, rs.getInt("partnerRingId"), rs.getInt("partnerChrId"),
                            rs.getInt("itemid"), rs.getString("partnerName"));
                    ret.setEquipped(equipped);
                }
            }

            return ret;
        } catch (SQLException ex) {
            FilePrinter.printError("MapleRing.txt", ex, "loadFromDB");
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
            return null;
        }
    }

    public static void addToDB(int itemid, MapleCharacter chr, String player, int id, int[] ringId)
            throws SQLException {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO rings (ringId, itemid, partnerChrId, partnerName, partnerRingId) VALUES (?, ?, ?, ?, ?)");
            ps.setInt(1, ringId[0]);
            ps.setInt(2, itemid);
            ps.setInt(3, chr.getId());
            ps.setString(4, chr.getName());
            ps.setInt(5, ringId[1]);
            ps.executeUpdate();
            ps.close();

            ps = con.prepareStatement(
                    "INSERT INTO rings (ringId, itemid, partnerChrId, partnerName, partnerRingId) VALUES (?, ?, ?, ?, ?)");
            ps.setInt(1, ringId[1]);
            ps.setInt(2, itemid);
            ps.setInt(3, id);
            ps.setString(4, player);
            ps.setInt(5, ringId[0]);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public static int createRing(int itemid, MapleCharacter partner1, String partner2, String msg, int id2, int sn) {
        try {
            if (partner1 == null) {
                return -2;
            } else if (id2 <= 0) {
                return -1;
            }
            return makeRing(itemid, partner1, partner2, id2, msg, sn);
        } catch (Exception ex) {
            FilePrinter.printError("MapleRing.txt", ex, "createRing");
            return 0;
        }
    }

    public static int makeRing(int itemid, MapleCharacter partner1, String partner2, int id2, String msg, int sn)
            throws Exception { // return partner1 the id
        int[] ringID = {MapleInventoryIdentifier.getInstance(), MapleInventoryIdentifier.getInstance()};
        // [1] = partner1, [0] = partner2
        addToDB(itemid, partner1, partner2, id2, ringID);
        MapleInventoryManipulator.addRing(partner1, itemid, ringID[1], sn);
        partner1.getCashInventory().gift(id2, partner1.getName(), msg, sn, ringID[0]);
        return 1;
    }

    public int getRingId() {
        return ringId;
    }

    public int getPartnerRingId() {
        return ringId2;
    }

    public int getPartnerChrId() {
        return partnerId;
    }

    public int getItemId() {
        return itemId;
    }

    public boolean isEquipped() {
        return equipped;
    }

    public void setEquipped(boolean equipped) {
        this.equipped = equipped;
    }

    public String getPartnerName() {
        return partnerName;
    }

    public void setPartnerName(String partnerName) {
        this.partnerName = partnerName;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof MapleRing) {
            return ((MapleRing) o).getRingId() == getRingId();
        }
        return false;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 53 * hash + this.ringId;
        return hash;
    }

    public static void removeRingFromDB(MapleCharacter player) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM rings WHERE partnerChrId = ?");
            ps.setInt(1, player.getId());
            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                ps.close();
                rs.close();
                return;
            }
            int otherId = rs.getInt("partnerRingId");
            int otherotherId = rs.getInt("ringId");
            rs.close();
            ps.close();
            ps = con.prepareStatement("DELETE FROM rings WHERE ringId = ? OR ringId = ?");
            ps.setInt(1, otherotherId);
            ps.setInt(2, otherId);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            FilePrinter.printError("MapleRing.txt", ex, "removeRingFromDB");
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public static class RingComparator implements Comparator<MapleRing>, Serializable {

        @Override
        public int compare(MapleRing o1, MapleRing o2) {
            return Integer.compare(o1.ringId, o2.ringId);
        }
    }
}
