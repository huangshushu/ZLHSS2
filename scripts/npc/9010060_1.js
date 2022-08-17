

/* NPC版权: 追忆
 NPC名称: 		小帮手
 MAP(地图ID): 	        (101050000)
 NPC类型: 		综合NPC
 制作人：故事丶
 */

var psrw = new Array(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500);
var rand = Math.floor(Math.random() * psrw.length);
var status = 0;
var fstype = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (cm.getBossLog("普通签到") == 1) {
            var vipstr = "#g已签到#k";
        } else {
            var vipstr = "#b未完成#k";
        }
        if (cm.getBossLog("签到特殊奖励") == 1) {
            var vipstr1 = "#g已领取#k";
        } else {
            var vipstr1 = "#b未领取#k";
        }
        if (status == 0) {
            var text = "";
            text = "#e<#v3991051# #v3991050# #v3991038# #v3991044#-签到系统>#n\r\n#b#h ##k每日进行签到可以获得奖励的哦~你想做什么呢。\r\n你当前签到信息：\r\n#b总计签到: " + cm.getBossLog("总计签到", 1) + " 天\r\n";
            text += "#L0##b查看签到NPC规则#l\r\n";
            text += "#L1##b开始签到 #k(今日状态：" + vipstr + ")#l\r\n";
            text += "#L2##r领取签到奖励(New) #k(领取状态：" + vipstr1 + ")#l\r\n";
            text += "#L3##b签到物品兑换道具#l\r\n";
            cm.sendSimple(text);

        } else if (status == 1) {
            if (selection == 0) {
                cm.sendOk("#e<#v3991051# #v3991050# #v3991038# #v3991044#-签到规则>#n\r\n签到一每日可进行一次,要求等级180级以上。签到后可获得#b出席者勋章#k1个,累计次数可上签到排行榜。");
                cm.dispose();
            } else if (selection == 1) {
                if (cm.getPlayer().getLevel() < 180) {
                    cm.sendOk("等级180级的玩家才可以进行此项目。");
                } else if (cm.getGamePoints() < 120) {
                    cm.sendOk("在线时间120分钟才可以进行此项目。\r\n您当前在线时间:" + cm.getGamePoints() + "分钟。");
                } else if (cm.getSpace(4) < 2) {
                    cm.sendOk("背包其他栏有2个空间才可以进行此项目。");
                } else if (cm.getBossLog("普通签到") == 0) {
                    cm.setBossLog("普通签到");
                    cm.setBossLog("总计签到", 1);
                    cm.gainItem(4032398, 1);
                    cm.gainItem(4033136, 1);
                    cm.sendOk("签到成功,你获得了#v4032398#x1 #v4033136#x1#k。");
                    cm.worldMessage("[签到系统]：玩家 [" + cm.getPlayer().getName() + "] 成功签到，当前签到次数 " + cm.getBossLog("总计签到", 1) + "");
                } else {
                    cm.sendOk("你今天已经签到过了,明天再来吧!");
                }
                status = -1;

            } else if (selection == 2) {
                if (cm.getBossLog("总计签到", 1) < 15) {
                    cm.sendOk("总计签到达到15天才可以进行此项目。达到后每日可找我随机领取100-1500抵用卷。\r\n#b当前总计签到: " + cm.getBossLog("总计签到", 1) + " 天");
                } else if (cm.getBossLog("签到特殊奖励") == 0) {
                    cm.setBossLog("签到特殊奖励");
                    cm.gainNX(2, psrw[rand]); //随机给抵用卷
                    cm.sendOk("签到成功,你获得了#b" + psrw[rand] + "#k抵用卷。");
                    cm.worldMessage("玩家 [" + cm.getPlayer().getName() + "] 成功领取了签到特殊奖励获得了" + psrw[rand] + "抵用卷。");
                } else {
                    cm.sendOk("你今天已经领取过了,明天再来吧!");
                }
                status = -1;

            } else if (selection == 3) {
                    cm.dispose();
                    cm.openNpc(9010060, 100);



            }
        }
    }
}



