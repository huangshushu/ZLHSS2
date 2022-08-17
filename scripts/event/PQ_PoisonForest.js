/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：毒雾森林
 *  
 *  @Author Jackson 
 */

/* global em */

var minPlayers = 2;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("PQ_PoisonForest" + leaderid);

    eim.setInstanceMap(933021000).resetFully(eim, level);
    eim.setInstanceMap(933022000).resetFully(eim, level);
    eim.setInstanceMap(933023000).resetFully(eim, level);
    eim.setInstanceMap(933024000).resetFully(eim, level);
    eim.setProperty("Point", "");

    eim.setInstanceMap(933025000).resetFully(eim, level);
    eim.setInstanceMap(933026000).resetFully(eim, level);

    var map = eim.setInstanceMap(933027000);
    map.resetFully(eim, level);
    map.shuffleReactors();

    var rx = parseInt(java.lang.Math.random() * 9 + 1);
    eim.setProperty("an", String("an" + rx));

    eim.setInstanceMap(933028000).resetFully(eim, level);

    eim.startEventTimer(20 * 60 * 1000); //20 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    //PartyQuest (1206);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 933021000 || mapid > 933028000) {
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

function monsterKilled(eim, chr, mobID) {
    var mapID = chr.getMapID();
    if (chr.getMap().getMobSize() <= 0) {
        switch (mapID) {
            case 933023000:
                eim.setProperty(String(mapID), "clear");
                chr.getMap().showScreenEffect("quest/party/clear");
                break;
            case 933028000:
                eim.setProperty(String(mapID), "clear");
                chr.getMap().showScreenEffect("quest/party/clear");
                chr.getMap().startMapEffect("消灭了剧毒石头人，可以从右边的传送口退出！", 5120023);
                break;
        }
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 933020000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
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
}
function pickupItem(eim, player, itemID) {
    switch (itemID) {
        case 4000027:
            var stats = parseInt(eim.getProperty("933026000"));
            if (!"clear".equals(stats)) {
                var count = eim.getAllItemNumber(itemID);
                eim.broadcastScriptProgressMessage("收集到了" + count + "个怪猫的眼。");
                if (count >= 20) {
                    eim.setProperty("933026000", "clear");
                    eim.removeAllItem(itemID);
                    player.getMap().startMapEffect("获得所有怪物球，请队长与艾琳对话，移动到下一关！", 5120023);
                    player.getMap().showScreenEffect("quest/party/clear");
                }
            }
            break;
    }
}
function monsterDamaged(eim, player, mobID, damage) {
}
