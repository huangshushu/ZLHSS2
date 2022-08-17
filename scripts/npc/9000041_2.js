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
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e欢迎来到#b回顾冒险岛回顾冒险岛 #k!#n\r\n"
			text += "\t#r豆豆兑换抵用券!#n\r\n"
            text += "#L1##b300个豆豆兑换600抵用券#l\r\n\r\n"//3
            text += "#L2##b600个豆豆兑换1400抵用券#l\r\n\r\n"//3
            text += "#L3##b1200个豆豆兑换2800抵用券#l\r\n\r\n"//3
            text += "#L4##b2400个豆豆兑换5600抵用券#l\r\n\r\n"//3+ cm.getBeans() + "#k点
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getPlayer().getBeans() >= 300) {
	            cm.gainBeans(-300);
				cm.gainDY(600);
				cm.sendOk("300个豆豆兑换600抵用券成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]300个豆豆兑换600抵用券成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有300个豆豆无法兑换600抵用券！");
				cm.dispose();
			}
        } else if (selection == 2) {  
		if (cm.getPlayer().getBeans() >= 600) {
	            cm.gainBeans(-600);
				cm.gainDY(1400);
				cm.sendOk("600个豆豆兑换1400抵用券成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]600个豆豆兑换1400抵用券成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有600个豆豆无法兑换1400抵用券！");
				cm.dispose();
			}
        } else if (selection == 3) { 
		if (cm.getPlayer().getBeans() >= 1200) {
	            cm.gainBeans(-1200);
				cm.gainDY(2800);
				cm.sendOk("1200个豆豆兑换2800抵用券成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]1200个豆豆兑换2800抵用券成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有1200个豆豆无法兑换2800抵用券！");
				cm.dispose();
			}
        } else if (selection == 4) {
		if (cm.getPlayer().getBeans() >= 2400) {
	            cm.gainBeans(-2400);
				cm.gainDY(5600);
				cm.sendOk("2400个豆豆兑换5600抵用券成功！");
			    cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]2400个豆豆兑换5600抵用券成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有2400个豆豆无法兑换5600抵用券！");
				cm.dispose();
			}
		}
    }
}


