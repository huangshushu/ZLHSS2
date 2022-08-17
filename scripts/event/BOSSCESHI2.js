/*
 * Ruin - 排序 - 通用副本
 * 脚本定制 技术顾问 50009219
 */
//自定义复活次数
var reviveCount = 3;
/* 这是变量写入副本时间 打完计算剩余时间 */
var TimeA = 30 * 60 * 1000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");
    var eim = em.newInstance("ABDafny");
    var map = eim.setInstanceMap(993071600);
    map.resetFully();
    map.killAllMonsters(false);
    eim.startEventTimer(TimeA);
	
    var mob = em.getMonster(9402133);//巧克力狂绿水灵王
    Attribute = em.newMonsterStats();
    Attribute.setOHp(10000000000000000);
    Attribute.setOMp(mob.getMobMaxMp());
    stats = mob.getStats();
    stats.setPhysicalAttack(100);
    stats.setMagicAttack(100);;
    stats.setPDRate(100);
    stats.setMDRate(100);
    stats.setAcc(500000);
    stats.setSpeed(200);
    stats.setLevel(250);
    stats.setExp(1000);
    stats.setChange(true);
    mob.setOverrideStats(Attribute);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(238, 29));
	
	var mob = em.getMonster(9402134);//巧克力狂花蘑菇王
    Attribute = em.newMonsterStats();
    Attribute.setOHp(100000000000000000);
    Attribute.setOMp(mob.getMobMaxMp());
    stats = mob.getStats();
    stats.setPhysicalAttack(100);
    stats.setMagicAttack(100);;
    stats.setPDRate(100);
    stats.setMDRate(100);
    stats.setAcc(500000);
    stats.setSpeed(200);
    stats.setLevel(250);
    stats.setExp(1000);
    stats.setChange(true);
    mob.setOverrideStats(Attribute);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-450, 29));
	
	var mob = em.getMonster(9500533);//龙叔叔黑龙
    Attribute = em.newMonsterStats();
    Attribute.setOHp(1000000000000000);
    Attribute.setOMp(mob.getMobMaxMp());
    stats = mob.getStats();
    stats.setPhysicalAttack(100);
    stats.setMagicAttack(100);;
    stats.setPDRate(100);
    stats.setMDRate(100);
    stats.setAcc(500000);
    stats.setSpeed(200);
    stats.setLevel(250);
    stats.setExp(1000);
    stats.setChange(true);
    mob.setOverrideStats(Attribute);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(596, 29));
	
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    var map = player.getReviveCount() > 0 ? player.getMap() : eim.getMapFactoryMap(910000000);
    player.DeathRevive(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 993071600) {
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

/* 这个也要看有没有 没有也要加入 这里是遍历角色 执行 NPC */
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
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
    eim.disposeIfPlayerBelow(100, 300030300)
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}



function leftParty(eim, player) {
    end(eim);
}

function disbandParty(eim) {
    end(eim);
}

function playerDead(eim, player) {
    //to do
}

function cancelSchedule() {
    //to do
}
function pickUpItem(eim, player, itemID) {
}
