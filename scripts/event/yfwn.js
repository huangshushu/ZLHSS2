var mapId = 980000503;
var yp = Array(1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,2,3,4,5,6,7,8,9,10); //邮票

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

    var mob = em.getMonster(2220000);//红蜗牛王
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand = mob.getId()*10;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(20000000);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61,132)); //刷出这个怪物

    eim.startEventTimer(1000 * 60);
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
    if (mapid != 980000503) {
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
	var map = eim.setInstanceMap(mapId);
	if(map.getNumMonsters() !=0 ){
		xw(eim);
		map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(1, "未能成功消灭,你损失了50修为点"));
	}
    eim.disposeIfPlayerBelow(100, 101050000);
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
                var map = eim.getMapFactory().getMap(mapId);
                var randyp = Math.floor(Math.random() * yp.length);
                var toDrop = new Packages.client.inventory.Item(4002000, 0, 1);
                for (var i = 0; i < yp[randyp]; i++) {
			map.spawnAutoDrop(4002002,chr.getPosition());
                }
            }
        }
    }

function xw(eim){
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var pIter = eim.getPlayers().iterator();
		while (pIter.hasNext()) {
			var chr = pIter.next();
			if(chr.getXw()>=30){
				chr.setXw(chr.getXw()-30);
			}
			
		}
	}
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}