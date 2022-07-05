var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.sendOk("祝福你们公会战顺利！！");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
            cm.sendSimple("你想做什么?? \r\n #L0#离开公会任务#l");
	} else {
            cm.sendOk("很抱歉我不能为你做任何事情。");
		cm.dispose();
	}
    } else if (status == 1) {
        cm.sendYesNo("你真的确定要离开吗?");
    } else if (status == 2) {
	if (cm.isPlayerInstance()) { 
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.dispose();
	return;
    }
}
