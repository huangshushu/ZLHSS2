var taskid = 140002;
var changeJobMap = 910000000; 	//自由
var mX = 1091, mY = 275;
var monsterID0 = 9601042;
var monsterID1 = 9601043;
var monsterID2 = 9601044;
var monsterID3 = 9601045;
var monsterID4 = 9601046;
var monsterID5 = 9601042;
var returnMap;
var expInformation;
expInformation = 20000;
function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
    returnMap = em.getMapFactoryMap(changeJobMap);
}


function setup(cid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("Sheep" + cid);
    var map = eim.createInstanceMapS(260010601);
    eim.setProperty("finsh", "0");
    eim.setProperty("cp", 0);
    map.resetFully();
    map.killAllMonsters(false);
    eim.setProperty("Give_sheep", 0);
    eim.schedule("spawnMonster", 1000);
    eim.startEventTimer(60000 * 5);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));

}

function spawnMonster(eim) {
    if (eim == null) {
        return;
    }
    var cp = parseInt(eim.getProperty("cp"));
    if (cp < 100) {
        expInformation = 3000;
    } else if (cp > 101 && cp < 300) {
        expInformation = 5000;
    } else if (cp > 301 && cp < 600) {
        expInformation = 7000;
    } else if (cp > 601 && cp < 1000) {
        expInformation = 10000;
    } else if (cp > 1001 && cp < 1500) {
        expInformation = 15000;
    } else if (cp > 1501) {
        expInformation = 35000;
    }
    var player = eim.getPlayers().get(0);
    var overrideStats = em.newMonsterStats();
    if (eim.getMobs().size() <= 300) {
        if (player != null) {
            var monster = em.getMonster(monsterID0);
            monster.disableDrops();
            eim.registerMonster(monster);
            overrideStats.setOHp(12090);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point((mX - 200), mY));
        }
        if (player != null) {
            var monster = em.getMonster(monsterID1);
            monster.disableDrops();
            eim.registerMonster(monster);
            overrideStats.setOHp(12090);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point((mX - 350), mY));
        }
        if (player != null) {
            var monster = em.getMonster(monsterID2);
            monster.disableDrops();
            eim.registerMonster(monster);
            overrideStats.setOHp(12090);
            overrideStats.setOExp(expInformation);
            monster.setOverrideStats(overrideStats);
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(monster, new java.awt.Point((mX - 500), mY));
        }
        if (eim.getProperty("finsh").equals("1")) {
            eim.schedule("spawnMonster", 1000);
        }
    } else {
        pauseTimer(eim, player);
        player.changeMap(returnMap, returnMap.getPortal(0));
        eim.setProperty("Give_sheep", cp / 3);//设施杀死的羊羔数量   我这百年是默认失败数量变成 /3
        player.openNpc(9310475, "SheepReward");//失败获得的奖励NPC脚本
        player.dropMessage(1, "抱歉 - \r\n\r\n羊羊已全面进攻占地 \r\n\r\n为了您安全起见我将你遣送回了自由\r\n\r\n这是您收尾占地的战利品");
    }
}

function playerRevive(eim, player) {
    player.setStance(0);
    player.changeMap(player.getMap(), player.getMap().getPortal(0));
    return true;
}
function scheduledTimeout(eim) {
    var player = eim.getPlayers().get(0);
    player.getMap().killAllMonsters(true);
    eim.setProperty("finsh", "1");
    eim.stopEventClock();
    var cp = eim.getProperty("cp");
    eim.setProperty("Give_sheep", cp);
    player.openNpc(9310475, "SheepReward");
    pauseTimer(eim, player);
    player.changeMap(returnMap, returnMap.getPortal(0));
    player.dropMessage(1, "恭喜您 - \r\n\r\n成功阻挡了羊羊大军 \r\n\r\n这是给您的奖品");
}

function changedMap(eim, player, mapid) {
    if (mapid != changeJobMap) {
        return;
    }
    pauseTimer(eim, player);
}

function playerExit(eim, player) {
    pauseTimer(eim, player);
    player.changeMap(returnMap, returnMap.getPortal(0));
}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
    return 0;
}

function pauseTimer(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}


function playerDead(eim, player) {
}
function monsterValue(eim, mobid) {
    var cp = parseInt(eim.getProperty("cp")) + 1;
    eim.setProperty("cp", cp + "");
    eim.broadcastPlayerMsg(-1, "小绵羊：阿 这是第 " + cp + " 只被宰杀的小绵羊了");
    return 0;
}

function monsterKilled(eim, player, cp) {
}
function allMonstersDead(eim) {
}
function monsterDamaged(eim, player, mobid, damage) {
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function onMapLoad(eim, player) {
}
function monsterDrop(eim, player, mob) {
}
function pickUpItem(eim, player, itemID) {
}
function cancelSchedule() {
    //setupTask.cancel(true);
}
