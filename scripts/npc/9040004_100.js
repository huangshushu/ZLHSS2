var 人气度 = "#fUI/UIWindow/QuestIcon/6/0#";
function start() {
	cm.sendSimple("                  #k#e每周人气王活动奖励 #l\r\n#r活动人气每周日24:00截止清零，排名前三找群主拿奖励\r\n        #L3##b人气排名#l       #L4##b人气#l\r\n\r\n            #r每周人气榜排名第一奖励\r\n     #r#v2022529#*5  #v3992025#*3万  #v2613000#*5  #v2046913#*1\r\n                 #d每周人气榜排名第二奖励\r\n    #v2022529#*4  #v3992025#*2万  #v2613000#*4  #v2046913#*1 \r\n\r\n             #g每周人气榜排名第三奖励\r\n    #v2022529#*3  #v3992025#*1万  #v2613000#*3  #v2046913#*1\r\n\r\n");//\r\n#L2##b金币排名#l
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
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
	cm.人气排行榜();
        cm.dispose();
	}
	else if (selection == 4) {
	cm.openNpc(2002001,20);

	}
}
