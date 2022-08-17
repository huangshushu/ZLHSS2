/*  
 *  
 *  功能：扎昆的祭坛 扎昆
 *  
 */
 
 //自定义复活次数
var reviveCount = 4;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(partyLevel, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossZakum_NORMAL");

    eim.setProperty("zakSummoned", "0");
    eim.setInstanceMap(280030100).resetFully();
//    eim.schedule("checkStart", 1200000); // 20 min
    eim.startEventTimer(3000000); //50 minutes
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
    var map = eim.getMapFactoryMap(101050000);
	player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
    if (mapid != 280030100) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("leader", "true");
            em.setProperty("state", "0");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    end(eim);
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(1, 280030100)) {
        em.setProperty("leader", "true");
        em.setProperty("state", "0");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("zakSummoned", "0");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    if (em.getProperty("state").equals("1")) {
        em.setProperty("state", "2");
    } else if (em.getProperty("state").equals("2")) {
        em.setProperty("state", "3");
    }
    eim.restartEventTimer(1 * 60 * 1000);
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