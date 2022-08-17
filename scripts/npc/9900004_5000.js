var Log = '拍卖召唤扎昆';
var Log1 = '拍卖召唤黑龙';

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
			text += "#e#b最新冒险岛消灭BOSS大行动！ #k	#n\r\n #r#e【扎昆】:#n#k今日已进行: #b#e" + cm.getBossLog(Log) + " #k#n次 \r\n #r#e【黑龙】:#n#k今日已进行: #b#e" + cm.getBossLog(Log1) + " #k#n次 \r\n"
            text += "#L1##r召唤扎昆(#b此项只能召唤10次#r)！#l\r\n#L2##r召唤蝙蝠魔！#l\r\n#L3##r召唤天球！#l\r\n#L4##r召唤品克缤！#l\r\n#L5##r召唤暗黑龙王(#b此项只能召唤5次#r)！#l\r\n#L6##r召唤帕普拉图斯！#l\r\n#L7##r召唤皮亚奴斯！#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getBossLog("拍卖召唤扎昆")<10){
				//cm.gainNX(-5000);
				cm.spawnMonster(8800003, 1);
				cm.spawnMonster(8800004, 1);
				cm.spawnMonster(8800005, 1);
				cm.spawnMonster(8800006, 1);
				cm.spawnMonster(8800007, 1);
				cm.spawnMonster(8800008, 1);
				cm.spawnMonster(8800009, 1);
				cm.spawnMonster(8800010, 1);
				cm.spawnMonster(8800000, 1);
cm.setBossLog("拍卖召唤扎昆");
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了扎昆！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("次数不足无法召唤！");
            cm.dispose();
			}}else if (selection == 2) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-2500);
				cm.spawnMonster(8150000, 3);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了蝙蝠魔！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(9400014, 1);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了天球！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 4) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8820001, 1);
				cm.spawnMonster(8820000, 1);
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了品克缤！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
                       }}else if (selection == 5) {
			if(cm.getBossLog("拍卖召唤黑龙")<5){
				//cm.gainNX(-1000);
				cm.spawnMonster(8810026, 1);
cm.setBossLog("拍卖召唤黑龙");
				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了暗黑龙王！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("次数不足无法召唤！");
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
                       }}else if (selection == 8) {
			if(cm.getPlayer().getCSPoints(1) >= 0){
				//cm.gainNX(-1000);
				cm.spawnMonster(8860000, 1);

				cm.全服黄色喇叭("玩家：["+cm.getName()+"]在18-22洞召唤了皮亚奴斯！勇士们赶紧消灭它！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法召唤！");
            cm.dispose();
			}
		}
    }
}


