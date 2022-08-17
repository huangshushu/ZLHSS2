/*
 * Ruin - 排序 - 通用副本
 * 脚本定制 技术顾问 50009219
 */
//自定义复活次数
var reviveCount = 3;
/* 这是变量写入副本时间 打完计算剩余时间 */
var TimeA = 60 * 60 * 1000;
var MaxDamage = [], MaxName = [], DISPLAY;
/* 上面的内容是要复制的 */
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");
    var eim = em.newInstance("ABDafny");
    var map = eim.setInstanceMap(970072000);
    map.resetFully();
    map.killAllMonsters(false);
    eim.startEventTimer(TimeA);

    var mob = em.getMonster(8881000);
    Attribute = em.newMonsterStats();
    Attribute.setOHp(1500000000000000);
    Attribute.setOMp(mob.getMobMaxMp());
    stats = mob.getStats();
    stats.setPhysicalAttack(100);
    stats.setMagicAttack(100);;
    stats.setPDRate(100);
    stats.setMDRate(100);
    stats.setAcc(500000);
    stats.setSpeed(200);
    stats.setLevel(250);
    stats.setExp(1000);
    stats.setChange(true);
    mob.setOverrideStats(Attribute);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(13, 85));
    return eim;
}

function playerEntry(eim, player) {
    /* 下面的内容是要复制的 */
    DISPLAY = true;//true 显示 队友 | false 不显示队友
    /* Register = 注册项目制进去 */
    Register(eim, player);
    /* 这里的内容是要复制的 */
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    var map = player.getReviveCount() > 0 ? player.getMap() : eim.getMapFactoryMap(910000000);
    player.DeathRevive(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 970072000) {
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

function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case 8881000://这个是攻击这个怪物显示伤害
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
};

function monsterKilled(eim, player, mobID) {
    switch (mobID) {
        case 8881000://最后要显示输出伤害的怪物id 通畅都是最后的一个boss
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, 60 * 60 * 1000, "乌鲁斯", 282);
            var map = eim.getMapInstance(0);
            map.spawnNpc(NPCID写这里, new java.awt.Point(-89, 314));
            /* 上面的内容是要复制的 */
            break;
    }
};

/* 这个也要看有没有 没有也要加入 这里是遍历角色 执行 NPC */
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
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
    eim.disposeIfPlayerBelow(100, 300030300)
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}



function leftParty(eim, player) {
    end(eim);
}

function disbandParty(eim) {
    end(eim);
}

function playerDead(eim, player) {
    //to do
}

function cancelSchedule() {
    //to do
}
function pickUpItem(eim, player, itemID) {
}
/* 下面的内容要进行复制的 */
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
            Content.push("　[ 副本队长 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        } else {
            Content.push("　[ 副本队员 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        }
        var C_A = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A") / 1E8)
        var C_B = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_C") / 1E8)
        var C_C = (parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A")) / (minutes * 60 + seconds)) / 1E8

        if (DISPLAY) {
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("BOSS血量 " + format(" ", 12, C_A.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("最高伤害 " + format(" ", 12, C_B.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("平均秒伤 " + format(" ", 12, C_C.toFixed(2).toString()) + " E").toString()));
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
