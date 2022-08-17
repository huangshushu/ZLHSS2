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
			//text += "\t\t\t          #e#b兑换中心#k!#n\r\n"
			text += "#n#k    当前点券：#r" + cm.getNX(1) + "点#k\t 当前抵用券：#r"+cm.getNX(2)+"点#k\r\n\r\n"//3
			text += "     兑换之前请检查包包所有栏目是否有2格以上的空位\r\n"
			text += "  #e#b若没2格以上空位,请清理好再兑换 否则遗失恕不理赔#k#n\r\n"
            text += "#L1##b豆豆兑换抵用券#l         #L2##b枫叶兑换抵用券#l\r\n\r\n"//3
            text += "#L3##b1000点券兑换#v4000463#1个#l     #L4##b1个#v4000463#兑换900点券#l\r\n\r\n"//3
			text += "#L5##b10000点券兑换#v4000463#10个#l   #L6##b10个#v4000463#兑换9500点券#l\r\n\r\n"//3
			//text += "#L7##b30W金币兑换#v4031456##l      #L8##b50个#v4031456#兑换#v4000463##l\r\n\r\n"//3
			text += "#L10##b200个#v4000313#兑换#v4000463##l       #L8##v4310143##b1个#兑换#v4000463#1个\r\n\r\n"//3
			text += "#L11##b10000个豆豆兑换120W经验#l  #L12#1500个豆豆兑换10W经验#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
        cm.openNpc(9000041, 2);
        } else if (selection == 2) {  
        cm.openNpc(9000041, 3);
        } else if (selection == 3) { 
		if (cm.getPlayer().getCSPoints(1) >= 1000) {
	    cm.gainNX(-1000);
		cm.gainItem(4000463,1);
		cm.sendOk("恭喜你兑换成功了一个#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币1个！");
        cm.dispose();
		 } else {
        cm.sendOk("你的点券不足1000点。");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.haveItem(4000463, 1)) {
		cm.gainItem(4000463,-1);
	    cm.gainNX(+900);
		cm.sendOk("恭喜你成功兑换了900点");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换900点券！");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有#v4000463#");
        cm.dispose();
				}
        } else if (selection == 5) {
        if (cm.getPlayer().getCSPoints(1) >= 10000) {
		cm.gainNX(-10000);
		cm.gainItem(4000463,10);
		cm.sendOk("恭喜你成功兑换了#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币10个！");
        cm.dispose();
		 } else {
        cm.sendOk("你的点券不足10000点");
        cm.dispose();
				}
        } else if (selection == 6) {
        if (cm.haveItem(4000463, 10)) {
		cm.gainNX(+9500);
		cm.gainItem(4000463,-10);
		cm.sendOk("恭喜你成功兑换了9500点券");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换9500点券！");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4000463#不足10个");
        cm.dispose();			
				}
		} else if (selection == 7) {
        if (cm.getMeso() >= 300000){//判断多少金币
        cm.gainMeso(- 300000 );//扣除多少金币
	    cm.gainItem(4031456, 1);
		cm.sendOk("恭喜你成功兑换了#v4031456#");
        cm.dispose();
		 } else {
        cm.sendOk("你没有3000000金币");
        cm.dispose();
		        }
        } else if (selection == 8) {
        if (cm.haveItem(4310143, 1)) {
		cm.gainItem(4310143,-1);
	    cm.gainItem(4000463, 1);
		cm.sendOk("恭喜你成功兑换了#v4000463#");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有1个#v4310143#");
        cm.dispose();
				}
		} else if (selection == 9) {
        if (cm.getBeans() >= 200) {//判断豆豆
        cm.gainBeans(-200);//扣除豆豆
	    cm.gainItem(4031456, 1);
		cm.sendOk("恭喜你成功兑换了#v4031456#");
        cm.dispose();
		 } else {
        cm.sendOk("你没有200豆豆");
        cm.dispose();
		        }
        } else if (selection == 10) {
        if (cm.haveItem(4000313, 200)) {//黄金枫叶
		cm.gainItem(4000313,-200);//黄金枫叶
		cm.gainItem(4000463,1);
		cm.sendOk("恭喜你成功兑换了#v4000463#");
		cm.worldMessage(6,"【兑换系统】["+cm.getName()+"]成功兑换国庆币1个！(金枫叶兑换)");
        cm.dispose();
		 } else {
        cm.sendOk("你的黄金枫叶不足200个");
        cm.dispose();
		        }
		} else if (selection == 12) { 
		if (cm.getPlayer().getBeans() >= 1500) {
	            cm.gainBeans(-1500);
				cm.gainExpR(100000);
				cm.sendOk("1500个豆豆兑换100000经验成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有1000个豆豆无法兑换100000经验！");
				cm.dispose();
		        }			
		} else if (selection == 11) { 
		if (cm.getPlayer().getBeans() >= 10000) {
	            cm.gainBeans(-10000);
				cm.gainExpR(1200000);
				cm.sendOk("10000个豆豆兑换1200000经验成功！");
				cm.dispose();
			}else{
				cm.sendOk("你没有10000个豆豆无法兑换1200000经验！");
				cm.dispose();
			     }
		}
		}}
