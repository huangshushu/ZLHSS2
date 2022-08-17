/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：桃乐丝[困难] Level:110  Easy
 *  401060300 - 暴君城堡 - 暴君之王座
 *  @Author Kent 
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
    var eim = em.newInstance("Taolesi_NORMAL");
    var map = eim.setInstanceMap(992050000);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(9309207);//Level:110
	mob.getStats().setChange(true);
    mob.changeLevel(220);
    mob.getChangedStats().setOHp(2000000000000);
    mob.setHp(2000000000000);
    var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 2.5);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);
    eim.registerMonster(mob);
  
  
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(390, 154));
    
    eim.schedule("summonFall", 5000);
    eim.schedule("checkChrHP", 2000);
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
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(101050000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 992030000) {
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
          case 9309207:
		    for (i = 0; i < eim.getPlayers().size(); i++) {
				 eim.getPlayers().get(i).openNpc(9900002, "BOSS奖励结算");
              if (!eim.getPlayers().get(i).isAdmin()) {
                   eim.getPlayers().get(i).setPQLog(""+ em.getProperty("PQLog") +"");
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
        var mob = map.getMonsterById(9309207);
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