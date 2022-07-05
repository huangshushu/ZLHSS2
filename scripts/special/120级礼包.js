importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var 等级 = 120;//需要的等级
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
            var a1 = "#L1#" + 红色箭头 + " #r："+ 等级 +" 级礼包#l\r\n\r\n"+圆形+"礼包内容：#v2340000#1个 #v2049100#3个\r\n";//
            cm.sendSimple(""+等级+"级任务：\r\n"+a1+"");
        } else if (selection == 1) {//奖励道具区

			if (cm.getPlayer().getLevel() >= 等级 && cm.getBossRankCount(等级+"级礼包") <= 0) {
                cm.setBossRankCount(等级+"级礼包");
                cm.gainItem(2340000,1);
                cm.gainItem(2049100,3);
                cm.gainPotion(1,3000);
                cm.gainMeso(3000000);
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
