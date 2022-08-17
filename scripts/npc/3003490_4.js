/*
SnailMS脚本生成器
*/
var 每日次数 = 5;
var 隐形药水ID = 2614102;
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
		var text = "在这里你可以领取隐形药水，每日最多可领取 #r" + 每日次数 + " #k次,你目前已领取了 #b" + cm.getBossLog("隐形药水领取") + "#k 次。\r\n\r\n";
		text += "#L1##b领取#k#l\r\n\r\n";
		text += "#L2##b返回#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(cm.getBossLog("隐形药水领取") >= 每日次数){
				cm.sendOk("抱歉，您今日的领取次数已达到上限。\r\n");
				cm.dispose();
				return;
			}else{
				if (cm.getInventory(2).isFull(0)) {
					cm.sendOk("请保证消耗栏至少有 #r1#k 格空间！");
					cm.dispose();
					return;
				}
				cm.setBossLog("隐形药水领取");
				cm.gainItem(隐形药水ID, 1);
				cm.sendOk("领取成功。\r\n");
			}
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(3003490, 1);
			return;
		} 
		
	} else if (status == 2) {
		cm.safeDispose();
		cm.openNpc(3003490, 4);
		return;
	} else {
		cm.dispose();
		return;
	}
}

