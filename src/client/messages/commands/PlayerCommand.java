package client.messages.commands;

import java.util.Arrays;
import java.util.Calendar;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.PiPiConfig;
import constants.ServerConstants;
import constants.ServerConstants.PlayerGMRank;
import handling.world.World;
import scripting.NPCScriptManager;
import server.MapleInventoryManipulator;
import server.life.MapleMonster;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.StringUtil;

/**
 *
 * @author Emilyx3
 */
public class PlayerCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return ServerConstants.PlayerGMRank.普通玩家;
    }

    public static class 帮助 extends help {

        @Override
        public String getMessage() {
            return new StringBuilder().append("@帮助 - 帮助").toString();
        }
    }

    public static class help extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9010000, "玩家指令查询");
            /*
             * c.getPlayer().dropNPC(""
             * +
             * "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n"
             * + "\t\t#fMob/0100101.img/move/1##b 亲爱的： #h \r\n"
             * + " #fMob/0100101.img/move/1##k\r\r\n"
             * + "\t\t#fMob/0130101.img/move/1##g[以下是" +
             * c.getChannelServer().getServerName() +
             * " 玩家指令]#k#fMob/0130101.img/move/1#\r\n"
             * + "\t  #r▇▇▆▅▄▃▂#d万用指令区#r▂▃▄▅▆▇▇\r\n"
             * + "\t\t#b@清除道具 <装备栏/消耗栏/装饰栏/其他栏/特殊栏> <开始格数> <结束格数>#k - #r<清除背包道具>#k\r\n"
             * + "\t\t#b@在线人数/@online#k - #r<查询当前服务器人数>#k\r\n"
             * + "\t\t#b@查看/@ea#k - #r<解除异常+查看当前状态>#k\r\n"
             * + "\t\t#b@在线点数/@jcds#k - #r<领取在线点数>#k\r\n"
             * + "\t\t#b@怪物/@mob#k - #r<查看身边怪物讯息>#k\r\n"
             * + "\t\t#b@expfix#k - #r<经验归零(修复假死)>#k\r\n"
             * + "\t\t#b@CGM <讯息>#k - #r<传送讯息给GM>#k\r\n"
             * + "\t\t#b@jk_hm #k - #r<清除卡精灵商人>#k\r\n"
             * + "\t\t#b@存档/@save#k - #r<存档>#k\r\n"
             * + "\t\t#b@TSmega#k - #r<开/关所有广播>#k\r\n"
             * + "\t  #g▇▇▆▅▄▃▂#dNPＣ指令区#g▂▃▄▅▆▇▇\r\n"
             * //+ "\t\t#b@bspq#k - #r<BOSSPQ兑换NPC>#k\r\n"
             * + "\t\t#b@万能/@npc#k - #r<工具箱>#k\r\n"
             * + "\t\t#b@猜拳/@pk#k - #r<小游戏>#k\r\n"
             * + "\t\t#b@event#k - #r<参加活动>#k\r\n"
             * //+ "\t\t#b@查询玩家信息#k - #r<查询玩家信息(上次维护后等级/当前HPMP)>#k\r\n"
             * // + "\t\t#b@匿名广播#k - #r<匿名发送广播>#k\r\n"
             * // + "\t\t#b@使用鱼包#k - #r<使用鱼包>#k\r\n"
             * );
             */
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@help - 帮助").toString();
        }
    }

    public abstract static class OpenNPCCommand extends CommandExecute {

        protected int npc = -1;
        private static final int[] npcs = { // Ish yur job to make sure these are in order and correct ;(
                9010017,
                9000001,
                9000058,
                9330082,
                9209002 };

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (npc != 1 && c.getPlayer().getMapId() != 910000000) { // drpcash can use anywhere
                for (int i : GameConstants.blockedMaps) {
                    if (c.getPlayer().getMapId() == i) {
                        c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
                        return true;
                    }
                }
                if (npc != 2) {
                    if (c.getPlayer().getLevel() < 10) {
                        c.getPlayer().dropMessage(1, "你的等级必须是10等.");
                        return true;
                    }
                }
                if (c.getPlayer().getMap().getSquadByMap() != null || c.getPlayer()
                        .getEventInstance() != null || c.getPlayer().getMap().getEMByMap() != null || c.getPlayer()
                                .getMapId() >= 990000000/*
                                                         * || FieldLimitType.VipRock.check(c.getPlayer().getMap().
                                                         * getFieldLimit())
                                                         */) {
                    c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
                    return true;
                }
                if ((c.getPlayer().getMapId() >= 680000210 && c.getPlayer().getMapId() <= 680000502)
                        || (c.getPlayer().getMapId() / 1000 == 980000 && c.getPlayer().getMapId() != 980000000)
                        || (c.getPlayer().getMapId() / 100 == 1030008) || (c.getPlayer().getMapId() / 100 == 922010)
                        || (c.getPlayer().getMapId() / 10 == 13003000)) {
                    c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
                    return true;
                }
            }
            NPCScriptManager.getInstance().start(c, npcs[npc]);
            return true;
        }
    }

    public static class 丢装 extends DropCash {

        @Override
        public String getMessage() {
            return new StringBuilder().append("@丢装 - 呼叫清除现金道具npc").toString();
        }
    }

    public static class DropCash extends OpenNPCCommand {

        public DropCash() {
            npc = 0;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@dropbash - 呼叫清除现金道具npc").toString();
        }

    }

    public static class event extends OpenNPCCommand {

        public event() {
            npc = 1;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@event - 呼叫活动npc").toString();
        }
    }

    /*
     * public static class bspq extends OpenNPCCommand {
     * 
     * public bspq() {
     * npc = 3;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("@bspq - 呼叫Boss挑战npc").toString();
     * }
     * }
     */
    /*
     * public static class pk extends 猜拳 {
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("@pk - 呼叫猜拳npc").toString();
     * }
     * }
     * 
     * public static class 猜拳 extends OpenNPCCommand {
     * 
     * public 猜拳() {
     * npc = 4;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("@猜拳 - 呼叫猜拳npc").toString();
     * }
     * }
     */

    /*
     * public static class save extends 存档 {
     * }
     * 
     * public static class 存档 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * try {
     * int res = c.getPlayer().saveToDB(true, true);
     * if (res == 1) {
     * c.getPlayer().dropMessage(5, "保存成功！");
     * } else {
     * c.getPlayer().dropMessage(5, "保存失败！");
     * }
     * } catch (UnsupportedOperationException ex) {
     * 
     * }
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("@save - 存档").toString();
     * }
     * }
     */
    public static class expfix extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().setExp(0);
            c.getPlayer().updateSingleStat(MapleStat.EXP, c.getPlayer().getExp());
            c.getPlayer().dropMessage(5, "经验修复完成");
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@expfix - 经验归零").toString();
        }
    }

    /*
     * public static class 在线人数 extends online {
     * 
     * }
     * 
     * public static class online extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * int channelOnline = c.getChannelServer().getConnectedClients();
     * int totalOnline = 0;
     * 
     * for (ChannelServer cserv : ChannelServer.getAllInstances()) {
     * totalOnline += cserv.getConnectedClients();
     * }
     * c.getPlayer().dropMessage(6, new
     * StringBuilder().append("当前").append(c.getChannel()).append("频道: ").append(
     * channelOnline).append("人   ").append("当前服务器总计线上人数: ").append(totalOnline).
     * append("个").toString());
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("@online - 查看线上人数").toString();
     * }
     * }
     */
    public static class TSmega extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().setSmega();
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@TSmega - 开/关闭广播").toString();
        }
    }

    public static class Gashponmega extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().setGashponmega();
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@Gashponmega - 开/关闭转蛋广播").toString();
        }
    }

    public static class 解卡 extends ea {

        @Override
        public String getMessage() {
            return new StringBuilder().append("@解卡 - 解卡").toString();
        }
    }

    public static class 查看 extends ea {

        @Override
        public String getMessage() {
            return new StringBuilder().append("@查看 - 解卡").toString();
        }
    }

    public static class ea extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.sendPacket(MaplePacketCreator.enableActions());
            c.sendPacket(MaplePacketCreator.sendHint("解卡完毕", 350, 5));
            // + "当前系统时间" + FilePrinter.getLocalDateString() + " 星期" + getDayOfWeek() +
            // "\r\n"
            // + "经验值倍率 " + ((Math.round(c.getPlayer().getEXPMod()) *
            // c.getPlayer().getExpm() * 100 * c.getChannelServer().getExpRate()) *
            // Math.round(c.getPlayer().getStat().expBuff / 100.0) +
            // (c.getPlayer().getStat().equippedFairy ? c.getPlayer().getFairyExp() : 0))
            // + "%, 掉宝倍率 " + Math.round(c.getPlayer().getDropMod() *
            // c.getPlayer().getDropm() * (c.getPlayer().getStat().dropBuff / 100.0) * 100 *
            // c.getChannelServer().getDropRate()) + "%, 金币倍率 " +
            // Math.round((c.getPlayer().getStat().mesoBuff / 100.0) * 100 *
            // c.getChannelServer().getMesoRate()) + "% \r\n "
            // + "VIP经验掉宝加成：" + (c.getPlayer().getVipExpRate()) + "%\r\n"
            // + "目前剩馀 " + c.getPlayer().getCSPoints(1) + " GASH " +
            // c.getPlayer().getCSPoints(2) + " 枫叶点数 \r\n"
            // + "赞助红利 " + c.getPlayer().getCSPoints(3) + " \r\n"
            // + "当前延迟 " + c.getPlayer().getClient().getLatency() + " 毫秒", 350, 5));
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@ea - 解卡").toString();
        }

        public static String getDayOfWeek() {
            int dayOfWeek = Calendar.getInstance().get(Calendar.DAY_OF_WEEK) - 1;
            String dd = String.valueOf(dayOfWeek);
            switch (dayOfWeek) {
                case 0:
                    dd = "日";
                    break;
                case 1:
                    dd = "一";
                    break;
                case 2:
                    dd = "二";
                    break;
                case 3:
                    dd = "三";
                    break;
                case 4:
                    dd = "四";
                    break;
                case 5:
                    dd = "五";
                    break;
                case 6:
                    dd = "六";
                    break;
            }
            return dd;
        }
    }

    public static class 自动宠物食品 extends PetAutoFood {
    }

    public static class PetAutoFood extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleCharacter player = c.getPlayer();
            if (player.isPetAutoFood()) {
                player.setPetAutoFood(false);
                player.dropMessage(6, "自动宠物食品模式已关闭。");
            } else {
                player.setPetAutoFood(true);
                player.dropMessage(6, "自动宠物食品模式已开启。");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@查看 - 解卡").toString();
        }
    }

    // public static class JK extends CommandExecute {
    //
    // @Override
    // public boolean execute(MapleClient c, String[] splitted) {
    // for (int i : GameConstants.blockedMaps) {
    // if (c.getPlayer().getMapId() == i) {
    // c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
    // return true;
    // }
    // }
    // if (c.getPlayer().getLevel() < 10) {
    // c.getPlayer().dropMessage(1, "你的等级必须是10等.");
    // return true;
    // }
    // if (c.getPlayer().getMap().getSquadByMap() != null ||
    // c.getPlayer().getEventInstance() != null ||
    // c.getPlayer().getMap().getEMByMap() != null || c.getPlayer().getMapId() >=
    // 990000000/* ||
    // FieldLimitType.VipRock.check(c.getPlayer().getMap().getFieldLimit())*/) {
    // c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
    // return true;
    // }
    // if ((c.getPlayer().getMapId() >= 680000210 && c.getPlayer().getMapId() <=
    // 680000502) || (c.getPlayer().getMapId() / 1000 == 980000 &&
    // c.getPlayer().getMapId() != 980000000) || (c.getPlayer().getMapId() / 100 ==
    // 1030008) || (c.getPlayer().getMapId() / 100 == 922010) ||
    // (c.getPlayer().getMapId() / 10 == 13003000)) {
    // c.getPlayer().dropMessage(1, "你不能在这里使用指令.");
    // return true;
    // }
    // InterServerHandler.EnterCashShop(c, c.getPlayer(), false);
    // return true;
    // }
    //
    // @Override
    // public String getMessage() {
    // return new StringBuilder().append("@jk - 重制").toString();
    // }
    // }
    public static class 怪物 extends mob {

        @Override
        public String getMessage() {
            return new StringBuilder().append("@怪物 - 查看怪物状态").toString();
        }
    }

    public static class mob extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            MapleMonster monster = null;
            for (final MapleMapObject monstermo : c.getPlayer().getMap().getMapObjectsInRange(
                    c.getPlayer().getPosition(), 100000, Arrays.asList(MapleMapObjectType.MONSTER))) {
                monster = (MapleMonster) monstermo;
                if (monster.isAlive()) {
                    c.getPlayer().dropMessage(6, "怪物 " + monster.toString());
                }
            }
            if (monster == null) {
                c.getPlayer().dropMessage(6, "找不到地图上的怪物");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@mob - 查看怪物状态").toString();
        }
    }

    public static class CGM extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            boolean autoReply = false;

            if (splitted.length < 2) {
                return false;
            }
            String talk = StringUtil.joinStringFrom(splitted, 1);
            if (c.getPlayer().isGM()) {
                c.getPlayer().dropMessage(6, "因为你自己是GM所以无法使用此指令,可以尝试!cngm <讯息> 来建立GM聊天频道~");
            } else if (!c.getPlayer().getCheatTracker().GMSpam(100000, 1)) { // 1 minutes.
                boolean fake = false;
                boolean showmsg = true;

                // 管理员收不到，玩家有显示传送成功
                if (PiPiConfig.getBlackList().containsKey(c.getAccID())) {
                    fake = true;
                }

                // 管理员收不到，玩家没显示传送成功
                if (talk.contains("抢") && talk.contains("图")) {
                    c.getPlayer().dropMessage(1, "抢图自行解决！！");
                    fake = true;
                    showmsg = false;
                } else if ((talk.contains("被") && talk.contains("骗")) || (talk.contains("点") && talk.contains("骗"))) {
                    c.getPlayer().dropMessage(1, "被骗请自行解决");
                    fake = true;
                    showmsg = false;
                } else if (talk.contains("删") && ((talk.contains("角") || talk.contains("脚")) && talk.contains("错"))) {
                    c.getPlayer().dropMessage(1, "删错角色请自行解决");
                    fake = true;
                    showmsg = false;
                } else if (talk.contains("乱") && (talk.contains("名") && talk.contains("声"))) {
                    c.getPlayer().dropMessage(1, "请自行解决");
                    fake = true;
                    showmsg = false;
                }

                // 管理员收的到，自动回复
                if (talk.toUpperCase().contains("VIP")
                        && ((talk.contains("领") || (talk.contains("获"))) && talk.contains("取"))) {
                    c.getPlayer().dropMessage(1, "VIP将会于储值后一段时间后自行发放，请耐心等待");
                    autoReply = true;
                } else if (talk.contains("贡献") || talk.contains("666")
                        || ((talk.contains("取") || talk.contains("拿") || talk.contains("发") || talk.contains("领"))
                                && ((talk.contains("勋") || talk.contains("徽") || talk.contains("勋"))
                                        && talk.contains("章")))) {
                    c.getPlayer().dropMessage(1, "勋章请去点拍卖NPC案领取勋章\r\n如尚未被加入清单请耐心等候GM。");
                    autoReply = true;
                } else if ((talk.contains("商人") && talk.contains("吃"))
                        || (talk.contains("商店") && talk.contains("补偿"))) {
                    c.getPlayer().dropMessage(1, "目前精灵商人装备和金币有机率被吃\r\n如被吃了请务必将当时的情况完整描述给管理员\r\n\r\nPS: 不会补偿任何物品");
                    autoReply = true;
                } else if (talk.contains("档") && talk.contains("案") && talk.contains("受") && talk.contains("损")) {
                    c.getPlayer().dropMessage(1, "档案受损请重新解压缩主程式唷");
                    autoReply = true;
                } else if ((talk.contains("缺") || talk.contains("少"))
                        && ((talk.contains("技") && talk.contains("能") && talk.contains("点"))
                                || talk.toUpperCase().contains("SP"))) {
                    c.getPlayer().dropMessage(1, "缺少技能点请重练，没有其他方法了唷");
                    autoReply = true;

                }

                if (showmsg) {
                    c.getPlayer().dropMessage(6, "讯息已经寄送给GM了!");
                }

                if (!fake) {
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(6,
                            "[管理员帮帮忙]频道 " + c.getPlayer().getClient().getChannel() + " 玩家 [" + c.getPlayer().getName()
                                    + "] (" + c.getPlayer().getId() + "): " + talk
                                    + (autoReply ? " -- (系统已自动回复)" : "")));
                }

                FileoutputUtil.logToFile("logs/data/管理员帮帮忙.txt",
                        "\r\n " + FileoutputUtil.NowTime() + " 玩家[" + c.getPlayer().getName() + "] 帐号["
                                + c.getAccountName() + "]: " + talk + (autoReply ? " -- (系统已自动回复)" : "") + "\r\n");
            } else {
                c.getPlayer().dropMessage(6, "为了防止对GM刷屏所以每1分钟只能发一次.");
            }
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@cgm - 跟GM回报").toString();
        }
    }

    public static class 清除道具 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            if (splitted.length < 4) {
                return false;
            }
            MapleInventory inv;
            MapleInventoryType type;
            String Column = "null";
            int start = -1;
            int end = -1;
            try {
                Column = splitted[1];
                start = Integer.parseInt(splitted[2]);
                end = Integer.parseInt(splitted[3]);
            } catch (Exception ex) {
            }
            if (start == -1 || end == -1) {
                c.getPlayer().dropMessage("@清除道具 <装备栏/消耗栏/装饰栏/其他栏/特殊栏> <开始格数> <结束格数>");
                return true;
            }
            if (start < 1) {
                start = 1;
            }
            if (end > 96) {
                end = 96;
            }

            switch (Column) {
                case "装备栏":
                    type = MapleInventoryType.EQUIP;
                    break;
                case "消耗栏":
                    type = MapleInventoryType.USE;
                    break;
                case "装饰栏":
                    type = MapleInventoryType.SETUP;
                    break;
                case "其他栏":
                    type = MapleInventoryType.ETC;
                    break;
                case "特殊栏":
                    type = MapleInventoryType.CASH;
                    break;
                default:
                    type = null;
                    break;
            }
            if (type == null) {
                c.getPlayer().dropMessage("@清除道具 <装备栏/消耗栏/装饰栏/其他栏/特殊栏> <开始格数> <结束格数>");
                return true;
            }
            inv = c.getPlayer().getInventory(type);

            for (int i = start; i <= end; i++) {
                if (inv.getItem((short) i) != null) {
                    MapleInventoryManipulator.removeFromSlot(c, type, (short) i, inv.getItem((short) i).getQuantity(),
                            true);
                }
            }
            FileoutputUtil.logToFile("logs/Data/玩家指令.txt",
                    "\r\n " + FileoutputUtil.NowTime() + " IP: "
                            + c.getSession().remoteAddress().toString().split(":")[0] + " 帐号: " + c.getAccountName()
                            + " 玩家: " + c.getPlayer().getName() + " 使用了指令 " + StringUtil.joinStringFrom(splitted, 0));
            c.getPlayer().dropMessage(6, "您已经清除了第 " + start + " 格到 " + end + "格的" + Column + "道具");
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@清除道具 <装备栏/消耗栏/装饰栏/其他栏/特殊栏> <开始格数> <结束格数>").toString();
        }
    }

    public static class jk_hm extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.getPlayer().RemoveHired();
            c.getPlayer().dropMessage("卡精灵商人已经解除");
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@jk_hm - 卡精灵商人解除").toString();
        }
    }

    public static class jcds extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int gain = c.getPlayer().getMP();
            if (gain <= 0) {
                c.getPlayer().dropMessage("目前没有任何在线点数唷。");
                return true;
            }
            if (splitted.length < 2) {
                c.getPlayer().dropMessage("目前枫叶点数: " + c.getPlayer().getCSPoints(2));
                c.getPlayer().dropMessage("目前在线点数已经累积: " + gain + " 点，若要领取请输入 @jcds true");
            } else if ("true".equals(splitted[1])) {
                gain = c.getPlayer().getMP();
                c.getPlayer().modifyCSPoints(2, gain, true);
                c.getPlayer().setMP(0);
                c.getPlayer().saveToDB(false, false);
                c.getPlayer().dropMessage("领取了 " + gain + " 点在线点数, 目前枫叶点数: " + c.getPlayer().getCSPoints(2));
            }
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@jcds - 领取在线点数").toString();
        }
    }

    public static class 在线点数 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            int gain = c.getPlayer().getMP();
            if (gain <= 0) {
                c.getPlayer().dropMessage("目前没有任何在线点数唷。");
                return true;
            }
            if (splitted.length < 2) {
                c.getPlayer().dropMessage("目前枫叶点数: " + c.getPlayer().getCSPoints(2));
                c.getPlayer().dropMessage("目前在线点数已经累积: " + gain + " 点，若要领取请输入 @在线点数 是");
            } else if ("是".equals(splitted[1])) {
                gain = c.getPlayer().getMP();
                c.getPlayer().modifyCSPoints(2, gain, true);
                c.getPlayer().setMP(0);
                c.getPlayer().saveToDB(false, false);
                c.getPlayer().dropMessage("领取了 " + gain + " 点在线点数, 目前枫叶点数: " + c.getPlayer().getCSPoints(2));
            }
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@在线点数 - 领取在线点数").toString();
        }
    }

    /*
     * public static class dpm extends CommandExecute {
     * 
     * @Override
     * public boolean execute(final MapleClient c, String splitted[]) {
     * if (c.getPlayer().getMapId() == 100000000 && c.getPlayer().getLevel() >= 70
     * || !c.getPlayer().isGM()) {
     * if (!c.getPlayer().isTestingDPS()) {
     * c.getPlayer().toggleTestingDPS();
     * c.getPlayer().dropMessage(5, "请持续攻击怪物1分钟，来测试您的每秒输出！");
     * final MapleMonster mm = MapleLifeFactory.getMonster(9001007);
     * int distance = ((c.getPlayer().getJob() >= 300 && c.getPlayer().getJob() <
     * 413) || (c.getPlayer().getJob() >= 1300 && c.getPlayer().getJob() < 1500) ||
     * (c.getPlayer().getJob() >= 520 && c.getPlayer().getJob() < 600)) ? 125 : 50;
     * Point p = new Point(c.getPlayer().getPosition().x - distance,
     * c.getPlayer().getPosition().y);
     * mm.setBelongTo(c.getPlayer());
     * final long newhp = Long.MAX_VALUE;
     * OverrideMonsterStats overrideStats = new OverrideMonsterStats();
     * overrideStats.setOHp(newhp);
     * mm.setHp(newhp);
     * mm.setOverrideStats(overrideStats);
     * c.getPlayer().getMap().spawnMonsterOnGroundBelow(mm, p);
     * final MapleMap nowMap = c.getPlayer().getMap();
     * Timer.EventTimer.getInstance().schedule(new Runnable() {
     * 
     * @Override
     * public void run() {
     * long health = mm.getHp();
     * nowMap.killMonster1(mm);
     * long dps = (newhp - health) / 15;
     * if (dps > c.getPlayer().getDPS()) {
     * c.getPlayer().dropMessage(6, "你的DPM是 " + dps + ". 这是一个新的纪录！");
     * c.getPlayer().setDPS(dps);
     * c.getPlayer().savePlayer();
     * c.getPlayer().toggleTestingDPS();
     * } else {
     * c.getPlayer().dropMessage(6, "你的DPM是 " + dps + ". 您目前的纪录是 " +
     * c.getPlayer().getDPS() + ".");
     * c.getPlayer().toggleTestingDPS();
     * }
     * 
     * }
     * }, 60000);
     * } else {
     * c.getPlayer().dropMessage(5, "请先把你的这回DPM测试完毕。");
     * return true;
     * }
     * } else {
     * c.getPlayer().dropMessage(5, "只能在弓箭手村测试DPM，并且等级符合70以上。");
     * return true;
     * }
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("").toString();
     * }
     * }
     */
    // EnterCashShop
    /*
     * public static final void EnterCashShop(final MapleClient c, final
     * MapleCharacter chr, final boolean mts) {
     * if (res == 1) {
     * chr.dropMessage(5, "角色保存成功！");
     * }
     * if (chr.isTestingDPS()) {
     * final MapleMonster mm = MapleLifeFactory.getMonster(9001007);
     * if(chr.getMap() != null)
     * chr.getMap().Killdpm(true);
     * chr.toggleTestingDPS();
     * chr.dropMessage(5, "已停止当前的DPM测试。");
     * }
     */

    /*
     * public static class 匿名广播 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 3) {
     * return false;
     * }
     * if (!LoginServer.getNMGB()) {
     * c.getPlayer().dropMessage(5, "匿名广播暂未开放。");
     * return true;
     * }
     * int mod = Integer.parseInt(splitted[1]);
     * if (mod < 1 || mod > 2) {
     * c.getPlayer().dropMessage(5, "消费类型错误，只有1或2。");
     * return true;
     * }
     * String msg = splitted[2];
     * 
     * if (msg.length() > 65) {
     * return false;
     * }
     * if (c.getPlayer().getLevel() < 10) {
     * c.getPlayer().dropMessage(5, "必须等级10级以上才可以使用.");
     * return true;
     * }
     * //if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
     * // c.getPlayer().dropMessage(6, "很抱歉为了防止刷广,所以你每10秒只能用一次.");
     * // return true;
     * // }
     * if ((!c.getPlayer().getCanTalk() ||
     * c.getChannelServer().getMegaphoneMuteState()) && !c.getPlayer().isGM()) {
     * c.getPlayer().dropMessage(5, "目前广播停止使用.");
     * return true;
     * }
     * final List<String> messages = new LinkedList<>();
     * messages.add("匿名广播" + " : " + msg);
     * 
     * if (mod == 1) {
     * if (c.getPlayer().getLevel() < 50) {
     * c.getPlayer().dropMessage(5, "您的等级不足50等，无法使用匿名广播。");
     * return true;
     * }
     * if (c.getPlayer().getCSPoints(1) < 50) {
     * c.getPlayer().dropMessage(5, "您的GASH不足50，无法使用匿名广播。");
     * return true;
     * }
     * c.getPlayer().modifyCSPoints(1, -50, true);
     * }
     * if (mod == 2) {
     * if (c.getPlayer().getLevel() < 50) {
     * c.getPlayer().dropMessage(5, "您的等级不足50等，无法使用匿名广播。");
     * return true;
     * }
     * if (c.getPlayer().getCSPoints(2) < 50) {
     * c.getPlayer().dropMessage(5, "您的枫叶点数不足50，无法使用匿名广播。");
     * return true;
     * }
     * c.getPlayer().modifyCSPoints(2, -50, true);
     * }
     * 
     * World.Broadcast.broadcastSmega(MaplePacketCreator.SkullSmega(messages, false,
     * c.getChannel()));
     * FileoutputUtil.logToFile("logs/聊天/匿名广播.txt", "\r\n " +
     * FileoutputUtil.NowTime() + " IP: " +
     * c.getSession().remoteAddress().toString().split(":")[0] + " 消费类型 " + mod +
     * " 玩家: " + c.getPlayer().getName() + " 说了 :" + msg);
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new
     * StringBuilder().append("@匿名广播 - 具体用法 “@iii 1/2 具体内容” 1为GASH，2为枫叶点数。").
     * toString();
     * }
     * }
     */

    /*
     * public static class 查询玩家信息 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * } else {
     * String name = splitted[1];
     * MapleCharacter victim = MapleCharacter.getCharacterByName(name);
     * int ch = World.Find.findChannel(name);
     * if (victim != null) {
     * if (victim.getGMLevel() > c.getPlayer().getGMLevel()) {
     * c.getPlayer().dropMessage(5, "你不能查看比你高权限的人!");
     * } else if (ch <= 0) {
     * c.getPlayer().dropMessage(5, "该角色为离线状态");
     * //return true;
     * } else {
     * c.getPlayer().dropMessage(5, "玩家名称: " + victim.getName() + " 上次一次维护后等级: " +
     * victim.getCSDJ() + " 当前等级: " + victim.getLevel());
     * c.getPlayer().dropMessage(5, "目前HP: " + victim.getStat().getHp() + " 目前MP: "
     * + victim.getStat().getMp());
     * c.getPlayer().dropMessage(5, "最大HP: " + victim.getStat().getMaxHp() +
     * " 最大MP: " + victim.getStat().getMaxMp());
     * }
     * } else {
     * c.getPlayer().dropMessage(5, "找不到此玩家.");
     * }
     * }
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new
     * StringBuilder().append("@").append(getClass().getSimpleName().toLowerCase()).
     * append(" <玩家名字> - 查询玩家信息").toString();
     * }
     * }
     */

    /*
     * static class 使用鱼包 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * } else {
     * int quantity = Integer.parseInt(splitted[1]);
     * int itemId = 2101120;
     * if (quantity <= 0) {
     * c.getPlayer().dropMessage(5, "你输入的鱼包数量不正确。");
     * return true;
     * }
     * if (quantity > 100) {
     * c.getPlayer().dropMessage(5, "最多只能一次性放100包鱼包。");
     * return true;
     * }
     * 
     * if (c.getPlayer().haveItem(itemId, quantity, false, true)) {
     * if (c.getPlayer().isGM() ||
     * !FieldLimitType.SummoningBag.check(c.getPlayer().getMap().getFieldLimit())) {
     * MapleInventoryManipulator.removeById(c,
     * GameConstants.getInventoryType(2101120), 2101120, quantity, true, false);
     * c.sendPacket(MaplePacketCreator.getShowItemGain(2101120, (short) -quantity,
     * true));
     * final List<Pair<Integer, Integer>> toSpawn =
     * MapleItemInformationProvider.getInstance().getSummonMobs(itemId);
     * 
     * if (toSpawn == null) {
     * c.sendPacket(MaplePacketCreator.enableActions());
     * return true;
     * }
     * MapleMonster ht;
     * int type = 0;
     * 
     * for (Pair<Integer, Integer> toSpawn1 : toSpawn) {
     * for (int i = 0; i < quantity; i++) {
     * if (Randomizer.nextInt(99) <= toSpawn1.getRight()) {
     * ht = MapleLifeFactory.getMonster(toSpawn1.getLeft());
     * c.getPlayer().getMap().spawnMonster_sSack(ht, c.getPlayer().getPosition(),
     * type);
     * }
     * }
     * }
     * 
     * }
     * } else {
     * c.getPlayer().dropMessage(5, "你没有那么多鱼包。");
     * }
     * }
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new
     * StringBuilder().append("@").append(getClass().getSimpleName().toLowerCase()).
     * append(" <鱼包数量> - 使用鱼包").toString();
     * }
     * }
     */
    /*
     * public static class 推荐人 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 2) {
     * return false;
     * }
     * String name = splitted[1];
     * 
     * MapleCharacter victim = MapleCharacter.getCharacterByName(name);
     * 
     * int ch = World.Find.findChannel(name);
     * if (ch <= 0) {
     * c.getPlayer().dropMessage("该玩家不在线上,无法推荐。");
     * return true;
     * }
     * 
     * if (c.getPlayer().getAccountID() == victim.getAccountID()) {
     * c.getPlayer().dropMessage("您不能推荐自己。");
     * return true;
     * }
     * 
     * if (c.getPlayer().getLevel() < 20) {
     * c.getPlayer().dropMessage("您的等级小于20级不能填写推荐人信息。");
     * return true;
     * }
     * if (victim.getLevel() < 35) {
     * c.getPlayer().dropMessage("推荐您玩游戏的玩家小于35级，无法被推荐。");
     * return true;
     * }
     * 
     * if (c.getPlayer().getAcLogS("推荐人") > 0) {
     * c.getPlayer().dropMessage("您的该帐号已经填写过推荐人信息。");
     * return true;
     * }
     * 
     * byte reta;
     * reta = MapleClient.setTGJF(c.getPlayer().getName(), c.getPlayer().getTGJF() +
     * 1);
     * if (reta == -2) {
     * c.getPlayer().dropMessage(6, "[" + "被推荐人" + "] SQL 错误");
     * return true;
     * } else if (reta == -1) {
     * c.getPlayer().dropMessage(6, "[" + "被推荐人" + "] 目标玩家不存在");
     * return true;
     * } else {
     * c.getPlayer().dropMessage(6, "[" + "被推荐人" + "] 成功推荐");
     * }
     * 
     * byte ret;
     * ret = MapleClient.setTGJF(name, victim.getTGJF() + 1);
     * if (ret == -2) {
     * c.getPlayer().dropMessage(6, "[" + "推荐人" + "] SQL 错误");
     * return true;
     * } else if (ret == -1) {
     * c.getPlayer().dropMessage(6, "[" + "推荐人" + "] 目标玩家不存在");
     * return true;
     * } else {
     * c.getPlayer().dropMessage(6, "[" + "推荐人" + "] 成功推荐");
     * }
     * victim.setAcLogS("推荐人数");
     * c.getPlayer().setAcLog("推荐人");
     * c.getPlayer().dropMessage("推荐人 [" + name + "] " + " 成功");
     * FileoutputUtil.logToFile("logs/Data/推荐人.txt", "\r\n " +
     * FileoutputUtil.NowTime() + " 玩家 " + c.getPlayer().getName() + " 推荐人 " + name
     * + " " + "1推广积分");
     * FileoutputUtil.logToFile("logs/Data/推荐人.txt", "\r\n " +
     * FileoutputUtil.NowTime() + " 玩家 " + name + " 被推荐人 " + c.getPlayer().getName()
     * + " " + "1推广积分");
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().append("!推荐人 <玩家> ").toString();
     * }
     * }
     */
    /*
     * public static class 告白广播 extends CommandExecute {
     * 
     * @Override
     * public boolean execute(MapleClient c, String[] splitted) {
     * if (splitted.length < 3) {
     * return false;
     * }
     * 
     * int mod = Integer.parseInt(splitted[1]);
     * if (mod < 1 || mod > 2) {
     * c.getPlayer().dropMessage(5, "消费类型错误，只有1或2。");
     * return true;
     * }
     * String msg = splitted[2];
     * 
     * if (msg.length() > 65) {
     * return false;
     * }
     * if (c.getPlayer().getLevel() < 10) {
     * c.getPlayer().dropMessage(5, "必须等级10级以上才可以使用.");
     * return true;
     * }
     * //if (!c.getPlayer().getCheatTracker().canAvatarSmega2()) {
     * // c.getPlayer().dropMessage(6, "很抱歉为了防止刷广,所以你每10秒只能用一次.");
     * // return true;
     * // }
     * if ((!c.getPlayer().getCanTalk() ||
     * c.getChannelServer().getMegaphoneMuteState()) && !c.getPlayer().isGM()) {
     * c.getPlayer().dropMessage(5, "目前广播停止使用.");
     * return true;
     * }
     * final List<String> messages = new LinkedList<>();
     * messages.add("告白广播" + " : " + msg);
     * 
     * if (mod == 1) {
     * if (c.getPlayer().getLevel() < 50) {
     * c.getPlayer().dropMessage(5, "您的等级不足50等，无法使用告白广播。");
     * return true;
     * }
     * if (c.getPlayer().getCSPoints(1) < 100) {
     * c.getPlayer().dropMessage(5, "您的GASH不足100，无法使用告白广播。");
     * return true;
     * }
     * c.getPlayer().modifyCSPoints(1, -100, true);
     * }
     * if (mod == 2) {
     * if (c.getPlayer().getLevel() < 50) {
     * c.getPlayer().dropMessage(5, "您的等级不足50等，无法使用告白广播。");
     * return true;
     * }
     * if (c.getPlayer().getCSPoints(2) < 100) {
     * c.getPlayer().dropMessage(5, "您的枫叶点数不足100，无法使用告白广播。");
     * return true;
     * }
     * c.getPlayer().modifyCSPoints(2, -100, true);
     * }
     * 
     * //World.Broadcast.broadcastSmega(MaplePacketCreator.SkullSmega(messages,
     * false, c.getChannel()));
     * World.Broadcast.broadcastSmega(MaplePacketCreator.HeartSmega(messages, false,
     * c.getChannel()));
     * FileoutputUtil.logToFile("logs/聊天/告白广播.txt", "\r\n " +
     * FileoutputUtil.NowTime() + " IP: " +
     * c.getSession().remoteAddress().toString().split(":")[0] + " 消费类型 " + mod +
     * " 玩家: " + c.getPlayer().getName() + " 说了 :" + msg);
     * return true;
     * }
     * 
     * @Override
     * public String getMessage() {
     * return new StringBuilder().
     * append("@告白广播 - 具体用法 “@告白广播 1/2 具体内容” 1为GASH，2为枫叶点数。如发表不当言论重者会遭管理员封锁，请自重。").
     * toString();
     * }
     * }
     */
    public static class 丢弃点装 extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            c.sendPacket(MaplePacketCreator.enableActions());
            NPCScriptManager.getInstance().start(c, 9010000, "丢弃点装");
            /*
             * if (splitted.length < 2) {
             * c.getPlayer().dropMessage(6, "用法: @丢弃点装 [点装在装备栏的位置]");
             * return false;
             * }
             * if (c.getPlayer().getLevel() < 10) {
             * c.getPlayer().dropMessage(5, "等级达到10等才能使用该命令.");
             * return false;
             * }
             * MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
             * 
             * short src = (short) Integer.parseInt(splitted[1]);
             * Item toUse =
             * c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(src);
             * 
             * if ((toUse == null) || (toUse.getQuantity() < 1) ||
             * (!ii.isCash(toUse.getItemId()))) {
             * c.getPlayer().dropMessage(6, "丢弃点装出错，装备栏的第 " + src + " 个道具信息为空，或者该道具不是点装。");
             * return false;
             * }
             * MapleInventoryManipulator.drop(c, MapleInventoryType.EQUIP, src,
             * toUse.getQuantity(), false, true);
             */
            return true;

        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("@").append(getClass().getSimpleName().toLowerCase())
                    .append("丢弃点装 [点装在装备栏的位置]").toString();
        }
    }

    public static class 爆率 extends MobDrop {
    }

    public static class MobDrop extends CommandExecute {

        @Override
        public boolean execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9010000, "怪物爆率");
            return true;
        }

        @Override
        public String getMessage() {
            return new StringBuilder().append("!MobDrop").toString();
        }
    }
}
