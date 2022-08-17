
var EventDataBase;
var Times = 0;
var GiftTimes = 0;
var charid = 0;
//自定义复活次数
var reviveCount = 5;
var MobList =
        Array(
				8880409,
				8645035,
				9305618,
				8645021,
				8880400,
				9420544,

                                9500180, // - 闹钟王
				9303090, // - 伟大的扎昆
				8810000,//黑龙
				9303085, // - 伟大的班·雷昂
				8800100,//进阶扎昆
				8810100,//进阶黑龙
				9600087,//钻机
                                9303095, // - 伟大的阿卡伊勒
				9303098, // - 伟大的希拉
				9303087, // - 伟大的品克缤
				9303092, // - 伟大的希纳斯
                                9303083, // - 伟大的蝙蝠怪
                                9303103, // - 伟大的毛莫
                                8920003,//进阶女王
                                8900001,//进阶皮埃尔
				9303159,//进阶贝伦
				9303160,//斯乌
                                9303101, // - 伟大的麦格纳斯
				9309208,//桃乐丝
				8880140//梦中的路西德
                                //8880151 //进阶路西德
                );
function init() {
    em.setProperty("started", "false");
    em.setProperty("Gift", "false");
	em.setProperty("Times", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("Limitless");
    var map = eim.setInstanceMap(910310520);
    eim.startEventTimer(1000 * 60 * 10);//10 min
    var players = map.getCharacters().iterator();
    while (players.hasNext()) {
        var player = players.next();
        eim.registerPlayer(player);
    }
    Times = 0;
    GiftTimes = 0;
    map.killAllMonsters(true);
    em.setProperty("started", "true");
    em.setProperty("Gift", "false");

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    Times = parseInt(em.getProperty("Times"));
    eim.broadcastPlayerMsg(1, "欢迎来到 <无限副本>!!\r\n现在是第" + (Times + 1) + "关！\r\n 每通关1层后可获得大量点券奖励! ");
    SpwnMobForPlayer(eim)
}

	function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(101050000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function SpwnMobForPlayer(eim) {
    if (GiftTimes != 0) {
        var map = eim.getMapInstance(0);
        var players = map.getCharacters().iterator();
        while (players.hasNext()) {
            var player = players.next();
            player.changeMap(map, map.getPortal(0));
            if ((GiftTimes % 10) == 0) {
                em.setProperty("Gift", "true");
		em.setProperty("guanka", ""+GiftTimes);
                player.openNpc(2060103,"wuxianhuoli1");
            }
        }
        eim.startEventTimer(1000 * 60 * 10);//10 min 重置时间
        eim.broadcastPlayerMsg(-1, "[无限战斗] 现在是第" + (Times + 1) + "关！ 你有10分钟的时间消灭怪物! ");

    }
    var mobid = MobList[Math.floor(Math.random() * MobList.length)];
    var mob = em.getMonster(mobid);
	mob.getStats().setChange(true);
	mob.changeLevel(240);
 if (Times <= 10){ 
		mob.getChangedStats().setOHp(92000000000  + (Times*1000000000));
		mob.setHp(92000000000+Times*1000000000 );

    }else if (Times > 10 && Times <= 20){  
		mob.getChangedStats().setOHp(192000000000  + (Times*500000000));
		mob.setHp(192000000000+Times*500000000 );

    }else if (Times > 20 && Times <= 30){ 
		mob.getChangedStats().setOHp(28101050000  +(Times*10000000000 ));
		mob.setHp(28101050000  +Times*10000000000 );

		 }else if (Times > 30 && Times <= 40){ 
		mob.getChangedStats().setOHp(38400000000000  +(Times*300000000000 ));
		mob.setHp(38400000000000 +Times*300000000000 );

		 }else if (Times > 40 && Times <= 50){ 
		mob.getChangedStats().setOHp(41010500000000  +(Times*300000000000 ));
		mob.setHp(41010500000000 +Times*3000000000000);

		 }else if (Times > 50 && Times <= 60){ 
		mob.getChangedStats().setOHp(57600000000000  +(Times*350000000000 ));
		mob.setHp(57600000000000 +Times*350000000000 );

		 }else if (Times > 60 && Times <= 70){ 
		mob.getChangedStats().setOHp(67200000000000  +(Times*400000000000 ));
		mob.setHp(67200000000000 +Times*400000000000 );

		 }else if (Times > 80 && Times <= 90){ 
		mob.getChangedStats().setOHp(76101050000000  +(Times*4500000000000 ));
		mob.setHp(76101050000000 +Times*4500000000000 );

    }else{ //其余关卡BOSS血量
		mob.getChangedStats().setOHp(100000000000000+(Times*1000000000000));
		mob.setHp(100000000000000+Times*1000000000000 );
	}
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(910310520);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3, 147));
}

function playerDead(eim, player) {
}


function scheduledTimeout(eim) {
    em.setProperty("started", "false");
	em.setProperty("Times", "0");
		 eim.disposeIfPlayerBelow(100, 101050000);

   
}

function changedMap(eim, player, mapid) {
/*   if (mapid == 910310520) {
        return;
    }


}*/
    switch (mapid) {
        case 910310520:
            return;
    }
    player.dropMessage(6, "[无限火力] 已退出挑战。");
    eim.unregisterPlayer(player);
	em.setProperty("Times", "0");
    em.setProperty("started", "false");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}

function playerDisconnected(eim, player) {
     return 0;
}

function leftParty(eim, player) {
}

function disbandParty(eim) {//组队解散后果
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
        scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    /*var conn = em.getConnection();
    var UpDateData = conn.prepareStatement("update limitlessEvent set times=? where charid = " + charid + "");
    UpDateData.setString(1, parseInt(Times) + 1);
    UpDateData.executeUpdate();//更新;*/
	var map = eim.getMapInstance(0);
	var players = map.getCharacters().iterator();
        while (players.hasNext()) {
            var player = players.next();
			player.openNpc(2060103,"wuxianhuoli1");
		}
    em.setProperty("Times",""+(parseInt(em.getProperty("Times"))+1));
	Times = parseInt(em.getProperty("Times"));
    GiftTimes++;
    //UpDateData.close();
    //conn.close();
    eim.broadcastPlayerMsg(-1, "[无限战斗] 消灭了怪物！请等待4秒进入下一关！");
    eim.startEventTimer(1000 * 5);//10 min
    em.schedule("SpwnMobForPlayer", 1000 * 4, eim);//10秒后传送
}

function cancelSchedule() {
}

