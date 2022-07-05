importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var 等级 = 40;//需要的等级
var 奖励点券数 = 400;
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
            var a1 = "#L1#" + 红色箭头 + " #r提交物品：#v4000029#200个 #v4000043#200个 #v4000014#200个 #l\r\n\r\n"+圆形+"任务奖励：#v1102163#1个\r\n";//
            cm.sendSimple(""+等级+"级任务：\r\n"+a1+"");
        } else if (selection == 1) {//奖励道具区
            if (!cm.canHold(1102163,1)){//检测玩家背包是否能放的下奖励物品
                cm.sendOk("#b请保证背包有足够的空间,否则无完成任务.");
                cm.dispose();
                return;
                }
            if (cm.getPlayer().getLevel() >= 等级 && cm.haveItem(4000029, 200) && cm.haveItem(4000043, 200)&& cm.haveItem(4000014, 200)&& cm.getBossRankCount(等级+"级主线任务") <= 0) {//需要物品数量
                cm.setBossRankCount(等级+"级主线任务");
                cm.gainItem(4000029,-200);//减少玩家50个ID为4000016的道具
                cm.gainItem(4000043,-200);//减少玩家50个ID为4000016的道具
                cm.gainItem(4000014,-200);//减少玩家50个ID为4000016的道具
				cm.gainItem(1102163, 1);//给玩家1个ID为1002419的道具
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
