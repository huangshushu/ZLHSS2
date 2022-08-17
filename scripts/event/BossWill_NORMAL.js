/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：威尔 will 普通模式
 *  
 *  @Author Jackson 
 */
/* global em */
//自定义复活次数
var nDeathCount = 3;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
/*
 * MapID 
 *  * 怪物
 8880340: //威尔
 8880341: //威尔
 8880342: //威尔
 8880343: //威尔
 8880344: //威尔
 8880345 - 暗之执行者
 8880346 - 暗之执行者
 8880347 - 暗之执行者
 8880348 - 暗之执行者
 8880349 - 暗之执行者
 8880351 - 巨型蜘蛛腿
 8880352 - 巨型蜘蛛腿
 8880353 - 巨型蜘蛛腿
 8880354 - 巨型蜘蛛腿
 8880355 - 凝视之瞳
 8880356 - 凝视之瞳
 8880357 - 凝视之瞳
 8880358 - 凝视之瞳
 * 
 */
function setup(level, partyid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossWill_NORMAL");
    var map1 = eim.setInstanceMap(450008700);
    var map2 = eim.setInstanceMap(450008750);
    var map3 = eim.setInstanceMap(450008800);
    var map4 = eim.setInstanceMap(450008850);
    var map5 = eim.setInstanceMap(450008900);
    var map6 = eim.setInstanceMap(450008950);

    map1.resetFully();
    map2.resetFully();
    map3.resetFully();
    map4.resetFully();
    map5.resetFully();
    map6.resetFully();
    eim.setProperty("map", "0");
    eim.setProperty("stage", "0");//设置当前为第一阶段
    eim.setProperty("stop", "0");
    eim.setProperty("stop2", "0");
    eim.setProperty("stop3", "0");
    eim.setProperty("summom", "0");//召唤处理控制
    eim.setProperty("count", "0");
    eim.startEventTimer(30 * 60 * 1000);
    eim.schedule("prepareCheckMobHp", 73000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setDeathCount(nDeathCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 450008700 && mapid != 450008750 && mapid != 450008800 && mapid != 450008850 && mapid != 450008900 && mapid != 450008950) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 450007240);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var stage = eim.getProperty("stage");
    if (stage.equals("0")) {//威尔第一阶段 完成
        eim.setProperty("stop", "1");//关闭眼球弹幕计时
        eim.setProperty("stop2", "1");
        eim.schedule("warpNext", 4000);//延迟传送到下一个地图
    } else if (stage.equals("1")) {//威尔第二阶段 完成
        eim.setProperty("stop2", "1");
        eim.schedule("warpNext", 4000);//延迟传送到下一个地图
        eim.setProperty("stop", "1");
    } else {
        eim.setProperty("stop2", "1");
        eim.setProperty("stop3", "1");
    }
}

function playerRevive(eim, player) {
    return true;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function warpNext(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    var map = eim.getMapInstance(2 * stage + 2);
    if (map != null) {
        for (var i = 0; i < eim.getPlayers().size(); i++) {
            eim.getPlayers().get(i).changeMap(map, map.getPortal(0));
        }
    }
}


function prepareCheckMobHp(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    var map = eim.getMapInstance(2 * stage + 1);
    if (eim.getProperty("stop").equals("0")) {
        if (map != null) {
            map.prepareCheckMobHp();
            eim.schedule("checkMobHp", 3000);
            eim.schedule("prepareCheckMobHp", 120000);
        }
    }
}
function checkMobHp(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    var map = eim.getMapInstance(2 * stage + 1);
    if (eim.getProperty("stop").equals("0")) {
        if (map != null) {
            map.checkMobHp(false);//平衡血量并释放裂屏技能
            //Todo:召唤出 8880305 凝视之眼 
            //Todo:控制威尔不进行攻击 
            //Todo:控制地图落物
            eim.schedule("actionWillSpaceCollapse", 20000); //Todo:20S后 在进行一次 全屏攻击
            //Todo:检测是否有一半人挂了 没有10S后进行解除锁血 
        }
    }
}

function actionWillSpaceCollapse(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    var map = eim.getMapInstance(2 * stage + 1);
    if (eim.getProperty("stop").equals("0")) {
        if (map != null) {
            map.checkMobHp(true);
        }
    }
}

function setMoonLight(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    var map = eim.getMapInstance(2 * stage + 1);
    if (eim.getProperty("stop2").equals("0")) {
        if (map != null) {
            for (var i = 0; i < eim.getPlayers().size(); i++) {
                eim.getPlayers().get(i).modifyMoonlightValue(3);
            }
            eim.schedule("setMoonLight", 1000);
        }
    }
}

function addNarrowWeb(eim) {
    var map = eim.getMapInstance(5);
    if (eim.getProperty("stop3").equals("0")) {
        if (map != null) {
            map.addNarrowWeb();
            eim.schedule("addNarrowWeb", 1000);
        }
    }
}

function pickupItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
}