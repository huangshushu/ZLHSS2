/*
 副本：	消灭帝国主义 - 组队模式
 */
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var itemList=Array(
    Array(2439265, 550), // - 迷雾皮肤
	Array(2049387, 550), // - 18星强化
	Array(2049387, 550), // - 18星强化
	Array(2049387, 550), // - 18强
	Array(2614074, 550), // - 1亿破攻
	Array(2614074, 550), // - 1亿破攻
	Array(2614074, 550), // - 1亿破攻
	Array(2614077, 550), // - 5亿破攻
	Array(2614077, 550), // - 5亿破攻
	Array(2614077, 550), // - 5亿破攻
	Array(2435824, 550), // - 蜡笔
	Array(2435824, 550), // - 蜡笔
	Array(2434007, 550), // - FFN装备自选
	Array(2434007, 550), // - FFN装备自选
	Array(2434007, 550), // - FFN装备自选
	Array(2430746, 550), // - 黑卷自选
	Array(2430746, 550), // - 黑卷自选
	Array(2049389, 550), // - 20星
	Array(2049389, 550), // - 20星
	Array(2049389, 550), // - 20星
	Array(4036584, 550), // - 漆黑羽毛
    Array(1202023, 550), // - 真乔图腾
	Array(1202023, 550), // - 真乔图腾
	Array(1202023, 550), // - 真乔图腾
	Array(1202035, 550), // - 里卡斯图腾
	Array(1202035, 550), // - 里卡斯图腾
	Array(1202035, 550), // - 里卡斯图腾
	Array(1202031, 550), // - 小龙图腾
	Array(1202031, 550), // - 小龙图腾
	Array(1202031, 550), // - 小龙图腾
	Array(1202027, 550), // - 海丽密图腾
	Array(1202027, 550), // - 海丽密图腾
	Array(1202027, 550), // - 海丽密图腾
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(4001716, 550), // - 10亿金币
	Array(4001716, 550), // - 10亿金币
	Array(4034983, 550), // - 梦碎片
	Array(4034983, 550), // - 梦碎片
	Array(4034983, 550), // - 梦碎片
	Array(2435824, 550), // - V卷自选
	Array(2435824, 550), // - V卷自选
	Array(2435824, 550), // - V卷自选
	Array(2630754, 550), // - 特工皮肤2630754
	Array(2430460, 550),//绿色生态箱
	Array(2430460, 550),//绿色生态箱
	Array(2430460, 550),//绿色生态箱
	Array(1352824, 550), // - 龙人扶手
	Array(1352824, 550), // - 龙人扶手
	Array(1352824, 550), // - 龙人扶手
	Array(1352236, 550), // - 火毒副手
	Array(1352236, 550), // - 火毒副手
	Array(1352236, 550), // - 火毒副手
	Array(1352296, 550), // - 标飞副手
	Array(1352296, 550), // - 标飞副手Array(1352296, 550), // - 
	Array(1352296, 550), // - 标飞副手
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(4310217, 550), // - 精华
	Array(2430470, 11) // - 神秘防具
	
);
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");//判断地图
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");
    return eim;
}

function setup(level, leaderid) {
    var eim = em.newInstance("xrb1");
	eim.setInstanceMap(865030113).resetPQ(level);
	var map = eim.setInstanceMap(865030113);
	map.resetFully();
    map.killAllMonsters(true);
    map.respawn(false);
	mobid = 9833674;
    mob = em.getMonster(mobid);
	modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp()*4000000);
	modified.setOMp(mob.getMobMaxMp()*5);
	modified.setOExp(50000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	var mapForMob = eim.getMapInstance(865030113);
	mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-524, 90));
    eim.startEventTimer(1000 * 60 * 10);
    em.setProperty("state", "1");
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "[消灭帝国主义] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}


function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[消灭帝国主义] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}


function playerDead(eim, player) {
}




function playerRevive(eim, player) {
    var map = em.getMapFactory().getMap(101050000);
    if (map != null) {
        player.changeMap(map, map.getPortal(0));
    }
    eim.disposeIfPlayerBelow(100, 101050000);
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 865030113:
            return;
    }
	
    player.dropMessage(6, "[消灭帝国主义] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}



function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 1) {
        eim.disposeIfPlayerBelow(100, 101050000);
		if (setupTask!=null)
			setupTask.cancel(true);
        eim.dispose();
    }
    return 0;
}


function monsterValue(eim, mobid) {
    return 1;
}


function monsterKilled(eim, player, cp) {
}


function allMonstersDead(eim) {
    if (em.getProperty("state").equals("1")) {
		eim.setProperty("giftcount","0");
		roll(eim);
		eim.startEventTimer(1000 * 60 * 5);
		eim.broadcastPlayerMsg(6, "[消灭帝国主义] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在5秒钟内做出需求选择，否则将会被强制下线。");
    	//em.broadcastServerMsg(5120059, "[神话副本] 希拉已被击败，10秒后将开出宝箱。" ,true);
		var map = eim.getMapInstance(262030300);
		map.startMapEffect("[消灭帝国主义] 全部帝国主义兵已被击败，10秒后将开出宝箱。", 5120059);
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
				var notice =  "[组队 - 消灭帝国主义] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[组队 - 消灭帝国主义] 玩家 "+charName+" 放弃了掷点";
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
	var chance = Math.floor(Math.random()*550);
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
			currentItem = 2430066;
		break;
	}
	eim.setProperty("rewarditem", currentItem);
	//延迟10秒打开ROLL点NPC
	setupTask = em.schedule("openRollNpc", 500 * 10 * 1, eim);
}

function openRollNpc(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(9073009);
    }
	//10秒后继续ROLL点
	setupTask = em.schedule("roll", 500 * 10 * 1, eim);
}

function EndThisBattle(eim) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[组队 - 消灭帝国主义] \r\n\r\n恭喜消灭帝国主义成功！");
    }
	//em.broadcastYellowMsg("[神话副本] 挑战结束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
	if (setupTask!=null)
		setupTask.cancel(true);
	eim.dispose();
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
	if (setupTask!=null)
		setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}


function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
}


function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {}