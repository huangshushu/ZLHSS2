function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        1if (status == 0) {
            v1ar tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t#e欢迎来到#b回顾冒险岛回顾冒险岛 #k!#n\r\n"
			text += "\t#r金猪兑换奖品!#n\r\n"
            text += "#L1##b1个金猪#v4032226#兑换888点抵用#l\r\n\r\n"//3
            text += "#L2##b2个金猪#v4032226#兑换1个#v2049100##l\r\n\r\n"//3
            text += "#L3##b3个金猪#v4032226#兑换1个#v2340000##l\r\n\r\n"//3
			text += "#L5##b5个金猪#v4032226#兑换1个#v1002939##z1002939#\r\n\r\n"//3
			text += "#L6##b6个金猪#v4032226#兑换1个#v4310059##z4310059#\r\n\r\n"
            text += "#L4##b更多兑换，敬请期待#l\r\n\r\n"//3+ cm.getBeans() + "#k点
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.haveItem(4032226,1)) {
	            cm.gainItem(4032226,-1);
				cm.gainDY(888);
				cm.sendOk("兑换成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]金猪兑换成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有足够的金猪！");
				cm.dispose();
			}
        } else if (selection == 2) { 
		if (cm.haveItem(4032226,2)) {
	            cm.gainItem(4032226,-2);
				cm.gainItem(2049100,1);
				cm.sendOk("兑换成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]金猪兑换成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有足够的金猪！");
				cm.dispose();
			}        
		} else if (selection == 3) { 
		if (cm.haveItem(4032226,3)) {
	            cm.gainItem(4032226,-3);
				cm.gainItem(2340000,1);
				cm.sendOk("兑换成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]金猪兑换成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有足够的金猪！");
				cm.dispose();
			}
		} else if (selection == 5) { 
		if (cm.haveItem(4032226,5)) {
	            cm.gainItem(4032226,-5);
				cm.gainItem(1002939,1);
				cm.sendOk("兑换成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]金猪兑换成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有足够的金猪！");
				cm.dispose();
			}
		} else if (selection == 6) { 
		if (cm.haveItem(4032226,6)) {
	            cm.gainItem(4032226,-6);
				cm.gainItem(4310059,1);
				cm.sendOk("兑换成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]金猪兑换成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有足够的金猪！");
				cm.dispose();
			}
       	} else if (selection == 4) { 
				cm.sendOk("还没开！！");
				cm.dispose();
		}
    }
}


