/*
SnailMS脚本生成器
*/
var mark = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

var 赞助币赠与点券 = true;
var 赞助币赠与点券比例 = 200;

var 累计赞助赠与点券 = true;
var 累计赞助赠与点券比例 = 200; 

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
		var text = "您好，这里是CDK兑换中心，请选择你要兑换的事项：\r\n\r\n";
		text += "#L1##b兑换月卡#k#l\r\n\r\n";
		text += "#L2##b兑换赞助币#k#l\r\n\r\n";
		text += "#L3##b兑换累计赞助#k#l\r\n\r\n";
		
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "\r\n#r-----------以下只有GM能看到------------\r\n";
			text += "#L999##bCDK管理中心#k#l\r\n\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(cm.判断背包消耗栏().isFull()){
				cm.dispose();
				cm.sendOk("请保证你的消耗栏至少有1格空间！");
				return;
			}
			
			var text = "请输入你的月卡兑换码：\r\n"
			cm.sendGetText(text);
			mark = 1;
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			if(cm.判断背包其他栏().isFull()){
				cm.dispose();
				cm.sendOk("请保证你的其他栏至少有1格空间！");
				return;
			}
			
			var text = "请输入你的赞助币兑换码：\r\n"
			cm.sendGetText(text);
			mark = 2;
		} else if (selection == 3) {
			//在这里编写选项2要做的事
			/* if(cm.判断背包其他栏().isFull()){
				cm.dispose();
				cm.sendOk("请保证你的其他栏至少有1格空间！");
				return;
			} */
			
			var text = "请输入你的赞助币兑换码：\r\n"
			cm.sendGetText(text);
			mark = 3;
		} else if (selection == 999) {
			//在这里编写选项2要做的事
			cm.dispose();
			cm.openNpc(9900004, 47);
			return;
		} 

	} else if (status == 2){
		if(mark == 1){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("月卡", code)){
				cm.sendOk("兑换码无效，请确认。\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("月卡", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("月卡", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("月卡", code);
			cm.gainItem(itemId, quantity);
			cm.sendOk("恭喜你获得了#b#i" + itemId + ":##z" + itemId + "#x" + quantity + "");
			var item = cm.getNewEquip(itemId);
			cm.全服道具公告("月卡兑换", " " + cm.getPlayer().getName() + " 兑换了月卡x" + quantity + "！", item);
			cm.dispose();
		}else if(mark == 2){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("赞助币", code)){
				cm.sendOk("兑换码无效，请确认。\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("赞助币", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("赞助币", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("赞助币", code);
			cm.gainItem(itemId, quantity);
			var text = "恭喜你获得了#b#i" + itemId + ":##z" + itemId + "#x" + quantity + " ";
			if(赞助币赠与点券){
				text += " 点券x" + quantity * 赞助币赠与点券比例;
				cm.给点券(quantity * 赞助币赠与点券比例);
			}
			cm.sendOk(text);
			var item = cm.getNewEquip(itemId);
			text = " " + cm.getPlayer().getName() + " 兑换了赞助币x" + quantity + "";
			if(赞助币赠与点券){
				text += "，并获得点券x" + quantity * 赞助币赠与点券比例;
			}
			text += "!";
			cm.全服道具公告("赞助币兑换", text, item);
			cm.dispose();
		}else if(mark == 3){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("累计赞助", code)){
				cm.sendOk("兑换码无效，请确认。\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("累计赞助", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("累计赞助", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("累计赞助", code);
			cm.增加赞助余额(quantity);
			var text = "恭喜你获得了 #b累计赞助x" + quantity + " ";
			if(累计赞助赠与点券){
				text += " 点券x" + quantity * 累计赞助赠与点券比例;
				cm.给点券(quantity * 累计赞助赠与点券比例);
			}
			cm.sendOk(text);
			text = " " + cm.getPlayer().getName() + " 兑换了累计赞助x" + quantity + "";
			if(累计赞助赠与点券){
				text += "，并获得点券x" + quantity * 累计赞助赠与点券比例;
			}
			text += "!";
			
			cm.全服喇叭(9, text);
			cm.dispose();
		}
	} else {
		cm.dispose();
		return;
	}
}

