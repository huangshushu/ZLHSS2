var reviveCount = 10;//自定义复活次数
var TimeA = 1000 * 60 * 10;//时间
var startMap=100000000;//开始地图
var bossMap=450013500;//BOSS地图
var bossCode=7220005;//BOSS代码
var bossLevelName="[ 战 力 ] 贝尔加莫特";//通关记录标识

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
	em.setProperty("time", "false");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("BOSS_JiaMoTe");
    em.setProperty("state", "1");
    eim.setProperty("leader", "false");
	eim.setProperty("time", "true");
    var map = eim.createInstanceMap(bossMap);
    //map.resetFully();
	map.setSpawns(false);
    map.killAllMonsters(true);
	var mob = em.getMonster(bossCode);
	mob.getStats().setChange(true);
	mob.changeLevel(275);
	mob.getChangedStats().setOHp(15069999999999999);
	mob.setHp(15069999999999999);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(21, 85));
	eim.startEventTimer(TimeA); 
    return eim;
}

function playerEntry(eim, player) {
	//for (var i = 0; i < eim.getPlayerCount() ; i++) {
    //}
    //if (i <= 1) {
        eim.setProperty("Name", bossLevelName);
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    //}
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
	//player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
    if (mapid!=bossMap){
		eim.unregisterPlayer(player);
		player.restReviveCount();
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
			eim.setProperty("time", "false");
        }
	}
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    if (eim.disposeIfPlayerBelow(100, startMap)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
		eim.setProperty("time", "false");
    }
	
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(100, startMap)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
		eim.setProperty("time", "false");
    }
}

function monsterValue(eim, mobId) {
    switch (mobId) {
	        case bossCode:
            // eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
            // eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
            // openNpc(eim, 1540008, "TimCareD");
			eim.startEventTimer(1000*60*5);
			//eim.broadcastWeatherEffectNotice("恭喜你挑战成功，请耐心等候 10 秒钟，系统自动结算奖励，请勿点开任何窗口以免掉线", 261, 10);
			eim.getMapInstance(0).sendMapEffect("恭喜你挑战成功，请耐心等候 10 秒钟，系统自动结算奖励，请勿点开任何窗口以免掉线",261,10);
			eim.schedule("openGifts", 10000);
            break;
    }
    return 1;
}

function openGifts(eim)
{
	openNpc(eim, 1540008, "战力奖励领取");
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
		player.eventRevive(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(startMap);
	player.eventRevive(map, map.getPortal(0));
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