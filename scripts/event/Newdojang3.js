/*  
 *  
 *  热血道场第一阶

 *  
 */
//自定义复活次数

var mobid;
var mob;
var modified;
var MaxRandom;
var reviveCount = 5;
var TimeA = 10 * 60 * 1000;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "true");
    var eim = em.newInstance("Newdojang3");
    var map = eim.setInstanceMap(925070200);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(925070200);

	 	if (em.getProperty("state").equals("1")==true){

    		for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(9601010);
	    modified = em.newMonsterStats();
	    modified.setOHp(5000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 800,8));

			}
			map.startMapEffect("~~~~~~~~~~唧唧~~~~~~~~~~", 5120031);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");

			/*
	
    var mob = em.getMonster(i);
	    modified = em.newMonsterStats();
	    modified.setOHp(65000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(95);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(706041715);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(162,95));
	*/


		 } else if (em.getProperty("state").equals("2")==true) {//宋达
         	var overrideStats = em.newMonsterStats();
    		var hprand = 200000;//一万亿
         	for (var i = 0; i < 1; i++) {

         	var mob = em.getMonster(9601008);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,7)); //刷出这个
			}



		        
			map.startMapEffect("不管你是谁,你都别想活着出去!!", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		} else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 3; i++) {
         	var mob = em.getMonster(9601009);//怪物 小怪8800116
         	var hprand = 1010500000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("在下阿狼,有何贵干!!??", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "4");
		} else if (em.getProperty("state").equals("4")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9601011);//怪物 小怪8800116
         	var hprand = 10000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(450,7)); //刷出这个怪物
		        }
			map.startMapEffect("曾经有份真挚的感情摆在我面前..........", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "5");
		} else if (em.getProperty("state").equals("5")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9601011);//怪物
         	var hprand = 400000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,7)); //刷出这个怪物
		        }
			map.startMapEffect("嗞~~~~~~~~~~~~~~~~~~~~~~~~~", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "6");
		} else if (em.getProperty("state").equals("6")==true) {
         	var overrideStats = em.newMonsterStats();
    		
         	var mob = em.getMonster(9601012);//怪物
         	var hprand = 50000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,7)); //刷出这个怪物
		        
			map.startMapEffect("你这是自寻死路!!!!!", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "7");
		} else if (em.getProperty("state").equals("7")==true) {
         	var overrideStats = em.newMonsterStats();
    		
         	var mob = em.getMonster(9601012);//怪物
         	var hprand = 40000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,7)); //刷出这个怪物
		        
			map.startMapEffect("没想到,你竟然能坚持到这里,接招!!", 5120031);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "8");
		
		 	} else if (em.getProperty("state").equals("8")==true) {
		map.startMapEffect("闯关成功! 期待你下一次挑战", 5120031);
		eim.schedule("openRollNpc", 1000 * 5);
		eim.schedule("EndThisBattle", 1000 * 15);
		map.broadcastMessage(em.getClock(120));
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(925070200);
		em.getMapFactory().getMap(925070200).startMapEffect("欢迎来到道场第三关!", 5120031);
		eim.schedule("monsterSpawn", 7000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(925070200);
    	eim.setProperty("HPstate", "-1");
	
	 	eim.schedule("monsterSpawn", 6000);
	
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 925070200) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 925020001);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

/*function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
	var map = eim.getMapInstance(925070200);
	map.startMapEffect("[道场1阶] 已通关 即将发放奖励 ", 5121000);
	
}*/

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(101050000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function openRollNpc(eim) {//领奖励和结算功能   setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(0, "道场奖励3");
		eim.getPlayers().get(i).setPQLog("道场三阶");
    }
	//10秒后继续ROLL点
}

function EndThisBattle(eim) {//结束离开功能
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[道场三阶] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 925020001);
	if (setupTask!=null)
		setupTask.cancel(true);
	eim.dispose();
}
function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}