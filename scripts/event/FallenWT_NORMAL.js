/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能:  戴米安  普通模式
 *  @Author 娜娜 
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("FallenWT_NORMAL");
    var map = eim.setInstanceMap(350142000);
    map.resetFully();
    eim.getMapFactory().getMap(350142000).killAllMonsters(false);
    var mob = em.getMonster(8880121);
    var modified = em.newMonsterStats();
    modified.setOHp(30000000000);
    modified.setOMp(mob.getMobMaxMp() * 1.5);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(217, 16));
	for (var i = 0; i < 3; i++) {
	var mob1 = em.getMonster(3503007);
    var modified1 = em.newMonsterStats();
    modified1.setOHp(mob.getMobMaxHp() * 500);
    modified1.setOMp(mob.getMobMaxMp() * 500);
    mob1.setOverrideStats(modified1);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(217, 16));
	}
    eim.startEventTimer(1000 * 60 * 30); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(101050000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(0, 101050000);
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 253000100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
    //eim.startEventTimer(1000 * 60); //10 min
    //eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}