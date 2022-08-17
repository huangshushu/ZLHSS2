/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：麦格纳斯[简单]
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 10;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("TyrantThroneBattle");
    var map = eim.setInstanceMap(401060300);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(8880010);//110J
    mob.getStats().setChange(true);
    mob.changeLevel(150);
    mob.getChangedStats().setOHp(9000000000);
    mob.setHp(9000000000);
    /*var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 300);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);*/
    eim.registerMonster(mob);
    eim.setProperty("HPstate", "1");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
    eim.startEventTimer(3600000); // 1 hr
    eim.schedule("summonFall", 5000);
    eim.schedule("checkChrHP", 2000);
    eim.schedule("checkMobZone", 100);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
    player.sendDathCount();
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.changeMap(map, map.getPortal(0));
        player.eventRevive();
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(401060000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 401060300) {
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

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 401060000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.setProperty("HPstate", "-1");
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 4000;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(3 * state, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8880010);
        if (mob != null) {
            mob.checkMobZone(state, true);
            eim.schedule("checkChrHP", 2000);
        }
    }
}

function checkMobZone(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8880010);
        if (mob != null) {
            mob.checkMobZone(state, false);
            eim.schedule("checkMobZone", 100);
        }
    }
}