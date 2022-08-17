var 人气度 = "#fUI/UIWindow/QuestIcon/6/0#";
function start() {
	cm.sendSimple("                  #k#e每周充值排行奖励 #l\r\n\r\n#r充值排行每周日24:00截止积分清零，排名前三找群主拿奖励（充值1000才会上榜）\r\n               #L3##b充值排名#l \r\n\r\n  #r每周充值排名第一奖励：返充值积分15% #v4310060#*5\r\n\r\n  #d每周充值排名第二奖励：返充值积分10% #v4310060#*3\r\n\r\n  #g每周充值排名第三奖励：返充值积分5% #v4310060#*2\r\n\r\n");//\r\n#L2##b金币排名#l
}

function action(mode, type, selection) {
	cm.dispose();
	/if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
	else if (selection == 3) {
	cm.openNpc(2002001,30);
	}
	else if (selection == 4) {
	cm.openNpc(2002001,20);

	}
}
