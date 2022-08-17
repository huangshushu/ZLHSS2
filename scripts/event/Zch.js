/* 
 * ����Ƥ����
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var TimeA = 20 * 60 * 1000;
var itemList=Array(
	Array(4001715, 100), //一亿金币
	Array(5062024, 300),  //终极魔方
	Array(5062024, 300),  //终极魔方
	Array(2432297, 100),  //贡献度100
	Array(2432297, 100),  //贡献度100
	Array(2432297, 100),  //贡献度100
	Array(5062024, 300),  //三角魔方
	Array(2614069, 100),  //5000万极限突破石
	Array(2614074, 100),  //1亿极限突破石
	Array(2435467, 300),  //永远的涅槃火焰
	Array(2435467, 300),  //永远的涅槃火焰
	Array(2435467, 300), //永远的涅槃火焰
	Array(2614057, 500), //千万
	Array(2614077, 50), //5亿极限突破石
	Array(2614057, 1000), //千万
	Array(2615043, 100),  //V饰品攻击力卷轴 
	Array(2615044, 100),  // V饰品魔力卷轴
	Array(2614005, 500),  //百万
	Array(2614005, 600),  //
	Array(2614005, 600),  //
	Array(2049371, 600),  //17星
	Array(2049385, 600),  //16星
	Array(4032398, 500),  //出席
	Array(4032398, 500),  //出席
	Array(1212115, 50), //埃苏莱布斯双头杖
	Array(1222109, 50), //埃苏莱布斯灵魂手铳
	Array(1232109, 50), //埃苏莱布斯亡命剑
	Array(1402251, 50), //埃苏莱布斯宽大刀
	Array(1242116, 50), //埃苏莱布斯能量剑
	Array(1242120, 50), //埃苏莱布斯能量剑
	Array(1262017, 50), //埃苏莱布斯ESP限制器
	Array(1302333, 50), //埃苏莱布斯军刀
	Array(1312199, 50), //埃苏莱布斯战斧
	Array(1322250, 50), //埃苏莱布斯战锤
	Array(1332274, 50), //埃苏莱布斯屠龙斩
	Array(1342101, 50), //埃苏莱布斯之刃
	Array(1362135, 50), //埃苏莱布斯折叠手杖
	Array(1372222, 50), //埃苏莱布斯短杖
	Array(1382259, 50), //埃苏莱布斯长杖
	Array(1412177, 50), //埃苏莱布斯大斧
	Array(1422184, 50), //埃苏莱布斯大锤
	Array(1432214, 50), //埃苏莱布斯穿透矛
	Array(1442268, 50), //埃苏莱布斯巨灵开山斧
	Array(1452252, 50), //埃苏莱布斯弓
	Array(1472261, 50), //埃苏莱布斯复仇斗拳
	Array(1462239, 50), //埃苏莱布斯弩
	Array(1482216, 50), //埃苏莱布斯拳甲
	Array(1492231, 50), //埃苏莱布斯枪
	Array(1522138, 50), //埃苏莱布斯双弩枪
	Array(1532144, 50), //埃苏莱布斯大炮
	Array(1582017, 50), //埃苏莱布斯雷神
	Array(1552110, 50), //埃苏莱布斯扇子
	Array(1252093, 50), //埃苏莱布斯魔法棒
	Array(1542108, 50), //埃苏莱布斯武士刀
	Array(2435824, 50), //V卷自选
	Array(1672069, 3), //女武神之心
	Array(4310144, 100), //最高贝觉醒
	Array(1382235, 15), //阿丽莎的光辉
	Array(1402180, 15), //解放的凯瑟立案 
	Array(1402224, 100), //柳德之剑 
	Array(2049323, 600), //无损 
	Array(2435824, 100),				//V卷自选
    Array(2436019, 300),                //星星5000
    Array(2436019, 300),                //星星5000
    Array(2436019, 300),                //星星5000
    Array(2436019, 300),                //星星5000
	Array(2436019, 300), //星星5000
    Array(2433602, 500),                //X卷自选
    Array(2433602, 500),                //X卷自选
    Array(2433602, 500),                //X卷自选
    Array(2430558, 100),                //阿尼的箱子
    Array(2430558, 100),                //阿尼的箱子
    Array(2430558, 100),                //阿尼的箱子
    Array(2430558, 100),                //阿尼的箱子
    Array(2430558, 100),                //阿尼的箱子
    Array(2430558, 100),                //阿尼的箱子
	Array(2049371, 300), //17x
	Array(2049371, 300), //
	Array(1032223, 500), //最高耳环
	Array(1132246, 500), //最高腰带
	Array(2436537, 500), //50积分
	Array(2433654, 500), //星星500
	Array(2433654, 500), //
    Array(2435467, 400), //永远的涅槃火焰
	Array(2435467, 400) //永远的涅槃火焰
);

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Zch");
    var map = eim.setInstanceMap(706041715);
    map.resetFully();
    eim.getMapFactoryMap(706041715).killAllMonsters(false);
    var mob = em.getMonster(8950000);//激光
    modified = em.newMonsterStats();
    modified.setOHp(888888);
    mob.setHp(888888);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(162,95)); 




    for(var i = 9601013; i <= 9601014; i++){
    var mob = em.getMonster(i);
	 modified = em.newMonsterStats();
	    modified.setOHp(500000000000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(95);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
		var mapForMob = eim.getMapInstance(706041715);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(162,95));
    }

    eim.schedule("summonFall", 3000);
    eim.setProperty("HPstate", "1");
   eim.startEventTimer(TimeA);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
	 eim.setProperty("Name", "[ 困 难 ] 龙虎");
     eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041715) {
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
		eim.broadcastPlayerMsg(6, "[灭虎屠龙] 10秒后开启宝箱，掷点时请勿进行其他操作，并且需要在10秒钟内做出需求选择，否则将会被强制下线。");
		var map = eim.getMapInstance(706041715);
		map.startMapEffect("[灭虎屠龙] 已通关，10秒后将开出宝箱。", 5121000);
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
				var notice =  "[龙虎争霸] 玩家 "+charName+" 掷出了 "+eim.getProperty("charid_"+charId)+"点";
				if ((eim.getProperty("charid_"+charId)*1)==0) {
					notice =  "[龙虎争霸] 玩家 "+charName+" 放弃了掷点";
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
        eim.getPlayers().get(i).dropMessage(1, "[灭虎屠龙] 挑战成功！");
    }
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
        map.obtacleFall(12* state + 1, 1, 8);//暴君地图特效
        map.obtacleFall(8, 0x30, 0x33);//斯乌地图特效
        eim.schedule("summonFall", time);
    }
}