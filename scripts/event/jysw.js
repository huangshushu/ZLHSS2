var mapId = 746000015;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("jysw");
    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    //var overrideStats = em.newMonsterStats();
    var mob = em.getMonster(2500320);//恶魔猫头鹰塔
    var hprand = 500000000;
	var overrideStats = em.newMonsterStats();
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(50000);
    overrideStats.setOMp(500000);
    mob.setOverrideStats(overrideStats);
    //mob.setOverrideStats(overrideStats);
    //mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(505,95)); //刷出这个怪物
    eim.schedule("timeout", 300 * 1000);//10分钟 
    eim.schedule("beginQuest", 1000);
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

function timeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 746000015) {
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

function clearPQ(eim) {
    end(eim);
}

function end(eim) {
    var map = eim.getMapInstance(746000015);
    eim.broadcastPlayerMsg(1, "副本时间到了,你退出了副本");
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function monsterSpawn(eim) {
	 var map = eim.getMapInstance(746000015);
         if (map.getAllMonstersThreadsafe().size() <= 80) {
         var overrideStats = em.newMonsterStats();
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 3000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(20000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(278,95)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 7000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(278,95)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 3000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(48,95)); //刷出这个怪物
         }
         for (var i = 0; i < 4; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 3000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(48,95)); //刷出这个怪物
         }
	 eim.schedule("monsterSpawn", 10000);
         map.startMapEffect("幽灵死神在10秒后到达,请抓紧消灭,,当前来袭死神数量" + map.getAllMonstersThreadsafe().size() + "", 5121037);
	 map.broadcastMessage(em.getClock(10));
         } else if (map.getAllMonstersThreadsafe().size() > 80 && map.getAllMonstersThreadsafe().size() < 100 ) {
         var overrideStats = em.newMonsterStats();
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 4000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(202,95)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 3000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(202,95)); //刷出这个怪物
         }
         for (var i = 0; i < 2; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 8000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-64,95)); //刷出这个怪物
         }
         for (var i = 0; i < 4; i++) {
         var mob = em.getMonster(2400129);//怪物
         var hprand = 3000000;
         overrideStats.setOHp(hprand);
         overrideStats.setOExp(50000);
         overrideStats.setOMp(200000);
         mob.setOverrideStats(overrideStats);
         mob.setHp(hprand);
         eim.registerMonster(mob);
         map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-64,95)); //刷出这个怪物
         }       
	 eim.schedule("monsterSpawn", 10000);
	 map.broadcastMessage(em.getClock(10));
         map.startMapEffect("当前地图处于告急状态,请加强火力防止死神来袭,当前死神数量" + map.getAllMonstersThreadsafe().size() + "！超过100只怪物将会退出副本", 5121037);   
	 }else{      
         eim.broadcastPlayerMsg(1, "你已被死神打败，守卫失败");
         eim.disposeIfPlayerBelow(100, 101050000);//退出副本
         em.setProperty("state", "0");
         em.setProperty("leader", "true");
         }
         }
function beginQuest(eim) {
	var map = eim.getMapInstance(746000015);
        map.startMapEffect("限制时间为5分钟,幽灵死神在10秒后到达！请抓紧消灭，注意上方岩石", 5121037);
	eim.schedule("monsterSpawn", 10000);
	map.broadcastMessage(em.getClock(10));
}
function leftParty(eim, player) {}
function allMonstersDead(eim) {
//has nothing to do with monster killing
}
function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}