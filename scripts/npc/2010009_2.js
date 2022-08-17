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
if (cm.getPlayer().getGuild() == null){
	cm.sendOk("你还没有家族呢");
	cm.dispose();
} else {
	var a1 = "#L1#" + 红色箭头 + " #r交100个#v4000001#完成任务获得#v4001266#一个" + 感叹号 + "\r\n\r\n";
	var a2 = "#L2#" + 红色箭头 + " #r交100个#v4000273#完成任务获得#v4001266#一个" + 感叹号 + "\r\n\r\n";
	var a3 = "#L3#" + 红色箭头 + " #r交100个#v4000406#完成任务获得#v4001266#一个" + 感叹号 + "\r\n\r\n";
			cm.sendSimple("每日家族任务呢，20有一个任务、70有2个、100有3个\r\n"+a1+""+a2+""+a3+"");
}

        } else if (status == 1) {
            if (selection == 1) {//红
	if(cm.getLevel() >= 30 ){
		if(cm.getBossLog('30级家族任务') < 1){
				if(cm.haveItem(4000001,100) ){
				cm.gainItem(4000001,-100);
				cm.gainItem(4001266,1);
                                cm.gainGP(+60);
				cm.setBossLog('30级家族任务');
				cm.sendOk("你完成了家族任务!");
				cm.dispose();
			} else {
				cm.sendOk("你材料不够呢");
				cm.dispose();
			}
		} else {
			cm.sendOk("你已经完成过一遍了!");
			cm.dispose();
		}
	}else {
		cm.sendOk("你等级不够30级呢");
		cm.dispose();
	}

	    } else if (selection == 2) {//红
	if(cm.getLevel() >= 70 ){
		if(cm.getBossLog('70级家族任务') < 1){
			if(cm.haveItem(4000273,100) ){
				cm.gainItem(4000273,-100);
				cm.gainItem(4001266,1);
				cm.setBossLog('70级家族任务');
				cm.sendOk("你完成了家族任务!");
				cm.dispose();
			} else {
				cm.sendOk("你材料不够呢");
				cm.dispose();
			}
		} else {
			cm.sendOk("你已经完成过一遍了!");
			cm.dispose();
		}
	}else {
		cm.sendOk("你等级不够70级呢");
		cm.dispose();
	}

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
				cm.dispose();
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
	    
	  
	   
	    }
			
        }
    }
}