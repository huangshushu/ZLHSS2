importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
var 当前环数 = 12;
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
            var a1 = "#L1#" + 红色箭头 + " #r需要物品：#v2022116#15个 #l\r\n\r\n"+圆形+"完成奖励：#v2049100#2张 #v2340000#1张 金币30W\r\n";//
            cm.sendSimple("第"+当前环数+"环：\r\n"+a1+"");
        } else if (selection == 1) {//奖励道具区
            if (cm.getBossLog('每日第'+当前环数+'环') >= 1) {
				cm.sendOk("你已完成过第"+当前环数+"环");
				cm.dispose();
				return;
			}
            if (cm.getBossLog('每日第'+当前环数-1+'环') <= 0) {
				cm.sendOk("请先完成第"+当前环数-1+"环");
				cm.dispose();
				return;
			}
            if (cm.haveItem(2022116, 15)) {//需要物品数量
                cm.gainItem(4022116,-15);//减少玩家50个ID为4000016的道具
                cm.gainPotion(1,10000);//奖励点卷数
                cm.setBossLog('每日第'+当前环数+'环');
				cm.sendOk("任务已完成");
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
