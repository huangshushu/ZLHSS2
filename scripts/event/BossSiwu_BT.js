﻿/*  
 *  
 *  
 *  
 */
//自定义复活次数
var reviveCount = 5;
var TimeA = 600000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossSiwu_BT");
    var map = eim.setInstanceMap(992013000);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(9303161);//
    modified = em.newMonsterStats();
    modified.setOHp(597500000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(299999999);//物理伤害
    mob.getStats().setMagicAttack(299999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(250);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(784, 155));
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    eim.setProperty("Name", "[ 变 态 ] 斯　乌");
    eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());

    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 992013000) {
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
    eim.disposeIfPlayerBelow(100, 101050000);
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
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
	var map = eim.getMapInstance(0);
    eim.broadcastPlayerMsg(5,"[请先捡取掉落物品后点击NPC领取奖励.点击NPC后就传送回自由市场了！");
    map.startMapEffect("请先捡取掉落物品后点击NPC领取奖励.点击NPC后就传送回自由市场了！。", 5120092);
	 map.spawnNpc(2400006, new java.awt.Point(784, 155));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(101050000);
    player.changeMap(map, map.getPortal(0));
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
function pickUpItem(eim, player, itemID) {
}