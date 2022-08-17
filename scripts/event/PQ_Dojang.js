/*
 *  
 *  功能：武陵道场普通模式
 *  
 */

/* global em */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(chrID, mapID) {
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("PQ_Dojang_" + chrID);
    /*
     普通 925030100 - 925032300
     困难 925070100 - 925074000 //New
     出口 925020002
     */

    eim.setProperty("mode", "3");
    for (var i = 1; i <= 40; i++) {
        var map = eim.createInstanceMap(925070000 + (i * 100));
        map.resetFully();
    }

    eim.setProperty("returnMap", "925020002");
    eim.startEventTimer(8, 2, 15 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    var check = false;
    
    for (var i = 1; i <= 40; i++) {
        var checkID = 925070000 + (i * 100);
        if (checkID == mapid) {
            check = true;
            break;
        }
    }

    if (!check) {
        playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}


function playerDead(eim, player) {
    // Happens when player dies
}

function playerRevive(eim, player) {
    // Happens when player's revived.
    // @Param : returns true/false
    return false;
}

function playerDisconnected(eim, player) {
    return 0;
    // return 0 - Deregister player normally Dispose instance if there are zero player left
    // return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
    // return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
    return 1;
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Happens when the party is disbanded by the leader.
}

function end(eim) {
    var str = eim.getProperty("returnMap");
    var returnMap = parseInt(str);
    eim.disposeIfPlayerBelow(100, returnMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function removePlayer(eim, player) {
    // Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function cancelSchedule() {
}

function pickUpItem(eim, player, itemID) {
}

function monsterDamaged(eim, player, mobID, damage) {
}

function monsterKilled(eim, player, mobID) {
    var map = player.getMap();
    var check = eim.getProperty("Mob_" + mobID);
    if (check != null) {
        map.playFieldSound("Dojang/clear");
        map.showScreenEffect("dojang/end/clear");
        var reactor = map.getReactorByID(2508000);
        if (reactor != null) {
            reactor.forceHitReactor(1);
        }
        var stage = parseInt(map.getMapId() % 10000 / 100);
        eim.setProperty("Floor_" + stage, "1");
    }
}