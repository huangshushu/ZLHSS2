

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
        450004150, //梦幻森林 挑战路西德
        450004550,
        450004500
        );
var moblevel = 250;
var smallMobHp = 1000000000;
var bossHp = 100000000000000;

function init() {
    em.setProperty("state", "0");
}

function setup(level, leaderid) {
	level = moblevel;
    var eim = em.newInstance("BossLucid_HARD");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    em.setProperty("state", "1");
    //梦幻森林 

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(805, 48));


    mobid = 8880140;//梦中路西德
    mob = em.getMonster(mobid);
    var MobLu = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(bossHp);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1239, 43));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1030, 48));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(925, 48));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(797, 48));

        mobid = 8880160;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(346, 48));

        mobid = 8880160;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1341, 48));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(374, 48));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(smallMobHp);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(450004150);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1648, 48));


    mobid = 8880166;//路西德之花
    mob = em.getMonster(mobid);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1239, 43));

    mobid = 8880164;//噩梦蘑菇
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(608, 43));

    mobid = 8880164;//噩梦蘑菇
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1428, 43));

    mobid = 8880167;//最后的音乐盒
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(888888888);
    //modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(73, 36));


    mobid = 8880151;//路西德
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(bossHp*2);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(657, -490));


    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(122, -550));

    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(122, -550));


    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(537, -685));

    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1211, -378));


    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(786, -194));

    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(329, -125));

    mobid = 8880160;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(smallMobHp);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004550);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(117, -267));



    eim.startEventTimer(1000 * 60 * 40);// 40分钟 
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 简 单 ] 路 西 德");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }
    var map = eim.getMapInstance(0);
    player.restReviveCount();
    player.setReviveCount(5);
    player.dropMessage(6, "[路西德] 进入到了挑战地图，请小心行事。");
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[路西德副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}

function playerDead(eim, player) {
	if(player.getReviveCount()<1){
        var map = eim.getMapInstance(101050000);
        player.changeMap(map, map.getPortal(0));
	}
}

function playerRevive(eim, player) {
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 450004150: // 梦幻森林
            em.setProperty("state", "1");
            var map = eim.getMapInstance(450004150);
            map.startMapEffect("好像存在些什么未知的力量 - 让我们同心协力消灭噩梦女王吧", 5120161);
            break;

        case 450004500:
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450004500);
            map.startMapEffect("时间不多了!赶紧打败军团长 路西德 吧", 5120161);
            break;

        case 450004550:
            em.setProperty("state", "3");
            var map = eim.getMapInstance(450004550);
            map.startMapEffect("想不到你还能通过我的测验？哼哼……", 5120161);

        case 450004250:
            em.setProperty("state", "3");
            var map = eim.getMapInstance(450004550);
            map.startMapEffect("想不到你还能通过我的测验？哼哼……", 5120161);

        case 450004600:
            em.setProperty("state", "4");
            var map = eim.getMapInstance(450004600);
            map.startMapEffect("你们成功阻止了 新军团长 路西德 的入侵 - 请领你们的奖品吧", 5121050);

    }

    switch (mapid) {
        case 450004150:
        case 450004500:
        case 450004550:
        case 450004600:
            return;
    }
    player.dropMessage(6, "[路西德副本] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 101050000);
    }
}


function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    return 0;
}


function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function monsterValue(eim, mobid) {
    switch (mobid) {
        case 8880140:
            var mapA = eim.getMapInstance(450004550);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8880167:
            //var mapA = eim.getMapInstance(450004550);
            //for (var i = 0; i < eim.getPlayerCount() ; i++) {
                //eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            //}
			//这里刷宝箱
			
			eim.setProperty("Name", "[炼狱] 路西德");
			eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
			var TimeA = 1000 * 60 * 40;
			eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
			eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
			openNpc(eim, 1540008, "TimCareU");
    if (eim.getMapInstance(0).getMonsterById(8880167) == null) {
        eim.getMapInstance(450004500).spawnNpc(9000056, new java.awt.Point(73, 36));
    }
            break;

        case 8880151:
            break;

    }
    return 1;
}

function monsterKilled(eim, player, cp) {
}

function allMonstersDead(eim) {
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function monsterDamaged(eim, player, mobid, damage) {
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 101050000);
}

function onMapLoad(eim, player) {
}

function monsterDrop(eim, player, mob) {
}
function monsterKilled(eim, player, mobID) {
    // 可留空，主要处理怪物死亡后的逻辑代码
}