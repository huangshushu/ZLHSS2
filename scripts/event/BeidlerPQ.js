/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：贝勒德
 *  @Author Kent 
 */

var infomap;
var phaseTime = 100000;
//自定义复活次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyid) {
    infomap = new Map();
    em.setProperty("state", "1");
    em.setProperty("leader", "true");

    var eim = em.newInstance("BeidlerPQ");
    infomap.put("clearType", "0");
    infomap.put(String(863010100), "0");
    eim.setProperty("open", "1");
    eim.setProperty("BeidlerLArm", "0");
    eim.setProperty("BeidlerRArm", "0");
    eim.setProperty("BeidlerHip", "0");
    eim.setProperty("BeidlerHead", "0");
    eim.setProperty("Check", "1");
    eim.setProperty("Core", "0");
    eim.setProperty("clearType", "0");
    eim.setInstanceMap(863010100).resetFully();
    eim.setInstanceMap(863010500).resetFully(); //testDummyBigboss
    eim.setInstanceMap(863010420).resetFully();
    eim.setInstanceMap(863010410).resetFully();
    eim.setInstanceMap(863010400).resetFully();
    eim.setInstanceMap(863010320).resetFully();
    eim.setInstanceMap(863010310).resetFully();
    eim.setInstanceMap(863010300).resetFully();
    eim.setInstanceMap(863010230).resetFully();
    eim.setInstanceMap(863010220).resetFully();
    eim.setInstanceMap(863010210).resetFully();
    eim.setInstanceMap(863010200).resetFully();

    //BOSS 
    //eim.setInstanceMap(863010430).resetFully();//BeidlerLArm  9390611  84 70
    //eim.setInstanceMap(863010330).resetFully();//BeidlerRArm  9390610 3 68
    //eim.setInstanceMap(863010240).resetFully();//BeidlerHip  9390612  13 87

    var map2 = eim.setInstanceMap(863010430);
    map2.resetFully();
    var LArm = em.getMonster(9390611);
    LArm.handleDeadBound(1);
    map2.spawnMonsterOnGroundBelow(LArm, new java.awt.Point(84, 69));

    var map3 = eim.setInstanceMap(863010330);
    map3.resetFully();
    var RArm = em.getMonster(9390610);
    RArm.handleDeadBound(1);
    map3.spawnMonsterOnGroundBelow(RArm, new java.awt.Point(1, 69));

    var map4 = eim.setInstanceMap(863010240);
    map4.resetFully();
    var Hip = em.getMonster(9390612);
    Hip.handleDeadBound(1);
    map4.spawnMonsterOnGroundBelow(Hip, new java.awt.Point(3, 69));
    eim.setInstanceMap(863010700).resetFully();
    var map1 = eim.setInstanceMap(863010600);//BeidlerHead  9390600
    map1.resetFully();
    eim.getMapFactoryMap(863010600).killAllMonsters(false);
    eim.startEventTimer(1000 * 60 * 30); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(863000100);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {

    switch (mapid) {
        case 863010600://贝勒德的头  16
            var smap = eim.getMapInstance(16);
            var s = 0;
            if (eim.getProperty("BeidlerHead").equals("0")) {
                eim.setProperty("BeidlerHead", "1");
                s = parseInt(eim.getProperty("BeidlerRArm")) + parseInt(eim.getProperty("BeidlerLArm")) + parseInt(eim.getProperty("BeidlerHip"));
                switch (s) {
                    case 0:
                        eim.setProperty("Core", "3");
                        eim.setProperty("rate", "50000");
                        eim.setProperty("nlevel", "210");
                        break;
                    case 1:
                        eim.setProperty("Core", "2");
                        eim.setProperty("rate", "20000");
                        eim.setProperty("nlevel", "195");
                        break;
                    case 2:
                        eim.setProperty("Core", "1");
                        eim.setProperty("rate", "1000");
                        eim.setProperty("nlevel", "175");
                        break;
                    case 3:
                        eim.setProperty("Core", "0");
                        eim.setProperty("rate", "100");
                        eim.setProperty("nlevel", "150");
                        break;
                }
                var mob = em.getMonster(9390600);
                mob.getStats().setChange(true);
                mob.changeLevelmod(parseInt(eim.getProperty("nlevel")), parseInt(eim.getProperty("rate")));
                eim.registerMonster(mob);
                mob.handleDeadBound(1);
                smap.spawnMonsterOnGroundBelow(mob, new java.awt.Point(7, 61));
            }
            break;
        case 863010240://贝勒德的肚脐   9390612
        case 863010430://贝勒德的左手肩膀
        case 863010330://贝勒德的右手肩膀
        case 863010210://贝勒德右腿上层
        case 863010310://贝勒德西部悬崖上方
        case 863010400://贝勒德东部悬崖下方
        case 863010300://贝勒德西部悬崖下方
        case 863010200://贝勒德右腿下层
        case 863010220://贝勒德左腿下层
        case 863010230://贝勒德左腿上层
        case 863010320://贝勒德的右手上臂
        case 863010410://贝勒德东部悬崖上方
        case 863010420://贝勒德的左手上臂
        case 863010700://贝勒德的心脏
        case 863010500://贝勒德的心脏
            eim.setProperty("open", "2");
        case 863010100://通往贝勒德的路
            break;
        default :
            eim.unregisterPlayer(player);
            if (eim.disposeIfPlayerBelow(0, 0)) {
                player.restReviveCount();
                em.setProperty("state", "0");
                em.setProperty("leader", "true");
            }
            return;
    }
    if (eim.getProperty(String(mapid)) == null) {
        eim.setProperty(String(mapid), "1");
    }
    infomap.put(String(mapid), "0");
    eim.setInfoStats(infomap.objects);
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) { //杀死怪物

    switch (mobId) {
        case 9390610:
            eim.setProperty("BeidlerRArm", "1");
            break;
        case 9390611:
            eim.setProperty("BeidlerLArm", "1");
            break;
        case 9390612:
            eim.setProperty("BeidlerHip", "1");
            break;
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.getProperties().clear();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 863000100);
    em.getProperties().clear();
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    var smap = eim.getMapInstance(16);
    var mobid = 0;
    if (eim.getProperty("BeidlerHead").equals("1")) {
        mobid = 9390601;
    } else if (eim.getProperty("BeidlerHead").equals("11")) {
        mobid = 9390602;
        eim.restartEventTimer(phaseTime);
    } else if (eim.getProperty("BeidlerHead").equals("111")) {
        for (i = 0; i < eim.getPlayers().size(); i++) {
            var tomap = eim.getMapInstance(15);
            eim.getPlayers().get(i).changeMap(tomap, tomap.getPortal(0));
        }
        eim.restartEventTimer(5 * 60 * 1000);
        return;
    }
    if (eim.getProperty("BeidlerHead") != null) {
        eim.setProperty("BeidlerHead", eim.getProperty("BeidlerHead") + "1");
        var mob = em.getMonster(mobid);
        var modified = em.newMonsterStats();
        mob.getStats().setChange(true);
        mob.changeLevelmod(parseInt(eim.getProperty("nlevel")), parseInt(eim.getProperty("rate")));
        eim.registerMonster(mob);
        smap.spawnMonsterOnGroundBelow(mob, new java.awt.Point(7, 61));
    }
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}

Map = function () {
    this.objects = new Object();

    // 加入元素
    this.put = function (key, value) {
        this.objects[key] = value;
    };

    // 删除元素
    this.remove = function (key) {
        this.objects[key] = undefined;
    };

    // 是否存在某键值
    this.containsKey = function (key) {
        return this.objects[key] ? true : false;
    };

    // 获取某元素
    this.get = function (key) {
        return this.objects[key];
    };

    // 是否存在某值
    this.containsValue = function (value) {
        for (var temp in this.objects) {
            if (this.objects[temp] == value) {
                return true;
            }
        }
        return false;
    };

    // 集合大小
    this.size = function () {
        var counter = 0;
        for (var temp in this.objects) {
            counter++;
        }
        return counter;
    };
};