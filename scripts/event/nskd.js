/* 
 * ����Ƥ����
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var itemList=Array(
	Array(4310027, 10), //传说
    Array(4310144, 10),  //最高贝觉醒
	Array(5062024, 200),  //三角魔方


	Array(2048749, 600),  //永远的涅槃火焰
	Array(2048749, 500),  //永远的涅槃火焰

	Array(2430558, 300),  //阿尼的箱子
	Array(2430558, 500),  //阿尼的箱子
	Array(2435824, 10), //V卷自选
	Array(2435824, 10), //V卷自选
	Array(2435824, 10), //V卷自选
	Array(2614005, 300), //百万
	Array(2614005, 300), //百万
	Array(2614005, 300), //百万



    Array(2430558, 100),                //阿尼的箱子

	Array(2049388, 50),                //19
	Array(2049388, 30),                //19
	Array(2049389, 5),                //20星
	Array(1092113, 20),                 //特米纳斯防御盾	 
    Array(1212080, 20),                 //特米纳斯启迪双头杖	 
    Array(1222075, 20),                 //特米纳斯烈焰魂手铳	 
    Array(1232075, 20),                 //特米纳斯亡命征服者	 
    Array(1242081, 20),                 //特米纳斯狙击能量剑	 
    Array(1262030, 20),                 //特米纳斯ESP限制器	 
    Array(1302290, 20),                 //特米纳斯分裂剑	 
    Array(1312166, 20),                 //特米纳斯撕裂斧	 
    Array(1322216, 20),                 //特米纳斯粉碎锤	 
    Array(1332239, 20),                 //特米纳斯徘徊刀
    Array(1342086, 20),                 //特米纳斯寂静刃	 
    Array(1362102, 20),                 //特米纳斯管弦乐手杖	 
    Array(1372189, 20),                 //特米纳斯附魔短杖	 
    Array(1382223, 20),                 //特米纳斯催眠长杖	 
    Array(1402211, 20),                 //特米纳斯压制巨剑	 
    Array(1412148, 20),                 //特米纳斯破坏大斧	 
    Array(1422153, 20),                 //特米纳斯爆破钝器	 
    Array(1432179, 20),                 //特米纳斯尖刺枪	 
    Array(1442235, 20),                 //特米纳斯战争矛	 
    Array(1452217, 20),                 //特米纳斯风暴弓
    Array(1462205, 20),                 //特米纳斯疾风弩	 
    Array(1472227, 20),                 //特米纳斯天罚拳套	 
    Array(1482180, 20),                 //特米纳斯突击指节	 
    Array(1492191, 20),                 //特米纳斯暴徒短枪	 
    Array(1522106, 20),                 //特米纳斯猛兽双弩枪	 
    Array(1532110, 20),                 //特米纳斯爆燃手炮	 
    Array(1252066, 20),                 //特米纳斯动物魔法棒	 
    Array(1542068, 20),                 //特米纳斯一文字刀	 
    Array(1552068, 20),                 //特米纳斯召唤折扇	 
    Array(1582026, 20),                 //特米纳斯爆裂铁拳
	Array(1113075, 5),                //最高级贝勒德戒指

	Array(2614057, 100), //千万
	Array(2436019, 10), //星星5000
	Array(4032398, 100)//出席章
);

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zch");
    var map = eim.setInstanceMap(867125400);
    map.resetFully();
    eim.getMapFactoryMap(867125400).killAllMonsters(false);
    var mob = em.getMonster(9600187);//年兽
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(980,98)); 




    for(var i = 9803003; i <= 9803004; i++){
    var mob = em.getMonster(i);
	 modified = em.newMonsterStats();
	    modified.setOHp(300000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(95);      //减伤百分比
        mob.getStats().setMDRate(95);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(867125400);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(10,98));
    }

    eim.setProperty("HPstate", "1");
    eim.startEventTimer(20 * 60 * 1000); //15����
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 867125400) {
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

function allMonstersDead(eim) {
    if (em.getProperty("state").equals("1")) {
		eim.setProperty("giftcount","0");
		roll(eim);
		eim.startEventTimer(1000 * 60 * 5);
		eim.broadcastPlayerMsg(6, "[年兽副本] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在10秒钟内做出需求选择，否则将会被强制下线。");
		var map = eim.getMapInstance(867125400);
		map.startMapEffect("[年兽副本] 已通关，10秒后将开出宝箱。", 5120009);
    }
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
				var notice =  "[年兽副本] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[年兽副本] 玩家 "+charName+" 放弃了掷点";
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
			currentItem = 2049116;
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
        eim.getPlayers().get(i).dropMessage(1, "[年兽副本] 挑战成功！");
    }
	//em.broadcastYellowMsg("[米纳尔森林保卫战] 挑战结束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
	if (setupTask!=null)
		setupTask.cancel(true);
	eim.dispose();
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) { }
