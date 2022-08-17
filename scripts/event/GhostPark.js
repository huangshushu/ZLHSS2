


/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：鬼魂公园
 *  @Author Kent 
 */
var minPlayers = 1;
var c1Task, c4Task, c7Task, cTask;
function init() {

}

function setup(id, level) {
    var eim = em.newInstance("GhostPark" + id);
    //var map = parseInt(id);
    var clevel = em.getProperty("PID" + id);
    eim.setProperty("level", level);
    eim.setProperty("size", "-1");
    var map = eim.setInstanceMap(956100100);
    eim.setProperty("nowMob", "9802000");
    eim.setProperty("lastChange", "1");
    map.resetAllSpawnPoint(9802000, 0, 0, level);
    map.resetPQ(level);
    eim.setProperty("stage", "0");
    eim.setProperty("crate", "0");
    eim.setProperty("exprate", "0");
    eim.setProperty("kills", "0");


    eim.setProperty("c1", clevel.substring(0, 1));
    eim.setProperty("c2", clevel.substring(1, 2));
    eim.setProperty("c3", clevel.substring(2, 3));
    eim.setProperty("c4", clevel.substring(3, 4));
    eim.setProperty("c5", clevel.substring(4, 5));
    eim.setProperty("c6", clevel.substring(5, 6));
    eim.setProperty("c7", clevel.substring(6, 7));

    if (!eim.getProperty("c1").equals("0")) {
        c1Task = eim.schedule("ghostFlash", 100);
    }
    if (!eim.getProperty("c4").equals("0")) {
        c4Task = eim.schedule("checkLastMove", 2000);
    }
    if (!eim.getProperty("c7").equals("0")) {
        c17Task = eim.schedule("ghostSpots", 100);
    }
    cTask = eim.schedule("reSpaen", 2000);
    eim.startEventTimer(60 * 1000 * 10);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    var cc = parseInt(player.getOneInfo(30200, "count")) + 1;
    player.updateOneInfo(30200, "count", cc + "");
    player.changeMap(map, map.getPortal(0));
    eim.applySkill(player, 80001794);
    eim.applySkill(player, 80001795);
    if (!eim.getProperty("c5").equals("0")) {
        //召唤处女
        var level = parseInt(eim.getProperty("c5"));
        var mob = em.getMonster(9802002 + level);
        mob.getStats().setChange(true);
        mob.changeLevel(250);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-542, 90));
    }
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 956100100) {
        playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    player.dispelBuff(80001794);
    player.dispelBuff(80001795);
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
    }
}
function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    var count = parseInt(eim.getProperty("kills")) + 1;
    var pqlevel = parseInt(eim.getProperty("level"));
    eim.updateGhostParkScore();
    var map = eim.getMapInstance(0);
    var rate = 0;
    if (!eim.getProperty("c3").equals("0")) {
        var level = parseInt(eim.getProperty("c3"));
        var mob = parseInt(eim.getProperty("nowMob"));
        var lastchange = parseInt(eim.getProperty("lastChange"));
        //设置怪物大小
        var min = 10 - parseInt(eim.getTimeLeft() / 60 / 1000);
        rate = parseInt(min * 4 * level);
        if (lastchange < min) {
            eim.setProperty("lastChange", min);
            map.resetAllSpawnPoint(mob, 2000, rate, pqlevel);
        }
    }
    if (count == 100) {
        eim.setProperty("nowMob", "9802001");
        map.resetAllSpawnPoint(9802001, 2000, rate, pqlevel);
    } else if (count == 300) {
        eim.setProperty("nowMob", "9802002");
        map.resetAllSpawnPoint(9802002, 2000, rate, pqlevel);
    }
    eim.setProperty("kills", count);
    return 1;
}

function end(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var player = eim.getPlayers().get(i);
        player.dispelBuff(80001794);
        player.dispelBuff(80001795);
    }
    eim.disposeIfPlayerBelow(100, 956100000);
}

function clearPQ(eim) {
    //eim.EventGainNX();
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}
function cancelSchedule() {
    if (c1Task != null) {
        c1Task.cancel(true);
    }
    if (c4Task != null) {
        c4Task.cancel(true);
    }
    if (c7Task != null) {
        c7Task.cancel(true);
    }
    if (cTask != null) {
        cTask.cancel(true);
    }
}
function pickUpItem(eim, player, itemID) {
}

function ghostSpots(eim) {
    var level = parseInt(eim.getProperty("c7"));
    var map = eim.getMapInstance(0);
    map.sendGhostSpots(level);
    eim.schedule("ghostSpots", 3000 / level);
}

function ghostFlash(eim) {
    var level = parseInt(eim.getProperty("c1"));
    var map = eim.getMapInstance(0);
    map.sendGhostFlash(level);
    eim.schedule("ghostFlash", 5000);
}

function reSpaen(eim) {
    var map = eim.getMapInstance(0);
    if (map.getAllMonster().size() < 60) {
        map.respawn(true);
    }
    eim.schedule("reSpaen", 2000);
}

function checkLastMove(eim) {
    var level = parseInt(eim.getProperty("c4"));
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var player = eim.getPlayers().get(i);
        if (player.checkMoveInTime(3000 / level)) {
            player.hurtPerHP(23 + level * 2);
        }
    }
    eim.schedule("checkLastMove", 1000);
}
