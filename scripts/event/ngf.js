var mapId = 749060212;
var item = Array(4000187,4000188); 

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);//初始化地图
    map.resetFully();//重置这张地图里面的所有东西
    //var mobid = mob1[Math.floor(Math.random() * mob1.length)];//取得一个随机的怪物ID
    var mob = 9500554; //假面绅士
	
    var overrideStats = Packages.server.life.OverrideMonsterStats();//获取怪物的属性对象
    var hprand = 50000000000;//初始化怪物的血量
    overrideStats.setOHp(hprand);//设置怪物的HP值
    overrideStats.setOExp(3000000000);//设置怪物的经验
    overrideStats.setOMp(20000000);//设置怪物的MP值
	
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
	var pointx = point[Math.floor(Math.random() * point.length)];//取得一个随机的X坐标
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-276, 97)); //刷出这个怪物
    eim.startEventTimer(1000 * 60 * 45); 
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
    if (mapid != 749060212) {
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
            var randitem = Math.floor(Math.random() * item.length);
            map.spawnAutoDrop(item[randitem], chr.getPosition());
        }
    }
}

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}