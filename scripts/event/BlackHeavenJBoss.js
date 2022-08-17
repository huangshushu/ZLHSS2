/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：斯乌 BlackHeaven
 *  @Author Kent 
 */
var mobid = Array(8950003, 8950004, 8950005, 8950007);
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(leaderName) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BlackHeavenJBoss");
    var map1 = eim.setInstanceMap(350060700);
    var map2 = eim.setInstanceMap(350060800);
    var map3 = eim.setInstanceMap(350060900);
    map1.resetFully();
    map2.resetFully();
    map3.resetFully();
    eim.setProperty("stop", "0");
    eim.startEventTimer(40 * 60 * 1000);
    eim.schedule("summonMob", 2000);
    eim.schedule("summonFall", 4000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
    player.sendDathCount();
}

function changedMap(eim, player, mapid) {
    if (mapid != 350060700 && mapid != 350060800 && mapid != 350060900) {
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
    eim.disposeIfPlayerBelow(100, 807300100);
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
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
        eim.schedule("warpNext", 6700);
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
        eim.schedule("warpNext", 4700);
    } else {
        eim.setProperty("stop", "1");
    }
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.changeMap(map, map.getPortal(0));
        player.eventRevive();
        for (i = 0; i < 4; i++) {
            map.killAllMonsterById(mobid[i]);
        }
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(350060300);
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
function warpNext(eim) {
    var map;
    var state = parseInt(em.getProperty("state"));
    for (i = 0; i < eim.getPlayers().size(); i++) {
        map = eim.getMapInstance(state - 1);
        eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
    }
}

function summonMob(eim) {
    var map;
    map = eim.getMapInstance(0);
    var mob1 = em.getMonster(mobid[Math.floor(Math.random() * 4)]);
    mob1.setStance(2);
    var mob2 = em.getMonster(mobid[Math.floor(Math.random() * 4)]);
    var mob3 = em.getMonster(mobid[Math.floor(Math.random() * 4)]);
    var mob4 = em.getMonster(mobid[Math.floor(Math.random() * 4)]);
    mob4.setStance(2);
    if (map.getNumMonsters() < 100) {
        map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(-404, -400));
        map.spawnMonsterWithEffect(mob2, -2, new java.awt.Point(423, -400));
        map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(505, -230));
        map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(-514, -230));
    }
    if (em.getProperty("state").equals("1")) {
        eim.schedule("summonMob", 6000);
    }
}

function summonFall(eim) {
    var stop = parseInt(eim.getProperty("stop"));
    if (stop == 0) {
        var state = parseInt(em.getProperty("state"));
        var map = eim.getMapInstance(state - 1);
        map.obtacleFall(3, 0x30, 0x33);
        eim.schedule("summonFall", 5000);
    }
}