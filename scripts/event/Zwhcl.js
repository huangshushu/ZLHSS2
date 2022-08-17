/* 
 * 卧虎藏龙
 */

        function init() {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zwhcl");
    var map = eim.setInstanceMap(706041715);
    map.resetFully();
    eim.getMapFactory().getMap(706041715).killAllMonsters(false);
    var mob1 = em.getMonster(9601013);
    var mob2 = em.getMonster(9601015);
    var mob3 = em.getMonster(9601016);
    var mob4 = em.getMonster(9601017);
    var mob5 = em.getMonster(9601018);
    //var mob4 = em.getMonster(9390602);
    var mob = em.getMonster(9601014);
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 20000);
    modified.setOMp(mob.getMobMaxMp() * 1000);
    mob.getStats().setPhysicalAttack(5000);
    modified.setOHp(mob1.getMobMaxHp() * 9000);
    modified.setOMp(mob1.getMobMaxMp() * 1000);
    
    modified.setOMp(mob.getMobMaxMp() * 15000);
    mob.getStats().setPhysicalAttack(5);
    mob.getStats().setMagicAttack(5);
    mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性*/
    mob.setOverrideStats(modified);
    mob1.setOverrideStats(modified);
    mob2.setOverrideStats(modified);
    mob3.setOverrideStats(modified);
    mob4.setOverrideStats(modified);
    mob5.setOverrideStats(modified);
    eim.registerMonster(mob);
    eim.registerMonster(mob1);
    eim.registerMonster(mob2);
    eim.registerMonster(mob3);
    eim.registerMonster(mob4);
    eim.registerMonster(mob5);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-378, 95));
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-13, 95));
    map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(-13, 95));
    map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(-13, 95));
    map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(-13, 95));
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(7, 61));
    map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(7, 61));
    map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(7, 61));
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(350, 95));
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(910000000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 910000000);
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041715) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(1, 910000000);
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
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    em.broadcastServerMsg(5120027, "卧虎藏龙已被消灭，请在1分钟内点击NPC获得奖励。", true);
    eim.startEventTimer(1000 * 120); //1 min
    eim.getMapInstance(0).spawnNpc(9310461, new java.awt.Point(-13, 95));
    eim.getMapFactory().getMap(706041715).killAllMonsters(false);
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

function monsterDrop(eim, player, mob) {}