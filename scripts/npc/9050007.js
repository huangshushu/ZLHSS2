var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text = ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";		
			text += "            "+小烟花+"#r欢迎来到BOSS---小吃店召唤#k"+小烟花 +"\r\n";
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\r\n";
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			text += "#L8##r" + 红色箭头 + "合成#v1113080#全属性随即10-20需要#v1113081#和#v1113082#\r\n"//3
			//text += "#L9##r" + 蓝色箭头 + "挑战【神级BOSS】雷昂#g>>>>>>#b需要#v4000463#*50\r\n\r\n"//3
			text += "#L7##r" + 蓝色箭头 + "召唤初级BOSS---小吃店需要#v2012003#*5#v2012000#*5,等级120级\r\n\r\n"//3
            //text += "#L5##r" + 蓝色箭头 + "送我离开\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            //text += "#L21##d" + 红色箭头 + "制作#v3700228#1个\t需要：#v4000000#100个\r\n\r\n"//3
            //text += "#L22##d" + 红色箭头 + "制作#v3700229#1个\t需要：#v4000016#100个\r\n\r\n"//3
            //text += "#L23##d" + 红色箭头 + "制作#v3700230#1个\t需要：#v4000001#100个\r\n\r\n"//3
            //text += "#L24##d" + 红色箭头 + "制作#v3700231#1个\t需要：#v4000012#100个\r\n\r\n"//3
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //黑魔女
		if (cm.getBossLog("heimonv") >= 50) {
		cm.sendOk("一天只能打50次黑魔女");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4000463,1) && cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
                cm.gainItem(4000463,-1);
				cm.setBossLog("heimonv");
			    cm.spawnMobOnMap(9001010,1,651, 94,910000021);
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【高级BOSS-黑魔女】,他到底能不能战胜邪恶呢！！！",true).getBytes());
			    cm.dispose();
		   }else{
			   cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.120无法召唤BOSS");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //天球
		if (cm.getBossLog("tianqiu") >= 50) {
		cm.sendOk("一天只能打50次天球");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4000463,21)&&cm.haveItem(4002002,10)&&cm.getMeso()>=5000000) {
            cm.gainItem(4000463,-20);
			cm.gainMeso(-5000000);
			cm.setBossLog("tianqiu");
			cm.spawnMobOnMap(9400014,1,651, 94,1910000020,199999999999);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【高级BOSS-天球】,他到底能不能战胜邪恶呢！！！",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.120无法召唤BOSS");
			cm.dispose();
		   }
        } else if (selection == 3) { //扎昆
				if (cm.getBossLog("zakun") >= 3) {
		cm.sendOk("一天只能打3次扎昆");
		return false;
	}
			if(cm.haveItem(4001126,200)&&cm.getMeso()>=5000000) {
            cm.gainItem(4001126,-200);
			cm.setBossLog("zakun");
			cm.gainMeso(-5000000);
			cm.getMap().spawnZakum(651, 94);
            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【高级BOSS-扎昆】,他到底能不能战胜邪恶呢！！！",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("你材料不够哦！ 或 没有杀死BOSS");
			cm.dispose();
		   }
        } else if (selection == 4) {//蝙蝠魔
		if (cm.getBossLog("bianfumo") >= 3) {
		cm.sendOk("一天只能打3次蝙蝠魔");
		return false;
	}
			if(cm.haveItem(4000463,30)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-10);
			cm.setBossLog("bianfumo");
			cm.spawnMobOnMap(8830007,1,650,-215,910000020);
			cm.spawnMobOnMap(8830008,1,650,-215,910000020);
			cm.spawnMobOnMap(8830009,1,650,-215,910000020);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【顶级BOSS-巨型蝙蝠魔】,伟大的勇士,祝您好运！！！",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("你材料不够哦！ 或 没有杀死BOSS");
			cm.dispose();
		   }
        } else if (selection == 6) { //黑龙
		if (cm.getBossLog("heilong") >= 30) {
		cm.sendOk("一天只能打3次黑龙");
		return false;
	}
			if(cm.getLevel() >= 150 && cm.haveItem(4000463,1)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-1);
			cm.setBossLog("heilong");
			cm.spawnMobOnMap(8810026, 651, 94,-215,910000021);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【顶级BOSS-暗黑龙王】,伟大的勇士,祝您好运！！！",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.160无法召唤BOSS");
			cm.dispose();
		   }
        } else if (selection == 7) { //艾里葛斯
		if (cm.getBossLog("小吃") >= 2) {
		cm.sendOk("一天只能打2次小吃");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(2012000,5)&& cm.haveItem(2012003,5)){ //物品条件
            cm.gainItem(2012000,-5);
			cm.gainItem(2012003,-5);
			cm.setBossLog("小吃");
			cm.spawnMobOnMap(8220008,1,195,-821,105090310);
			cm.spawnMobOnMap(7220001,1,455,-654,105090310);
			cm.spawnMobOnMap(7220001,1,-93,-654,105090310);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[小吃店]" + " : 贪吃的勇士[" + cm.getPlayer().getName() +"]小吃店开张了 前排瓜子花生啤酒饮料了",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v2012000##v2012003#不足.\r\n3.等级低于LV.120无法召唤BOSS");
			cm.dispose();
		   }
        } else if (selection == 8) { //材料
		
			if(cm.getLevel() >= 120 && cm.haveItem(1113082,1)&& cm.haveItem(1113081,1)&& cm.getMeso() >=1000000){ //物品条件
			var r = Math.ceil(Math.random() * 10+10);
            cm.gainItem(1113082,-1);
			cm.gainItem(1113081,-1);
			cm.gainMeso(-1000000);
			cm.gainItem(1113080,r,r,r,r,200,200,r,r,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[毛毛戒指]" + " : [" + cm.getPlayer().getName() +"]恭喜成功合成小吃店毛莫戒指!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.180无法召唤BOSS");
			cm.dispose();
		   }
		} else if (selection == 9) { //雷昂
		if (cm.getBossLog("lr") >= 2) {
		cm.sendOk("一天只能挑战2次雷昂");
		return false;
	}
			if(cm.getLevel() >= 150 && cm.haveItem(4000463,30)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-30);
			cm.setBossLog("lr");
			cm.spawnMobOnMap(9700001,1,547, 94,910000021,3000000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS公告]" + " : 小屁孩 [" + cm.getPlayer().getName() +"] 居然将冰棍捅进了雷昂的菊花...!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.200无法召唤BOSS");
			cm.dispose();
		   }
        }
    }
}


