/*
SnailMS脚本生成器
*/
importClass(Packages.client.inventory.MapleInventory);
importClass(Packages.client.inventory.MapleInventoryType);

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
		var text = "这个礼盒#v2430282#卖给我的话，我可以给你 #r点券#bx8888#k、#r抵用券#bx8888#k 、#r金币#bx5000000#k、#b#v2340000#x2#k、#b#v5150038#x1#k\r\n\r\n";
		text += "#L1##b成交，拿去吧！#l\r\n\r\n";
		text += "#L2##b我再想想吧#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(!cm.haveItem(2430282)){
				cm.sendOk("你并没有#v2430282#啊！");
				cm.dispose();
				return;
			}
			if(cm.判断背包消耗栏().isFull(1)){
				cm.sendOk("你的消耗栏不够，请至少保留2格空间！");
				cm.dispose();
				return;
			}


			cm.gainItem(2430282, -1);
			cm.给点券(8888);
			cm.给抵用券(8888);
			cm.给金币(5000000);
			cm.gainItem(2340000, 2);
			cm.gainItem(5150038, 1);
			cm.sendOk("礼盒我拿走了，喏~这是你的奖励。");
			var item = cm.getNewEquip(2430282);
			//cm.全服道具公告("[礼盒兑换]", "恭喜 " + cm.getPlayer().getName() + " 使用神秘礼盒兑换了 点券x8888、抵用券x8888、金币x500万、祝福卷轴x2、超级明星美发卡x1。", item);
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

