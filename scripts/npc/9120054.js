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
			text += "#e#b欢迎来到绯红BOSS战场\r\n请选择你要挑战的BOSS\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#L1##r" + 蓝色箭头 + "挑战猎魔人#g>>>>>>>>\r\n\r\n"//3
            text += "#L2##r" + 蓝色箭头 + "挑战血焰将军#g>>>>>>\r\n\r\n"//3
            text += "#L3##r" + 蓝色箭头 + "挑战地狱船长#g>>>>>>\r\n\r\n"//3
            text += "#L4##r" + 蓝色箭头 + "挑战海之魔女#g>>>>>>\r\n\r\n"//3
			text += "#L5##r" + 蓝色箭头 + "挑战暗影杀手#g>>>>>>\r\n\r\n"//3
            text += "#L6##r" + 蓝色箭头 + "送我离开\r\n\r\n"//3
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            text += "#L7##d" + 红色箭头 + "制作#v4031497#1个\t需要：#v5200002# 200W\r\n\r\n"//3
            text += "#L8##d" + 红色箭头 + "制作#v4031497#10个\t需要：#v5200002# 1800W\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.haveItem(4031497,1)){ //物品条件
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400592,1,1234,276,803001200);
                          cm.worldMessage(6,"玩家：["+cm.getName()+"]成功开始挑战绯红BOSS副本，召唤出一只【猎魔人】！！");
			             cm.dispose();
		   }else{
			            cm.sendOk("需要搜集#b1个 #v4031497#");
			           cm.dispose();
		   }
        } else if (selection == 2) { 
			if(cm.haveItem(4031497,1)){ //物品条件
                           
                            cm.gainItem(4031497,-1);
						   cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400591,1,1234,276,803001200);
cm.worldMessage(6,"玩家：["+cm.getName()+"]成功开始挑战绯红BOSS副本，召唤出一只【血焰将军】！！");
			   cm.dispose();
		   }else{
			   cm.sendOk("需要搜集#b1个 #v4031497#");
			   cm.dispose();
		   }
        } else if (selection == 3) {
			if(cm.haveItem(4031497,1)){ //物品条件
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);			           
                           cm.spawnMobOnMap(9400589,1,1234, 276,803001200);
cm.worldMessage(6,"玩家：["+cm.getName()+"]成功开始挑战绯红BOSS副本，召唤出一只【地狱船长】！！");
			   cm.dispose();
		   }else{
			   cm.sendOk("需要搜集#b1个 #v4031497#");
			   cm.dispose();
		   }
        } else if (selection == 4) {
			if(cm.haveItem(4031497,1)){ //物品条件
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9400590,1,1234, 276,803001200);
cm.worldMessage(6,"玩家：["+cm.getName()+"]成功开始挑战绯红BOSS副本，召唤出一只【海之魔女】！！");
			   cm.dispose();
		   }else{
			   cm.sendOk("需要搜集#b1个 #v4031497#");
			   cm.dispose();
		   }
		   
		   } else if (selection == 5) {
			if(cm.haveItem(4031497,1)){ //物品条件
                            cm.gainItem(4031497,-1);
                           cm.spawnMobOnMap(9400596,3,1940,276,803001200);
                           cm.spawnMobOnMap(9400597,3,1640,276,803001200);
                           cm.spawnMobOnMap(9400594,3,1400,276,803001200);
                           cm.spawnMobOnMap(9300775,1, 1234, 276,803001200);
cm.worldMessage(6,"玩家：["+cm.getName()+"]成功开始挑战绯红BOSS副本，召唤出一只【海之魔女】！！");
			   cm.dispose();
		   }else{
			   cm.sendOk("需要搜集#b1个 #v4031497#");
			   cm.dispose();
		   }
		   
        } else if (selection == 6) {
            cm.warp(100000000);
            cm.dispose();
        } else if (selection == 7) {
            if(cm.getMeso() >= 2000000){
                cm.sendOk("恭喜你，你获得了 #v4031497#! .");
                cm.gainMeso(-2000000);
	        cm.gainItem(4031497,1);
                cm.dispose();
            }else{
                cm.sendOk("你没有 2000000 金币，我不能给你换购~.");
                cm.dispose();
            }
        } else if (selection == 8) {
            if(cm.getMeso() >= 18000000){
                cm.sendOk("恭喜你，你获得了 #v4031497# X10! .");
                cm.gainMeso(-18000000);
	        cm.gainItem(4031497,10);
                cm.dispose();
            }else{
                cm.sendOk("你没有 20000000 金币，我不能给你换购~.");
                cm.dispose();
            }
        } else if (selection == 9) {
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
        } else if (selection == 10) {
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
        } else if (selection == 12) {//千年树精王遗迹
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//人偶师BOSS挑战
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 14) {//绯红
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战绯红副本");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 15) {//御姐
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("本地图限制等级140级。您的能力没有资格挑战御姐副本");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//.怪物嘉年华
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


