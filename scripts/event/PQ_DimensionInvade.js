/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  BOSS组队副本: 次元入侵
 *  
 *  @Author Jackson 
 */
/* global em, java */

function init() {
    //初始化
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    //开启新副本实例
    var eim = em.newInstance("PQ_DimensionInvade");
    em.setProperty("state", "1");
    eim.setProperty("stage", "1");
    eim.setProperty("wave", "0");
    eim.setProperty("summon", "0");

    var map = eim.setInstanceMap(940021000);//加入副本地图
    map.resetFully();

    map = eim.setInstanceMap(940022000);
    map.resetFully();

    map = eim.setInstanceMap(940023000);
    map.resetFully();

    map = eim.setInstanceMap(940024000);
    map.resetFully();//重置地图
    eim.schedule("SpwnMobForPlayer", 500);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.showScreenAutoLetterBox( "event/start", 0);
}

function warpNext(eim) {
    var stage = Number(eim.getProperty("stage")) + 1;
    eim.setProperty("wave", "0");
    eim.setProperty("stage", String(stage));
    if (stage < 7) {
        var map = eim.getMapInstance(0);
        if (map != null) {
            map.resetFully();
            for (var i = 0; i < eim.getPlayers().size(); i++) {
                eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
            }
            eim.schedule("SpwnMobForPlayer", 500);
        }
    } else {
        //传送到最终BOSS
        var bossMap = Math.floor(Math.random() * 3) + 1;
        var map = eim.getMapInstance(bossMap);
        if (map != null) {
            eim.setProperty("bossMap", bossMap);
            map.resetFully();
            for (var i = 0; i < eim.getPlayers().size(); i++) {
                eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
            }
            eim.schedule("SpwnMobForPlayer", 500);
        }
    }
}

function SpwnMobForPlayer(eim) {
    var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
    var wave = Number(eim.getProperty("wave"));//获得 当前 关卡 阶段
    //根据关卡来处理召唤怪物
    switch (stage) {
        case 1:
            wave = wave + 1;
            eim.setProperty("wave", String(wave));
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                if (wave <= 5) {
                    eim.startEventTimer(1000 * 20);
                    eim.broadcastPlayerMsg(-2, "[次元入侵] 怪物被召唤了!请在20秒内消灭怪物 ");
                    for (var i = 0; i < 3 * wave; i++) {
                        var mob = em.getMonster(9300618);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(10000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2579, 29));//在地图某一个点召唤生成的怪物
                    }
                    for (var i = 0; i < 5 * wave; i++) {
                        var mob = em.getMonster(9300619);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(5000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2579, 29));//在地图某一个点召唤生成的怪物
                    }
                } else {
                    eim.setProperty("stage" + stage, "clear");
                    map.showScreenEffect("quest/party/clear");
                    eim.schedule("warpNext", 1000 * 3);//4秒后 重新召唤
                }
            }
            break;
        case 2:
            wave = wave + 1;
            eim.setProperty("wave", String(wave));
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                if (wave <= 1) {
                    eim.startEventTimer(1000 * 120);

                    var mob = em.getMonster(9300622);//获取一个新的怪物实例
                    //mob.setForcedMobStat(200);//设置怪物的等级
                    mob.setChangeHP(1000000000000);//设置改变怪物的HP量
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2579, 29));//在地图某一个点召唤生成的怪物
                } else {
                    eim.setProperty("stage" + stage, "clear");
                    map.showScreenEffect("quest/party/clear");
                    eim.schedule("warpNext", 1000 * 3);//4秒后 重新召唤
                }
            }
            break;
        case 3:
            wave = wave + 1;
            eim.setProperty("wave", String(wave));
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                if (wave < 8) {
                    eim.startEventTimer(1000 * 30);
                    for (var i = 0; i < 5 * wave; i++) {
                        var mob = em.getMonster(9300618);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(50000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2733, 29));//在地图某一个点召唤生成的怪物
                    }
                    for (var i = 0; i < 10 * wave; i++) {
                        var mob = em.getMonster(9300619);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(10000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3364, 29));//在地图某一个点召唤生成的怪物
                    }
                    for (var i = 0; i < 10 * wave; i++) {
                        var mob = em.getMonster(9300824);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(5000);//设置改变怪物的HP量 测试用
                        mob.setChangeHP(5000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2029, 29));//在地图某一个点召唤生成的怪物
                    }
                } else {
                    eim.setProperty("stage" + stage, "clear");
                    map.showScreenEffect("quest/party/clear");
                    eim.schedule("warpNext", 1000 * 3);
                }
            }
            break;
        case 4:
            eim.schedule("summonFall", 100);
            eim.startEventTimer(1000 * 20);
            break;
        case 5:
            wave = wave + 1;
            eim.setProperty("wave", String(wave));
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                if (wave < 8) {
                    eim.startEventTimer(1000 * 40);
                    for (var i = 0; i < 3 * wave; i++) {
                        var mob = em.getMonster(9300620);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(10000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2029, 29));//在地图某一个点召唤生成的怪物
                    }
                    for (var i = 0; i < 3 * wave; i++) {
                        var mob = em.getMonster(9300621);//获取一个新的怪物实例
                        //mob.setForcedMobStat(200);//设置怪物的等级
                        mob.setChangeHP(5000000 * (wave * 3));//设置改变怪物的HP量
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2029, 29));//在地图某一个点召唤生成的怪物
                    }
                } else {
                    eim.setProperty("stage" + stage, "clear");
                    map.showScreenEffect("quest/party/clear");
                    eim.schedule("warpNext", 1000 * 3);
                }
            }
            break;
        case 6:
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                if ("0".equals(eim.getProperty("summon"))) {//召唤BOSS
                    eim.setProperty("summon", "1");
                    var mob = em.getMonster(9300634);//获取一个新的怪物实例
                    mob.setForcedMobStat(200);//设置怪物的等级
                    var stat = mob.getForcedMobStat();
                    stat.setWatk(500000);
                    stat.setMatk(500000);
                    stat.setPDRate(80);
                    mob.setChangeHP(5000000000000);//设置改变怪物的HP量
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2676, 29));//在地图某一个点召唤生成的怪物
                    eim.schedule("SpwnMobForPlayer", 1000 * 3);
                } else {
                    if (!"1".equals(eim.getProperty("stop"))) {
                        if ("1".equals(eim.getProperty("summon"))) {
                            for (var i = 0; i < 3; i++) {
                                var mob = em.getMonster(9300827);//获取一个新的怪物实例
                                //mob.setForcedMobStat(200);//设置怪物的等级
                                mob.setChangeHP(100000000000);//设置改变怪物的HP量
                                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2029, 29));//在地图某一个点召唤生成的怪物
                            }
                        }
                        if (map.getEventMobSize() < 10) {
                            //怪物小于10只召唤怪物
                            eim.schedule("SpwnMobForPlayer", 1000 * 3);
                        } else {
                            map.killAllMonsters(true);
                            eim.broadcastPlayerMsg(-2, "怪物超过了10只，任务失败了！");
                            eim.schedule("end", 1000 * 4);
                        }
                    }
                }
            }
            break;
        case 7:
            var bossMap = Number(eim.getProperty("bossMap"));//获得 当前 关卡
            var map = eim.getMapInstance(bossMap);//获得副本第一个地图
            if (map != null) {
                if ("1".equals(eim.getProperty("boss"))) {
                    eim.setProperty("stage" + stage, "clear");
                    //完成所有阶段 
                    eim.startEventTimer(1000 * 60 * 5);//设置5分钟时间领取奖励
                    map.spawnNPC(9020009, 2774, 29);
                } else {
                    eim.setProperty("boss", "1");
                    eim.startEventTimer(1000 * 90);
                    switch (bossMap) {
                        case 1:
                            var mob = em.getMonster(9303098);//获取一个新的怪物实例
                            mob.setForcedMobStat(200);//设置怪物的等级
                            var stat = mob.getForcedMobStat();
                            stat.setWatk(500000);
                            stat.setMatk(500000);
                            stat.setPDRate(80);
                            mob.setChangeHP(5000000000000);//设置改变怪物的HP量
                            eim.registerMonster(mob);
                            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2774, 29));//在地图某一个点召唤生成的怪物
                            break;
                        case 2:
                            var mob = em.getMonster(9303098);//获取一个新的怪物实例
                            mob.setForcedMobStat(200);//设置怪物的等级
                            var stat = mob.getForcedMobStat();
                            stat.setWatk(500000);
                            stat.setMatk(500000);
                            stat.setPDRate(80);
                            mob.setChangeHP(5000000000000);//设置改变怪物的HP量
                            eim.registerMonster(mob);
                            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2774, 29));//在地图某一个点召唤生成的怪物

                            mob = em.getMonster(9303101);//获取一个新的怪物实例
                            mob.setForcedMobStat(200);//设置怪物的等级
                            var stat = mob.getForcedMobStat();
                            stat.setWatk(500000);
                            stat.setMatk(500000);
                            stat.setPDRate(80);
                            mob.setChangeHP(5000000000000);//设置改变怪物的HP量
                            eim.registerMonster(mob);
                            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2774, 29));//在地图某一个点召唤生成的怪物
                            break;
                        case 3:
                            var mob = em.getMonster(9303098);//获取一个新的怪物实例
                            mob.setForcedMobStat(200);//设置怪物的等级
                            var stat = mob.getForcedMobStat();
                            stat.setWatk(500000);
                            stat.setMatk(500000);
                            stat.setPDRate(80);
                            mob.setChangeHP(5000000000000);//设置改变怪物的HP量
                            eim.registerMonster(mob);
                            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2774, 29));//在地图某一个点召唤生成的怪物
                            break;
                    }
                }
            }
            break;
    }
}

function summonFall(eim) {
    var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
    if (stage == 4) {
        var map = eim.getMapInstance(0);
        if (map != null) {
            map.createObtacleAtom(0, 15, 1, 8);
            eim.schedule("summonFall", 800);
        }
    }
}

function playerDead(eim, player) {
    var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
    if (stage == 4) {
        eim.broadcastPlayerMsg(-2, "任务失败了！");
        eim.schedule("end", 500);
    }
}

function playerRevive(eim, player) {
}


function changedMap(eim, player, mapid) {
    if (mapid < 940021000 || mapid > 940024000) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        eim.unregisterPlayer(player);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {//组队解散后果
    em.setProperty("started", "false");
    em.setProperty("Times", "0");
    eim.disposeIfPlayerBelow(100, 940020000);
}

function playerExit(eim, player) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(940020000);
    player.changeMap(map, map.getPortal(0));
}


function allMonstersDead(eim) {
    var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
    if (!"clear".equals(eim.getProperty("stage" + stage))) {
        eim.stopEventTimer();
        eim.schedule("SpwnMobForPlayer", 1000);//4秒后 重新召唤
    }
}

function scheduledTimeout(eim) {
    //事件计时结束后执行
    var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
    if (stage == 4) {
        var map = eim.getMapInstance(0);//获得副本第一个地图
        if (map != null) {
            eim.setProperty("stage4", "clear");
            map.showScreenEffect("quest/party/clear");
            eim.schedule("warpNext", 1000 * 3);
        }
    } else {
        eim.broadcastPlayerMsg(-2, "任务失败了！");
        eim.schedule("end", 500);
    }
}

function monsterDrop(eim, player, mob) {
}
function monsterValue(eim, mobId) {
    return 1;
}

function pickupItem(eim, player, itemID) {
    //拾取道具时执行
}

function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
}

function monsterKilled(eim, player, mobID) {
    if (mobID == 9300634) {
        var stage = Number(eim.getProperty("stage"));//获得 当前 关卡
        if (stage == 6) {
            eim.setProperty("stop", "1");
            eim.setProperty("stage6", "clear")
            var map = eim.getMapInstance(0);//获得副本第一个地图
            if (map != null) {
                map.showScreenEffect("quest/party/clear");
                eim.schedule("warpNext", 1000 * 3);
            }
        }
    }
    //杀死注册的怪物时执行
}

function clearPQ(eim) {
    //调用finishPQ时执行
    end(eim);
}

function end(eim) {
    // 此为自定义方法 不是务必存在的
    eim.disposeIfPlayerBelow(100, 940020000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function cancelSchedule() {
}


