/*  
 *  
 *  功能：BOSS阿卡伊勒 [梦幻]  MOBID 8860005
 *  
 */

 //自定义复活次数
var reviveCount = 3;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");//状态检测
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("BossArkarium_EASY");
    var map = eim.setInstanceMap(272030400);
    eim.setInstanceMap(272030410);
    eim.setInstanceMap(272030420);
    map.resetFully();
    map.killAllMonsters(false);
	var mob = em.getMonster(8860005);//召唤怪物
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-16, -181));
    eim.startEventTimer(1200000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
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
    var map = eim.getMapFactoryMap(272030300);
	player.changeMap(map, map.getPortal(0));
    return true;
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 272020110);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 272030400 && mapid != 272030420 && mapid != 272030410) {
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
    if (eim.disposeIfPlayerBelow(100, 272030300)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
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