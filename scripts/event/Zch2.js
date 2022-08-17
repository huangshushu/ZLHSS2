var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var itemList=Array(
	
	Array(5750002, 300),  //星岩魔方
	Array(5750002, 300),  //星岩魔方
	Array(2048749, 400),  //永远的涅槃火焰
	Array(2048749, 400),  //永远的涅槃火焰
	Array(2048749, 400), //永远的涅槃火焰
	Array(1182017, 1), //黄金修笔德曼
	Array(1182017, 2), //黄金修笔德曼
	//Array(2436664, 300),  //6W点券宝箱 
	//Array(2022552, 300),  //500枫叶宝箱
	Array(2435824, 600), //V
	Array(2435824, 600), //白医
	Array(2439919, 100), //究极黑暗卷
	Array(2049389, 100), //20星
	Array(2614057, 600), //千万突破
	Array(2614057, 600), //千万突破
	Array(2614005, 300), //千万突破
	Array(2614005, 300), //千万突破
	Array(2049388, 400), //19星
	Array(4310144, 200), //最高贝材料
	Array(2049388, 400), //19星
	Array(2430210, 500), //红包
	Array(2430210, 500), //红包


	Array(4031473, 50), //异界钥匙
	Array(1132247, 150), //漩涡腰带
	Array(1032224, 50), //漩涡耳环1012438	漩涡文身	1022211	漩涡眼镜1122269	漩涡吊坠
	Array(1012438, 50), //
	Array(1022211, 50), //
	Array(1122269, 50), //吊坠
    Array(1004075, 300), //海神王冠
	Array(1162035, 300), //校长
	Array(4032398, 300), //V卷自选
	Array(1672069, 50), //女武神之心
	Array(1402224, 200), //柳德之剑 
	Array(2049323, 100), //无损 
	Array(4032398, 500), //1022232 - 出席图章
	Array(1182087, 50) //1182087 - 水晶幸运徽章
);

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zch2");
    var map = eim.setInstanceMap(610030600);
    map.resetFully();
    eim.getMapFactoryMap(610030600).killAllMonsters(false);
    var mob = em.getMonster(8950000);//激光
    modified = em.newMonsterStats();
    modified.setOHp(700000000000);
    mob.setHp(88800000888);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,276)); 




    for(var i = 8220022; i <= 8220026; i++){
    var mob = em.getMonster(i);
	 modified = em.newMonsterStats();
	    modified.setOHp(100000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(95);      //减伤百分比
        mob.getStats().setMDRate(95);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(610030600);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,276));
    }

    eim.schedule("summonFall", 3000);
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(25 * 60 * 1000); //15����
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 610030600) {
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
		eim.broadcastPlayerMsg(6, "[复仇之战] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在10秒钟内做出需求选择，否则将会被强制下线。");
		var map = eim.getMapInstance(610030600);
		map.startMapEffect("[复仇之战] 已通关，10秒后将开出宝箱。", 5121040);
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
				var notice =  "[复仇之战] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[复仇之战] 玩家 "+charName+" 放弃了掷点";
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
	if ((count*1)>20) {
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
		case 15:
		case 16:
		case 17:
			currentItem = 2049025;
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
        eim.getPlayers().get(i).dropMessage(1, "[复仇之战] 挑战成功！");
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
function summonFall(eim) {//
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 3000;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(8, 0x30, 0x33);//斯乌地图特效
        eim.schedule("summonFall", time);
    }
}