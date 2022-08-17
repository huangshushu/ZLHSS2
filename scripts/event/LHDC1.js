/*  
 *  
 *  传奇道场第一阶

 *  
 */
//自定义复活次数
var reviveCount = 5;
var TimeA = 10 * 60 * 1000;
var test = em.getProperty("state");
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "true");
    var eim = em.newInstance("LHDC1");
    var map = eim.setInstanceMap(706041745);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(706041745);

	 	if (em.getProperty("state").equals("1")==true){

	        var hprand = 1000000000000;//一千亿
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 5; i++) {

         	var mob = em.getMonster(9480235);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(300 -i * 130,128)); //刷出这个
			}
			map.startMapEffect("请尽快五只消灭阿提拉!!", 5120150);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");


		 } else if (em.getProperty("state").equals("2")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 3; i++) {
         	var mob = em.getMonster(9480238);//怪物
         	var hprand = 101050000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 200,128)); //刷出这个怪物
		        }
			map.startMapEffect("修罗出现了！", 5120150);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		 } else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880405);//觉醒希拉
         	var hprand = 5000000000000;
         	var EXPrand = 100000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
			

         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,128)); //刷出这个怪物
		        }
			map.startMapEffect("希拉的最终形态出现了!!!!!!!!", 5120150);
			eim.setProperty("HPstate", "1");

               em.setProperty("state", "4");
		 	} else if (em.getProperty("state").equals("4")==true) {
		map.startMapEffect("[挑战成功! 你是传奇岛的骄傲!", 5120150);
		eim.schedule("openRollNpc", 1000 * 5);
		eim.schedule("EndThisBattle", 1000 * 8);
		map.broadcastMessage(em.getClock(120));
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(706041745);
		em.getMapFactory().getMap(706041745).startMapEffect("10秒后 一大波怪物即将来袭 请做好准备!!", 5120150);
		eim.schedule("monsterSpawn", 10000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(706041745);
    	eim.setProperty("HPstate", "-1");
	 	eim.schedule("monsterSpawn", 3000);
		for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1,""+test+"");
    }
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041745) {
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
	var map = eim.getMapInstance(706041745);
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