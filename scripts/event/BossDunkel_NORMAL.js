var mobs = 8645003;
var reviveCount = 5; //cms = 5;
var TimeA = 30 * 60 * 1000;
var text = ["黑骑士莫卡丁 : 為了敦凱爾隊長,我將處決你", "魔法师卡里亚恩 : 你有這實力與我對決嗎", "突击型CQ57 : 看來你還不知道什麼叫做絕望", "人类猎人朱莉娅 : 你還是盡早回去吧", "猎人弗雷德 : 我得讓你知道什麼叫恐懼"];
function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(level, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("BossDunkel_NORMAL");
	var map1 = eim.setInstanceMap(450012210);
	map1.resetPQ(level);
	eim.setProperty("summom", "0");
	eim.startEventTimer(TimeA);
	eim.schedule("summonMob", 5000); //刷怪
	eim.schedule("summonFall", 4000); //刷掉落
	eim.schedule("summonBoss", 30000); //刷精英BOSS
	eim.setProperty("stop", "0");
	eim.setProperty("round", "0"); //精英BOSS轮数
	return eim;
}

function playerEntry(eim, player) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {}
	if (i <= 1) {
		eim.setProperty("Name", "[ 地獄 ] 敦凱爾");
		eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
	}

	var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
	if (mapid != 450012210) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 450012200);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	switch (mobId) {
	case 8645009:
		var map = eim.getMapInstance(0);
		map.killMonster(mobs); //BOSS死了杀死全部小怪
		eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
		eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
		openNpc(eim, 1540008, "TimCareU");
		eim.startEventTimer(5 * 60 * 1000);
		break;
	}
	return 1;
}
function openNpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}

function allMonstersDead(eim) {
	var state = em.getProperty("state");
	if (state.equals("1")) {
		eim.setProperty("stop", "1");
	}
}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = player.getMap();
		player.eventRevive(map, map.getPortal(0), true, new java.awt.Point(0, 0));
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(450012200);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function summonMob(eim) { //每次刷5只
	var map = eim.getMapInstance(0);
	var mob1 = em.getMonster(mobs);
	var mob2 = em.getMonster(mobs);
	var mob3 = em.getMonster(mobs);
	var mob4 = em.getMonster(mobs);
	var mob5 = em.getMonster(mobs);
	if (map.getNumMonsters() < 32) { //-782  774
		map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(random(-782, 774), 29)); //-2 spawntype 新刷怪物
		map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(random(-782, 774), 29));
		map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(random(-782, 774), 29));
		map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(random(-782, 774), 29));
		map.spawnMonsterWithEffect(mob5, -2, new java.awt.Point(random(-782, 774), 29));
	}
	if (map.getNumMonsters() < 15) {
		summonMob(eim);
	} else {
		if (em.getProperty("state").equals("1") && eim.getProperty("stop").equals("0")) {
			eim.schedule("summonMob", 5000);
		}
	}
}

function random(lower, upper) { //取随机数的方法
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function summonBoss(eim) { //召唤精英BOSS
	var map = eim.getMapInstance(0);
	var round = parseInt(eim.getProperty("round"));
	var boss = em.getMonster(8645004 + round);
	boss.changeLevelmod(265, 500);
	boss.getChangedStats().setOHp(20200000000000000);//123fdweq23df1dfs
	boss.setHp(20200000000000000);
	boss.setReduceDamageType(3);
	eim.registerMonster(boss);
	map.spawnMonsterOnGroundBelow(boss, new java.awt.Point(0, 29));
	map.sendMapEffect(text[round], 139 + round, 5);
	eim.setProperty("round", String(round + 1));
	if (em.getProperty("state").equals("1") && eim.getProperty("stop").equals("0") && round < 6) {
		eim.schedule("summonBoss", 10000); //10秒后召唤下一只
	}
}

function summonFall(eim) {
	var stop = parseInt(eim.getProperty("stop"));
	if (stop == 0) {
		var map = eim.getMapInstance(0);
		map.obtacleFall(6, 0x48, 0x4a); //0x48-0x4a
		eim.schedule("summonFall", 5000); //cms = 5s
	}
}

function pickUpItem(eim, player, itemID) {}
