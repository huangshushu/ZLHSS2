var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			qm.sendYesNo("听#p12000#的吩咐，想给#p1002101#传话的话，得去金银岛。想去金银岛的话只有给 #m60000#的#p22000#钱一种方法…… 幸好#p12000#已经提前和#p22000#打过招呼了。没什么可担心的这样就可以出发明珠港!");
			qm.gainExp(10);
	        qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}