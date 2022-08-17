/*var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var status = -1;


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	if (status == 0) {
				text = ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";
				text += "         "+小烟花 +"#r欢迎来到月月冒险岛属性时装翅膀#k"+小烟花 +"\r\n";
				text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n";
				text += "#L0##v2043001#百分比武器卷轴兑换阳光#v4001246##l\r\n\r\n";
				text += "#L1##v1102551##k阳光兑换初级属性翅膀#l\r\n\r\n";
				text += "#L2#依次升级翅膀#v1102874##v1102376##v1102709##v1102349##v1102039##k#l\r\n\r\n";
				text += "   全属性15#v1102874#   全属性20#v1102376#   全属性30#v1102709#\r\n   全属性40#v1102349#   全属性50#v1102039#\r\n\r\n";
				text += "#L3##r挑战副本 每天只能进入 5 次#l\r\n\r\n";
					text += "\r\n";
            cm.sendSimple(text);
    } else if (status == 1) {
		if (selection == 0) {
			cm.openNpc(2010003,0);
		}else if (selection == 1) {
			if(cm.haveItem(4001246,50) == false){
				cm.sendNext("#v4001246#不足 50 个")
				cm.dispose();
			}else{
				cm.gainItem(1102551,10,10,10,10,50,50,10,10,0,0,0,0,0,0);
				cm.gainItem(4001246,-50);
				cm.dispose();
			}
		}else if (selection == 2) {
			cm.openNpc(2120001,3);
	}else if (selection == 3) {		
	var test = "副本介绍\r\n";
	   test += "要求等级：100级\r\n";
	   test += "所需道具：#v4000313#*20个\r\n";
	cm.sendYesNo(test)
	}
    } else if (status == 2) {
	if (cm.getParty() != null) {
        cm.sendNext("请退出当前队伍");
        cm.dispose();
	} else if (cm.getChar().getLevel() < 100) {
        cm.sendNext("当前等级不足。");
        cm.dispose();
	} else if (cm.haveItem(4000313,20) == false) {
        cm.sendNext("道具不足，无法进入。");
        cm.dispose();
	} else if (cm.getPlayerCount(229010100) > 0 || cm.getPlayerCount(229010000) > 0) {
        cm.sendNext("当前副本有人正在挑战，稍后再试");
        cm.dispose();
	} else if (cm.getBossLog("副本1") > 4) {
        cm.sendNext("每天只能进入 5 次");
        cm.dispose();
	}else{
	cm.gainItem(4000313,-20);	
	cm.resetMap(229010100);
	cm.resetMap(229010000);
	cm.warp(229010100,0);
	cm.setBossLog("副本1");
	cm.spawnMobOnMap(9500196, 1, -847, 88, 229010100, 100);
	cm.spawnMobOnMap(9500196, 1, -651, 88, 229010100, 100);
	cm.spawnMobOnMap(9500196, 1, -467, 88, 229010100, 100);
	cm.spawnMobOnMap(9500196, 1, -293, 88, 229010100, 100);
	cm.spawnMobOnMap(9500196, 1, -52, 88, 229010100, 100);
	cm.dispose();
    }
}}