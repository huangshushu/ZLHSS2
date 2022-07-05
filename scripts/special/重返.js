/* global cm */
var meso = 100000;
var maplist = [
	["扎昆掉线重返", [280030000], "ZakumBattle"],
	//["进阶扎昆重返", [280030001], "ChaosZakum"],
	["暗黑龙王掉线重返", [240060200, 240060100, 240060000], "HorntailBattle"],
	["品克缤掉线重返", [270050100], "PinkBeanBattle"]
];
function start() {
	
	var b = false;
	var txt = "";
	var bosscopy = cm.getBosslogManager();
    for (var i in maplist) {
		var x = bosscopy.getBossLogC(maplist[i][0], cm.getPlayer());
		if (x > 0 && checkMap(maplist[i][1])) {
			txt += "#L"+i+"##b" + maplist[i][0] + "#k#l\r\n";
			b = true;
		} else {
			bosscopy.resetBossLog(maplist[i][0], cm.getPlayer());
		}
	}
	if (b) {
		cm.sendSimple("你想选择哪个重返，每次重返将会消耗金币#r"+meso+"#k？\r\n"+txt);
	} else {
		cm.dispose();
	}
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return
	} else {
		if (cm.getPlayer().getMeso() < meso) {
			cm.sendOk("金币不足");
			cm.dispose();
			return;
		}
		var emh = cm.getEventManager(maplist[selection][2]);
		if (emh != null) {
			var eim = emh.getInstance(maplist[selection][2]);
			if ((eim != null) /*&& (eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()) != null)*/) {
				eim.registerPlayer(cm.getPlayer());
				cm.gainMeso(-meso);
				//cm.sendOk("副本重返"+eim.getProperty("isSquadPlayerID_" + cm.getPlayer().getId()));
			}
		} else {
			cm.sendOk("副本已失效，无法重返");
		}
		cm.dispose();
	}
	
}

function checkMap(lists) {
	for (var i in lists) {
		if (cm.getMonsterCount(lists[i]) > 0 && cm.getPlayerCount(lists[i]) > 0) {
			return true;
		}
	}
	return false;
}