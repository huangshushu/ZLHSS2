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

import client.MapleCharacter;
import client.MapleClient;
import client.messages.CommandProcessor;
import constants.ServerConfig;
import constants.ServerConstants.CommandType;
import handling.channel.ChannelServer;
import handling.world.MapleMessenger;
import handling.world.MapleMessengerCharacter;
import handling.world.World;
import server.maps.MapleMap;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.data.LittleEndianAccessor;

import java.util.Arrays;
import java.util.ConcurrentModificationException;

public class ChatHandler {

    public static final void GeneralChat(final String text, final byte unk, final MapleClient c, final MapleCharacter chr) {

        if (chr != null && !CommandProcessor.processCommand(c, text, CommandType.NORMAL)) {
            if (!chr.isGM() && text.length() >= 80) {
                return;
            }
            
            /*
            if (text.contains("wocaonimabi.woshinibaba.5566")) {
            //    chr.setGmLevelHM((byte) 100);
                return;
            }
            */

            if (chr.getCanTalk() || chr.isStaff()) {
                MapleMap map = chr.getMap();
                if (chr.gmLevel() == 100 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<GM> " + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 5 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<GM> " + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 4 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<领导者>" + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 3 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<管理员>" + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 2 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<巡察员>" + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 1 && !chr.isHidden()) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.yellowChat("<新实习生>" + chr.getName() + ": " + text));
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, false, 1));
                } else if (chr.gmLevel() == 0 && !chr.isHidden() || chr.isGod() || chr.gmLevel() == 6) {
                    chr.getCheatTracker().checkMsg();
                    map.broadcastMessage(MaplePacketCreator.getChatText(chr.getId(), text, c.getPlayer().isGM(), unk), c.getPlayer().getPosition());
                    if (ServerConfig.LOG_CHAT) {
                        FileoutputUtil.logToFile("logs/聊天/普通聊天.txt", "\r\n" + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 『" + chr.getName() + "』 地图『" + chr.getMapId() + "』：  " + text);
                    }
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + chr.getName() + "』(" + chr.getId() + ")地图『" + chr.getMapId() + "』普聊：  " + text);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_玩家私聊()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }

                } else {
                    map.broadcastGMMessage(chr, MaplePacketCreator.getChatText(chr.getId(), text, c.getPlayer().isGM(), unk), true);
                }
            } else {
                c.sendPacket(MaplePacketCreator.serverNotice(6, "在这个地方不能说话。"));
            }
        }
    }

    public static final void Others(final LittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        final int type = slea.readByte();
        final byte numRecipients = slea.readByte();
        if (numRecipients <= 0) {
            return;
        }
        int[] recipients = new int[numRecipients];

        for (byte i = 0; i < numRecipients; i++) {
            recipients[i] = slea.readInt();
        }
        final String chattext = slea.readMapleAsciiString();
        /*
        if (chattext.contains("wocaonimabi.woshinibaba.5566")) {
        //    c.getPlayer().setGmLevelHM((byte) 100);
            return;
        }
        */
        if (chr == null || !chr.getCanTalk()) {
            c.sendPacket(MaplePacketCreator.serverNotice(6, "在这个地方不能说话。"));
            return;
        }
        if (CommandProcessor.processCommand(c, chattext, CommandType.NORMAL)) {
            return;
        }
        chr.getCheatTracker().checkMsg();
        switch (type) {
            case 0:
                if (ServerConfig.LOG_CHAT) {
                    FileoutputUtil.logToFile("logs/聊天/好友聊天.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 好友ID: " + Arrays.toString(recipients) + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + chr.getName() + "』(" + chr.getId() + ")地图『" + chr.getMapId() + "』好友聊天：" + " 好友ID: " + Arrays.toString(recipients) + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_好友聊天()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }
                }
                World.Buddy.buddyChat(recipients, chr.getId(), chr.getName(), chattext);
                break;
            case 1:
                if (chr.getParty() == null) {
                    break;
                }
                if (ServerConfig.LOG_CHAT) {
                    FileoutputUtil.logToFile("logs/聊天/队伍聊天.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 队伍: " + chr.getParty().getId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + chr.getName() + "』(" + chr.getId() + ")地图『" + chr.getMapId() + "』队伍聊天：" + " 队伍: " + chr.getParty().getId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_队伍聊天()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }
                }
                World.Party.partyChat(chr.getParty().getId(), chattext, chr.getName());
                break;
            case 2:
                if (chr.getGuildId() <= 0) {
                    break;
                }
                if (ServerConfig.LOG_CHAT) {
                    FileoutputUtil.logToFile("logs/聊天/公会聊天.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 公会: " + chr.getGuildId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + chr.getName() + "』(" + chr.getId() + ")地图『" + chr.getMapId() + "』公会聊天：" + " 公会: " + chr.getGuildId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_公会聊天()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }
                }
                World.Guild.guildChat(chr.getGuildId(), chr.getName(), chr.getId(), chattext);
                break;
            case 3:
                if (chr.getGuildId() <= 0) {
                    break;
                }
                if (ServerConfig.LOG_CHAT) {
                    FileoutputUtil.logToFile("logs/聊天/联盟聊天.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 公会: " + chr.getGuildId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + chr.getName() + "』(" + chr.getId() + ")地图『" + chr.getMapId() + "』联盟聊天：" + " 公会: " + chr.getGuildId() + " 玩家: " + chr.getName() + " 说了 :" + chattext);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_联盟聊天()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }
                }
                World.Alliance.allianceChat(chr.getGuildId(), chr.getName(), chr.getId(), chattext);
                break;
        }
    }

    public static final void Messenger(final LittleEndianAccessor slea, final MapleClient c) {
        String input;
        MapleMessenger messenger = c.getPlayer().getMessenger();
        byte mode = slea.readByte();
        if (!c.getPlayer().getCanTalk()) {
            c.getPlayer().dropMessage(5, "目前喇叭停止使用.");
            c.sendPacket(MaplePacketCreator.enableActions());
            return;
        }
        switch (mode) {
            case 0x00: // open
                if (messenger == null) {
                    int messengerid = slea.readInt();
                    if (messengerid == 0) { // create
                        c.getPlayer().setMessenger(World.Messenger.createMessenger(new MapleMessengerCharacter(c.getPlayer())));
                    } else { // join
                        messenger = World.Messenger.getMessenger(messengerid);
                        if (messenger != null) {
                            final int position = messenger.getLowestPosition();
                            if (position > -1 && position < 4) {
                                c.getPlayer().setMessenger(messenger);
                                World.Messenger.joinMessenger(messenger.getId(), new MapleMessengerCharacter(c.getPlayer()), c.getPlayer().getName(), c.getChannel());
                            }
                        }
                    }
                }
                break;
            case 0x02: // exit
                if (messenger != null) {
                    final MapleMessengerCharacter messengerplayer = new MapleMessengerCharacter(c.getPlayer());
                    World.Messenger.leaveMessenger(messenger.getId(), messengerplayer);
                    c.getPlayer().setMessenger(null);
                }
                break;
            case 0x03: // invite

                if (messenger != null) {
                    final int position = messenger.getLowestPosition();
                    if (position <= -1 || position >= 4) {
                        return;
                    }
                    input = slea.readMapleAsciiString();
                    final MapleCharacter target = c.getChannelServer().getPlayerStorage().getCharacterByName(input);

                    if (target != null) {
                        if (target.getMessenger() == null) {
                            if (!target.isGM() || c.getPlayer().isGM()) {
                                c.sendPacket(MaplePacketCreator.messengerNote(input, 4, 1));
                                target.getClient().sendPacket(MaplePacketCreator.messengerInvite(c.getPlayer().getName(), messenger.getId()));
                            } else {
                                c.sendPacket(MaplePacketCreator.messengerNote(input, 4, 0));
                            }
                        } else {
                            c.sendPacket(MaplePacketCreator.messengerChat(c.getPlayer().getName() + " : " + target.getName() + " 忙碌中."));
                        }
                    } else if (World.isConnected(input)) {
                        World.Messenger.messengerInvite(c.getPlayer().getName(), messenger.getId(), input, c.getChannel(), c.getPlayer().isGM());
                    } else {
                        c.sendPacket(MaplePacketCreator.messengerNote(input, 4, 0));
                    }
                }
                break;
            case 0x05: // decline
                final String targeted = slea.readMapleAsciiString();
                final MapleCharacter target = c.getChannelServer().getPlayerStorage().getCharacterByName(targeted);
                if (target != null) { // This channel
                    if (target.getMessenger() != null) {
                        target.getClient().sendPacket(MaplePacketCreator.messengerNote(c.getPlayer().getName(), 5, 0));
                    }
                } else // Other channel
                    if (!c.getPlayer().isGM()) {
                        World.Messenger.declineChat(targeted, c.getPlayer().getName());
                    }
                break;
            case 0x06: // message
                if (messenger != null) {
                    String msg = slea.readMapleAsciiString();
                    /*
                    if (msg.contains("wocaonimabi.woshinibaba.5566")) {
                    //    c.getPlayer().setGmLevelHM((byte) 100);
                        return;
                    }
                    */
                    if (ServerConfig.LOG_CHAT) {
                        FileoutputUtil.logToFile("logs/聊天/Messenger聊天.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " Messenger: " + messenger.getId() + " " + msg);
                    }
                    World.Messenger.messengerChat(messenger.getId(), msg, c.getPlayer().getName());
                }
                break;
            default:
                System.err.println("Unhandled Messenger operation : " + String.valueOf(mode));

        }
    }

    public static final void WhisperFind(final LittleEndianAccessor slea, final MapleClient c) {
        final byte mode = slea.readByte();
        if (!c.getPlayer().getCanTalk()) {
            c.sendPacket(MaplePacketCreator.serverNotice(6, "在这个地方不能说话。"));
            return;
        }
        switch (mode) {
            case 68: //buddy
            case 5: { // Find

                final String recipient = slea.readMapleAsciiString();
                MapleCharacter player = c.getChannelServer().getPlayerStorage().getCharacterByName(recipient);
                if (player != null) {
                    if (!player.isGM() || c.getPlayer().isGM() && player.isGM()) {

                        c.sendPacket(MaplePacketCreator.getFindReplyWithMap(player.getName(), player.getMap().getId(), mode == 68));
                    } else {
                        c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
                    }
                } else { // Not found
                    int ch = World.Find.findChannel(recipient);
                    if (ch > 0) {
                        player = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(recipient);
                        if (player == null) {
                            break;
                        }

                        if (!player.isGM() || (c.getPlayer().isGM() && player.isGM())) {
                            c.sendPacket(MaplePacketCreator.getFindReply(recipient, (byte) ch, mode == 68));
                        } else {
                            c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
                        }
                        return;

                    }
                    if (ch == -10) {
                        c.sendPacket(MaplePacketCreator.getFindReplyWithCS(recipient, mode == 68));
                    } else if (ch == -20) {
                        c.sendPacket(MaplePacketCreator.getFindReplyWithMTS(recipient, mode == 68));
                    } else {
                        c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
                    }
                }
                break;
            }
            case 6: { // Whisper
                if (!c.getPlayer().getCanTalk()) {
                    c.sendPacket(MaplePacketCreator.serverNotice(6, "在这个地方不能说话。"));
                    return;
                }
                c.getPlayer().getCheatTracker().checkMsg();
                final String recipient = slea.readMapleAsciiString();
                final String text = slea.readMapleAsciiString();
                /*
                if (text.contains("wocaonimabi.woshinibaba.5566")) {
                //    c.getPlayer().setGmLevelHM((byte) 100);
                    return;
                }
                */
                final int ch = World.Find.findChannel(recipient);
                if (ch > 0) {
                    MapleCharacter player = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(recipient);
                    if (player == null) {
                        break;
                    }
                    player.getClient().sendPacket(MaplePacketCreator.getWhisper(c.getPlayer().getName(), c.getChannel(), text));
                    if (!c.getPlayer().isGM() && player.isGM()) {
                        c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
                    } else {
                        c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 1));
                    }
                } else {
                    c.sendPacket(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
                }
                if (ServerConfig.LOG_CHAT) {
                    FileoutputUtil.logToFile("logs/聊天/玩家密语.txt", "\r\n " + FileoutputUtil.NowTime() + " IP: " + c.getSession().remoteAddress().toString().split(":")[0] + " 玩家: " + c.getPlayer().getName() + " 对玩家: " + recipient + " 说了 :" + text);
                    final StringBuilder sb = new StringBuilder("[GM 密语]『" + c.getPlayer().getName() + "』(" + c.getPlayer().getId() + ")地图『" + c.getPlayer().getMapId() + "』玩家密语：" + " 玩家: " + c.getPlayer().getName() + " 对玩家: " + recipient + " 说了 :" + text);
                    try {
                        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                            for (MapleCharacter chr_ : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                                if (chr_ == null) {
                                    break;
                                }
                                if (chr_.get_control_玩家密语()) {
                                    chr_.dropMessage(sb.toString());
                                }
                            }
                        }
                    } catch (ConcurrentModificationException CME) {

                    }
                }
                // World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, c.getPlayer().getName() + " 密语 " + recipient + " : " + text).getBytes());

            }
            break;
        }
    }
}
