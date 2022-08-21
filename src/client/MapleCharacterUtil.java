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
package client;

import constants.GameConstants;
import database.DBConPool;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.Pair;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.regex.Pattern;

public class MapleCharacterUtil {

    private static final Pattern namePattern = Pattern.compile("[a-zA-Z0-9_-]{3,12}");
    private static final Pattern petPattern = Pattern.compile("[a-zA-Z0-9_-]{4,12}");

    public static final boolean canCreateChar(final String name) {
        return !(getIdByName(name) != -1 || !isEligibleCharName(name));
    }

    public static final boolean isEligibleCharName(final String name) {
        if (name.length() > 15) {
            return false;
        }
        if (name.length() < 2) {
            return false;
        }
        for (String z : GameConstants.RESERVED) {
            if (name.contains(z)) {
                return false;
            }
        }
        return true;
    }

    public static final boolean canChangePetName(final String name) {
        if (petPattern.matcher(name).matches()) {
            for (String z : GameConstants.RESERVED) {
                if (name.contains(z)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    public static final String makeMapleReadable(final String in) {
        String wui = in.replace('I', 'i');
        wui = wui.replace('l', 'L');
        wui = wui.replace("rn", "Rn");
        wui = wui.replace("vv", "Vv");
        wui = wui.replace("VV", "Vv");
        return wui;
    }

    public static final int getIdByName(final String name) {
        final int id;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT id FROM characters WHERE name = ?")) {
            ps.setString(1, name);
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    rs.close();
                    ps.close();
                    return -1;
                }
                id = rs.getInt("id");
            }
            return id;
        } catch (SQLException e) {
            System.err.println("error 'getIdByName' " + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return -1;
    }

    public static final boolean PromptPoll(final int accountid) {
        PreparedStatement ps = null;
        ResultSet rs = null;

        boolean prompt = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("SELECT * from game_poll_reply where AccountId = ?");
            ps.setInt(1, accountid);

            rs = ps.executeQuery();
            prompt = !rs.next();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
        }
        return prompt;
    }

    public static final boolean SetPoll(final int accountid, final int selection) {
        if (!PromptPoll(accountid)) { // Hacking OR spamming the db.
            return false;
        }

        PreparedStatement ps = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("INSERT INTO game_poll_reply (AccountId, SelectAns) VALUES (?, ?)");
            ps.setInt(1, accountid);
            ps.setInt(2, selection);

            ps.execute();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
        }
        return true;
    }

    private static boolean check_ifPasswordEquals(final String passhash, final String pwd, final String salt) {
        // Check if the passwords are correct here. :B
        if (LoginCryptoLegacy.isLegacyPassword(passhash) && LoginCryptoLegacy.checkPassword(pwd, passhash)) {
            // Check if a password upgrade is needed.
            return true;
        } else if (salt == null && LoginCrypto.checkSha1Hash(passhash, pwd)) {
            return true;
        } else if (LoginCrypto.checkSaltedSha512Hash(passhash, pwd, salt)) {
            return true;
        }
        return false;
    }

    // id accountid gender
    public static Pair<Integer, Pair<Integer, Integer>> getInfoByName(String name, int world) {

        Pair<Integer, Pair<Integer, Integer>> id;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT * FROM characters WHERE name = ? AND world = ?")) {
            ps.setString(1, name);
            ps.setInt(2, world);
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    rs.close();
                    ps.close();
                    return null;
                }
                id = new Pair<>(rs.getInt("id"), new Pair<>(rs.getInt("accountid"), rs.getInt("gender")));
            }

            return id;
        } catch (Exception e) {
            FilePrinter.printError("MapleCharacterUtil.txt", e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return null;
    }

    public static void setNXCodeUsed(String name, String code) throws SQLException {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("UPDATE nxcode SET `user` = ?, `valid` = 0 WHERE code = ?")) {
            ps.setString(1, name);
            ps.setString(2, code);
            boolean execute = ps.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public static void sendNote(String to, String name, String msg, int fame) {

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement(
                        "INSERT INTO notes (`to`, `from`, `message`, `timestamp`, `gift`) VALUES (?, ?, ?, ?, ?)")) {
            ps.setString(1, to);
            ps.setString(2, name);
            ps.setString(3, msg);
            ps.setLong(4, System.currentTimeMillis());
            ps.setInt(5, fame);
            ps.executeUpdate();

        } catch (SQLException e) {
            FilePrinter.printError("MapleCharacterUtil.txt", e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public static boolean getNXCodeValid(String code, boolean validcode) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT `valid` FROM nxcode WHERE code = ?")) {
            ps.setString(1, code);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    validcode = rs.getInt("valid") > 0;
                }
            }
        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacterUtil.txt", ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return validcode;
    }

    public static int getNXCodeType(String code) {
        int type = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("SELECT `type` FROM nxcode WHERE code = ?")) {
                ps.setString(1, code);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        type = rs.getInt("type");
                    }
                }
            }

        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacterUtil.txt", ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return type;
    }

    public static int getNXCodeItem(String code) {
        int item = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT `item` FROM nxcode WHERE code = ?")) {
            ps.setString(1, code);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    item = rs.getInt("item");
                }
            }

        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacterUtil.txt", ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return item;
    }

    public static int getNXCodeSize(String code) {
        int item = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT `size` FROM nxcode WHERE code = ?")) {
            ps.setString(1, code);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    item = rs.getInt("size");
                }
            }

        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacterUtil.txt", ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return item;
    }

    public static int getNXCodeTime(String code) {
        int item = -1;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT `time` FROM nxcode WHERE code = ?")) {
            ps.setString(1, code);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    item = rs.getInt("time");
                }
            }

        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacterUtil.txt", ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return item;
    }
}
