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
package handling.channel.handler;

import java.util.Collection;
import java.util.List;

import client.BuddyEntry;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleQuestStatus;
import client.SkillFactory;
import client.inventory.IItem;
import client.inventory.MapleInventory;
import constants.GameConstants;
import constants.WorldConstants;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.CharacterIdChannelPair;
import handling.world.CharacterTransfer;
import handling.world.MapleMessenger;
import handling.world.MapleMessengerCharacter;
import handling.world.MaplePartyCharacter;
import handling.world.PartyOperation;
import handling.world.PlayerBuffStorage;
import handling.world.World;
import handling.world.guild.MapleGuild;
import scripting.NPCScriptManager;
import server.ServerProperties;
import server.maps.FieldLimitType;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;
import tools.packet.FamilyPacket;

public class InterServerHandler {

    public static final void EnterCashShop(final MapleClient c, final MapleCharacter chr, final boolean mts) {
        if (c.getCloseSession()) {
            return;
        }
        if (World.isShutDown && chr.isGM() == false) {
            c.sendPacket(MaplePacketCreator.serverBlocked(2));
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if (!WorldConstants.CS_ENABLE && chr.isGM() == false) {
            c.sendPacket(MaplePacketCreator.serverBlocked(2));
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        if ((chr == null) || (chr.getMap() == null) || (chr.getEventInstance() != null)
                || (c.getChannelServer() == null)) {
            c.getSession().write(MaplePacketCreator.serverBlocked(2));
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }

        // if (World.getPendingCharacterSize() >= 80) {
        // chr.dropMessage(1, "服务器繁忙，请稍后再试。");
        // c.getSession().write(MaplePacketCreator.enableActions());
        // return;
        // }
        if (chr.getAntiMacro().inProgress()) {
            c.getPlayer().dropMessage(1, "被使用测谎仪时无法操作。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        try {
            // int res =
            chr.saveToDB(false, false);
            // if (res == 1) {
            // chr.dropMessage(5, "角色保存成功！");
            // }
        } catch (Exception ex) {
            FileoutputUtil.logToFile("logs/进入商城保存数据异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName()
                            + " 帐号ID " + c.getAccID() + " 角色名 " + chr.getName() + " 角色ID " + chr.getId());
            FileoutputUtil.outError("logs/进入商城保存数据异常.txt", ex);
        }
        final ChannelServer ch = ChannelServer.getInstance(c.getChannel());

        // if (chr != null && ch != null) {
        chr.dispelBuff();
        chr.changeRemoval();
        // chr.updateBuffTime();

        if (chr.getMessenger() != null) {
            MapleMessengerCharacter messengerplayer = new MapleMessengerCharacter(chr);
            World.Messenger.leaveMessenger(chr.getMessenger().getId(), messengerplayer);
        }
        PlayerBuffStorage.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
        PlayerBuffStorage.addCooldownsToStorage(chr.getId(), chr.getCooldowns());
        PlayerBuffStorage.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
        World.channelChangeData(new CharacterTransfer(chr), chr.getId(), mts ? -20 : -10);
        ch.removePlayer(chr);
        c.updateLoginState(MapleClient.CHANGE_CHANNEL, c.getSessionIPAddress());

        chr.getMap().removePlayer(chr);
        c.sendPacket(MaplePacketCreator.getChannelChange(c, Integer.parseInt(CashShopServer.getIP().split(":")[1])));
        c.getPlayer().expirationTask(true, false);
        c.setPlayer(null);
        c.setReceiving(false);
        // }
    }

    /**
     *
     * @param playerid - 玩家ID
     * @param c        - 客户端 Client
     */
    public static final void LoggedIn(final int playerid, final MapleClient c) {
        // if (c.loadLogGedin(c.getAccID()) == 1 || c.loadLogGedin(c.getAccID()) > 2) {
        // c.getSession().close();
        // return;
        // }
        if (c.getCloseSession()) {
            return;
        }
        final ChannelServer channelServer = c.getChannelServer();
        MapleCharacter player;
        final CharacterTransfer transfer = channelServer.getPlayerStorage().getPendingCharacter(playerid);

        if (transfer == null) { // Player isn't in storage, probably isn't CC

            List<String> charNamesa = c.loadCharacterNamesByCharId(playerid);
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                for (final String name : charNamesa) {
                    if (cs.getPlayerStorage().getCharacterByName(name) != null) {
                        FileoutputUtil.logToFile("logs/Data/非法登录.txt",
                                "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                        + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                                        + c.getAccountName() + "登录1");
                        World.Broadcast.broadcastGMMessage(
                                MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                        c.getSession().close();
                        return;
                    }
                }
            }
            for (final String name : charNamesa) {
                if (CashShopServer.getPlayerStorage().getCharacterByName(name) != null) {
                    FileoutputUtil.logToFile("logs/Data/非法登录.txt",
                            "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                    + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                                    + c.getAccountName() + "登录1");
                    World.Broadcast.broadcastGMMessage(
                            MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                    c.getSession().close();
                    return;
                }
            }

            List<String> charNames = c.loadCharacterNamesByCharId(playerid);
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                for (final String name : charNames) {
                    MapleCharacter character = cs.getPlayerStorage().getCharacterByName(name);
                    if (character != null) {
                        // cs.getPlayerStorage().deregisterPlayer(character);
                        // character.getClient().disconnect(false, false, true);
                        FileoutputUtil.logToFile("logs/Data/非法登录.txt",
                                "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                        + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                                        + c.getAccountName() + "登录3");
                        World.Broadcast.broadcastGMMessage(
                                MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                        c.getSession().close();
                        character.getClient().getSession().close();
                    }
                }
            }
            for (final String name : charNames) {
                MapleCharacter charactercs = CashShopServer.getPlayerStorage().getCharacterByName(name);
                if (charactercs != null) {
                    // CashShopServer.getPlayerStorage().deregisterPlayer(charactercs);
                    // charactercs.getClient().disconnect(false, true, true);
                    FileoutputUtil.logToFile("logs/Data/非法登录.txt",
                            "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                    + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                                    + c.getAccountName() + "登录4");
                    World.Broadcast.broadcastGMMessage(
                            MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                    c.getSession().close();
                    charactercs.getClient().getSession().close();
                }
            }

            if (System.getProperty(String.valueOf(playerid)) == null
                    || !System.getProperty(String.valueOf(playerid)).equals("1")) {
                World.Broadcast.broadcastGMMessage(
                        MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                World.Broadcast.broadcastGMMessage(
                        MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                World.Broadcast.broadcastGMMessage(
                        MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
                FileoutputUtil.logToFile("logs/Data/非法登录.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                        + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName());
                c.getSession().close();
                return;
            } else {
                System.setProperty(String.valueOf(playerid), String.valueOf(0));
            }
            LoginServer.removeClient(c);
            player = MapleCharacter.loadCharFromDB(playerid, c, true);
            LoginServer.addEnterGameAgainTime(c.getAccID());
            player.setMrqdTime(System.currentTimeMillis());
        } else {
            player = MapleCharacter.ReconstructChr(transfer, c, true);
        }

        if (!LoginServer.CanLoginKey(player.getLoginKey(), player.getAccountID())
                || (LoginServer.getLoginKey(player.getAccountID()) == null && !player.getLoginKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端登录KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getLoginKey(player.getAccountID()) + " 伺服端key："
                            + player.getLoginKey() + " 进入游戏1");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }
        if (!LoginServer.CanServerKey(player.getServerKey(), player.getAccountID())
                || (LoginServer.getServerKey(player.getAccountID()) == null && !player.getServerKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端频道KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getServerKey(player.getAccountID()) + " 伺服端key："
                            + player.getServerKey() + " 进入游戏2");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }
        if (!LoginServer.CanClientKey(player.getClientKey(), player.getAccountID())
                || (LoginServer.getClientKey(player.getAccountID()) == null && !player.getClientKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端进入KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getClientKey(player.getAccountID()) + " 伺服端key："
                            + player.getClientKey() + " 进入游戏3");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }

        c.setLastLoginTime(LoginServer.getEnterGameAgainTime(c.getAccID()));
        LoginServer.forceRemoveClient(c, false);
        ChannelServer.forceRemovePlayerByAccId(c, c.getAccID());
        // 设置用户端角色
        c.setPlayer(player);
        // 设置用户端账号ID
        c.setAccID(player.getAccountID());

        c.setSecondPassword(player.getAccountSecondPassword());
        if (!c.CheckIPAddress()) { // Remote hack
            c.getSession().close();
            FileoutputUtil.logToFile("logs/Data/进入游戏掉线.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " CheckIPAddress");
            return;
        }
        final int state = c.getLoginState();
        boolean allowLogin = false;
        if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL
                || state == MapleClient.LOGIN_NOTLOGGEDIN) {
            allowLogin = !World.isCharacterListConnected(c.loadCharacterNames(c.getWorld()));
        }
        if (!allowLogin) {
            c.setPlayer(null);
            c.getSession().close();
            FileoutputUtil.logToFile("logs/Data/进入游戏掉线.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " allowLogin");
            return;
        }
        // 更新登入状态
        c.updateLoginState(MapleClient.LOGIN_LOGGEDIN, c.getSessionIPAddress());
        channelServer.addPlayer(player);
        c.loadVip(player.getAccountID());
        c.sendPacket(MaplePacketCreator.getCharInfo(player));
        if (MapleCharacter.getCharacterNameById2(playerid) == null) {
            FileoutputUtil.logToFile("logs/Data/角色不存在.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: "
                    + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName() + "登录");
            World.Broadcast.broadcastGMMessage(
                    MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录不存在角色 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }

        if (!LoginServer.CanLoginKey(player.getLoginKey(), player.getAccountID())
                || (LoginServer.getLoginKey(player.getAccountID()) == null && !player.getLoginKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端登录KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getLoginKey(player.getAccountID()) + " 伺服端key："
                            + player.getLoginKey() + " 进入游戏4");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }
        if (!LoginServer.CanServerKey(player.getServerKey(), player.getAccountID())
                || (LoginServer.getServerKey(player.getAccountID()) == null && !player.getServerKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端频道KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getServerKey(player.getAccountID()) + " 伺服端key："
                            + player.getServerKey() + " 进入游戏5");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }
        if (!LoginServer.CanClientKey(player.getClientKey(), player.getAccountID())
                || (LoginServer.getClientKey(player.getAccountID()) == null && !player.getClientKey().isEmpty())) {
            FileoutputUtil.logToFile("logs/Data/客户端进入KEY异常.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 客户端key：" + LoginServer.getClientKey(player.getAccountID()) + " 伺服端key："
                            + player.getClientKey() + " 进入游戏6");
            World.Broadcast
                    .broadcastGMMessage(MaplePacketCreator.serverNotice(6, "[GM 密语系统] 非法登录 帐号 " + c.getAccountName()));
            c.getSession().close();
            return;
        }

        // 管理员上线预设隐藏
        if (player.isGM()) {
            SkillFactory.getSkill(9001004).getEffect(1).applyTo(player);
            if (GameConstants.isKOC(player.getJob())) {
                SkillFactory.getSkill(10001010).getEffect(1).applyTo(player, 2100000000);
            } else if (GameConstants.isAran(player.getJob())) {
                SkillFactory.getSkill(20001010).getEffect(1).applyTo(player, 2100000000);
            } else {
                SkillFactory.getSkill(1010).getEffect(1).applyTo(player, 2100000000);
            }
        }

        // player.giveBuffTime();

        // 暂存能力值解除

        c.sendPacket(MaplePacketCreator.temporaryStats_Reset());
        c.sendPacket(MaplePacketCreator.showCharCash(player));
        player.getMap().addPlayer(player);

        try {
            // BUFF技能
            player.silentGiveBuffs(PlayerBuffStorage.getBuffsFromStorage(player.getId()));
            // 冷却时间
            player.giveCoolDowns(PlayerBuffStorage.getCooldownsFromStorage(player.getId()));
            // 疾病状态
            player.giveSilentDebuff(PlayerBuffStorage.getDiseaseFromStorage(player.getId()));

            // 开启好友列表
            final Collection<Integer> buddyIds = player.getBuddylist().getBuddiesIds();
            World.Buddy.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds, player.getGMLevel(),
                    player.isHidden());
            if (player.getParty() != null) {
                // channelServer.getWorldInterface().updateParty(player.getParty().getId(),
                // PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
                World.Party.updateParty(player.getParty().getId(), PartyOperation.LOG_ONOFF,
                        new MaplePartyCharacter(player));
            }
            /* 读取好友 */
            final CharacterIdChannelPair[] onlineBuddies = World.Find.multiBuddyFind(player.getId(), buddyIds);
            for (CharacterIdChannelPair onlineBuddy : onlineBuddies) {
                final BuddyEntry ble = player.getBuddylist().get(onlineBuddy.getCharacterId());
                ble.setChannel(onlineBuddy.getChannel());
                player.getBuddylist().put(ble);
            }
            c.sendPacket(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));

            // Messenger
            final MapleMessenger messenger = player.getMessenger();
            if (messenger != null) {
                World.Messenger.silentJoinMessenger(messenger.getId(), new MapleMessengerCharacter(c.getPlayer()));
                World.Messenger.updateMessenger(messenger.getId(), c.getPlayer().getName(), c.getChannel());
            }

            // 开始公会及联盟
            if (player.getGuildId() > 0) {
                World.Guild.setGuildMemberOnline(player.getMGC(), true, c.getChannel());
                c.sendPacket(MaplePacketCreator.showGuildInfo(player));
                final MapleGuild gs = World.Guild.getGuild(player.getGuildId());
                if (gs != null) {
                    final List<byte[]> packetList = World.Alliance.getAllianceInfo(gs.getAllianceId(), true);
                    if (packetList != null) {
                        for (byte[] pack : packetList) {
                            if (pack != null) {
                                c.sendPacket(pack);
                            }
                        }
                    }
                } else {
                    player.setGuildId(0);
                    player.setGuildRank((byte) 5);
                    player.setAllianceRank((byte) 5);
                    player.saveGuildStatus();
                }
            } else {
                c.sendPacket(MaplePacketCreator.fakeGuildInfo(player));
            }
            // 家族
            if (player.getFamilyId() > 0) {
                World.Family.setFamilyMemberOnline(player.getMFC(), true, c.getChannel());
            }
            c.sendPacket(FamilyPacket.getFamilyInfo(player));
        } catch (Exception e) {
            FilePrinter.printError(FilePrinter.LoginError, e);
        }
        c.sendPacket(FamilyPacket.getFamilyData());

        // 技能组合
        player.sendMacros();
        // 显示讯息
        player.showNote();
        // 更新组队成员HP
        player.updatePartyMemberHP();
        // 精灵吊坠计时
        player.startFairySchedule(false);
        // 修复消失技能
        player.baseSkills();
        // 键盘设置
        c.sendPacket(MaplePacketCreator.getKeymap(player.getKeyLayout()));
        // 更新四维
        player.updateStat();

        player.updatePetAuto();

        // 任务状态
        for (MapleQuestStatus status : player.getStartedQuests()) {
            if (status.hasMobKills()) {
                c.sendPacket(MaplePacketCreator.updateQuestMobKills(status));
            }
        }

        // 好友
        final BuddyEntry pendingBuddyRequest = player.getBuddylist().pollPendingRequest();
        if (pendingBuddyRequest != null) {
            player.getBuddylist()
                    .put(new BuddyEntry(pendingBuddyRequest.getName(), pendingBuddyRequest.getCharacterId(), "ETC", -1,
                            false, pendingBuddyRequest.getLevel(), pendingBuddyRequest.getJob()));
            c.sendPacket(MaplePacketCreator.requestBuddylistAdd(pendingBuddyRequest.getCharacterId(),
                    pendingBuddyRequest.getName(), pendingBuddyRequest.getLevel(), pendingBuddyRequest.getJob()));
        }

        // 黑骑士技能
        if (player.getJob() == 132) {
            player.checkBerserk();
        }
        // 复制人
        player.spawnClones();
        // 宠物
        player.spawnSavedPets();
        boolean ChrdangerousIp = player.chrdangerousIp(c.getSession().remoteAddress().toString());
        if (ChrdangerousIp) {
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险IP上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险IP上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险IP上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            FileoutputUtil.logToFile("logs/Data/危险IP登录.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName()
                            + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID " + player.getId());
        }

        boolean ChrdangerousName = player.ChrDangerousAcc(player.getClient().getAccountName());
        if (ChrdangerousName) {
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险角色上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险角色上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                    "[GM 密语系统] 危险角色上线" + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 "
                            + c.getAccountName() + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID "
                            + player.getId()));
            FileoutputUtil.logToFile("logs/Data/危险帐号登录.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " + c.getAccountName()
                            + " 帐号ID " + c.getAccID() + " 角色名 " + player.getName() + " 角色ID " + player.getId());
        }

        // 处理大姐大道具
        MapleInventory[] inventorys = player.getInventorys();
        for (MapleInventory inventory : inventorys) {
            IItem item = inventory.findById(1382075);
            if (item != null) {
                inventory.removeItem(item.getPosition(), item.getQuantity(), false, player);
            }
        }

        NPCScriptManager.getInstance().start(c, 9010000, 0, "重返");

        if (player.getBossLog("离线挂机") > 0 && player.getMapId() == 910000007) {
            long nowTimestamp = System.currentTimeMillis();
            long 奖励时间 = nowTimestamp - player.getLastOfflineTime();
            if (奖励时间 >= 60000) {
                int 离线时间 = (int) 奖励时间 / 60000;
                if (离线时间 >= 1440) {
                    离线时间 = 1440;
                    c.getPlayer().dropMessage(5, "您的离线时间超过24小时,离线奖励按照一天算。");
                }
                final int 点卷数量 = Integer.parseInt(ServerProperties.getProperty("离线点卷数量")) * 离线时间;
                final int 抵用数量 = Integer.parseInt(ServerProperties.getProperty("离线抵用数量")) * 离线时间;
                final int 豆豆数量 = Integer.parseInt(ServerProperties.getProperty("离线豆豆数量")) * 离线时间;
                final int 金币数量 = Integer.parseInt(ServerProperties.getProperty("离线金币数量")) * 离线时间;
                final int 经验数量 = Integer.parseInt(ServerProperties.getProperty("离线经验数量")) * 离线时间;
                player.gainExp(经验数量, false, false, false);// 给固定经验
                player.modifyCSPoints(2, 抵用数量);
                player.modifyCSPoints(1, 点卷数量);
                player.gainBeans(豆豆数量);
                player.gainMeso((金币数量), true);// 给金币
                c.getPlayer().dropMessage(5, "您的离线时间" + 离线时间 + "分钟,离线获得[" + 经验数量 + "] 经验 [" + 金币数量 + "] 金币 [" + 抵用数量
                        + "] 抵用卷 [" + 点卷数量 + "] 点卷 [" + 豆豆数量 + "] 豆豆 !");
                player.updateOfflineTime1();
                player.deleteBossLog("离线挂机");

            }
        }

        /*
         * //扎昆重返
         * int 扎昆的祭台地图 = 280030000;
         * int 神秘岛通道 = 211041900;
         * BossLogCopyManager copyManager = BossLogCopyManager.getInstance();
         * if ((copyManager.getBossLog("扎昆掉线重返",c.getPlayer()) >= 1) &&
         * (c.getPlayer().getMap().getId() == 神秘岛通道)) {
         * if (c.getPlayer().获取怪物数量(扎昆的祭台地图) >= 1) {
         * c.getPlayer().changeMap(扎昆的祭台地图);
         * c.getPlayer().dropMessage(5, "已经送您重返扎昆挑战。请继续战斗！维护世界和平的重任，就交给你了 !!");
         * } else {
         * copyManager.resetBossLog("扎昆掉线重返", c.getPlayer());
         * }
         * }
         * //暗黑龙王重返
         * int 暗黑龙王洞穴地图 = 240060200;
         * if ((copyManager.getBossLog("暗黑龙王掉线重返", c.getPlayer()) >= 1) &&
         * (c.getPlayer().getMap().getId() != 暗黑龙王洞穴地图)) {
         * if (c.getPlayer().获取怪物数量(暗黑龙王洞穴地图) >= 1) {
         * c.getPlayer().changeMap(暗黑龙王洞穴地图);
         * c.getPlayer().dropMessage(5, "已经送您重返暗黑龙王挑战。请继续战斗！维护世界和平的重任，就交给你了 !!");
         * } else {
         * copyManager.resetBossLog("暗黑龙王掉线重返", c.getPlayer());
         * }
         * }
         * //品克缤重返
         * int 神的黄昏地图 = 270050100;
         * if ((copyManager.getBossLog("品克缤掉线重返", c.getPlayer()) >= 1) &&
         * (c.getPlayer().getMap().getId() != 神的黄昏地图)) {
         * if (c.getPlayer().获取怪物数量(神的黄昏地图) >= 1) {
         * c.getPlayer().changeMap(神的黄昏地图);
         * c.getPlayer().dropMessage(5, "已经送您重返品克缤挑战。请继续战斗！维护世界和平的重任，就交给你了 !!");
         * } else {
         * copyManager.resetBossLog("品克缤掉线重返", c.getPlayer());
         * }
         * }
         * //熊狮重返
         * int 熊狮地图 = 551030200;
         * if ((copyManager.getBossLog("熊狮掉线重返", c.getPlayer()) >= 1) &&
         * (c.getPlayer().getMap().getId() != 熊狮地图)) {
         * if (c.getPlayer().获取怪物数量(熊狮地图) >= 1) {
         * c.getPlayer().changeMap(熊狮地图);
         * c.getPlayer().dropMessage(5, "已经送您重返熊狮挑战。请继续战斗！维护世界和平的重任，就交给你了 !!");
         * } else {
         * copyManager.resetBossLog("熊狮掉线重返", c.getPlayer());
         * }
         * }
         */

    }

    public static final void ChangeChannel(final LittleEndianAccessor slea, final MapleClient c,
            final MapleCharacter chr) {
        if (c.getPlayer().getChair() > 0) {
            c.getPlayer().dropMessage(5, "请解除座椅状态后进入商城.");
            return;
        }
        if (c.getCloseSession()) {
            return;
        }
        if (chr.hasBlockedInventory(true) || chr.getEventInstance() != null || chr.getMap() == null
                || FieldLimitType.ChannelSwitch.check(chr.getMap().getFieldLimit())) {
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }

        // if (World.getPendingCharacterSize() >= 80) {
        // chr.dropMessage(1, "服务器繁忙，请稍后再试。");
        // c.getSession().write(MaplePacketCreator.enableActions());
        // return;
        // }
        if (chr.getAntiMacro().inProgress()) {
            chr.dropMessage(5, "被使用测谎仪时无法操作。");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        /*
         * if (!LoginServer.CanLoginKey(chr.getLoginKey(), chr.getAccountID()) ||
         * (LoginServer.getLoginKey(chr.getAccountID()) == null &&
         * !chr.getLoginKey().isEmpty())) {
         * FileoutputUtil.logToFile("logs/Data/客户端登录KEY异常.txt", "\r\n " +
         * FileoutputUtil.NowTime() + " IP: " +
         * c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " +
         * c.getAccountName() + " 客户端key：" + LoginServer.getLoginKey(chr.getAccountID())
         * + " 伺服端key：" + chr.getLoginKey() + " 更换频道1");
         * World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
         * "[GM 密语系统] 非法更换频道 帐号 " + c.getAccountName()));
         * c.getSession().close();
         * return;
         * }
         * if (!LoginServer.CanServerKey(chr.getServerKey(), chr.getAccountID()) ||
         * (LoginServer.getServerKey(chr.getAccountID()) == null &&
         * !chr.getServerKey().isEmpty())) {
         * FileoutputUtil.logToFile("logs/Data/客户端频道KEY异常.txt", "\r\n " +
         * FileoutputUtil.NowTime() + " IP: " +
         * c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " +
         * c.getAccountName() + " 客户端key：" +
         * LoginServer.getServerKey(chr.getAccountID()) + " 伺服端key：" +
         * chr.getServerKey() + " 更换频道2");
         * World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
         * "[GM 密语系统] 非法更换频道 帐号 " + c.getAccountName()));
         * c.getSession().close();
         * return;
         * }
         * if (!LoginServer.CanClientKey(chr.getClientKey(), chr.getAccountID()) ||
         * (LoginServer.getClientKey(chr.getAccountID()) == null &&
         * !chr.getClientKey().isEmpty())) {
         * FileoutputUtil.logToFile("logs/Data/客户端进入KEY异常.txt", "\r\n " +
         * FileoutputUtil.NowTime() + " IP: " +
         * c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " +
         * c.getAccountName() + " 客户端key：" +
         * LoginServer.getClientKey(chr.getAccountID()) + " 伺服端key：" +
         * chr.getClientKey() + " 更换频道3");
         * World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
         * "[GM 密语系统] 非法更换频道 帐号 " + c.getAccountName()));
         * c.getSession().close();
         * return;
         * }
         */
        chr.changeChannel(slea.readByte() + 1);
        // 换频道更新VIP等级
        // c.loadVip(chr.getAccountID());
        // chr.loadVip(chr.getAccountID());
    }

}
