var mapId = 350160240;
var hprand = Math.floor(Math.random() * 5)+15000;//大-小;

var bosshp = 200000000000000;

//自定义复活次数
var reviveCount = 30;

function init() {
    em.setProperty("state", "0");
	em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(level,eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("state1", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossDMA_EASY");
    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.schedule("beginQuest", 1000);
    eim.schedule("pf", 1000 * 60 * 3);
	
	eim.schedule("summonFall", 5000);    
	eim.setProperty("HPstate", "1");
	
    eim.startEventTimer(60 * 1000 * 60);//60分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);//地图复活次数
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();//扣除复活次数
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105300303);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 350160240) {
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

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function monsterValue(eim, mobid) {
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
    //if (em.getProperty("balrogState").equals("1") && eim.getMapInstance(0).getMonsterById(8830000) == null) {
    //    eim.getMapInstance(0).killMonster(8830001);
    //    eim.getMapInstance(0).killMonster(8830002);
    //}
    if (mobid ==8880101) {
		eim.getMapInstance(0).spawnNpc(9000056, new java.awt.Point(734, 17));
			eim.setProperty("Name", "[普通] 黛米安");
			eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
			var TimeA = 3600000;
			eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
			eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
			openNpc(eim, 1540008, "TimCareU");
    }
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
			
		var map = eim.getMapInstance(350160240);//setInstanceMap
		eim.disposeIfPlayerBelow(100, 100000000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(350160240);

	 	if (em.getProperty("state").equals("1")==true){

	        var hprand = Math.floor(Math.random() * 1)+50;//大-小血量！
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {

         	var mob = em.getMonster(8950000);//怪物
         	
            //eim.broadcastPlayerMsg(-6,"巨大黑暗灵魂 HP 检测 "+hprand+"");//检测怪物血量
         	overrideStats.setOHp(1000000000000);
         	overrideStats.setOExp(50000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(1000000000000);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(833,16)); //刷出这个
			}
			map.startMapEffect("请尽快消灭X光线！戴米安将会出来复仇！", 5120116);
			eim.schedule("summonFall", 5000);    
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");
		 } else if (em.getProperty("state").equals("2")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880100);//怪物
         	var hprand = 4039110001000;
         	var EXPrand = 50000;
         	overrideStats.setOHp(3000000000000);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(3000000000000);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(833,16)); //刷出这个怪物
		        }
			map.startMapEffect("戴米安的第一形态出现了！", 5120116);
			
			eim.schedule("summonFall", 3000);    
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		 } else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880101);//怪物
         	var hprand = 6039110001000;
         	var EXPrand = 100000;
         	overrideStats.setOHp(6000000000000);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(6000000000000);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(693,16)); //刷出这个怪物
		        }
			map.startMapEffect("戴米安的最终形态出现了!!!!!!!!", 5120116);
			eim.schedule("summonFall", 1500);    
			eim.setProperty("HPstate", "1");

			//eim.getMapInstance(0).spawnNpc(9000056, new java.awt.Point(734, 17));
               em.setProperty("state", "4");
		 	} else if (em.getProperty("state").equals("4")==true) {
		map.startMapEffect("[伟大的勇者，你是英雄的骄傲~你可以自动传送回市场/也可以从左边离开~", 5120116);
		eim.schedule("likai", 1000 * 120);
		map.broadcastMessage(em.getClock(120));
        	//em.getMapFactory().getMap(350160240).startSimpleMapEffect("1分钟中后将关闭次元世界，请尽快领取点击NPC领取奖励后退出",5120093);
			}
			 }

function allMonstersDead(eim) {
		var map = eim.getMapInstance(350160240);
    		eim.setProperty("HPstate", "-1");
	 		eim.schedule("monsterSpawn", 1000);
		}

function beginQuest(eim) {
		var map = eim.getMapInstance(350160240);
		em.getMapFactory().getMap(350160240).startMapEffect("10秒后:将出现巨大X光线将出现!请尽快消灭他！戴米安将会出来复仇", 5120116);
		eim.schedule("monsterSpawn", 9000);
		}



function likai(eim) {
		var map = eim.getMapInstance(350160240);
		eim.disposeIfPlayerBelow(100, 100000000);
		em.setProperty("state", "0");
		em.setProperty("state1", "0");
		em.setProperty("leader", "true");
		}


function summonFall(eim) {//
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 3000;
    if (state > 0) {
		
	var mobid = Array(8950103, 8950104, 8950105, 8950107);

    var map;
    map = eim.getMapInstance(0);
    var mob1 = em.getMonster(mobid[0]);
    mob1.setStance(2);
    var mob2 = em.getMonster(mobid[1]);
    var mob3 = em.getMonster(mobid[2]);
    var mob4 = em.getMonster(mobid[3]);
    mob4.setStance(2);
    if (map.getNumMonsters() < 2) {
        map.spawnMonsterWithEffect(mob1, -2, new java.awt.Point(226, 27));
        map.spawnMonsterWithEffect(mob3, -2, new java.awt.Point(1321,27));
        map.spawnMonsterWithEffect(mob4, -2, new java.awt.Point(1321,27));
    }


        var map = eim.getMapInstance(0);
        map.obtacleFall(8, 1, 8);//暴君地图特效
        //map.obtacleFall(3, 0x30, 0x33);//斯乌地图特效
        eim.schedule("summonFall", time);
    }
}


function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}
function monsterDrop(eim, player, mob) { }
function pickUpItem(eim, player, itemID) {}
function monsterKilled(eim, player, mobID) {
    // 可留空，主要处理怪物死亡后的逻辑代码
}