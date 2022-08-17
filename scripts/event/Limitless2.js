
var EventDataBase;
var Times = 0;
var GiftTimes = 0;
var charid = 0;
//自定义复活次数
var reviveCount = 5;
var MobList =
        Array(
                9500180, // - 闹钟王
				8220003, // - 大海兽
				9400121,//女老板
				8300007, // - 御龙魔
				6220000,//多尔
				//8810100,//进阶黑龙
				8145200,//斯卡里昂
                6300005, // - 僵尸蘑菇王
				8850009, // -胡克
				8850008, // - 
				8850007, // - 
                8850006, // - 
                9303101, // - 暴君
                9300012,//阿里杀了
                9500174,//火焰龙
                8145100,//塔尔加
				9300468,//欲望
				8180001,//天鹰
                9500168, // -绿水
				8220010,//杜纳丝
				8220012,//生化魔女
				8220011,//欧拉拉
                8220009 //小吃店
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
    var eim = em.newInstance("Limitless2");
    var map = eim.setInstanceMap(861000500);
    eim.startEventTimer(1000 * 60 * 3);
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
    eim.broadcastPlayerMsg(1, "欢迎来到 <求生之路>!!\r\n现在是第" + (Times + 1) + "关！\r\n 每通关1层后可获得大量奖励! ");
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
                player.openNpc(2060103,"wuxianhuoli2");
            }
        }
        eim.startEventTimer(1000 * 60 * 10);//10 min 重置时间
        eim.broadcastPlayerMsg(-1, "[求生之路] 现在是第" + (Times + 1) + "关！ 你有3分钟的时间消灭怪物! ");

    }
    var mobid = MobList[Math.floor(Math.random() * MobList.length)];
    var mob = em.getMonster(mobid);
	mob.getStats().setChange(true);
	mob.changeLevel(240);
 if (Times <= 10){ //第一关BOSS血量
		mob.getChangedStats().setOHp(40000000000 * 0.7 +(Times*10000000000* 0.5 ));
		mob.setHp(40000000000 * 0.7 +Times*10000000000 * 0.5 );
    }else if (Times > 10 && Times <= 20){  //第二关BOSS血量 
		mob.getChangedStats().setOHp(90000000000 * 0.7 +(Times*10000000000 * 0.8 ));
		mob.setHp(90000000000 * 0.7  +Times*10000000000* 0.8 );
    }else if (Times > 20 && Times <= 30){ //第二关BOSS血量

		mob.getChangedStats().setOHp(100000000000 * 0.6 +(Times*10000000000 * 1.1 ));
		mob.setHp(100000000000 * 0.6 +Times*10000000000 * 1.1 );

		 }else if (Times > 30 && Times <= 40){ //第三关BOSS血量
		mob.getChangedStats().setOHp(100000000000 * 0.6 +(Times*20000000000 * 1.2 ));
		mob.setHp(100000000000 * 0.6 +Times*20000000000 * 1.2 );
		 }else if (Times > 40 && Times <= 50){ //第四关BOSS血量
		mob.getChangedStats().setOHp(200000000000 * 0.6 +(Times*150000000000 * 1.5 ));
		mob.setHp(200000000000 * 0.6 +Times*150000000000 * 1.5 );
		 }else if (Times > 50 && Times <= 60){ //第四关BOSS血量
		mob.getChangedStats().setOHp(400000000000 * 0.7 +(Times*2000000000000 * 1.8 ));
		mob.setHp(400000000000 * 0.7 +Times*2000000000000 * 1.8 );
		 }else if (Times > 60 && Times <= 70){ //第四关BOSS血量
		mob.getChangedStats().setOHp(400000000000 * 0.7 +(Times*200000000000 * 2.1 ));
		mob.setHp(400000000000 * 0.7 +Times*200000000000 * 2.1 );
		 }else if (Times > 70 && Times <= 80){ //第四关BOSS血量
		mob.getChangedStats().setOHp(500000000000 * 0.7 +(Times*3000000000000 * 2.1 ));
		mob.setHp(500000000000 * 0.7 +Times*3000000000000 * 2.1 );
		 }else if (Times > 80 && Times <= 90){ //第四关BOSS血量
		mob.getChangedStats().setOHp(600000000000 * 0.7 +(Times*5000000000000 * 2.4 ));
		mob.setHp(600000000000 * 0.7 +Times*5000000000000 * 2.4 );
		 }else if (Times > 90 && Times <= 100){ //第四关BOSS血量
		mob.getChangedStats().setOHp(1000000000000 * 0.7 +(Times*1010500000000 * 2.4 ));
		mob.setHp(1000000000000 * 0.7 +Times*1010500000000 * 2.4 );
    }else{ //其余关卡BOSS血量
		mob.getChangedStats().setOHp(150000000000000 * 0.7 +(Times*12000000000000 * 2.7 ));
		mob.setHp(150000000000000 * 0.7 +Times*12000000000000 * 2.7 );
	}
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(861000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(687, 32));
}

function playerDead(eim, player) {
}


function scheduledTimeout(eim) {
    em.setProperty("started", "false");
	em.setProperty("Times", "0");
		 eim.disposeIfPlayerBelow(100, 101050000);

   
}

function changedMap(eim, player, mapid) {
    if (mapid == 861000500) {
        return;
    }
	em.setProperty("Times", "0");
    em.setProperty("started", "false");
    eim.unregisterPlayer(player);
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
			player.openNpc(2060103,"wuxianhuoli2");
		}
    em.setProperty("Times",""+(parseInt(em.getProperty("Times"))+1));
	Times = parseInt(em.getProperty("Times"));
    GiftTimes++;
    //UpDateData.close();
    //conn.close();
    eim.broadcastPlayerMsg(-1, "[求生之路] 消灭了怪物！请等待4秒进入下一关！");
    eim.startEventTimer(1000 * 5);//10 min
    em.schedule("SpwnMobForPlayer", 1000 * 4, eim);//10秒后传送
}

function cancelSchedule() {
}

