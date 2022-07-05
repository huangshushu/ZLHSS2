/* global cm */
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var MaplePacketCreator = Java.type('tools.MaplePacketCreator');

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" + 
          //  "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "    #r此为大王岛功能整合区，有什么需要我替您服务吗?#k\r\n" +
            "#b#L1#【   所有爆率查询   】#l#k" +
            "#b#L2#【     主线任务     】#l#k\r\n" +
            "#b#L3#【   传讯给管理员   】#l#k\r\n" +
            //"#b#L55#【   公婆戒指升级   】#l#k" +
            "#b#L4#【   参予整点活动   】#l#k" +
            "#b#L5#【   新手奖励领取   】#l#k\r\n" +
            "#b#L6#【   每日签到证明   】#l#k\r\n" +
            "#b#L7#【   等级奖励礼包   】#l#k" +
            "#b#L8#【     地图传送     】#l#k\r\n" +
            //"#b#L9#【   蟾蜍钱包领取   】#l#k" +
            //"#b#L10#【   银色猪猪制作   】#l#k\r\n" +
            //"#b#L11#【   忍影顺杀任务   】#l#k" +
            //"#L12#删除银或金宝箱空白道具(并且补偿一次道具)#l\r\n" +
            //"#L13#完成灯泡不能接的任务#l\r\n" +
            //"#L14#领取精灵商人#l\r\n" +
            "#b#L15#【   挑战鬼娃恰吉   】#l#k" +
            //"#b#L16#【       转生       】#l\r\n" +
            //"#L17#补学闇灵治愈 已有勿点#l\r\n" +
            //"#L18#补学骑宠技能+马鞍+龙族香水#l\r\n" +
            "#b#L19#【 狼生命水 花费1亿 】#l#k\r\n" +
            "#b#L20#【   枫叶武器兑换   】#l#k" +
            "#r#L21#【   抽取新商城装   】#l#k\r\n" +
            "#w#L22#【 黄金枫叶武器兑换 】#l#k" +
            "#r#L23#【      师徒        】#l#k\r\n" +
            "#d#L24#【      跑商        】#l#k" +
            "#r#L25#【    在线时长奖励  】#l#k\r\n" +
           //"#b#L26#【 】#l#k" +
           //"#b#L27#【 】#l#k" +
           //"#b#L28#【 】#l#k" +
           // "#b#L29#【      转生      】#l#k\r\n" +
           // "#b#L30#【     推广活动     】#l#k" +
           // "#b#L31#【     120等奖励    】#l#k\r\n" +
            //"#b#L32#【    皇家120坐骑   】#l#k\r\n" +
           // "#b#L33#【  领取武陵任务道具 】#l#k"+
            "#b#L34#【       变性       】#l#k\r\n"
            );
}

function action(mode, type, selection) {
    if (select === -1) {
        select = selection;
    }
    var level = cm.getPlayer().getLevel();
    switch (select) {
        case 1:
        {
            cm.dispose();
            openNpc(9010000, "爆率查询");
           //cm.getC().getSession().write(Packages.tools.MaplePacketCreator.enableActions());
            break;
        }
        case 2:
        {
            cm.dispose();
            cm.openNpc(9000001,"主线任务");
            break;
        }
        case 3:
        {
            CGM(mode, type, selection);
            break;
        }
        case 4:
        {
            cm.dispose();
            cm.openNpc(9000001);
            break;
        }
        case 5:
        {
            if (cm.getOneTimeLog("新手礼包") < 1 && cm.canHold(1472149,1)&&cm.canHold(1332005,1)&&cm.canHold(1372013,1)&&cm.canHold(1332007,1)) {
                cm.setOneTimeLog("新手礼包");
                cm.gainPet(5000006, "新手小雪犬", 1, 0, 100, 0, 119);//新手宠物 90天 (宠物)
                cm.给予道具(1472149,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0,0,0,0,1);
                cm.给予道具(1332005,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0,0,0,0,1);
                cm.给予道具(1372013,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0,0,0,0,1);
                cm.给予道具(1332007,30,30,30,30,0,0,30,30,0,0,0,0,0,0,0,0,0,0,1);
                cm.gainItem(2120000, 200);
                cm.sendOk("领取新手礼包，请善待它哦。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("您有足够的背包空间吗？或者您已领取过新手礼包。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 6:
        {
            cm.dispose();
            openNpc(9010000, "连续在线");
            break;
        }
        case 7:
        {
            cm.dispose();
            openNpc(9010000, "等级礼包");
            break;
        }
        case 8:
        {   
            cm.dispose();
            openNpc(9010000, "地图传送");
            break;
        }
        case 9:
        {
            if (level < 100) {
                cm.sendOk("你的等级还不够。");
                cm.dispose();
                return;
            } else {
                cm.gainItem(5252002, 1);
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 10:
        {
            if (!cm.haveItem(4000264, 400) || !cm.haveItem(4000266, 400) || !cm.haveItem(4000267, 400) || level < 120 || !cm.canHold(1902001, 1)) {
                cm.sendOk("请检查一下背包有没有金色皮革４００个、木头肩护带４００个、骷髅肩护带４００个,或者是你等级不够");
                cm.dispose();
                return;
            } else {
                cm.gainItem(4000264, -400);
                cm.gainItem(4000266, -400);
                cm.gainItem(4000267, -400);
                cm.gainItem(1902001, 1);
                cm.sendOk("#b好好珍惜野猪~~");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 11:
        {
            if (cm.getJob() === 412) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else if (cm.getJob() === 422) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else {
                cm.sendOk("这是跟盗贼有关的事情哦");
            }
            cm.dispose();
            break;
        }
        /*case 12:
         {
         if (cm.haveItem(2070018)) {
         cm.removeAll(2070018);
         cm.gainItem(5490000, 1);
         cm.gainItem(4280000, 1);
         cm.sendOk("恭喜你删除完毕并补偿了金宝箱");
         } else if (cm.haveItem(1432036)) {
         cm.removeAll(1432036);
         cm.gainItem(5490001, 1);
         cm.gainItem(4280001, 1);
         cm.sendOk("恭喜你删除完毕并补偿了银宝箱");
         } else {
         cm.sendOk("抱歉你没有空白道具...");
         }
         cm.dispose();
         break;
         }
         case 13:
         {
         if (cm.getQuestStatus(29507) === 1) {
         cm.gainItem(1142082, 1);
         cm.forceCompleteQuest(29507);
         }
         cm.forceCompleteQuest(3083);
         cm.forceCompleteQuest(8248);
         cm.forceCompleteQuest(8249);
         //cm.forceCompleteQuest(8510);
         cm.forceCompleteQuest(20527);
         cm.forceCompleteQuest(50246);
         cm.sendOk("完成任务。");
         cm.dispose();
         break;
         }
         case 14:
         {
         if (level < 10 || cm.getPlayer().getBossLog('sell') > 1) {
         cm.sendOk("1天只能领一次或你的等级还不够10等才能领唷。");
         cm.dispose();
         return;
         } else {
         cm.setBossLog('sell');
         cm.gainItem(5030000, 1);
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         }*/
        case 15:
        {
            if (level < 10) {
                cm.sendOk("你的等级还不够10等唷。");
                cm.dispose();
                return;
            }
            cm.warp(229010000);
            cm.dispose();
            break;
        }
        case 16:
         {
            if (level < 200) {
                cm.sendOk("你的等级还不够。200级才可以转生");
                cm.dispose();
                return;
            } else {
                cm.changeJob(0);
                cm.StatsZs();
                //cm.getPlayer().setExp(0);
                //cm.sendOk("职业初始完成。");
                cm.dispose();
                return;
            }
         break;
         }
         /*
         case 17:
         {
         if (cm.getPlayer().getQuestStatus(6291) !== 2) {
         cm.sendOk("灵魂的魔法阵");
         cm.dispose();
         return;
         } else {
         cm.teachSkill(1320008, 0, 5);
         cm.sendOk("已经给您闇灵治愈技能");
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         }
         
         case 18:
         {
         if (cm.getPlayer().getQuestStatus(6002) !== 2) {
         cm.sendOk("请先完成怪物骑乘任务");
         cm.dispose();
         return;
         } else if (!cm.canHold(1912000) || !cm.canHold(4031509, 1)) {
         cm.sendOk("背包空间不足");
         cm.dispose();
         return;
         } else if (cm.getPlayer().getOneTimeLog("怪物骑乘任务补偿") > 0) {
         cm.sendOk("本功能只能使用一次");
         cm.dispose();
         return;
         }
         cm.gainItem(1912000, 1);
         cm.gainItem(4031509, 1);
         cm.teachSkill(1004, 1, 1);
         cm.getPlayer().setOneTimeLog("怪物骑乘任务补偿");
         cm.sendOk("已经给您#v4031509##v1912000#以及骑乘技能");
         cm.dispose();
         break;
         }*/
        case 19:
        {
            /*if (cm.getPlayer().getMeso() >= 100000000) {
             cm.gainMeso(-100000000);
             cm.gainItem(4032334, 1);
             cm.sendOk("感谢购买!");
             cm.dispose();
             return;
             } else {
             cm.sendOk("#d你枫币不够哦");
             cm.dispose();
             return;
             }
             cm.dispose();*/
            openNpc(9010000, "狼生命水");
            break;
        }
        case 20:
        {
            openNpc(9330012);
            break;
        }
        case 21:
        {
            openNpc(9010000, "新点装抽奖");
            break;
        }
        case 22:
        {
            openNpc(2101018);
            break;
        }
        case 23:
            openNpc(2091005, "师徒");
            break;
            /*
         {
         if (cm.getAcLogS("集字活动") < 5) {
         if (level >= 50) {
         if (cm.haveItem(3994021, 1) && cm.haveItem(3994000, 1) && cm.haveItem(3994073, 1)) {
         cm.setAcLog("集字活动");
         cm.gainItem(3994021, -1);
         cm.gainItem(3994000, -1);
         cm.gainItem(3994073, -1);
         cm.getPlayer().modifyCSPoints(2, 100, true);
         cm.sendOk("领取成功。");
         cm.dispose();
         return;
         } else {
         cm.sendOk("你的道具不足。");
         cm.dispose();
         return;
         }
         } else {
         cm.sendOk("你的等级还不够50等。");
         cm.dispose();
         return;
         }
         
         } else {
         cm.sendOk("你已经领取5次了。");
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         }*/
        case 24:
            openNpc(9010009,1);
            break;
            /*
         {
         if (cm.getAcLogS("84补偿") < 1) {
         if (cm.getPlayerStat("LVL") >= 40) {
         cm.setAcLog("84补偿");
         cm.getPlayer().modifyCSPoints(2, 500, true);
         cm.sendOk("成功领取蓝宝补偿500枫叶点数。");
         cm.dispose();
         return;
         } else {
         cm.sendOk("你的等级未达到要求。");
         cm.dispose();
         return;
         }
         } else {
         cm.sendOk("你已经领取了蓝宝补偿。");
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         
         }*/

        case 25:
        {
            cm.dispose();
            openNpc(9000001,"在线时长奖励");
            break;
        }
        /*case 26:
         {
         if (cm.getAcLogS("89补偿") < 1) {
         if (cm.getAccNewTime("2017-08-09 22:00:00")) {
         cm.setAcLog("89补偿");
         cm.getPlayer().modifyCSPoints(2, 999, true);
         cm.gainItem(5210000, 1, 1);
         cm.sendOk("成功领取补偿999枫叶点数跟全日经验加倍。");
         cm.dispose();
         return;
         } else {
         cm.sendOk("你的注册时间未达到要求。");
         cm.dispose();
         return;
         }
         } else {
         cm.sendOk("你已经领取过了补偿。");
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         
         }*/

        case 27:
        {
            if (cm.getAcLogS("77活动") < 1) {
                if (level >= 30) {

                    if (cm.haveItem(4031938, 200)) {
                        if (cm.canHold()) {
                            cm.setAcLog("77活动");
                            cm.gainItem(4031938, -200);
                            cm.gainItem(1142367, 1);
                            cm.getPlayer().modifyCSPoints(2, 520, true);
                            cm.sendOk("领取成功。");
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("您的背包已满。");
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.sendOk("你的道具不足。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的等级还不够30等。");
                    cm.dispose();
                    return;
                }

            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }

        case 28:
        {
            if (cm.getAcLogS("913补偿") < 1) {
                if (level >= 20) {
                    if (cm.canHoldByType(5, 5)) {
                        cm.setAcLog("913补偿");
                        cm.gainItem(5130000, 30);
                        cm.gainItemPeriod(5210000, 1, 1);
                        cm.gainItemPeriod(5360015, 1, 1);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("您的背包已满。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的等级还不够20等。");
                    cm.dispose();
                    return;
                }

            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }

        case 29:
        {
            openNpc(9010000, "职业变更");
            /*
            cm.changeJob(0);
            cm.StatsZs();
            cm.getPlayer().setExp(0);
            cm.sendOk("职业初始完成。");
            cm.dispose();
            */
            break;
        }

        case 30:
        {
            if (cm.getAcLogS("推广1118") < 1) {
                if (level >= 50) {

                    if (cm.getPlayer().getTJJF() >= 1) {
                        if (cm.canHoldByType(5, 4)) {
                            if (cm.canHold()) {
                                cm.setAcLog("推广1118");
                                cm.getPlayer().modifyJF(3, -1);
                                cm.getPlayer().modifyCSPoints(2, 1688, true);
                                cm.gainMeso(6666666);
                                cm.gainItemPeriod(5360015, 1, 7);
                                cm.gainItemPeriod(5210000, 1, 7);
                                cm.gainItem(5130000, 10);
                                cm.getItemLog("领取FB奖励", "领取 FB奖励成功");
                                cm.sendOk("领取成功。");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("您的背包已满。");
                                cm.dispose();
                                return;
                            }
                        } else {
                            cm.sendOk("您的背包已满。");
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.sendOk("你好像没有推广哦,或者还没发到你。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你的等级还不够50等。");
                    cm.dispose();
                    return;
                }

            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 31:
        {
            if (cm.getAcLogS("120等奖励") < 1) {
                if (level >= 120) {
                    cm.setAcLog("120等奖励");
                    cm.getPlayer().modifyCSPoints(2, 1288, true);
                    cm.getItemLog("120等奖励", "领取 120等奖励成功");
                    cm.sendOk("领取成功。");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你的等级还不够120等。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 32:
        {
            if (level >= 120) {
                if (cm.haveItem(1902006) && cm.getPlayer().getMeso() >= 100000000) {
                    cm.gainMeso(-100000000);
                    cm.gainItem(-1902006, 1);
                    cm.gainItem(1902007, 1);
                    cm.sendOk("兑换成功");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("你没有提提欧或者没有一亿枫币。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你的等级还不够120等。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }

        case 33:
        {
            if (cm.getOneTimeLog("武陵任务") < 1) {
                if (cm.canHoldByType(2, 2)) {
                    if (cm.canHoldByType(4, 2)) {
                        cm.setOneTimeLog("武陵任务");
                        cm.gainItem(4031794, 1);
                        cm.gainItem(2022252, 1);
                        cm.sendOk("领取成功。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("您的背包已满。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("您的背包已满。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 34:
        {
            openNpc(9010000, "变性");
            break;
        }
        case 55:
        {
            cm.dispose();
            openNpc(9010000, "升级公婆戒指");
            break;
        }

        default :
        {
            cm.sendOk("此功能未完成");
            cm.dispose();
        }
    }
}

function select3(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        var gain = cm.getMP();
        if (gain <= 0) {
            cm.sendOk("目前没有任何在线点数唷。");
            cm.dispose();
            return;
        } else {
            cm.sendYesNo("目前枫叶点数: " + cm.getMaplePoint() + "\r\n" + "目前在线点数已经累积: " + gain + " 点，是否领取?");
        }
    } else if (status === i++) {
        var gain = cm.getMP();
        cm.setMP(0);
        cm.gainMaplePoint(gain);
        cm.save();
        cm.sendOk("领取了 " + gain + " 点在线点数, 目前枫叶点数: " + cm.getMaplePoint());
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function CGM(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendGetText("请输入你要对GM传送的讯息");
    } else if (status === i++) {
        var text = cm.getText();
        if (text === null || text === "") {
            cm.sendOk("并未输入任何内容.");
            cm.dispose();
            return;
        }
        cm.dispose();
        cm.processCommand("@CGM " + text);
    } else {
        cm.dispose();
    }
}

function openNpc(npcid) {
    openNpc(npcid, null);
}

function openNpc(npcid, script) {
    var mapid = cm.getMapId();
    cm.dispose();
    if (cm.getPlayerStat("LVL") < 10) {
        cm.sendOk("你的等级不能小于10等.");
    } else if (
            cm.hasSquadByMap() ||
            cm.hasEventInstance() ||
            cm.hasEMByMap() ||
            mapid >= 990000000 ||
            (mapid >= 680000210 && mapid <= 680000502) ||
            (mapid / 1000 === 980000 && mapid !== 980000000) ||
            mapid / 100 === 1030008 ||
            mapid / 100 === 922010 ||
            mapid / 10 === 13003000
            ) {
        cm.sendOk("你不能在这里使用这个功能.");
    } else {
        if (script == null) {
            cm.openNpc(npcid);
        } else {
            cm.openNpc(npcid, script);
        }
    }
}