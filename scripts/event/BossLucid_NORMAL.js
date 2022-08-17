

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
var moblevel = 240;
var smallMobHp = 10000000000;
var bossHp = 3000000000000000;
var TimeA = 1000 * 60 * 40;
var MaxDamage = [], MaxName = [], DISPLAY;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");//判断地图
}

function setup(level, leaderid) {
    level = moblevel;
    var eim = em.newInstance("BossLucid_NORMAL");
    em.setProperty("state", "1");
    em.setProperty("leader", "false");//判断地图
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

    mobid = 8880177;//最后的音乐盒
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
    modified.setOHp(bossHp * 2);
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
    /* 下面的内容是要复制的 */
    DISPLAY = true;//true 显示 队友 | false 不显示队友
    /* Register = 注册项目制进去 */
    Register(eim, player);

    for (var i = 0; i < eim.getPlayerCount(); i++) {
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
    if (player.getReviveCount() < 1) {
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
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function monsterValue(eim, mobid) {
    switch (mobid) {
        case 8880140:
            var mapA = eim.getMapInstance(450004550);
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8880167:
            //var mapA = eim.getMapInstance(450004550);
            //for (var i = 0; i < eim.getPlayerCount() ; i++) {
            //eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            //}
            //这里刷宝箱，就加了个尾巴，这种有冲突的 怎么改

            eim.setProperty("Name", "[困难] 路西德");
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


function allMonstersDead(eim) {
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case 8880151://这个是攻击这个怪物显示伤害 这里BOSSIDZIJIHUIXIE自己会写吧 
           // player.dropMessage(0x10,"吊死BBOSS")
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
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
    switch (mobID) {
        case 8880151://最后要显示输出伤害的怪物id 通畅都是最后的一个boss
            //player.dropMessage(0x10, "打死了怪物")
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, TimeA, "路西德", 282);
            break;
    }
    // 可留空，主要处理怪物死亡后的逻辑代码
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