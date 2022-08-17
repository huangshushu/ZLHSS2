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
           // text += "#L1##r" + 蓝色箭头 + "挑战猎魔人#g>>>>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            //text += "#L10##r" + 蓝色箭头 + "挑战萨尔弗#g>>>>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            //text += "#L2##r" + 蓝色箭头 + "挑战血焰将军#g>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
           // text += "#L4##r" + 蓝色箭头 + "挑战海之魔女#g>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
           // text += "#L3##r" + 蓝色箭头 + "挑战地狱船长#g>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n\r\n"//3
			text += "              #L8##r#v2510000#时装公式合成#v2510000##l\r\n\r\n"//3
			text += "              #L9##k#v2510000#套装集成激活#v2510000##l\r\n\r\n"//3
			text += "              #L10##b#v2511000#坐骑时装合成#v2511000##l\r\n\r\n"//3
			//text += "#L8##b" + 蓝色箭头 + "精灵吊力量卷轴强化#v2041229#\r\n\r\n"//3
			//text += "#L9##b" + 蓝色箭头 + "精灵吊智力卷轴强化#v2041228#\r\n\r\n"//3
			//text += "#L10##b" + 蓝色箭头 + "精灵吊敏捷卷轴强化#v2041230#\r\n\r\n"//3
			//text += "#L11##b" + 蓝色箭头 + "精灵吊运气卷轴强化#v2041231#\r\n\r\n"//3
            //text += "#L5##r" + 蓝色箭头 + "#v5160005#我好害怕 送我离开#v5160005#\r\n\r\n"//3
			
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //月妙组队副本
				if (cm.getBossLog("猎魔人") >= 2) {
		cm.sendOk("一天只能打2次猎魔人");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //物品条件
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("猎魔人");
			    cm.spawnMobOnMap(9400592,1,642,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【猎魔人】{材料可合成天使项链}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //废弃组队副本
		if (cm.getBossLog("血焰将军") >= 2) {
		cm.sendOk("一天只能打2次血焰将军");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //物品条件
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("血焰将军");
			    cm.spawnMobOnMap(9400591,1,28,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【血焰将军】{材料可合成天使项链}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 3) { //玩具组队副本
		if (cm.getBossLog("地狱船长") >= 2) {
		cm.sendOk("一天只能打2次地狱船长");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //物品条件
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("地狱船长");
			    cm.spawnMobOnMap(9400589,1,-719,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【地狱船长】{材料可合成天使项链}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 4) {//天空组队副本
		if (cm.getBossLog("海之魔女") >= 2) {
		cm.sendOk("一天只能打2次海之魔女");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //物品条件
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("海之魔女");
			    cm.spawnMobOnMap(9400590,1,-103,1,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【海之魔女】{材料可合成天使项链}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 100) {//天空组队副本
		if (cm.getBossLog("萨尔弗") >= 2) {
		cm.sendOk("一天只能打2次萨尔弗");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //物品条件
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("萨尔弗");
			    cm.spawnMobOnMap(9400593,1,72,1,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【萨尔弗】{材料可合成天使项链}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 5) {//毒物组队副本
            cm.warp(910000000);
            cm.dispose();
        } else if (selection == 6) {//海盗组队副本
		if (cm.getBossLog("绯红奖励") >= 4) {
		cm.sendOk("一天只能3次绯红奖励");
		return false;
	}
		if(cm.haveItem(4001374,1)){ //物品条件
                            cm.gainItem(4001374,-1);
                            cm.warp(803011300);
							cm.刷新地图();
							cm.setBossLog("绯红奖励");
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功进入绯红奖励之地}");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 7) {//精灵
		if (cm.haveItem(1122264,3)&&cm.haveItem(1122265,2)&&cm.haveItem(1122266,1)&&cm.getMeso() > 30000000) {
			cm.gainItem(1122264, -1);
			cm.gainItem(1122265, -1);
			cm.gainItem(1122266, -1);
			cm.gainMeso(-30000000);
			cm.gainItem(1122017,8,8,8,8,0,0,8,8,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "副本之戒制作公告" + " : " + "恭喜『" + cm.getChar().getName() + "』玩家成功 制作 副本之戒！"));
			cm.sendOk("#z1122017#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("材料出处高级BOSS绯红挑战\r\n需要#v1122264##z1122264#*3  #v1122265##z1122265#*2  #v1122264##z1122266#*1 游戏币3千万。你的材料不足!!"  );
			cm.dispose();
			return
			}
        }else if (selection == 8){
		    cm.openNpc(9120054,1001);
        } else if (selection == 9) {//英语学院副本
            cm.openNpc(9120054,1002);
        } else if (selection == 10) {//英语学院副本
            cm.openNpc(9120054,1003);			
        } else if (selection == 15) {//千年树精王遗迹
            cm.openNpc(9120054,3);
        } else if (selection == 11) {//人偶师BOSS挑战
            cm.openNpc(9120054,4);
        } else if (selection == 13) {//绯红
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战绯红副本");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//御姐
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("本地图限制等级140级。您的能力没有资格挑战御姐副本");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 10) {//.怪物嘉年华
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


