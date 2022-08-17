
/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：组队任务:老海盗
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
    var eim = em.newInstance("PQ_Pirate");
    eim.setProperty("stage1", "0");
    eim.setProperty("stage2", "0");
    eim.setProperty("stage2a", "0");
    eim.setProperty("stage3a", "0");
    eim.setProperty("stage4", "0");
    eim.setProperty("stage5", "0");
    eim.setInstanceMap(925100000).resetFully();
    var map = eim.setInstanceMap(925100100);
    map.resetFully();
    map.setLimitMobID(9300114);
    map.killAllMonsters(false);
    eim.setInstanceMap(925100400).resetFully();

    map = eim.setInstanceMap(925100500);
    map.resetFully();
    /*
     * 9300119
     * 9300105
     * 9300106
     */
    var x = Math.floor(Math.random() * 2);
    var mob = em.getMonster(x == 0 ? 9300106 : 9300119);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(411, 236));
    eim.startEventTimer(1200000); //20 mins
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
    if (mapid < 925100000 || mapid > 925100500) {
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
    eim.disposeIfPlayerBelow(100, 925100700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.setProperty("stage5", "1");
}

function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(1, 925100700)) {
        end(eim);
    }
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
        case 4001120:
        case 4001121:
        case 4001122:
            var stats = parseInt(eim.getProperty("stage2"));
            var tt = parseInt(itemID % 10);
            if (tt == stats) {
                var count = eim.getAllItemNumber(itemID);
                eim.broadcastScriptProgressMessage("收集到了" + count + "个" + (tt == 0 ? "初级" : tt == 1 ? "中级" : "高级") + "海盗证物。");
                if (count >= 20) {
                    var next = stats + 1;
                    eim.setProperty("stage2", next);
                    eim.removeAllItem(itemID);
                    eim.getMapInstance(1).setLimitMobID(9300114 + next);
                    eim.getMapInstance(1).startMapEffect(stats == 2 ? "现在快进入下一个阶段吧!!" : "好的现在进行收集下一种证物。", 5120020);
                }
            }
            break;
    }
}

function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, chr, mobID) {
}