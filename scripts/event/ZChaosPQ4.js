/* 
 * 测试脚本
 */
var mapId = 321116000;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("ZChaosPQ4");
    eim.setInstanceMap(321110000).resetFully();
    eim.setInstanceMap(321111000).resetFully();
    eim.setInstanceMap(321112000).resetFully();
    eim.setInstanceMap(321113000).resetFully();
    eim.setInstanceMap(321114000).resetFully();
    eim.setInstanceMap(321115000).resetFully();
    eim.setInstanceMap(321116000).resetFully();
    var map = eim.setInstanceMap(321116000);
    map.resetFully();
    map.killAllMonsters(true);
    var mob = em.getMonster(9999998);
    mob.changeLevel(level);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-16, 392)); //刷出这个怪物
    eim.startEventTimer(1000 * 60 * 60); //60 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid < 321110000 || mapid > 321116000) {
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
	eim.schedule("end", 1000 * 0);
}


function end(eim, player){
    var map = eim.setInstanceMap(mapId);
    em.broadcastYellowMsg("[米纳尔森林保卫战] - 已被击败敌人，勇士们解放了！");
    map.startMapEffect("[米纳尔森林保卫战]已被解放，请在10秒内狂点击NPC获得奖励。", 5120092);
    eim.startEventTimer(1000 * 10); //10 min
    map.spawnNpc(2400006, new java.awt.Point(-16, 392));
	
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}