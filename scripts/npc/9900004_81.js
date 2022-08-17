/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：推广系统
 */
importPackage(net.sf.odinms.client);
var 点券 = "#fUI/CashShop.img/CashItem/0#";
var status = 0;
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("咳咳。。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        var MC = cm.getServerName();
        if (status == 0) {
            cm.sendGetText("#r提示:一个玩家只能使用一次推广码。#n\r\n\r\n\r\n#k请输入兑换的推广码；");
        } else if (status == 1) {
            fee = cm.getText();
            cm.sendYesNo("确认你的推广码准确无误 ； #r" + fee + " #k?");
        } else if (fee <= 0) {
            cm.sendOk("输入有误！！！");
            cm.dispose();
        } else if (fee == cm.getPlayer().id) {
            cm.sendOk("你不能使用自己的推广码。");
            cm.dispose();
        } else if (cm.getQuestStatus(9941301) == 2) {
            cm.sendOk("很抱歉，你已经使用过推广码了！");
            cm.dispose();
        } else {
            if (chance <= 1) {
                cm.dispose();
                cm.setBossRankCount("" + fee + "", 1);
                cm.setBossRankCount("推广员", 0);
                cm.setBossRankCount("推广员", fee);
                cm.completeQuest(9941301);
                cm.sendOk("兑换成功。");
            } else {
                cm.sendOk("未知错误，请联系ZEV;7144700");
                cm.dispose();
            }

        }
    }
}