importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n#e#b你将成为大家的救世主，收集以下物品可以给当前频道玩家相同的点卷！(#r没错就是当前频道所有玩家一起获得#b)#n\r\n#d#e大家可以共同集资完成收集任务,来获得点卷！！！#n\r\n";

		textz += "#d#L0#收集 #v4000017# #b#z4000017##r 100 #d个 将给当前频道玩家#r20W#d点卷#l\r\n\r\n";

		textz += "#d#L1#收集 #v4002000# #b#z4002000##r 50 #d个 将给当前频道玩家#r20W#d点卷#l\r\n\r\n";
		textz += "#d#L2#收集 #v1432010# #b#z1432010##r 1 #d个 将给当前频道玩家#r1W#d点卷#l\r\n\r\n";
		textz += "#d#L3#收集 #v1002390# #b#z1002390##r 1 #d个 将给当前频道玩家#r1W#d点卷#l\r\n\r\n";

		textz += "    \r\n";


                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
        if (cm.haveItem(4000017,100)) {
		cm.gainItem(4000017,-100);
		cm.给当前频道发点卷(200000,1);
                //cm.gainExp( + 100000);
		cm.sendOk("#r#e任务完成,当前频道获得所有人获得#b20W#r点卷");
cm.全服黄色喇叭("[救世主来了] : 玩家 "+cm.getPlayer().getName()+" 给当前频道所有人发放了20万点卷，鼓掌！！！")
 
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。#v4002000# #b#z4002000#");
		cm.dispose();
	    


}else if (selection == 1) {
	if (cm.haveItem(4002000,50)) {
		cm.gainItem(4002000,-50);
		cm.给当前频道发点卷(200000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e任务完成,当前频道获得所有人获得#b20W#r点卷");
cm.全服黄色喇叭("[救世主来了] : 玩家 "+cm.getPlayer().getName()+" 给当前频道所有人发放了20万点卷，鼓掌！！！")
 
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。#v4002000# #b#z4002000#");
		cm.dispose();
	    

}else if (selection == 2) {
	if (cm.haveItem(1432010,1)) {
		cm.gainItem(1432010,-1);
		cm.给当前频道发点卷(10000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e任务完成,当前频道获得所有人获得#b1W#r点卷");
cm.全服黄色喇叭("[救世主来了] : 玩家 "+cm.getPlayer().getName()+" 给当前频道所有人发放了1万点卷，鼓掌！！！")
 
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。#v1432010# #b#z1432010#");
		cm.dispose();

}else if (selection == 3){
	if (cm.haveItem(1002390,1)) {
		cm.gainItem(1002390,-1);
		cm.给当前频道发点卷(10000,1);
               // cm.gainExp( + 100000);
		cm.sendOk("#r#e任务完成,当前频道获得所有人获得#b1W#r点卷");
cm.全服黄色喇叭("[救世主来了] : 玩家 "+cm.getPlayer().getName()+" 给当前频道所有人发放了1万点卷，鼓掌！！！")
 
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。#v1432010# #b#z1432010#");
		cm.dispose();

}else if (selection == 4){
	if (cm.haveItem(4000127,100) && cm.getBossLog('PlayQuest5') < 1) {
		cm.gainItem(4000127,-100);
		cm.setBossLog('PlayQuest5');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 5){
	if (cm.haveItem(4000106,100) && cm.getBossLog('PlayQuest6') < 1) {
		cm.gainItem(4000106,-100);
		cm.setBossLog('PlayQuest6');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4000052,100) && cm.getBossLog('PlayQuest7') < 1) {
		cm.gainItem(4000052,-100);
		cm.setBossLog('PlayQuest7');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4000190,100) && cm.getBossLog('PlayQuest8') < 1) {
		cm.gainItem(4000190,-100);
		cm.setBossLog('PlayQuest8');
		cm.gainItem(4000313,5);
		cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest9') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest9');
		cm.gainNX(100);
		cm.sendOk("任务完成,获得以下奖励:\r\n100点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest10') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest10');
		cm.gainNX(100);
		cm.sendOk("任务完成,获得以下奖励:\r\n100点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest11') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest11');
		cm.gainNX(200);
		cm.sendOk("任务完成,获得以下奖励:\r\n2000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();



}else if (selection == 11){
	if (cm.haveItem(4001126,1000) && cm.getBossLog('PlayQuest14') < 1) {
		cm.gainItem(4001126,-1000);
		cm.setBossLog('PlayQuest14');
		cm.gainNX(100);
		cm.sendOk("任务完成,获得以下奖励:\r\n1000点卷");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();


}
}
}
}
