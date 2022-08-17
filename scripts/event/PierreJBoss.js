/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：进阶皮埃尔
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PierreJBoss");
    var map = eim.setInstanceMap(105200610);
    map.resetFully();
    eim.getMapFactoryMap(105200610).killAllMonsters(false);
    for (var i = 8900000; i < 8900002; i++) {
        var mob = em.getMonster(i);
        mob.getStats().setChange(true);
        mob.changeLevel(200);
        mob.getChangedStats().setOHp(60000000000);
        mob.setHp(60000000000);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(497, 551));
    }
    eim.startEventTimer(30 * 60 * 1000); //30分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
    player.sendDathCount();
}

function changedMap(eim, player, mapid) {
    if (mapid != 105200610) {
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
    eim.disposeIfPlayerBelow(100, 105200000);
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
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.changeMap(map, map.getPortal(0));
        player.eventRevive();
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
