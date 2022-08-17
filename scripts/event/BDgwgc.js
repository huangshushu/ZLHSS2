/* This is mada by Care

 * 多阶段BOSS

 * global em

 * 脚本定制 技术支持 游戏顾问 50009219

 */

var char_ID
function init() {
    /* 初始化 */
    em.setProperty("state", "0")
    em.setProperty("leader", "true")
}

function setup(eim, CharID) {
    /* 开启副本前设置 */
    em.setProperty("state", "1")
    em.setProperty("leader", "false")
    /* 创建分本实例 */
    var eim = em.newInstance("ruin_Skmer" + CharID)
    char_ID = CharID
    /* 写入副本状态 */
    eim.setProperty("stage", "1")
    /* 新建个地图实例 完成副本将重置实例 */
    eim.createInstanceMapS(867139399).resetFully()

    /* 退出副本地图 */
    eim.setProperty("returnMap", "910000000");
    /* 时间线程 */
    eim.schedule("navigation", 5000)
    eim.startEventTimer(30 * 60 * 1000);
    return eim
}

function navigation(eim) {
    var map = eim.getMapInstance(0);
    map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("虽然暴风雨好像马上就要来了,但请相信舵手我的能力吧.", 133, 5000));
    eim.schedule("SapwnMonster", 5000)
}

function stageClear(eim, stage) {
    eim.setProperty("stage" + stage, "clear");
}


function SapwnMonster(eim, player) {
    var map = eim.getMapInstance(0);
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 1:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9601338)//鼠年福袋
                    /* 属性设置 血量 蓝量 经验值*/
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);

                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 30, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("我相信勇士你. 请击退海螺姑娘吧", 133, 5000));
                stageClear(eim, stage);
            }
            break;

        case 2:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390815);
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("额啊啊. 船长!!大事不好了, 海盗团员正在攻击我们的船.", 133, 5000));
                stageClear(eim, stage);
            }
            break;

        case 3:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390824)
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("我相信勇士你. 请击退海螺姑娘吧", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 4:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390802); /* 暗礁 */
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(745, 455));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("在我们的航海图上没有暗礁呢······它是什么时候出现的。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 5:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390824)
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("海螺姑娘的声音真是动听。我的意识渐渐变得模糊。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 6:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390824) /* 海螺姑娘 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("小心。船长。虽然海螺姑娘的外表美丽。但是他们十分凶残。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 7:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390815); /* 海盗 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("它有着锋利的趾甲·······你要小心不要受伤啊。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 8:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390824) /* 海螺姑娘 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("海螺姑娘出现了。海螺姑娘可谓是航海士最大的敌人呢。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 9:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = em.getMonster(9390824) /* 海螺姑娘 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 10, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("它有着锋利的趾甲·······你要小心不要受伤啊。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 10:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = em.getMonster(9390824) /* 海螺姑娘 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 15, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("海螺姑娘出现了。海螺姑娘可谓是航海士最大的敌人呢。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 11:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = em.getMonster(9390824) /* 海螺姑娘 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(220 - i * 15, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("它有着锋利的趾甲·······你要小心不要受伤啊。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 12:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390826); /* 珊瑚礁 */
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(851, 455));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("船长,请你处理掉珊瑚礁吧。只要除去那珊瑚礁,我们就可以更快达到目的地了。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 13:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390859);//海龙王
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(690, 454));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("虽然我是听说过有水龙······它开始攻击了。请小心!!!", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 14:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390802);//暗礁
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(843, 455));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("消灭暗礁最简单的方法是.....啊,我想不起来了。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 15:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390815); /* 海盗 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("普赛依海盗团出现了!请用尽全力将它们击退吧。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 16:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = em.getMonster(9390815); /* 海盗 */
                    /* 属性设置 */
                    var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                    mob.setOverrideStats(Attribute);
                    /* ------- */
                    eim.registerMonster(mob);
                    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(240 - i * 35, 200))
                }
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("我相信勇士你!请把那些邪恶的海盗团击退吧!!", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 17:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390867);//深海巨妖
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(396, 484));
                var mob = em.getMonster(9390835);//深海巨妖的触手
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(63, 455));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("你见过那么大的章鱼吗? 这是我有生以来见过最大的章鱼了。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 18:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390857);//深海巨妖
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(396, 484));
                var mob = em.getMonster(9390835);//深海巨妖的触手
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(63, 455));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("船长,请把它击退吧。拜托你了。 就全交给船长了。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 19:
            if (!"clear".equals(eim.getProperty("stage" + stage))) {
                var mob = em.getMonster(9390868);//海龙王
                /* 属性设置 */
                var Attribute = new Packages.server.life.OverrideMonsterStats(20000000000, mob.getMobMaxMp(), 100, false);
                mob.setOverrideStats(Attribute);
                /* ------- */
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(690, 454));
                map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("那种水龙到底是生活在哪里的呢。真是可怕。", 133, 5000));
                stageClear(eim, stage);
            }
            break;
        case 20:
            map.spawnNpc(9390244, new java.awt.Point(486, 117));
            break;
    }
}

function playerEntry(eim, player) {
    //注册玩家并进入到副本中 
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}


function changedMap(eim, player, mapid) {
    //玩家切换地图时候进行处理
    var check = false;
    var checkID = 865010004;
    if (checkID == mapid) {
        check = true;
    }
    if (!check) {
        playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    //移除玩家的时候执行
    eim.unregisterPlayer(player);
    eim.getMapInstance(0).killAllMonsters(true);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    //所有注册在事件里面的怪物都死亡后执行
    var map = eim.getMapInstance(0);
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 3: case 9:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("你的实力真是惊人 . 航行目前很安全 . 请别担心.", 134, 5000));
            break
        case 4:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("居然一下子就除去了障碍物.船长你真了不起。", 134, 5000));
            break
        case 5: case 6:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("呼。不过幸好怪物都被击退了。", 134, 5000));
            break;
        case 7: case 11: case 15:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("在航海中。必须要有出众的战斗实力。", 134, 5000));
            break;
        case 12:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("那些石块。不能让它们成为我们的绊脚石。", 134, 5000));
            break;
        case 13:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("区区水龙......这无非是证明了飞禽走兽是无法战胜人类的。", 134, 5000));
            break;
        case 14:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("粉碎了所有障碍物,现在又能顺利航海了。", 134, 5000));
            break;
        case 15:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("只要有船长在,无论去哪里航海,我好像都不会感到害怕了。", 134, 5000));
            break;
        case 16:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("又 又 又是海盗·····还好有船长在,我想我不用太担心什么", 134, 5000));
            break;
        case 17:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("哇哦····,这章鱼的腿真是巨大,能够得到的话,把它当做零食吃还蛮好的·····", 134, 5000));
            break;
        case 18:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("你尽然将深海巨妖击退了!船长你果然是最强的勇士。", 134, 5000));
            break;
        case 19:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("真棒 ! ! ! 船长. 这趟有惊无险 快点击商人领你的航海奖品吧 ! 期待与船长下回的航海之旅。", 134, 5000));
            break;
        default:
            map.broadcastMessage(Packages.tools.packet.UIPacket.getMapEffectMsg("真不愧是船长.", 134, 5000));
            break;
    }
    eim.setProperty("stage", stage + 1)
    eim.schedule("SapwnMonster", 5000);
}

function playerDead(eim, player) {
    // 玩家在副本中死亡后执行
}

function playerRevive(eim, player) {
    // 处理玩家死亡后复活
    // Happens when player's revived.
    // @Param : returns true/false
    return false;
}

function monsterValue(eim, mobid) {
    // 杀死注册的怪物时执行
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
    return 1;
}

function leftParty(eim, player) {
    // 队员离开组队时执行
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // 解散队伍时执行
    // Happens when the party is disbanded by the leader.
}

function cancelSchedule() {
    em.setProperty("state", "0")
    em.setProperty("leader", "true")
    //事件重新加载时执行
}

function pickUpItem(eim, player, itemID) {
    //拾取道具时执行
}

function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
}

function monsterKilled(eim, player, mobID) {
    //杀死注册的怪物时执行
}
function clearPQ(eim) {
    //调用finishPQ时执行
    end(eim);
}

function end(eim) {
    // 此为自定义方法 不是务必存在的
    var str = eim.getProperty("returnMap");
    var returnMap = parseInt(str);
    eim.getMapInstance(0).killAllMonsters(true);
    eim.disposeIfPlayerBelow(100, returnMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}