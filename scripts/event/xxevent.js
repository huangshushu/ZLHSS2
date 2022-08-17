/*
*/
var taskid = 140002;
var changeJobMap = 101050000; 	// 转职地图
var mX = 300, mY = 120;
var monsterID0 = 9601042;
var monsterID1 = 9601043;
var monsterID2 = 9601044;
var monsterID3 = 9601045;
var monsterID4 = 9601046;
var monsterID5 = 9601042;
var returnMap;
var expInformation;
var cp;
expInformation = 20000;
function init() {
	returnMap = em.getMapFactory().getMap(changeJobMap);
}


function setup() {
    
}


function playerEntry(eim, player) {
	eim.setProperty("finsh", "0");
	eim.setObjectProperty("cp", 0);
	eim.schedule("spawnMonster", 1000, player);
}

function spawnMonster(eim, player) {
	if (eim == null || player == null) {
		return;
	}

	if (cp < 200) {
	    expInformation = 80000;
	} else if (cp > 201 && cp < 500) {
	    expInformation = 80000;
	} else if (cp > 501 && cp < 800) {
	    expInformation = 90000;
	} else if (cp > 1000 && cp < 1500) {
	    expInformation = 120000;
	}else if (cp > 1600 && cp < 8000) {
	    expInformation = 520000;
	}
	var player = eim.getPlayers().get(0);
	var overrideStats = em.newMonsterStats();
	if (eim.getMobs().size() <= 2000) {
	    if (player != null) {
	        var monster = em.getMonster(monsterID0);
	        //monster.disableDrops();
	        eim.registerMonster(monster);
	        overrideStats.setOHp(12090);
	        overrideStats.setOExp(expInformation);
	        monster.setOverrideStats(overrideStats);
	        em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) - mX), mY);
	    }
	    if (player != null) {
	        var monster = em.getMonster(monsterID1);
	        //monster.disableDrops();
	        eim.registerMonster(monster);
	        overrideStats.setOHp(12090);
	        overrideStats.setOExp(expInformation);
	        monster.setOverrideStats(overrideStats);
	        em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) - mX), mY);
	    }
	    if (player != null) {

	        var monster = em.getMonster(monsterID2);
	        //monster.disableDrops();
	        eim.registerMonster(monster);
	        overrideStats.setOHp(12090);
	        overrideStats.setOExp(expInformation);
	        monster.setOverrideStats(overrideStats);
	        em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) - mX), mY);
	    }
	    if (player != null) {

	        var monster = em.getMonster(monsterID3);
	        //monster.disableDrops();
	        eim.registerMonster(monster);
	        overrideStats.setOHp(12090);
	        overrideStats.setOExp(expInformation);
	        monster.setOverrideStats(overrideStats);
	        em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) - mX), mY);

	    }
	    if (eim.getProperty("finsh") != "1") {
	        eim.schedule("spawnMonster", 1000, player);
	    }
	}
	
}

function playerRevive(eim, player) {
	player.setStance(0);
	player.changeMap(player.getMap(), player.getMap().getPortal(0));
	return true;
}
function scheduledTimeout(eim) {
	var player = eim.getPlayers().get(0);
	eim.setProperty("finsh", "1");
	eim.stopEventClock();
	player.getMap().killAllMonsters(true);
	pauseTimer(eim, player);
	//player.Warp(101050000);
    player.openNpc(9310475, 5);
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
	em.insertRanking(player, "星星副本", cp);
	eim.unregisterPlayer(player);
	eim.dispose();
}




function playerDead(eim, player) {}
function monsterValue(eim, mobid) {
	cp = parseInt(eim.getObjectProperty("cp")) + 1;
	eim.setObjectProperty("cp", cp);
	eim.broadcastPlayerMsg(-1, "小绵羊：阿 这是第" + cp + " 只被宰杀的小绵羊了");
	return 0;
}

function monsterKilled(eim, player, cp) {}
function allMonstersDead(eim) {}
function monsterDamaged(eim, player, mobid, damage) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function onMapLoad(eim, player) { }
function monsterDrop(eim, player, mob) { }