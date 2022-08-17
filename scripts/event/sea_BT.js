/*  修彼得曼
 *  
 *  航海副本

 *  
 */


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


function setup(eim, leaderid) {
    em.setProperty("state", "1");//step1
    em.setProperty("leader", "true");
    var eim = em.newInstance("sea");
    var map = eim.setInstanceMap(865010004);
    map.resetFully();
   ////////基础设置完毕////////////
   eim.schedule("beginQuest", 3000);//3秒后开启副本
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function monsterSpawn(eim) {
	 	var map = eim.getMapInstance(865010004);

	 	if (em.getProperty("state").equals("1")==true){

    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(6130208);
	    modified = em.newMonsterStats();
	    modified.setOHp(2000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 30, 200))

			}
			map.startMapEffect("我相信勇士你. 請擊退克鲁吧", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "2");
		} else if (em.getProperty("state").equals("2")==true) {//
         	var overrideStats = em.newMonsterStats();
    		var hprand = 5000000000;//
         	for (var i = 0; i < 15; i++) {

         	var mob = em.getMonster(9390815);//怪物
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(5000000);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200)) //刷出这个
			}
			map.startMapEffect("額啊啊. 船長!!大事不好了, 海盜團員正在攻擊我們的船.", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "3");
			
		} else if (em.getProperty("state").equals("3")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(6130208);//怪物 小怪8800116
         	var hprand = 1010500000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200));
		        }
			map.startMapEffect("我相信勇士你. 請擊退克鲁吧", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "4");
		} else if (em.getProperty("state").equals("4")==true) {//暗礁
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390802);//暗礁
         	var hprand = 1101050000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(745, 455));
		        }
			map.startMapEffect("在我們的航海圖上沒有暗礁呢······它是什麼時候出現的.", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "5");
		} else if (em.getProperty("state").equals("5")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(6130208);//怪物
         	var hprand = 10000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200));
		        }
			map.startMapEffect("克鲁的聲音真是動聽。我的意識漸漸變得模糊。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "6");
		} else if (em.getProperty("state").equals("6")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9500487);//怪物
         	var hprand = 20000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200));
		        }
			map.startMapEffect("海盗王巴尔啵啵啵啵啵啵啵啵啵啵撒来了。", 5121036);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "7");
		} else if (em.getProperty("state").equals("7")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390802);//暗礁
         	var hprand = 25000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(745, 455));
		        }
			map.startMapEffect("小心..............暗礁又出现了", 5121036);
			
			eim.setProperty("HPstate", "1");
			
			em.setProperty("state", "8");
		} else if (em.getProperty("state").equals("8")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9390815);//怪物
         	var hprand = 30000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("它有著鋒利的趾甲·······你要小心不要受傷啊。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "9");
		} else if (em.getProperty("state").equals("9")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9303108);//怪物
         	var hprand = 40000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("你惹怒了毛莫，他曾经也是个海盗头子！！", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "10");
			} else if (em.getProperty("state").equals("10")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9420539);//怪物
         	var hprand = 60000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("暴力熊........也加入了海盗团！", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "11");
			} else if (em.getProperty("state").equals("11")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9390800);//怪物
         	var hprand = 10105000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("普赛依海盗团，来自日照充足的瓦坎达", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "12");
			} else if (em.getProperty("state").equals("12")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9390815);//怪物
         	var hprand = 100000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("它有著鋒利的趾甲·······你要小心不要受傷啊。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "13");
			} else if (em.getProperty("state").equals("13")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390826);//珊瑚礁
         	var hprand = 10000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(851, 455));
		        }
			map.startMapEffect("船長,請你處理掉珊瑚礁吧。只要除去那珊瑚礁,我們就可以更快達到目的地了。。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "14");
			} else if (em.getProperty("state").equals("14")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(6400009);//怪物
         	var hprand = 1000000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("这...蝙蝠怪!为什么会出现在我们的船上!!!", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "15");
			} else if (em.getProperty("state").equals("15")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390859);//海龙王
         	var hprand = 500000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(690, 454));
		        }
			map.startMapEffect("雖然我是聽說過有水龍······它開始攻擊了。請小心!!!", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "16");
			} else if (em.getProperty("state").equals("16")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390802);//怪物
         	var hprand = 300000000000;//
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(843, 455));
		        }
			map.startMapEffect("消滅暗礁最簡單的方法是.....啊,我想不起來了。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "17");
			} else if (em.getProperty("state").equals("17")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 15; i++) {
         	var mob = em.getMonster(9410859);//怪物
         	var hprand = 2000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200));
		        }
			map.startMapEffect("来自外太空的海盗,哈哈,只不过是徒有虚名罢了。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "18");
			} else if (em.getProperty("state").equals("18")==true) {
         	var overrideStats = em.newMonsterStats();
         	var mob = em.getMonster(9390867);//深海巨妖
         	var hprand = 2000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	 map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(396, 484));
			 
			var mob = em.getMonster(9390835);//触手
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(63, 455));
		        
			map.startMapEffect("你見過那麼大的章魚嗎? 這是我有生以來見過最大的章魚了。。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "19");
			} else if (em.getProperty("state").equals("19")==true) {
         	var overrideStats = em.newMonsterStats();
         	var mob = em.getMonster(9390867);//深海巨妖
         	var hprand = 7000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	 map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(396, 484));
			 
			var mob = em.getMonster(9390835);//触手
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(63, 455));
		        
			map.startMapEffect("船長,請把它擊退吧。拜託你了。 就全交給船長了。", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "20");
			} else if (em.getProperty("state").equals("20")==true) {
         	var overrideStats = em.newMonsterStats();
    		for (var i = 0; i < 1; i++) {
         	var mob = em.getMonster(9390868);//怪物
         	var hprand = 20000000000000;
         	var EXPrand = 5000000;
         	overrideStats.setOHp(hprand);
         	overrideStats.setOExp(EXPrand);
         	overrideStats.setOMp(200000);
         	mob.setOverrideStats(overrideStats);
         	mob.setHp(hprand);
         	eim.registerMonster(mob);
         	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(690, 454));
		        }
			map.startMapEffect("辛苦了,船长,带领你的船员迎接最后的挑战吧!!!", 5121036);
			eim.setProperty("HPstate", "1");
			em.setProperty("state", "21");
			
		 	} else if (em.getProperty("state").equals("21")==true) {
		map.startMapEffect("航海王很轻松吧！请领取奖励吧！！！", 5121036);
		eim.schedule("openRollNpc", 1000 * 5);
		eim.schedule("EndThisBattle", 1000 * 15);
		map.broadcastMessage(em.getClock(120));
			}
}


function beginQuest(eim) {//开始步骤
		var map = eim.getMapInstance(865010004);
		em.getMapFactory().getMap(865010004).startMapEffect("欢迎来到困难航海王副本!", 5121036);
		eim.schedule("monsterSpawn", 10000);
		}
function allMonstersDead(eim) {//每波怪物死亡后执行!!
		var map = eim.getMapInstance(865010004);
    	eim.setProperty("HPstate", "-1");
	
	 	eim.schedule("monsterSpawn", 10000);
	
		}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);//
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 865010004) {
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

function openRollNpc(eim) {//领奖励和结算功能   setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
	for (var i = 0; i < eim.getPlayerCount(); i++) {

    }

}

function EndThisBattle(eim) {//结束离开功能
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(0, "kunnanhanghaiwang");
        eim.getPlayers().get(i).dropMessage(1, "[困难航海王] 挑战成功！");
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