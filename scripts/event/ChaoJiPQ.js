var mapId = 910510000;
var item = Array(2340000,2000005,4006001,4006000,4004000,4004001,4004002,4004004,4004003); //稀有点装
var yp = Array(1,2,3,4,4,3,4,5,4,1); //正义币

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();

    var mob = em.getMonster(9300285);//蜗牛王
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    //var hprand = 100000000;
	overrideStats.setOHp(250000000);
    overrideStats.setOExp(10000000);
    overrideStats.setOMp(2000000);
    mob.setOverrideStats(overrideStats);
	mob.setHp(250000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(668,-10)); //刷出这个怪物
	
	for(var i = 0; i < 2; i++){
    var mobA = em.getMonster(9300355);//蜗牛王
    var overrideStatsA = Packages.server.life.OverrideMonsterStats();
    //var hprandA = 100000000;
	overrideStatsA.setOHp(150000000);
    overrideStatsA.setOExp(5000000);
    overrideStatsA.setOMp(2000000);
    mobA.setOverrideStats(overrideStatsA);
	mobA.setHp(150000000);
    eim.registerMonster(mobA);
    map.spawnMonsterOnGroundBelow(mobA, new java.awt.Point(668,-10)); //刷出这个怪物
		
	}

    eim.startEventTimer(5400000); // 4 hrs
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 910510000) {
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

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
        var iter = em.getInstances().iterator();
        while (iter.hasNext()) {
            var eim = iter.next();
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                var chr = pIter.next();
                //var winner = eim.getPlayers().get(0);
                var map = eim.getMapFactory().getMap(mapId);
                var randitem = Math.floor(Math.random() * item.length);
                var randyp = Math.floor(Math.random() * yp.length);
                var toDrop = new Packages.client.inventory.Item(4001215, 0, 1);
                for (var i = 0; i < yp[randyp]; i++) {
                    //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
		//map.spawnAutoDrop(4000463,chr.getPosition());
		//map.spawnAutoDrop(4000463,chr.getPosition());4001232
                }
		map.spawnAutoDrop(4001215,chr.getPosition());
		map.spawnAutoDrop(4001232,chr.getPosition());
		var randx= Math.floor((Math.random()*2));
		var xwsj= Math.floor((Math.random()*20))+30;
		//var random1 = java.lang.Math.floor(Math.random() * 50 + 424);
		//var random2 = java.lang.Math.floor(Math.random() * 50 + 257);
                //toDrop = new Packages.client.inventory.Item(item[randitem], 0, 1);
                //map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
		map.spawnAutoDrop(item[randitem],chr.getPosition());
                map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "恭喜，干掉人偶师，获得了一些奖励"));
            }
        }
    }

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}