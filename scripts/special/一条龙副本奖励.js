importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var 等级 = 160;//需要的等级
var 奖励点券数 = 10000;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var a1 = "#L1#" + 红色箭头 + " 领取一条龙奖励#l\r\n\r\n"+圆形+"一条龙奖励：#v4031250#10个 + 5000点券个\r\n";//
            cm.sendSimple("一条龙奖励：\r\n"+a1+"");
        } else if (selection == 1) {//奖励道具区
            if (cm.canHold(4031250,10)){//检测玩家背包是否能放的下奖励物品
                cm.sendOk("#b请保证背包有足够的空间,否则无完成任务.");
                cm.dispose();
                return;
                }
			if (cm.getBossLog("每日废弃副本") >= 1 && cm.getBossLog("每日废弃副本") >= 1 && cm.getBossLog("每日废弃副本") >= 1 && cm.getBossLog("每日废弃副本") >= 1 && cm.getBossLog("每日废弃副本") >= 1) {
                cm.gainItem(4031250, 10);
                cm.gainPotion(1,5000);
				cm.sendOk("恭喜你领取一条龙奖励!");
				cm.dispose();
				return;
			} else {
				cm.sendOk("你没有满足要求!!!");
				cm.dispose();
				return;
			}
        }
    }
}
