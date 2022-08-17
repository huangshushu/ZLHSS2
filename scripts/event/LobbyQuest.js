/* 
 *
 *  
 *  功能：LobbyQuest 起源之塔
 *  
 *
 */

/* global em, java */

var stage9_combo = Array("1", "2", "3", "4", "5", "6", "7", "8");

function init() {
    //初始化
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(chrID) {
    //开启新副本前 设置 
    //setup 这边有多种类型 根据实际情况使用 可以参照已写好的其他副本
    em.setProperty("leader", "true");
    // Setup the instance when invoked, EG : start PQ
    var eim = em.newInstance("LobbyQuest" + chrID);//创建分本实例

    eim.setProperty("stage", "1");//设置自定义配置项
    //
    //createInstanceMap 为新建里一个地图实例  不会影响 该频道已有的地图
    //且当 副本完成后该地图实例会被清理
    for (var i = 1; i <= 50; i++) {
        eim.createInstanceMap(992000000 + 1000 * i).resetFully(eim);
        eim.setProperty("stage" + i + "_Damage", "0");
        eim.setProperty("stage" + i + "_killed", "0");
        eim.setProperty("stage" + i + "_Value", "0");
    }
    eim.setProperty("returnMap", "992000000");

    for (var b = 0; b < stage9_combo.length; b++) { //stage6_001
        for (var y = 1; y <= 4; y++) { //stage number
            eim.setProperty("stage9_" + stage9_combo[b] + "_" + y, "0");
        }
    }
    for (var b = 0; b < stage9_combo.length; b++) {
        var found = false;
        while (!found) {
            for (var x = 1; x <= 4; x++) {
                if (!found) {
                    var founded = false;
                    for (var z = 1; z <= 4; z++) { //check if any other stages have this value set already.
                        if (eim.getProperty("stage9_" + stage9_combo[b] + "_" + (z)) == null) {
                            eim.setProperty("stage9_" + stage9_combo[b] + "_" + (z), "0");
                        } else if (eim.getProperty("stage9_" + stage9_combo[b] + "_" + (z)).equals("1")) {
                            founded = true;
                            break;
                        }
                    }
                    if (!founded && java.lang.Math.random() < 0.33) {
                        eim.setProperty("stage9_" + stage9_combo[b] + "_" + (x), "1");
                        found = true;
                        break;
                    }
                }
            }
        }
    }
    var s12_0 = java.lang.Math.random() < 0.50;
    var s12_2 = java.lang.Math.random() < 0.50;
    eim.setProperty("stage12_trap0", s12_0 ? "1" : "0");
    eim.setProperty("stage12_trap1", s12_0 ? "0" : "1");

    eim.setProperty("stage12_trap2", s12_2 & s12_0 ? "1" : "0");
    eim.setProperty("stage12_trap3", s12_2 & !s12_0 ? "1" : "0");
    eim.setProperty("stage12_trap4", !s12_2 & !s12_0 ? "1" : "0");


    var s27_1 = parseInt(java.lang.Math.random() * 4);
    var s27_2 = parseInt(java.lang.Math.random() * 4);
    var s27_3 = parseInt(java.lang.Math.random() * 4);
    eim.setProperty("stage27_trap1", "0" + String(s27_1));
    eim.setProperty("stage27_trap2", "0" + String(s27_2));
    eim.setProperty("stage27_trap3", "0" + String(s27_3));

    eim.setProperty("stage37_killed_1", "0");
    eim.setProperty("stage37_killed_2", "0");
    eim.setProperty("stage37_killed_3", "0");

    eim.setProperty("stage38_check", "0");

    eim.setProperty("stage42_killed_1", "0");
    eim.setProperty("stage42_killed_2", "0");
    eim.setProperty("stage42_killed_3", "0");
    eim.setProperty("stage42_killed_4", "0");
    var s47 = parseInt(java.lang.Math.random() * 7 + 2);
    eim.setProperty("stage47_Key", s47);
    //startEventTimer(int eventType, int timeType, long duration)
    //一般默认是使用 startEventTimer(long duration)
    //eim.startEventTimer(15 * 60 * 1000);
    return eim;
}


function playerEntry(eim, player) {
    //注册玩家并进入到副本中 
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    //玩家切换地图时候进行处理
    var check = false;

    for (var i = 1; i <= 50; i++) {
        var checkID = 992000000 + (i * 1000);
        if (checkID == mapid) {
            check = true;
            break;
        }
    }
    if (!check) {
        playerExit(eim, player);
    }
}

function playerExit(eim, player) {
    //移除玩家的时候执行
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function scheduledTimeout(eim) {
    //事件计时结束后执行
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 7:
            if (eim.getTimeLeft() > 1000) {
                eim.setProperty("stage" + stage, "clear");
                eim.getMapInstance(stage - 1).showScreenEffect("event/clear");
                eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                eim.startEventTimer(2, 0, eim.getTimeLeft());
            } else {
                end(eim);
            }
            break;
        default:
            end(eim);
    }


}

function allMonstersDead(eim) {
    //所有注册在事件里面的怪物都死亡后执行
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

function playerDisconnected(eim, player) {
    //玩家掉线后执行
    return 0;
    // return 0 - Deregister player normally Dispose instance if there are zero player left
    // return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
    // return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
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
    //事件重新加载时执行
}

function pickUpItem(eim, player, itemID) {
    //拾取道具时执行
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 3:
            if (itemID == 4009237 || itemID == 4009238) {
                if (!"clear".equals(eim.getProperty("stage" + stage))) {
                    var count = eim.getAllItemNumber(4009237) + eim.getAllItemNumber(4009238);
                    eim.broadcastScriptProgressMessage("古代乌龟蛋 " + count + " / 1000");
                    if (count >= 1000) {
                        stageClear(eim, stage, player);
                        eim.removeAllItem(4009237);
                        eim.removeAllItem(4009238);
                    }
                }
            }
            break;
        case 18:
            if (itemID == 4000136) {
                if (!"clear".equals(eim.getProperty("stage" + stage))) {
                    var count = eim.getAllItemNumber(4000136);
                    eim.broadcastScriptProgressMessage("采集了" + count + "个椰果。");
                    if (count >= 10) {
                        stageClear(eim, stage, player);
                        eim.removeAllItem(4000136);
                    }
                }
            }
            break;
        case 34:
            if (itemID == 4009235) {
                if (!"clear".equals(eim.getProperty("stage" + stage))) {
                    var count = eim.getAllItemNumber(4009235);
                    eim.broadcastScriptProgressMessage("紫色皮革 " + count + " / 10");
                    if (count >= 10) {
                        eim.broadcastWeatherEffectNotice("你已经将10个紫色皮革全部搜集到了！让我们前往下一层吧！", 147, 15000);
                        stageClear(eim, stage, player);
                        eim.removeAllItem(4009235);
                    }
                }
            }
            break;
    }
}



function monsterDamaged(eim, player, mobID, damage) {
    //攻击注册的怪物时执行
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 1:
            //累计伤害
            var s1_damage = parseInt(eim.getProperty("stage1_Damage"));
            var s1_killed = parseInt(eim.getProperty("stage1_killed"));
            s1_damage += damage;
            eim.setProperty("stage1_Damage", String(s1_damage));
            eim.broadcastScriptProgressMessage("消灭古代绿水灵 " + s1_killed + "/ 100,  累积冲击量 " + s1_damage + " / 5千万");
            if (s1_damage >= 50000000 && !"clear".equals(eim.getProperty("stage1"))) {
                //第一关 伤害大于 50000000 完成
                stageClear(eim, stage, player);
            }
            break;
    }
}

function monsterKilled(eim, player, mobID) {
    //杀死注册的怪物时执行
    var stage = parseInt(eim.getProperty("stage"));
    var clear = false;
    switch (stage) {
        case 1:
            //杀死怪物计数
            var s1_killed = parseInt(eim.getProperty("stage1_killed"));
            var s1_damage = parseInt(eim.getProperty("stage1_Damage"));
            s1_killed += 1;
            eim.setProperty("stage1_killed", String(s1_killed));
            eim.broadcastScriptProgressMessage("消灭古代绿水灵 " + s1_killed + " / 100,  累积冲击量 " + s1_damage + " / 5千万");
            if (s1_killed >= 100 && !"clear".equals(eim.getProperty("stage1"))) {
                //第一关 消灭 100只古代绿水灵  完成
                clear = true;
            }
            break;
        case 4:
            var s4_killed = parseInt(eim.getProperty("stage4_killed"));
            var portal = parseInt(eim.getProperty("stage4_portal"));
            var posX = player.getPosition().x;
            if (s4_killed <= 100) {
                if ("1".equals(eim.getProperty("stage4_C"))) {
                    if ((portal == 2 && posX > 634 || posX < 634)) {
                        eim.setProperty("stage4_C", "0");
                        eim.setProperty("stage4_portal", portal == 1 ? "2" : "1");
                        portal == portal == 1 ? 2 : 1;
                    } else {
                        eim.broadcastWeatherEffectNotice("现在到另外一边去消灭怪物，获得平衡点吧！", 147, 3000);
                        break;
                    }
                }
                if (portal == 2 && posX < 634 || posX > 634) {
                    s4_killed += 1;
                    eim.setProperty("stage4_killed", String(s4_killed));
                } else {
                    break;
                }
                eim.broadcastScriptProgressMessage("均衡点数 " + s4_killed + " / 100");
                if (s4_killed == 100 && !"clear".equals(eim.getProperty("stage4"))) {
                    clear = true;
                    eim.broadcastWeatherEffectNotice("现在已经大体平衡，你可以前往下一层了。", 147, 3000);
                } else if (s4_killed % 10 == 0) {
                    eim.broadcastWeatherEffectNotice("现在到另外一边去消灭怪物，获得平衡点吧！", 147, 3000);
                    eim.setProperty("stage4_C", "1");
                }
            }
            break;
        case 6:
            var s6_killed = parseInt(eim.getProperty("stage6_killed"));
            var stage6_Value = parseInt(eim.getProperty("stage6_Value"));
            var isboss = false;
            if (mobID == 9309001) {
                eim.setProperty("stage6_killed", String(s6_killed + 1));
                stage6_Value += 1;
            } else if (mobID == 9309127) {
                stage6_Value += 30;
                isboss = true;
            }
            stage6_Value = Math.min(stage6_Value, 300)
            eim.setProperty("stage6_Value", String(stage6_Value));
            eim.broadcastScriptProgressMessage("消灭" + (isboss ? "水灵王" : "绿水灵") + " " + stage6_Value + "/ 300");
            if (s6_killed % 30 == 0) {
                var mob = em.getMonster(9309127);
                eim.registerMonster(mob);
                player.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(953, -1162));
            }
            if (stage6_Value == 300 && !"clear".equals(eim.getProperty("stage6"))) {
                clear = true;
            }
            break;
        case 7:
            if (mobID == 9309124) {
                eim.startEventTimer(2, 0, 3000);
                eim.broadcastWeatherEffectNotice("任务失败了。", 147, 15000);
            }
            break;
        case 8:
            //杀死怪物计数
            var s8_killed = parseInt(eim.getProperty("stage8_killed"));
            s8_killed += 1;
            eim.setProperty("stage8_killed", String(s8_killed));
            eim.broadcastScriptProgressMessage("消灭火山虫 " + s8_killed + " / 100");
            if (s8_killed >= 100 && !"clear".equals(eim.getProperty("stage8"))) {
                clear = true;
                eim.broadcastWeatherEffectNotice("你成功啦？现在请前往下一层吧。", 147, 15000);
            }
            break;
        case 11:
            var s11_killed = parseInt(eim.getProperty("stage11_killed"));
            s11_killed += 1;
            eim.setProperty("stage11_killed", String(s11_killed));
            eim.broadcastScriptProgressMessage("消灭石头人 " + s11_killed + "/ 300");
            if (s11_killed >= 300 && !"clear".equals(eim.getProperty("stage11"))) {
                clear = true;
            }
            break;
        case 10:
            if (mobID == 9309201 && !"clear".equals(eim.getProperty("stage10"))) {
                clear = true;
            }
            break;
        case 13:
            if (mobID == 9309104 || mobID == 9309105) {
                var s13_killed = parseInt(eim.getProperty("stage13_killed"));
                s13_killed += 1;
                eim.setProperty("stage13_killed", String(s13_killed));
                if (s13_killed >= 75 && !"clear".equals(eim.getProperty("stage13"))) {
                    clear = true;
                }
            }
            break;
        case 14:
            //射击
            break;
        case 16:
            var s16_killed = parseInt(eim.getProperty("stage16_killed"));
            s16_killed += 1;
            eim.setProperty("stage16_killed", String(s16_killed));
            eim.broadcastScriptProgressMessage("消灭鳄鱼 " + s16_killed + " / 200");
            if (s16_killed > 200 && !"clear".equals(eim.getProperty("stage16"))) {
                clear = true;
            }
            break;
        case 21:
            //需要消灭大量怪物 召唤 9309100 - 艾利杰
            var s21_killed = parseInt(eim.getProperty("stage21_killed"));
            s21_killed += 1;
            eim.setProperty("stage21_killed", String(s21_killed));
            eim.broadcastScriptProgressMessage("消灭怪物 " + s21_killed + " / 300");
            if (s21_killed >= 300 && !"1".equals(eim.getProperty("stage21_Value"))) {
                eim.setProperty("stage21_Value", "1");
                var mob = em.getMonster(9309100);
                eim.registerMonster(mob);
                player.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(562, 83));
                eim.broadcastWeatherEffectNotice("艾利杰出现了，请快消灭它。", 147, 15000);
            }
            if (mobID == 9309100 && !"clear".equals(eim.getProperty("stage21"))) {
                clear = true;
            }
            break;
        case 26:
            var s26_killed = parseInt(eim.getProperty("stage26_killed"));
            s26_killed += 1;
            eim.setProperty("stage26_killed", String(s26_killed));
            eim.broadcastScriptProgressMessage("消灭古代橙水灵 " + s26_killed + " / 300");
            if (s26_killed > 300 && !"clear".equals(eim.getProperty("stage26"))) {
                clear = true;
            }
            break;
        case 28:
            if (mobID == 9309064) {
                var s28_killed = parseInt(eim.getProperty("stage28_killed"));
                s28_killed += 1;
                eim.setProperty("stage28_killed", String(s28_killed));
                eim.broadcastScriptProgressMessage("消灭沙漠蛇先生 " + s28_killed + " / 20");
                if (s28_killed >= 20 && !"clear".equals(eim.getProperty("stage28"))) {
                    clear = true;
                }
            }
            break;
        case 31:
            if (mobID == 9309040 || mobID == 9309041) {
                var s31_killed = parseInt(eim.getProperty("stage" + stage + "_killed"));
                s31_killed += 1;
                eim.setProperty("stage" + stage + "_killed", String(s31_killed));
                eim.broadcastScriptProgressMessage("消灭食虫水灵 " + s31_killed + " / 200");
                if (s31_killed >= 200 && !"clear".equals(eim.getProperty("stage" + stage))) {
                    clear = true;
                }
            }
            break;
        case 32:
            if (mobID == 9309087) {
                var s32_killed = parseInt(eim.getProperty("stage32_killed"));
                s32_killed += 1;
                eim.setProperty("stage32_killed", String(s32_killed));
                eim.broadcastScriptProgressMessage("消灭蓝色古代水灵 " + s32_killed + " / 9");
                if (s32_killed >= 9 && !"clear".equals(eim.getProperty("stage32"))) {
                    clear = true;
                }
            }
            break;

        case 37:
            var s37_killed_1 = parseInt(eim.getProperty("stage37_killed_1"));
            var s37_killed_2 = parseInt(eim.getProperty("stage37_killed_2"));
            var s37_killed_3 = parseInt(eim.getProperty("stage37_killed_3"));
            var s37_killed_4 = parseInt(eim.getProperty("stage37_killed_4"));
            s37_killed_1 = Math.min(s37_killed_1, 100);
            var s37_kill_1_done = s37_killed_1 >= 100;

            s37_killed_2 = Math.min(s37_killed_2, 100);
            var s37_kill_2_done = s37_killed_2 >= 100;

            s37_killed_3 = Math.min(s37_killed_3, 100);
            var s37_kill_3_done = s37_killed_3 >= 100;

            s37_killed_4 = Math.min(s37_killed_4, 100);
            var s37_kill_4_done = s37_killed_4 >= 100;
            if (mobID == 9309017) {
                s37_killed_1 += 1;
                eim.setProperty("stage37_killed_1", String(s37_killed_1));
                eim.broadcastScriptProgressMessage("消灭秃鹫先生 " + s37_killed_1 + " / 100");
                if (s37_kill_1_done) {
                    eim.broadcastWeatherEffectNotice("你消灭了100多个秃鹫先生。现在请消灭其他怪物。", 147, 5000);
                }
            }
            if (mobID == 9309018) {
                s37_killed_2 += 1;
                eim.setProperty("stage37_killed_2", String(s37_killed_2));
                eim.broadcastScriptProgressMessage("消灭沙漠土拨鼠 " + s37_killed_2 + " / 100");
                if (s37_kill_2_done) {
                    eim.broadcastWeatherEffectNotice("你消灭了100多个沙漠土拨鼠。现在请消灭其他怪物。", 147, 5000);
                }
            }
            if (mobID == 9309019) {
                s37_killed_3 += 1;
                eim.setProperty("stage37_killed_3", String(s37_killed_3));
                eim.broadcastScriptProgressMessage("消灭沙漠毒蝎 " + s37_killed_3 + " / 100");
                if (s37_kill_3_done) {
                    eim.broadcastWeatherEffectNotice("你消灭了100多个沙漠毒蝎。现在请消灭其他怪物。", 147, 5000);
                }
            }
            if (mobID == 9309016) {
                s37_killed_4 += 1;
                eim.setProperty("stage37_killed_4", String(s37_killed_4));
                eim.broadcastScriptProgressMessage("消灭丁满 " + s37_killed_4 + " / 100");
                if (s37_kill_4_done) {
                    eim.broadcastWeatherEffectNotice("你消灭了100多个丁满。现在请消灭其他怪物。", 147, 5000);
                }
            }
            if (s37_kill_1_done && s37_kill_2_done && s37_kill_3_done && s37_kill_4_done && !"clear".equals(eim.getProperty("stage32"))) {
                clear = true;
            }
            break;
        case 38:
            var s38check = eim.getProperty("stage38_check");
            var stage38_Value = parseInt(eim.getProperty("stage38_Value"));
            switch (s38check) {
                case "1":
                    if (mobID == 9309020) {
                        stage38_Value += 8;
                        eim.setProperty("stage38_Value", String(stage38_Value));
                        eim.broadcastScriptProgressMessage("获得黑暗点数 " + stage38_Value + " / 500");
                    }
                    break;
                case "2":
                    if (mobID == 9309021) {
                        stage38_Value += 8;
                        eim.setProperty("stage38_Value", String(stage38_Value));
                        eim.broadcastScriptProgressMessage("获得黑暗点数 " + stage38_Value + " / 500");
                    }
                    break;
                case "3":
                    if (mobID == 9309022) {
                        stage38_Value += 8;
                        eim.setProperty("stage38_Value", String(stage38_Value));
                        eim.broadcastScriptProgressMessage("获得黑暗点数 " + stage38_Value + " / 500");
                    }
                    break;
            }
            if (stage38_Value >= 500 && !"clear".equals(eim.getProperty("stage38"))) {
                clear = true;
            }
            break;
        case 42:
            var s42_killed_1 = parseInt(eim.getProperty("stage42_killed_1"));
            var s42_killed_2 = parseInt(eim.getProperty("stage42_killed_2"));
            var s42_killed_3 = parseInt(eim.getProperty("stage42_killed_3"));
            var s42_killed_4 = parseInt(eim.getProperty("stage42_killed_4"));
            s42_killed_1 = Math.min(s42_killed_1, 30);
            s42_killed_2 = Math.min(s42_killed_2, 30);
            s42_killed_3 = Math.min(s42_killed_3, 30);
            s42_killed_4 = Math.min(s42_killed_4, 30);
            if (mobID == 9309023) {
                s42_killed_1 += 1;
                eim.setProperty("stage42_killed_1", String(s42_killed_1));
                eim.broadcastScriptProgressMessage("消灭橡木甲虫 " + s42_killed_1 + " / 30");
            }
            if (mobID == 9309024) {
                s42_killed_2 += 1;
                eim.setProperty("stage42_killed_2", String(s42_killed_2));
                eim.broadcastScriptProgressMessage("消灭金属甲虫 " + s42_killed_2 + " / 30");
            }

            if (mobID == 9309025) {
                s42_killed_3 += 1;
                eim.setProperty("stage42_killed_3", String(s42_killed_3));
                eim.broadcastScriptProgressMessage("消灭哈维 " + s42_killed_3 + " / 30");
            }
            if (mobID == 9309026) {
                s42_killed_4 += 1;
                eim.setProperty("stage42_killed_4", String(s42_killed_4));
                eim.broadcastScriptProgressMessage("消灭血腥哈维 " + s42_killed_4 + " / 30");
            }
            var s42_kill_1_done = s42_killed_1 >= 30;
            var s42_kill_2_done = s42_killed_2 >= 30;
            var s42_kill_3_done = s42_killed_3 >= 30;
            var s42_kill_4_done = s42_killed_4 >= 30;
            if (s42_kill_1_done && s42_kill_2_done && s42_kill_3_done && s42_kill_4_done && !"clear".equals(eim.getProperty("stage42"))) {
                clear = true;
            }
            break;
        case 46:
            if (mobID == 9309031 || mobID == 9309030 || mobID == 9309029) {
                var s46_killed = parseInt(eim.getProperty("stage" + stage + "_killed"));
                s46_killed += 1;
                eim.setProperty("stage" + stage + "_killed", String(s46_killed));
                eim.broadcastScriptProgressMessage("消灭飞龙 " + s46_killed + " / 200");
                if (s46_killed >= 200 && !"clear".equals(eim.getProperty("stage" + stage))) {
                    clear = true;
                }
            }
            break;
        case 20:
            if (mobID == 9309205 && !"clear".equals(eim.getProperty("stage20"))) {
                clear = true;
            }
            break;
        case 30:
            if (mobID == 9309200 && !"clear".equals(eim.getProperty("stage30"))) {
                clear = true;
            }
            break;
        case 40:
            if (mobID == 9309203 && !"clear".equals(eim.getProperty("stage40"))) {
                clear = true;
            }
            break;
        case 50:
            if (mobID == 9309207 && !"clear".equals(eim.getProperty("stage50"))) {
                clear = true;
            }
            break;

    }
    if (clear) {
        stageClear(eim, stage, player);
    }
}

function clearPQ(eim) {
    //调用finishPQ时执行
    end(eim);
}

function end(eim) {
    // 此为自定义方法 不是务必存在的
    var str = eim.getProperty("returnMap");
    var returnMap = parseInt(str);
    eim.disposeIfPlayerBelow(100, returnMap);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function stageClear(eim, stage, player) {
    eim.setProperty("stage" + stage, "clear");
    player.getMap().showScreenEffect("event/clear");
    eim.broadcastWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
}

function spawnMob(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    switch (stage) {
        case 13:
            var map = eim.getMapInstance(stage - 1);
            var stage13_Value = parseInt(eim.getProperty("stage13_Value"));
            for (var i = 0; i < 5; i++) {
                var mob1 = em.getMonster(9309104);
                mob1.setStance(2);
                mob1.setPosition(new java.awt.Point(-698 + (java.lang.Math.random() * 100), 270));

                var mob2 = em.getMonster(9309105);
                mob2.setPosition(new java.awt.Point(-698 + (java.lang.Math.random() * 100), 270));

                map.spawnMonster(mob1, -2);
                map.spawnMonster(mob2, -2);
            }
            stage13_Value += 1;
            eim.setProperty("stage13_Value", String(stage13_Value));
            if (stage13_Value < 8 && !"clear".equals(eim.getProperty("stage13"))) {
                eim.schedule("spawnMob", 3000);
            }
            break;
    }
}

function spawnMobS26(eim) {
    var map = eim.getMapInstance(25);
    var posx1 = Array(-1328, -1149, 1173, 1357);//两边
    var posy1 = Array(-640, -400, -160, 80, 260);//两边
    var posx2 = Array(-854, -614, 598, 832);//中间
    var posy2 = Array(-700, -460, -220, 20, 260);//中间
    if (map != null) {
        for (var i = 0; i < posx1.length; i++) {
            var pox = posx1[i];
            for (var z = 0; z < posy1.length; z++) {
                var posY = posy1[z];
                var pos = new java.awt.Point(pox, posY);
                var mob = em.getMonster(9309035);
                map.spawnMonsterOnGroundBelow(mob, pos);
            }
        }
        for (var i = 0; i < posx2.length; i++) {
            var pox = posx2[i];
            for (var z = 0; z < posy2.length; z++) {
                var posY = posy2[z];
                var pos = new java.awt.Point(pox, posY);
                var mob = em.getMonster(9309035);
                map.spawnMonsterOnGroundBelow(mob, pos);
            }
        }
    }
}


function changeMobS38(eim) {
    var map = eim.getMapInstance(37);
    if (map != null) {
        if (!"clear".equals(eim.getProperty("stage38"))) {
            var rand = parseInt(java.lang.Math.random() * 3) + 1;//第几个图案
            eim.setProperty("stage38_check", String(rand));
            eim.broadcastWeatherEffectNotice("现在请消灭这个怪物获取黑暗点！。", 153, 3000);
            map.showScreenEffect(0x4, "Map/Effect2.img/aquaris/38F_" + rand, 0);
            eim.schedule("changeMobS38", 25000);
        }
    }
}

function checkMobS40(eim) {
    //-50 350
    //40层BOSS 需要在火堆中 然后 才会被烧死。
    var map = eim.getMapInstance(39)
    if (map != null) {
        if (!"clear".equals(eim.getProperty("stage40"))) {
            var boss = map.getMonsterById(9309203)
            if (boss != null) {
                var pos = boss.getPosition()
                if (pos.getX() > -50 && pos.getX() < 350) {
                    boss.damage()
                }
            }
            eim.schedule("checkMobS40", 1000)
        }
    }

}