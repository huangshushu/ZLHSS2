/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能: 浓姬副本
 *  @Author Kent 
 */
var minPlayers = 1;
var TimeA = 1800000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossPrincessNoPQ");
    eim.setProperty("stage1", "0");
    eim.setProperty("stage2", "0");
    eim.setProperty("stage3", "0");
    eim.setProperty("stage4", "0");
    eim.setProperty("stage5", "0");
    //第一阶段
    eim.setInstanceMap(811000100).resetFully();

    //第二阶段
    eim.setInstanceMap(811000200).resetFully();

    //第三阶段
    var map = eim.setInstanceMap(811000300);
    map.resetFully();
    var mob = em.getMonster(9450013);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(37, -263));
    //map.getReactorByName("summon_boss").forceHitReactor(1); //lounge
    mob = em.getMonster(9450012);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-417, -28));
    mob = em.getMonster(9450012);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-417, -263));
    mob = em.getMonster(9450012);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(505, -261));
    mob = em.getMonster(9450012);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(505, -26));
    mob = em.getMonster(9450012);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(60, -28));

    //第四阶段
    eim.setInstanceMap(811000400).resetFully();

    //第五阶段 最终阶段
    map = eim.setInstanceMap(811000500);
    map.resetFully();
    map.spawnNpc(9130110, new java.awt.Point(-563, -390));
    map.spawnNpc(9130111, new java.awt.Point(-467, -570));
    map.spawnNpc(9130112, new java.awt.Point(-15, -683));
    map.spawnNpc(9130113, new java.awt.Point(460, -572));
    map.spawnNpc(9130114, new java.awt.Point(545, -391));

    mob = em.getMonster(9450022);
    mob.getStats().setChange(true);
    mob.changeLevel(220);
    mob.getChangedStats().setOHp(101050000000);
    mob.setHp(101050000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(360, -206));

    eim.setInstanceMap(811000600).resetFully();
    eim.startEventTimer(TimeA); //30 mins
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ 困 难 ] 浓　姬");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }

    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    //player.tryPartyQuest(1204);
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 811000100 || mapid > 811000600) {
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
    switch (mobId) {
        case 9450022:
            eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
            openNpc(eim, 1540008, "TimCareU");
            break;
    }
    return 1;
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 811000999);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(1, 811000999)) {
        end(eim);
    }
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}


function clear(eim) {
    eim.setProperty("stage" + stage.toString() + "status", "clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate", 2);
}

function stage1Check(eim) {
    if (eim.getProperty("stage1").equals("0")) {
        var map = eim.getMapInstance(0);
        var mob = em.getMonster(9450004);//水镜
        eim.registerMonster(mob);
        eim.setProperty("stage1", "1");//召唤小BOSS 
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(378, -563));
    }
}

function stage2Check(eim) {
    var map = eim.getMapInstance(1);
    if (!eim.getProperty("stage2").equals("4")) {
        var s = parseInt(eim.getProperty("stage2")) + 1;
        var pos;
        switch (s) {
            case 1:
                pos = new java.awt.Point(-374, -5);
                break;
            case 2:
                pos = new java.awt.Point(370, -148);
                break;
            case 3:
                pos = new java.awt.Point(-336, -299);
                break;
            case 4:
                pos = new java.awt.Point(310, -498);
                break;
        }
        for (i = 0; i < 8; i++) {
            var mob = em.getMonster(9450005 + s);
            map.spawnMonsterOnGroundBelow(mob, pos);
        }
        eim.setProperty("stage2", String(s));
    } else {
        var mob = em.getMonster(9450010);//莲华
        eim.registerMonster(mob);
        eim.setProperty("stage2", "5");//召唤小BOSS  
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(260, 145));
    }
}

function stage3Check(eim) {
    /*
     * 9450011 - 翁罗将军的召唤兽
     * 9450043 - 翁罗将军的召唤兽
     * 9450044 - 翁罗将军的召唤兽
     * 9450045 - 翁罗将军的召唤兽
     * 9450046 - 翁罗将军的召唤兽
     */
    var map = eim.getMapInstance(2);
    if (eim.getProperty("stage3").equals("0")) {
        eim.setProperty("stage3", "1");
        for (i = 0; i < 5; i++) {
            var mob = em.getMonster(9450011);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-417, -28));
        }
        for (i = 0; i < 5; i++) {
            var mob = em.getMonster(9450043);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-417, -263));
        }
        for (i = 0; i < 5; i++) {
            var mob = em.getMonster(9450044);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(505, -261));
        }
        for (i = 0; i < 5; i++) {
            var mob = em.getMonster(9450045);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(505, -26));
        }
        for (i = 0; i < 5; i++) {
            var mob = em.getMonster(9450046);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(60, -28));
        }
        eim.schedule("stage3KillMob", 60000);
    }
}

function stage3KillMob(eim) {
    var map = eim.getMapInstance(2);
    var count = map.countMonsterById(9450012); //根据存活的数量来召唤出小BOSS

    map.killAllMonsterById(9450011);
    map.killAllMonsterById(9450043);
    map.killAllMonsterById(9450044);
    map.killAllMonsterById(9450045);
    map.killAllMonsterById(9450046);
    map.killAllMonsterById(9450013);

    var mob = em.getMonster(9450014);//翁罗将军
    eim.registerMonster(mob);
    eim.setProperty("stage3", "2");//召唤小BOSS  
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(50, 145));
}

function stage4Check(eim) {
    if (eim.getProperty("stage4").equals("0")) {
        var map = eim.getMapInstance(3);
        var mob = em.getMonster(9450020);//弥弄矩
        eim.registerMonster(mob);
        eim.setProperty("stage4", "1");//召唤小BOSS 
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(142, 145));
    }
}
function pickUpItem(eim, player, itemID) {
}