/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：taolesi
 *  @Author Kent 
 */
//自定义复活次数
var reviveCount = 5;
var Task;

var TimeA = 2300000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("time", "false");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("BossDorothy");
    em.setProperty("state", "1");
    eim.setProperty("leader", "false");
    eim.setProperty("time", "true");
    var map = eim.setInstanceMap(992050000);
    map.resetFully();
    map.killAllMonsters(true);
    var mob = em.getMonster(9309207);
    var mob1 = em.getMonster(9309126);//火山怪
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 3);
    modified.setOHp(mob.getMobMaxHp() * 10000);
    modified.setOMp(mob.getMobMaxMp() * 150);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(124, 184));
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(740, 184));
    eim.startEventTimer(TimeA); // 1 hr
    Task = em.schedule("timing", 1000 * 60, eim);
    em.schedule("spawn", 1000 * 30, eim);
    return eim;
}
function timing(eim) {
    if (eim.getProperty("time") == "true") {
        var map = eim.getMapInstance(0);
        var mob = em.getMonster(9309210);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(381, 184));
        Task = em.schedule("timing", 1000 * 50, eim);
    }
}
function spawn(eim) {
    var map = eim.getMapInstance(0);
    var mob2 = em.getMonster(9309206);//拓拓
    var modified = em.newMonsterStats();
    modified.setOExp(mob2.getMobExp() * 2);
    modified.setOHp(mob2.getMobMaxHp() * 4000);
    modified.setOMp(mob2.getMobMaxMp() * 50);
    mob2.setOverrideStats(modified);
    eim.registerMonster(mob2);
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(740, 184));
}
function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 困 难 ] 桃乐丝");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    //player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
    if (mapid != 992050000) {
        eim.unregisterPlayer(player);
        player.restReviveCount();
        eim.disposeIfPlayerBelow(100, 992050000);
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        eim.setProperty("time", "false");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 992050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
    eim.setProperty("time", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(100, 992050000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        eim.setProperty("time", "false");
    }
}

function monsterValue(eim, mobId) {
    var map = eim.getMapInstance(0);
    if (mobId == 9309207) {
        if (em.getProperty("state") == "5") {
            eim.setProperty("time", "false");
            var map = eim.getMapInstance(0);
            var mob = em.getMonster(8920106);
            mob.getStats().setChange(true);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
        } else {
            em.setProperty("state", "5");
        }
    } else if (mobId == 9309206) {
        if (em.getProperty("state") == "5") {
            eim.setProperty("time", "false");
            var map = eim.getMapInstance(0);
            var mob = em.getMonster(8920106);
            mob.getStats().setChange(true);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
        } else {
            em.setProperty("state", "5");
        }
    } else if (mobId == 8920106) {
        eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
        eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
        openNpc(eim, 1540008, "TimCareU");
    }
    return 1;
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
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
    var map = eim.getMapFactoryMap(105200000);
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