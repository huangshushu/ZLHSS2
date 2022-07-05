//boss地图
var eventmapid = 925040001;
//倒计时结束的时候返回的地图
var returnmap =  925020002;
//召唤boss延迟
var delay = 10000;
//每个boss的挑战时间
var TIMEA = 15 * 60 * 1000;
//复活次数
var reviveCount = 5;
//GM复活次数
var GMreviveCount = 99;

//怪物数组
var monster = [
    [8644303, 10  ],     [  8220006, 15],    [  9500363, 20],     [  9400014, 25],       [  8800002, 30],
    [8644303, 35  ],     [  8220006, 40],    [  9500363, 45],     [  9400014, 50],       [  8800002, 55],
    [8644303, 60  ],     [  8220006, 65],    [  9500363, 70],     [  9400014, 75],       [  8800002, 80],
    [8644303, 85  ],     [  8220006, 90],    [  9500363, 95],     [ 9400014, 100],       [ 8800002, 105],
    [8644303, 110 ],     [ 8220006, 115],    [ 9500363, 120],     [ 9400014, 125],       [ 8800002, 130],
    [8644303, 135 ],     [ 8220006, 140],    [ 9500363, 145],     [ 9400014, 150],       [ 8800002, 155],
    [8644303, 160 ],     [ 8220006, 165],    [ 9500363, 170],     [ 9400014, 175],       [ 8800002, 180],
    [8644303, 190 ],     [ 8220006, 200],    [ 9500363, 210],     [ 9400014, 220],       [ 8800002, 230],
    [8644303, 240 ],     [ 8220006, 250],    [ 9500363, 260],     [ 9400014, 270],       [ 8800002, 280],
    [8644303, 300 ],     [ 8220006, 320],    [ 9500363, 340],     [ 9400014, 360],       [ 8800002, 380],
    [8644303, 400 ],     [ 8220006, 450],    [ 9500363, 500],     [ 9400014, 550],       [ 8800002, 600],
    [8644303, 650 ],     [ 8220006, 700],    [ 9500363, 750],     [ 9400014, 800],       [ 8800002, 900],
    [8644303, 1000],     [8220006, 1050],    [9500363, 1100],     [9400014, 1150],       [8800002, 1200],
    [8644303, 1250],     [8220006, 1300],    [9500363, 1350],     [9400014, 1400],       [8800002, 1450],
    [8644303, 1500],     [8220006, 1550],    [9500363, 1600],     [9400014, 1650],       [8800002, 1700],
    [8644303, 1750],     [8220006, 1850],    [9500363, 1900],     [9400014, 1950],       [8800002, 2000],
    [8644303, 2100],     [8220006, 2200],    [9500363, 2300],     [9400014, 2400],       [8800002, 2500]
];
var instanceName = "无限塔";
var i = 0;
//召唤坐标
var points = [
    [140, 0],
    [-193, 0],
    [355, 0]
];
function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");
	var eim = em.newInstance(instanceName);
	var map = eim.setInstanceMap(eventmapid);
	map.resetFully();
	map.killAllMonsters(false);
	eim.setProperty("monster_number", 0);
	eim.setProperty("usetime", 0);
	eim.startEventTimer(TIMEA);
	eim.schedule("monsterSpawn", 1000);
	return eim;
}

function monsterSpawn(eim) {
    var num = parseInt(eim.getProperty("monster_number"));
    var monsterid = monster[num][0];
    var mob = em.getMonster(monsterid);
    var modified = em.newMonsterStats();
    modified.setOHp(monster[num][1] * 10000 * 5 * (eim.getPlayers().length+1) * 0.5);//hp
    modified.setOMp(mob.getMp());//mp
    modified.setOExp(num);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var map = eim.getMapInstance(0);
    //召唤bos
    var ran = Math.floor(Math.random() * points.length);
    map.spawnMonsterWithEffect(mob, 15, new java.awt.Point(points[ran][0], points[ran][1]));
	eim.setProperty("timeLeft", eim.getTimeLeft());
    eim.setProperty("monster_number", num + 1);
}

function playerEntry(eim, player) {
	eim.setProperty("Name", instanceName);
    var map = eim.getMapInstance(0);
    eim.setProperty(player.getId() + "-ReviveCount", player.isAdmin() ? GMreviveCount : reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        em.setProperty("state", "0");
    }
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, returnmap);
    em.setProperty("state", "0");
}

function allMonstersDead(eim) {
    var mobnum = parseInt(eim.getProperty("monster_number"));
    var usetime = eim.getProperty("timeLeft") - eim.getTimeLeft();
    var mob = em.getMonster(monster[mobnum-1][0]);
    var mobName = mob.getStats().getName();
    em.broadcastYellowMsg("[无限塔]: 恭喜玩家<"+eim.getPlayers().get(0).getName()+"> 在无限塔<"+mobnum+"层>击杀 "+
		mobName+"，总共耗时 " + Math.floor(usetime/1000) + " 秒！");
    opennpc(eim, "9010000", "无限塔挑战奖励");
	eim.setProperty("usetime", parseInt(eim.getProperty("usetime")) + usetime);
    if (mobnum < monster.length) {
		eim.restartEventTimer(TIMEA);
    	eim.schedule("monsterSpawn", delay);
        eim.broadcastPlayerMsg(6, "下一个boss将在 "+Math.floor(delay/1000)+" 秒后出现！");
    } else if (mobnum == monster.length) {
        //所有boss挑战完成
        eim.broadcastPlayerMsg(6, "你已通关本次无限塔！");
    }
}

function opennpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}

function playerDead(eim, player) {

}

function playerRevive(eim, player) {
    return false;
    /*if (player.getReviveCount() > 0) {
		var map = player.getMap();
		player.eventRevive(map, map.getPortal(0), true, new java.awt.Point(-1208,215));
		player.openNpc(0,"事件解卡");
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(backMap);
	player.changeMap(map, map.getPortal(0));
	return true;*/
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobid) {
    return 0;
}

function leftParty(eim, player) {
    eim.unregisterPlayer(player);
    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(0));
    eim.disposeIfPlayerBelow(0, 0);
    em.setProperty("state", "0");
}

function disbandParty(eim, player) {
    eim.disposeIfPlayerBelow(100, returnmap);
    em.setProperty("state", "0");
}

function clearPQ(eim) {
}

function removePlayer(eim, player) {
    eim.dispose();
}

function registerCarnivalParty(eim, carnivalparty) {
}

function onMapLoad(eim, player) {
}

function cancelSchedule() {
}