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
            "#b#L11#【   忍影顺杀任务   】#l#k" +
            //"#L12#删除银或金宝箱空白道具(并且补偿一次道具)#l\r\n" +
            //"#L13#完成灯泡不能接的任务#l\r\n" +
            //"#L14#领取精灵商人#l\r\n" +
            "#b#L15#【   挑战鬼娃恰吉   】#l#k\r\n" +
            //"#L16#补学暴风神射 已有勿点#l\r\n" +
            //"#L17#补学闇灵治愈 已有勿点#l\r\n" +
            //"#L18#补学骑宠技能+马鞍+龙族香水#l\r\n" +
            "#b#L19#【 狼生命水 花费1亿 】#l#k" +
            "#b#L20#【   枫叶武器兑换   】#l#k\r\n" +
            "#b#L21#【   玩家指令查询   】#l" +
            "#b#L22#【 黄金枫叶武器兑换 】#l#k\r\n"
            //"#b#L23#【   领取0625补偿    】#l"
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
            if (cm.getQianDaoTime("每日签到") < 1) {
                cm.setBossLog("每日签到");
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
            if (cm.getPlayer().getMeso() >= 100000000) {
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
            cm.dispose();
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
         if (cm.getAcLogS("625补偿") < 1) {
         if (cm.getAccNewTime("2017-06-25 18:00:00") == 1) {
         if (level >= 25) {
         if (cm.canHoldByType(2, 3)) {
         cm.setAcLog("625补偿");
         cm.getPlayer().modifyCSPoints(2, 1200, true);
         cm.gainItem(2450000, 3);
         cm.sendOk("领取成功。");
         cm.dispose();
         return;
         } else {
         cm.sendOk("你的消耗栏没有5个空格。");
         cm.dispose();
         return;
         }
         } else {
         cm.sendOk("你的等级还不够25等。");
         cm.dispose();
         return;
         }
         } else {
         cm.sendOk("你不是6月25号晚上6点前注册的帐号");
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
