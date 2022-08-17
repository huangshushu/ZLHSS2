/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：卡雄
 *   221030910 - UFO内部 - 通风口D-77
 *   8880200 - 卡雄
 *   8880202 - 白外星博士
 *  @Author Jackson 
 */

/* global em, java */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossCaoong");
    var map = eim.setInstanceMap(221030910);
    map.resetFully(eim);
    if (map != null) {
        //召唤卡雄
        var mob1 = em.getMonster(8880200);
		    mob1.setChangeHP(1500000000000); 
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(615, 298));

        var mob2 = em.getMonster(8880202);
		    mob2.setChangeHP(2000000000000); 
        eim.registerMonster(mob2);
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(615, 298));
    }
    eim.startEventTimer(15 * 60 * 1000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 221030910) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 221030900)) {
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
    eim.disposeIfPlayerBelow(100, 221030900);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    player.changeMap(221030900, 0);
}

function disbandParty(eim) {
    end(eim);
}

function playerDead(eim, player) {
}

function cancelSchedule() {
}
function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
    if (mobID == 8880200) {
        var map = eim.getMapInstance(0);
        if (map != null) {
            map.killMonster(8880202);
        }
    }
}