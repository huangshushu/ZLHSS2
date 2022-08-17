/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：贝勒德副本  banban Normal
 *  
 *  @Author Jackson 
 */

/* global em, java */

//自定义复活次数
var nDeathCount = 2;

var infomap;
var phaseTime = 100000;
var setupTask = null;
var finalStart = -1;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");

    var eim = em.newInstance("BossBeidler");

    eim.setProperty("open", "1");
    eim.setProperty("BeidlerLArm", "0");
    eim.setProperty("BeidlerRArm", "0");
    eim.setProperty("BeidlerHip", "0");
    eim.setProperty("BeidlerHead", "0");
    eim.setProperty("Check", "1");
    eim.setProperty("Core", "0");
    eim.setProperty("clearType", "0");
    eim.setProperty("reward", "0");
    eim.setProperty("RewardDone", "0");
    eim.setInstanceMap(863010100).resetFully(eim);
    eim.setInstanceMap(863010500).resetFully(eim); //testDummyBigboss
    eim.setInstanceMap(863010420).resetFully(eim);
    eim.setInstanceMap(863010410).resetFully(eim);
    eim.setInstanceMap(863010400).resetFully(eim);
    eim.setInstanceMap(863010320).resetFully(eim);
    eim.setInstanceMap(863010310).resetFully(eim);
    eim.setInstanceMap(863010300).resetFully(eim);
    eim.setInstanceMap(863010230).resetFully(eim);
    eim.setInstanceMap(863010220).resetFully(eim);
    eim.setInstanceMap(863010210).resetFully(eim);
    eim.setInstanceMap(863010200).resetFully(eim);


    var map2 = eim.setInstanceMap(863010430);
    map2.resetFully(eim);
    var mLArm = em.getMonster(9390611);
	    mLArm.setChangeHP(200000000000);
    //mLArm.handleDeadBound(1);
    eim.registerMonster(mLArm);
    map2.spawnMonsterOnGroundBelow(mLArm, new java.awt.Point(70, 71));

    var map3 = eim.setInstanceMap(863010330);
    map3.resetFully(eim);
    var mRArm = em.getMonster(9390610);
	    mRArm.setChangeHP(300000000000);
    //mRArm.handleDeadBound(1);
    eim.registerMonster(mRArm);
    map3.spawnMonsterOnGroundBelow(mRArm, new java.awt.Point(0, 69));

    var map4 = eim.setInstanceMap(863010240);
    map4.resetFully(eim);
    var mHip = em.getMonster(9390612);
	    mHip.setChangeHP(500000000000);
    //mHip.handleDeadBound(1);
    eim.registerMonster(mHip);
    map4.spawnMonsterOnGroundBelow(mHip, new java.awt.Point(1, 87));
    eim.setInstanceMap(863010700).resetFully(eim);
    var map1 = eim.setInstanceMap(863010600);//BeidlerHead  9390600
    map1.resetFully(eim);
    map1.killAllMonsters(false);
    eim.startEventTimer(1000 * 60 * 30); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setDeathCount(nDeathCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
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
                var mob = em.getMonster(9390600);
                switch (s) {
                    case 0:
                        eim.setProperty("Core", "3");
                        eim.setProperty("rate", "2000");
                        eim.setProperty("nlevel", "220");
                        mob.setChangeHP(850000000000);
                        mob.setForcedMobStat(220);
                        break;
                    case 1:
                        eim.setProperty("Core", "2");
                        eim.setProperty("rate", "500");
                        eim.setProperty("nlevel", "195");
                        mob.setChangeHP(500000000000);
                        mob.setForcedMobStat(195);
                        break;
                    case 2:
                        eim.setProperty("Core", "1");
                        eim.setProperty("rate", "50");
                        eim.setProperty("nlevel", "175");
                        mob.setChangeHP(600000000000);
                        mob.setForcedMobStat(175);
                        break;
                    case 3:
                        eim.setProperty("Core", "0");
                        eim.setProperty("rate", "1");
                        eim.setProperty("nlevel", "150");
                        break;
                }
                eim.registerMonster(mob);
                smap.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5, 61));
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
                em.setProperty("state", "0");
                em.setProperty("leader", "true");
            }
            return;
    }

}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobID) { //杀死怪物
    switch (mobID) {
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
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 863000100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    finalStart = -1;
}

function clearPQ(eim) {
    eim.changedMap(863010700);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerDead(eim, player) {
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
        setupTask = null;
    }
}

function pickupItem(eim, player, itemID) {
}

function monsterDamaged(eim, player, mobID, damage) {
}

function monsterKilled(eim, player, mobID) {
    var mapID = player.getMapID();
    switch (mapID) {
        case 863010600://贝勒德的头  16
            if (eim.getProperty("BeidlerHead") != null) {
                var mob = null;
                switch (mobID) {
                    case 9390600:
                        player.getMap().showPortalEffect("phase2-1", "1");
                        player.getMap().showPortalEffect("phase2-2", "1");
                    case 9390601:
                        var newMobID = mobID + 1;
                        mob = em.getMonster(newMobID);
                        var core = parseInt(eim.getProperty("Core"));
                        switch (core) {
                            case 3:
                                mob.setChangeHP(newMobID == 9390602 ? 550000000000 : 350000000000);
                                break;
                            case 2:
                                mob.setChangeHP(newMobID == 9390602 ? 250000000000 : 450000000000);
                                break;
                            case 1:
                                mob.setChangeHP(newMobID == 9390602 ? 200000000000 : 170000000000);
                                break;
                        }
                        eim.setProperty("BeidlerHead", eim.getProperty("BeidlerHead") + "1");
                        if (newMobID == 9390602) {
                            //需要重新计时 100S内消灭三阶段贝勒头
                            eim.setRemainingTimer(100000);
                            player.getMap().showPortalEffect("phase3", "1");
                        }
                        break;
                    case 9390602:
                        eim.setProperty("BeidlerHead", eim.getProperty("BeidlerHead") + "1");
                        player.getMap().showScreenEffect("monsterPark/clear");
                        eim.startEventTimer(1000 * 60 * 5); // 30 min
                        setupTask = eim.schedule("clearPQ", 2000);
                        eim.setProperty(String(mapID), "1");
                        eim.putEventInfo(String(mapID), "2");
                        break;
                }
                if (mob != null) {
                    mob.setForcedMobStat(parseInt(eim.getProperty("nlevel")));
                    eim.registerMonster(mob);
                    player.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(5, 61));
                }
            }
            break;
        case 863010240://贝勒德的肚脐  9390612
        case 863010430://贝勒德的左手肩膀
        case 863010330://贝勒德的右手肩膀
            var mobSize = player.getMap().getEventMobSize();
            if (mobSize <= 0) {
                if (mapID == 863010430 || mapID == 863010330) {
                    player.getMap().showPortalEffect("phase3", "2");
                    player.getMap().showPortalEffect("clear", "1");
                } else {
                    player.getMap().showPortalEffect("clear1", "2");
                    player.getMap().showPortalEffect("clear2", "1");
                }
                eim.setProperty(String(mapID), "1");
                eim.putEventInfo(String(mapID), "2");
                player.getMap().showScreenEffect("monsterPark/clear");
                eim.setGiantBossMap();
            }
            break;
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
        case 863010100://通往贝勒德的路
            var mobSize = player.getMap().getEventMobSize();
            player.getMap().showScriptProgressMessage("现在……这个地方还剩下" + mobSize + "个邪恶气息。");
            if (mobSize <= 0) {
                eim.setProperty(String(mapID), "1");
                eim.putEventInfo(String(mapID), "2");
                eim.setGiantBossMap();
                player.getMap().showScreenEffect("monsterPark/clear");
                if (mapID == 863010410 || mapID == 863010310) {
                    player.getMap().showPortalEffect("open", "1");
                    player.getMap().showPortalEffect("clear", "1");
                }
            }
            break;
    }
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