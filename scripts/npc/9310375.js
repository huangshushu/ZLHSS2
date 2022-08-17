/* 
	累积充值领取礼包
*/
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 最高累积天数
var day = 7;
// 每个阶段礼包所需的充值数
var condition = new Array(50, 100);
// 礼包内容
var reward = new Array(
    //20元的  每日的 
    Array(1, 4310036, 250),//征服者币
    Array(1, 4310143, 20),//BOSS币
    Array(1, 4001126, 500),//枫叶
    Array(1, 4021016, 4),//最高级物品结晶
    Array(1, 4033356, 4),//正义火种
    Array(1, 2049600, 1),//还原卷轴
    Array(1, 2049116, 2),//强混
    Array(1, 2049122, 2),//正向
    Array(1, 2340000, 2),//祝福
    Array(1, 5064000, 2),//防爆
    Array(1, 2049323, 2),//无损

    //40元的  每日的 
    Array(2, 2450023, 1),   //浪子回头
    Array(2, 4310036, 500),//征服者币
    Array(2, 4310143, 40),//BOSS币
    Array(2, 4001126, 1000),//枫叶
    Array(2, 4021016, 8),//最高级物品结晶
    Array(2, 4033356, 8),//正义火种
    Array(2, 2049600, 2),//还原卷轴
    Array(2, 2049116, 5),//强混
    Array(2, 2049122, 5),//正向
    Array(2, 2340000, 5),//祝福
    Array(2, 5064000, 5),//防爆
    Array(2, 2049323, 5),//无损

    //20元的7天  
    Array(3, 5062009, 50), //魔方
    Array(3, 5062500, 50), //魔方
    Array(3, 5062010, 50), //魔方
    Array(3, 5062024, 30), //魔方
    Array(3, 4001839, 1000), //星星 
    Array(3, 2048717, 2),   //永远的涅槃火焰
    Array(3, 2436249, 2), //惊人卷自选
    Array(3, 2049500, 5),//金光
    Array(3, 2048301, 5),//金光
    Array(3, 4001126, 3000),//枫叶
    Array(3, 4001715, 1), //1亿定居金
	Array(3, 4001006, 100), //火焰羽毛
    Array(3, 4034999, 100), //黑色羽毛

    //40元的7天 
    Array(4, 2436245, 1),//FFN随机箱
    Array(4, 5062009, 100), //魔方
    Array(4, 5062500, 100), //魔方
    Array(4, 5062010, 100), //魔方
    Array(4, 5062024, 80), //魔方
    Array(4, 4001839, 2000), //星星 
    Array(4, 2048717, 4),   //永远的涅槃火焰
    Array(4, 2436249, 4), //惊人卷自选
    Array(4, 2049500, 10),//金光
    Array(4, 2048301, 10),//金光
    Array(4, 4001126, 5000),//枫叶
    Array(4, 4001715, 2), //1亿定居金
	Array(4, 4001006, 200), //火焰羽毛
    Array(4, 4034999, 200) //黑色羽毛

);


var status = -1;
var text;
var paylog;
var sel;
var daily = "每日充值礼包";
var grandtotal = "7天累计充值礼包";
var giftname;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        paylog = cm.getSevenDayPayLog(day);
        text = "\t\t\t\t#e- 充值礼包领取 -#n\r\n\r\n";
        text += "#d您总共充值金额为： #r" + cm.getPlayer().getRMB() + " #d元宝，最近 #r7#d 日的充值记录为：#k\r\n\r\n\t#e";
        //text += "您最近7日的充值记录：\r\n\r\n\t#e";
        text += paylog + "#n\r\n#b";

        var loop = false;
        for (var i = 0; i < condition.length; i++) {
            giftname = (!loop ? daily : grandtotal) + (i + 1);
            if (!loop) {
                text += "#L" + i + "#领取每日充值" + condition[i] + "元宝奖励";
                if (i + 1 == condition.length) {
                    i = -1;
                    loop = !loop;
                }
            } else {
                text += "#L" + (i + condition.length) + "#领取连续7天每日充值" + condition[i] + "元宝奖励";
            }
            if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
                text += "(已领取)";
            }
            text += "#l\r\n";
        }

        cm.sendOk(text);
    } else if (status == 1) {
        // 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
        if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))) {
            cm.sendOk("#d服务器当前时间： #r" + hour + " 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取充值奖励。#k");
            cm.dispose();
            return;
        }
        sel = selection + 1;
        giftname = (selection < condition.length ? daily : grandtotal) + (selection < condition.length ? sel : sel - condition.length);
        if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
            cm.sendOk("这个礼包您已经领取过了");
            cm.dispose();
            return;
        }
        text = "\t\t\t\t#e- 礼包内容 -#n\r\n\r\n";
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == sel) {
                text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
            }
        }
        cm.sendYesNo(text);
    } else if (status == 2) {
        var RMB = sel <= condition.length ? condition[sel - 1] : condition[sel - 1 - condition.length];
        if (sel <= condition.length) {
            if (paylog.get(0) < RMB) {
                cm.sendOk("您今日充值不满" + RMB + "元，无法领取这个礼包。");
                cm.dispose();
                return;
            }
        } else {
            for (var i = 0; i < day; i++) {
                if (paylog.get(i) < RMB) {
                    cm.sendOk("您最近7天没有达到连续充值" + RMB + "元，无法领取这个礼包。");
                    cm.dispose();
                    return;
                }
            }
        }
        var rewardlist = new Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == sel) {
                rewardlist.push(new Array(reward[i][1], reward[i][2]));
            }
        }
        if (!cm.canHoldSlots(rewardlist.length)) {
            cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
            cm.dispose();
            return;
        }
        for (var i = 0; i < rewardlist.length; i++) {
            cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
        }
        cm.setBossLogAcc(giftname);
        cm.playerMessage(1, "领取成功！");
        //cm.channelMessage(0x18, "『每日充值』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了每日充值 " + condition[sel-1] + " 元奖励。");
        cm.dispose();
    }
}