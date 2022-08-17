/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：taolesi
 *  @Author Kent 
 */
//自定义复活次数
var reviveCount = 6;
var Task;
var TimeA = 2300000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
	em.setProperty("time", "false");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("Bossluxide");
    em.setProperty("state", "1");
    eim.setProperty("leader", "false");
	eim.setProperty("time", "true");
    var map = eim.setInstanceMap(450004150);
    map.resetFully();
    map.killAllMonsters(true);
	var mob = em.getMonster(8880140);
	var mob1 = em.getMonster(8880166);
	var mob2 = em.getMonster(8880164);
	var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 5);
    modified.setOHp(mob.getMobMaxHp() * 20000000000000);
    modified.setOMp(mob.getMobMaxMp() * 1500);
    mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	eim.registerMonster(mob1);
	eim.registerMonster(mob2);
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(980, 47));
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(980, 47));
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(980, 47));
	eim.startEventTimer(TimeA); // 1 hr
	Task = em.schedule("timing",1000*60,eim);
	em.schedule("spawn",1000*30,eim);
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 困 难 ] 路西德");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }

    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid!=450004150){
		eim.unregisterPlayer(player);
		player.restReviveCount();
		eim.disposeIfPlayerBelow(100, 910000001);
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
		eim.setProperty("time", "false");
	}
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000001);
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
	eim.setProperty("time", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(100, 910000001)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
		eim.setProperty("time", "false");
    }
}

function monsterValue(eim, mobId) {
	var map = eim.getMapInstance(0);
	if (mobId == 8880140){
		if (em.getProperty("state")=="5"){
			eim.setProperty("time", "false");
			var map = eim.getMapInstance(0);
			var mob = em.getMonster(8920106);
			mob.getStats().setChange(true);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1009, 47));
		}else{
			em.setProperty("state","5");
		}
	}else if (mobId == 8880141){
		if (em.getProperty("state")=="5"){
			eim.setProperty("time", "false");
			var map = eim.getMapInstance(0);
			var mob = em.getMonster(8920106);
			mob.getStats().setChange(true);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1009, 47));
		}else{
			em.setProperty("state","5");
		}
	} else {
	    eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
	    eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
	    openNpc(eim, 1540008, "TimCareU");
	}
    return 1;
}

function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(91000000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}