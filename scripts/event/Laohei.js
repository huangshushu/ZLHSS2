var 最终阶段 = 20000;
var 第二阶段 = 1000000000000000;
var 第一阶段 = 6000000000000000;
var 第一关小怪血1 = 2000000000000000;
var 第一关小怪血2 = 2000000000000000;
var reviveCount = 10;
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
	450013100,
	450013500,
	450013750
);
var TimeA = 1000 * 60 * 30;
var charMap = new java.util.HashMap();
var txtd = "";
function init() {
	em.setProperty("state", "0");

}

function setup(level, leaderid) {
	txtd = "";
	charMap.clear();
	var eim = em.newInstance("Laohei");
	for (var i = 0; i < MapList.length; i++) {
		var map = eim.setInstanceMap(MapList[i]);
		map.resetPQ(level);
		map.resetFully();
		map.killAllMonsters(true);
		eim.schedule("summonMob", 5000);
		eim.schedule("summonFall", 1000);
	}
	em.setProperty("state", "1");
	/*第一階段*/

	mobid = 8880502;
	mob = em.getMonster(mobid);
	var MobLu = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(第一阶段);
	modified.setOMp(mob.getMobMaxMp() * 2);//1000E=10MIN
	//mob.setReduceDamageR(50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013100);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1, 85));

	mobid = 8880501;
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(第一关小怪血1);//第一阶段  小怪血量
	modified.setOMp(mob.getMobMaxMp() * 2);//1000E=10MIN
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013100);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-335, 85));

	mobid = 8880500;
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(第一关小怪血2);//第一阶段  小怪血量
	modified.setOMp(mob.getMobMaxMp() * 2);//1000E=10MIN
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013100);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(367, 85));

	/*第二階段*/

	mobid = 8880509;
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(第二阶段);
	modified.setOMp(mob.getMobMaxMp() * 3);//1000E=8MIN
	//mob.setReduceDamageR(50);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-970, 84));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-840, 84));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-710, 84));
	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-580, 84));
	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-350, 84));
	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-220, 84));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-83, 84));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220, 85));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(350, 85));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(580, 85));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(710, 85));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(840, 85));

	mobid = 8880509;
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(970, 85));

	mobid = 8880504; //boss
	mob = em.getMonster(mobid);
	mob.setOverrideStats(modified);
	modified.setOHp(第二阶段);//19x15
	modified.setOMp(mob.getMobMaxMp() * 3);
	//mob.setReduceDamageR(99);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013500);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 85));
	/*最終階段*/
	mobid = 8880518;
	mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(最终阶段);
	mob.setOverrideStats(modified);
	modified.setOHp(最终阶段);//11010500000000000
	//	mob.setReduceDamageR(99);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(450013750);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(148, 217));
	eim.startEventTimer(1000 * 60 * 30);
	return eim;
}

function playerEntry(eim, player) {
	for (var i = 0; i < eim.getPlayerCount(); i++) { }
	if (i <= 1) {
		eim.setProperty("Name", "[ 黑魔法師 ]");
		eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
	} else {
		eim.setProperty("Name", "[ 黑魔法師 ]");
		eim.setProperty("PlayerName", "all");
	}
	var map = eim.getMapInstance(0);
	player.dropMessage(6, "[ 黑魔法師 ]");
	player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
	var state = parseInt(em.getProperty("state"));
	switch (state) {
		case 2:
			eim.startEventTimer(1000 * 60 * 24);
			var mapA = eim.getMapInstance(450013500);
			for (var i = 0; i < eim.getPlayerCount(); i++) {
				eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
			}
			break;
		case 3:
			eim.startEventTimer(1000 * 60 * 5);
			var mapA = eim.getMapInstance(450013750);
			for (var i = 0; i < eim.getPlayerCount(); i++) {
				eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
			}
			break;
		default:
			charMap.clear();
			eim.broadcastPlayerMsg(1, "[ 黑魔法師 ] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
			eim.disposeIfPlayerBelow(100, 450012500);
			break;
	}
}

function cancelSchedule() { }

function playerDead(eim, player) { }

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = eim.getMapInstance(0);
		player.eventRevive(map, map.getPortal(0), true, new java.awt.Point(23, 48));
		return true;
	}
	player.addHP(50);
	charMap.clear();
	var map = eim.getMapFactoryMap(450012500);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function changedMap(eim, player, mapid) {
	if (mapid == 450013100) {

		var map = eim.getMapInstance(450013100);
		map.startMapEffect("就你們幾個也想來挑戰是不是嫌太早了 ...", 5120161);

	} else if (mapid == 450013500) {

		var map = eim.getMapInstance(450013500);
		map.startMapEffect("看來你們還不知道什麼叫做絕望 ...", 5120161);

	} else if (mapid == 450013750) {

		var map = eim.getMapInstance(450013750);
		map.startMapEffect("看來我也得拿出全力 ... 來吧", 5120161);

	} else {
		//player.dropMessage(6, "" + cm.getChar().getName() + " 已退出挑战。");
		eim.unregisterPlayer(player);
		em.setProperty("state", "0");
		charMap.clear();
		eim.unregisterPlayer(player);
		eim.disposeIfPlayerBelow(100, 450012500);
	}


}

function playerExit(eim, player) {
	charMap.clear();
	eim.disposeIfPlayerBelow(100, 450012500);
}

function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
	return 0;
}

function monsterValue(eim, mobid) {
	switch (mobid) {
		case 8880502:
			eim.startEventTimer(1000 * 3);
			em.setProperty("state", "2");
			break;
		case 8880504:
			txtd = txtd.substring(0, txtd.length - 1);
			var w1 = txtd.split(",");
			var values = 0;
			for (var i = 0; i < w1.length; i++) {
				var w2 = w1[i].split("-");
				values = parseInt(w2[1]);
				charMap.put(w2[0], charMap.get(w2[0]) + values);
			}
			var iter = charMap.entrySet().iterator();
			var list = [];
			var count = 0;
			var t1 = "";
			while (iter.hasNext()) {
				var nexts = iter.next();
				var name = nexts.getKey() + "";
				var dags = nexts.getValue();
				var bf = Math.floor(dags / 1510105000000000 * 100);

				t1 = "〓 玩家 〓 " + name + " 〓伤害百分比〓 " + bf + "% 〓总伤害〓 " + dags + ".";

				list[count] = t1;
				count++;
			}
			var txts = "";
			for (var i = 0; i < list.length; i++) {
				txts += list[i];
			}
			eim.startEventTimer(1000 * 3);
			em.setProperty("state", "3");
			eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
			eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
			em.setProperty("damaged", txts);
			charMap.clear();
			//openNpc(eim, 1540008, "TimCareU");

			break;
	}
	return 1;
}

function monsterKilled(eim, player, cp) { }

function allMonstersDead(eim) { }

function openNpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}


function cancelSchedule() {
	if (setupTask != null)
		setupTask.cancel(true);
}

function leftParty(eim, player) {
	eim.disposeIfPlayerBelow(100, 450012500);
}

function disbandParty(eim) {
	eim.disposeIfPlayerBelow(100, 450012500);
}

function onMapLoad(eim, player) { }

function monsterDrop(eim, player, mob) { }
function summonFall(eim) {
	var state = parseInt(eim.getProperty("HPstate"));
	var time = 4500;
	if (state > 0) {
		var map = eim.getMapInstance(0);
		map.createObtacleAtom(0, 3 * stage + 1, 63, 63);
		eim.schedule("summonFall", time);
	}
}

function monsterDamaged(eim, player, mobid, damage) {
	if (mobid == 8880504 || mobid == 8880502) {
		txtd += player.getName() + "-" + damage + ",";
	}
};


function summonMob(eim) {
	var map;
	map = eim.getMapInstance(0);
	var mob1 = em.getMonster(9303137);
	mob1.setStance(2);
	var mob2 = em.getMonster(9303137);
	var mob3 = em.getMonster(9303137);
	var mob4 = em.getMonster(9303137);
	mob4.setStance(2);
	if (map.getNumMonsters() < 5) {
		map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(-347, 29));
		map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(-114, 29));
		map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(243, 29));
		map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(584, 29));
	}
	//map.sendMapEffect("突击型CQ57 : 发现目标 . 消灭行动开始 ", 245, 3);
	if (em.getProperty("state").equals("1")) {
		eim.schedule("summonMob", 60000);
	}
}