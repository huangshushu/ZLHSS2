/*
	名称：新手踩蜗牛副本
*/
var taskid = 140001;
var changeJobMap = 310030210; 	// 转职地图
var mX = 700, mY = 82;
var monsterID = 100100;
var returnMap;

function init() {
	returnMap = em.getMapFactory().getMap(changeJobMap);
}


function setup() {
    
}


function playerEntry(eim, player) {
	eim.setProperty("finsh", "0");
	eim.setObjectProperty("cp", 0);
	eim.schedule("spawnMonster", 200, player);
}

function spawnMonster(eim, player) {
	if (eim == null || player == null) {
		return;
	}
	var player = eim.getPlayers().get(0);
	if (player != null) {
		var monster = em.getMonster(monsterID);
		monster.disableDrops();
		eim.registerMonster(monster);
		em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) -mX), mY);
	}
	if (eim.getProperty("finsh") != "1") {
		eim.schedule("spawnMonster", 200, player);
	}
}

function playerRevive(eim, player) {
	player.getStat().setHp(50);
	player.setStance(0);
	player.changeMap(player.getMap(), player.getMap().getPortal(0));
	return true;
}
function scheduledTimeout(eim) {
	var player = eim.getPlayers().get(0);
	eim.setProperty("finsh", "1");
	eim.stopEventClock();
	player.getMap().killAllMonsters(false);
	pauseTimer(eim, player);
	player.openNpc(9330370, 1);
}

function changedMap(eim, player, mapid) {
	if (mapid != changeJobMap) {
		return;
	}
	pauseTimer(eim, player);
}

function playerExit(eim, player) {
	pauseTimer(eim, player);
	player.changeMap(returnMap, returnMap.getPortal(0));
}

function playerDisconnected(eim, player) {
	playerExit(eim, player);
	return 0;
}

function pauseTimer(eim, player) {
	var cp = eim.getObjectProperty("cp");
	em.insertRanking(player, "踩蜗牛副本", cp);
	eim.unregisterPlayer(player);
	eim.dispose();
}




function playerDead(eim, player) {}
function monsterValue(eim, mobid) {
	var cp = parseInt(eim.getObjectProperty("cp")) + 1;
	eim.setObjectProperty("cp", cp);
	eim.broadcastPlayerMsg(-1, "当前分数：" + cp);
	return 0;
}
function monsterKilled(eim, player, cp) {}
function allMonstersDead(eim) {}
function monsterDamaged(eim, player, mobid, damage) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function onMapLoad(eim, player) {}