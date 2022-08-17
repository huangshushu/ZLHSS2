/*
	制作：dgms
	功能：每日定量签到
	时间：2016年12月23日
 */
var status = 0;
var maxinum = 20;//每天前50名玩家签到
var rewardItem = new Array(//道具id,数量
					 Array(3015671, 1),
					 Array(3015597, 1),
					 Array(3015710, 1)
        );
var 任务简介 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#";
var iconQ = "#fUI/UIWindow2/QuestAlarm/BtQ/normal/0#";
var 空心圆圈1 = "#fUI/UIWindow2/bohabManager/dot/1/dot#";
var 空心圆圈2 = "#fUI/UIWindow2/bohabManager/dot/2/dot#";
var 空心圆圈3 = "#fUI/UIWindow2/bohabManager/dot/3/dot#";
var 空心圆圈4 = "#fUI/UIWindow2/bohabManager/dot/4/dot#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = 任务简介 + "\r\n" + cm.getPlayer().getName() + " ,你是第几位领取奖励的呢？\r\n";
        text += "#b\r\n#L0# " + 空心圆圈1 + " 进行限量版签到！！(目前已经全服已领取" + cm.getEventLogForDay("每日定量签到") + ")";
        if (cm.getPlayer().isGM()) {
            text += "#r\r\n#L2# 管理员重置#k";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getBossLog("限定签到") >= 1) {
                cm.sendOk("对不起，每天一个人只能领取一次。");
                cm.dispose();
                return;
            }

            if (cm.getEventLogForDay("每日定量签到") >= maxinum) {
                cm.sendOk("对不起，在一天中只有前" + maxinum + "名才能领取奖励！");
                cm.dispose();
            } else {
                var pass = true;
                for (var i = 1; i < 5; i++) {
                    if (cm.getSpace(i) < rewardItem.length) {
                        pass = false;
                        break;
                    }
                }
                if (pass) {
                    for (var i = 0; i < rewardItem.length; i++) {
                        cm.gainItem(rewardItem[i][0], rewardItem[i][1]);
                    }
                    cm.sendOk("恭喜您获取了奖励！！！希望你永远能支持" + cm.getServerName() + "!!");
                    cm.setBossLog("限定签到");
                    cm.setEventLogForDay("每日定量签到", 1);
                    cm.worldSpouseMessage(0x1F, "【限量版签到】 恭喜" + cm.getPlayer().getName() + "玩家领取了限量版签到的奖励！！"); //全服公告
                    cm.dispose();
                } else {
                    cm.sendOk("背包不足，请让你所有背包栏空出" + rewardItem.length + "个空格！");
                    cm.dispose();
                }
            }
        } else {
            cm.resetEventLogForDay("每日定量签到");
            cm.sendOk("重置成功！");
            status = -1;
        }
    }
}