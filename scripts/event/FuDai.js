/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：钻机 RigBoss
 *  @Author Kent 
 */
var TimeA = 10 * 60 * 1000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("FuDai");
    var map = eim.setInstanceMap(303090530);
    map.resetFully();
    eim.getMapFactoryMap(303090530).killAllMonsters(false);
    var mob = em.getMonster(9600084);//召唤怪物
    mob.getStats().setChange(true);
    mob.changeLevel(200);
	    mob.getChangedStats().setOHp(40000000);
    mob.setHp(40000000);
    eim.registerMonster(mob);
    eim.setProperty("HPstate", "1");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(9,-2));//坐标x y
    //}
    eim.startEventTimer(TimeA); //30分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 303090530) {
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
    eim.disposeIfPlayerBelow(100, 101050000);//回去入口
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




function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
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
