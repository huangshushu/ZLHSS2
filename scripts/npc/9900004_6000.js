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
			text += "#e#b最新冒险岛消灭BOSS大行动！ #k	#n\r\n"
            text += "#L5##r召唤企鹅王与白雪人！#l\r\n#L1##r召唤月牙牛魔王！#l\r\n#L2##r召唤白狼人！#l\r\n#L4##r召唤骷髅士官！#l\r\n#L3##r召唤扎昆手臂！#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-5000);
				cm.spawnMonster(9300249, 5);
				cm.spawnMonster(9300250, 5);

				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在7-12洞召唤了月牙牛魔王！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
			}}else if (selection == 2) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-2500);
				cm.spawnMonster(9500134, 20);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在7-12洞召唤了白狼人！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8800003, 1);
				cm.spawnMonster(8800004, 1);
				cm.spawnMonster(8800005, 1);
				cm.spawnMonster(8800006, 1);
				cm.spawnMonster(8800007, 1);
				cm.spawnMonster(8800008, 1);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在7-12洞召唤了扎昆手臂！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 4) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(6230602, 20);
				//cm.spawnMonster(8820000, 1);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在7-12洞召唤了骷髅士官！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 5) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9200020, 20);

				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在7-12洞召唤了企鹅王与白雪人！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 6) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9500362, 1);

				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了帕普拉图斯！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 7) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9500363, 1);

				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了皮亚奴斯！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
			}
		}
    }
}


