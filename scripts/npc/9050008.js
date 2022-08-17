var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
			text += "#e#b我是 内测BOSS召唤师，能召唤各系BOSS\r\n请选择你要挑战的BOSS\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>#b需要#v4001126#*200+500万 每天3次\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>#b需要#v4000463#*3 每天3次 \r\n\r\n"//3
			//text += "#L9##r" + 蓝色箭头 + "挑战【神级BOSS】雷昂#g>>>>>>#b需要#v4000463#*50\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【顶级BOSS】武林妖僧#g>>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L5##r" + 蓝色箭头 + "送我离开\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            //text += "#L21##d" + 红色箭头 + "制作#v3700228#1个\t需要：#v4000000#100个\r\n\r\n"//3
            //text += "#L22##d" + 红色箭头 + "制作#v3700229#1个\t需要：#v4000016#100个\r\n\r\n"//3
            //text += "#L23##d" + 红色箭头 + "制作#v3700230#1个\t需要：#v4000001#100个\r\n\r\n"//3
            //text += "#L24##d" + 红色箭头 + "制作#v3700231#1个\t需要：#v4000012#100个\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
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
				if (cm.getBossLog("zakun") >= 30) {
		cm.sendOk("内测一天只能打30次扎昆");
		return false;
	}
			if(cm.haveItem(4001126,200)&&cm.getMeso()>=5000000) {
            cm.gainItem(4001126,-200);
			cm.setBossLog("zakun");
			cm.gainMeso(-5000000);
			cm.getMap().spawnZakum(651, 94);
            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【高级BOSS-扎昆】,他到底能不能战胜邪恶呢！！！",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『BOSS公告』" + " : " + "[" + cm.getChar().getName() + "]在市场20洞召唤了【高级BOSS-扎昆】,他到底能不能战胜邪恶呢！！！"));
            
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
		cm.sendOk("内测一天只能打30次黑龙");
		return false;
	}
			if(cm.getLevel() >= 160 && cm.haveItem(4000463,1)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-1);
			cm.setBossLog("heilong");
			cm.spawnMobOnMap(8810026, 1, 651,94,910000020);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"在市场20洞召唤了【顶级BOSS-暗黑龙王】,伟大的勇士,祝您好运！！！",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.160无法召唤BOSS");
			cm.dispose();
		   }
        } else if (selection == 7) { //艾里葛斯
		if (cm.getBossLog("algs") >= 5) {
		cm.sendOk("内测一天只能打50次艾里葛斯");
		return false;
	}
			if(cm.getLevel() >= 180 && cm.haveItem(4000463,1)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-1);
			cm.setBossLog("algs");
			cm.spawnMobOnMap(9300028,1,547, 94,910000021);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS公告]" + " : 无畏的勇士[" + cm.getPlayer().getName() +"]居然唤醒了沉睡中的艾里葛斯... 这是在送人头啊!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.180无法召唤BOSS");
			cm.dispose();
		   }
        } else if (selection == 8) { //品克缤
		if (cm.getBossLog("pkb") >= 30) {
		cm.sendOk("内测一天只能打30次品克缤");
		return false;
	}
			if(cm.getLevel() >= 180 && cm.haveItem(4000463,3)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
            cm.gainItem(4000463,-3);
			cm.setBossLog("pkb");
			cm.spawnMobOnMap(8820001,1,547, 94,910000020,2100000000);
            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS公告]" + " : 勇士[" + cm.getPlayer().getName() +"]不小心扔了一坨翔给品克缤.  萌兽品克缤发怒了!",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『BOSS公告』" + " : " + "[" + cm.getChar().getName() + "]不小心扔了一坨翔给品克缤.  萌兽品克缤发怒了!！！！"));
            
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
			cm.spawnMobOnMap(9700001,1,547, 94,910000020,3000000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS公告]" + " : 小屁孩 [" + cm.getPlayer().getName() +"] 居然将冰棍捅进了雷昂的菊花...!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4000463#不足.\r\n3.等级低于LV.200无法召唤BOSS");
			cm.dispose();
		   }
        }
    }
}


