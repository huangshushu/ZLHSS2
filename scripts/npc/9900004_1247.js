var status = 0;
var 黑水晶 = 4021008;
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
	var a1 = "#L1#" + 红色箭头 + " #r家族每日签到" + 感叹号 + "\r\n\r\n";
	var a2 = "#L2#" + 红色箭头 + " #r家族每日任务" + 感叹号 + "\r\n\r\n";
	var a3 = "#L3#" + 红色箭头 + " #r交100个#v4000406#完成任务获得#v4001266#一个" + 感叹号 + "\r\n\r\n";
			cm.sendSimple("每日家族任务呢，20有一个任务、70有2个、100有3个\r\n"+a1+""+a2+"");

        } else if (status == 1) {
            if (selection == 1) {//红
		cm.openNpc(2010009,1);
	    } else if (selection == 2) {//红
		cm.openNpc(2010009,2);

	    } else if (selection == 3) {//红
	if(cm.getLevel() >= 100 ){
		if(cm.getBossLog('100级家族任务') < 1){
			if(cm.haveItem(4000406,100) ){
				cm.gainItem(4000406,-100);
				cm.gainItem(4001266,1);
				cm.setBossLog('100级家族任务');
				cm.sendOk("你完成了家族任务!");
				cm.dispose();
			} else {
				cm.sendOk("你材料不够呢");
				cm,dispose();
			}
		} else {
			cm.sendOk("你已经完成过一遍了!");
			cm.dispose();
		}
	}else {
		cm.sendOk("你等级不够100级呢");
		cm.dispose();
	}
		//cm.dispose();
	    } else if (selection == 4) {//红
		cm.openNpc(9330067, 4);
		//cm.dispose();
	    } else if (selection == 5) {//红
		cm.openNpc(1072006, 0);
		//cm.dispose();
	    } else if (selection == 6) {//红
		cm.openNpc(9220018, 0);
		//cm.dispose();
	    }
			
        }
    }
}