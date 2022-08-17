/* This is mada by Care

 * 单阶段BOSS

 * global em

 * 脚本定制 技术支持 游戏顾问 50009219

 */

//自定义复活次数
var reviveCount = 3;
/* 这是变量写入副本时间 打完计算剩余时间 */
var MaxDamage = [], MaxName = [], DISPLAY;
/* 上面的内容是要复制的 */

/* 开始地图 退出地图 副本时间 BOSS */
var Group = [867139600, 101050000, 5400000, 9601105]

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, CharID) {
    em.setProperty("state", "1")
    em.setProperty("leader", "false")

    var eim = em.newInstance("danrenfuben" + CharID);
    var map = eim.setInstanceMap(Group[0]);
    map.resetFully();
    map.killAllMonsters(false);

    var mob = em.getMonster(Group[3]);//怪物Id 在上面的变量内
    Attribute = em.newMonsterStats();
    Attribute.setOHp(1000000000000000);//血量
    Attribute.setOMp(mob.getMobMaxMp());
    Attribute.setOExp(1000);
    stats = mob.getStats();
    stats.setPhysicalAttack(500);//攻击?
    stats.setMagicAttack(500);//攻击?
    stats.setPDRate(10);//这个好像是防御不百分比
    stats.setMDRate(10);//一样魔防
    stats.setAcc(50000);//闪避
    stats.setSpeed(100);//移速
    stats.setLevel(275);//等级
    stats.setExp(1000);//经验
    stats.setChange(true);
    mob.setOverrideStats(Attribute);
    eim.registerMonster(mob);
    eim.setProperty("HPstate", "1");
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(708, 123));
    eim.startEventTimer(Group[2]);
    //eim.schedule("summonFall", 5000);
    //eim.schedule("checkChrHP", 2000);
    return eim;

}

function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case Group[3]:
            break;
    }
};


function monsterKilled(eim, player, mobID) {
    switch (mobID) {
        case Group[3]:

            break;
    }
};

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
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(Group[1]);
    player.changeMap(map, map.getPortal(0));
    return true;
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, Group[1]);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != Group[0]) {
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
        case 9601105://这个是攻击这个怪物显示伤害
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
};

function monsterKilled(eim, player, mobID) {
    switch (mobID) {
        case 9601105://最后要显示输出伤害的怪物id 通畅都是最后的一个boss
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, 5400000, "庆典年兽", 282);
            var map = eim.getMapInstance(0);
            map.spawnNpc(NPCID写这里, new java.awt.Point(-89, 314));
            /* 上面的内容是要复制的 */
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

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, Group[1])) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.setProperty("HPstate", "-1");
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 4500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(2 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(Group[3]);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size(); i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function pickUpItem(eim, player, itemID) {
}

/* -------------------------- 变量区 -------------------------- */

/* C_worldMessage */
var encode_version = 'sojson.v4'; var __0x104d6 = ['woDDtMK5BGXDiMOIBCBXOsKyUA==', 'wqJyw5fCusKqEsKtTg==', 'U8O8wqw3fA==', 'woZhw4HDqUbCrsOuEcOAN8Kiw63Cig7CvMOAUMOMO3R2', 'FDPCjcOAwrs0Oid5wppJ', 'fUgIw7I0wqYiDMObb2LCgcOIK8Oow6k=', 'BznClsOlwqY=', 'BlNNPcKxwp3DmxzDi8OXwrTCq8OLw5giwpRawo0=']; (function (_0x4c50e7, _0x13e16d) { var _0x4c4549 = function (_0x43f7b3) { while (--_0x43f7b3) { _0x4c50e7['push'](_0x4c50e7['shift']()); } }; _0x4c4549(++_0x13e16d); }(__0x104d6, 0xd9)); var _0x2888 = function (_0x574cf8, _0x391eb0) { _0x574cf8 = _0x574cf8 - 0x0; var _0x92ebfd = __0x104d6[_0x574cf8]; if (_0x2888['initialized'] === undefined) { (function () { var _0x3e2772 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this; var _0x418a21 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x3e2772['atob'] || (_0x3e2772['atob'] = function (_0x2165ef) { var _0x821828 = String(_0x2165ef)['replace'](/=+$/, ''); for (var _0x3b7cb5 = 0x0, _0x5a0930, _0x8d24e4, _0xb78fd7 = 0x0, _0x23ab77 = ''; _0x8d24e4 = _0x821828['charAt'](_0xb78fd7++); ~_0x8d24e4 && (_0x5a0930 = _0x3b7cb5 % 0x4 ? _0x5a0930 * 0x40 + _0x8d24e4 : _0x8d24e4, _0x3b7cb5++ % 0x4) ? _0x23ab77 += String['fromCharCode'](0xff & _0x5a0930 >> (-0x2 * _0x3b7cb5 & 0x6)) : 0x0) { _0x8d24e4 = _0x418a21['indexOf'](_0x8d24e4); } return _0x23ab77; }); }()); var _0x34d221 = function (_0x19bf46, _0x6888ac) { var _0x159264 = [], _0x4fad61 = 0x0, _0x5af4aa, _0x4e0662 = '', _0x528fad = ''; _0x19bf46 = atob(_0x19bf46); for (var _0x406bf9 = 0x0, _0x4f5149 = _0x19bf46['length']; _0x406bf9 < _0x4f5149; _0x406bf9++) { _0x528fad += '%' + ('00' + _0x19bf46['charCodeAt'](_0x406bf9)['toString'](0x10))['slice'](-0x2); } _0x19bf46 = decodeURIComponent(_0x528fad); for (var _0x2e8f80 = 0x0; _0x2e8f80 < 0x100; _0x2e8f80++) { _0x159264[_0x2e8f80] = _0x2e8f80; } for (_0x2e8f80 = 0x0; _0x2e8f80 < 0x100; _0x2e8f80++) { _0x4fad61 = (_0x4fad61 + _0x159264[_0x2e8f80] + _0x6888ac['charCodeAt'](_0x2e8f80 % _0x6888ac['length'])) % 0x100; _0x5af4aa = _0x159264[_0x2e8f80]; _0x159264[_0x2e8f80] = _0x159264[_0x4fad61]; _0x159264[_0x4fad61] = _0x5af4aa; } _0x2e8f80 = 0x0; _0x4fad61 = 0x0; for (var _0x2ca2db = 0x0; _0x2ca2db < _0x19bf46['length']; _0x2ca2db++) { _0x2e8f80 = (_0x2e8f80 + 0x1) % 0x100; _0x4fad61 = (_0x4fad61 + _0x159264[_0x2e8f80]) % 0x100; _0x5af4aa = _0x159264[_0x2e8f80]; _0x159264[_0x2e8f80] = _0x159264[_0x4fad61]; _0x159264[_0x4fad61] = _0x5af4aa; _0x4e0662 += String['fromCharCode'](_0x19bf46['charCodeAt'](_0x2ca2db) ^ _0x159264[(_0x159264[_0x2e8f80] + _0x159264[_0x4fad61]) % 0x100]); } return _0x4e0662; }; _0x2888['rc4'] = _0x34d221; _0x2888['data'] = {}; _0x2888['initialized'] = !![]; } var _0x1293d7 = _0x2888['data'][_0x574cf8]; if (_0x1293d7 === undefined) { if (_0x2888['once'] === undefined) { _0x2888['once'] = !![]; } _0x92ebfd = _0x2888['rc4'](_0x92ebfd, _0x391eb0); _0x2888['data'][_0x574cf8] = _0x92ebfd; } else { _0x92ebfd = _0x1293d7; } return _0x92ebfd; }; function C_worldMessage(_0x94cca2, _0x171462) { Packages[_0x2888('0x0', '8rn*')][_0x2888('0x1', 'vn]G')][_0x2888('0x2', 'l0^o')][_0x2888('0x3', 'JhNJ')]()[_0x2888('0x4', 'L!To')](Packages[_0x2888('0x5', 'JhNJ')][_0x2888('0x6', '^^n1')][_0x2888('0x7', 'nnFz')](_0x94cca2, _0x171462)); }; encode_version = 'sojson.v4';

function C_worldMessageEffect(jqX$HcgMU1, KP2, _JzQsQMg3) {    /* 全服公告 */     return Packages["\x68\x61\x6e\x64\x6c\x69\x6e\x67"]["\x77\x6f\x72\x6c\x64"]["\x57\x6f\x72\x6c\x64\x42\x72\x6f\x61\x64\x63\x61\x73\x74\x53\x65\x72\x76\x69\x63\x65"]["\x67\x65\x74\x49\x6e\x73\x74\x61\x6e\x63\x65"]()["\x62\x72\x6f\x61\x64\x63\x61\x73\x74\x4d\x65\x73\x73\x61\x67\x65"](Packages["\x74\x6f\x6f\x6c\x73"]["\x70\x61\x63\x6b\x65\x74"]["\x55\x49\x50\x61\x63\x6b\x65\x74"]["\x67\x65\x74\x4d\x61\x70\x45\x66\x66\x65\x63\x74\x4d\x73\x67"](jqX$HcgMU1, KP2, _JzQsQMg3)); }

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
