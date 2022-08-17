var mapId = 980000303;
var item = Array(1482085,1402096,1422067,1412066,1452112,1342035,1332131,1492086,1522017,1532017,1472123,1382105,1312066,1462100,1322097,1372085,1302153,1442117,1432087); //130装备
var item1 = Array(3061140,3061150,3061160,3061170,3061180,3061190,3061200,3061210,3061220,3061230,3061240,3061250,3061260,3061270); //C级星岩
var yp = Array(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,2,3,4,5,6,7,8,9,10); //邮票

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

    var mob = em.getMonster(9600134);//御龙魔
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand = 1000000000;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(20000000);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-61,132)); //刷出这个怪物

    eim.startEventTimer(300000); // 4 hrs
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
    if (mapid != 980000303) {
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
                //var winner = eim.getPlayers().get(0);
                var map = eim.getMapFactory().getMap(mapId);
                var randitem = Math.floor(Math.random() * item.length);
                var randitem1 = Math.floor(Math.random() * item1.length);
                var randyp = Math.floor(Math.random() * yp.length);
                var toDrop = new Packages.client.inventory.Item(4002000, 0, 1);
                for (var i = 0; i < yp[randyp]; i++) {
                    //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
		map.spawnAutoDrop(4002002,chr.getPosition());
                }
		var randx= Math.floor((Math.random()*2));
		var xwsj= Math.floor((Math.random()*20))+50;
                if(randx==1){
                //toDrop = new Packages.client.inventory.Item(item[randitem], 0, 1);
                //map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
		map.spawnAutoDrop(item[randitem],chr.getPosition());
                map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "恭喜，击败了御龙魔，获得了" + yp[randyp] + "张邮票和130装备奖励"));
		}else{
		map.spawnAutoDrop(item1[randitem1],chr.getPosition());
                map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "恭喜，击败了御龙魔，获得了" + yp[randyp] + "张邮票和一颗C级的星岩石"));
            }
            }
        }
    }

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}