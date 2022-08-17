/*
 冒险岛(079)游戏服务端
 海盗二转转职教官
 */

var status = 0;
var jobId;
var jobName;
var mapId


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("请重试.");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
       /* if ((cm.getJob() == 510 || cm.getJob() == 520)&& cm.getMapId() == 912010200 && cm.haveItem(4031059, 1)) {
            if (cm.getQuestStatus(6370) == 1) {
                cm.removeAll(4031059);
                cm.teachSkill(5221006, 0, 10);
                cm.forceCompleteQuest(6370);
            } else if (cm.getQuestStatus(6330) == 1) {
                cm.removeAll(4031059);
                cm.teachSkill(5121003, 0, 10);
                cm.forceCompleteQuest(6330);
            }
            //cm.warp(120000101, 0);
			cm.gainItem(4031057, 1);
			cm.removeAll(4031059);
			cm.sendOk("你完成了一个考验，现在去找长老公馆找#b艾瑞克#k。");
            cm.dispose();
			return;
        }*/
        if (cm.getJob() == 0) {
            if (cm.getPlayer().getLevel() >= 10) {
                cm.是否说明文字("你想要成为一位#b海盗#k吗？");
            } else {
                cm.说明文字("等级不够，需要达到 #b10#k 级。");
                cm.dispose();
            }
        } else {
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) {
                if (cm.haveItem(4031856, 15) || cm.haveItem(4031857, 15)) {
                    if (cm.haveItem(4031856, 15) || cm.haveItem(4031857, 15)) {
                        status = 20;
                        cm.sendNext("我看到你完成了测试。");
                    } else {
                        cm.sendOk("请去找 #r海盗转职教官#k.")
                        cm.dispose();
                    }
                } else {
                    status = 11;
                    cm.sendNext("你准备好了吗，走向更加威武的道路？");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520) {
                if (cm.getBossRank7("三转任务1", 2) > 0) {
                    if (cm.haveItem(4031059, 1)) {
                        cm.gainItem(4031057, 1);
                        cm.gainItem(4031059, -1);
						//不传送过去
                        //cm.warp(211000001, 0);
						cm.setBossRank7("三转任务", 2, -cm.getBossRank7("三转任务", 2));
						cm.sendOk("你完成了一个考验，现在去找长老公馆找#b费德罗#k。");
                    } else {
                        cm.setBossRank7("三转任务", 2, 1);
                        cm.sendOk("    hi, #b#h0##k，真没想到你现在变得如此强大，我需要一个 #b#z4031059##k. 快去找#r迷宫 火独眼兽洞穴II 异界之门#k拿给我吧。");
                        cm.startQuest(100101);
                    }
                } else {
                    cm.sendOk("你似乎可以更加强大。");
                }
                cm.dispose();
            } else if (cm.isQuestActive(6370)) {
                var dd = cm.getEventManager("KyrinTrainingGroundC");
                if (dd != null) {
                    dd.startInstance(cm.getPlayer());
                } else {
                    cm.sendOk("未知的错误请稍后在尝试。");
                }
            } else if (cm.isQuestActive(6330)) {
                var dd = cm.getEventManager("KyrinTrainingGroundV");
                if (dd != null) {
                    dd.startInstance(cm.getPlayer());
                } else {
                    cm.sendOk("未知的错误请稍后在尝试。");
                }
            } else {
                cm.sendOk("你好,我是卡伊琳-海盗转职官.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (cm.getJob() == 0) {
            cm.changeJob(500);
            cm.resetStats(4, 4, 4, 4);
        }
        cm.gainItem(1482014, 1);
        cm.gainItem(1492014, 1);
        cm.gainItem(2330000, 600);
        cm.gainItem(2330000, 600);
        cm.gainItem(2330000, 600);
        cm.sendOk("转职成功 !");
        cm.dispose();
    } else if (status == 11) {
        // cm.sendNextPrev("选择一条你的道路吧;\r\n\r\n#r拳手#k\r\n#r枪手#k")
    } else if (status == 12) {
        cm.askAcceptDecline("但是我必须先测试你,你准备好了吗 ?");
    } else if (status == 13) {
        cm.sendSimple("选择一条你的道路吧;\r\n\r\n#b#L0#拳手#l\r\n#L1#枪手#l#k");
    } else if (status == 14) {
        var jobName;
        if (selection == 0) {
            jobName = "拳手";
            MapId = "108000502";
        } else if (selection == 1) {
            jobName = "枪手";
            MapId = "108000500";
        }
        cm.sendYesNo("你真的要成为一位 #r" + jobName + "#k?");
    } else if (status == 15) {
        cm.warp(MapId);
        //cm.sendOk("请去找 #b海盗转职教官#k . 他会帮助你的.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("你想要成为什么 ? #b\r\n#L0#拳手#l\r\n#L1#枪手#l#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "拳手";
            job = 510;
        } else if (selection == 1) {
            jobName = "枪手";
            job = 520;
        }
        cm.sendYesNo("你真的要成为一位 #r" + jobName + "#k ?");
    } else if (status == 23) {
        cm.changeJob(job);
        if (cm.haveItem(4031857) && cm.haveItem(4031012, 1)) {
            cm.gainItem(4031857, -15);
            cm.gainItem(4031012, -1);
            cm.sendOk("转职成功 !");
            cm.dispose();
        } else if (cm.haveItem(4031856) && cm.haveItem(4031012, 1)) {
            cm.gainItem(4031856, -15);
            cm.gainItem(4031012, -1);
            cm.sendOk("转职成功 !");
            cm.dispose();
        } else {
            cm.removeAll(4031857);
            cm.removeAll(4031856);
            cm.removeAll(4031012);
            cm.sendOk("转职成功 !");
            cm.dispose();
        }
    }
}