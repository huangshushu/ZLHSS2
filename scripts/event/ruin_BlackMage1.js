var reviveCount = 0;
var TimeA = 1000 * 60 * 30;
var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
    211042300,
    280030200,
    280030100,
    280030000
);
/* 入包信息 */
var ruingroup = [
    [4000000, 1, 5, "蓝色蜗牛壳"],
    [4000001, 1, 5, "花蘑菇盖"],
    [4000002, 1, 5, "蝴蝶结"],
    [4000003, 1, 5, "树枝"],
    [4000004, 1, 5, "绿液球"],
    [4000005, 1, 5, "叶子"]
]

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    var eim = em.newInstance("ruin_BlackMage");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }

    em.setProperty("state", "1");
    em.setProperty("leader", "true");

    mobid = 8800400;//蜘蛛女王
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(150000000000000000);
    mob.setHp(150000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(211042300);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-2053, -333));

    mobid = 8800020;//弱化扎昆
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800023;//弱化扎昆手臂1
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800024;//弱化扎昆手臂2
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800025;//弱化扎昆手臂3
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800026;//弱化扎昆手臂4
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800027;//弱化扎昆手臂5
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800028;//弱化扎昆手臂6
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800029;//弱化扎昆手臂7
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800030;//弱化扎昆手臂8
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(100000000000000000);
    mob.setHp(100000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030200);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));

    mobid = 8800000;//普通扎昆
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(600000000000000000);
    mob.setHp(600000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800003;//普通扎昆手臂1
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800004;//普通扎昆手臂2
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800005;//普通扎昆手臂3
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800006;//普通扎昆手臂4
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800007;//普通扎昆手臂5
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800008;//普通扎昆手臂6
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800009;//普通扎昆手臂7
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800010;//普通扎昆手臂8
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(200000000000000000);
    mob.setHp(200000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030100);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));

    mobid = 8800100;//进阶扎昆
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(900000000000000000);
    mob.setHp(900000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800103;//进阶扎昆手臂1
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800104;//进阶扎昆手臂2
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800105;//进阶扎昆手臂3
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800106;//进阶扎昆手臂4
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800107;//进阶扎昆手臂5
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800108;//进阶扎昆手臂6
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800109;//进阶扎昆手臂7
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
	mobid = 8800110;//进阶扎昆手臂8
    mob = em.getMonster(mobid);
    mob.changeLevel(275);
    mob.getChangedStats().setOHp(300000000000000000);
    mob.setHp(300000000000000000);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(280030000);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 86));
	
    eim.startEventTimer(TimeA);// 60分钟 
    eim.schedule("summonFall", 2000);
    eim.schedule("stage1", 7000);//第一关小怪
    return eim;
}
function stage1(eim) {
    var map = eim.getMapInstance(211042300);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(2600414);//一阶段小怪
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1600 - i * 320, 85));

    }
    map.startMapEffect("愤怒的蜘蛛女王出现了!", 5120182);
    eim.schedule("stage1", 20000);
}

function stage2(eim) {
    var map = eim.getMapInstance(280030200);

    for (var i = 0; i < 2; i++) {
        var mob = em.getMonster(8644630);//锁链
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400 - i * 800, 88));

    }
    map.startMapEffect("第一阶段弱化扎昆出现了！", 5120182);
    eim.schedule("stage2", 15000);
}

function stage3(eim) {
    var map = eim.getMapInstance(280030200);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8880507);//左墙
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-700, 88));

    }

    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8880508);//右墙
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(700, 88));

    }


}

function stage4(eim) {//第二阶段闪电


    var map = eim.getMapInstance(280030200);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8880506);
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(550 - i * 1100, 88));

    }
    map.startMapEffect("第二阶段梦幻扎昆出现了！", 5120182);

    eim.schedule("stage4", 30000);
}

function stage5(eim) {//第三阶段放射物

    var map = eim.getMapInstance(280030100);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8880509);
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(500 - i * 1000, 85));

    }
    map.startMapEffect("噩梦扎昆降临，颤抖吧！凡人！", 5120182);
}

function stage6(eim) {
    var map = eim.getMapInstance(280030100);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8642064);
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(700 - i * 280, 85));

    }
    map.startMapEffect("想要击败神的旨意,必须选择创造与破坏的力量与之抗衡", 5120182);
    eim.schedule("stage6", 20000);
}
function stage7(eim) {
    var map = eim.getMapInstance(280030000);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8642064);
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 218));

    }
    //map.startMapEffect("看他的样子,像是拥有了神的技能,即便他是神,也必须为了大家将他挡下", 5120182);

}

function stage8(eim) {
    var map = eim.getMapInstance(280030000);
    for (var i = 0; i < 1; i++) {
        var mob = em.getMonster(8642064);
        modified = em.newMonsterStats();
        modified.setOHp(1);
        modified.setOMp(mob.getMobMaxMp());
        mob.getStats().setPhysicalAttack(500000);//物理伤害
        mob.getStats().setMagicAttack(500000);//魔攻伤害
        mob.getStats().setPDRate(90);      //减伤百分比
        mob.getStats().setMDRate(90);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 218));

    }
    map.startMapEffect("看他的样子,像是拥有了神的技能,即便他是神,也必须为了大家将他挡下", 5120182);
    //eim.schedule("stage8", 15000);
}
function stage9(eim) {
    eim.startEventTimer(1000 * 10 * 1);
    var map = eim.getMapInstance(280030000);
    map.startMapEffect("[噩梦扎昆] 已通关，10S退出副本", 5120182);
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        txt = "";
        for (u = 0; u <= 4; u++) {/* 给予5个物品 */
            var con = ruingroup[Math.floor(Math.random() * ruingroup.length)];
            var count = randomRange(con[1], con[2]);
            txt += format(" ", 16, con[3].toString()) + " x " + count + "\r\n";
            eim.getPlayers().get(i).gainItem(con[0], count, "战利品");
        }
        eim.getPlayers().get(i).dropMessage(1, txt);
    }
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}




function changedMap(eim, player, mapid) {

    switch (mapid) {
        case 211042300: // 
            em.setProperty("state", "1");
            var map = eim.getMapInstance(211042300);
            break;

        case 280030200:
            em.setProperty("state", "2");
            var map = eim.getMapInstance(280030200);
            break;

        case 280030100:
            em.setProperty("state", "3");
            var map = eim.getMapInstance(280030100);
            break;
        case 280030000:
            em.setProperty("state", "4");
            var map = eim.getMapInstance(280030000);
            break;

    }

    switch (mapid) {
        case 211042300:
        case 280030200:
        case 280030100:
        case 280030000:
            return;
    }
    player.dropMessage(6, "[噩梦扎昆] 已退出挑战。");
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}
function monsterValue(eim, mobid) {
    //eim.broadcastPlayerMsg(3, "STATE - " + em.getProperty("state"));
    switch (mobid) {
        case 8800400:
            eim.schedule("stage2", 10000);
            eim.schedule("stage3", 5000);
            eim.schedule("stage4", 25000);
            var mapA = eim.getMapInstance(280030200);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8800020:
            eim.schedule("stage5", 5000);
            eim.schedule("stage6", 10000);
            var mapA = eim.getMapInstance(280030100);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;
			
		case 8800000:
            if (em.getProperty("state") == 4) {
                eim.schedule("stage9", 5000);
            } else {
                eim.schedule("stage7", 15000);
                eim.schedule("stage8", 5000);
                var mapA = eim.getMapInstance(280030000);
                for (var i = 0; i < eim.getPlayerCount(); i++) {
                    eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
                }
            }
            break;

        case 8800100:
			eim.schedule("stage9", 5000);
            break;
    }
    return 1;
}

function summonFall(eim) {
    var state = parseInt(em.getProperty("state"));

    switch (state) {
        case 1:
            var time = 3000;
            var map = eim.getMapInstance(MapList[state - 1]);
            if (map != null) {
                map.obtacleFall(6, 33, 33);
                eim.schedule("summonFall", time);
            }
            break;
        case 2:
            var time = 3000;
            var map = eim.getMapInstance(MapList[state - 1]);
            if (map != null) {
                map.obtacleFall(6, 24, 24);
                eim.schedule("summonFall", time);
            }
            break;
        case 3:
            var time = 6000;
            var map = eim.getMapInstance(MapList[state - 1]);
            if (map != null) {
                map.obtacleFall(5, 23, 23);
                eim.schedule("summonFall", time);
            }
            break;
        case 4:
            var time = 10000;
            var map = eim.getMapInstance(MapList[state - 1]);
            if (map != null) {
                map.obtacleFall(5, 22, 22);
                eim.schedule("summonFall", time);
            }
            break;
    }

}

function monsterKilled(eim, player, cp) {
}
function allMonstersDead(eim) {
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
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
function cancelSchedule() {
}

function playerDead(eim, player) {
}

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[噩梦扎昆] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 101050000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
}

function scheduledTimeout(eim) {
    //eim.broadcastPlayerMsg(1, "[噩梦扎昆副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
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

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}