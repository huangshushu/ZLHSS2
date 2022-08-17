/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：麦格纳斯 Magnus
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 20;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("MagnusBoss");
    var map = eim.setInstanceMap(401060100);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(8880000);//190J
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.getChangedStats().setOHp(120000000000);
    mob.setHp(120000000000);
    /*var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 300);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);*/
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    eim.schedule("checkChrHP", 2000);
    eim.schedule("summonFall", 5000);
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

function changedMap(eim, player, mapid) {
    if (mapid != 401060100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 401060000);
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
    eim.disposeIfPlayerBelow(100, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
    //eim.startEventTimer(1000 * 60); //10 min
    //eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    eim.setProperty("HPstate", "-1");
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
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
        var mob = map.getMonsterById(8880000);
        if (mob != null) {
            map.getMonsterById(8880000).checkMobZone(state, true);
            eim.schedule("checkChrHP", 2000);
        }
    }
}

function checkMobZone(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8880000);
        if (mob != null) {
            mob.checkMobZone(state, false);
            eim.schedule("checkMobZone", 100);
        }
    }
}