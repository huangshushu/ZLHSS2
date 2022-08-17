var mapIds = [450013810, 450013300, 450013500, 450013750];

//自定义复活次数
var reviveCount = 5;
var random = new java.util.Random();
var TimeA = 60 * 60 * 1000;
var MaxDamage = [], MaxName = [], DISPLAY;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
	em.setProperty("leader", "false");//判断地图
    var eim = em.newInstance("BossBlackMage_HARD");
			  em.setProperty("leader", "false");
    for (var i = 0; i < mapIds.length; i++) {
        var map = eim.setInstanceMap(mapIds[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    //  eim.schedule("summonFall", 5000);
    eim.startEventTimer(TimeA);//60分钟
    startOnePart(eim);
    return eim;
}

function playerEntry(eim, player) {
	/* 下面的内容是要复制的 */
    DISPLAY = true;//true 显示 队友 | false 不显示队友
    /* Register = 注册项目制进去 */
    Register(eim, player);
    /* 这里的内容是要复制的 */
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);//地图复活次数
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        player.eventRevive();
        player.changePortal(0);
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(450012500);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != mapIds[0] && mapid != mapIds[1] && mapid != mapIds[2] && mapid != mapIds[3]) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("state1", "0");
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
function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case 8880504://这个是攻击这个怪物显示伤害
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
};

function monsterKilled(eim, player, mobID) {
    switch (mobID) {
        case 8880504://最后要显示输出伤害的怪物id 通畅都是最后的一个boss
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, TimeA, "黑魔法师", 282);
            break;
    }
};
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function allMonstersDead(eim) {


    var state = em.getProperty("state");
    switch (state) {
        case "1":
            var map2 = eim.getMapInstance(mapIds[1]);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
            }
            startTwoPart(eim);
            break;
        case "2":
            var map3 = eim.getMapInstance(mapIds[2]);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map3, map3.getPortal(0));
            }
            startThreePart(eim);
            break;
       /* case "3":
            var map4 = eim.getMapInstance(mapIds[3]);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(map4, map4.getPortal(0));
            }
            startFourPart(eim);
            break;*/
    }

}

function showTopMapOne(eim) {//
    var state = em.getProperty("state");
    if (state == "1") {
        var count = random.nextInt(3) + 5;
        ////eim.showMapEventEffect(mapIds[0],1,count);
    }
}

function showTopMapTwoA(eim) {//
    var state = em.getProperty("state");
    var time = 20000;
    if (state == "2") {
        ////eim.showMapEventEffect(mapIds[1],4,8);
        eim.schedule("showTopMapTwoA", time);
    }
}

function showTopMapTwoB(eim) {//
    var state = em.getProperty("state");
    var time = 35000;
    if (state == "2") {
        ////eim.showMapEventEffect(mapIds[1],5,14);
        eim.schedule("showTopMapTwoB", time);
    }
}

function showTopMapTwoC(eim) {//
    var state = em.getProperty("state");
    if (state == "1") {
        var count = random.nextInt(3) + 1;
        ////eim.showMapEventEffect(mapIds[1],1,count);
    }
}

function showTopMapThreeA(eim) {//
    var state = em.getProperty("state");
    var time = 8000;
    if (state == "3") {
        ////eim.showMapEventEffect(mapIds[2],6,10);

        eim.schedule("showTopMapThreeA", time);
    }
}
function showTopMapThreeB(eim) {//
    var state = em.getProperty("state");
    var time = 15000;
    if (state == "3") {
        ////eim.showMapEventEffect(mapIds[2],7,8);
        eim.schedule("showTopMapThreeB", time);
    }
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerDead(eim, player) {
}

function cancelSchedule() {
}

function monsterDrop(eim, player, mob) {
}

function pickUpItem(eim, player, itemID) {
}


function startOnePart(eim) {
    var mapForMob = eim.getMapInstance(mapIds[0]);
    var mobid = 8880501;//黑
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(89000000000000000);//200万亿
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.disableSpawnRevives();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 85));

    mobid = 8880500;//白
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(169000000000000000);//200万亿200000000000000
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.disableSpawnRevives();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(358, 85));
    showTopMapOne(eim);
}

function startTwoPart(eim) {
    em.setProperty("state", "2");
    var mapForMob = eim.getMapInstance(mapIds[1]);
    var mobid = 8880502;//老黑
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(510000000000000000);//1000万亿
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.disableSpawnRevives();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-11, 85));
    showTopMapTwoA(eim);
    showTopMapTwoB(eim);
    showTopMapTwoC(eim);
    //eim.showMapEventEffect(mapIds[1],2,1);
}

function startThreePart(eim) {
    em.setProperty("state", "3");
    var mapForMob = eim.getMapInstance(mapIds[2]);

    var mobid = 8880504;//
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(610000000000000000);//1000万亿1000000000000000
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.disableSpawnRevives();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 85));

    //  mobid = 8880520;//
    //  mob = em.getMonster(mobid);
    //  modified = em.newMonsterStats();
    // modified.setOHp(3000000000000000);//1000万亿1000000000000000
    // modified.setOMp(mob.getMobMaxMp() * 2);
    // mob.getStats().setPhysicalAttack(499999999);//物理伤害
    // mob.getStats().setMagicAttack(499999999);//魔攻伤害
    // mob.getStats().setAcc(500000);
    // mob.getStats().setPDRate(50);
    // mob.getStats().setMDRate(50);
    // mob.getStats().setLevel(220);
    // mob.setOverrideStats(modified);
    // mob.disableSpawnRevives();
    // eim.registerMonster(mob);
    // mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 85));
    showTopMapThreeA(eim);
    showTopMapThreeB(eim);
}

function startFourPart(eim) {
    em.setProperty("state", "4");
    var mapForMob = eim.getMapInstance(mapIds[3]);

    var mobid = 8880504;//白云老黑
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(160000000000000000);//100万亿
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.disableSpawnRevives();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(128, 218));
    //eim.showMapEventEffect(mapIds[3],3,1);
    //eim.showMapEventEffect(mapIds[3],8,1);
}

/* 下面的内容要进行复制的 这里往下的内容都是傻瓜式复制粘贴到最下面*/
function C_THREAD(eim, Char, time, name, type) {
    var max = Math.max.apply(null, MaxDamage);
    var minutes = Math.floor((time - eim.getTimeLeft()) / (60 * 1000));
    var seconds = Math.floor((time - eim.getTimeLeft()) % (60 * 1000) / 1000);
    eim.setProperty("minutes", minutes);
    eim.setProperty("seconds", seconds);
    var Content = []
    var group = [];
    Content.push("　[ BOSS副本 ]　" + format(" ", 42, name.toString()));
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var Player = eim.getPlayers().get(i)
        var limitBreak = Player.getStat().getLimitBreak(Player)
        if (Char.getParty().getLeader().getId() == Player.getId()) {
            Content.push("　[ 副本队长 ]　" + format(" ", 15, Player.getName().toString()) + "　破攻　" + format(" ", 22, (limitBreak).toString()));
        } else {
            Content.push("　[ 副本队员 ]　" + format(" ", 15, Player.getName().toString()) + "　破攻　" + format(" ", 22, (limitBreak).toString()));
        }
        var C_A = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A") / 1E8)
        var C_B = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_C") / 1E8)
        var C_C = (parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A")) / (minutes * 60 + seconds)) / 1E8

        if (DISPLAY) {
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("总　伤害 " + format(" ", 10, C_A.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("最高伤害 " + format(" ", 10, C_B.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("秒　　伤 " + format(" ", 10, C_C.toFixed(2).toString()) + " E").toString()));
        };
        group.push("[" + [Player.getId(), "'" + Player.getName() + "'", C_A] + "]");
    }
    Content.push("　[ 击杀时间 ]　" + format(" ", 42, ("" + minutes + " 分钟 " + seconds + " 秒").toString()));
    Content.push("　[ 全场最佳 ]　" + format(" ", 42, MaxName[MaxDamage.indexOf(max)].toString()));
    for (var i in Content) {
        em.worldSpouseMessage(0x16, Content[i]);
    }

    //em.worldMessageEffect("玩家 " + Char.getParty().getLeader().getName() + " 挑战排行榜副本： " + name + " 时间： " + minutes + " 分钟 " + seconds + " 秒 !!!", type, 10);
    eim.setProperty("groupgame", "[" + group + "]");
    //eim.getPlayers().get(0).openNpc(0, "goodtext");
}

function Register(eim, chr) {
    var DOMList = ["-D_A", "-D_D", "-D_B", "-D_C"];
    for (var i in DOMList) {
        eim.setProperty(chr.getId() + DOMList[i], "0");
    }
}
function C_UP(eim, chr, damage) {
    D_A = parseInt(eim.getProperty(chr.getId() + "-D_A"));//累计值
    D_B = parseInt(eim.getProperty(chr.getId() + "-D_B"));//攻击值
    D_C = parseInt(eim.getProperty(chr.getId() + "-D_C"));//最高值
    D_A += parseInt(Math.abs(damage))
    D_B += 1
    D_D = parseInt(Math.abs(damage))//伤害值
    eim.setProperty(chr.getId() + "-D_D", String(D_D));
    eim.setProperty(chr.getId() + "-D_B", String(D_B));
    eim.setProperty(chr.getId() + "-D_A", String(D_A));
    if (parseInt(Math.abs(damage)) > D_C) {
        eim.setProperty(chr.getId() + "-D_C", String(Math.abs(damage)));
    }
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        MaxDamage[i] = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A"));
        MaxName[i] = eim.getPlayers().get(i).getName();
    }
    var max = Math.max.apply(null, MaxDamage);
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
