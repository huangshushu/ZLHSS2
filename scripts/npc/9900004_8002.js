/*
SnailMS脚本生成器
*/
importClass(Packages.tools.处理字符串);

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
		var text = "请输入你要查询的道具名称（#r支持模糊查询#k）：\r\n\r\n";
		
		cm.sendGetText(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		var itemName = cm.getText();
		var itemIdList = cm.findItemInfoByName(itemName);
		if(itemIdList.isEmpty()){
			cm.sendOk("抱歉，查找不到该道具！");
			cm.dispose();
			return;
		}
		var text = "已为您关联查询到以下道具,请选择：#b\r\n"
		var count = 0;
		for(var i in itemIdList){
			if(count % 2 == 0){
				text += "#L" + i + "#" + 处理字符串.formatString(22, " ", itemIdList[i]) + "#l"; 
			}else{
				text += "#L" + i + "#" + 处理字符串.formatString(22, " ", itemIdList[i]) + "#l\t\n"; 
			}
			count++;
		}
		text += "\r\n";
		cm.sendOk(text);
		
	} else if (status == 2) {
		var itemId = selection;
		if(itemId > 0){
			var mobIdList = cm.findMobByDrop(itemId);
			if(mobIdList.isEmpty()){
				cm.sendOk("抱歉，并未查到该道具的爆率！");
				cm.dispose();
				return;
			}
			var text = "已为您查询到以下怪物均掉落#i" + itemId + ":#，请选择查看详情：#b\r\n";
			for(var i in mobIdList){
				if(mobIdList[i] == 0){
					text += "\t\t\t\t【全局掉落】\r\n";
				}else{
					text += "\t\t\t#L" + mobIdList[i] + "##o" + mobIdList[i] + "##l\r\n";
				}
			}
			cm.sendOk(text);
		}else{
			cm.sendOk("你是在卡BUG么！");
			cm.dispose();
			return;
		}
	} else if (status == 3) {
		var mobId = selection;
		if(mobId > 0){
			cm.sendNext(cm.checkDrop(mobId));
		}
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

