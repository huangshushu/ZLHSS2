/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：西式婚礼
 *  @Author Kent 
 */
﻿function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(level, partyID) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    var eim = em.newInstance("WeddingEvent");
    eim.setProperty("done", "0");
    eim.setProperty("on", "0");
    eim.setProperty("partyID", partyID);
    var map = eim.setInstanceMap(680000210);
    map.resetFully();
    eim.setInstanceMap(680000300).resetFully();
    eim.setInstanceMap(680000400).resetFully();
    eim.setInstanceMap(680000401).resetFully();

    eim.startEventTimer(60 * 1000 * 20);
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
    if (mapid != 680000210 && mapid != 680000300 && mapid != 680000400 && mapid != 680000401) {
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
    if (eim.disposeIfPlayerBelow(100, 680000500)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
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
}
function pickUpItem(eim, player, itemID) {
}

function doWedding(eim) {
    var map = eim.getMapInstance(0);
    eim.setProperty("done", "1");
    var on = parseInt(eim.getProperty("on")) + 1;
    switch (on) {
        case 1:
            em.setProperty("state", "2");
            map.startMapEffect("今天，我们为了祝福两位新人相聚于此。", 5121011, 5);
            break;
        case 2:
            map.startMapEffect("大家常说，天赐的姻缘是用漂漂猪的红色缎带连在一起的。", 5121011, 5);
            break;
        case 3:
            map.startMapEffect("在我看来，这两位新人已经找到了自己缎带相连的那一位。", 5121011, 5);
            break;
        case 4:
            map.startMapEffect("在茫茫人海中找到属于自己的对方，说明两位都是非常幸运的人。", 5121011, 5);
            break;
        case 5:
            map.startMapEffect("如何让这个来之不易的缘分变成幸福，就是今后交给两位的任务。", 5121011, 5);
            break;
        case 6:
            map.startMapEffect("新郎，你愿意爱你的新娘，直到黑发变为白雪人的毛那么白吗？", 5121011, 5);
            break;
        case 7:
            map.startMapEffect("新娘，你愿意爱你的新郎，直到冰峰雪域融化为尼哈沙漠吗？", 5121011, 5);
            break;
        case 8:
            map.startMapEffect("请在场的所有宾客，都为这两位幸福的新人作证。", 5121011, 5);
            break;
        case 9:
            map.startMapEffect("在所有人的祝福声中，我宣布两位年轻人结为夫妻。", 5121011, 5);
            break;
        case 10:
            eim.setProperty("done", "2");
            map.startMapEffect("新郎，可以吻你的新娘了。", 5121011, 30);
            eim.sendMarriedDone();
            break;
    }
    if (on < 10) {
        eim.setProperty("on", on);
        eim.schedule("doWedding", 5500);
    }
}