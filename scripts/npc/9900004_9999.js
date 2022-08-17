/*
   脚本定制请联系QQ:540328414
                              */ 
var status = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";

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
	    var 
        textz = ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";		
		textz += "           "+小烟花 +"#r欢迎来到月月冒险岛隐藏任务#k"+小烟花 +"\r\n";
		textz += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n";
		textz += "               #d现已开放12个隐藏任务NPC#k\r\n\r\n";
		textz += "                 #b隐藏任务触发条件如下#k\r\n\r\n";
		textz += "      #r任意地图中找到含有隐藏任务的NPC，与其对话#k\r\n\r\n";
		
		textz += "                 当前任务成就值：#r"+cm.getPlayer().getBossLog("隐藏任务成就值",1)+"#k 点\r\n\r\n";
           
		textz += "               #L0#领取 #b10#k 次成就奖励#l\r\n\r\n";
		textz += "            #v4251202#*20，#v4250602#*20，#v4005004#*100\r\n\r\n";
		textz += "        #v3992025#*2500，#v2022452#*5000万，#v4031138#*3000万\r\n\r\n";

		//textz += "               #L1#领取 #b20#k 次成就奖励\r\n\r\n";
		
		cm.sendSimple (textz);  


             } else if (status == 1) {	
           if (selection == 0) {			 
		   if (cm.getPlayer().getBossLog("隐藏任务成就值",1) <= 10) {
		            cm.sendOk("当前成就值不足，请确认。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("隐藏任务_10次奖励",1) > 0) {
                    cm.sendOk("此奖励以领取过，无法再次领取。");					
				    cm.dispose();
                    } else{
                    cm.gainItem(4251202,20);//奖励道具ID，数量
					cm.gainItem(4005004,100);//奖励道具ID，数量
					cm.gainItem(4250602,20);//奖励道具ID，数量
					cm.gainItem(3992025,2500);//奖励道具ID，数量
					cm.gainExp(50000000);
					cm.gainMeso(30000000);
					cm.getPlayer().setBossLog("隐藏任务_10次奖励",1,1);
		 		    cm.sendOk("奖励领取完毕。");
		 		    cm.dispose();
					}
					
			} else if (selection == 1) {			 
		   if (cm.getPlayer().getBossLog("隐藏任务成就值",1) <= 20) {
		            cm.sendOk("当前成就值不足，请确认。");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("隐藏任务_20次奖励",1) > 0) {
                    cm.sendOk("此奖励以领取过，无法再次领取。");					
				    cm.dispose();
                    } else{
                    cm.gainItem(4000463,1);//奖励道具ID，数量
					cm.gainItem(4251202,5);//奖励道具ID，数量
					cm.gainItem(4011008,5);//奖励道具ID，数量
					cm.gainExp(30000000);
					cm.gainMeso(Meso);
					cm.getPlayer().setBossLog("隐藏任务_20次奖励",1,1);
		 		    cm.sendOk("奖励领取完毕。");
		 		    cm.dispose();
					}

    }
   
}
}}