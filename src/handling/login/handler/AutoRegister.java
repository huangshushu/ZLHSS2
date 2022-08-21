package handling.login.handler;

import client.LoginCrypto;
import database.DBConPool;
import handling.login.LoginServer;
import handling.world.World;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;

public class AutoRegister {

    private static final int ACCOUNTS_PER_MAC = 1;
    public static boolean autoRegister = LoginServer.getAutoReg();
    public static boolean success = false;
    public static boolean mac = true;

    public static boolean getAccountExists(String login) {
        boolean accountExists = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT name FROM accounts WHERE name = ?");
            ps.setString(1, login);
            ResultSet rs = ps.executeQuery();
            if (rs.first()) {
                accountExists = true;
            }
        } catch (SQLException ex) {
            System.err.println("[getAccountExists]" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return accountExists;
    }

    public static void createAccount(String login, String pwd, String eip, String macs) {
        String sockAddr = eip;

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ResultSet rs;
            try (PreparedStatement ipc = con.prepareStatement("SELECT * FROM accounts WHERE macs = ?")) {
                ipc.setString(1, macs);
                rs = ipc.executeQuery();
                if (!rs.first() || rs.last() && rs.getRow() < ACCOUNTS_PER_MAC) {
                    try {
                        try (PreparedStatement ps = con.prepareStatement(
                                "INSERT INTO accounts (name, password, email, birthday, macs, SessionIP) VALUES (?, ?, ?, ?, ?, ?)")) {
                            Calendar c = Calendar.getInstance();
                            int year = c.get(Calendar.YEAR);
                            int month = c.get(Calendar.MONTH) + 1;
                            int dayOfMonth = c.get(Calendar.DAY_OF_MONTH);
                            ps.setString(1, login);
                            ps.setString(2, LoginCrypto.hexSha1(pwd));
                            ps.setString(3, "autoregister@mail.com");
                            ps.setString(4, year + "-" + month + "-" + dayOfMonth);// Created day
                            ps.setString(5, macs);
                            ps.setString(6, "/" + sockAddr.substring(1, sockAddr.lastIndexOf(':')));
                            ps.executeUpdate();
                        }
                        success = true;
                    } catch (SQLException ex) {
                        System.err.println("createAccount" + ex);
                        FileoutputUtil.outError("logs/资料库异常.txt", ex);
                        return;
                    }
                }
                if (rs.getRow() >= ACCOUNTS_PER_MAC) {
                    mac = false;
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] " + " IP：/"
                            + sockAddr.substring(1, sockAddr.lastIndexOf(':')) + " 注册次数超过" + ACCOUNTS_PER_MAC + "次"));
                    FileoutputUtil.logToFile("logs/Data/注册超过次数.txt", "\r\n " + FileoutputUtil.NowTime() + " IP：/"
                            + sockAddr.substring(1, sockAddr.lastIndexOf(':')) + " 注册次数超过" + ACCOUNTS_PER_MAC + "次");
                }
            }
            rs.close();
        } catch (SQLException ex) {
            System.err.println("[createAccount]" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }
}
