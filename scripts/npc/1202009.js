var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
		if (cm.getQuestStatus(21612) == 1 || cm.getQuestStatus(21614) == 1) {
			cm.sendNext("你是来找我们老大的是吧...");
		} else {
			cm.sendOk("是人类吗？？没事的话赶紧离开这里吧！");
			cm.dispose();
		}
    } else if (status == 1) {
		cm.sendNext("那我就带你去见我们老大吧!");
	} else if (status == 2) {
		cm.warp(140010210,0);
		cm.dispose();
	}
}
