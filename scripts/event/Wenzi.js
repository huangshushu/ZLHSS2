
var mobid;
var mob;
var modified;
var setupTask;

function init() {
    em.setProperty("state", "0");
    em.setProperty("PlayerCount", "0");
}


function setup(level, leaderid) {
    var eim = em.newInstance("Wenzi");
    eim.setInstanceMap(350033000).resetPQ(level);
    var map = eim.setInstanceMap(350033000);
    map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);
    eim.schedule("summonFall", 5000);
    for (var i = 0; i < 30; i++) {
        mobid = 9480269;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(100);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(350033000);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-3608, -369));//x -3744~-2805  y14~-715
    }
    for (var i = 0; i < 20; i++) {
        mobid = 9480269;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(100);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(350033000);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-(Math.floor(Math.random() * 939) + 2805), -(Math.floor(Math.random() * 710) + 14)));//x -3744~-2805  y14~-715
    }
    eim.startEventTimer(1000 * 60 * 2);
    em.setProperty("state", "1");
    em.setProperty("PlayerCount", "0");
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[消灭蚊子] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
    player.openNpc(9900000,998)
}


function scheduledTimeout(eim) {
   // eim.broadcastPlayerMsg(1, "[消灭蚊子] 你一共消灭了" + eim.getKillCount(eim.getPlayer()) + "只蚊子，现在可以到入场处兑换礼品拉！");
   em.setProperty("PlayerCount", "" + eim.getMapFactory().getMap(350033000).getCharactersSize() + "");
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(9900000, 999);//把消灭的数量载入
    }
    //eim.getPlayer().dropMessage(1, "将在10秒后出题，请做好准备！");
    //eim.getKillCount(eim.getPlayers().get(i)))
   // eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(101050000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 101050000);
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 350033000:
            return;
    }

    player.dropMessage(6, "[消灭蚊子] 已退出活动。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}



function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 101050000);
        /*if (setupTask != null)
         setupTask.cancel(true);*/
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
    for (var i = 0; i < 50; i++) {
        mobid = 9480269;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(100);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(350033000);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-(Math.floor(Math.random() * 939) + 2805), -(Math.floor(Math.random() * 710) + 14)));//x -3744~-2805  y14~-715
    }
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
}


function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {
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