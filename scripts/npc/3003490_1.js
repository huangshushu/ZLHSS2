/*
SnailMS脚本生成器
*/
var 技能皮肤开放体验 = true;

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
		var text = "欢迎来到神秘百宝箱，您已开通的功能如下：\r\n\r\n";
		var 开通 = false;
		if(cm.getOneTimeLog("伤害皮肤切换") > 0){
			text += "#L1##b伤害皮肤切换#k\r\n\r\n";
			开通 = true;
		}
		if(cm.getOneTimeLog("基础技能皮肤切换") > 0){
			text += "#L2##b技能皮肤切换#k\r\n\r\n";
			开通 = true;
		}else if(技能皮肤开放体验){
			text += "#L2##b技能皮肤切换(限时体验中）#k\r\n\r\n";
			开通 = true;
		}

		if(cm.getOneTimeLog("隐形药水免费领取") > 0){
			text += "#L3##b隐形药水免费领取#k\r\n\r\n";
			开通 = true;
		}
		if(开通){
			cm.sendSimple(text);
		}else{
			cm.sendOk("抱歉，你并没有开通神秘百宝箱的功能，请去礼品币商店购买对应功能后再来使用。\r\n");
			cm.dispose();
			return;
		}
		
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.safeDispose();
			cm.openNpc(3003490, 2);
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(3003490, 3);
			return;
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(3003490, 4);
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

