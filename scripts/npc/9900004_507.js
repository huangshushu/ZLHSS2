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

	    var textz = "\r\n#e超稳冒险岛每周任务专区.#r每个任务都可以无限循环.每周更新材料！#k\r\n#b注：材料不够会被系统吞掉，吞掉一律不赔，请注意.       #r每个任务都包含10W经验#l\r\n";

		textz += "#d#L0#收集#v4000005##b#z4000005##r 50 #d个可兑换#r#v4000313# 5张\r\n";

		textz += "#d#L1#收集#v4000163##b#z4000163##r 100 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L2#收集#v4000151##b#z4000151##r 50 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L4#收集#v4000127##b#z4000127##r 100 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L5#收集#v4000106##b#z4000106##r 100 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L6#收集#v4000052##b#z4000052##r 100 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L7#收集#v4000190##b#z4000190##r 100 #d个可兑换#r#v4000313#5张\r\n";

		textz += "#d#L3#收集#v4000406##b#z4000406##r 50 #d个可兑#r#v4000313#5张\r\n";
                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {
        if (cm.haveItem(4000005,50) && cm.getBossLog('PlayQuest1') < 1) {
		cm.gainItem(4000005,-50);
		cm.setBossLog('PlayQuest1');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
	    


}else if (selection == 1) {
	if (cm.haveItem(4000163,100) && cm.getBossLog('PlayQuest2') < 1) {
		cm.gainItem(4000163,-100);
		cm.setBossLog('PlayQuest2');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();
	    

}else if (selection == 2) {
	if (cm.haveItem(4000151,50) && cm.getBossLog('PlayQuest3') < 1) {
		cm.gainItem(4000151,-50);
		cm.setBossLog('PlayQuest3');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
		cm.dispose();

}else if (selection == 3){
	if (cm.haveItem(4000406,50) && cm.getBossLog('PlayQuest4') < 1) {
		cm.gainItem(4000406,-50);
		cm.setBossLog('PlayQuest4');
		cm.gainItem(4000313,5);
                cm.gainExp( + 100000);
		cm.sendOk("任务完成,获得群主微笑额外赠送的\r\n10万经验!");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成一次)#k");
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
