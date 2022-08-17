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
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";
			text += "              "+ 小烟花 +"#r欢迎来到属性坐骑兑换"+ 小烟花 +"\r\n";
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";
            //text += "#L1##r" + 蓝色箭头 + "挑战【高级BOSS】黑魔女#g>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + 红色箭头 + "挑战【高级BOSS】天球#g>>>>>>>>>>#b需要#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + 蓝色箭头 + "挑战【高级BOSS】扎昆#g>>>>>>>>>>#b需要#v4001126#*200+500万\r\n\r\n"//3
			//text += "#L4##r" + 蓝色箭头 + "挑战【顶级BOSS】巨型蝙蝠魔#g>>>>#b需要#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + 红色箭头 + "挑战【顶级BOSS】暗黑龙王#g>>>>>>#b需要#v4000463#*1个\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "挑战【终级BOSS】艾里葛斯#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + 红色箭头 + "挑战【终级BOSS】品克缤#g>>>>>>#b需要#v4000463#*5\r\n\r\n"//3
			//text += "#L1##r" + 蓝色箭头 + "萌新BOSS黑魔女 一天3次 出革命装备一套 萌新过渡必刷#g>>>>>>#b需要#v4310018#*5加100万\r\n\r\n"//3
			text += "     #L2##r"+ 小烟花 +"#v1902311#兑换1套全属性58#v1902311##v1912311#"+ 小烟花 +"#l\r\n\r\n"//3
            text += "     #L3##r"+ 小烟花 +"#v1902402#兑换1套全属性68#v1902402##v1912402#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L4##r"+ 小烟花 +"#v1902403#兑换1套全属性78#v1902403##v1912403#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L5##r"+ 小烟花 +"#v1902404#兑换1套全属性88#v1902404##v1912404#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L6##r"+ 小烟花 +"#v1902407#兑换1套全属性98#v1902407##v1912407#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L7##r"+ 小烟花 +"#v1902350#兑换1套全属性108#v1902350##v1912350#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L8##r"+ 小烟花 +"#v1902405#兑换1套全属性128#v1902405##v1912405#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L9##r"+ 小烟花 +"#v1902401#兑换1套全属性168#v1902401##v1912401#"+ 小烟花 +"#l\r\n\r\n"//3
			text += "     #L10##r"+ 小烟花 +"#v1902411#兑换1套全属性188#v1902411##v1912411#"+ 小烟花 +"#l\r\n\r\n"//3
			//text += "#L11##r"+ 小烟花 +"#v4310000#兑换 一套#v1912345##v1902345#"+ 小烟花 +"\r\n\r\n"//3
			//text += "#L12##r"+ 小烟花 +"#v4310000#兑换 一套#v1912346##v1902346#"+ 小烟花 +"\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            //text += "#L21##d" + 红色箭头 + "制作#v3700228#1个\t需要：#v4000000#100个\r\n\r\n"//3
            //text += "#L22##d" + 红色箭头 + "制作#v3700229#1个\t需要：#v4000016#100个\r\n\r\n"//3
            //text += "#L23##d" + 红色箭头 + "制作#v3700230#1个\t需要：#v4000001#100个\r\n\r\n"//3
            //text += "#L24##d" + 红色箭头 + "制作#v3700231#1个\t需要：#v4000012#100个\r\n\r\n"//3
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //黑魔女
		if (cm.getBossLog("heimonv") >= 3) {
		cm.sendOk("一天只能打3次黑魔女");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4310018,1) && cm.getMap().getAllMonstersThreadsafe().size() == 0){ //物品条件
                cm.gainItem(4310018,-5);
				cm.setBossLog("heimonv");
			    cm.spawnMobOnMap(9001010,1,-196,-24,211040102);
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取赞助星球坐骑！"));
				cm.dispose();
		   }else{
			   cm.sendOk("召唤失败：\r\n1.地图上还有怪物未击杀\r\n2.#v4310018#不足.\r\n3.等级低于LV.120无法召唤BOSS");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //吊坠
		
			if(cm.getLevel() >= 10 && cm.haveItem(1902311,1)) {
            cm.gainItem(1902311,-1);
			cm.gainItem(1902311,58,58,58,58,0,0,58,58,0,0,0,0,0,0);
			cm.gainItem(1912311,58,58,58,58,0,0,58,58,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //腰带
				if(cm.getLevel() >= 10 && cm.haveItem(1902402,1)) {
            cm.gainItem(1902402,-1);
			cm.gainItem(1902402,68,68,68,68,0,0,68,68,0,0,0,0,0,0);
			cm.gainItem(1912402,68,68,68,68,0,0,68,68,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 4) {//鞋子
		if(cm.getLevel() >= 10 && cm.haveItem(1902403,1)) {
            cm.gainItem(1902403,-1);
			cm.gainItem(1902403,78,78,78,78,0,0,78,78,0,0,0,0,0,0);
			cm.gainItem(1912403,78,78,78,78,0,0,78,78,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 5) { //手套
		if(cm.getLevel() >= 10 && cm.haveItem(1902404,1)) {
            cm.gainItem(1902404,-1);
			cm.gainItem(1902404,88,88,88,88,0,0,88,88,0,0,0,0,0,0);
			cm.gainItem(1912404,88,88,88,88,0,0,88,88,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 6) { //披风
		if(cm.getLevel() >= 10 && cm.haveItem(1902407,1)) {
            cm.gainItem(1902407,-1);
			cm.gainItem(1902407,98,98,98,98,0,0,98,98,0,0,0,0,0,0);
			cm.gainItem(1912407,98,98,98,98,0,0,98,98,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        } else if (selection == 7) { //帽子
		if(cm.getLevel() >= 10 && cm.haveItem(1902350,1)) {
            cm.gainItem(1902350,-1);
			cm.gainItem(1902350,108,108,108,108,0,0,108,108,0,0,0,0,0,0);
			cm.gainItem(1912350,108,108,108,108,0,0,108,108,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		} else if (selection == 8) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902405,1)) {
            cm.gainItem(1902405,-1);
			cm.gainItem(1902405,128,128,128,128,0,0,128,128,0,0,0,0,0,0);
			cm.gainItem(1912405,128,128,128,128,0,0,128,128,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 9) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902401,1)) {
            cm.gainItem(1902401,-1);
			cm.gainItem(1902401,168,168,168,168,0,0,168,168,0,0,0,0,0,0);
			cm.gainItem(1912401,168,168,168,168,0,0,168,168,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 10) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(1902411,1)) {
            cm.gainItem(1902411,-1);
			cm.gainItem(1902411,188,188,188,188,0,0,188,188,0,0,0,0,0,0);
			cm.gainItem(1912411,188,188,188,188,0,0,188,188,0,0,0,0,0,0);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "属性坐骑兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取属性坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 11) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310000,1)) {
            cm.gainItem(4310000,-1);
			cm.gainItem(1912345,1);
			cm.gainItem(1902345,1);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取赞助星球坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
		   } else if (selection == 12) { //套服
		if(cm.getLevel() >= 10 && cm.haveItem(4310000,1)) {
            cm.gainItem(4310000,-1);
			cm.gainItem(1912346,1);
			cm.gainItem(1902346,1);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功换取赞助星球坐骑！"));
				cm.dispose();
		   }else{
			cm.sendOk("制作失败 材料不足");
			cm.dispose();
		   }
        }
    }
}


