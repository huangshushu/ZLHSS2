/* This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能：斯乌 BlackHeaven 普通模式
 *  @Author 娜娜 
 */

        var mobid = Array(8950003, 8950004, 8950005, 8950007);
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Bosszhizhuwang");
    var map1 = eim.setInstanceMap(240093310);
    map1.resetFully(); //重置地图
    eim.setProperty("summom", "0");

    //var mob = em.getMonster(9421588);
    //eim.registerMonster(mob);
    //map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(179, 97));

    eim.startEventTimer(10 * 60 * 1000);
    //eim.schedule("summonMob", 2000);
    //eim.schedule("summonFall", 4000);
    eim.setProperty("stop", "0");
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    //player.setReviveCount(reviveCount);
    player.dropMessage(6, "[蜘蛛女王副本] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 240093310) {
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
    eim.disposeIfPlayerBelow(100, 240093200);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
/*
 function playerExit(eim, player) {
 eim.unregisterPlayer(player);
 if (eim.disposeIfPlayerBelow(0, 0)) {
 em.setProperty("state", "0");
 em.setProperty("leader", "true");
 }
 }*/

function monsterValue(eim, mobId) {
    if (eim.getMapFactory().getMap(240093310).getCharactersSize() != 0) {
        /*for (i = 0; i < eim.getPlayers().size(); i++) {
         var map = eim.setInstanceMap(240093310);
         eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
         }*/
        var map1 = eim.setInstanceMap(240093310);
        map1.startMapEffect("这里好像有黑暗气息，好像什么人混在了这里？", 5120124);
    }
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        eim.setProperty("stop", "1");
    }
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
/*
 function warpNext(eim) {
 var map;
 var state = parseInt(em.getProperty("state"));
 for (i = 0; i < eim.getPlayers().size(); i++) {
 map = eim.getMapInstance(state - 1);
 eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
 }
 }
 */
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