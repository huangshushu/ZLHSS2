importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var status = 0;

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

	    var //textz = "\r\n\t\t  #e家族奖励系统--当前家族人数:#r" + cm.showghrs() + "人#k\r\n\r\n";//家族人数#r" + cm.showghrs() + "#k\r\n"
		//textz += "#e#d#L0#家族人数首次突破10人奖励1000点券(ALL)#l\r\n\r\n";
		//textz += "#e#d#L1#家族人次首次突破30人奖励2000点券(ALL)#l\r\n\r\n";
		//textz += "#e#d#L2#家族人次首次突破50人奖励3000点券(ALL)#l\r\n\r\n";
		//textz += "#e#d#L3#家族人次首次突破80人奖励200000点券(ALL)#l\r\n\r\n";
		/*cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0){//此家族人数首次突破10人奖励1000点券 族长领取   初级公会勋章一枚(成员领取)
			if(cm.getPlayer().getOneTimeLog("jiazu1") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("你已经领取过此家族福利礼包！");
            cm.dispose();
			}else{
			if(cm.showghrs() < 10){
			cm.sendOk("未满足条件");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			cm.gainNX(5000);
			//cm.gainItem(1142107,95,95,95,95,0,0,0,0,0,0,0,0,0,0);
			cm.getPlayer().setOneTimeLog("jiazu1");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]此家族人数达到10人,身为族长奖励5000点券！");
            cm.dispose();
			}else{
			//cm.gainItem(1142107,95,95,95,95,0,0,0,0,0,0,0,0,0,0);
            cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("jiazu1");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]所在的此家族人数达到10人,领取了此家族福利礼包！");
            cm.dispose();
}}}
}else if (selection == 1){//此家族人次首次突破30人奖励2000点券(族长领取)   中级公会勋章一枚(成员领取)1142108
			if(cm.getPlayer().getOneTimeLog("jiazu2") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("你已经领取过此家族福利礼包！");
            cm.dispose();
			}else{
			if(cm.showghrs() < 30){
			cm.sendOk("未满足条件");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142108,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//中级公会勋章
			cm.gainNX(30000);
			cm.getPlayer().setOneTimeLog("jiazu2");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]此家族人数达到30人,身为族长奖励30000点券！");
            cm.dispose();
			}else{
			//cm.gainItem(1142108,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//中级公会勋章
            cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("jiazu2");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]所在的此家族人数达到30人,领取了此家族福利礼包！");
            cm.dispose();
}}}
}else if (selection == 2){//此家族人次首次突破50人奖励4000点券(族长领取)   高级公会勋章一枚(成员领取)
			if(cm.getPlayer().getOneTimeLog("jiazu3") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("你已经领取过此家族福利礼包！");
            cm.dispose();
			}else{
			if(cm.showghrs() < 50){
			cm.sendOk("未满足条件");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142109,105,105,105,105,0,0,0,0,0,0,0,0,0,0);//高级公会勋章
			cm.gainNX(100000);
			cm.getPlayer().setOneTimeLog("jiazu3");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]此家族人数达到50人,身为族长奖励100000点券！");
            cm.dispose();
			}else{
			//cm.gainItem(1142109,105,105,105,105,0,0,0,0,0,0,0,0,0,0);//高级公会勋章
            cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("jiazu3");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]所在的此家族人数达到50人,领取了此家族福利礼包！");
            cm.dispose();
}}}
}else if (selection == 3){//此家族人次首次突破80人奖励6000点券(族长领取)   神级工会勋章一枚(成员领取)
			if(cm.getPlayer().getOneTimeLog("jiazu4") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("你已经领取过此此家族福利礼包！");
            cm.dispose();
			}else{
			if(cm.showghrs() < 80){
			cm.sendOk("未满足条件");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142100,110,110,110,110,0,0,0,0,0,0,0,0,0,0);//
			cm.gainNX(200000);
			cm.getPlayer().setOneTimeLog("jiazu4");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]此家族人数达到80人,身为族长奖励200000点券！");
            cm.dispose();
			}else{
			//cm.gainItem(1142100,110,110,110,110,0,0,0,0,0,0,0,0,0,0);//
			cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("jiazu4");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]所在的此家族人数达到80人,领取了此家族福利礼包！");
            cm.dispose();
			}}}}}}}
