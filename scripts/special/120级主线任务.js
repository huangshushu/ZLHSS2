importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var 等级 = 120;//需要的等级
var 奖励点券数 = 3000;
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
            var a1 = "#L1#" + 红色箭头 + " #r提交物品：#v1102057#1件 #v4000134#X500个 #v4000135#X500个 #l\r\n\r\n"+圆形+"任务奖励：#v2290096#1个 #v1113034#1个 #v5050000#100个\r\n";//
            cm.sendSimple(""+等级+"级任务：\r\n"+a1+"");
        } else if (selection == 1) {//奖励道具区
            if (!cm.canHold(5050000, 100) && !cm.canHold(2290096,1) && !cm.canHold(1113034,1)){//检测玩家背包是否能放的下奖励物品
                cm.sendOk("#b请保证背包有足够的空间,否则无完成任务.");
                cm.dispose();
                return;
                }
            if (cm.getPlayer().getLevel() >= 等级 && cm.haveItem(1102057, 1)&& cm.haveItem(4000134, 500)&& cm.haveItem(4000135, 500) && cm.getBossRankCount(等级+"级主线任务") <= 0)  {//需要物品数量
                cm.setBossRankCount(等级+"级主线任务");
                cm.gainItem(1102057,-1);
                cm.gainItem(4000134,-500);
                cm.gainItem(4000135,-500);
                cm.gainItem(2290096, 1);//给玩家1个ID为1002419的道具
                cm.gainItem(1113034, 1);//给玩家1个ID为1002419的道具
                cm.gainItem(5050000, 100);//洗能力点卷轴
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
