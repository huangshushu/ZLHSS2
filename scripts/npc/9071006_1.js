/*
SnailMS脚本生成器
*/

var 合成物 = 1602009;

var 消耗道具 = Array(
	Array(4310020, 1000),
	Array(0, 30000000)
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		var text = "合成#i" + 合成物 + ":##b#z" + 合成物 + "##k 需要：\r\n";
		for(var i = 0; i < 消耗道具.length; i++){
			if(消耗道具[i][0] == 0){
				text += "#b金币x#r" + 消耗道具[i][1] + " ";
			}else if(消耗道具[i][0] == 1){
				text += "#b点券x#r" + 消耗道具[i][1] + " ";
			}else if(消耗道具[i][0] == 2){
				text += "#b抵用券x#r" + 消耗道具[i][1] + " ";
			}else{
				text += "#b#i" + 消耗道具[i][0] + ":#x#r" + 消耗道具[i][1] + " ";
			}
		}
		text += "\r\n\r\n";
		text += "#k确认要合成么？\r\n";
		
		cm.sendYesNo(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(cm.判断背包装备栏().isFull()){
			cm.sendOk("请确保你的背包装备栏至少有 1 格空间。");
			cm.dispose();
			return;
		}
		for(var i = 0; i < 消耗道具.length; i++){
			if(消耗道具[i][0] == 0){
				if(cm.判断金币() < 消耗道具[i][1]){
					cm.sendOk("你的金币不够。");
					cm.dispose();
					return;
				}
			}else if(消耗道具[i][0] == 1){
				if(cm.判断点券() < 消耗道具[i][1]){
					cm.sendOk("你的点券不够。");
					cm.dispose();
					return;
				}
			}else if(消耗道具[i][0] == 2){
				if(cm.判断抵用券() < 消耗道具[i][1]){
					cm.sendOk("你的抵用券不够。");
					cm.dispose();
					return;
				}
			}else{
				if(!cm.haveItem(消耗道具[i][0], 消耗道具[i][1])){
					cm.sendOk("你没有足够的#i" + 消耗道具[i][0] + "#。");
					cm.dispose();
					return;
				}
			}
		}
		
		for(var i = 0; i < 消耗道具.length; i++){
			if(消耗道具[i][0] == 0){
				cm.收金币(消耗道具[i][1]);
			}else if(消耗道具[i][0] == 1){
				cm.收点券(消耗道具[i][1]);
			}else if(消耗道具[i][0] == 2){
				cm.收抵用券(消耗道具[i][1]);
			}else{
				cm.gainItem(消耗道具[i][0], -消耗道具[i][1]);
			}
		}
		var item = cm.getNewEquip(合成物);
		if(item != null){
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, true);
			cm.sendOk("恭喜你成功制作了#v" + 合成物 + "#\r\n");
			cm.全服道具公告("[怪物公园徽章]", "玩家 "+cm.getPlayer().getName()+" 辛勤收集材料，经过不懈努力，终于制作了强大的装备。", item);
		}
		
		
	} else {
		cm.dispose();
		return;
	}
}

