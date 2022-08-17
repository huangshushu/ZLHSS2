/*  
 *  
 *  功能：斯乌 BlackHeaven 普通模式
 *  
 */
var mobid = Array(8950103, 8950104, 8950105, 8950107);
var reviveCount = 5;
var TimeA = 30 * 60 * 1000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");
    var eim = em.newInstance("BossSiwu_NORMAL");
    var map1 = eim.setInstanceMap(350060400);
    var map2 = eim.setInstanceMap(350060500);
    var map3 = eim.setInstanceMap(350060600);
    map1.resetPQ(level);
    map2.resetPQ(level);
    map3.resetPQ(level);
    eim.setProperty("summom", "0");
    var mob1 = em.getMonster(8950100);
    eim.startEventTimer(TimeA);
    eim.schedule("summonMob", 2000);
    eim.schedule("summonFall", 4000);
    eim.setProperty("stop", "0");
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 普 通 ] 斯　乌");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }

    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 350060400 && mapid != 350060500 && mapid != 350060600) {
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
    eim.disposeIfPlayerBelow(100, 350060300);
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
        case 8950102:
            eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
            openNpc(eim, 1540008, "TimCareU");
            break;
    }
    return 1;
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
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
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
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
    var mob1 = em.getMonster(mobid[0]);
    mob1.setStance(2);
    var mob2 = em.getMonster(mobid[1]);
    var mob3 = em.getMonster(mobid[2]);
    var mob4 = em.getMonster(mobid[3]);
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
function pickUpItem(eim, player, itemID) {
}