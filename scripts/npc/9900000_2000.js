/*
   脚本定制请联系QQ:540328414
                              */ 
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
	    var textz = "";
        textz += "#b世界任务奖励 野外所有小怪 BOSS都会小几率掉落#v2028041##v2028044#\r\n";
		
		
		textz += "               #k当前任务成就值：#r"+cm.getPlayer().getBossLog("世界任务收集",1)+"#k 点#l\r\n";
           
		textz += "#L0#成就值达到#b9#k奖励:\r\n#v2046913#*2#v2613000#*2#v3992025#*1万,属性50点\r\n\r\n";//#v2048716#*1#v2048717#*1

		textz += "#L1#成就值达到#b18#k奖励:\r\n#v2028158#*1#v4310108#*10#v3992025#*2万,属性100点\r\n\r\n";//#v2048716#*2#v2048717#*2
		
		//textz += "#L2#成就值达到#b27#k奖励:\r\n#v2028223#*1#v2022662#*1#v2048717#*3#v2430209#*30#v3992025#*3万,属性200点\r\n\r\n";
		
		cm.sendSimple (textz);  


             } else if (status == 1) {	
           if (selection == 0) {			 
		   if (cm.getPlayer().getBossLog("世界任务收集",1) <= 8) {
		            cm.sendOk("当前成就值不足9，请确认。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("世界收集任务_9次奖励",1) > 0) {
                    cm.sendOk("此奖励以领取过，无法再次领取。");					
				    cm.dispose();
                    } else{
                    cm.gainItem(2613000,2);//星火
					//cm.gainItem(2048716,1);//防御火花
					//cm.gainItem(2048717,1);//武器火花
					cm.gainItem(2046913,2);//宿命
					cm.gainItem(3992025,10000);//强化星
					cm.gainAp(50);
					cm.getPlayer().setBossLog("世界收集任务_9次奖励",1,1);
		 		    cm.sendOk("世界收集任务奖励领取完毕。");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界收集任务奖励" + " : " + cm.getPlayer().getName() +"恭喜世界随机任务收集成就值达到9的奖励",true).getBytes());
		 		    cm.dispose();
					}
					
			} else if (selection == 1) {			 
		   if (cm.getPlayer().getBossLog("世界任务收集",1) <= 17) {
		            cm.sendOk("当前成就值不足18，请确认。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("世界收集任务_18次奖励",1) > 0) {
                    cm.sendOk("此奖励以领取过，无法再次领取。");					
				    cm.dispose();
                    } else{
                    cm.gainItem(2028158,1);//随机时装公式
					//cm.gainItem(2048716,2);//万能水晶
					//cm.gainItem(2048717,2);//武器火花
					cm.gainItem(4310108,10);//UR时装附魔币
					cm.gainItem(3992025,20000);//强化星
					cm.gainAp(100);
					cm.getPlayer().setBossLog("世界收集任务_18次奖励",1,1);
		 		    cm.sendOk("奖励领取完毕。");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界收集任务奖励" + " : " + cm.getPlayer().getName() +"恭喜世界随机任务收集成就值达到18的奖励",true).getBytes());
		 		    cm.dispose();
					}
	} else if (selection == 2) {			 
		   if (cm.getPlayer().getBossLog("世界任务收集",1) <= 27) {
		            cm.sendOk("当前成就值不足27，请确认。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("世界收集任务_27次奖励",1) > 0) {
                    cm.sendOk("此奖励以领取过，无法再次领取。");					
				    cm.dispose();
                    } else{
                    cm.gainItem(2028223,1);//随机武器公式
					cm.gainItem(2022662,1);//暴君自选
					cm.gainItem(2048717,2);//武器火花
					cm.gainItem(2430209,30);//红包
					cm.gainItem(3992025,30000);//强化星
					cm.gainAp(200);
					cm.getPlayer().setBossLog("世界收集任务_27次奖励",1,1);
		 		    cm.sendOk("奖励领取完毕。");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界收集任务奖励" + " : " + cm.getPlayer().getName() +"恭喜世界随机任务收集成就值达到27的奖励",true).getBytes());
		 		    cm.dispose();
					}

    }
   
}
}}

