/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.messages.commands;

import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.MapleClient;
import client.SkillFactory;
import constants.ServerConstants;
import database.DBConPool;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.world.World;
import server.maps.MapleMap;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.StringUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author Windyboy
 */
public class PracticerCommand {

    public static ServerConstants.PlayerGMRank getPlayerLevelRequired() {
        return ServerConstants.PlayerGMRank.新实习生;
    }

    public static class WarpT extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            List<MapleCharacter> chrs = new LinkedList<>();
            String input = splitted[1].toLowerCase();
            MapleCharacter smart_victim = null;
            StringBuilder sb = new StringBuilder();
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    String name = chr.getName().toLowerCase();
                    if (name.contains(input)) {
                        if (smart_victim == null) {
                            smart_victim = chr;
                        }
                        chrs.add(chr);
                    }
                }
            }
            if (chrs.size() > 1) {
                sb.append("寻找到的玩家共").append(chrs.size()).append("位 名单如下 : ");
                c.getPlayer().dropMessage(5, sb.toString());
                for (MapleCharacter list : chrs) {
                    c.getPlayer().dropMessage(5, "频道" + list.getClient().getChannel() + ": " + list.getName() + "("
                            + list.getId() + ") -- " + list.getMapId() + "(" + list.getMap().getMapName() + ")");
                }
                return true;
            } else if (chrs.isEmpty()) {
                c.getPlayer().dropMessage(6, "没有搜寻到名称含有 '" + input + "' 的角色");
            } else if (smart_victim != null) {
                c.getPlayer().changeMap(smart_victim.getMap(),
                        smart_victim.getMap().findClosestSpawnpoint(smart_victim.getTruePosition()));
            } else {
                c.getPlayer().dropMessage(6, "角色不存在或是不在线上");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!WarpT [玩家名称片段] - 移动到某个地图或某个玩家所在的地方";
        }
    }

    public static class Warp extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String input = "";
            try {
                input = splitted[1];
            } catch (Exception ex) {
            }
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(input);

            if (victim != null) {
                if (splitted.length == 2) {
                    c.getPlayer().changeMap(victim.getMap(),
                            victim.getMap().findClosestSpawnpoint(victim.getPosition()));
                } else {
                    MapleMap target = null;
                    try {
                        target = ChannelServer.getInstance(c.getChannel()).getMapFactory()
                                .getMap(Integer.parseInt(splitted[2]));
                    } catch (Exception ex) {

                    }
                    if (target == null) {
                        c.getPlayer().dropMessage(6, "地图不存在");
                    } else {
                        victim.changeMap(target, target.getPortal(0));
                    }

                }
            } else {
                int ch = World.Find.findChannel(input);
                if (ch < 0) {
                    Integer map = null;
                    MapleMap target = null;
                    try {
                        map = Integer.parseInt(input);
                        target = c.getChannelServer().getMapFactory().getMap(map);
                    } catch (Exception ex) {
                        if (map == null || target == null) {
                            c.getPlayer().dropMessage(6, "地图不存在");
                            return true;
                        }
                    }
                    if (target == null) {
                        c.getPlayer().dropMessage(6, "地图不存在");
                    } else {
                        c.getPlayer().changeMap(target, target.getPortal(0));
                    }
                } else {
                    victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(input);
                    if (victim != null) {
                        if (victim.getMapId() != c.getPlayer().getMapId()) {
                            final MapleMap mapp = c.getChannelServer().getMapFactory().getMap(victim.getMapId());
                            c.getPlayer().changeMap(mapp, mapp.getPortal(0));
                        }
                        c.getPlayer().dropMessage(6, "正在改变频道请等待");
                        c.getPlayer().changeChannel(ch);

                    } else {
                        c.getPlayer().dropMessage(6, "角色不存在");
                    }
                }

            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!warp [玩家名称] <地图ID> - 移动到某个地图或某个玩家所在的地方";
        }
    }

    public static class WarpID extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            int input = 0;
            try {
                input = Integer.parseInt(splitted[1]);
            } catch (Exception ex) {

            }
            int ch = World.Find.findChannel(input);
            if (ch < 0) {
                c.getPlayer().dropMessage(6, "玩家编号[" + input + "] 不在线上");
                return true;
            }
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterById(input);
            if (victim != null) {
                if (splitted.length == 2) {
                    c.getPlayer().changeMap(victim.getMap(),
                            victim.getMap().findClosestSpawnpoint(victim.getPosition()));
                } else {
                    MapleMap target = ChannelServer.getInstance(c.getChannel()).getMapFactory()
                            .getMap(Integer.parseInt(splitted[2]));
                    if (target == null) {
                        c.getPlayer().dropMessage(6, "地图不存在");
                    } else {
                        victim.changeMap(target, target.getPortal(0));
                    }
                }
            } else {
                try {
                    victim = ChannelServer.getInstance(ch).getPlayerStorage()
                            .getCharacterById(Integer.parseInt(splitted[1]));
                    if (victim != null) {
                        if (victim.getMapId() != c.getPlayer().getMapId()) {
                            final MapleMap mapp = c.getChannelServer().getMapFactory().getMap(victim.getMapId());
                            c.getPlayer().changeMap(mapp, mapp.getPortal(0));
                        }
                        c.getPlayer().dropMessage(6, "正在改变频道请等待");
                        c.getPlayer().changeChannel(ch);

                    } else {
                        c.getPlayer().dropMessage(6, "角色不存在");
                    }

                } catch (Exception e) {
                    c.getPlayer().dropMessage(6, "出问题了 " + e.getMessage());
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!warpID [玩家编号] - 移动到某个玩家所在的地方";
        }
    }

    public static class Ban extends CommandExecute {

        protected boolean hellban = false;

        private String getCommand() {
            return "Ban";
        }

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            StringBuilder sb = new StringBuilder(c.getPlayer().getName());
            sb.append(" 封锁 ").append(splitted[1]).append(": ").append(StringUtil.joinStringFrom(splitted, 2));
            boolean offline = false;
            boolean ban = false;
            MapleCharacter target;
            String name = "";
            String input = "null";
            try {
                name = splitted[1];
                input = splitted[2];
            } catch (Exception ex) {

            }
            int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                if (c.getPlayer().OfflineBanByName(name, sb.toString())) {
                    c.getPlayer().dropMessage(6, "[" + getCommand() + "] 成功离线封锁 " + splitted[1] + ".");
                    ban = true;
                    offline = true;
                } else {
                    c.getPlayer().dropMessage(6, "[" + getCommand() + "] 封锁失败 " + splitted[1]);
                    return true;
                }
            } else {
                target = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
                if (target != null) {
                    if (c.getPlayer().getGMLevel() >= target.getGMLevel()) {
                        sb.append(" (IP: ").append(target.getClient().getSessionIPAddress()).append(")");
                        if (target.ban(sb.toString(), c.getPlayer().hasGmLevel(5), false, hellban)) {
                            ban = true;
                            c.getPlayer().dropMessage(6, "[" + getCommand() + "] 成功封锁 " + target.getName() + ".");
                            target.getClient().getSession().close();
                            // target.getClient().disconnect(true, false);
                        } else {
                            c.getPlayer().dropMessage(6, "[" + getCommand() + "] 封锁失败.");
                            return true;
                        }
                    } else {
                        c.getPlayer().dropMessage(6, "[" + getCommand() + "] 无法封锁GMs...");
                        return true;
                    }
                }
            }
            FileoutputUtil.logToFile("logs/Hack/指令封锁名单.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " " + c.getPlayer().getName() + " 封锁了 " + splitted[1] + " 原因: "
                            + sb + " 是否离线封锁: " + offline);
            String reason = "null".equals(input) ? "使用违法程式练功" : StringUtil.joinStringFrom(splitted, 2);
            World.Broadcast.broadcastMessage(
                    MaplePacketCreator.serverNotice(6, "[封锁系统] " + splitted[1] + " 因为" + reason + "而被管理员永久停权。"));

            String msg = "[GM 密语] GM " + c.getPlayer().getName() + "  封锁了 " + splitted[1] + " 是否离线封锁 " + offline
                    + " 原因：" + reason;
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg));
            return true;
        }

        @Override
        public String getMessage() {
            return "!ban <玩家> <原因> - 封锁玩家";
        }
    }

    public static class BanID extends CommandExecute {

        protected boolean hellban = false;

        private String getCommand() {
            return "Ban";
        }

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            StringBuilder sb = new StringBuilder(c.getPlayer().getName());
            sb.append(" 封锁 ").append(splitted[1]).append(": ").append(StringUtil.joinStringFrom(splitted, 2));
            boolean offline = false;
            boolean ban = false;
            MapleCharacter target;
            int id = 0;
            String input = "null";
            try {
                id = Integer.parseInt(splitted[1]);
                input = splitted[2];
            } catch (Exception ex) {

            }
            int ch = World.Find.findChannel(id);
            String name = MapleCharacter.getCharacterNameById(id);
            if (ch <= 0) {
                if (c.getPlayer().OfflineBanById(id, sb.toString())) {
                    c.getPlayer().dropMessage(6, "[" + getCommand() + "] 成功离线封锁 " + name + ".");
                    ban = true;
                    offline = true;
                } else {
                    c.getPlayer().dropMessage(6, "[" + getCommand() + "] 封锁失败 " + splitted[1]);
                    return true;
                }
            } else {
                target = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterById(id);
                if (target != null) {
                    if (c.getPlayer().getGMLevel() > target.getGMLevel() || c.getPlayer().hasGmLevel(5)) {
                        sb.append(" (IP: ").append(target.getClient().getSessionIPAddress()).append(")");
                        if (target.ban(sb.toString(), c.getPlayer().hasGmLevel(5), false, hellban)) {
                            ban = true;
                            c.getPlayer().dropMessage(6, "[" + getCommand() + "] 成功封锁 " + target.getName() + ".");
                            target.getClient().getSession().close();
                            // target.getClient().disconnect(true, false);
                        } else {
                            c.getPlayer().dropMessage(6, "[" + getCommand() + "] 封锁失败.");
                            return true;
                        }
                    } else {
                        c.getPlayer().dropMessage(6, "[" + getCommand() + "] 无法封锁GMs...");
                        return true;
                    }
                    name = target.getName();
                }

            }

            FileoutputUtil.logToFile("logs/Hack/指令封锁名单.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " " + c.getPlayer().getName()
                            + " 封锁了 " + name + " 原因: " + sb + " 是否离线封锁: " + offline);
            String reason = "null".equals(input) ? "使用违法程式练功" : StringUtil.joinStringFrom(splitted, 2);
            World.Broadcast.broadcastMessage(
                    MaplePacketCreator.serverNotice(6, "[封锁系统] " + name + " 因为" + reason + "而被管理员永久停权。"));

            String msg = "[GM 密语] GM " + c.getPlayer().getName() + "  封锁了 " + name + " 是否离线封锁 " + offline + " 原因："
                    + reason;
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6, msg));
            return true;
        }

        @Override
        public String getMessage() {
            return "!BanID <玩家ID> <原因> - 封锁玩家";
        }
    }

    public static class CnGM extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(5,
                    "<GM聊天视窗>" + "频道" + c.getPlayer().getClient().getChannel() + " [" + c.getPlayer().getName() + "]("
                            + c.getPlayer().getId() + ") : " + StringUtil.joinStringFrom(splitted, 1)));
            return true;
        }

        @Override
        public String getMessage() {
            return "!cngm <讯息> - GM聊天";
        }
    }

    public static class Hide extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            SkillFactory.getSkill(9001004).getEffect(1).applyTo(c.getPlayer());
            c.getPlayer().dropMessage(6, "管理员隐藏 = 开启 \r\n 解除请输入!unhide");
            return true;
        }

        @Override
        public String getMessage() {
            return "!hide - 隐藏";
        }
    }

    public static class UnHide extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().dispelBuff(9001004);
            c.getPlayer().dropMessage(6, "管理员隐藏 = 关闭 \r\n 开启请输入!hide");
            return true;
        }

        @Override
        public String getMessage() {
            return "!unhide - 解除隐藏";
        }
    }

    public static class 精灵商人讯息 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_精灵商人();
            p.control_精灵商人(!x);
            x = p.get_control_精灵商人();
            p.dropMessage("目前精灵商人购买讯息状态: " + (x ? "开启 " : " 关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!精灵商人讯息 - 开启精灵商人购买讯息显示";
        }
    }

    public static class 玩家私聊 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_玩家私聊();
            p.control_玩家私聊(!x);
            x = p.get_control_玩家私聊();
            p.dropMessage("目前玩家私聊状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!玩家私聊 - 开启玩家讯息显示";
        }
    }

    public static class 玩家密语 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_玩家密语();
            p.control_玩家密语(!x);
            x = p.get_control_玩家私聊();
            p.dropMessage("目前玩家密语状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!玩家密语 - 开启玩家讯息显示";
        }
    }

    public static class 好友聊天 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_好友聊天();
            p.control_好友聊天(!x);
            x = p.get_control_好友聊天();
            p.dropMessage("目前好友聊天状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!好友聊天 - 开启玩家讯息显示";
        }
    }

    public static class 队伍聊天 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_队伍聊天();
            p.control_队伍聊天(!x);
            x = p.get_control_队伍聊天();
            p.dropMessage("目前队伍聊天状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!队伍聊天 - 开启玩家讯息显示";
        }
    }

    public static class 公会聊天 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_公会聊天();
            p.control_公会聊天(!x);
            x = p.get_control_公会聊天();
            p.dropMessage("目前公会聊天状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!公会聊天 - 开启玩家讯息显示";
        }
    }

    public static class 联盟聊天 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_联盟聊天();
            p.control_联盟聊天(!x);
            x = p.get_control_联盟聊天();
            p.dropMessage("目前联盟聊天状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!联盟聊天 - 开启玩家讯息显示";
        }
    }

    public static class online extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int total = 0;
            int curConnected = c.getChannelServer().getConnectedClients();
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");
            c.getPlayer().dropMessage(6, "频道: " + c.getChannelServer().getChannel() +
                    " 线上人数: " + curConnected);
            total += curConnected;
            for (MapleCharacter chr : c.getChannelServer().getPlayerStorage().getAllCharactersThreadSafe()) {
                if (chr != null && c.getPlayer().getGMLevel() >= chr.getGMLevel()) {
                    StringBuilder ret = new StringBuilder();
                    ret.append(" 角色暱称 ");
                    ret.append(StringUtil.getRightPaddedStr(chr.getName(), ' ', 13));
                    ret.append(" ID: ");
                    ret.append(StringUtil.getRightPaddedStr(chr.getId() + "", ' ', 5));
                    ret.append(" 等级: ");
                    ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getLevel()), ' ', 3));
                    ret.append(" 职业: ");
                    ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getJob()), ' ', 4));
                    if (chr.getMap() != null) {
                        ret.append(" 地图: ");
                        ret.append(chr.getMapId()).append("(").append(chr.getMap().getMapName()).append(")");
                        c.getPlayer().dropMessage(6, ret.toString());
                    }
                }
            }
            c.getPlayer().dropMessage(6, "当前频道总计线上人数: " + total);
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");
            int channelOnline = c.getChannelServer().getConnectedClients();
            int totalOnline = 0;
            /* 服务器总人数 */
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                totalOnline += cserv.getConnectedClients();
            }
            c.getPlayer().dropMessage(6,
                    "当前服务器总计线上人数: " + totalOnline + "个");
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");

            return true;
        }

        @Override
        public String getMessage() {
            return "!online - 查看线上人数";
        }
    }

    public static class 全频道地图人数 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int total = 0;
            if (splitted.length < 2) {
                return false;
            }
            final int mapId = Integer.parseInt(splitted[1]);
            c.getPlayer().dropMessage(6,
                    "---------------------------------------------------------------------------------------");
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                int curConnected = cserv.getConnectedClients();
                c.getPlayer().dropMessage(6, "频道: " + cserv.getChannel()/* append(" 线上人数: ").append(curConnected). */);
                total += curConnected;
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                    if (chr != null && c.getPlayer().getGMLevel() >= chr.getGMLevel()) {
                        StringBuilder ret = new StringBuilder();
                        if (chr.getMapId() == mapId) {
                            ret.append(" 角色暱称 ");
                            ret.append(StringUtil.getRightPaddedStr(chr.getName(), ' ', 13));
                            ret.append(" ID: ");
                            ret.append(StringUtil.getRightPaddedStr(chr.getId() + "", ' ', 5));
                            ret.append(" 等级: ");
                            ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getLevel()), ' ', 3));
                            ret.append(" 职业: ");
                            ret.append(StringUtil.getRightPaddedStr(String.valueOf(chr.getJob()), ' ', 4));
                            if (chr.getMap() != null) {
                                ret.append(" 地图: ");
                                ret.append(chr.getMapId());
                                ret.append(" - ");
                                ret.append(chr.getMap().getMapName());
                            }
                        }
                        c.getPlayer().dropMessage(6, ret.toString());
                    }

                }

            }
            // c.getPlayer().dropMessage(6, new StringBuilder().append("当前服务器总计在线:
            // ").append(total).toString());
            c.getPlayer().dropMessage(6,
                    "---------------------------------------------------------------------------------------");
            return true;
        }

        @Override
        public String getMessage() {
            return "!全频道地图人数 - 全频道地图人数";
        }
    }

    public static class onlineGM extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int channelOnline = 0;
            int totalOnline = 0;
            int GmInChannel = 0;
            List<MapleCharacter> chrs = new LinkedList<>();

            /* 当前频道总GM数 */
            for (MapleCharacter chr : c.getChannelServer().getPlayerStorage().getAllCharactersThreadSafe()) {
                if (chr.getGMLevel() > 0) {
                    channelOnline++;
                }
            }
            /* 服务器总GM数 */
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (chr != null && chr.getGMLevel() > 0) {
                        totalOnline++;
                    }
                }
            }
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharactersThreadSafe()) {
                    if (chr != null && chr.getGMLevel() > 0) {
                        chrs.add(chr);
                    }
                }
                GmInChannel = chrs.size();
                if (GmInChannel > 0) {
                    c.getPlayer().dropMessage(6, "频道: " + cserv.getChannel() +
                            " 线上GM人数: " + GmInChannel);
                    for (MapleCharacter chr : chrs) {
                        if (chr != null) {
                            String ret = " GM暱称 " +
                                    StringUtil.getRightPaddedStr(chr.getName(), ' ', 13) +
                                    " ID: " +
                                    StringUtil.getRightPaddedStr(chr.getId() + "", ' ', 5) +
                                    " 权限: " +
                                    StringUtil.getRightPaddedStr(String.valueOf(chr.getGMLevel()), ' ', 3);
                            c.getPlayer().dropMessage(6, ret);
                        }
                    }
                }
                chrs = new LinkedList<>();
            }
            c.getPlayer().dropMessage(6, "当前频道总计GM线上人数: " + channelOnline);
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");

            c.getPlayer().dropMessage(6,
                    "当前服务器GM总计线上人数: " + totalOnline + "个");
            c.getPlayer().dropMessage(6,
                    "-------------------------------------------------------------------------------------");
            return true;
        }

        @Override
        public String getMessage() {
            return "!onlineGM - 查看线上人数GM";
        }
    }

    public static class WarpHere extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (victim != null) {
                victim.changeMap(c.getPlayer().getMap(),
                        c.getPlayer().getMap().findClosestSpawnpoint(c.getPlayer().getPosition()));
            } else {
                int ch = World.Find.findChannel(splitted[1]);
                if (ch < 0) {
                    c.getPlayer().dropMessage(5, "找不到");

                } else {
                    victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(splitted[1]);
                    c.getPlayer().dropMessage(5, "正在把玩家传到这来");
                    victim.dropMessage(5, "正在传送到GM那边");
                    if (victim.getMapId() != c.getPlayer().getMapId()) {
                        final MapleMap mapp = victim.getClient().getChannelServer().getMapFactory()
                                .getMap(c.getPlayer().getMapId());
                        victim.changeMap(mapp, mapp.getPortal(0));
                    }
                    victim.changeChannel(c.getChannel());
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!warphere 把玩家传送到这里";
        }
    }

    public static class Whoshere extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            StringBuilder builder = new StringBuilder("在地图上的玩家 : ")
                    .append(c.getPlayer().getMap().getCharactersThreadsafe().size()).append(", ");
            for (MapleCharacter chr : c.getPlayer().getMap().getCharactersThreadsafe()) {
                if (builder.length() > 150) { // wild guess :o
                    builder.setLength(builder.length() - 2);
                    c.getPlayer().dropMessage(6, builder.toString());
                    builder = new StringBuilder();
                }
                builder.append(MapleCharacterUtil.makeMapleReadable(chr.getName()));
                builder.append(", ");
            }
            builder.setLength(builder.length() - 2);
            c.getPlayer().dropMessage(6, builder.toString());
            return true;
        }

        @Override
        public String getMessage() {
            return "!Whoshere - 查地图上玩家";
        }
    }

    public static class 吸怪讯息 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter p = c.getPlayer();
            boolean x = p.get_control_吸怪讯息();
            p.control_吸怪讯息(!x);
            x = p.get_control_吸怪讯息();
            p.dropMessage("目前吸怪讯息状态: " + (x ? "开启 " : "关闭 ") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!吸怪讯息 - 开启玩家吸怪讯息讯息显示";
        }
    }

    public static class UnHellBan extends UnBan {

        public UnHellBan() {
            hellban = true;
        }

        @Override
        public String getMessage() {
            return "!UnHellBan <玩家> - 解锁玩家";
        }
    }

    public static class UnBan extends CommandExecute {

        protected boolean hellban = false;

        private String getCommand() {
            return "UnBan";
        }

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            byte ret;
            if (hellban) {
                ret = MapleClient.unHellban(splitted[1]);
            } else {
                ret = MapleClient.unban(splitted[1]);
            }
            if (ret == -2) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] SQL 错误");
            } else if (ret == -1) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] 目标玩家不存在");
            } else {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] 成功解除锁定");
            }
            byte ret_ = MapleClient.unbanIPMacs(splitted[1]);
            if (ret_ == -2) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] SQL 错误.");
            } else if (ret_ == -1) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] 角色不存在.");
            } else if (ret_ == 0) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] No IP or Mac with that character exists!");
            } else if (ret_ == 1) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] IP或Mac已解锁其中一个.");
            } else if (ret_ == 2) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] IP以及Mac已成功解锁.");
            }
            if (ret_ == 1 || ret_ == 2) {
                FileoutputUtil.logToFile("logs/Hack/ban/解除封锁名单.txt",
                        "\r\n " + FileoutputUtil.NowTime() + " IP: "
                                + c.getSession().remoteAddress().toString().split(":")[0] + " "
                                + c.getPlayer().getName() + " 解锁了 " + splitted[1]);
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!unban <玩家> - 解锁玩家";
        }
    }

    public static class DCID extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            MapleCharacter victim;
            int id = Integer.parseInt(splitted[1]);
            int ch = World.Find.findChannel(id);
            if (ch <= 0) {
                c.getPlayer().dropMessage("该玩家不在线上");
                return true;
            }
            victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterById(id);
            if (victim != null) {
                victim.getClient().disconnect(true, false);
                victim.getClient().getSession().close();
            } else {
                c.getPlayer().dropMessage("该玩家不在线上");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!DCID <玩家ID> - 让玩家断线";
        }
    }

    public static class DCAll extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            for (ChannelServer chan : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                    if (chr == null || chr.getId() == c.getPlayer().getId()) {
                        continue;
                    }
                    chr.getClient().disconnect(true, false);
                    chr.getClient().getSession().close();
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!dc <玩家> - 让玩家断线";
        }
    }

    public static class DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            MapleCharacter victim;
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            if (ch <= 0) {
                c.getPlayer().dropMessage("该玩家不在线上1");
                return true;
            }
            victim = ChannelServer.getInstance(ch).getPlayerStorage().getCharacterByName(name);
            if (victim != null) {
                victim.getClient().disconnect(true, false);
                victim.getClient().getSession().close();
            } else {
                c.getPlayer().dropMessage("该玩家不在线上2");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!dc <玩家> - 让玩家断线";
        }
    }

    public static class 商城DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            try {
                MapleCharacter victim = CashShopServer.getPlayerStorage().getCharacterByName(name);
                if (victim != null) {
                    victim.getClient().disconnect(true, true);
                    victim.getClient().getSession().close();
                    c.getPlayer().dropMessage(" 玩家 " + name + "商城解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在商城线上");
                }
            } catch (Exception e) {
                c.getPlayer().dropMessage("异常抛出：玩家解卡失败");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!商城DC <玩家> - 让玩家断线";
        }
    }

    public static class 商城DC2 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            try {
                MapleCharacter victim1 = MapleCharacter.getCharacterByName(name);
                if (victim1 != null) {
                    victim1.getClient().disconnect(true, true);
                    victim1.getClient().getSession().close();
                    c.getPlayer().dropMessage(" 玩家 " + name + "商城解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在商城线上");
                }
            } catch (Exception e) {
                c.getPlayer().dropMessage("异常抛出：玩家解卡失败");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!商城DC2 <玩家> - 让玩家断线";
        }
    }

    public static class 特殊商城DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            try {
                MapleCharacter victim = MapleCharacter.getCharacterByName(name);
                if (victim != null) {
                    CashShopServer.getPlayerStorage().deregisterPlayer(victim.getId(), victim.getName());
                    c.getPlayer().dropMessage(" 玩家 " + name + "商城解卡成功");
                } else {
                    c.getPlayer().dropMessage(5, "找不到此玩家.");
                }
            } catch (Exception e) {
                c.getPlayer().dropMessage("异常抛出：玩家解卡失败");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!特殊商城DC <玩家> - 让玩家断线";
        }
    }

    public static class 特殊商城DC2 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            try {
                MapleCharacter victim = CashShopServer.getPlayerStorage().getCharacterByName(name);
                if (victim != null) {
                    CashShopServer.getPlayerStorage().deregisterPlayer(victim.getId(), victim.getName());
                    c.getPlayer().dropMessage(" 玩家 " + name + "商城解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在商城线上");
                }
            } catch (Exception e) {
                c.getPlayer().dropMessage("异常抛出：玩家解卡失败");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!商城DC2 <玩家> - 让玩家断线";
        }
    }

    public static class 频道DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }

            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                MapleCharacter character = cs.getPlayerStorage().getCharacterByName(name);
                if (character != null) {
                    character.getClient().disconnect(true, false);
                    character.getClient().getSession().close();
                    c.getPlayer().dropMessage(" 玩家 " + name + "频道解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在频道线上");
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!频道DC <玩家> - 让玩家断线";
        }
    }

    public static class 特殊频道DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                MapleCharacter character = cs.getPlayerStorage().getCharacterByName(name);
                if (character != null) {
                    character.getClient().disconnect(true, false);
                    cs.removePlayer(character.getId(), character.getName());
                    character.getClient().getSession().close();
                    c.getPlayer().dropMessage(" 玩家 " + name + "频道解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在频道线上");
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!特殊频道DC <玩家> - 让玩家断线";
        }
    }

    public static class 特殊DC extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            int ch = World.Find.findChannel(name);
            c.getPlayer().dropMessage("玩家在 " + ch);
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                MapleCharacter character = cs.getPlayerStorage().getCharacterByName(name);
                if (character != null) {
                    character.getClient().disconnect(true, false);
                    character.getClient().getSession().close();
                    c.getPlayer().dropMessage(" 玩家 " + name + "频道解卡成功");
                } else {
                    c.getPlayer().dropMessage("该玩家不在频道线上");
                }
            }

            MapleCharacter charactercs = CashShopServer.getPlayerStorage().getCharacterByName(name);
            if (charactercs != null) {
                charactercs.getClient().disconnect(true, true);
                charactercs.getClient().getSession().close();
                c.getPlayer().dropMessage(" 玩家 " + name + "商城解卡成功2");
            } else {
                c.getPlayer().dropMessage("该玩家不在商城线上2");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!特殊DC <玩家> - 让玩家断线";
        }
    }

    public static class 卡登处理 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String playername = splitted[1];
            int playerid = MapleCharacter.getCharacterIdByName(playername);
            if (playerid == -1) {
                c.getPlayer().dropMessage("玩家[" + playername + "]不存在于资料库内。");
                return true;
            }
            MapleCharacter victim = MapleCharacter.getCharacterById(playerid);

            /*
             * List<String> charName = c.loadCharacterNamesByCharId(playerid);
             * for (ChannelServer cs : ChannelServer.getAllInstances()) {
             * for (final String names : charName) {
             * MapleCharacter character = cs.getPlayerStorage().getCharacterByName(names);
             * if (character != null) {
             * character.getClient().disconnect(true, false);
             * character.getClient().getSession().close();
             * c.getPlayer().dropMessage(" 玩家 " + names + "频道解卡成功");
             * } else {
             * c.getPlayer().dropMessage("该玩家不在频道线上");
             * }
             * }
             * }
             * for (final String namesa : charName) {
             * MapleCharacter charactercs =
             * CashShopServer.getPlayerStorage().getCharacterByName(namesa);
             * if (charactercs != null) {
             * charactercs.getClient().disconnect(true, true);
             * charactercs.getClient().getSession().close();
             * c.getPlayer().dropMessage(" 玩家 " + namesa + "商城解卡成功");
             * } else {
             * c.getPlayer().dropMessage("该玩家不在商城线上");
             * }
             * }
             */
            if (victim != null) {
                victim.updateNewState(0, victim.getAccountID());
                c.getPlayer().dropMessage("修改玩家[" + playername + "]登录状态成功。");
            } else {
                c.getPlayer().dropMessage("玩家[" + playername + "]不存在于资料库内。");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!卡登处理 <玩家名字> - 修改资料库玩家登录状态";
        }
    }

    /*
     * public static class fixch extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * }
     * ChannelServer.forceRemovePlayerByCharName(c, splitted[1]);
     * c.getPlayer().dropMessage("已经解卡玩家<" + splitted[1] + ">");
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("!fixch <玩家名称> - 解卡角").toString();
     * }
     * }
     */

    /*
     * public static class fixac extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * }
     * String input = splitted[1];
     * int Accountid = 0;
     * int times = 0;
     * 
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
     * = con.prepareStatement("SELECT accountid FROM characters WHERE name = ?")) {
     * ps.setString(1, input);
     * try (ResultSet rs = ps.executeQuery()) {
     * if (!rs.next()) {
     * rs.close();
     * ps.close();
     * return true;
     * }
     * Accountid = rs.getInt(1);
     * }
     * } catch (Exception ex) {
     * Logger.getLogger(PracticerCommand.class.getName()).log(Level.SEVERE, null,
     * ex);
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * 
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection(); PreparedStatement ps
     * = con.prepareStatement("SELECT name FROM characters WHERE accountid = ?")) {
     * ps.setInt(1, Accountid);
     * try (ResultSet rs = ps.executeQuery()) {
     * if (!rs.next()) {
     * rs.close();
     * ps.close();
     * return false;
     * }
     * times++;
     * try {
     * ChannelServer.forceRemovePlayerByCharName(c, rs.getString("name"));
     * } catch (Exception ex) {
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * }
     * } catch (Exception ex) {
     * Logger.getLogger(PracticerCommand.class.getName()).log(Level.SEVERE, null,
     * ex);
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * if (c != null && c.getPlayer() != null) {
     * c.getPlayer().dropMessage("已经解卡玩家<" + splitted[1] + ">帐号内的" + times + "个角色");
     * }
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("!fixac <玩家名称> - 解帐号卡角").toString();
     * }
     * }
     */
    public static class Job extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int jobid = 0;
            try {
                jobid = Integer.parseInt(splitted[1]);
            } catch (Exception ex) {
                return false;
            }
            c.getPlayer().changeJob(jobid);
            c.getPlayer().dispelDebuffs();
            return true;
        }

        @Override
        public String getMessage() {
            return "!job <职业代码> - 更换职业";
        }
    }

    public static class 吸怪自动传送 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().setAuto吸怪(!c.getPlayer().getAuto吸怪());
            c.getPlayer().dropMessage("自动吸怪传送已经: " + (c.getPlayer().getAuto吸怪() ? "开启" : "关闭") + "");
            return true;
        }

        @Override
        public String getMessage() {
            return "!吸怪自动传送 - 吸怪自动传送";
        }
    }

    public static class WhereAmI extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(5,
                    "目前地图 " + c.getPlayer().getMap().getId() + "座标 (" + c.getPlayer().getPosition().x
                            + " , " + c.getPlayer().getPosition().y + ")");
            return true;
        }

        @Override
        public String getMessage() {
            return "!whereami - 目前地图";
        }
    }

    public static class BanStatus extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String name = splitted[1];
            String mac = "";
            String ip = "";
            int acid = 0;
            boolean Systemban = false;
            boolean ACbanned = false;
            boolean IPbanned = false;
            boolean MACbanned = false;
            String reason = null;
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection()) {
                PreparedStatement ps;
                ps = con.prepareStatement("select accountid from characters where name = ?");
                ps.setString(1, name);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        acid = rs.getInt("accountid");
                    }
                }
                ps = con.prepareStatement("select banned, banreason, macs, Sessionip from accounts where id = ?");
                ps.setInt(1, acid);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Systemban = rs.getInt("banned") == 2;
                        ACbanned = rs.getInt("banned") == 1 || rs.getInt("banned") == 2;
                        reason = rs.getString("banreason");
                        mac = rs.getString("macs");
                        ip = rs.getString("Sessionip");
                    }
                }
                ps.close();
            } catch (Exception e) {
                FileoutputUtil.outError("logs/资料库异常.txt", e);
            }
            if (reason == null || reason.isEmpty()) {
                reason = "无";
            }
            if (c.isBannedIP(ip)) {
                IPbanned = true;
            }
            if (c.hasBannedMac()) {
                MACbanned = true;
            }

            c.getPlayer().dropMessage("玩家[" + name + "] 帐号ID[" + acid + "]是否被封锁: " + (ACbanned ? "是" : "否")
                    + (Systemban ? "(系统自动封锁)" : "") + ", 原因: " + reason);
            c.getPlayer().dropMessage("IP: " + ip + " 是否在封锁IP名单: " + (IPbanned ? "是" : "否"));
            for (String SingleMac : mac.split(", ")) {
                c.getPlayer()
                        .dropMessage("MAC: " + SingleMac + " 是否在封锁MAC名单: " + (c.isBannedMac(SingleMac) ? "是" : "否"));
            }
            // c.getPlayer().dropMessage("MAC: " + mac + " 是否在封锁MAC名单: " + (MACbanned ? "是"
            // : "否"));
            return true;
        }

        @Override
        public String getMessage() {
            return "!BanStatus <玩家名称> - 查看玩家是否被封锁及原因";
        }
    }

    public static class banMac extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                return false;
            }
            String mac = splitted[1];
            if (mac.equalsIgnoreCase("00-00-00-00-00-00") || mac.length() != 17) {
                c.getPlayer().dropMessage("封锁MAC失败，可能为格式错误或是长度错误 Ex: 00-00-00-00-00-00 ");
                return true;
            }
            c.getPlayer().dropMessage("封锁MAC [" + mac + "] 成功");
            try (Connection con = DBConPool.getInstance().getDataSource().getConnection();
                    PreparedStatement ps = con.prepareStatement("INSERT INTO macbans (mac) VALUES (?)")) {
                ps.setString(1, mac);
                ps.executeUpdate();
                ps.close();
            } catch (SQLException e) {
                System.err.println("Error banning MACs" + e);
                FileoutputUtil.outError("logs/资料库异常.txt", e);
                return true;
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!BanMAC <MAC> - 封锁MAC ";
        }
    }

    /*
     * public static class BanIP extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * }
     * boolean error = false;
     * String IP = splitted[1];
     * if (!IP.contains("/") || !IP.contains(".")) {
     * c.getPlayer().dropMessage("输入IP必须包含 '/' 以及 '.' 例如: !banIP /127.0.0.1");
     * return true;
     * }
     * try (Connection con =
     * DBConPool.getInstance().getDataSource().getConnection()) {
     * PreparedStatement ps;
     * ps = con.prepareStatement("INSERT INTO ipbans (ip) VALUES (?)");
     * ps.setString(1, IP);
     * ps.executeUpdate();
     * ps.close();
     * } catch (Exception ex) {
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * error = true;
     * }
     * try {
     * for (ChannelServer cs : ChannelServer.getAllInstances()) {
     * for (MapleCharacter chr : cs.getPlayerStorage().getAllCharactersThreadSafe())
     * {
     * // if (chr.getClient().getSessionIPAddress().equals(IP)) {
     * if (!chr.getClient().isGm()) {
     * chr.getClient().disconnect(true, false);
     * //chr.getClient().getSession().close();
     * }
     * // }
     * }
     * }
     * } catch (Exception ex) {
     * FileoutputUtil.outError("logs/资料库异常.txt", ex);
     * }
     * c.getPlayer().dropMessage("封锁IP [" + IP + "] " + (error ? "成功 " : "失败"));
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("!BanIP <IP> - 封锁IP ").toString();
     * }
     * }
     */
    public static class 个人公告 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 4) {
                return false;
            }
            int type = Integer.parseInt(splitted[1]);
            String name = splitted[2];
            String str = splitted[3];
            if (type != 0 && type != 1 && type != 2 && type != 3) {
                c.getPlayer().dropMessage("类型错误");
                return true;
            }
            for (ChannelServer cs : ChannelServer.getAllInstances()) {
                MapleCharacter character = cs.getPlayerStorage().getCharacterByName(name);
                if (character != null) {

                    byte[] p = null;
                    switch (type) {
                        case 0:
                            p = MaplePacketCreator.serverNotice(6, "[公告事项] " + str);
                            break;
                        case 1:
                            p = MaplePacketCreator.serverNotice(1, str);
                            break;
                        case 2:
                            p = MaplePacketCreator.serverNotice(5, str);
                            break;
                        case 3:
                            p = MaplePacketCreator.getNPCTalk(2007, (byte) 0, str, "00 00", (byte) 0);
                    }
                    character.getClient().getSession().writeAndFlush(p);
                    c.getPlayer().dropMessage(" 给玩家 " + name + "发送公告成功。");
                } else {
                    c.getPlayer().dropMessage("该玩家不在频道线上");
                }
            }
            return true;
        }

        @Override
        public String getMessage() {
            return "!个人公告 <类型> <玩家> <内容>- 给玩家发送公告";
        }
    }

}
