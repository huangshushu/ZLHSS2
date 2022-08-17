var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
		    450004150,//BOSS地图1
	        450004550, //BOSS地图2
	        450004600 //BOSS地图2			
        );
function init() {
    em.setProperty("state", "0");
    // em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Lucid");
	    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
		 }
	var map = eim.setInstanceMap(450004150);
    mobid = 8880171;////噩梦岩石1
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(900000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(609, 43));	
	
    mobid = 8880171;////噩梦岩石2
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(900000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1348, 43));		
	
    mobid = 8880166;////噩梦之花
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(900000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(999, 48));	

    mobid = 8880141;////露西德
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(900000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(999, 48));		
    eim.startEventTimer(1000 * 60 * 60);//第一、二关有15分钟的时间
	
	
	///////2阶段
    mobid = 8880171;////不会动的岩石1
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(65000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(954,-359));

    mobid = 8880171;////不会动的岩石2
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(65000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(378,-907));

    mobid = 8880171;////不会动的岩石3
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(65000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(404,-375));

    mobid = 8880171;////不会动的岩石4
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(65000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1086,-842));
	
    mobid = 8880150;////露西德
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1500000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(613,-490));	
	
	mobid = 8880167;////最后的音乐盒
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(3000000000000);
    modified.setOMp(1000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004600);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(93,35));	
	
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.dropMessage(6, "开始挑战露西德，限时60分钟。");
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return true;
}

function changedMap(eim, player, mapid) {
	    switch (mapid) {
		 case 450004150://BOSS地图
            em.setProperty("state", "1");
            var map = eim.getMapInstance(450004150);
            // map.startMapEffect("你们这几个弱鸡也敢来这里？", 5120129);
		   // map.spawnNpc(3003207, new java.awt.Point(1566, 43));//创建防毒面具			
            // eim.restartEventTimer(1000 * 60 * 60);//第五大关有1小时的时间
            break;
		 case 450004550://BOSS地图
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450004550);
		  //  map.spawnNpc(3003207, new java.awt.Point(1184, -378));//创建防毒面具				
             map.startMapEffect("看来你们还不知道什么是绝望！", 5120129);
            // eim.restartEventTimer(1000 * 60 * 60);//第五大关有1小时的时间
            break;
		 case 450004600://BOSS地图
            em.setProperty("state", "3");
            // var map = eim.getMapInstance(450004600);
		    // map.spawnNpc(3003207, new java.awt.Point(1167, -378));//创建防毒面具			
            // map.startMapEffect("看来你们还不知道什么是绝望！", 5120129);
            eim.restartEventTimer(1000 * 60 * 30);//第五大关有1小时的时间
            break;			
		}
    switch (mapid) {
		case 450004150://BOSS地图1
		case 450004550://BOSS地图2
		case 450004600://BOSS地图2		
            return	
     } 			
	 player.dropMessage(6, "[露西德] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 450004000);
    }
}
function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function playerDisconnected(eim, player) {
    // eim.disposeIfPlayerBelow(100, 450004150);
    // em.setProperty("state", "0");
    // em.setProperty("leader", "true");
    eim.unregisterPlayer(player);
    return 0;
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function monsterValue(eim, mobid) {
		if (mobid == 8880141) {//露西德第二阶段
		eim.getMapFactory().getMap(450004150).killAllMonsters(true);//杀死所有怪物	
	    // var map = eim.getMapInstance(450004150);
		// map.spawnNpc(3003270, new java.awt.Point(1566, 43));//创建露西德
		setupTask = em.schedule("chuansong", 1000 * 1 * 3, eim);//延迟3秒过图
        return 0;
		}
	 if (mobid == 8880150) {
        eim.getMapFactory().getMap(450004550).killAllMonsters(true);//杀死所有怪物
		setupTask = em.schedule("chuansongk", 1000 * 1 * 5, eim);//延迟3秒召唤NPC				
        return 0;
    }	
	if (eim.getMapFactory().getMap(350051200).getCharactersSize() != 0) {
        return 1;
    }
}
function chuansong(eim, player) {
    if (eim.getMapFactory().getMap(450004150).getCharactersSize() != 0) {
        openNpc(eim, 3003270, 1);//monsterdrop 不能使用于地图原有的怪物，只能这样了T.T
    }
}
function chuansongk(eim, player) {
    if (eim.getMapFactory().getMap(450004550).getCharactersSize() != 0) {
	    var map = eim.getMapInstance(450004550);
		// map.spawnNpc(3003271, new java.awt.Point(613,-490));//创建露西德
        openNpc(eim, 3003270, 2);//monsterdrop 不能使用于地图原有的怪物，只能这样了T.T		
    }
}
	
function scheduledTimeout(eim) {
	    eim.broadcastPlayerMsg(1, "[露西德] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 450004000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function clearPQ(eim) {
    scheduledTimeout(eim);
}
function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}
function allMonstersDead(eim) {}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function onMapLoad(eim, player) {
}
function playerDead(eim, player) {}

function monsterDrop(eim, player, mob) {
}
function monsterDrop(eim, player, mob) {}