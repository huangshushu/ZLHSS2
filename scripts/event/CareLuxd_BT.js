/*
 * 路西德仿官副本
 * Care制作 梦幻冒险岛工作室所有
 * 联系QQ：381991414
 * 欢迎定制各种脚本 
 */

var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var reviveCount = 5; //复活限制
var MapList = Array(
        450004150, //梦幻森林 挑战路西德
        450004500,
        993000500,
        450004600
        );


function init() {
    em.setProperty("state", "0");
}

function setup(level, leaderid) {
    var eim = em.newInstance("CareLuxd_BT");
    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    var map = eim.setInstanceMap(350050100);
    em.setProperty("state", "1");
    //梦幻森林 

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(12000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(805, 48));


    mobid = 8880140;//梦中路西德
    mob = em.getMonster(mobid);
    var MobLu = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1500000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(250);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1239, 43));

        mobid = 8880184;//噩梦石头人
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(12000000000);
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
    modified.setOHp(11010500000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(608, 43));

    mobid = 8880164;//噩梦蘑菇
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004150);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1428, 43));

    mobid = 8880167;//最后的音乐盒
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(7000000000000);
    //modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(73, 36));


    mobid = 9101078;//火焰狼
    mob = em.getMonster(mobid);
    var MobLu = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(1500000000000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.getStats().setPhysicalAttack(499999999);//物理伤害
    mob.getStats().setMagicAttack(499999999);//魔攻伤害
    mob.getStats().setAcc(500000);
    mob.getStats().setPDRate(50);
    mob.getStats().setMDRate(50);
    mob.getStats().setLevel(220);
    mob.setOverrideStats(modified);
    mob.getStats().setChange(true)
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(119, 353));


    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(111, 353));

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100,353));


    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1, 353));

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-10, 353));


    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(111, 353));

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-20, 353));

    mobid = 8880184;//噩梦石头人
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(24000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(993000500);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-30, 353));

    mobid = 8880177;//奖品盒子
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(3000000000);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(450004600);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(21, 37));

    eim.startEventTimer(1000 * 60 * 10);// 40分钟 
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.dropMessage(6, "[变态路西德] 进入到了挑战地图，请小心行事。通关后ROLL点概率翻倍。并可roll到星缘币");
    player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(1, "[变态路西德副本] 真遗憾！已超过限定挑战时间，本次挑战失败！别气馁，期待更加强大的您前来挑战~");
    eim.disposeIfPlayerBelow(100, 101050000);
}

function cancelSchedule() {
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    return false;
}


function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 450004150: // 梦幻森林
            em.setProperty("state", "1");
            CareDropMobHp(eim)
            var map = eim.getMapInstance(450004150);
            map.startMapEffect("好像存在些什么未知的力量 - 让我们同心协力消灭噩梦女王吧", 5120161);
            break;

        case 450004500:
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450004500);
            eim.schedule("checkChrHP", 2000);
            eim.schedule("summonFall", 5000);
            map.startMapEffect("想不到你还能通过我的测验？哼哼……", 5120161);
            break;

        case 993000500:
            em.setProperty("state", "3");
            var map = eim.getMapInstance(993000500);
            eim.schedule("summonMob", 0);
            eim.schedule("summonFall", 0);
            map.startMapEffect("最后的阶段 时间不多了!赶紧打败军团长 路西德 吧", 5120161);

        case 450004600:
            em.setProperty("state", "4");
            var map = eim.getMapInstance(450004600);
            map.startMapEffect("你们成功阻止了 新军团长 路西德 的入侵 - 打败音乐盒子将开始宝箱- 10Ms内打开你的宝箱 否则将强制下线", 5121050);

    }

    switch (mapid) {
        case 450004150:
        case 450004500:
        case 993000500:
        case 450004600:
            return;
    }
    player.dropMessage(6, "[变态路西德副本] 已退出挑战。");
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


function monsterValue(eim, mobid) {
    switch (mobid) {
        case 8880140:
            var mapA = eim.getMapInstance(450004500);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8880167:
            var mapA = eim.getMapInstance(993000500);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 9101078:
            var mapA = eim.getMapInstance(450004600);
            for (var i = 0; i < eim.getPlayerCount() ; i++) {
                eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
            }
            break;

        case 8880177:
            eim.startEventTimer(1000 * 60 * 30);
            roll(eim);
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

function roll(eim) {
    MaxRandom = 0;
    var count = eim.getProperty("giftcount");
    var rewardPlayer = null;
    //第二次开始,统计上一次ROLL点玩家结果，并发放奖励。
    if ((count * 1) >= 1) {
        for (var i = 0; i < eim.getPlayerCount() ; i++) {
            var charName = eim.getPlayers().get(i).getName();
            var charId = eim.getPlayers().get(i).getId();
            //推送ROLL点信息
            for (var j = 0; j < eim.getPlayerCount() ; j++) {
                var notice = "[路西德副本] 玩家 " + charName + " 掷出了 " + eim.getProperty("charid_" + charId) + "点";
                if ((eim.getProperty("charid_" + charId) * 1) == 0) {
                    notice = "[路西德副本] 玩家 " + charName + " 放弃了掷点";
                }
                eim.getPlayers().get(j).dropMessage(6, notice);
            }
            //不断重置最大值
            if ((eim.getProperty("charid_" + charId) * 1) > MaxRandom) {
                MaxRandom = eim.getProperty("charid_" + charId);
                //置换玩家名称
                eim.setProperty("rewardplayer", charName);
                //置换玩家ID
                eim.setProperty("rewardplayerid", charId);
            }
        }
        for (var j = 0; j < eim.getPlayerCount() ; j++) {
            //操作NPC 发放奖励
            eim.getPlayers().get(j).openNpc(1052008, 1116);
        }
    }
    for (var j = 0; j < eim.getPlayerCount() ; j++) {
        //重置所有玩家ROLL点点数为零
        eim.setProperty("charid_" + eim.getPlayers().get(j).getId(), "0");
    }
    //次数+1
    eim.setProperty("giftcount", (count * 1 + 1));
    //重新读入次数
    count = eim.getProperty("giftcount");
    count = (count * 1);
    //退出战场
    if ((count * 1) > 10) {
        EndThisBattle(eim);
        return;
    }
    //创建几率
    var chance = Math.floor(Math.random() * 600);
    //最终物品列表
    var finalItemList = Array();
    for (var m = 0; m < itemList.length; m++) {
        if (itemList[m][1] >= chance) {
            finalItemList.push(itemList[m][0]);
        }
    }
    var currentItem = finalItemList[Math.floor(Math.random() * finalItemList.length)];
    switch (count) {
        case 9:
        case 10:
            currentItem = 2048723;
            break;
    }
    eim.setProperty("rewarditem", currentItem);
    //延迟10秒打开ROLL点NPC
    setupTask = em.schedule("openRollNpc", 1000 * 10 * 1, eim);
}

function openRollNpc(eim) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(1052008,10086);
    }
    //10秒后继续ROLL点
    setupTask = em.schedule("roll", 1000 * 10 * 1, eim);
}

var itemList = Array(
	Array(4000463, 800), //神话耳环蓝图
	Array(2430210, 800),  //女神之泪
	Array(2048723, 500), //女神之血滴
	Array(2048721, 500),  //绝对之戒
    Array(4001210, 1000), //星缘纪念币
	Array(4000463, 800),  //终极魔方
	Array(5062024, 700),  //神话耳环
	Array(2048704, 500),  //星火幸运箱子
	Array(2048708, 500), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(4001210, 1000), //星缘纪念币
	Array(2614002, 400), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。
	Array(3015820, 400), // 迷你神兽椅子, 300), // 坐在迷你神兽椅子上时，每10秒HP恢复50，MP恢复50。
	Array(3015712, 400), // 摆钟椅子, 300), // 坐在钟摆椅子上时，每10秒HP恢复50，MP恢复50。
	Array(4001210, 1000), //星缘纪念币
	Array(3015633, 400), // 宝石枫叶椅子, 300), // 用宝石做成的闪亮枫叶椅子。坐下后每10秒恢复HP 40, MP 20。
	Array(2614004, 500), // 热情的红色药水椅子, 300), // 和其他药水椅子相比，可以更快地恢复HP的红色药水椅子。每10秒HP恢复110，MP恢复50。
	Array(2435824, 300), // V卷箱子
	Array(3994417, 80), // 蜡笔
	Array(3994422, 80), // 蜡笔
	Array(4001210, 1000), //星缘纪念币
	Array(1112968, 600), // 公沙沙兔靠垫, 300), // 靠着可爱的公沙沙兔坐着，每10秒HP恢复60。
	Array(3015545, 400), // 海蓝天鹅绒沙发, 300), // 奢华的海蓝色天鹅绒沙发。坐在上面，每10秒HP恢复60。
	Array(3015327, 400), // 红色设计师椅子, 300), // 采用明亮红色的设计师椅子。坐在上面，每10秒HP恢复60。
	Array(3015181, 400), // 艾莉珍椅子, 300), // 可以成为可爱的少女艾莉珍的好朋友。每10秒HP恢复50，MP恢复50。
	Array(3015178, 400), // 红帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著红色帽子的可爱月妙的才艺。
	Array(3015688, 400), // 蓝帽月妙抱枕椅, 300), // 坐在抱枕椅上就可以看到戴著蓝色帽子的可爱月妙的才艺。
	Array(3015690, 400), // 扇子月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏拿著扇子走绳索的月妙的才艺。
	Array(4001210, 1000), //星缘纪念币
	Array(3015653, 400), // 太平萧月妙抱枕椅, 300), // 坐在抱枕椅上就可以观赏史出浑身力量演奏的月妙。
	Array(3015642, 400), // 恶灵附身的娃娃椅子, 300), // 恶灵附身的娃娃椅子。坐在上面，每10秒HP恢复50。
	Array(4000463, 800), //神话耳环蓝图
	Array(2435824, 300), // V卷箱子
	Array(2048723, 500), //女神之血滴
	Array(4001210, 1000), //星缘纪念币
	Array(2048721, 500),  //绝对之戒
	Array(2435824, 200), // V卷箱子
	Array(5062024, 700),  //神话耳环
	Array(4001210, 1000), //星缘纪念币
	Array(2436363, 60), // VVVIP盒子
	Array(4001210, 1000), //星缘纪念币
	Array(2048708, 500), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(4001210, 1000), //星缘纪念币
	Array(2614002, 400), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
	Array(2430210, 800),  //女神之泪
	Array(2436256, 60), // 神秘之影
	Array(4001210, 1000), //星缘纪念币
	Array(1113056, 60), // 神秘之影
	Array(2048721, 500),  //绝对之戒
	Array(4000463, 800),  //终极魔方
	Array(4001210, 1000), //星缘纪念币
	Array(5062024, 700),  //神话耳环
	Array(2048704, 500),  //星火幸运箱子
	Array(2048708, 500), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(4001210, 1000), //星缘纪念币
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614002, 400), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
	Array(2430210, 800),  //女神之泪
	Array(2435824, 300), // V卷箱子
	Array(4001210, 1000), //星缘纪念币
	Array(2048721, 500),  //绝对之戒
	Array(4000463, 800),  //终极魔方
	Array(2430210, 700),  //神话耳环
	Array(2048704, 500),  //星火幸运箱子
	Array(4001210, 1000), //星缘纪念币
	Array(2048708, 500), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614002, 400), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
	Array(4000463, 800),  //女神之泪
	Array(2048723, 500), //女神之血滴
	Array(2048721, 500),  //绝对之戒
	Array(4001210, 1000), //星缘纪念币
	Array(4000463, 800),  //终极魔方
	Array(3994419, 80), // 蜡笔
	Array(5062024, 400),  //神话耳环
	Array(2048704, 500),  //星火幸运箱子
	Array(4001210, 1000), //星缘纪念币
	Array(3994422, 80), // 蜡笔
	Array(2048721, 500),  //绝对之戒
	Array(3994420, 80), // 蜡笔
	Array(4000463, 800),  //终极魔方
	Array(2436383, 60), // 特米纳斯
	Array(4001210, 1000), //星缘纪念币
	Array(2048704, 500),  //星火幸运箱子
	//130装备
	Array(4000463, 800), //神话耳环蓝图
	Array(2430210, 800),  //女神之泪
	Array(2048723, 500), //女神之血滴
	Array(2435824, 350), // V卷箱子
	Array(4001210, 1000), //星缘纪念币
	Array(2436262, 80), // 露西德机器人
	Array(4000463, 800),  //终极魔方
	Array(4001210, 1000), //星缘纪念币
	Array(5062024, 700),  //神话耳环
	Array(3994418, 80), // 蜡笔
	Array(2048704, 600),  //星火幸运箱子
	Array(4001210, 1000), //星缘纪念币
	Array(2048708, 600), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(4001210, 1000), //星缘纪念币
	Array(2614002, 400), // 生日快乐，恶魔, 300), // 坐在椅子上的恶魔猎手的表情感觉很奇怪。每10秒HP恢复100，MP恢复50。	Array(4000463, 600), //神话耳环蓝图
	Array(2435824, 300), // V卷箱子
	Array(2048723, 500), //女神之血滴
	Array(4001210, 1000), //星缘纪念币
	Array(2048721, 500),  //绝对之戒
	Array(4000463, 800),  //终极魔方
	Array(5062024, 700),  //神话耳环
	Array(4001210, 1000), //星缘纪念币
	Array(2048704, 500),  //星火幸运箱子
	Array(2048708, 500), // 繁星椅子, 300), // 由中国玩家"小术"设计的的夏日天空星星椅子。每10秒中恢复HP，MP各500。
	Array(2614008, 600), // 阿卡伊勒童话书椅子, 300), // 感觉和阿卡伊勒的关系好像变得亲近一些的椅子。每10秒HP恢复100，MP恢复50。
	Array(2614014, 500), // 我的女皇椅子, 300), // 可以感觉到女王的火热人气的椅子。每10秒HP恢复100，MP恢复50。
	Array(4001210, 1000), //星缘纪念币
	Array(2614002, 400)
);

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).dropMessage(1, "[ 路西德副本 ] 挑战成功！");
    }
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 100000000);
    if (setupTask != null)
        setupTask.cancel(true);
    eim.dispose();
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 4500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(5 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8880000);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function CareDropMobHp(eim) {
    var Caremap = eim.setInstanceMap(450004150);
    for (var i = 500000; i < 590900; i++) {
        if (Care == 1)
            continue
        if (Caremap.getMonsterByOid(i) != null) {
            if (Caremap.getMonsterByOid(i).getId() != 8880140)
                continue;
            //em.broadcastServerMsg(Caremap.getMonsterByOid(i).getHp() + "Care - " + Care);
            if (Caremap.getMonsterByOid(i).getHp() < 1999517176253) {
                mobid = 8880184;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1030, 48));

                mobid = 8880184;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(925, 48));

                mobid = 8880184;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(797, 48));

                mobid = 8880160;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(346, 48));

                mobid = 8880160;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1341, 48));

                mobid = 8880184;//噩梦石头人
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(3000000000);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(450004150);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(374, 48));

                Caremap.startMapEffect("当心 - 路西德处于暴怒中 - 将召唤她的部下了 请注意 注意 注意 ", 5120161);
                Care = 1;
            }
            setupTask = em.schedule("CareDropMobHp", 1000 * 10 * 1, eim);
            return false;
        }
    }
}