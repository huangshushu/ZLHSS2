importClass(Packages.java.awt.Point);

function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
	// em.worldMessage(6, "【黑魔法师】：执行init，em.getProperty(state) = " + em.getProperty("state"));//测试
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("BlackMageBattle");
	var map0 = eim.getMapFactory().getMap(450012500);
    var map = eim.setInstanceMap(450013100);
	map.resetFully();
	map.startEventTimer(300, true, true);
	map.clearOwnerList();
	map.addOwner(map0);
	map = eim.setInstanceMap(450013300);
	map.resetFully();
	map.startEventTimer(300, true, true);
	map.clearOwnerList();
	map.addOwner(map0);
	map = eim.setInstanceMap(450013500);
	map.resetFully();
	map.startEventTimer(300, true, true);
	map.clearOwnerList();
	map.addOwner(map0);
	map = eim.setInstanceMap(450013700);
	map.resetFully();
	map.startEventTimer(300, true, true);
	map.clearOwnerList();
	map.addOwner(map0);
   
	var mob1 = em.getMonster(8880500);
	mob1.setPosition(new Point(-423, 80));
	var mob2 = em.getMonster(8880501);
	mob2.setPosition(new Point(423, 80));
	var mob3 = em.getMonster(8880507);
	mob3.setPosition(new Point(-805, 80));
	var mob4 = em.getMonster(8880507);
	mob4.setPosition(new Point(805, 80));
	eim.registerMonster(mob1);
	eim.registerMonster(mob2);
	eim.registerMonster(mob3);
	eim.registerMonster(mob4);
    em.setProperty("state", "1");
	em.setProperty("stage", "0");

	
    eim.startEventTimer(18000000); // 限制时间，单位毫秒
    return eim;
}

function playerEntry(eim, player) {
    //var map = eim.getMapFactory().getMap(450013100);
	// em.worldMessage(6, "【黑魔法师】：执行playerEntry，em.getProperty(state) = " + em.getProperty("state"));//测试
	
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	if(em.getProperty("stage").equals("0")){
		var mobList = eim.getMobs();
		if(mobList != null && !mobList.isEmpty()){
			for(var i in mobList){
				map.spawnMonster(mobList[i], -2);
			}
		}
		em.setProperty("stage", "1");
	}
	
	//eim.spawnMobOnMap(8880500, 1, -423, 80, 450013100);
	//eim.spawnMobOnMap(8880501, 1, 423, 80, 450013100);
	// em.spawnMonster(8880500, -423, 80);
	// em.spawnMonster(8880500, 423, 80);
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
	// em.worldMessage(6, "【黑魔法师】：执行scheduledTimeout，em.getProperty(state) = " + em.getProperty("state"));//测试
    eim.disposeIfPlayerBelow(100, 450012500);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
	// em.worldMessage(6, "【黑魔法师】：执行changedMap，em.getProperty(state) = " + em.getProperty("state"));//测试
    if (mapid != 450013100 && mapid != 450013300 && mapid != 450013500 && mapid != 450013700) {
		eim.unregisterPlayer(player);

		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
    }
	// em.worldMessage(6, "【黑魔法师】：执行changedMap完毕，em.getProperty(state) = " + em.getProperty("state"));//测试
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
	//em.worldMessage(6, "【黑魔法师】：执行playerExit，em.getProperty(state) = " + em.getProperty("state"));//测试
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
	//em.worldMessage(6, "【黑魔法师】：执行playerExit完毕，em.getProperty(state) = " + em.getProperty("state"));//测试
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 450012500)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
	//em.worldMessage(6, "【黑魔法师】：执行allMonstersDead，state = " + em.getProperty("state") + " stage = " + em.getProperty("stage"));//测试
	
	var time = eim.getTimeLeft();
	if(em.getProperty("stage").equals("1")){
		em.worldMessage(6, "【黑魔法师】：恭喜远征队长 " + eim.getSquad("blackmage").getLeader().getName() + " 带领的队伍战胜了黑魔法师第一阶段，距离胜利又进了一步，加油！");
		//var map = eim.setInstanceMap(450013300);
		var map = eim.getMapInstance(1);
		time = map.获得剩余时钟时间();
		//em.worldMessage(6, "mapID = " + map.getId());//测试
		map.resetFully();
		var mob1 = em.getMonster(8880502);
		mob1.setPosition(new Point(3, 80));
		var mob2 = em.getMonster(8880506);
		mob2.setPosition(new Point(-773, 80));
		var mob3 = em.getMonster(8880506);
		mob3.setPosition(new Point(-384, 80));
		var mob4 = em.getMonster(8880506);
		mob4.setPosition(new Point(-7, 80));
		var mob5 = em.getMonster(8880506);
		mob5.setPosition(new Point(315, 80));
		var mob6 = em.getMonster(8880506);
		mob6.setPosition(new Point(683, 80));
		eim.registerMonster(mob1);
		eim.registerMonster(mob2);
		eim.registerMonster(mob3);
		eim.registerMonster(mob4);
		eim.registerMonster(mob5);
		eim.registerMonster(mob6);
		em.warpAllPlayer(450013100, 450013300);
		
		eim.restartEventTimer(time); // 限制时间，单位毫秒
		map.startEventTimer(time/60/1000, true, true);
		em.setProperty("stage", "2");
		//em.worldMessage(6, "更改后 em.getProperty(stage) = " + em.getProperty("stage"));//测试
		

		var mobList = eim.getMobs();
		if(mobList != null && !mobList.isEmpty()){
			for(var i in mobList){
				map.spawnMonster(mobList[i], -2);
			}
		}
		
		//em.startInstance(eim.getSquad("blackmage"), eim.getMapFactory().getMap(450013100));
	}else if(em.getProperty("stage").equals("2")){
		em.worldMessage(6, "【黑魔法师】：恭喜远征队长 " + eim.getSquad("blackmage").getLeader().getName() + " 带领的队伍战胜了黑魔法师第二阶段，距离胜利又进了一步，加油！");
		//var map = eim.setInstanceMap(450013500);
		var map = eim.getMapInstance(2);
		time = map.获得剩余时钟时间();
		//em.worldMessage(6, "mapID = " + map.getId());//测试
		map.resetFully();
		var mob1 = em.getMonster(8880503);
		mob1.setPosition(new Point(-13, 80));
		var mob2 = em.getMonster(8880511);
		mob2.setPosition(new Point(-700, 80));
		var mob3 = em.getMonster(8880511);
		mob3.setPosition(new Point(700, 80));
		
		eim.registerMonster(mob1);
		eim.registerMonster(mob2);
		eim.registerMonster(mob3);
		em.setProperty("stage", "3");
		em.warpAllPlayer(450013300, 450013500);
		eim.restartEventTimer(time); // 限制时间，单位毫秒
		map.startEventTimer(time/60/1000, true, true);
		var mobList = eim.getMobs();
		if(mobList != null && !mobList.isEmpty()){
			for(var i in mobList){
				map.spawnMonster(mobList[i], -2);
			}
		}
		//em.startInstance(eim.getSquad("blackmage"), eim.getMapFactory().getMap(450013100));
	}else if(em.getProperty("stage").equals("3")){
		em.worldMessage(6, "【黑魔法师】：恭喜远征队长 " + eim.getSquad("blackmage").getLeader().getName() + " 带领的队伍战胜了黑魔法师第三阶段，距离胜利又进了一步，加油！");
		//var map = eim.setInstanceMap(450013700);
		var map = eim.getMapInstance(3);
		time = map.获得剩余时钟时间();
		//em.worldMessage(6, "mapID = " + map.getId());//测试
		map.resetFully();
		var mob1 = em.getMonster(8880504);
		mob1.setPosition(new Point(-1, 80));
		var mob2 = em.getMonster(8644611);
		mob2.setPosition(new Point(-433, 80));
		var mob3 = em.getMonster(8644611);
		mob3.setPosition(new Point(433, 80));
		
		eim.registerMonster(mob1);
		eim.registerMonster(mob2);
		eim.registerMonster(mob3);
		em.setProperty("stage", "4");
		em.warpAllPlayer(450013500, 450013700);
		eim.restartEventTimer(time); // 限制时间，单位毫秒
		map.startEventTimer(time/60/1000, true, true);
		var mobList = eim.getMobs();
		if(mobList != null && !mobList.isEmpty()){
			for(var i in mobList){
				map.spawnMonster(mobList[i], -2);
			}
		}
		//em.startInstance(eim.getSquad("blackmage"), eim.getMapFactory().getMap(450013100));
	}else if(em.getProperty("stage").equals("4")){
		em.worldMessage(6, "【黑魔法师】：恭喜远征队长 " + eim.getSquad("blackmage").getLeader().getName() + " 带领的队伍终于战胜了邪恶的黑魔法师，解放了艾尔达，冒险岛世界终于迎来了和平！");
		eim.restartEventTimer(5*60*1000);
	}
	
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}