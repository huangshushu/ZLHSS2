/* 
 * 克劳德
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zkld");
    var map = eim.setInstanceMap(861000000);
    map.resetFully();
    eim.getMapFactory().getMap(861000000).killAllMonsters(false);
    var mob = em.getMonster(9400903);
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 200);
    modified.setOMp(mob.getMobMaxMp() * 3000);
	//mob.getStats().setPhysicalAttack();
	//mob.getStats().setMagicAttack();
	//mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(418, 215));
    eim.startEventTimer(1000 * 60 * 30); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	map.startMapEffect("[挑战克劳德] 击败克劳德之后，找彬博士领取奖励", 5120026);
}

function playerRevive(eim, player) {
    return false;
}
function monsterDrop(eim, player, mob) {}
function changedMap(eim, player, mapid) {
    if (mapid != 861000000) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
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
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    eim.getMapFactory().getMap(861000000).killAllMonsters(false);
	em.setProperty("state", "2");
   /* var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }*/
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}