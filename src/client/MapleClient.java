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

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.script.ScriptEngine;

import constants.ServerConstants.PlayerGMRank;
import database.DBConPool;
import database.DatabaseException;
import handling.MapleServerHandler;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.world.MapleMessengerCharacter;
import handling.world.MapleParty;
import handling.world.MaplePartyCharacter;
import handling.world.PartyOperation;
import handling.world.World;
import handling.world.family.MapleFamilyCharacter;
import handling.world.guild.MapleGuildCharacter;
import io.netty.channel.Channel;
import io.netty.util.AttributeKey;
import server.Timer.PingTimer;
import server.maps.MapleMap;
import server.quest.MapleQuest;
import server.shops.IMaplePlayerShop;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.HexTool;
import tools.MapleAESOFB;
import tools.MaplePacketCreator;
import tools.packet.LoginPacket;

public class MapleClient {

    public static final transient byte LOGIN_NOTLOGGEDIN = 0;
    public static final transient byte LOGIN_SERVER_TRANSITION = 1;
    public static final transient byte LOGIN_LOGGEDIN = 2;
    public static final transient byte LOGIN_WAITING = 3;
    public static final transient byte CASH_SHOP_TRANSITION = 4;
    public static final transient byte LOGIN_CS_LOGGEDIN = 5;
    public static final transient byte CHANGE_CHANNEL = 6;
    public static final int DEFAULT_CHARSLOT = 3;
    public static final AttributeKey<MapleClient> CLIENT_KEY = AttributeKey.valueOf("Client");
    private final MapleAESOFB send, receive;
    private final Channel session;
    private MapleCharacter player;
    private int accountId = 1;
    private String accountName;
    private int world = 1;
    private int channel = 1;
    private int birthday;
    private int charslots = DEFAULT_CHARSLOT;
    private boolean loggedIn = false, serverTransition = false, canloginpw = false;
    private transient Calendar tempban = null;
    private transient long lastPong = 0, lastPing = 0;
    private boolean monitored = false, receiving = true;
    private int gmLevel;
    private short vip;
    private byte bannedReason = 1, gender = -1;
    public transient short loginAttempt = 0;
    private final transient List<Integer> allowedChar = new LinkedList<>();
    private final transient Set<String> macs = new HashSet<>();
    private final transient Map<String, ScriptEngine> engines = new HashMap<>();
    private transient ScheduledFuture<?> idleTask = null;
    private transient String secondPassword; // To be used only on login
    private final transient Lock mutex = new ReentrantLock(true);
    private final transient Lock npcMutex = new ReentrantLock();
    private long lastNpcClick = 0, lastLoginTime;
    private final static Lock loginMutex = new ReentrantLock(true);
    private String loginKey;
    private String serverKey;
    private int loginKeya = 0;
    private boolean closeseesion = false;

    public MapleClient(MapleAESOFB send, MapleAESOFB receive, Channel session) {
        this.send = send;
        this.receive = receive;
        this.session = session;
    }

    public final MapleAESOFB getReceiveCrypto() {
        return receive;
    }

    public final MapleAESOFB getSendCrypto() {
        return send;
    }

    public final Channel getSession() {
        return session;
    }

    public final Lock getLock() {
        return mutex;
    }

    public final Lock getNPCLock() {
        return npcMutex;
    }

    public MapleCharacter getPlayer() {
        return player;
    }

    public void setPlayer(MapleCharacter player) {
        this.player = player;
    }

    public void createdChar(final int id) {
        allowedChar.add(id);
    }

    public final boolean login_Auth(final int id) {
        return allowedChar.contains(id);
    }

    public final List<MapleCharacter> loadCharacters(final int serverId) { // TODO make this less costly zZz
        final List<MapleCharacter> chars = new LinkedList<>();

        for (final CharNameAndId cni : loadCharactersInternal(serverId)) {
            final MapleCharacter chr = MapleCharacter.loadCharFromDB(cni.id, this, false);
            chars.add(chr);
            allowedChar.add(chr.getId());
        }
        return chars;
    }

    public List<String> loadCharacterNames(int serverId) {
        List<String> chars = new LinkedList<>();
        for (CharNameAndId cni : loadCharactersInternal(serverId)) {
            chars.add(cni.name);
        }
        return chars;
    }

    private List<CharNameAndId> loadCharactersInternal(int serverId) {
        List<CharNameAndId> chars = new LinkedList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT id, name FROM characters WHERE accountid = ? AND world = ?")) {
            ps.setInt(1, accountId);
            ps.setInt(2, serverId);

            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    chars.add(new CharNameAndId(rs.getString("name"), rs.getInt("id")));
                }
            }

        } catch (SQLException e) {
            System.err.println("error loading characters internal" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return chars;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    private Calendar getTempBanCalendar(ResultSet rs) throws SQLException {
        Calendar lTempban = Calendar.getInstance();
        if (rs.getLong("tempban") == 0) { // basically if timestamp in db is 0000-00-00
            lTempban.setTimeInMillis(0);
            return lTempban;
        }
        Calendar today = Calendar.getInstance();
        lTempban.setTimeInMillis(rs.getTimestamp("tempban").getTime());
        if (today.getTimeInMillis() < lTempban.getTimeInMillis()) {
            return lTempban;
        }

        lTempban.setTimeInMillis(0);
        return lTempban;
    }

    public Calendar getTempBanCalendar() {
        return tempban;
    }

    public byte getBanReason() {
        return bannedReason;
    }

    public boolean isBannedIP(String ip) {
        boolean ret = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT COUNT(*) FROM ipbans WHERE ? LIKE CONCAT(ip, '%')")) {
            ps.setString(1, ip);
            try (ResultSet rs = ps.executeQuery()) {
                rs.next();
                if (rs.getInt(1) > 0) {
                    ret = true;
                }
            }
        } catch (SQLException ex) {
            System.err.println("Error checking ip bans" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    public boolean hasBannedIP() {
        boolean ret = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT COUNT(*) FROM ipbans WHERE ? LIKE CONCAT(ip, '%')")) {
            ps.setString(1, getSessionIPAddress());
            try (ResultSet rs = ps.executeQuery()) {
                rs.next();
                if (rs.getInt(1) > 0) {
                    ret = true;
                }
            }

        } catch (SQLException ex) {
            System.err.println("Error checking ip bans" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    /**
     * Returns 0 on success, a state to be used for
     * {@link MaplePacketCreator#getLoginFailed(int)} otherwise.
     *
     * @return The state of the login.
     */
    public int finishLogin() {

        loginMutex.lock();
        try {
            final byte state = getLoginState();
            if (state > MapleClient.LOGIN_NOTLOGGEDIN && state != MapleClient.LOGIN_WAITING) { // already loggedin
                loggedIn = false;
                return 7;
            }
            updateLoginState(MapleClient.LOGIN_LOGGEDIN, getSessionIPAddress());
        } finally {
            loginMutex.unlock();
        }
        return 0;
    }

    public int login(String account, String password, boolean isIPBanned) {
        int loginok = 5;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement(
                    "SELECT id, banned, password, salt, macs, 2ndpassword, gm, vip, greason, tempban, gender, SessionIP FROM accounts WHERE name = ?")) {
                ps.setString(1, account);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        final int banned = rs.getInt("banned");
                        final String passhash = rs.getString("password");
                        final String salt = rs.getString("salt");
                        final String oldSession = rs.getString("SessionIP");
                        accountId = rs.getInt("id");
                        // macs = rs.getString("macs");
                        secondPassword = rs.getString("2ndpassword");
                        gmLevel = rs.getInt("gm");
                        vip = rs.getShort("vip");
                        bannedReason = rs.getByte("greason");
                        tempban = getTempBanCalendar(rs);
                        gender = rs.getByte("gender");

                        ps.close();

                        if (banned > 0 && !isGm()) {
                            loginok = 3;
                        } else {
                            if (banned == -1) {
                                unban();
                            }
                            byte loginstate = getLoginState();
                            // if (loginstate > MapleClient.LOGIN_NOTLOGGEDIN) { // already loggedin
                            // loggedIn = false;
                            // loginok = 7;
                            // } else {
                            boolean updatePasswordHash = false;
                            // Check if the passwords are correct here. :B
                            if (LoginCryptoLegacy.isLegacyPassword(passhash)
                                    && LoginCryptoLegacy.checkPassword(password, passhash)) {
                                // Check if a password upgrade is needed.
                                loginok = 0;
                                updatePasswordHash = true;
                            } else if (salt == null && LoginCrypto.checkSha1Hash(passhash, password)) {
                                loginok = 0;
                                updatePasswordHash = true;
                            } else if (password.equals(passhash)) {
                                // 检查密码是否未做任何加密
                                loginok = 0;
                                updatePasswordHash = true;
                            } else if (LoginCrypto.checkSaltedSha512Hash(passhash, password, salt)) {
                                loginok = 0;
                            } else {
                                loggedIn = false;
                                loginok = 4;
                            }
                            if (loginok == 0) {
                                ChannelServer.forceRemovePlayerByAccId(this, accountId);
                                this.updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN, this.getSessionIPAddress());
                            }
                            // }
                        }
                    }
                }
            }

        } catch (SQLException e) {
            System.err.println("ERROR" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        if (loginok == 0) {
            canloginpw = true;
            lastLoginTime = System.currentTimeMillis();
        }
        return loginok;
    }

    public void loadVip(int accountID) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            ps = con.prepareStatement("SELECT vip FROM accounts WHERE id = ?");
            ps.setInt(1, accountID);
            rs = ps.executeQuery();
            if (rs.next()) {
                vip = rs.getShort("vip");
                ps.close();
                rs.close();
            }
        } catch (SQLException e) {
            FilePrinter.printError("MapleClient.txt", e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        } finally {
            try {
                if (ps != null && !ps.isClosed()) {
                    ps.close();
                }
                if (rs != null && !rs.isClosed()) {
                    rs.close();
                }
            } catch (SQLException e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
        }
    }

    public final void update2ndPassword() {
        try {
            MessageDigest digester = MessageDigest.getInstance("SHA-1");
            digester.update(secondPassword.getBytes("UTF-8"), 0, secondPassword.length());
            String hash = HexTool.toString(digester.digest()).replace(" ", "").toLowerCase();
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con
                            .prepareStatement("UPDATE `accounts` SET `2ndpassword` = ? WHERE id = ?")) {
                ps.setString(1, hash);
                ps.setInt(2, accountId);
                ps.executeUpdate();

            } catch (SQLException ex) {
                FilePrinter.printError("MapleClient.txt", ex);
                FileoutputUtil.outError("logs/资料库异常.txt", ex);

            }
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException ex) {
            Logger.getLogger(MapleClient.class.getName()).log(Level.SEVERE, null, ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);

        }
    }

    private void unban() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con
                    .prepareStatement("UPDATE accounts SET banned = 0 and banreason = '' WHERE id = ?")) {
                ps.setInt(1, accountId);
                ps.executeUpdate();
            }
        } catch (SQLException e) {
            System.err.println("Error while unbanning" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public static final byte unban(String charname) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);

            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("UPDATE accounts SET banned = 0 and banreason = '' WHERE id = ?");
            ps.setInt(1, accid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error while unbanning" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return -2;
        }
        return 0;
    }

    public void setAccID(int id) {
        this.accountId = id;
    }

    public int getAccID() {
        return this.accountId;
    }

    public final void updateLoginState(final int newstate, final String SessionID) { // TODO hide?
        // System.out.println(("UPDATE:" + String.valueOf(newstate)));
        loginMutex.lock();
        try {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con.prepareStatement(
                            "UPDATE accounts SET loggedin = ?, SessionIP = ?, lastlogin = CURRENT_TIMESTAMP() WHERE id = ?")) {
                ps.setInt(1, newstate);
                ps.setString(2, SessionID);
                ps.setInt(3, getAccID());
                ps.executeUpdate();

            } catch (SQLException e) {
                System.err.println("更新登入状态错误" + e);
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
            if (newstate == MapleClient.LOGIN_NOTLOGGEDIN || newstate == MapleClient.LOGIN_WAITING) {
                loggedIn = false;
                serverTransition = false;
            } else {
                serverTransition = (newstate == MapleClient.LOGIN_SERVER_TRANSITION
                        || newstate == MapleClient.CHANGE_CHANNEL);
                loggedIn = !serverTransition;
            }
        } finally {
            loginMutex.unlock();
        }
    }

    /*
     * public final void updateSecondPassword() {
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
     * =
     * con.prepareStatement("UPDATE `accounts` SET `2ndpassword` = ? WHERE id = ?"))
     * {
     * ps.setString(1, LoginCrypto.hexSha1(this.secondPassword));
     * ps.setInt(2, accountId);
     * ps.executeUpdate();
     * } catch (SQLException e) {
     * System.err.println("更新第二组密码错误" + e);
     * FileoutputUtil.outError("logs/资料库异常.txt", e);
     * }
     * }
     */
    public final void updateGender() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE `accounts` SET `gender` = ? WHERE id = ?")) {
            ps.setInt(1, gender);
            ps.setInt(2, accountId);
            ps.executeUpdate();

        } catch (SQLException e) {
            System.err.println("更新性别错误" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public final byte getLoginState() { // TODO hide?
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps;
            ps = con.prepareStatement(
                    "SELECT loggedin, lastlogin, `birthday` + 0 AS `bday` FROM accounts WHERE id = ?");
            ps.setInt(1, getAccID());
            byte state;
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    ps.close();
                    throw new DatabaseException("Everything sucks");
                }
                birthday = rs.getInt("bday");
                state = rs.getByte("loggedin");

                if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
                    if (rs.getTimestamp("lastlogin").getTime() + 70000 < System.currentTimeMillis()) { // connecting to
                                                                                                       // chanserver
                                                                                                       // timeout
                        state = MapleClient.LOGIN_NOTLOGGEDIN;
                        updateLoginState(state, getSessionIPAddress());
                    }
                }
            }
            ps.close();
            loggedIn = state == MapleClient.LOGIN_LOGGEDIN;
            return state;
        } catch (SQLException e) {
            loggedIn = false;
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            throw new DatabaseException("登入状态获取失败", e);
        }
    }

    public final boolean checkBirthDate(final int date) {
        return birthday == date;
    }

    public final void removalTask(boolean shutdown) {
        try {
            // try {
            // player.updateBuffTime();

            // } catch (final Exception e) {
            // FileoutputUtil.outputFileError("logs/buff记录时间异常.txt", e);
            // }
            player.cancelAllBuffs_();
            player.cancelAllDebuffs();
            player.cancelAllSkillID();
            if (player.getMarriageId() > 0) {
                final MapleQuestStatus stat1 = player.getQuestNAdd(MapleQuest.getInstance(160001));
                final MapleQuestStatus stat2 = player.getQuestNAdd(MapleQuest.getInstance(160002));
                if (stat1.getCustomData() != null
                        && (stat1.getCustomData().equals("2_") || stat1.getCustomData().equals("2"))) {
                    // dc in process of marriage
                    if (stat2.getCustomData() != null) {
                        stat2.setCustomData("0");
                    }
                    stat1.setCustomData("3");
                }
            }
            player.changeRemoval(true);
            if (player.getEventInstance() != null) {
                player.getEventInstance().playerDisconnected(player, player.getId());
            }
            if (player.getMap() != null) {
                switch (player.getMapId()) {
                    case 541010100: // latanica
                    case 541020800: // scar/targa
                    case 551030200: // krexel
                    case 220080001: // pap
                    case 240060000:
                    case 240060100:
                    case 240060200:
                        player.getMap().addDisconnected(player.getId());
                        break;
                }
                player.getMap().removePlayer(player);
            }
            /*
             * synchronized (this) {//精灵商人东西修复
             * final IMaplePlayerShop shop = player.getPlayerShop();
             * if (shop != null) {
             * shop.removeVisitor(player);
             * if (shop.isOwner(player)) {
             * if (shop.getShopType() == 1 && shop.isAvailable() && !shutdown) {
             * shop.setOpen(true);
             * } else {
             * shop.closeShop(true, !shutdown);
             * }
             * }
             * }
             * }
             */
            final IMaplePlayerShop shop = player.getPlayerShop();
            if (shop != null) {
                shop.removeVisitor(player);
                if (shop.isOwner(player)) {
                    if (shop.getShopType() == 1 && shop.isAvailable() && !shutdown) {
                        shop.setOpen(true);
                    } else {
                        shop.closeShop(true, !shutdown);
                    }
                }
            }
            player.setMessenger(null);
            if (player.getAntiMacro().inProgress()) {
                player.getAntiMacro().end();
            }
        } catch (final Throwable e) {
            FilePrinter.printError(FilePrinter.AccountStuck, e);
        }
    }

    public final void disconnect(final boolean RemoveInChannelServer, final boolean fromCS) {
        disconnect(RemoveInChannelServer, fromCS, false);
    }

    public final void disconnect(final boolean RemoveInChannelServer, final boolean fromCS, final boolean shutdown) {
        try {
            if (player != null) {
                MapleMap map = player.getMap();
                final MapleParty party = player.getParty();
                final boolean clone = player.isClone();
                final String namez = player.getName();
                final boolean hidden = player.isHidden();
                final int gmLevel = player.getGMLevel();
                final int idz = player.getId(),
                        messengerid = player.getMessenger() == null ? 0 : player.getMessenger().getId(),
                        gid = player.getGuildId(),
                        fid = player.getFamilyId();
                final BuddyList bl = player.getBuddylist();
                final MaplePartyCharacter chrp = new MaplePartyCharacter(player);
                final MapleMessengerCharacter chrm = new MapleMessengerCharacter(player);
                final MapleGuildCharacter chrg = player.getMGC();
                final MapleFamilyCharacter chrf = player.getMFC();

                removalTask(shutdown);
                try {
                    player.saveToDB(true, fromCS);
                } catch (Exception ex) {
                    FileoutputUtil.logToFile("logs/下线保存数据异常.txt",
                            "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                    + getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + getAccountName()
                                    + " 帐号ID " + getAccID() + " 角色名 " + player.getName() + " 角色ID " + player.getId());
                    FileoutputUtil.outError("logs/下线保存数据异常.txt", ex);
                }
                if (shutdown) {
                    player = null;
                    receiving = false;
                    return;
                }

                if (!fromCS) {
                    final ChannelServer ch = ChannelServer.getInstance(map == null ? channel : map.getChannel());
                    try {
                        if (ch == null || clone || ch.isShutdown()) {
                            player = null;
                            return;// no idea
                        }
                        if (messengerid > 0) {
                            World.Messenger.leaveMessenger(messengerid, chrm);
                        }
                        if (party != null) {
                            chrp.setOnline(false);
                            World.Party.updateParty(party.getId(), PartyOperation.LOG_ONOFF, chrp);
                            if (map != null && party.getLeader().getId() == idz) {
                                MaplePartyCharacter lchr = null;
                                for (MaplePartyCharacter pchr : party.getMembers()) {
                                    if (pchr != null && map.getCharacterById(pchr.getId()) != null
                                            && (lchr == null || lchr.getLevel() < pchr.getLevel())) {
                                        lchr = pchr;
                                    }
                                }
                                if (lchr != null) {
                                    World.Party.updateParty(party.getId(), PartyOperation.CHANGE_LEADER_DC, lchr);
                                }
                            }
                        }
                        if (bl != null) {
                            if (!serverTransition && isLoggedIn()) {
                                World.Buddy.loggedOff(namez, idz, channel, bl.getBuddiesIds(), gmLevel, hidden);
                            } else { // Change channel
                                World.Buddy.loggedOn(namez, idz, channel, bl.getBuddiesIds(), gmLevel, hidden);
                            }
                        }
                        if (gid > 0) {
                            World.Guild.setGuildMemberOnline(chrg, false, -1);
                        }
                        if (fid > 0) {
                            World.Family.setFamilyMemberOnline(chrf, false, -1);
                        }
                    } catch (final Exception e) {
                        FilePrinter.printError(FilePrinter.AccountStuck, e);

                    } finally {
                        if (RemoveInChannelServer && ch != null) {
                            ch.removePlayer(idz, namez);
                        }

                        player = null;
                    }
                } else {
                    final int ch = World.Find.findChannel(idz);
                    if (ch > 0) {
                        disconnect(RemoveInChannelServer, false);// u lie
                        return;
                    }
                    try {
                        if (party != null) {
                            chrp.setOnline(false);
                            World.Party.updateParty(party.getId(), PartyOperation.LOG_ONOFF, chrp);
                        }
                        if (!serverTransition && isLoggedIn()) {
                            World.Buddy.loggedOff(namez, idz, channel, bl.getBuddiesIds(), gmLevel, hidden);
                        } else { // Change channel
                            World.Buddy.loggedOn(namez, idz, channel, bl.getBuddiesIds(), gmLevel, hidden);
                        }
                        if (gid > 0) {
                            World.Guild.setGuildMemberOnline(chrg, false, -1);
                        }
                        if (player != null) {
                            player.setMessenger(null);
                        }
                    } catch (final Exception e) {
                        FilePrinter.printError(FilePrinter.AccountStuck, e);

                    } finally {
                        if ((RemoveInChannelServer && ch > 0) || (RemoveInChannelServer && ch == -10)) {
                            // if (RemoveInChannelServer && ch == -10) {
                            CashShopServer.getPlayerStorage().deregisterPlayer(idz, namez);
                        }
                        player = null;
                    }
                }
            }

            if (!serverTransition && isLoggedIn()) {
                updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN, getSessionIPAddress());
            }
            engines.clear();
        } catch (Exception ex) {
            FileoutputUtil.logToFile("logs/下线处理异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: " + getSession().remoteAddress().toString().split(":")[0]
                            + " 帐号 " + getAccountName() + " 帐号ID " + getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId());

            FileoutputUtil.outError("logs/下线处理异常.txt", ex);
        }
    }

    public final String getSessionIPAddress() {
        if (session != null && session.remoteAddress() != null) {
            return session.remoteAddress().toString().split(":")[0];
        } else {
            return getLastIPAddress();
        }
    }

    public final String getLastIPAddress() {
        String sessionIP = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement("SELECT SessionIP FROM accounts WHERE id = ?")) {
                ps.setInt(1, this.accountId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        sessionIP = rs.getString("SessionIP");
                    }
                }
            }
        } catch (final SQLException e) {
            System.err.println("Failed in checking IP address for client.");
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return sessionIP == null ? "" : sessionIP;
    }

    public final boolean CheckIPAddress() {
        boolean canlogin = false;
        final String sessionIP = getLastIPAddress();
        if (!sessionIP.isEmpty()) { // Probably a login proced skipper?
            canlogin = getSessionIPAddress().equals(sessionIP.split(":")[0]);
        }
        return canlogin;
    }

    public final void DebugMessage(final StringBuilder sb) {
        sb.append(getSession().remoteAddress());
        sb.append(" Connected: ");
        sb.append(getSession().isActive());
        sb.append(" ClientKeySet: ");
        sb.append(getSession().attr(MapleClient.CLIENT_KEY).get() != null);
        sb.append(" loggedin: ");
        sb.append(isLoggedIn());
        sb.append(" has char: ");
        sb.append(getPlayer() != null);
    }

    public final int getChannel() {
        return channel;
    }

    public final ChannelServer getChannelServer() {
        return ChannelServer.getInstance(channel);
    }

    public final int deleteCharacter(final int cid) {
        String name = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = null;
            ResultSet rs;
            ps = con.prepareStatement("select name from characters where id = ?");
            ps.setInt(1, cid);
            rs = ps.executeQuery();
            while (rs.next()) {
                name = rs.getString("name");
            }
            ps.close();
            rs.close();
        } catch (Exception ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }

        FileoutputUtil.logToFile("Logs/Data/角色删除.txt", FileoutputUtil.NowTime() + " 帐号: " + accountName + "("
                + this.accountId + ") 角色: " + cid + " (" + name + ") IP: " + getSessionIPAddress() + " \r\n");

        Set<Integer> channels = ChannelServer.getAllChannels();
        for (Integer ch : channels) {
            MapleCharacter chr = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterById(cid);
            if (chr != null) {
                ChannelServer.getInstance(ch).removePlayer(chr);
            }
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement(
                    "SELECT guildid, guildrank, familyid, name FROM characters WHERE id = ? AND accountid = ?")) {
                ps.setInt(1, cid);
                ps.setInt(2, accountId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (!rs.next()) {
                        rs.close();
                        ps.close();
                        return 1;
                    }
                    if (rs.getInt("guildid") > 0) { // is in a guild when deleted
                        if (rs.getInt("guildrank") == 1) { // cant delete when leader
                            rs.close();
                            ps.close();
                            return 1;
                        }
                        World.Guild.deleteGuildCharacter(rs.getInt("guildid"), cid);
                    }
                    if (rs.getInt("familyid") > 0) {
                        World.Family.getFamily(rs.getInt("familyid")).leaveFamily(cid);
                    }
                }
            }

            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM characters WHERE id = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM monsterbook WHERE charid = ?", cid);
            // MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM hiredmerch WHERE
            // characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM mts_cart WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM mts_items WHERE characterid = ?", cid);
            // MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM cheatlog WHERE
            // characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM mountdata WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM inventoryitems WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM famelog WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM famelog WHERE characterid_to = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM dueypackages WHERE RecieverId = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM wishlist WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM buddies WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM buddies WHERE buddyid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM keymap WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM savedlocations WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM skills WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM mountdata WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM skillmacros WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM trocklocations WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM queststatus WHERE characterid = ?", cid);
            MapleCharacter.deleteWhereCharacterId(con, "DELETE FROM inventoryslot WHERE characterid = ?", cid);
            return 0;
        } catch (Exception e) {
            FilePrinter.printError("MapleCharacter.txt", e, "deleteCharacter");
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return 1;
    }

    public final byte getGender() {
        return gender;
    }

    public final void setGender(final byte gender) {
        this.gender = gender;
    }

    public final String getSecondPassword() {
        return secondPassword;
    }

    public boolean getCheckSecondPassword(String in) {
        boolean allow = false;
        if (LoginCrypto.checkSha1Hash(secondPassword, in)) {
            allow = true;
        }
        return allow;
    }

    public final void updateSecondPassword() {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {

            // PreparedStatement ps = con.prepareStatement("UPDATE `accounts` SET
            // `2ndpassword` = ?, `salt2` = ? WHERE id = ?");
            PreparedStatement ps = con.prepareStatement("UPDATE `accounts` SET `2ndpassword` = ? WHERE id = ?");
            // final String newSalt = LoginCrypto.makeSalt();
            // ps.setString(1,
            // LoginCrypto.rand_s(LoginCrypto.makeSaltedSha512Hash(secondPassword,
            // newSalt)));
            ps.setString(1, LoginCrypto.hexSha1(secondPassword));
            // ps.setString(2, newSalt);
            ps.setInt(2, accountId);
            ps.executeUpdate();
            ps.close();

        } catch (SQLException e) {
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
            System.err.println("error updating login state" + e);
        }
    }

    public final void setSecondPassword(final String secondPassword) {
        this.secondPassword = secondPassword;
    }

    public boolean check2ndPassword(String secondPassword) {
        boolean allow = false;
        // Check if the passwords are correct here. :B
        if (checkHash(this.secondPassword, "SHA-1", secondPassword)) {
            allow = true;
        }
        return allow;
    }

    public static boolean checkHash(String hash, String type, String password) {
        try {
            MessageDigest digester = MessageDigest.getInstance(type);
            digester.update(password.getBytes("UTF-8"), 0, password.length());
            return HexTool.toString(digester.digest()).replace(" ", "").toLowerCase().equals(hash);
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            throw new RuntimeException("Encoding the string failed", e);
        }
    }

    public final String getAccountName() {
        return accountName;
    }

    public final void setAccountName(final String accountName) {
        this.accountName = accountName;
    }

    public final void setChannel(final int channel) {
        this.channel = channel;
    }

    public final int getWorld() {
        return world;
    }

    public final void setWorld(final int world) {
        this.world = world;
    }

    public final int getLatency() {
        return (int) (lastPong - lastPing);
    }

    public final long getLastPong() {
        return lastPong;
    }

    public final long getLastPing() {
        return lastPing;
    }

    public final void pongReceived() {
        lastPong = System.currentTimeMillis();
    }

    public final void sendPing() {
        lastPing = System.currentTimeMillis();
        session.writeAndFlush(LoginPacket.getPing());
        PingTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                try {
                    if (getLatency() < 0) {
                        closeseesion = true;
                        MapleClient.this.setReceiving(false);
                        MapleClient.this.updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN,
                                MapleClient.this.getSessionIPAddress());
                        getSession().close();
                    }
                } catch (final NullPointerException e) {
                    closeseesion = true;
                    getSession().close();
                }
            }
        }, 30 * 1000); // note: idletime gets added to this too
    }

    public boolean canClickNPC() {
        return lastNpcClick + 500 < System.currentTimeMillis();
    }

    public void setClickedNPC() {
        lastNpcClick = System.currentTimeMillis();
    }

    public void removeClickedNPC() {
        lastNpcClick = 0;
    }

    /*
     * public final void sendPing() {
     * lastPing = System.currentTimeMillis();
     * session.writeAndFlush(LoginPacket.getPing());
     * 
     * PingTimer.getInstance().schedule(new Runnable() {
     * 
     * @Override
     * public void run() {
     * try {
     * if (getLatency() < 0) {
     * disconnect(true, false);
     * if (getSession().isActive()) {
     * getSession().close();
     * System.out.println("[心跳包] Ping超时.");
     * }
     * }
     * } catch (final NullPointerException e) {
     * System.out.println("[心跳包] Ping超时.");
     * FileoutputUtil.outputFileError("logs/Ping超时.txt", e);
     * // client already gone
     * }
     * }
     * }, 60 * 1000); // note: idletime gets added to this too
     * }
     */
    public static final String getLogMessage(final MapleClient cfor, final String message) {
        return getLogMessage(cfor, message, new Object[0]);
    }

    public static final String getLogMessage(final MapleCharacter cfor, final String message) {
        return getLogMessage(cfor == null ? null : cfor.getClient(), message);
    }

    public static final String getLogMessage(final MapleCharacter cfor, final String message, final Object... parms) {
        return getLogMessage(cfor == null ? null : cfor.getClient(), message, parms);
    }

    public static final String getLogMessage(final MapleClient cfor, final String message, final Object... parms) {
        final StringBuilder builder = new StringBuilder();
        if (cfor != null) {
            if (cfor.getPlayer() != null) {
                builder.append("<");
                builder.append(MapleCharacterUtil.makeMapleReadable(cfor.getPlayer().getName()));
                builder.append(" (cid: ");
                builder.append(cfor.getPlayer().getId());
                builder.append(")> ");
            }
            if (cfor.getAccountName() != null) {
                builder.append("(Account: ");
                builder.append(cfor.getAccountName());
                builder.append(") ");
            }
        }
        builder.append(message);
        int start;
        for (final Object parm : parms) {
            start = builder.indexOf("{}");
            builder.replace(start, start + 2, parm.toString());
        }
        return builder.toString();
    }

    public static final int findAccIdForCharacterName(final String charName) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int ret;
            try (PreparedStatement ps = con.prepareStatement("SELECT accountid FROM characters WHERE name = ?")) {
                ps.setString(1, charName);
                try (ResultSet rs = ps.executeQuery()) {
                    ret = -1;
                    if (rs.next()) {
                        ret = rs.getInt("accountid");
                    }
                }
            }
            return ret;
        } catch (final SQLException e) {
            System.err.println("findAccIdForCharacterName SQL error");
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return -1;
    }

    public boolean isGm() {
        return gmLevel > PlayerGMRank.普通玩家.getLevel();
    }

    public boolean isSuperGM() {
        return gmLevel >= PlayerGMRank.超级管理员.getLevel();
    }

    public boolean isGod() {
        return gmLevel >= PlayerGMRank.神.getLevel();
    }

    public int getGmLevel() {
        return gmLevel;
    }

    public final void setGmLevel(int gmLevel) {
        this.gmLevel = gmLevel;
    }

    public void setVip(int x) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps;
            ps = con.prepareStatement("Update Accounts set vip = ? Where id = ?");
            ps.setInt(1, x);
            ps.setInt(2, getAccID());
            ps.execute();
            ps.close();
        } catch (SQLException ex) {
            FilePrinter.printError("MapleCharacter.txt", ex, "SetVip");
            System.err.println("[vip]无法连接资料库");
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        } catch (Exception ex) {
            FilePrinter.printError("MapleCharacter.txt", ex, "SetVip");
            System.err.println("[setvip]" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
    }

    public int getVip() {
        return vip;
    }

    public final void setScriptEngine(final String name, final ScriptEngine e) {
        engines.put(name, e);
    }

    public final ScriptEngine getScriptEngine(final String name) {
        return engines.get(name);
    }

    public final void removeScriptEngine(final String name) {
        engines.remove(name);
    }

    public final ScheduledFuture<?> getIdleTask() {
        return idleTask;
    }

    public final void setIdleTask(final ScheduledFuture<?> idleTask) {
        this.idleTask = idleTask;
    }

    protected static final class CharNameAndId {

        public final String name;
        public final int id;

        public CharNameAndId(final String name, final int id) {
            super();
            this.name = name;
            this.id = id;
        }
    }

    public int getCharacterSlots() {
        if (isGm()) {
            return 15;
        }
        if (charslots != DEFAULT_CHARSLOT) {
            return charslots; // save a sql
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con
                    .prepareStatement("SELECT charslots FROM character_slots WHERE accid = ? AND worldid = ?")) {
                ps.setInt(1, accountId);
                ps.setInt(2, world);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        charslots = rs.getInt("charslots");
                    } else {
                        try (PreparedStatement psu = con.prepareStatement(
                                "INSERT INTO character_slots (accid, worldid, charslots) VALUES (?, ?, ?)")) {
                            psu.setInt(1, accountId);
                            psu.setInt(2, world);
                            psu.setInt(3, charslots);
                            psu.executeUpdate();
                        }
                    }
                }
            }
        } catch (SQLException sqlE) {
            FileoutputUtil.outError("logs/资料库异常.txt", sqlE);
        }
        return charslots;
    }

    public boolean gainCharacterSlot() {
        if (getCharacterSlots() >= 15) {
            return false;
        }
        charslots++;

        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con
                    .prepareStatement("UPDATE character_slots SET charslots = ? WHERE worldid = ? AND accid = ?")) {
                ps.setInt(1, charslots);
                ps.setInt(2, world);
                ps.setInt(3, accountId);
                ps.executeUpdate();
            }
        } catch (SQLException sqlE) {
            FileoutputUtil.outError("logs/资料库异常.txt", sqlE);
            return false;
        }
        return true;
    }

    public static final byte unbanIPMacs(String charname) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);

            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("SELECT sessionIP, macs FROM accounts WHERE id = ?");
            ps.setInt(1, accid);
            rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final String sessionIP = rs.getString("sessionIP");
            final String macs = rs.getString("macs");
            rs.close();
            ps.close();
            byte ret = 0;
            if (sessionIP != null) {
                try (PreparedStatement psa = con.prepareStatement("DELETE FROM ipbans WHERE ip = ?")) {
                    psa.setString(1, sessionIP);
                    psa.execute();
                }
                ret++;
            }
            if (macs != null) {
                String[] macz = macs.split(", ");
                for (String mac : macz) {
                    if (!mac.equals("")) {
                        try (PreparedStatement psa = con.prepareStatement("DELETE FROM macbans WHERE mac = ?")) {
                            psa.setString(1, mac);
                            psa.execute();
                        }
                    }
                }
                ret++;
            }
            return ret;
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            System.err.println("Error while unbanning" + e);
            return -2;
        }
    }

    public static final byte unbanIP(String charname) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);
            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("SELECT sessionIP FROM accounts WHERE id = ?");
            ps.setInt(1, accid);
            rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final String sessionIP = rs.getString("sessionIP");
            rs.close();
            ps.close();
            byte ret = 0;
            if (sessionIP != null) {
                try (PreparedStatement psa = con.prepareStatement("DELETE FROM ipbans WHERE ip = ?")) {
                    psa.setString(1, sessionIP);
                    psa.execute();
                }
                ret++;
            }
            return ret;
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            System.err.println("Error while unbanning" + e);
            return -2;
        }
    }

    public static final byte unHellban(String charname) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);

            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("SELECT sessionIP, email FROM accounts WHERE id = ?");
            ps.setInt(1, accid);
            rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final String sessionIP = rs.getString("sessionIP");
            final String email = rs.getString("email");
            rs.close();
            ps.close();
            ps = con.prepareStatement("UPDATE accounts SET banned = 0, banreason = '' WHERE email = ?"
                    + (sessionIP == null ? "" : " OR sessionIP = ?"));
            ps.setString(1, email);
            if (sessionIP != null) {
                ps.setString(2, sessionIP);
            }
            ps.execute();
            ps.close();
            return 0;
        } catch (SQLException e) {
            System.err.println("Error while unbanning" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return -2;
        }
    }

    public static List<Integer> getLoggedIdsFromDB(int state) {
        List<Integer> ret = new ArrayList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT id from accounts where loggedin = ?");
            ps.setInt(1, state);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ret.add(rs.getInt("id"));
            }
        } catch (SQLException ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", ex);

        }
        return ret;
    }

    public boolean isMonitored() {
        return monitored;
    }

    public void setMonitored(boolean m) {
        this.monitored = m;
    }

    public boolean isReceiving() {
        return receiving;
    }

    public void setReceiving(boolean m) {
        this.receiving = m;
    }

    public void sendPacket(byte[] packet) {
        this.getSession().writeAndFlush(packet);
    }

    public static boolean banMacs(String macData) {
        if (macData.equalsIgnoreCase("00-00-00-00-00-00") || macData.length() != 17) {
            return false;
        }
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("INSERT INTO macbans (mac) VALUES (?)")) {
            ps.setString(1, macData);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error banning MACs" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return false;
        }
        return true;
    }

    public final Set<String> getMacs() {
        return Collections.unmodifiableSet(macs);
    }

    public boolean isBannedMac(String mac) {
        if (mac.equalsIgnoreCase("00-00-00-00-00-00") || mac.length() != 17) {
            return false;
        }
        boolean ret = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT COUNT(*) FROM macbans WHERE mac = ?")) {
            ps.setString(1, mac);
            try (ResultSet rs = ps.executeQuery()) {
                rs.next();
                if (rs.getInt(1) > 0) {
                    ret = true;
                }
            }
            ps.close();
        } catch (SQLException ex) {
            System.err.println("Error checking mac bans" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    public boolean hasBannedMac() {
        if (macs.isEmpty()) {
            return false;
        }
        boolean ret = false;
        int i;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            StringBuilder sql = new StringBuilder("SELECT COUNT(*) FROM macbans WHERE mac IN (");
            for (i = 0; i < macs.size(); i++) {
                sql.append("?");
                if (i != macs.size() - 1) {
                    sql.append(", ");
                }
            }
            sql.append(")");
            try (PreparedStatement ps = con.prepareStatement(sql.toString())) {
                i = 0;
                for (String mac : macs) {
                    i++;
                    ps.setString(i, mac);
                }
                try (ResultSet rs = ps.executeQuery()) {
                    rs.next();
                    if (rs.getInt(1) > 0) {
                        ret = true;
                    }
                }
            }
        } catch (SQLException ex) {
            System.err.println("Error checking mac bans" + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    private void loadMacsIfNescessary() throws SQLException {
        if (macs.isEmpty()) {
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con.prepareStatement("SELECT macs FROM accounts WHERE id = ?")) {
                ps.setInt(1, accountId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        if (rs.getString("macs") != null) {
                            String[] macData;
                            macData = rs.getString("macs").split(", ");
                            for (String mac : macData) {
                                if (!mac.equals("")) {
                                    macs.add(mac);
                                }
                            }
                        }
                    } else {
                        rs.close();
                        ps.close();
                        throw new RuntimeException("No valid account associated with this client.");
                    }
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
                FileoutputUtil.outError("logs/资料库异常.txt", ex);
            }
        }
    }

    public void banMacs() {
        try {
            loadMacsIfNescessary();
            if (this.macs.size() > 0) {
                String[] macBans = new String[this.macs.size()];
                int z = 0;
                for (String mac : this.macs) {
                    macBans[z] = mac;
                    z++;
                }
                banMacs(macBans);
            }
        } catch (SQLException e) {
        }
    }

    public static void banMacs(String[] macs) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            List<String> filtered = new LinkedList<>();
            PreparedStatement ps = con.prepareStatement("SELECT filter FROM macfilters");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                filtered.add(rs.getString("filter"));
            }
            rs.close();
            ps.close();

            ps = con.prepareStatement("INSERT INTO macbans (mac) VALUES (?)");
            for (String mac : macs) {
                boolean matched = false;
                for (String filter : filtered) {
                    if (mac.matches(filter)) {
                        matched = true;
                        break;
                    }
                }
                if (!matched) {
                    ps.setString(1, mac);
                    try {
                        ps.executeUpdate();
                    } catch (SQLException e) {
                        // can fail because of UNIQUE key, we dont care
                    }
                }
            }
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error banning MACs" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    /*
     * public static boolean landersLogin(String lip) {
     * String ip = lip.substring(1, lip.lastIndexOf(':'));
     * boolean ret = false;
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
     * = con.
     * prepareStatement("SELECT COUNT(*) FROM ipcheck WHERE ? LIKE CONCAT(ip, '%')"
     * )) {
     * ps.setString(1, ip);
     * try (ResultSet rs = ps.executeQuery()) {
     * rs.next();
     * if (rs.getInt(1) > 0) {
     * ret = true;
     * }
     * }
     * 
     * } catch (SQLException ex) {
     * System.err.println("Error ipcheck " + ex);
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * return ret;
     * }
     */
    public List<String> loadCharacterNamesByCharId(int charId) {
        List<String> chars = new LinkedList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            try (PreparedStatement ps = con.prepareStatement(
                    "SELECT id,name FROM characters WHERE accountid= (SELECT accountid FROM characters where id=?)")) {
                ps.setInt(1, charId);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        chars.add(rs.getString("name"));
                    }
                }
            }
        } catch (SQLException e) {
            System.err.println("error loading characters internal" + e);
            FileoutputUtil.outputFileError("logs/资料库异常.txt", e);
        }
        return chars;
    }

    public int loadLogGedin(int accountID) {
        int login = 0;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT loggedin FROM accounts WHERE id = ?");
            ps.setInt(1, accountID);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                login = rs.getShort("loggedin");
                ps.close();
                rs.close();
            }

        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return login;
    }

    public void setLoginKey(String key) {
        this.loginKey = key;
    }

    public int getLoginKeya() {
        return this.loginKeya;
    }

    public void setLoginKeya(int keya) {
        this.loginKeya = keya;
    }

    public String getLoginKey() {
        return this.loginKey;
    }

    public String loadLoginKey() {
        String loginkey = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT loginkey FROM accounts WHERE id = ?");
            ps.setInt(1, getAccID());
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                loginkey = rs.getString("loginkey");
                ps.close();
                rs.close();
            }

        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return loginkey;
    }

    public void setServerKey(String key) {
        this.serverKey = key;
    }

    public String getServerKey() {
        return this.serverKey;
    }

    public String loadServerKey() {
        String serverkey = null;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT serverkey FROM accounts WHERE id = ?");
            ps.setInt(1, getAccID());
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                serverkey = rs.getString("serverkey");
                ps.close();
                rs.close();
            }

        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return serverkey;
    }

    public final void updateLoginKey(String loginkey) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("UPDATE accounts SET loginkey = ? WHERE id = ?");
            ps.setString(1, loginkey);
            ps.setInt(2, getAccID());
            ps.executeUpdate();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public final void updateServerKey(String serverkey) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("UPDATE accounts SET serverkey = ? WHERE id = ?");
            ps.setString(1, serverkey);
            ps.setInt(2, getAccID());
            ps.executeUpdate();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public final void updateClientKey(String clientkey) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("UPDATE accounts SET clientkey = ? WHERE id = ?");
            ps.setString(1, clientkey);
            ps.setInt(2, getAccID());
            ps.executeUpdate();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    /*
     * public boolean dangerousIp(String lip) {
     * String ip = lip.substring(1, lip.lastIndexOf(':'));
     * boolean ret = false;
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
     * = con.
     * prepareStatement("SELECT COUNT(*) FROM dangerousip WHERE ? LIKE CONCAT(ip, '%')"
     * )) {
     * ps.setString(1, ip);
     * try (ResultSet rs = ps.executeQuery()) {
     * rs.next();
     * if (rs.getInt(1) > 0) {
     * ret = true;
     * }
     * }
     * 
     * } catch (SQLException ex) {
     * System.err.println("Error dangerousIp " + ex);
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * return ret;
     * }
     */
    public static final byte setTGJF(String charname, int x) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);

            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("UPDATE accounts SET TGJF = ? WHERE id = ?");
            ps.setInt(1, x);
            ps.setInt(2, accid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error while unbanning" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return -2;
        }
        return 0;
    }

    public static final int getTGJF(final int accid) {
        int ret;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT TGJF FROM accounts WHERE id = ?");
            ps.setInt(1, accid);
            try (ResultSet rs = ps.executeQuery()) {
                ret = -1;
                if (rs.next()) {
                    ret = rs.getInt("TGJF");
                }
            }
            return ret;
        } catch (final SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return -1;
    }

    public final void updateMacs(String macs) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("UPDATE accounts SET macs = ? WHERE id = ?");
            ps.setString(1, macs);
            ps.setInt(2, getAccID());
            ps.executeUpdate();
        } catch (SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
    }

    public static final byte setTJJF(String charname, int x) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT accountid from characters where name = ?");
            ps.setString(1, charname);

            ResultSet rs = ps.executeQuery();
            if (!rs.next()) {
                rs.close();
                ps.close();
                return -1;
            }
            final int accid = rs.getInt(1);
            rs.close();
            ps.close();

            ps = con.prepareStatement("UPDATE accounts SET TJJF = ? WHERE id = ?");
            ps.setInt(1, x);
            ps.setInt(2, accid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error while unbanning" + e);
            FileoutputUtil.outError("logs/资料库异常.txt", e);
            return -2;
        }
        return 0;
    }

    public static final int getTJJF(final int accid) {
        int ret;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT TJJF FROM accounts WHERE id = ?");
            ps.setInt(1, accid);
            try (ResultSet rs = ps.executeQuery()) {
                ret = -1;
                if (rs.next()) {
                    ret = rs.getInt("TJJF");
                }
            }
            return ret;
        } catch (final SQLException e) {
            FileoutputUtil.outError("logs/资料库异常.txt", e);
        }
        return -1;
    }

    public boolean dangerousIp(String lip) {
        String ip = lip.substring(1, lip.lastIndexOf(':'));
        boolean ret = false;
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                PreparedStatement ps = con
                        .prepareStatement("SELECT COUNT(*) FROM dangerousip WHERE ? LIKE CONCAT(ip, '%')")) {
            ps.setString(1, ip);
            try (ResultSet rs = ps.executeQuery()) {
                rs.next();
                if (rs.getInt(1) > 0) {
                    ret = true;
                }
            }

        } catch (SQLException ex) {
            System.err.println("Error dangerousIp " + ex);
            FileoutputUtil.outError("logs/资料库异常.txt", ex);
        }
        return ret;
    }

    public void setDangerousIp(String lip) {
        String ip = lip.substring(1, lip.lastIndexOf(':'));
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("INSERT INTO dangerousip (ip) VALUES (?)");
            ps.setString(1, ip);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException Wx) {
            FileoutputUtil.outError("logs/资料库异常.txt", Wx);
        }
    }

    public int getMacsCout(byte loggedin, String macs) {
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            int ret_count;
            PreparedStatement ps;
            ps = con.prepareStatement("select count(*) from accounts where loggedin > ? and macs = ?");
            ps.setByte(1, loggedin);
            ps.setString(2, macs);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    ret_count = rs.getInt(1);
                } else {
                    ret_count = -1;
                }
            }
            ps.close();
            return ret_count;
        } catch (SQLException Ex) {
            FileoutputUtil.outError("logs/资料库异常.txt", Ex);
            return -1;
        }
    }

    public long getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(long lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public final void unLockDisconnect() {
        getSession().writeAndFlush(MaplePacketCreator.serverNotice(1, "当前帐号在别处登入\r\n若不是你本人操作请及时更改密码。"));
        disconnect(serverTransition, getChannel() == MapleServerHandler.CASH_SHOP_SERVER);
        getSession().close();
        closeseesion = true;
        final MapleClient client = this;
        Thread closeSession = new Thread() {
            @Override
            public void run() {
                try {
                    sleep(3000);
                } catch (InterruptedException ex) {
                }
                client.getSession().close();
            }
        };
        try {
            closeSession.start();
        } catch (Exception ex) {
        }
    }

    public boolean getCloseSession() {
        return closeseesion;
    }

    public boolean isCanloginpw() {
        return canloginpw;
    }

    public void setCanloginpw(boolean x) {
        this.canloginpw = x;
    }

    public List<String> loadCharacterNamesByAccId(int accId) {
        List<String> Acc = new LinkedList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT name FROM characters WHERE accountid = ?");
            ps.setInt(1, accId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Acc.add(rs.getString("name"));
            }
        } catch (SQLException e) {
            System.err.println("error loading characters names by id " + e);
        }
        return Acc;
    }

    public List<Integer> loadCharacterIDsByAccId(int accId) {
        List<Integer> Acc = new LinkedList<>();
        try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
            PreparedStatement ps = con.prepareStatement("SELECT id FROM characters WHERE accountid = ?");
            ps.setInt(1, accId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Acc.add(rs.getInt("id"));
            }
        } catch (SQLException e) {
            System.err.println("error loading characters cids by id " + e);
        }
        return Acc;
    }

}
