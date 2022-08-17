/*
 冒险岛(079)游戏服务端
 魔法师转职教官
 */
var status = 0;
var jobId;
var jobName;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.说明文字("请重试一下。");
        cm.对话结束();
        return;
    }
    if (cm.判断背包其他栏().isFull()) {
        cm.sendNext("其他栏必须有一个空位。");
        cm.对话结束();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getJob() == 0) {
            if (cm.判断等级() >= 8) {
                cm.是否说明文字("你想要成为一位#b魔法师#k吗？");
            } else {
                cm.说明文字("等级不够，需要达到 #b8#k 级。");
                cm.对话结束();
            }
        } else {
            if (cm.判断等级() >= 30 && cm.getJob() == 200) {
                if (cm.haveItem(4031012, 1)) {
                    if (cm.haveItem(4031012, 1)) {
                        status = 20;
                        cm.是否说明文字("我看到你完成了测试？");
                    } else {
                        if (!cm.haveItem(4031009)) {
                            cm.gainItem(4031009, 1);
                        }
                        cm.说明文字("请去找 #r法师转职教官#k。")
                        cm.对话结束();
                    }
                } else {
                    status = 10;
                    cm.sendNext("你准备好了吗，学更深奥的魔法？");
                }
                //三转任务
            } else if (cm.判断等级() >= 70 && cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) {
                if (cm.getBossRank7("三转任务1", 2) > 0) {
                    if (cm.haveItem(4031059, 1)) {
                        cm.gainItem(4031057, 1);
                        cm.gainItem(4031059, -1);
                        //不传送过去
                        //cm.warp(211000001, 0);
                        cm.setBossRank7("三转任务", 2, -cm.getBossRank7("三转任务", 2));
                        cm.说明文字("你完成了一个考验，现在去找长老公馆找#b鲁碧#k。");
                    } else {
                        cm.setBossRank7("三转任务", 2, 1);
                        cm.sendOk("    hi, #b#h0##k，真没想到你现在变得如此强大，我需要一个 #b#z4031059##k. 快去找#r金银岛 巫婆森林II 异界之门#k拿给我吧。");
                    }
                } else {
                    cm.sendOk("你似乎可以更加强大。");
                }
                cm.对话结束();
            } else {
                cm.说明文字("你好,我是法师转职官。");
                cm.对话结束();
            }
        }
    } else if (status == 1) {
        if (cm.getJob() == 0) {
            //转职成为魔法师
            cm.changeJob(200);
            //设置能力点
            cm.resetStats(4, 4, 20, 4);
        }
        //给一个魔法装备
        cm.gainItem(1372005, 1);
        cm.说明文字("转职成功，你现在是一位魔法师了。");
        cm.对话结束();
    } else if (status == 11) {
        cm.sendNextPrev("选择一条你的道路吧;\r\n\r\n#r法师(火,毒)#k\r\n#r法师(冰,雷)#k\r\n#r牧师#k");
    } else if (status == 12) {
        cm.askAcceptDecline("但是我必须先测试你,你准备好了吗 ?");
    } else if (status == 13) {
        cm.gainItem(4031009, 1);
        //不自动传送过去
        //cm.warp(101020000);
        cm.说明文字("请去找 #b法师转职教官#k ，他会帮助你的。");
        cm.对话结束();
    } else if (status == 21) {
        cm.sendSimple("你想要成为什么 ? #b\r\n#L0#法师(火,毒)#l\r\n#L1#法师(冰,雷)#l\r\n#L2#牧师#l#k");
    } else if (status == 22) {
        if (selection == 0) {
            jobName = "法师(火,毒)";
            jobId = 210;
        } else if (selection == 1) {
            jobName = "法师(冰,雷)";
            jobId = 220;
        } else {
            jobName = "牧师";
            jobId = 230;
        }
        cm.是否说明文字("你真的要成为一位 #r" + jobName + "#k ?");
    } else if (status == 23) {
        cm.changeJob(jobId);
        cm.gainItem(4031012, -1);
        cm.说明文字("转职成功 ! ");
        cm.对话结束();
    }
}