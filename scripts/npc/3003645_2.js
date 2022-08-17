/*
SnailMS脚本生成器
*/


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
		var text = "这个礼盒#v2431046#卖给我的话，我可以给你 #r点券#bx20000#k、#r#v2022428##bx1#k(#r=#b100#r累计赞助#k)\r\n\r\n";
		text += "#L1##b成交，拿去吧！#l\r\n\r\n";
		text += "#L2##b我再想想吧#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(!cm.haveItem(2431046)){
				cm.sendOk("你并没有#v2431046#啊！");
				cm.dispose();
				return;
			}
			if(cm.判断背包消耗栏().isFull(0)){
				cm.sendOk("你的消耗栏不够，请至少保留1格空间！");
				cm.dispose();
				return;
			}
			cm.gainItem(2431046, -1);
			cm.给点券(20000);
			cm.gainItem(2022428, 1);
			cm.sendOk("礼盒我拿走了，喏~这是你的奖励。");
			var item = cm.getNewEquip(2431046);
			//cm.全服道具公告("[礼盒兑换]", "恭喜 " + cm.getPlayer().getName() + " 使用推广礼盒兑换了 20000 点券与 100累计赞助。", item);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.safeDispose();
			cm.openNpc(3003645);
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

