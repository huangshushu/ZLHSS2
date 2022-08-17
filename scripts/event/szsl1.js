var mapId = 940021000;

function init() {
    em.setProperty("state", "0");
	em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("state1", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.schedule("beginQuest", 1000);
    eim.schedule("pf", 1000 * 60 * 3);
    eim.startEventTimer(60 * 1000 * 60);//60分钟
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
    if (mapid != 940021000) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
			em.setProperty("state1", "0");
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
c
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function pf(eim) {
	if (em.getProperty("state1").equals("1")==true){
    	em.setProperty("state1", "2");
    	eim.schedule("pf", 1000 * 60 * 3);
	} else if (em.getProperty("state1").equals("2")==true){
    	em.setProperty("state1", "3");
    	eim.schedule("pf", 1000 * 60 * 6);
	} else if (em.getProperty("state1").equals("3")==true){
    	em.setProperty("state1", "4");
}
}


function end(eim) {
		var map = eim.getMapInstance(940021000);
		eim.broadcastPlayerMsg(1, "次元世界已关闭，你回到了市场");
		eim.disposeIfPlayerBelow(100, 101050000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
}
 
function SpwnMobForPlayer(eim) {
	 	var mapForMob = eim.setInstanceMap(940021000);
		var pfB = em.showEffect("Visitor/RankB");
		var pfA = em.showEffect("Visitor/RankA");
		var pfF = em.showEffect("Visitor/RankF");
		var pfS = em.showEffect("Visitor/RankS");
		var packetsnd = em.playSound("rootabyss/firework");
	 	if (em.getProperty("state").equals("1")==true){
		//player.getMap().startMapEffect("幽灵死神在10秒后到达,请抓紧消灭,,当前来袭死神数量" + map.getAllMonstersThreadsafe().size() + "", 5120092);
			map.startMapEffect("[小试牛刀]请坚持20波怪物来袭，您将获得奖励。", 5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610005);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610006);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610007);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610008);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
		em.setProperty("state", "2");
		 } else if (em.getProperty("state").equals("2")==true) {
			map.startMapEffect("[小试牛刀]第二波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第二波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610005);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610006);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610007);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 6; i++) {
         	var mob = em.getMonster(8610008);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
		em.setProperty("state", "3");
		 } else if (em.getProperty("state").equals("3")==true) {
			map.startMapEffect("[小试牛刀]第三波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第三波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610005);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610006);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610007);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610008);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "4");
		 	} else if (em.getProperty("state").equals("4")==true) {
			map.startMapEffect("[小试牛刀]第四波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第四波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 7; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "5");
		 	} else if (em.getProperty("state").equals("5")==true) {
			map.startMapEffect("[小试牛刀]第五波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第五波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 8; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "6");
		 	} else if (em.getProperty("state").equals("6")==true) {
			map.startMapEffect("[小试牛刀]第六波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第六波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "7");
		 	} else if (em.getProperty("state").equals("7")==true) {
			map.startMapEffect("[小试牛刀]第七波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第七波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "8");
		 	} else if (em.getProperty("state").equals("8")==true) {
			map.startMapEffect("[小试牛刀]第八波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第八波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "9");
		 	} else if (em.getProperty("state").equals("9")==true) {
			map.startMapEffect("[小试牛刀]第九波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第九波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610009);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610010);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610011);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 9; i++) {
         	var mob = em.getMonster(8610012);//怪物
         	var hprand = 388888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "10");
		 	} else if (em.getProperty("state").equals("10")==true) {
			map.startMapEffect("[小试牛刀]第十波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "11");
		 	} else if (em.getProperty("state").equals("11")==true) {
			map.startMapEffect("[小试牛刀]第十一波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十一波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(20000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "12");
		 	} else if (em.getProperty("state").equals("12")==true) {
			map.startMapEffect("[小试牛刀]第十二波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十二波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "13");
		 	} else if (em.getProperty("state").equals("13")==true) {
			map.startMapEffect("[小试牛刀]第十三波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十三波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "14");
		 	} else if (em.getProperty("state").equals("14")==true) {
			map.startMapEffect("[小试牛刀]第十四波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十四波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "15");
		 	} else if (em.getProperty("state").equals("15")==true) {
			map.startMapEffect("[小试牛刀]第十五波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十五波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610018);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610019);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610020);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8610021);//怪物
         	var hprand = 588888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "16");
		 	} else if (em.getProperty("state").equals("16")==true) {
			map.startMapEffect("[小试牛刀]第十六波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十六波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "17");
		 	} else if (em.getProperty("state").equals("17")==true) {
			map.startMapEffect("[小试牛刀]第十七波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十七波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "18");
		 	} else if (em.getProperty("state").equals("18")==true) {
			map.startMapEffect("[小试牛刀]第十八波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十八波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "19");
		 	} else if (em.getProperty("state").equals("19")==true) {
			map.startMapEffect("[小试牛刀]第十九波怪物大军到达，抓紧时间消灭它们", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第十九波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "20");
		 	} else if (em.getProperty("state").equals("20")==true) {
			map.startMapEffect("[小试牛刀]最后一波怪物大军到达，坚持就是胜利", 5120092);
		//em.getMapFactory().getMap(940021000).startSimpleMapEffect("第二十波怪物大军到达，抓紧时间消灭它们",5120092);
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850000);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2076,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850001);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2507,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850002);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(2967,28)); //刷出这个怪物
			}
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(8850003);//怪物
         	var hprand = 688888888;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(200000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(3407,28)); //刷出这个怪物
			}
			em.setProperty("state", "21");
		 } else if (em.getProperty("state").equals("21")==true) {
			if(em.getProperty("state1").equals("4")==true) {
			map.broadcastMessage(pfB);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("3")==true) {
			map.broadcastMessage(pfA);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("2")==true) {
			map.broadcastMessage(pfF);
			map.broadcastMessage(packetsnd);
			} else if (em.getProperty("state1").equals("1")==true) {
			map.broadcastMessage(pfS);
			map.broadcastMessage(packetsnd);
			}
		map.spawnNpc(9020009, new java.awt.Point(2699,28));
		eim.schedule("likai", 1000 * 60);
		map.broadcastMessage(em.getClock(60));
			map.startMapEffect("[小试牛刀]一分钟中后退出，请尽快领取点击NPC领取奖励后退出", 5120092);
        	//em.getMapFactory().getMap(940021000).startSimpleMapEffect("1分钟中后将关闭次元世界，请尽快领取点击NPC领取奖励后退出",5120092);
			 }
			 }

function allMonstersDead(eim) {
		var map = eim.getMapInstance(940021000);
	 	eim.schedule("monsterSpawn", 1000);
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    eim.broadcastPlayerMsg(5, "欢迎来到 <szsl> 。 ");
	eim.broadcastPlayerMsg(-1, "欢迎来到 <szsl> 。 ");
		 	eim.schedule("monsterSpawn", 1000);
}

function likai(eim) {
		var map = eim.getMapInstance(940021000);
		eim.broadcastPlayerMsg(1, "次元世界已关闭，你回到了市场");
		eim.disposeIfPlayerBelow(100, 101050000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
		}
function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}