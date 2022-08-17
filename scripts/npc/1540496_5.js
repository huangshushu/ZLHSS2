/* Author: Xterminator
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.sendNext("需要去再来找我吧!");
	    cm.dispose();
	    return;

	}
	status--;
    }
    if (status == 0) {
    cm.sendSimple("你可以选择继续挑战,重返战场还是离开..\r\n\r\n#L1##b 我想去重返继续挑战.#l\r\n#L0# 我想离开了.#l\r\n");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("好的，马上送您立即离开这里。");
	} else if (selection == 1) {
	    status = 2;
	    cm.sendNext("请注意您的重返次数，到达次数就不能再使用重返了！");
            
	} else if (selection == 2) {
	    status = 4;
	    cm.sendNext("具.");
	}
    } else if (status == 2) {
	if (cm.getMeso() < 1) {
	    cm.sendNext("你没有足够的金币!");
	    cm.dispose();
	} else {

            cm.removeAll(2432262);

	    cm.warp(350060300, 0);


	    cm.dispose();
	}
    } else if (status == 3) {
    if (cm.getPlayer().getClient().getChannel() != 4 ) {
        cm.sendOk("斯乌仅可在4频道召唤,当前频道不能重返挑战,请重新登陆选择4频道游戏.");
        cm.dispose();
	 } else if (cm.haveItem(2432262)) {

	    cm.warp(350060600, 0);
            cm.gainItem(2432262, -1);
	    cm.dispose();
	} else {
	    cm.sendOk("你本次挑战重返次数已经用完！ 不能使用重返了....");
	    cm.dispose();
	}
    } else if (status == 4) {
	cm.sendNext("这样一个难得的项目.");
    } else if (status == 5) {
	cm.sendNextPrev("我回来没有它，我就觉得可怕没有它。");
    } else if (status == 6) {
	cm.dispose();
    }
}
