/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：单独地图实例
 *  
 *  @Author Jackson 
 */

/* global em */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(instanceID, mapID) {
    //em.setProperty("state", "1");
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("BattlePVPGame" + instanceID);
    var map = eim.createInstanceMap(mapID);
    map.resetFully();
    var returnMap = map.getForcedReturnMap();
    eim.setProperty("returnMap", returnMap);
    eim.startEventTimer(10 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    var portalID = player.getTeam() == 1 ? 12 : 13;
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(portalID));
}

function changedMap(eim, player, mapid) {
    var map = eim.getMapInstance(0);
    if (mapid != map.getMapID()) {
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

function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
}