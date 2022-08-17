/*
 * 排行副本
 * Care制作 梦幻冒险岛工作室所有
 * 联系QQ：50009219
 * 欢迎定制各种脚本 
 */

var mapId = 910000018;
var Care = 0;
var CarePlus = 1;
/* 层 mob 数量 血量 蓝量 经验 物攻 魔攻 命中率 物防 魔防 等级 X坐标 Y坐标*/

var mobs = Array(
  //Array(1, 9421501, 5, 血量, 蓝量, 经验, 物攻, 魔攻, 命中率, 物防, 魔防, 等级, -887, 51),/* 飞速狂飙的超巨大极速蜗牛 */
    Array(1, 9300523, 1, 300000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 249, 5, 51),/* 红蜗牛王 */
    Array(1, 9300659, 5, 20000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 249, -119, 51),/* 圆乎乎蜗牛 */
    Array(1, 100002, 10, 20000000000, 500000, 1000, 80000, 80000, 80, 80, 249, 175, 51),/* 红蓝蜗牛 */
    Array(1, 100001, 10, 20000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 249, 459, 51),/* 红蓝蜗牛 */
    Array(1, 9500144, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 249, 459, 51),/* 可乐蜗牛*/

    // 第二层		回忆之中的蘑菇林
    Array(2, 6300005, 1, 300000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 50),/* 僵尸蘑菇王 */
    Array(2, 8220007, 1, 300000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 50),/* 蓝蘑菇王 */
    Array(2, 9303142, 10, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 黑蘑菇团 */
    Array(2, 9309116, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 459, 51),/* 红蓝蘑菇蝙蝠 */
    Array(2, 9309117, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 459, 51),/* 红蓝蘑菇蝙蝠 */
    Array(2, 9300736, 20, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 459, 51),/* 愤怒的刺蘑菇*/

    // 第三层		什么什么嘛!这可是猪猪三基佬的海岸！
    Array(3, 8600003, 1, 400000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -230, 50),/* 变异的漂漂大猪 */
    Array(3, 8620004, 1, 400000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 50),/* 变形的钢甲猪 */
    Array(3, 8620005, 1, 400000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 183, 50),/* 变形的火野猪 */
    Array(3, 9420588, 10, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -490, 50),/* 铁甲野猪 */

    // 第四层		在山的那边海的那边有一群蓝水灵绿水灵红水灵各种水灵...
    Array(4, 9300003, 1, 101050000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 50),/* 绿水灵王 */
    Array(4, 8600002, 2, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 变异的绿水大灵 */
    Array(4, 7120103, 5, 5000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 红水灵 */
    Array(4, 7120104, 5, 5000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 银水灵 */
    Array(4, 7120105, 5, 5000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 金水灵 */
    Array(4, 9100037, 5, 5000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 恶魔水灵 */


    // 第五层		这些怪物走的时候很安详，火还烧的很旺~
    Array(5, 8620012, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 51),/* 变形树妖王 */
    Array(5, 3220000, 2, 500000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 树妖王 */
    Array(5, 1110101, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 黑木妖 */
    Array(5, 1130100, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 斧木妖 */
    Array(5, 1140100, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 古木妖 */
    Array(5, 1140130, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 开心的古木妖 */

    // 第六层		古代寺庙的蝙蝠魔！
    Array(6, 6400006, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 5, 51),/* 地狱蝙蝠怪 */
    Array(6, 6400005, 3, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 蝙蝠怪 */
    Array(6, 7130101, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 月牙牛魔王 */
    Array(6, 7130100, 5, 10000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 长枪牛魔王 */


    // 第七层		武林妖僧——为武陵除害
    Array(7, 9600025, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 200, 175, 51),/* 武林妖僧 */

    // 第八层		月夜之下，狼人变身！
    Array(8, 8220001, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 驮狼雪人 */
    Array(8, 9800085, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 狼人 */
    Array(8, 9800086, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 白狼人 */
    Array(8, 5130104, 10, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 野狼 */

    // 第九层		石头！石头！来自冒险岛全境的石头战士们！
    Array(9, 8211004, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 城堡石头人王 */
    Array(9, 8620009, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 古代石头人 */
    Array(9, 8620010, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 古代石头人 */
    Array(9, 8620011, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 古代石头人 */
    Array(9, 5130101, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 石头人 */
    Array(9, 5130102, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, -119, 51),/* 石头人 */
    Array(9, 5150000, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 石头人 */
    Array(9, 5150002, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 石头人 */
    Array(9, 5150003, 5, 100000000000, 500000, 1000, 80000, 80000, 8000, 80, 80, 200, 175, 51),/* 石头人 */

    // 第十层		赤红凤凰！苍蓝山猫！

    Array(10, 9400596, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 133, 50),/* 赤红凤凰 */
    Array(10, 9400597, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 133, 50),/* 苍蓝山猫 */

    // 第十一层		我讨厌巧克力啊！
    Array(11, 9402134, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 巧克力狂蘑菇王 */
    Array(11, 9402137, 1, 4000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -119, 51),/* 沉迷巧克力的鵺 */
    Array(11, 9402130, 5, 1000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 巧克力 */
    Array(11, 9402131, 5, 1000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -119, 51),/* 巧克力 */
    Array(11, 9402132, 5, 1000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 巧克力 */


    // 第十二层		天哪!!小伙子你居然能上天！
    Array(12, 9402178, 20, 10000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 爆竹黄蛋 */

    // 第十三层		古古怪怪！
    Array(13, 9600318, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 天魔僵尸 */
    Array(13, 9600310, 1, 101050000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -119, 51),/* 附鬼自行车 */
    Array(13, 9600311, 1, 101050000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 附鬼招牌 */
    Array(13, 9600312, 1, 101050000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -119, 51),/* 附鬼信号灯 */
    Array(13, 9600313, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 超市僵尸 */
    Array(13, 9600314, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 旅客僵尸 */
    Array(13, 9600315, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -119, 51),/* 僵尸 */
    Array(13, 9600316, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 血僵尸 */
    Array(13, 9600317, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* 毒僵尸 */

    // 第十四层		BOSS挑战！TOP1
    Array(14, 9001058, 1, 500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 内心的愤怒 */

    // 第十五层		BOSS挑战！TOP2
    Array(15, 9010010, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 梦之希拉 */

    // 第十六层		BOSS挑战！TOP3
    Array(16, 9101078, 1, 1000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 火焰狼 */

    // 第十七层		BOSS挑战！TOP4
    Array(17, 9300140, 1, 1500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 生气的法兰肯 */

    // 第十八层		BOSS挑战！TOP5
    Array(18, 2600800, 1, 1500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 军团长威尔 */

    // 第十九层  	BOSS挑战！TOP6
    Array(19, 9300289, 1, 1500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 多多 */

    //第二十层  	BOSS挑战！TOP7
    Array(20, 8220005, 1, 1500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 玄冰独角兽 */

    //第二十一层 	BOSS挑战！TOP8
    Array(21, 8220006, 1, 1500000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 50),/* 雷卡 */
    Array(21, 8160000, 10, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, 5, 51),/* [★] 时间门神 10只 */

    //第二十二层 	骑士精神！
    Array(22, 9300746, 1, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 229, 5, 50),/* 肯 */
    Array(22, 9300747, 1, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 229, -887, 51),/* 凯森 */
    Array(22, 9300748, 1, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 229, -887, 51),/* 希姆斯 */
    Array(22, 9300764, 1, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 229, -887, 51),/* 拉伊勒 */
    Array(22, 9300768, 1, 100000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 229, -887, 51),/* 米露 */


    //第二十三层 	过去的秘密——黑魔法师的造物：邪影魔！
    Array(23, 9300823, 1, 2000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 邪影魔 */

    //第二十四层 	过去的秘密——黑魔法师的造物：贝德罗斯！
    Array(24, 9601022, 1, 3000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51),/* 贝德罗斯 */

    //第二十五层 	过去的秘密——黑魔法师的造物：斯乌！
    Array(25, 8240104, 1, 6000000000000, 500000, 1000, 80000, 80000, 8000, 95, 95, 249, -887, 51)//斯乌
    );
var layersTip = new Array(
						"极速蜗牛",
						"回忆之中的蘑菇林",
						"什么什么嘛!这可是猪猪三基佬的海岸！",
						"在山的那边海的那边有一群蓝水灵绿水灵红水灵各种水灵",
						"这些怪物走的时候很安详，火还烧的很旺",
						"古代寺庙的蝙蝠魔！",
						"独立BOSS关卡 “武林妖僧——为武陵除害",
						"月夜之下，狼人变身！",
						"石头！石头！来自冒险岛全境的石头战士们！",
						"赤红凤凰！苍蓝山猫",
						"我讨厌巧克力啊！",
						"天哪!!小伙子你居然能上天！",
						"古古怪怪！",
						"BOSS挑战！TOP1",
						"BOSS挑战！TOP2",
						"BOSS挑战！TOP3",
						"BOSS挑战！TOP4",
						"BOSS挑战！TOP5",
						"BOSS挑战！TOP6",
						"BOSS挑战！TOP7",
						"BOSS挑战！TOP8",
						"骑士精神！",
						"过去的秘密——黑魔法师的造物",
						"过去的秘密——黑魔法师的造物",
						"终结关卡：秘密实验，最强的兵器"
						);
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("ZChaosPQ14");

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.schedule("beginQuest", 1000);
    eim.startEventTimer(60 * 1000 * 60);  //时间
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 706041705) {
        player.dropMessage(6, "[ 排行模式 ] 已退出挑战 - ");
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            Care = 0;
            CarePlus = 1;
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

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        Care = 0;
        CarePlus = 1;
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function end(eim) {
    var map = eim.getMapInstance(706041705);
    eim.broadcastPlayerMsg(1, "不好意思 现在关闭挑战了 将你遣送回了自由");
    eim.disposeIfPlayerBelow(100, 101050000);
    Care = 0;
    CarePlus = 1;
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function monsterSpawn(eim) {
    /* 层 mob 数量 血量 蓝量 经验 物攻 魔攻 命中率 物防 魔防 等级 X坐标 Y坐标*/
    var map = eim.getMapInstance(706041705);
    if (em.getProperty("state").equals("1") == true) {
        map.startMapEffect("[ 排行模式 ] 坚持 25 层 - 限时一个小时 - 第一层 “飞速狂飙的超巨大极速蜗牛” - " + layersTip[Care], 5120024);
        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "2");
    } else if (em.getProperty("state").equals("2") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "3");
    } else if (em.getProperty("state").equals("3") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "4");
    } else if (em.getProperty("state").equals("4") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "5");
    } else if (em.getProperty("state").equals("5") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "6");
    } else if (em.getProperty("state").equals("6") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "7");
    } else if (em.getProperty("state").equals("7") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "8");
    } else if (em.getProperty("state").equals("8") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "9");
    } else if (em.getProperty("state").equals("9") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "10");
    } else if (em.getProperty("state").equals("10") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "11");
    } else if (em.getProperty("state").equals("11") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "12");
    } else if (em.getProperty("state").equals("12") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "13");
    } else if (em.getProperty("state").equals("13") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "14");
    } else if (em.getProperty("state").equals("14") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "15");
    } else if (em.getProperty("state").equals("15") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "16");
    } else if (em.getProperty("state").equals("16") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "17");
    } else if (em.getProperty("state").equals("17") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "18");
    } else if (em.getProperty("state").equals("18") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "19");
    } else if (em.getProperty("state").equals("19") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "20");
    } else if (em.getProperty("state").equals("20") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "21");
    } else if (em.getProperty("state").equals("21") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "22");
    } else if (em.getProperty("state").equals("22") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "23");
    } else if (em.getProperty("state").equals("23") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "24");
    } else if (em.getProperty("state").equals("24") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "25");
    } else if (em.getProperty("state").equals("25") == true) {
        map.startMapEffect("[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ - " + layersTip[Care], 5120024);
        eim.broadcastPlayerMsg(-1, "[ 排行模式 ] 现在进入第 [ " + CarePlus + " ] 层 ！ 加油 ! 时间将计入排行");


        for (var i = 0; i < mobs.length; i++) {
            if (mobs[i][0] == CarePlus) {
                for (var U = 0; U < mobs[i][2]; U++) {
                    var mob = em.getMonster(mobs[i][1]);
                    var stats = mob.getStats();
                    var ostats = em.newMonsterStats();
                    mob.disableDrops();
                    
                    
                    
                    stats.setPhysicalAttack(mobs[i][6]);
                    stats.setMagicAttack(mobs[i][7]);
                    stats.setAcc(mobs[i][8]);
                    stats.setPDRate(mobs[i][9]);
                    stats.setMDRate(mobs[i][10]);
                    stats.setLevel(mobs[i][11]);
                    ostats.setOHp(mobs[i][3]);
                    ostats.setOMp(mobs[i][4]);
                    ostats.setOExp(mobs[i][5]);
                     mob.setOverrideStats(ostats);
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(mobs[i][12], mobs[i][13]));  /* 坐标 x y */
                }
            }
        }
        Care = Care + 1;
        CarePlus = CarePlus + 1;
        em.setProperty("state", "26");
    } else if (em.getProperty("state").equals("10") == true) {
        map.startMapEffect("[ 排行模式 ] 恭喜你 你已达到最高层 现写入排行 并按照排名领自己的奖品！ - < 10 > ms 将退出副本 感谢你的挑战 请别自豪可能会被其余玩家超越", 5120024);
        var Rank = new Care();
        Rank.给予个人值(Rank.查询个人值() + Care_NumBoth(1000, 3000));
        eim.setProperty("MiA", Math.floor(((60 * 1000 * 60) - eim.getTimeLeft()) / (60 * 1000)));
        eim.setProperty("MiX", Math.floor(((60 * 1000 * 60) - eim.getTimeLeft()) % (60 * 1000) / 1000));
        openNpc(eim, 1540008, "Care_Flrink");
        eim.schedule("likai", 1000 * 60);
    }
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function allMonstersDead(eim) {
    eim.getPlayers().get(0).getMap().killAllMonsters(true);
    //eim.environmentChange("Dojang/clear", 5);
    //eim.environmentChange("dojang/end/clear", 4);
    eim.showEffect("aswan/clearF");
    //eim.playSound("Party1/Clear");
    eim.schedule("monsterSpawn", 5000);
}

function beginQuest(eim) {
    eim.schedule("monsterSpawn", 10000);
}

function likai(eim) {
    var map = eim.getMapInstance(706041705);
    eim.broadcastPlayerMsg(1, "道场修行结束了 现在将你送回冒险世界");
    eim.disposeIfPlayerBelow(100, 101050000);
    Care = 0;
    CarePlus = 1;
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function leftParty(eim, player) { }

function disbandParty(eim) { }

function playerDead(eim, player) { }

function cancelSchedule() { }


var Care = function () {
    this.db = cm.getConnection();

    this.查询个人值 = function () {
        var 值 = 0;
        var Guli_Charid = "SELECT integral FROM `characters` WHERE `id` = '" + eim.getPlayers().get(0).getId() + "' LIMIT 1;";
        var Charid_Pstmt = this.db.prepareStatement(Guli_Charid);
        var Charid = Charid_Pstmt.executeQuery();
        while (Charid.next()) {
            值 = Charid.getString("integral")
        }
        Charid.close();
        Charid_Pstmt.close();
        return 值;
    }

    this.给予个人值 = function (mode) {
        var update = cm.getConnection().prepareStatement("UPDATE `characters` SET `integral`='" + mode + "' WHERE (`id`='" + eim.getPlayers().get(0).getId() + "');");
        update.setString(1, mode);
        update.executeUpdate();
        update.close();
    }

}

function Care_NumBoth(Min, Max) {//Min 最小值 Max最大值
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}

