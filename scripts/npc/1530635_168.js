var status = 0;
var typed = 0;
var ttcj = "";
var ttty = "";
var ttll = "";
var ttyc = "";
var zdhl = "";
var zdlz = "";
var zdhd = "";
var zdgj = "";
var gply = "";
var jxjc = "";
var random = java.lang.Math.floor(Math.random() * 4);
var random1 = java.lang.Math.floor(Math.random() * 6);
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("淘居", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("蝗虫", "#fUI/NameTag/188/w#"),
    Array("蝗虫", "#fUI/NameTag/188/c#"),
    Array("蝗虫", "#fUI/NameTag/188/e#")
);
var txt;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getEventCount("抽奖") == 0) {
        ttcj = "#r未完成任务#b";
    } else {
        ttcj = "#g已完成任务#b";
    }
    if (cm.getEventCount("射手跳跳") == 0) {
        ttty = "#r已完成" + cm.getEventCount("射手跳跳") + "次任务#b";
    } else {
        ttty = "#r已完成" + cm.getEventCount("射手跳跳") + "次任务#b";
    }
    if (cm.getEventCount("历练") == 0) {
        ttll = "#r未完成任务#b";
    } else {
        ttll = "#g已完成任务#b";
    }
    if (cm.getEventCount("养成") == 0) {
        ttyc = "#r未完成任务#b";
    } else {
        ttyc = "#g已完成任务#b";
    }
    if (cm.getEventCount("LudiPQ") < 1) {
        ttasd = "#r已完成" + cm.getEventCount("LudiPQ") + "次任务#b";
    } else {
        ttasd = "#g已完成任务#b";
    }
    if (cm.getEventCount("快乐圣诞") < 1) {
        zdlz = "#r已完成" + cm.getEventCount("快乐圣诞") + "次任务#b";
    } else {
        zdlz = "#g已完成任务#b";
    }
    if (cm.getEventCount("海盗") < 1) {
        zdhd = "#r已完成" + cm.getEventCount("海盗") + "次任务#b";
    } else {
        zdhd = "#g已完成任务#b";
    }
    if (cm.getEventCount("连续跑环") < 1) {
        zdph = "#r已完成" + cm.getEventCount("连续跑环") + "次任务#b";
    } else {
        zdph = "#g已完成任务#b";
    }
    if (cm.getEventCount("寻宝任务") < 1) {
        hhxb = "#r已完成" + cm.getEventCount("寻宝任务") + "次任务#b";
    } else {
        hhxb = "#g已完成任务#b";
    }
    if (cm.getEventCount("第一次同行") < 1) {
        ttafq = "#r已完成" + cm.getEventCount("第一次同行") + "次任务#b";
    } else {
        ttafq = "#g已完成任务#b";
    }
    if (cm.getEventCount("御魔龙") < 1) {
        yml = "#r已完成" + cm.getEventCount("御魔龙") + "次任务#b";
    } else {
        yml = "#g已完成任务#b";
    }
    if (cm.getEventCount("枫叶高校") < 1) {
        fygx = "#r已完成" + cm.getEventCount("枫叶高校") + "次任务#b";
    } else {
        fygx = "#g已完成任务#b";
    }
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            txt = "\t\t　　#b " + Icon[73][1] + " #r#e #fs14#日常中心#fs12# #n#b " + Icon[75][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n";
            txt += "　 #d今天在线的时间为：#r" + cm.getOnlineTime() + "#d 分钟! 想选择什么样的日常#k\r\n";
            txt += "#L2#" + Icon[4][1] + " [日常]天天爱抽奖    (#k目前状态： " + ttcj + ")#l\r\n";
            txt += "#L4#" + Icon[4][1] + " [日常]天天爱历练    (#k目前状态： " + ttll + ")#l\r\n";
            txt += "#L5#" + Icon[4][1] + " [日常]天天爱养成    (#k目前状态： " + ttyc + ")#l\r\n";
            txt += "#L9#" + Icon[4][1] + " [日常]天天爱跑环    (#k目前状态： " + zdph + ")#l\r\n";
            txt += "#L10#" + Icon[4][1] + " [日常]天天爱寻宝    (#k目前状态： " + hhxb + ")#l\r\n";
            txt += "#L6#" + Icon[4][1] + " [组队]天天爱圣诞    (#k目前状态： " + ttasd + ")#l\r\n";
            txt += "#L7#" + Icon[4][1] + " [组队]第一次同行    (#k目前状态： " + ttafq + ")#l\r\n";
            txt += "#L8#" + Icon[4][1] + " [组队]抢占海盗船    (#k目前状态： " + zdhd + ")#l\r\n";
            txt += "#L11#" + Icon[4][1] + " [组队]抢占御魔龙    (#k目前状态： " + yml + ")#l\r\n";
            txt += "#L12#" + Icon[4][1] + " [组队]枫叶高校      (#k目前状态： " + fygx + ")#l\r\n";
            txt += " ";
            cm.sendSimple(txt);
        } else if (status == 1) {
            if (selection == 1) {
                cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到伴侣日常任务简介:\r\n  通过伴侣日常任务活动可以获得大量游戏道具,在这里让\r\n  你总是意想不到的意外,任务梦幻-困难模式有趣有乐.杀\r\n  戮 挑战 冒险 极品 这里的任务应有尽有,赶快行动起来吧!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v4310085#破功币 #v2049134#卷轴 #v5062002#魔方  #v1332225#装备 #v1102453#点装\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：所有日常任务24点重置。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：通过日常任务可以获得以上物品分类各种型号物品。");
                cm.dispose();
            } else if (selection == 2) {
                typed = 3;
                cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到伴侣日常任务抽奖活动:\r\n  满足任务条件可以领取一个礼物盒.\r\n  双击打开您会得到意想不到的物品哦.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到2小时 (#k在线时间： #r" + cm.getOnlineTime() + "#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[日常]天天爱跳跃.\r\n#L2#我要抽奖#l");
            } else if (selection == 3) {
                typed = 4;
                cm.dispose();
                cm.openNpc(9020000);
            } else if (selection == 4) {
                typed = 5;
                cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到伴侣日常任务历练活动:\r\n  满足任务条件可以领取积分值.\r\n  随机 神奇魔方x20 高级神奇魔方x15 大师附加魔方x10 祝福卷x3 泰密硬币x20 强化混沌x1\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到3小时 (#k在线时间： #r" + cm.getOnlineTime() + "#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]废弃组队.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]御魔龙.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]抢占海盗船.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#完成一次[组队]枫叶高校.\r\n#L2#完成任务#l");
            } else if (selection == 5) {
                typed = 6;
                cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到伴侣日常任务养成活动,满足\r\n  任务条件可以饲养小伙伴.\r\n  随机 饲养小伙伴成长值 5 - 10 点 \r\n  #r注：小伙伴的成长情况,请在市场地图中找(文教授)#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#角色在线达到4小时 (#k在线时间： #r" + cm.getOnlineTime() + "#k)分钟\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4001083# #t4001083# (#c4001083# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4001084# #t4001084# (#c4001084# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000460# #t4000460# (#c4000460# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000461# #t4000461# (#c4000461# / 1).\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[收集物品]#i4000462# #t4000462# (#c4000462# / 1).\r\n#L2#完成任务#l");
            } else if (selection == 6) {
                typed = 7;
                if (cm.getEventCount("快乐圣诞") < 1) {
                    cm.dispose();
                    cm.openNpc(9330013, 4);
                } else {
                    cm.sendOk("今天该帐号已经完成[日常]快乐圣诞收集任务。");
                    cm.dispose();
                }
            } else if (selection == 7) {
                typed = 8;
                if (cm.getEventCount("第一次同行") < 1) {
                    cm.dispose();
                    cm.openNpc(9020000);
                } else {
                    cm.sendOk("今天该帐号已经完成[组队]废弃组组队任务。");
                    cm.dispose();
                }
            } else if (selection == 8) {
                typed = 9;
                if (cm.getEventCount("海盗") < 1) {
                    cm.dispose();
                    cm.openNpc(2094000);
                } else {
                    cm.sendOk("今天该帐号已经完成[组队]抢占海盗船。");
                    cm.dispose();
                }
            } else if (selection == 9) {
                typed = 10;
                if (cm.getEventCount("连续跑环") < 1) {
                    cm.dispose();
                    cm.openNpc(1530636, 1999);
                } else {
                    cm.sendOk("今天该帐号已经完成[日常]每日连续跑环任务。");
                    cm.dispose();
                }
            } else if (selection == 10) {
                typed = 11;
                if (cm.getEventCount("寻宝") < 1) {
                    cm.dispose();
                    cm.openNpc(2084001);
                } else {
                    cm.sendOk("今天该帐号已经完成[日常]每日寻宝任务。");
                    cm.dispose();
                }
            } else if (selection == 11) {
                typed = 12;
                if (cm.getEventCount("御魔龙") < 1) {
                    cm.dispose();
                    cm.openNpc(9020016);
                }
            } else if (selection == 12) {
                typed = 12;
                if (cm.getEventCount("枫叶高校") < 1) {
                    cm.dispose();
                    cm.openNpc(9330189);
                }
            }
        }else if (status == 2) {
                if (typed == 3) {
                    if (selection == 2) {
                        if (cm.getEventCount("抽奖") == 0) {
                            if (cm.getOnlineTime() >= 10 && cm.getEventCount("射手跳跳") > 0 && (cm.getSpace(1) > 1 || cm.getSpace(2) > 1 || cm.getSpace(3) > 1 || cm.getSpace(4) > 1)) {
                                cm.gainItem(2430070, 1);
                                cm.sendOk("获得 #v2430070# #t2430070# 1个");
                                cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱抽奖活动中获得 蓝宝石箱子 。");
                                cm.setEventCount("抽奖");
                                cm.dispose();
                            } else {
                                cm.sendOk("请确认您在线时间达到10分钟。\r\n请确认您是否完成[日常]伴侣爱跳跃。\r\n请确认您背包所有栏目窗口中是否有一格以上的空间。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("今天该帐号已经完成[日常]伴侣爱抽奖。");
                            cm.dispose();
                        }
                    }
                }
                if (typed == 5) {
                    if (selection == 4) {
                        if (cm.getEventCount("历练") == 0) {
                            if (cm.getOnlineTime() >= 20 && cm.getEventCount("第一次同行") > 0 && cm.getEventCount("御龙魔") > 0 && cm.getEventCount("海盗") > 0 && cm.getEventCount("枫之高校") > 0 && (cm.getSpace(1) > 1 || cm.getSpace(2) > 1 || cm.getSpace(3) > 1 || cm.getSpace(4) > 1)) {
                                if (random == 0) {
                                    cm.gainGachaponItem(5062000, 20, "伴侣爱历练", 3);
                                    cm.sendOk("获得 #v5062000# #t5062000# 20个");
                                } else if (random == 1) {
                                    cm.gainGachaponItem(5062002, 15, "伴侣爱历练", 3);
                                    cm.sendOk("获得 #v5062002# #t5062002# 15个");
                                } else if (random == 2) {
                                    cm.gainGachaponItem(5062500, 10, "伴侣爱历练", 3);
                                    cm.sendOk("获得 #v5062500# #t5062500# 10个");
                                } else {
                                    cm.gainGachaponItem(2340000, 3, "伴侣爱历练", 3);
                                    cm.sendOk("获得 #v2340000# #t2340000# 3个");
                                }
                                cm.setEventCount("历练");
                                cm.gainPlayerEnergy(30);
                                cm.gainItem(4310085, 20);
                                cm.gainItem(2049116, 1);
                                cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱历练活动中获得 30 点活力值 大量魔方 泰密硬币 x20。");
                                cm.dispose();
                            } else {
                                cm.sendOk("请确认您在线时间达到20分钟。\r\n请确认您是否收完成全部[组队]任务。\r\n请确认您背包所有栏目窗口中是否有一格以上的空间。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("今天该帐号已经完成[日常]伴侣爱历练。");
                            cm.dispose();
                        }
                    }
                }
                if (typed == 6) {
                    if (selection == 5) {
                        if (cm.getEventCount("养成") == 0) {
                            if (cm.getOnlineTime() >= 30 && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4000460, 1) && cm.haveItem(4000461, 1) && cm.haveItem(4000462, 1)) {
                                if (random1 == 0) {
                                    for (var i = 1; i <= 5; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 5 点成长值 。");
                                } else if (random1 == 1) {
                                    for (var i = 1; i <= 6; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 6 点成长值 。");
                                } else if (random1 == 2) {
                                    for (var i = 1; i <= 7; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 7 点成长值 。");
                                } else if (random1 == 3) {
                                    for (var i = 1; i <= 8; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 8 点成长值 。");
                                } else if (random1 == 4) {
                                    for (var i = 1; i <= 9; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 9 点成长值 。");
                                } else {
                                    for (var i = 1; i <= 10; i++) {
                                        cm.setBossLog("宠物总计成长值", 1);
                                    }
                                    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在伴侣爱养成活动中获得 10 点成长值 。");
                                }
                                cm.gainItem(4001083, -1);
                                cm.gainItem(4001084, -1);
                                cm.gainItem(4000460, -1);
                                cm.gainItem(4000461, -1);
                                cm.gainItem(4000462, -1);
                                cm.setEventCount("养成");
                                cm.dispose();
                            } else {
                                cm.sendOk("请确认您在线时间达到30分钟。\r\n请确认您是否完成全部[收集物品]任务。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("今天该帐号已经完成[日常]伴侣爱养成。");
                            cm.dispose();
                        }
                    
                    }

                }       
        }
    }
}