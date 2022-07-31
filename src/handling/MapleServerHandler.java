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
package handling;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.RejectedExecutionException;

import client.MapleClient;
import constants.ServerConfig;
import constants.ServerConstants;
import constants.WorldConstants;
import handling.cashshop.CashShopServer;
import handling.cashshop.handler.CashShopOperation;
import handling.cashshop.handler.MTSOperation;
import handling.channel.ChannelServer;
import handling.channel.handler.AllianceHandler;
import handling.channel.handler.BBSHandler;
import handling.channel.handler.BeanGame;
import handling.channel.handler.BuddyListHandler;
import handling.channel.handler.ChatHandler;
import handling.channel.handler.DueyHandler;
import handling.channel.handler.FamilyHandler;
import handling.channel.handler.GuildHandler;
import handling.channel.handler.HiredMerchantHandler;
import handling.channel.handler.InterServerHandler;
import handling.channel.handler.InventoryHandler;
import handling.channel.handler.ItemMakerHandler;
import handling.channel.handler.MobHandler;
import handling.channel.handler.MonsterCarnivalHandler;
import handling.channel.handler.NPCHandler;
import handling.channel.handler.PartyHandler;
import handling.channel.handler.PetHandler;
import handling.channel.handler.PlayerHandler;
import handling.channel.handler.PlayerInteractionHandler;
import handling.channel.handler.PlayersHandler;
import handling.channel.handler.StatsHandling;
import handling.channel.handler.SummonHandler;
import handling.channel.handler.UserInterfaceHandler;
import handling.login.LoginServer;
import handling.login.handler.CharLoginHandler;
import handling.mina.MaplePacketDecoder;
import handling.world.World;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import scripting.NPCScriptManager;
import server.MTSStorage;
import server.Randomizer;
import tools.FilePrinter;
import tools.FileoutputUtil;
import tools.HexTool;
import tools.MapleAESOFB;
import tools.MaplePacketCreator;
import tools.Pair;
import tools.data.ByteArrayByteStream;
import tools.data.LittleEndianAccessor;
import tools.packet.LoginPacket;

public class MapleServerHandler extends ChannelInboundHandlerAdapter {

    private final int world, channel;
    public final static int CASH_SHOP_SERVER = -10;
    public final static int LOGIN_SERVER = 0;
    private final List<String> BlockedIP = new ArrayList<>();
    private final Map<String, Pair<Long, Byte>> tracker = new ConcurrentHashMap<>();
    // private static final String nl = System.getProperty("line.separator");

    public MapleServerHandler(int world, int channel) {
        this.world = world;
        this.channel = channel;
    }

    private static final EnumSet<RecvPacketOpcode> blocked = EnumSet.noneOf(RecvPacketOpcode.class);

    static {

        RecvPacketOpcode[] block = new RecvPacketOpcode[] { RecvPacketOpcode.NPC_ACTION, RecvPacketOpcode.MOVE_PLAYER,
                RecvPacketOpcode.MOVE_PET, RecvPacketOpcode.MOVE_SUMMON, RecvPacketOpcode.MOVE_LIFE,
                RecvPacketOpcode.HEAL_OVER_TIME, RecvPacketOpcode.STRANGE_DATA };
        blocked.addAll(Arrays.asList(block));
    }

    /*
     * private static class LoggedPacket {
     * 
     * private static final String nl = System.getProperty("line.separator");
     * private String ip, accName, accId, chrName;
     * private LittleEndianAccessor packet;
     * private long timestamp;
     * private RecvPacketOpcode op;
     * 
     * public LoggedPacket(LittleEndianAccessor p, RecvPacketOpcode op, String ip,
     * int id, String accName, String chrName) {
     * setInfo(p, op, ip, id, accName, chrName);
     * }
     * 
     * public final void setInfo(LittleEndianAccessor p, RecvPacketOpcode op, String
     * ip, int id, String accName, String chrName) {
     * this.ip = ip;
     * this.op = op;
     * packet = p;
     * this.accName = accName;
     * this.chrName = chrName;
     * timestamp = System.currentTimeMillis();
     * }
     * 
     * @Override
     * public String toString() {
     * StringBuilder sb = new StringBuilder();
     * sb.append("[IP: ").append(ip).append("] [").append(accId).append('|').append(
     * accName).append('|').append(chrName).append("] [Time: ").append(timestamp).
     * append(']');
     * sb.append(nl);
     * sb.append("[Op: ").append(op.toString()).append(']');
     * sb.append(" [Data: ").append(packet.toString()).append(']');
     * return sb.toString();
     * }
     * }
     */
    @Override
    public void exceptionCaught(final ChannelHandlerContext ctx, final Throwable cause) throws Exception {

        /*
         * try {
         * if (cause.getMessage() != null) {
         * System.err.println("[异常信息] " + cause.getMessage());
         * }
         * if ((!(cause instanceof IOException))) {
         * MapleClient client = (MapleClient)
         * ctx.channel().attr(MapleClient.CLIENT_KEY).get();
         * if ((client != null) && (client.getPlayer() != null)) {
         * try {
         * client.getPlayer().saveToDB(false, channel ==
         * MapleServerHandler.CASH_SHOP_SERVER);
         * } catch (Exception eex) {
         * FileoutputUtil.logToFile("logs/异常抛出保存数据异常.txt", "\r\n " +
         * FileoutputUtil.NowTime() + " IP: " +
         * client.getSession().remoteAddress().toString().split(":")[0] + " 帐号 " +
         * client.getAccountName() + " 帐号ID " + client.getAccID() + " 角色名 " +
         * client.getPlayer().getName() + " 角色ID " + client.getPlayer().getId());
         * FileoutputUtil.outError("logs/异常抛出保存数据异常.txt", eex);
         * }
         * FileoutputUtil.printError("logs/发现异常.txt", cause, "发现异常 by: 玩家:" +
         * client.getPlayer().getName() + " 职业:" + client.getPlayer().getJob() + " 地图:"
         * + client.getPlayer().getMap().getMapName() + " - " +
         * client.getPlayer().getMapId());
         * }
         * }
         * } catch (Exception e) {
         * FileoutputUtil.outError("logs/异常扑捉.txt", e);
         * }
         */
    }

    @Override
    public void channelActive(final ChannelHandlerContext ctx) throws Exception {
        // ctx.getConfig().setBothIdleTime(180);//set timeout seconds, must
        // Start of IP checking
        final String address = ctx.channel().remoteAddress().toString().split(":")[0];
        if (WorldConstants.ADMIN_ONLY) {
            System.out.println("[登录服务] " + address + " 已连接");
        }

        if (BlockedIP.contains(address)) {
            FileoutputUtil.logToFile("logs/Data/连接断线.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: " + address + " 连接断线1");
            ctx.channel().close();
            return;
        }
        final Pair<Long, Byte> track = tracker.get(address);

        byte count;
        if (track == null) {
            count = 1;
        } else {
            count = track.right;

            final long difference = System.currentTimeMillis() - track.left;
            if (difference < 2000) { // Less than 2 sec
                count++;
            } else if (difference > 20000) { // Over 20 sec
                count = 1;
            }
            if (count >= 10) {
                BlockedIP.add(address);
                tracker.remove(address); // Cleanup
                FileoutputUtil.logToFile("logs/Data/连接断线.txt",
                        "\r\n " + FileoutputUtil.NowTime() + " IP: " + address + " 连接断线2");
                ctx.channel().close();
                return;
            }
        }
        tracker.put(address, new Pair<>(System.currentTimeMillis(), count));
        // End of IP checking.

        if (channel == MapleServerHandler.CASH_SHOP_SERVER) {
            if (CashShopServer.isShutdown()) {
                ctx.channel().close();
                return;
            }
        } else if (channel == MapleServerHandler.LOGIN_SERVER) {
            if (LoginServer.isShutdown()) {
                ctx.channel().close();
                return;
            }
        } else if (channel > MapleServerHandler.LOGIN_SERVER) {
            if (ChannelServer.getInstance(channel).isShutdown()) {
                ctx.channel().close();
                return;
            }
        } else {
            System.out.println("[连结错误] 未知类型: " + channel);
            FileoutputUtil.logToFile("logs/Data/连接断线.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: " + address + " 连接断线3");
            ctx.channel().close();
            return;
        }

        // IV used to decrypt packets from client.
        final byte ivRecv[] = new byte[] { (byte) Randomizer.nextInt(255), (byte) Randomizer.nextInt(255),
                (byte) Randomizer.nextInt(255), (byte) Randomizer.nextInt(255) };
        // IV used to encrypt packets for client.
        final byte ivSend[] = new byte[] { (byte) Randomizer.nextInt(255), (byte) Randomizer.nextInt(255),
                (byte) Randomizer.nextInt(255), (byte) Randomizer.nextInt(255) };

        final MapleClient client = new MapleClient(
                new MapleAESOFB(ivSend, (short) (0xFFFF - ServerConstants.MAPLE_VERSION)), // Sent Cypher
                new MapleAESOFB(ivRecv, ServerConstants.MAPLE_VERSION), // Recv Cypher
                ctx.channel());

        client.setChannel(channel);

        MaplePacketDecoder.DecoderState decoderState = new MaplePacketDecoder.DecoderState();
        ctx.channel().attr(MaplePacketDecoder.DECODER_STATE_KEY).set(decoderState);

        ctx.writeAndFlush(LoginPacket.getHello(ServerConstants.MAPLE_VERSION, ivSend, ivRecv));
        ctx.channel().attr(MapleClient.CLIENT_KEY).set(client);

    }

    @Override
    public void channelInactive(final ChannelHandlerContext ctx) throws Exception {
        /*
         * try {
         * MapleClient client = (MapleClient)
         * ctx.channel().attr(MapleClient.CLIENT_KEY).get();
         * 
         * if (client != null) {
         * if (client.getPlayer() != null) {
         * client.getPlayer().saveToDB(true, channel ==
         * MapleServerHandler.CASH_SHOP_SERVER);
         * if (!(client.getLoginState() == MapleClient.CASH_SHOP_TRANSITION||
         * client.getLoginState() == MapleClient.CHANGE_CHANNEL|| client.getLoginState()
         * == MapleClient.LOGIN_SERVER_TRANSITION) && client.getPlayer() != null) {
         * int ch = World.Find.findChannel(client.getPlayer().getId());
         * ChannelServer.getInstance(ch).removePlayer(client.getPlayer());
         * client.disconnect(true, channel == MapleServerHandler.CASH_SHOP_SERVER);
         * }
         * }
         * if (channel == MapleServerHandler.LOGIN_SERVER) {
         * LoginServer.removeClient(client);
         * }
         * }
         * 
         * if (client != null) {
         * ctx.channel().attr(MapleClient.CLIENT_KEY).remove();
         * }
         * 
         * } finally {
         * super.channelInactive(ctx);
         * }
         */
        try {
            final MapleClient client = (MapleClient) ctx.channel().attr(MapleClient.CLIENT_KEY).get();

            if (client != null) {
                try {
                    client.disconnect(true, channel == MapleServerHandler.CASH_SHOP_SERVER);
                    if (channel == MapleServerHandler.LOGIN_SERVER) {
                        client.setCanloginpw(false);
                        LoginServer.removeClient(client);
                    }
                } finally {
                    ctx.channel().close();
                    ctx.channel().attr(MapleClient.CLIENT_KEY).remove();
                    // ctx.channel().attr(MaplePacketDecoder.DECODER_STATE_KEY).remove();
                }
            }
        } catch (Exception e) {
            FileoutputUtil.outError("logs/断开连接异常.txt", e);
        }
        super.channelInactive(ctx);
    }

    @Override
    public void channelRead(final ChannelHandlerContext ctx, final Object message) {
        final LittleEndianAccessor slea = new LittleEndianAccessor(new ByteArrayByteStream((byte[]) message));
        if (slea.available() < 2) {
            return;
        }
        final MapleClient c = (MapleClient) ctx.channel().attr(MapleClient.CLIENT_KEY).get();
        if (c == null || !c.isReceiving()) {
            return;
        }
        final short header_num = slea.readShort();
        /*
         * if (ServerConfig.Encoder) {
         * if (!c.isLoggedIn()) {
         * if (header_num > 0x100) {
         * ctx.channel().close();
         * return;
         * }
         * }
         * }
         */

        for (final RecvPacketOpcode recv : RecvPacketOpcode.values()) {
            if (recv.getValue() == header_num) {
                if (recv.NeedsChecking()) {
                    if (!c.isLoggedIn()) {
                        return;
                    }
                }
                if (c.getPlayer() != null && c.isMonitored()) {
                    if (!blocked.contains(recv)) {
                        FilePrinter.print("Monitored/" + c.getPlayer().getName() + ".txt", String.valueOf(recv) + " ("
                                + Integer.toHexString(header_num) + ") Handled: \r\n" + slea.toString() + "\r\n");
                    }
                }
                try {
                    handlePacket(recv, slea, c, channel == MapleServerHandler.CASH_SHOP_SERVER);
                } catch (RejectedExecutionException RE) {
                } catch (Exception e) {
                    if (c.getPlayer() != null && c.getPlayer().isShowErr()) {
                        c.getPlayer().showInfo("数据包异常", true,
                                "包头:" + recv.name() + "(0x" + Integer.toHexString(header_num).toUpperCase() + ")");
                    }
                    FileoutputUtil.outputFileError(FileoutputUtil.CodeEx_Log, e, false);
                    FileoutputUtil.outputFileError(FileoutputUtil.PacketEx_Log, e);
                    FileoutputUtil.log(FileoutputUtil.PacketEx_Log,
                            "Packet: " + header_num + "\r\n" + slea.toString(true));
                }
                return;
            }
        }
        if (ServerConfig.LOG_PACKETS) {
            final byte[] packet = slea.read((int) slea.available());
            final StringBuilder sb = new StringBuilder("发现未知用户端数据包 - (包头:0x" + Integer.toHexString(header_num) + ")");
            System.err.println(sb.toString());
            sb.append(":\r\n").append(HexTool.toString(packet)).append("\r\n")
                    .append(HexTool.toStringFromAscii(packet));
            FileoutputUtil.log(FileoutputUtil.UnknownPacket_Log, sb.toString());
        }
    }

    @Override
    public void userEventTriggered(final ChannelHandlerContext ctx, final Object status) throws Exception {
        MapleClient client = (MapleClient) ctx.channel().attr(MapleClient.CLIENT_KEY).get();

        if (client != null) {
            client.sendPing();
        } else {
            ctx.channel().close();
            System.out.println("netty检测心跳掉线。");
        }
        super.userEventTriggered(ctx, status);
    }

    public static final void handlePacket(final RecvPacketOpcode header, final LittleEndianAccessor slea,
            final MapleClient c, final boolean cs) throws Exception {
        switch (header) {
            case CLIENT_LOGOUT:
                // PlayerHandler.handleLogout(slea, c);
                break;
            case PONG:
                c.pongReceived();
                break;
            case STRANGE_DATA:
                break;
            case HELLO_LOGIN:
                if (slea.available() >= 5) {
                    Long avaible = slea.available();
                    String debug = "";
                    if (c != null) {
                        debug += c.getAccountName() + "_";
                    }
                    FilePrinter.print(debug + "38Logs.txt", HexTool.toStringFromAscii(slea.read(avaible.intValue())),
                            true);
                }
                break;

            case HELLO_CHANNEL:
                // CharLoginHandler.handleWelcome(c);
                break;
            case LOGIN_PASSWORD:
                CharLoginHandler.handleLogin(slea, c);
                break;
            case SERVERLIST_REQUEST:
                CharLoginHandler.ServerListRequest(c);
                break;
            case CHARLIST_REQUEST:
                CharLoginHandler.CharlistRequest(slea, c);
                break;
            case SERVERSTATUS_REQUEST:
                CharLoginHandler.ServerStatusRequest(c);
                break;
            case CHECK_CHAR_NAME:
                CharLoginHandler.checkCharName(slea.readMapleAsciiString(), c);
                break;
            case CREATE_CHAR:
                CharLoginHandler.handleCreateCharacter(slea, c);
                break;
            case DELETE_CHAR:
                CharLoginHandler.handleDeleteCharacter(slea, c);
                break;
            case CHAR_SELECT:
                CharLoginHandler.handleSecectCharacter(slea, c);
                break;
            case SET_GENDER:
                CharLoginHandler.SetGenderRequest(slea, c);
                break;
            // END OF LOGIN SERVER
            case CHANGE_CHANNEL:
                InterServerHandler.ChangeChannel(slea, c, c.getPlayer());
                break;
            case PLAYER_LOGGEDIN:
                final int playerid = slea.readInt();
                if (cs) {
                    CashShopOperation.EnterCashShop(playerid, c);
                } else {
                    InterServerHandler.LoggedIn(playerid, c);
                }
                break;
            case ENTER_CASH_SHOP:
                if (c.getPlayer().getMapId() != 980000010
                        & c.getPlayer().getMapId() != 980000020
                        & c.getPlayer().getMapId() != 980000100
                        & c.getPlayer().getMapId() != 980000101
                        & c.getPlayer().getMapId() != 980000102
                        & c.getPlayer().getMapId() != 980000103
                        & c.getPlayer().getMapId() != 980000104
                        & c.getPlayer().getMapId() != 980000200
                        & c.getPlayer().getMapId() != 980000201
                        & c.getPlayer().getMapId() != 980000202
                        & c.getPlayer().getMapId() != 980000203
                        & c.getPlayer().getMapId() != 980000204
                        & c.getPlayer().getMapId() != 980000300
                        & c.getPlayer().getMapId() != 980000301
                        & c.getPlayer().getMapId() != 980000302
                        & c.getPlayer().getMapId() != 980000303
                        & c.getPlayer().getMapId() != 980000304
                        & c.getPlayer().getMapId() != 980000400
                        & c.getPlayer().getMapId() != 980000401
                        & c.getPlayer().getMapId() != 980000402
                        & c.getPlayer().getMapId() != 980000403
                        & c.getPlayer().getMapId() != 980000404
                        & c.getPlayer().getMapId() != 980000400
                        & c.getPlayer().getMapId() != 980000501
                        & c.getPlayer().getMapId() != 980000502
                        & c.getPlayer().getMapId() != 980000503
                        & c.getPlayer().getMapId() != 980000504
                        & c.getPlayer().getMapId() != 980000600
                        & c.getPlayer().getMapId() != 980000601
                        & c.getPlayer().getMapId() != 980000602
                        & c.getPlayer().getMapId() != 980000603
                        & c.getPlayer().getMapId() != 980000604) {
                    // InterServerHandler.EnterCashShop(c, c.getPlayer(), false);
                    c.getSession().writeAndFlush(tools.MaplePacketCreator.enableActions());
                    NPCScriptManager.getInstance().start(c, 9010000, "进入商城");
                } else {
                    c.getPlayer().dropMessage(5, "该地图无法进入商城。");
                }
                break;
            case ENTER_MTS:
                if (World.isShutDown) {
                    c.getPlayer().dropMessage(1, "服务器正在关闭，现在无法使用拍卖！\r\n请立即下线，否则后果自负！");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                if (c.getPlayer().getTrade() != null) {
                    c.getPlayer().dropMessage(1, "交易中无法进行其他操作！");
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                if (c.getPlayer().hasBlockedInventory(true) || c.getPlayer().getMap() == null
                        || c.getPlayer().getEventInstance() != null || c.getChannelServer() == null) {
                    c.sendPacket(MaplePacketCreator.serverBlocked(2));
                    c.sendPacket(MaplePacketCreator.enableActions());
                    return;
                }
                NPCScriptManager.getInstance().dispose(c);
                if (c.getPlayer().getMapId() == 910010300 || c.getPlayer().getMapId() == 910010100
                        || ((c.getPlayer().getMapId() > 211060000) && (c.getPlayer().getMapId() <= 211061000))) {
                    c.getPlayer().dropMessage(5, "该地图无法使用拍卖功能。");
                } else {
                    c.getSession().writeAndFlush(tools.MaplePacketCreator.enableActions());
                    NPCScriptManager.getInstance().start(c, 9010000, "拍卖");
                }
                // InterServerHandler.EnterCashShop(c, c.getPlayer(), true);
                break;
            case MOVE_PLAYER:
                PlayerHandler.MovePlayer(slea, c, c.getPlayer());
                break;
            case CHAR_INFO_REQUEST:
                c.getPlayer().updateTick(slea.readInt());
                PlayerHandler.CharInfoRequest(slea.readInt(), c, c.getPlayer());
                // System.err.println("CHAR_INFO_REQUEST");
                break;
            case CLOSE_RANGE_ATTACK:
                PlayerHandler.closeRangeAttack(slea, c, c.getPlayer(), false);
                break;
            case RANGED_ATTACK:
                PlayerHandler.rangedAttack(slea, c, c.getPlayer());
                break;
            case MAGIC_ATTACK:
                PlayerHandler.MagicDamage(slea, c, c.getPlayer());
                break;
            case SPECIAL_MOVE:
                PlayerHandler.SpecialMove(slea, c, c.getPlayer());
                break;
            case PASSIVE_ENERGY:
                PlayerHandler.closeRangeAttack(slea, c, c.getPlayer(), true);
                break;
            case FACE_EXPRESSION:
                PlayerHandler.ChangeEmotion(slea.readInt(), c.getPlayer());
                break;
            case TAKE_DAMAGE:
                PlayerHandler.TakeDamage(slea, c, c.getPlayer());
                break;
            case HEAL_OVER_TIME:
                PlayerHandler.Heal(slea, c.getPlayer());
                break;
            case CANCEL_BUFF:
                PlayerHandler.CancelBuffHandler(slea.readInt(), c.getPlayer());
                break;
            case CANCEL_ITEM_EFFECT:
                PlayerHandler.CancelItemEffect(slea.readInt(), c.getPlayer());
                break;
            case USE_CHAIR:
                PlayerHandler.UseChair(slea.readInt(), c, c.getPlayer());
                break;
            case SHOW_EXP_CHAIR:
                PlayerHandler.ShowExpChair(slea, c);
                break;
            case CANCEL_CHAIR:
                PlayerHandler.CancelChair(slea.readShort(), c, c.getPlayer());
                break;
            case USE_ITEMEFFECT:
            case WHEEL_OF_FORTUNE:
                PlayerHandler.UseItemEffect(slea.readInt(), c, c.getPlayer());
                break;
            case SKILL_EFFECT:
                PlayerHandler.SkillEffect(slea, c.getPlayer());
                break;
            case MESO_DROP:
                c.getPlayer().updateTick(slea.readInt());
                PlayerHandler.DropMeso(slea.readInt(), c.getPlayer());
                break;
            case MONSTER_BOOK_COVER:
                PlayerHandler.ChangeMonsterBookCover(slea.readInt(), c, c.getPlayer());
                break;
            case CHANGE_KEYMAP:
                PlayerHandler.ChangeKeymap(slea, c.getPlayer());
                break;
            case CHANGE_MAP:
                if (cs) {
                    CashShopOperation.LeaveCashShop(slea, c, c.getPlayer());
                } else {
                    PlayerHandler.ChangeMap(slea, c, c.getPlayer());
                }
                break;
            case CHANGE_MAP_SPECIAL:
                slea.skip(1);
                PlayerHandler.ChangeMapSpecial(slea.readMapleAsciiString(), c, c.getPlayer());
                break;
            case USE_INNER_PORTAL:
                slea.skip(1);
                PlayerHandler.InnerPortal(slea, c, c.getPlayer());
                break;
            case TROCK_ADD_MAP:
                PlayerHandler.TrockAddMap(slea, c, c.getPlayer());
                break;
            case LIE_DETECTOR_SKILL:
                // c.getPlayer().dropMessage(5, "服务器暂不开放测谎系统。");
                PlayersHandler.LieDetector(slea, c, c.getPlayer(), false);
                break;
            case LIE_DETECTOR:
                // c.getPlayer().dropMessage(5, "服务器暂不开放测谎系统。");
                PlayersHandler.LieDetector(slea, c, c.getPlayer(), true);
                break;
            case LIE_DETECTOR_RESPONSE:
                // c.getPlayer().dropMessage(5, "服务器暂不开放测谎系统。");
                PlayersHandler.LieDetectorResponse(slea, c);
                break;
            case LIE_DETECTOR_REFRESH:
                // PlayersHandler.LieDetectorRefresh(slea, c);
                break;
            case ARAN_COMBO:
                PlayerHandler.AranCombo(c, c.getPlayer(), 1);
                break;
            case SKILL_MACRO:
                PlayerHandler.ChangeSkillMacro(slea, c.getPlayer());
                break;
            case ITEM_BAOWU:
                InventoryHandler.UsePenguinBox(slea, c);
                break;
            case GIVE_FAME:
                PlayersHandler.GiveFame(slea, c, c.getPlayer());
                break;
            case TRANSFORM_PLAYER:
                PlayersHandler.TransformPlayer(slea, c, c.getPlayer());
                break;
            case NOTE_ACTION:
                PlayersHandler.Note(slea, c.getPlayer());
                break;
            case USE_DOOR:
                PlayersHandler.UseDoor(slea, c.getPlayer());
                break;
            case DAMAGE_REACTOR:
                PlayersHandler.HitReactor(slea, c);
                break;
            case TOUCH_REACTOR:
                PlayersHandler.TouchReactor(slea, c);
                break;
            case CLOSE_CHALKBOARD:
                c.getPlayer().setChalkboard(null);
                break;
            case ITEM_MAKER:
                ItemMakerHandler.ItemMaker(slea, c);
                break;
            case ITEM_SORT:
                InventoryHandler.ItemSort(slea, c);
                break;
            case ITEM_GATHER:
                InventoryHandler.ItemGather(slea, c);
                break;
            case ITEM_MOVE:
                InventoryHandler.ItemMove(slea, c);
                break;
            case ITEM_PICKUP:
                InventoryHandler.PlayerPickup(slea, c, c.getPlayer());
                break;
            case USE_CASH_ITEM:
                InventoryHandler.UseCashItem(slea, c);
                break;
            case USE_ITEM:
                InventoryHandler.UseItem(slea, c, c.getPlayer());
                break;
            case USE_MAGNIFY_GLASS:
                InventoryHandler.UseMagnify(slea, c);
                break;
            case USE_SCRIPTED_NPC_ITEM:
                InventoryHandler.UseScriptedNPCItem(slea, c, c.getPlayer());
                break;
            case USE_RETURN_SCROLL:
                InventoryHandler.UseReturnScroll(slea, c, c.getPlayer());
                break;
            case USE_UPGRADE_SCROLL:
                c.getPlayer().updateTick(slea.readInt());
                InventoryHandler.UseUpgradeScroll((byte) slea.readShort(), (byte) slea.readShort(),
                        (byte) slea.readShort(), c, c.getPlayer());
                break;
            case USE_POTENTIAL_SCROLL:
                c.getPlayer().updateTick(slea.readInt());
                InventoryHandler.UseUpgradeScroll((byte) slea.readShort(), (byte) slea.readShort(), (byte) 0, c,
                        c.getPlayer());
                break;
            case USE_EQUIP_SCROLL:
                c.getPlayer().updateTick(slea.readInt());
                InventoryHandler.UseUpgradeScroll((byte) slea.readShort(), (byte) slea.readShort(), (byte) 0, c,
                        c.getPlayer());
                break;
            case USE_SUMMON_BAG:
                InventoryHandler.UseSummonBag(slea, c, c.getPlayer());
                break;
            case USE_TREASUER_CHEST:
                InventoryHandler.UseTreasureChest(slea, c, c.getPlayer());
                break;
            case USE_SKILL_BOOK:
                // c.getPlayer().updateTick(slea.readInt());
                InventoryHandler.UseSkillBook(slea, c, c.getPlayer());
                break;
            case USE_CATCH_ITEM:
                InventoryHandler.UseCatchItem(slea, c, c.getPlayer());
                break;
            case USE_MOUNT_FOOD:
                InventoryHandler.UseMountFood(slea, c, c.getPlayer());
                break;
            case REWARD_ITEM:
                InventoryHandler.UseRewardItem((byte) slea.readShort(), slea.readInt(), c, c.getPlayer());
                break;
            case HYPNOTIZE_DMG:
                MobHandler.HypnotizeDmg(slea, c);
                break;
            case MOB_NODE:
                MobHandler.handleMobNode(slea, c);
                break;
            case DISPLAY_NODE:
                MobHandler.handleDisplayNode(slea, c);
                break;
            case MOVE_LIFE:
                MobHandler.MoveMonster(slea, c);
                break;
            case AUTO_AGGRO:
                MobHandler.handleAutoAggro(slea, c);
                break;
            case FRIENDLY_DAMAGE:
                MobHandler.handleFriendlyDamage(slea, c);
                break;
            case MONSTER_BOMB:
                MobHandler.handleMonsterBomb(slea, c);
                break;
            case QUEST_ACTION:
                NPCHandler.QuestAction(slea, c, c.getPlayer());
                break;
            case NPC_SHOP:
                NPCHandler.handleNPCShop(slea, c);
                break;
            case NPC_TALK:
                NPCHandler.handleNPCTalk(slea, c, c.getPlayer());
                break;
            case NPC_TALK_MORE:
                NPCHandler.NPCMoreTalk(slea, c);
                break;
            case NPC_ACTION:
                NPCHandler.handleNPCAnimation(slea, c);
                break;
            case STORAGE:
                NPCHandler.Storage(slea, c, c.getPlayer());
                break;
            case GENERAL_CHAT:
                ChatHandler.GeneralChat(slea.readMapleAsciiString(), slea.readByte(), c, c.getPlayer());
                break;
            case PARTYCHAT:
                ChatHandler.Others(slea, c, c.getPlayer());
                break;
            case WHISPER:
                ChatHandler.WhisperFind(slea, c);
                break;
            case MESSENGER:
                ChatHandler.Messenger(slea, c);
                break;
            case AUTO_ASSIGN_AP:
                StatsHandling.AutoAssignAP(slea, c, c.getPlayer());
                break;
            case DISTRIBUTE_AP:
                StatsHandling.DistributeAP(slea, c, c.getPlayer());
                break;
            case DISTRIBUTE_SP:
                c.getPlayer().updateTick(slea.readInt());
                StatsHandling.DistributeSP(slea.readInt(), c, c.getPlayer());
                break;
            case PLAYER_INTERACTION:
                PlayerInteractionHandler.PlayerInteraction(slea, c, c.getPlayer());
                break;
            case GUILD_OPERATION:
                GuildHandler.HandleGuild(slea, c);
                break;
            case UPDATE_CHAR_INFO:
                PlayersHandler.UpdateCharInfo(slea, c, c.getPlayer());
                break;
            case DENY_GUILD_REQUEST:
                slea.skip(1);
                GuildHandler.denyGuildRequest(slea.readMapleAsciiString(), c);
                break;
            case ALLIANCE_OPERATION:
                AllianceHandler.HandleAlliance(slea, c, false);
                break;
            case DENY_ALLIANCE_REQUEST:
                AllianceHandler.HandleAlliance(slea, c, true);
                break;
            case BBS_OPERATION:
                BBSHandler.HandleBBS(slea, c);
                break;
            case PARTY_OPERATION:
                PartyHandler.PartyOperatopn(slea, c);
                break;
            case DENY_PARTY_REQUEST:
                PartyHandler.DenyPartyRequest(slea, c);
                break;
            case BUDDYLIST_MODIFY:
                BuddyListHandler.BuddyOperationHandler(slea, c);
                break;
            case CYGNUS_SUMMON:
                UserInterfaceHandler.CygnusSummonNPCRequest(c);
                break;
            case CASHSHOP_OPERATION:
                CashShopOperation.BuyCashItem(slea, c, c.getPlayer());
                break;
            case COUPON_CODE:
                slea.skip(2);
                CashShopOperation.CouponCode(slea.readMapleAsciiString(), c);
                break;
            case CS_UPDATE:
                CashShopOperation.sendCashShopUpdate(c);
                break;
            case TOUCHING_MTS:
                MTSOperation.MTSUpdate(MTSStorage.getInstance().getCart(c.getPlayer().getId()), c);
                break;
            case MTS_TAB:
                MTSOperation.MTSOperation(slea, c);
                break;
            case DAMAGE_SUMMON:
                slea.skip(4);
                SummonHandler.DamageSummon(slea, c.getPlayer());
                break;
            case MOVE_SUMMON:
                SummonHandler.MoveSummon(slea, c.getPlayer());
                break;
            case SUMMON_ATTACK:
                SummonHandler.SummonAttack(slea, c, c.getPlayer());
                break;
            case SPAWN_PET:
                PetHandler.SpawnPet(slea, c, c.getPlayer());
                break;
            case MOVE_PET:
                PetHandler.MovePet(slea, c.getPlayer());
                break;
            case PET_CHAT:
                if (slea.available() < 12) {
                    break;
                }
                PetHandler.PetChat((int) slea.readLong(), slea.readShort(), slea.readMapleAsciiString(), c.getPlayer());
                break;
            case PET_COMMAND:
                PetHandler.PetCommand(slea, c, c.getPlayer());
                break;
            case PET_FOOD:
                PetHandler.PetFood(slea, c, c.getPlayer());
                break;
            case PET_LOOT:
                InventoryHandler.PetPickup(slea, c, c.getPlayer());
                break;
            case PET_AUTO_POT:
                PetHandler.Pet_AutoPotion(slea, c, c.getPlayer());
                break;
            case MONSTER_CARNIVAL:
                MonsterCarnivalHandler.MonsterCarnival(slea, c);
                break;
            case DUEY_ACTION:
                DueyHandler.DueyOperation(slea, c);
                break;
            case USE_HIRED_MERCHANT:
                HiredMerchantHandler.UseHiredMerchant(slea, c);
                break;
            case MERCH_ITEM_STORE:
                HiredMerchantHandler.MerchantItemStore(slea, c);
                break;
            case CANCEL_DEBUFF:
                // Ignore for now
                break;
            case LEFT_KNOCK_BACK:
                PlayerHandler.leftKnockBack(slea, c);
                break;
            case SNOWBALL:
                PlayerHandler.snowBall(slea, c);
                break;
            case COCONUT:
                // PlayersHandler.hitCoconut(slea, c);
                break;
            case REPAIR:
                NPCHandler.repair(slea, c);
                break;
            case REPAIR_ALL:
                NPCHandler.repairAll(c);
                break;
            case GAME_POLL:
                UserInterfaceHandler.InGamePoll(slea, c);
                break;
            case OWL:
                InventoryHandler.Owl(slea, c);
                break;
            case OWL_WARP:
                InventoryHandler.OwlWarp(slea, c);
                break;
            case USE_OWL_MINERVA:
                InventoryHandler.OwlMinerva(slea, c);
                break;
            // case RPS_GAME:
            // NPCHandler.RPSGame(slea, c);
            // break;
            case UPDATE_QUEST:
                NPCHandler.UpdateQuest(slea, c);
                break;
            case USE_ITEM_QUEST:
                NPCHandler.UseItemQuest(slea, c);
                break;
            case FOLLOW_REQUEST:
                PlayersHandler.FollowRequest(slea, c);
                break;
            case FOLLOW_REPLY:
                PlayersHandler.FollowReply(slea, c);
                break;
            case RING_ACTION:
                PlayersHandler.RingAction(slea, c);
                break;
            case ITEM_UNLOCK:
                PlayersHandler.UnlockItem(slea, c);
                break;
            case SOLOMON:
                PlayersHandler.Solomon(slea, c);
                break;
            case GACH_EXP:
                PlayersHandler.GachExp(slea, c);
                break;
            case REQUEST_FAMILY:
                FamilyHandler.RequestFamily(slea, c);
                break;
            case OPEN_FAMILY:
                FamilyHandler.OpenFamily(slea, c);
                break;
            case FAMILY_OPERATION:
                FamilyHandler.FamilyOperation(slea, c);
                break;
            case PET_IGNORE:
                PetHandler.PetIgnoreTag(slea, c, c.getPlayer());
                break;
            case DELETE_JUNIOR:
                FamilyHandler.DeleteJunior(slea, c);
                break;
            case DELETE_SENIOR:
                FamilyHandler.DeleteSenior(slea, c);
                break;
            case USE_FAMILY:
                FamilyHandler.UseFamily(slea, c);
                break;
            case FAMILY_PRECEPT:
                FamilyHandler.FamilyPrecept(slea, c);
                break;
            case FAMILY_SUMMON:
                FamilyHandler.FamilySummon(slea, c);
                break;
            case ACCEPT_FAMILY:
                FamilyHandler.AcceptFamily(slea, c);
                break;
            case CLIENT_FEEDBACK:
                /*
                 * String debug = "";
                 * String msg = "";
                 * if (slea.available() > 2) {
                 * msg = slea.readMapleAsciiString();
                 * }
                 * if (c != null) {
                 * debug += "_" + c.getAccountName();
                 * }
                 * if (!"".equals(msg)) {
                 * FilePrinter.print("ClientCrashFeedback" + debug + ".txt", msg, true);
                 * }
                 */
                break;
            case CLIENT_ERROR:
                // if (slea.available() < 8) {
                // System.out.println(slea.toString());
                // return;
                // }
                short type = slea.readShort();
                String type_str = "Unknown?!";
                if (type == 0x01) {
                    type_str = "SendBackupPacket";
                } else if (type == 0x02) {
                    type_str = "Crash Report";
                } else if (type == 0x03) {
                    type_str = "Exception";
                }
                int errortype = slea.readInt(); // example error 38
                // if (errortype == 0) { // i don't wanna log error code 0 stuffs, (usually some
                // bounceback to login)
                // return;
                // }
                short data_length = slea.readShort();
                slea.skip(4); // ?B3 86 01 00 00 00 FF 00 00 00 00 00 9E 05 C8 FF 02 00 CD 05 C9 FF 7D 00 00
                              // 00 3F 00 00 00 00 00 02 77 01 00 25 06 C9 FF 7D 00 00 00 40 00 00 00 00 00 02
                              // C1 02
                short opcodeheader = slea.readShort();
                byte[] opcode = slea.read((int) slea.available());
                int packetLen = (int) slea.available() + 2;
                if (errortype == 38) {
                    // System.err.println("收到用户端的报错: (详细请看日志/用户端_报错.txt) " +
                    // SendPacketOpcode.nameOf(opcodeheader) + "包头:" +
                    // HexTool.getOpcodeToString(opcodeheader) + " [" + (data_length - 4) + "字元]");
                }
                String AccountName = "null";
                String charName = "null";
                String charLevel = "null";
                String charJob = "null";
                String Map = "null";
                String charId = "null";
                try {
                    AccountName = c.getAccountName();
                } catch (Throwable e) {
                }
                try {
                    charName = c.getPlayer().getName();
                } catch (Throwable e) {
                }
                try {
                    charId = String.valueOf(c.getPlayer().getId());
                } catch (Throwable e) {
                }

                try {
                    charLevel = String.valueOf(c.getPlayer().getLevel());
                } catch (Throwable e) {
                }
                try {
                    charJob = String.valueOf(c.getPlayer().getJob());
                } catch (Throwable e) {
                }
                try {
                    Map = String.valueOf(c.getPlayer().getMap().getId());
                } catch (Throwable e) {
                }

                // System.err.println("[用户端 报错] 错误代码 " + errortype + " 类型 " + type_str +
                // "\r\n\t[数据] 长度 " + data_length + " [" + SendPacketOpcode.nameOf(opcodeheader)
                // + " | " + opcodeheader + "]\r\n" + HexTool.toString(slea.read((int)
                // slea.available())));
                String tab = "";
                for (int i = 4; i > SendPacketOpcode.nameOf(opcodeheader).length() / 8; i--) {
                    tab += "\t";
                }
                String t = packetLen >= 10 ? packetLen >= 100 ? packetLen >= 1000 ? "" : " " : "  " : "   ";
                if (errortype == 38) {
                    /*
                     * FileoutputUtil.log(FileoutputUtil.Client_Error, "\r\n"
                     * + "帐号:" + AccountName + "\r\n"
                     * + "角色:" + charName + "(等级:" + charLevel + ") 编号: " + charId + "" + "\r\n"
                     * + "职业:" + charJob + "\r\n"
                     * + "地图:" + Map + "\r\n"
                     * + "错误类型: " + type_str + "(" + errortype + ")\r\n"
                     * + "\r\n"
                     * + "[发送]\t" + SendPacketOpcode.nameOf(opcodeheader) + tab + " \t包头:" +
                     * HexTool.getOpcodeToString(opcodeheader) + t + "[" + (data_length - 4) +
                     * "字元]\r\n"
                     * + "\r\n"
                     * + (opcode.length < 1 ? "" : (HexTool.toString(opcode) + "\r\n"))
                     * + (opcode.length < 1 ? "" : (HexTool.toStringFromAscii(opcode) + "\r\n"))
                     * + "\r\n");
                     */
                } else {
                    /*
                     * FileoutputUtil.log(FileoutputUtil.Client_Error_2, "\r\n"
                     * + "帐号:" + AccountName + "\r\n"
                     * + "角色:" + charName + "(等级:" + charLevel + ")" + "\r\n"
                     * + "职业:" + charJob + "\r\n"
                     * + "地图:" + Map + "\r\n"
                     * + "错误类型: " + type_str + "(" + errortype + ")\r\n"
                     * + "\r\n"
                     * + "[发送]\t" + SendPacketOpcode.nameOf(opcodeheader) + tab + " \t包头:" +
                     * HexTool.getOpcodeToString(opcodeheader) + t + "[" + (data_length - 4) +
                     * "字元]\r\n"
                     * + "\r\n"
                     * + (opcode.length < 1 ? "" : (HexTool.toString(opcode) + "\r\n"))
                     * + (opcode.length < 1 ? "" : (HexTool.toStringFromAscii(opcode) + "\r\n"))
                     * + "\r\n");
                     */
                }
                break;
            case SPECIAL_ATTACK:
                PlayerHandler.SpecialAttack(slea, c, c.getPlayer());
                break;
            case BEANS_OPERATION:
                BeanGame.BeansGameAction(slea, c);
                break;
            case BEANS_UPDATE:
                BeanGame.updateBeans(slea, c);
                break;
            case LICENSE_REQUEST:
                CharLoginHandler.LicenseRequest(slea, c);
                break;
            default:
                // System.err.println("[发现未处理数据包] Recv [" + header.toString() + "]");
                break;
        }
    }
}
