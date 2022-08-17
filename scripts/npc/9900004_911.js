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
			text += "#e#抽奖星球坐骑一套兑换\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L1##r" + 蓝色箭头 + "萌新BOSS黑魔女 一天3次 出革命装备一套 萌新过渡必刷#g>>>>>>#b需要#v4310018#*5加100万\r\n\r\n"//3
			text += "#L2##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912336##v1902336#\r\n\r\n"//3
            text += "#L3##r" + 蓝色箭头 + "#v4310021#x4兑换 一套#v1912337##v1902337#\r\n\r\n"//3
			text += "#L4##r" + 蓝色箭头 + "#v4310021#x4兑换 一套#v1912338##v1902338#\r\n\r\n"//3
			text += "#L5##r" + 蓝色箭头 + "#v4310021#x4兑换 一套#v1912339##v1902339#\r\n\r\n"//3
			text += "#L6##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912340##v1902340#\r\n\r\n"//3
			text += "#L7##r" + 蓝色箭头 + "#v4310021#x4兑换 一套#v1912341##v1902341#\r\n\r\n"//3
			text += "#L8##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912342##v1902342#\r\n\r\n"//3
			text += "#L9##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912343##v1902343#\r\n\r\n"//3
			text += "#L10##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912344##v1902344#\r\n\r\n"//3
			text += "#L11##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912345##v1902345#\r\n\r\n"//3
			text += "#L12##r" + 红色箭头 + "#v4310021#x4兑换 一套#v1912346##v1902346#\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            //text += "#L21##d" + 红色箭头 + "制作#v3700228#1个\t需要：#v4000000#100个\r\n\r\n"//3
            //text += "#L22##d" + 红色箭头 + "制作#v3700229#1个\t需要：#v4000016#100个\r\n\r\n"//3
            //text += "#L23##d" + 红色箭头 + "制作#v3700230#1个\t需要：#v4000001#100个\r\n\r\n"//3
            //text += "#L24##d" + 红色箭头 + "制作#v3700231#1个\t需要：#v4000012#100个\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //黑魔女
		if (cm.getBossLog("heimonv") >= 3) {
		cm.sendOk("一天只能打3次黑魔女");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4310021,1) && cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
                cm.gainItem(4310021,-5);
				cm.setBossLog("heimonv");
			    cm.spawnMobOnMap(9001010,1,-196,-24,211040102);
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS公告" + " : " + cm.getPlayer().getName() +"召唤了【高级BOSS-黑魔女】105级革命装备一套,他到底能不能战胜邪恶呢！！！",true).getBytes());
			    cm.dispose();
		   }else{
			   cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4310018#不足.\r\n3.等级低于LV.120无法召唤BOSS");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //吊坠
		
			if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912336,1);
			cm.gainItem(1902336,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //腰带
				if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912337,1);
			cm.gainItem(1902337,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 4) {//鞋子
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912338,1);
			cm.gainItem(1902338,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 5) { //手套
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912339,1);
			cm.gainItem(1902339,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 6) { //披风
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912340,1);
			cm.gainItem(1902340,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 7) { //帽子
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912341,1);
			cm.gainItem(1902341,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		} else if (selection == 8) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912342,1);
			cm.gainItem(1902342,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 9) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912343,1);
			cm.gainItem(1902343,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 10) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912344,1);
			cm.gainItem(1902344,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 11) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912345,1);
			cm.gainItem(1902345,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 12) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310021,4) && cm.getMeso()>=500) {
            cm.gainItem(4310021,-4);
			cm.gainItem(1912346,1);
			cm.gainItem(1902346,1);
			cm.gainMeso(-500);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"星球椅子公告" + " : " + cm.getPlayer().getName() +"星球椅子兑换成功.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        }
    }
}


