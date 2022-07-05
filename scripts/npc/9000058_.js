/* global cm */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status === 0) {
        //if (!cm.isQuestFinished(29933)) {
        //    NewPlayer();
        //}
        if (cm.getPlayer().getLevel() >= 10) {
            cm.sendSimple("开店可以摆飞镖或弹丸哦~#b\r\n" +
                    "#L2#我要打开蓝色小箱子#l\r\n" +
                    "#L3#当铺里的大蟾蜍钱包(100等以上才能领)解未来东京任务用#l\r\n" +
                    "#L4#我要骑银色猪猪!!#l\r\n" +
                    "#L5#我要进行忍影瞬杀的任务(四转盗贼限定)#l\r\n" +
                    "#L6#我要删除银或金宝箱空白道具(并且补偿一次道具)#l\r\n" +
                    "#L7#我要完成灯泡不能接的任务#l\r\n" +
                    /* "#L8#我领取广播道具#ll\r\n" +
                     "#L9#我领取爱心广播道具#\l\r\n" + 
                     "#L10#我领取骷篓广播道具#l\r\n" +*/
                    "#L11#我领取精灵商人#l\r\n" +
                    "#L12#我要打恰吉#l\r\n" +
                    //"#L13#我要广播道具#l\r\n" +
                    "#L14#我要补学暴风神射 已有勿点#l\r\n" +
                    "#L15#我要补学闇灵治愈 已有勿点#l\r\n" +
                    "#L16#我要补学骑宠技能+马鞍+龙族香水#l\r\n" +
                    "#L17#我要买狼的生命水，1瓶1亿，购买前请确认其他栏是否有空格#l\r\n" /*+
                     "#L18#我要买皇家骑士100等坐骑,需花费1000万，购买前请确认其他栏是否有空格"*/);
        } else {
            cm.sendOk("你的等级未达到10级。");
            cm.dispose();
            return;
        }
    } else if (status === 1) {
        var level = cm.getPlayer().getLevel();
        if (selection === 2) {
            if (!cm.haveItem(4031307, 1)) {
                cm.sendOk("#b检查一下背包有没有蓝色礼物盒哦");
                cm.dispose();
                return;
            }
            cm.gainItem(4031307, -1);
            cm.gainItem(2020020, 100);
            cm.sendOk("#b蛋糕不要吃太多~旅游愉快~");
        } else if (selection === 3) {
            if (level < 100) {
                cm.sendOk("你的等级还不够。");
                cm.dispose();
                return;
            }
            cm.gainItem(5252002, 1);
        } else if (selection === 4) {
            if (!cm.haveItem(4000264, 400) || !cm.haveItem(4000266, 400) || !cm.haveItem(4000267, 400) || level < 120 || !cm.canHold(1902001, 1)) {
                cm.sendOk("请检查一下背包有没有金色皮革４００个、木头肩护带４００个、骷髅肩护带４００个,或者是你等级不够");
                cm.dispose();
                return;
            }
            cm.gainItem(4000264, -400);
            cm.gainItem(4000266, -400);
            cm.gainItem(4000267, -400);
            cm.gainItem(1902001, 1);
            cm.sendOk("#b好好珍惜野猪~~");
            /*} else if (selection === 8 || selection === 9 || selection === 10) { //广播
             var Item = 0;
             var amount = 0;
             var reqLevel = 0;
             var BossLog = '';
             switch (selection) {
             case 8:
             Item = 5072000;
             amount = 5;
             BossLog = '1';
             reqLevel = 1;
             break;
             case 9:
             Item = 5073000;
             amount = 10;
             BossLog = '30';
             reqLevel = 30;
             break;
             case 10:
             Item = 5074000;
             amount = 5;
             BossLog = '70';
             reqLevel = 70;
             break;
             }
             if (level < reqLevel || cm.getPlayer().getBossLog(BossLog) > 0) {
             cm.sendNext("一天只能领一次或你的等级还不够。");
             cm.dispose();
             return;
             }
             
             cm.setBossLog(BossLog);
             cm.gainItem(Item, amount);
             cm.sendNext("已经获得#i" + Item + "#x" + amount + "。");*/
        } else if (selection === 11) { //商人
            if (level < 10 || cm.getPlayer().getBossLog('sell') > 1) {
                cm.sendOk("1天只能领一次或你的等级还不够10等才能领唷。");
                cm.dispose();
                return;
            }
            cm.setBossLog('sell');
            cm.gainItem(5030000, 1);
        } else if (selection === 5) {
            if (cm.getJob() === 412) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else if (cm.getJob() === 422) {
                cm.warp(910300000, 3);
                cm.spawnMonster(9300088, 6, -572, -1894);
            } else {
                cm.sendOk("这是跟盗贼有关的事情哦");
            }
        } else if (selection === 6) {
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
        } else if (selection === 7) {
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
        } else if (selection === 12) {
            cm.warp(229010000);
            cm.dispose();
            /*} else if (selection === 13) {
             cm.dispose();
             cm.openNpc(9000056);
             return;*/
        } else if (selection === 14) {
            if (cm.getPlayer().getQuestStatus(6250) !== 2) {
                cm.sendNext("暴风神射");
                cm.dispose();
                return;
            }
            cm.teachSkill(3121004, 0, 10);
            cm.sendNext("已经给您暴风神射技能");
            return;
        } else if (cm.getPlayer().getOneTimeLog("暴风神射补学") > 0) {
            cm.sendNext("本功能只能使用一次");
            cm.dispose();
            return;


        } else if (selection === 15) {
            if (cm.getPlayer().getQuestStatus(6291) !== 2) {
                cm.sendNext("灵魂的魔法阵");
                cm.dispose();
                return;
            }
            cm.teachSkill(1320008, 0, 5);
            cm.sendNext("已经给您闇灵治愈技能");
        } else if (selection === 16) {
            if (cm.getPlayer().getQuestStatus(6002) !== 2) {
                cm.sendNext("请先完成怪物骑乘任务");
                cm.dispose();
                return;
            } else if (!cm.canHold(1912000) || !cm.canHold(4031509, 1)) {
                cm.sendNext("背包空间不足");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getOneTimeLog("怪物骑乘任务补偿") > 0) {
                cm.sendNext("本功能只能使用一次");
                cm.dispose();
                return;
            }
            cm.gainItem(1912000, 1);
            cm.gainItem(4031509, 1);
            cm.teachSkill(1004, 1, 1);
            cm.getPlayer().setOneTimeLog("怪物骑乘任务补偿");
            cm.sendNext("已经给您#v4031509##v1912000#以及骑乘技能");
        } else if (selection === 17) {
            if (cm.getPlayer().getMeso() >= 100000000) {
                cm.gainMeso(-100000000);
                cm.gainItem(4032334, 1);
                cm.sendOk("感谢购买!");
                cm.dispose();
            } else {
                cm.sendOk("#d你枫币不够哦");
                cm.dispose();
            }
            cm.dispose();
        } else if (selection === 18) {
            if (cm.getPlayer().getMeso() >= 10000000) {
                if (cm.canHoldByType(1, 1)) {
                    cm.gainMeso(-10000000);
                    cm.gainItem(1902006, 1);
                    cm.sendOk("感谢购买!");
                    cm.dispose();
                } else {
                    cm.sendOk("前请确认装备栏是否有空格!");
                }
            } else {
                cm.sendOk("#d你枫币不够哦");
                cm.dispose();
            }
            cm.dispose();
        }
    } else {
        cm.dispose();
    }

}

/*function NewPlayer() {
 var item = [1002971, 1052202, 5000319, 2000016, 2000018, 5370000, 3010181, 3010180];
 var amount = [1, 1, 1, 1, 1, 1, 1, 1];
 var next = true;
 for (var i = 0; i < item.length; i++) {
 if (!cm.canHold(item[i], amount[i])) {
 next = false;
 }
 }
 if (!next) {
 cm.sendOk("背包空间不足以领新手奖励唷。");
 cm.dispose();
 return;
 }
 cm.gainItem(1002971, 1);//泡泡新手帽
 cm.gainItem(1052202, 1);//泡泡新手套装
 cm.gainPet(5000319, "软Q皮卡啾", 1, 0, 100, 0, 90);//软Q皮卡啾 90天 (宠物)
 cm.gainItem(2000016, 300);//白色浓缩药水 *300
 cm.gainItem(2000018, 300);//浓缩活力药水 *300
 cm.gainItemPeriod(5370000, 1, 7);//黑板 7天
 cm.gainItem(3010181, 1);//泡泡新手MP椅子
 cm.gainItem(3010180, 1);//泡泡新手HP椅子
 cm.forceCompleteQuest(29933); //完成新手奖励
 cm.sendOk("欢迎来到 枫之谷 请使用 @help/@帮助 了解各式指令\r\n\r\n\r\n游戏愉快^^");
 cm.dispose();
 return;
 }*/
