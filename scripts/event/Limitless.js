
var EventDataBase;
var Times = 0;
var GiftTimes = 0;
var charid = 0;
var MobList =
    Array(          /*可自行替換或添加MOB*/
9300639, 
9300680, 
9300711, 
9300742,
9300759,
9300758,
9300822,
9300856,
9300875,
9300890,
9303082,
9303102,
9303130,
9303131,
9303132,
9303133,
9303134,
9303135,
9303137,
9800063,
9303139
    );
function init() {
    em.setProperty("started", "false");
    em.setProperty("Gift", "false");
    em.setProperty("Times", "0");
	em.setProperty("state", "0");
    em.setProperty("leader", "true");//判断地图
}

function setup(level,eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");//判断地图
    return eim;
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("Limitless");
    var map = eim.setInstanceMap(993161700);
    eim.startEventTimer(1000 * 60 * 10);
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
	em.setProperty("state", "1");
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    Times = parseInt(em.getProperty("Times"));
    eim.broadcastPlayerMsg(1, "欢迎挑战 [ 无尽之塔 ] \r\n 目前是第" + (Times + 1) + "层 \r\n 请小心行事");

    SpwnMobForPlayer(eim)
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
                player.openNpc(2060103);
            }
        }
        eim.startEventTimer(1000 * 60 * 5); /*可自行更換每關秒數*/
        eim.broadcastPlayerMsg(-1, "[ 无尽之塔 ] 目前第 " + (Times + 1) + " 层 你只有[ 5 ]分钟的时间消灭它");
    }
    var mobid = MobList[Math.floor(Math.random() * MobList.length)];
    var mob = em.getMonster(mobid);
    mob.getStats().setChange(true);
    mob.changeLevel(230);
    if (Times <= 20) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 3000000000000));  /*20關前  基本血量500E 每關多500E*/  /*不清楚你服屬性到哪所以隨便設置了下 自行操作*/
        mob.setHp(500000000000 + Times * 3000000000000);
    } else if (Times > 20 && Times <= 49) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 4000000000000)); /*20-49關 基本血量500E 每關多1000E*/
        mob.setHp(500000000000 + Times * 4000000000000);
    } else if (Times > 49 && Times <= 69) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 4000000000000)); /*40-69關 基本血量500E 每關多5000E*/
        mob.setHp(500000000000 + Times * 4000000000000);
    } else if (Times > 69 && Times <= 79) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 5000000000000));/*40-69關 基本血量500E 每關多1兆  */
        mob.setHp(500000000000 + Times * 5000000000000);
    } else if (Times > 79 && Times <= 85) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 6000000000000));/*79-85關 基本血量500E 每關多3兆  */
        mob.setHp(50000000000 + Times * 6000000000000);
    } else if (Times > 85 && Times <= 100) {
        mob.getChangedStats().setOHp(500000000000 + (Times * 9000000000000));/*85-100關 基本血量500E 每關多5兆  */
        mob.setHp(500000000000 + Times * 9000000000000);
    } else {
        mob.getChangedStats().setOHp(150000000000000 + (Times * 100000000000000));  /*100關之後基本血量7000兆 每關多9999兆*/   
        mob.setHp(150000000000000 + Times * 100000000000000);
    }
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993161700);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(511, 813));
	var map = eim.getMapInstance(993161700);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function changedMap(eim, player, mapid) {
    if (mapid == 993161700) {
        return;
    }
    em.setProperty("Times", "0");
    em.setProperty("started", "false");
    eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 101050000);
    return 0;
}

function leftParty(eim, player) {
    playerExit(eim, player);
}

function disbandParty(eim) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function playerExit(eim, player) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(101050000);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function allMonstersDead(eim) {
    var map = eim.getMapInstance(0);
    var players = map.getCharacters().iterator();
    while (players.hasNext()) {
        var player = players.next();
        player.openNpc(2060103, "gainItem");
    }
    em.setProperty("Times", "" + (parseInt(em.getProperty("Times")) + 1));
    Times = parseInt(em.getProperty("Times"));
    GiftTimes++;
    eim.broadcastPlayerMsg(-1, "[ 无尽之塔 ] : 恭喜你成功通过，你只有[ 3 ]秒的时间准备下一关");
    eim.startEventTimer(1000 * 10);
    em.schedule("SpwnMobForPlayer", 1000 * 3, eim);
}

function cancelSchedule() {
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
}

function monsterDrop(eim, player, mob) {
}