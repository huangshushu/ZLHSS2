/* global cm */

var status = -1;
var select = -1;

function start() {
    cm.sendSimple(
            "\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
            "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063##i3994071##i3994077#\r\n" +
            "    #r此为泡泡谷功能整合区，有什么需要我替您服务吗?#k\r\n" +
            "#b#L1#【   查看线上人数   】#l#L2#【   领取在线点数   】#l#k\r\n" +
            "#b#L3#【   传讯给管理员   】#l#L4#【   参予整点活动   】#l#k\r\n" +
            "#b#L5#【   新手宠物领取   】#l#L6#【   每日签到证明   】#l#k\r\n" +
            "#b#L7#【   推荐奖励领取   】#l#L8#【   开启蓝色箱子   】#l#k\r\n" +
            "#b#L9#【   蟾蜍钱包领取   】#l#L10#【   银色猪猪制作   】#l#k\r\n" +
            "#b#L11#【   忍影顺杀任务   】#l#L32#【    皇家120坐骑   】#l#k\r\n" +
            //"#L12#删除银或金宝箱空白道具(并且补偿一次道具)#l\r\n" +
            //"#L13#完成灯泡不能接的任务#l\r\n" +
            //"#L14#领取精灵商人#l\r\n" +
            "#b#L15#【   挑战鬼娃恰吉   】#l#k" +
            //"#L16#补学暴风神射 已有勿点#l\r\n" +
            //"#L17#补学闇灵治愈 已有勿点#l\r\n" +
            //"#L18#补学骑宠技能+马鞍+龙族香水#l\r\n" +
            "#b#L19#【 狼生命水 花费1亿 】#l#k\r\n" +
            "#b#L20#【   枫叶武器兑换   】#l#k" +
            "#b#L21#【   玩家指令查询   】#l#k\r\n" +
            "#b#L22#【 黄金枫叶武器兑换 】#l#k" +
            "#b#L25#【     D片领取     】#l#k\r\n" +
            //"#b#L29#【    万圣节活动    】#l#k\r\n" +
            "#b#L30#【     新手福利     】#l#k" +
            "#b#L31#【     120等奖励    】#l#k\r\n" +
            "#b#L33#【  领取武陵任务道具 】#l#k" +
            "#b#L34#【      选择阵营    】#l#k\r\n" 
            //"#b#L36#【      领取苹果    】#l#k"
            //"#b#L35#【      圣诞活动    】#l#k"

            //"#b#L27#【七夕活动9/8维修后关】#l#k\r\n"+
            //"#b#L28#【  9/13补偿 20号晚上维修后关 】#l#" 
            //"#b#L26#【 8/9补偿12号晚上维修后关 】#l#k\r\n" 
            //"#b#L23#【 集字活动(到7/30) 】#l"
            //"#b#L24#【蓝宝补偿(8/10号晚上维修后关闭)】#l"
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
            cm.sendOk("当前" + cm.getChannelNumber() + "频道: " + cm.getChannelOnline() + "人   当前伺服器总计线上人数: " + cm.getTotalOnline() + "个");
            cm.dispose();
            break;
        }
        case 2:
        {
            select3(mode, type, selection);
            break;
        }
        case 3:
        {
            CGM(mode, type, selection);
            break;
        }
        case 4:
        {
            openNpc(9000001);
            break;
        }
        case 5:
        {
            if (cm.getOneTimeLog("新手宠物") < 1) {
                cm.setOneTimeLog("新手宠物");
                cm.gainPet(5000061, "皮卡啾", 1, 0, 100, 0, 119);//皮卡啾 90天 (宠物)
                cm.sendOk("领取新手宠物成功。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("您已领取过新手宠物。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 6:
        {
            if (cm.getQianDaoAcLog("每日签到") < 1) {
                cm.setAcLog("每日签到");
                cm.gainItem(4000392, 1);
                cm.sendOk("签到成功。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("你今天已经签到过了，请第二天再过来。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 7:
        {
            if (cm.getPlayer().getTGJF() > 0) {
                var number = cm.getPlayer().getTGJF();
                cm.getPlayer().setTGJF(0);
                cm.getPlayer().modifyCSPoints(2, number * 100, true);
                cm.getItemLog("领取推荐奖励", "领取 " + number + " 位推荐人的推荐奖励 " + number + "x100枫叶点数。");
                cm.sendOk("领取 " + number + " 位推荐人的推荐奖励 " + number + "x100枫叶点数。");
                cm.dispose();
                return;
            } else {
                cm.sendOk("你没有推荐玩家来玩游戏或已领取完。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 8:
        {
            if (!cm.haveItem(4031307, 1)) {
                cm.sendOk("#b检查一下背包有没有蓝色礼物盒哦");
                cm.dispose();
                return;
            } else {
                cm.gainItem(4031307, -1);
                cm.gainItem(2020020, 100);
                cm.sendOk("#b蛋糕不要吃太多~旅游愉快~");
                cm.dispose();
                return;
            }
            cm.dispose();
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
        /*case 16:
         {
         if (cm.getPlayer().getQuestStatus(6250) !== 2) {
         cm.sendOk("暴风神射");
         cm.dispose();
         return;
         } else {
         cm.teachSkill(3121004, 0, 10);
         cm.sendOk("已经给您暴风神射技能");
         cm.dispose();
         return;
         }
         cm.dispose();
         break;
         }
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
            openNpc(9010000, "玩家指令查询");
            break;
        }
        case 22:
        {
            openNpc(2101018);
            break;
        }
        /*case 23:
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
        /*case 24:
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
            if (!cm.haveItem(4031179)) {
                if (cm.getBossLog("D片领取") < 2) {
                    if (level >= 100) {
                        cm.setBossLog("D片领取");
                        cm.gainItem(4031179, 1);
                        cm.sendOk("成功领取D片一张。");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("你的等级未达到要求。");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("你已经领取D片一张。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("你已经有D片。");
                cm.dispose();
                return;
            }
            cm.dispose();
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

        /*case 27:
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
         }*/

        /*case 28:
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
         }*/

        /*case 29:
         {
         if (cm.getAcLogS("万圣节") < 1) {
         if (level >= 30) {
         
         if (cm.haveItem(4031833, 100)) {
         if (cm.canHoldByType(1, 2)) {
         if (cm.canHold()) {
         cm.setAcLog("万圣节");
         cm.gainItem(4031833, -100);
         cm.gainItem(1004346, 1);
         cm.gainItem(1052172, 1);
         cm.gainItem(3010279, 1);
         cm.getPlayer().modifyCSPoints(2, 1030, true);
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
         cm.sendOk("你的道具不足,需要100个南瓜果汁。");
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
         }*/

        case 30:
        {
            if (cm.getAcLogS("推广0121") < 1) {
                // if (level >= 10) {

                if (cm.getPlayer().getTJJF() >= 1) {
                    if (cm.canHoldByType(2, 2)) {
                        if (cm.canHold()) {
                            cm.setAcLog("推广0121");
                            cm.getPlayer().modifyJF(3, -1);
                            cm.getPlayer().modifyCSPoints(2, 666, true);
                            cm.gainMeso(6666666);
                            cm.gainItemPeriod(2450000, 5, 5);
                            cm.getItemLog("领取推广奖励", "领取推广奖励成功");
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
                    cm.sendOk("你没有资格。");
                    cm.dispose();
                    return;
                }
                //} else {
                //     cm.sendOk("你的等级还不够10等。");
                //     cm.dispose();
                //     return;
                // }

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
            openNpc(9010000, "选择阵营");
            break;
        }

        case 35:
        {

            if (cm.getAcLogS("圣诞活动") < 1) {

                if (!cm.haveItem(3992000, 100) || !cm.haveItem(3992024, 100) || !cm.haveItem(3992026, 100) || !cm.haveItem(4001141, 1) || level < 50) {
                    cm.sendOk("请检查一下背包有没有圣诞老人娃娃100个、圣诞花环100个、圣诞铃100个、雪人的树枝1个,或者是你等级不够50");
                    cm.dispose();
                    return;
                } else {
                    if (cm.canHoldByType(1, 3) && cm.canHoldByType(3, 2) && cm.canHoldByType(5, 2)) {
                        if (cm.canHold()) {
                            cm.setAcLog("圣诞活动");
                            cm.gainItem(3992000, -100);
                            cm.gainItem(3992024, -100);
                            cm.gainItem(3992026, -100);
                            cm.gainItem(4001141, -1);
                            cm.gainItem(5010051, 1);
                            cm.gainItem(1004048, 1);
                            cm.gainItem(1052693, 1);
                            cm.gainItem(3010767, 1);
                            cm.getPlayer().modifyCSPoints(2, 666, true);
                            cm.sendOk("#b领取成功~~");
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("#b请检查您的背包是否有足够的空位~~");
                            cm.dispose();
                            return;
                        }
                    } else {
                        cm.sendOk("#b请检查您的背包是否有足够的空位~~");
                        cm.dispose();
                        return;
                    }

                }
            } else {
                cm.sendOk("你已经领取过了。");
                cm.dispose();
                return;
            }
            cm.dispose();
            break;
        }
        case 36:
        {

            if (cm.getAcLogS("领取苹果") < 1) {
                if (cm.canHoldByType(2, 2)) {
                    if (cm.canHold()) {
                        cm.setAcLog("领取苹果");
                        cm.gainItem(2012005, 30);
                        cm.sendOk("#b领取成功~~");
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("#b请检查您的背包是否有足够的空位~~");
                        cm.dispose();
                        return;
                    }
                } else {
                    cm.sendOk("#b请检查您的背包是否有足够的空位~~");
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
