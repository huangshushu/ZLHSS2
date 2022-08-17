/*  
 *  
 *  传奇道场第一阶

 *  
 */
//自定义复活次数

var mobid;
var mob;
var modified;
var MaxRandom;
var reviveCount = 5;
var TimeA = 20 * 60 * 1000;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

var itemList=Array(
	Array(4001715, 100), //一亿金币

	Array(0, 0), //龙
	Array(0, 0), //龙
	Array(0, 0), //龙
	Array(2435467, 400), //永远的涅槃火焰
	Array(2435467, 400) //永远的涅槃火焰
);
function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "true");
    var eim = em.newInstance("Newdojang4");
    var map = eim.setInstanceMap(706041740);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(706041740);

	 	if (em.getProperty("state").equals("1")==true){

    		for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880500);
	    modified = em.newMonsterStats();
	    modified.setOHp(10000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 800,128));

			}
			map.startMapEffect("接受创造光之精灵的审判!", 5120170);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");




		 } else if (em.getProperty("state").equals("2")==true) {//
         	var overrideStats = em.newMonsterStats();
    		var hprand = 10000000000000;//一万亿
         	for (var i = 0; i < 2; i++) {

         	var mob = em.getMonster(8880501);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
        
         	eim.registerMonster(mob);

         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 800,128));
			}



		        
			map.startMapEffect("接受创造光暗精灵的审判!!", 5120170);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "3");
		} else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 2; i++) {
         	var mob = em.getMonster(8880418);//怪物 小怪8800116
         	var hprand = 30000000000000;//30万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 -i * 400,128)); //刷出这个怪物
		        }
			map.startMapEffect("死灵斯乌被召唤了", 5120170);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "4");
		} else if (em.getProperty("state").equals("4")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(8880414);//怪物 小怪8800116
         	var hprand = 11010500000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,128)); //刷出这个怪物
		        }
			map.startMapEffect("死灵黛米安被召唤了..........", 5120170);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "5");
		
		} else if (em.getProperty("state").equals("5")==true) {
         	var overrideStats = em.newMonsterStats();
    		
         	var mob = em.getMonster(8880502);//怪物
         	var hprand = 50000000000000;//100万亿
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,128)); //刷出这个怪物
		        
			map.startMapEffect("没想到,你竟然能坚持到这里,接招!!", 5120170);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "8");
		
		 	} else if (em.getProperty("state").equals("6")==true) {
		eim.setProperty("giftcount","0");
		roll(eim);
		eim.startEventTimer(1000 * 60 * 5);
		
		var map = eim.getMapInstance(706041715);
		map.startMapEffect("[道场4阶] 已通关，10秒后将开出宝箱。", 5121000);
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(706041740);
		em.getMapFactory().getMap(706041740).startMapEffect("欢迎来到传奇道场第4关!", 5120170);
		eim.schedule("monsterSpawn", 7000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(706041740);
    	eim.setProperty("HPstate", "-1");
	
	 	eim.schedule("monsterSpawn", 6000);
	
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041740) {
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

function roll(eim) {
	MaxRandom = 0;
	var count = eim.getProperty("giftcount");
	var rewardPlayer = null;
	//第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
	if ((count*1)>=1) {
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			var charName = eim.getPlayers().get(i).getName();
			var charId = eim.getPlayers().get(i).getId();
			//推送ROLL点信息
			for (var j = 0; j < eim.getPlayerCount(); j++) {
				var notice =  "[道场4阶] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[道场4阶] 玩家 "+charName+" 放弃了掷点";
				}
				eim.getPlayers().get(j).dropMessage(6,notice);
			}
			//不断重置最大值
			if ((eim.getProperty("charid_"+charId)*1)>MaxRandom) {
				MaxRandom = eim.getProperty("charid_"+charId);
				//置换玩家名称
				eim.setProperty("rewardplayer", charName);
				//置换玩家ID
				eim.setProperty("rewardplayerid", charId);
			} 
   		}
		for (var j = 0; j < eim.getPlayerCount(); j++) {
			//操作NPC 发放奖励
			eim.getPlayers().get(j).openNpc(1052008, "huangjinroll");
		}
	}
	for (var j = 0; j < eim.getPlayerCount(); j++) {
		//重置所有玩家ROLL点点数为零
		eim.setProperty("charid_"+eim.getPlayers().get(j).getId(),"0");
	}
	//次数+1
	eim.setProperty("giftcount", (count*1+1));
	//重新读入次数
	count = eim.getProperty("giftcount");
	count = (count*1);
	//退出战场
	if ((count*1)>10) {
		EndThisBattle(eim);
		return;
	}
	//创建几率
	var chance = Math.floor(Math.random()*600);
	//最终物品列表
	var finalItemList = Array();
	for(var m=0; m<itemList.length; m++) {
		if (itemList[m][1] >= chance) {
			finalItemList.push(itemList[m][0]);
		}
	}
	var currentItem = finalItemList[Math.floor(Math.random()*finalItemList.length)];
	switch(count) {
		case 8:
		case 9:
		case 10:
			currentItem = 5750002;
		break;
	}
	eim.setProperty("rewarditem", currentItem);
	//延迟10秒打开ROLL点NPC
	setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
}

function openRollNpc(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(9073009);
    }
	//10秒后继续ROLL点
	setupTask = em.schedule("roll", 1000 * 5 * 1, eim);
}

function EndThisBattle(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[道场四阶] 挑战成功！");
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