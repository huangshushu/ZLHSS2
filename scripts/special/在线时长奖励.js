var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var text = "";
            text += "\t\t#e#d欢迎领取#b在线时长点数  #d在线时间：#r" + cm.getGamePoints() + "分钟#k#n\r\n "
            if (cm.getPlayer().isGM()) {
                //text += "\t\t#e#d欢迎领取#b永久店卡  #d在线时间：#r" + cm.getGamePoints() + "分钟#k#n\r\n "
                //text += "#b在线奖励依次为:60分钟10万金币,120分钟100抵用券,180分钟月光铜币2个,240分钟#r双11剁手勋章#k，360分钟100点券，480分钟高级瞬移石1个.\r\n"
                // text += "#b在线奖励依次为:60分钟10万金币,120分钟100抵用券,180分钟月光铜币2个,240分钟60点券，360分钟100点券，480分钟高级瞬移石1个.\r\n"
                //text += "#L1##r领取永久雇佣商人！#v5030001# x1#l\r\n\r\n\r\n"//3
            }


            if (cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() == 0) {
                text += "#L2##r" + 完成红 + "在线时间超过30分钟！" + 完成 + "#v5200002# 点卷100\r\n\r\n\r\n\r\n"//完成但未领取
            } else if (cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() > 0) {
                text += "" + 完成红 + "#r在线时间超过30分钟！#l" + 完成 + "\r\n\r\n"//已完成
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过30分钟！#l" + 正在进行中 + "#v5200002#X100#l\r\n\r\n"//未完成状态
            }

            if (cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 1) {
                text += "#L3##r" + 完成红 + "在线时间超过60分钟！" + 完成 + "#v5200002# 点券100 \r\n#v5041000# 数量 1#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 1) {
                text += "" + 完成红 + "#r在线时间超过60分钟！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过60分钟！#l" + 正在进行中 + "#v5200002# 点券100 \r\n#v5041000# 数量 1#l\r\n\r\n"
            }

            if (cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 2) {
                text += "#L4##r" + 完成红 + "在线时间超过120分钟！" + 完成 + "#v5200002# 点券200 \r\n#v2000019# 数量 30#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 2) {
                text += "" + 完成红 + "#r在线时间超过120分钟！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过120分钟！#l" + 正在进行中 + "#v5200002# 点券200 \r\n#v2000019# 数量 30#l\r\n\r\n"
            }

            if (cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 3) {
                text += "#L5##r" + 完成红 + "在线时间超过240分钟！" + 完成 + "#v5200002# 点券400 \r\n#v5150040# 数量 3#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 3) {
                text += "" + 完成红 + "#r在线时间超过240分钟！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过240分钟！#l" + 正在进行中 + "#v5200002# 点券400 \r\n#v5150040# 数量 3#l\r\n\r\n"
            }

            if (cm.getPlayer().getGamePoints() >= 480 && cm.getPlayer().getGamePointsPD() == 4) {
                text += "#L6##r" + 完成红 + "在线时间超过480分钟！" + 完成 + "#v5200002# 点券 600\r\n#v4000313# 数量 1500#v2022280# 数量 3#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getGamePoints() >= 480 && cm.getPlayer().getGamePointsPD() > 4) {
                text += "" + 完成红 + "#r在线时间超过480分钟！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过480分钟！#l" + 正在进行中 + "#v5200002# 点券 600\r\n#v4000313# 数量 1500#v2022280# 数量 3#l\r\n\r\n"
            }
            /*
            if (cm.getPlayer().getGamePoints() >= 480 && cm.getPlayer().getGamePointsPD() == 5) {
                text += "#L7##r" + 完成红 + "在线时间超过480分钟！" + 完成 + "高级瞬移石x1.#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getGamePoints() >= 480 && cm.getPlayer().getGamePointsPD() > 5) {
                text += "" + 完成红 + "#r在线时间超过480分钟！#l" + 完成 + "\r\n\r\n"
            } else {
                text += "" + 正在进行中蓝 + "#r在线时间超过480分钟！#l" + 正在进行中 + "\r\n\r\n"
            }
            */

            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(5030001, 1)) {
                cm.sendOk("你已经领取过了。无法重新领取！");
                cm.dispose();
            } else if (cm.haveItem(5030000, 1)) {
                cm.sendOk("你已经领取过了。无法重新领取！");
                cm.dispose();
            } else {
                cm.gainItem(5030001, 1);//
                //cm.gainGamePointsPD(1);
                cm.sendOk("领取奖励成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取永久雇佣商人！");
                cm.dispose();
            }
        } else if (selection == 2) {//30分钟
            cm.gainPotion(1, 100);
            cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
            cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了30分钟在线奖励! 100点券.");
            cm.dispose();
        } else if (selection == 3) {//60分钟
            if (cm.canHold(5041000, 30)) {
                cm.gainPotion(1, 100);
                cm.gainItem(5041000, 1);//传送石
                cm.gainGamePointsPD(1);
                cm.sendOk("领取奖励成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了60分钟在线奖励! 100点券 + 传送石.");
                cm.dispose();
            } else {
                cm.sendOk("请清理背包");
            }
        } else if (selection == 4) {//120分钟
            if (cm.canHold(2000019, 30)) {
                cm.gainPotion(1, 200);
                cm.gainItem(2000019, 30)//超级药水 30个
                cm.gainGamePointsPD(1);
                cm.sendOk("领取奖励成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了120分钟在线奖励! 200点券 + 超级药水30个.");
            } else {
                cm.sendOk("请清理背包");
            }
            cm.dispose();
        } else if (selection == 5) {//240分钟
            if (cm.canHold(5150040, 3)) {
                cm.gainPotion(1, 400);
                cm.gainItem(5150040, 3)//皇家理发 3个
                cm.gainGamePointsPD(1);
                cm.sendOk("领取奖励成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了2400分钟在线奖励! 400点券 + 皇家理发卡3个.");
            } else {
                cm.sendOk("请清理背包");
            }
            cm.dispose();
        } else if (selection == 6) {//480分钟
            if (cm.canHold(4000313, 1500) && cm.canHold(2022280, 3)) {
                cm.gainPotion(1, 600);
                cm.gainItem(4000313, 1500)//金叶子 1500个
                cm.gainItem(2022280, 3)//小雪人飘洒雪 3个
                cm.gainGamePointsPD(1);
                cm.sendOk("领取奖励成功！");
                cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了2400分钟在线奖励! 400点券 + 金叶子1500个 + 小雪人飘洒雪3个.");
            } else {
                cm.sendOk("请清理背包");
            }
        } else if (selection == 7) {
            //cm.gainItem(1142299, 5, 5, 5, 5, 50, 50, 0, 0, 5, 5, 0, 0, 0, 0); //双11剁手勋章
            cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
            cm.worldMessage(6, "玩家：[" + cm.getName() + "]领取了240分钟在线奖励! 点卷60点.");
            cm.dispose();
        }
    }
}


