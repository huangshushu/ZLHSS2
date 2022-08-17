/*  This is mada   
 *  This source is made by 
 *  脚本功能：威尔[梦幻] 
	//'埃斯佩拉 : 衍射游廊' 450008400
 *  
 */

//自定义复活次数
var reviveCount = 2;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("PQLog", "false");
    em.setProperty("state", "1");
    var eim = em.newInstance("tiangou_NORMAL");
    var map = eim.setInstanceMap(450008400);
    map.resetFully();
	var mob = em.getMonster(8880301);
            var stats = mob.getStats();
            var ostats = em.newMonsterStats();
            ostats.setOHp(8888888888888);
            ostats.setOMp(8888888);
            stats.setPhysicalAttack(10000000);
            stats.setMagicAttack(10000000);
            stats.setLevel(250);
            mob.setOverrideStats(ostats);
            eim.registerMonster(mob);
            eim.broadcastPlayerMsg(5, "威尔：你媳妇跑了,还不回去!");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(286, 159));
    eim.startEventTimer(1000 * 60 * 90); //90min 
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    //player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(450008400);
    player.changeMap(map, map.getPortal(0));
    return true;
}
/*
 function scheduledTimeout(eim) {
 eim.disposeIfPlayerBelow(100, 101050000);
 em.setProperty("state", "0");
 em.setProperty("leader", "true");
 }*/

function changedMap(eim, player, mapid) {
    if (mapid != 450008400) {
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
    switch (mobId) {
        case 9400080:
            for (i = 0; i < eim.getPlayers().size(); i++) {
                eim.getPlayers().get(i).openNpc(9900002, "BOSS奖励结算");
                if (!eim.getPlayers().get(i).isAdmin()) {
                    eim.getPlayers().get(i).setPQLog("" + em.getProperty("PQLog") + "");
                }
            }
            eim.startEventTimer(1 * 60 * 1000);
            break;
    }
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
    if (eim.disposeIfPlayerBelow(100, 101050000)) {
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
    var time = 4500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(2 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(9400080);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size(); i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function pickUpItem(eim, player, itemID) {
}
function monsterDrop(eim) {}