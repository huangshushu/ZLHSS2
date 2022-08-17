/*  
 *  
 *  热血道场第一阶

 *  
 */
//自定义复活次数
var reviveCount = 5;
var TimeA = 10 * 60 * 1000;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "true");
    var eim = em.newInstance("Newdojang");
    var map = eim.setInstanceMap(925070100);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(925070100);

	 	if (em.getProperty("state").equals("1")==true){

	        var hprand = 100000000000;//一千亿
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {

         	var mob = em.getMonster(9500591);//怪物小图腾
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(300-i*130,7)); //刷出这个
			}
			map.startMapEffect("请尽快消灭五只小图腾!!", 5120150);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");


		 } else if (em.getProperty("state").equals("2")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 3; i++) {
         	var mob = em.getMonster(9500592);//怪物印第安图腾
         	var hprand = 300000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("印第安图腾出现了！", 5120150);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		} else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {
         	var mob = em.getMonster(9500593);//怪物大印第安图腾
         	var hprand = 600000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("大印第安图腾出现了！", 5120150);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "4");
		} else if (em.getProperty("state").equals("4")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 4; i++) {
         	var mob = em.getMonster(9500593);//怪物大印第安
         	var hprand = 1000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("大印第安图腾又来了！", 5120150);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "5");
		} else if (em.getProperty("state").equals("5")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 3; i++) {
         	var mob = em.getMonster(9500594);//怪物印第安巨大图腾
         	var hprand = 2000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,7)); //刷出这个怪物
		        }
			map.startMapEffect("图腾越来越大了！", 5120150);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "6");
		 } else if (em.getProperty("state").equals("6")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9410191);//真乔图腾BOSS
         	var hprand = 50000000000000;
         	var EXPrand = 100000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
			

         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,7)); //刷出这个怪物
		        }
			map.startMapEffect("干掉他，他就是你的!!!!!!!!", 5120150);
			eim.setProperty("HPstate", "1");

               em.setProperty("state", "7");
		 	} else if (em.getProperty("state").equals("7")==true) {
		map.startMapEffect("闯关成功! 期待你下一次挑战", 5120150);
		eim.schedule("openRollNpc", 1000 * 5);
		eim.schedule("EndThisBattle", 1000 * 8);
		map.broadcastMessage(em.getClock(120));
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(925070100);
		em.getMapFactory().getMap(925070100).startMapEffect("10秒后 一大波图腾怪物即将来袭 请做好准备!!", 5120150);
		eim.schedule("monsterSpawn", 10000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(925070100);
    	eim.setProperty("HPstate", "-1");
	 	eim.schedule("monsterSpawn", 3000);
	
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 925070100) {
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
    eim.disposeIfPlayerBelow(100, 101050000);
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
	var map = eim.getMapInstance(925070100);
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
    var map = eim.getMapFactoryMap(925020001);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function openRollNpc(eim) {//领奖励和结算功能   setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(0, "道场奖励1");
		eim.getPlayers().get(i).setPQLog("道场一阶");
    }
	//10秒后继续ROLL点
}

function EndThisBattle(eim) {//结束离开功能
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[道场一阶] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
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