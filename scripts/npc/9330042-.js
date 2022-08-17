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
            //text += "#L1##r" + 蓝色箭头 + "挑战猎魔人#g>>>>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            //text += "#L10##r" + 蓝色箭头 + "挑战萨尔弗#g>>>>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            //text += "#L2##r" + 蓝色箭头 + "挑战血焰将军#g>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            //text += "#L4##r" + 蓝色箭头 + "挑战海之魔女(抗法)#g>>>>>>需要#b1个#v4000460#1个#v4000461#1个#v4000462#\r\n"//3
            text += "#L3##r" + 蓝色箭头 + "地狱船长(每天100次)#g>>>>>>需要#b1个#v4000463#1个\r\n\r\n"//3
			//text += "#L6##r" + 蓝色箭头 + "秘密武器奖励之地 需要 #v4001374#\r\n\r\n"//3
			//text += "#L7##r" + 蓝色箭头 + "精灵吊坠兑换.升级 #v1122017# \r\n\r\n"//3
            text += "#L5##r" + 蓝色箭头 + "#v5160005#我好害怕 送我离开#v5160005#\r\n\r\n"//3
			
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
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
		if (cm.getBossLog("血焰将军") >= 50) {
		cm.sendOk("一天只能打50次血焰将军");
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
		if (cm.getBossLog("地狱船长") >= 100) {
		cm.sendOk("一天只能打100次地狱船长");
		return false;
	}
			if(cm.haveItem(4000463,1)&& cm.haveItem(4000463,1)&& cm.haveItem(4000463,1)){ //物品条件
                            //cm.removeAll(4000463); 
                            cm.gainItem(4000463,-1);
                            //cm.gainItem(4000463,-1);
							//cm.gainItem(4000463,-1);
							cm.setBossLog("地狱船长");
			    cm.spawnMobOnMap(9400589,1,-719,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"【绯红副本】["+cm.getName()+"]成功召唤了绯红boss【地狱船长】");
			   cm.dispose();
		   }else{
			   cm.sendOk("很抱歉，您的材料不足");
			   cm.dispose();
		   }
        } else if (selection == 4) {//天空组队副本
		if (cm.getBossLog("海之魔女") >= 50) {
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
        } else if (selection == 10) {//天空组队副本
		if (cm.getBossLog("萨尔弗") >= 50) {
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
        } else if (selection == 7) {//罗密欧与朱丽叶组队副本
		
            cm.dispose();
            cm.openNpc(9030100);
            
        } else if (selection == 8) {//遗址公会对抗战
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("您的包裹空间不足.请清理背包！");
                cm.dispose();
            } else if (cm.haveItem(4000243, 3)) {
                cm.gainItem(4000243,-3);
                cm.gainItem(4031497,1);
                cm.sendOk("恭喜你成功兑换#v4031497#X1个！");
                cm.dispose();
            } else {
                cm.sendOk("兑换失败，需要#v4000243#X3个！");
                cm.dispose();
            }
        } else if (selection == 9) {//英语学院副本
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("您的包裹空间不足.请清理背包！");
                cm.dispose();
            } else if (cm.haveItem(4000243, 30)) {
                cm.gainItem(4000243,-30);
                cm.gainItem(4031497,10);
                cm.sendOk("恭喜你成功兑换#v4031497#X10个！");
                cm.dispose();
            } else {
                cm.sendOk("兑换失败，需要#v4000243#X30个！");
                cm.dispose();
            }
        } else if (selection == 11) {//千年树精王遗迹
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//人偶师BOSS挑战
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
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


