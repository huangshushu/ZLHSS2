/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/
var txt;
var status = 0;
/*------------------------------------------------------------*/
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
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭头", "#fUI/Basic.img/icon/arrow#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("BBQ", "#fMap/MapHelper/weather/snowCrystal2/2#"),
    Array("成功率", "#fUI/Basic.img/icon/arrow#"),
    Array("小猴子", "#fUI/NameTag/179/w#"),
    Array("小猴子", "#fUI/NameTag/179/c#"),
    Array("小猴子", "#fUI/NameTag/179/e#"),
    Array("漫步", "#fEffect/BasicEff/MainNotice/Runnning/Appear/8#")
);
var questlist = Array(
    Array("收集50个喜悦艾尔达样品", 34139, 1),
    Array("收集50个愤怒艾尔达样品", 34140, 1),
    Array("收集50个悲伤艾尔达样品", 34141, 1),
    Array("收集50个快乐艾尔达样品", 34142, 1),
    Array("收集50个岩石艾尔达样品", 34143, 1),
    Array("收集50个火焰艾尔达样品", 34144, 1),
    Array("收集50个安息艾尔达样品", 34146, 1),
    //Array("收集50个灯火艾尔达样品", 34147, 1),
    Array("收集50个坚毅灵魂艾尔达样品", 34145, 1),
    Array("击败200个喜悦艾尔达", 34130, 1),
    Array("击败200个愤怒艾尔达", 34131, 1),
    Array("击败200个悲伤艾尔达", 34132, 1),
    Array("击败200个快乐艾尔达", 34133, 1),
    Array("击败200个岩石艾尔达", 34134, 1),
    Array("击败200个火焰艾尔达", 34135, 1),
    Array("击败200个坚毅灵魂艾尔达", 34136, 1),
    Array("击败200个安息艾尔达", 34137, 1)
    //Array("击败130个艾尔达之火", 34138, 1)

);
var questStor = true;
var Sel;
var result = [];
var quest = [];
var request;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        switch (status) {
            case 0:
                if (cm.getPQLog("每日消亡旅途") >= 5) {
                    cm.sendOk("抱歉 一天只能完成 5 个任务");
                    cm.dispose();
                    return;
                }
                for (var i in questlist) {
                    if (cm.getPQLog(questlist[i][0]) >= questlist[i][2]) continue;
                    quest.push(questlist[i]);
                }
                for (var i in questlist) {
                    if (cm.getPlayer().getQuestStatus(questlist[i][1]) == 1) questStor = false;
                }
                if (questStor) {
                    var ranNum = 5;
                    var hash = {};
                    result = [];
                    while (ranNum > 0) {
                        var ran = Math.floor(Math.random() * quest.length);
                        if (!hash[ran]) {
                            hash[ran] = 1;
                            result.push(quest[ran]);
                            ranNum--;
                        };
                    };
                    txt = "#b您来的正好 [ #r#h ##b ] 今天我有 [ #r5件事#b ]要拜托您.\r\n";
                    txt += "#b如果不喜欢这五个任务,可以重新打开,切换到其他的任务.\r\n";
                    txt += "#r接受任务之后，如果发现没有显示怪的数量或者样品的数量.\r\n换个频道就可以显示任务数量了！\r\n";
					txt += "#r完成任务才能进行下一个  如果提示任务完成  不能交任务.\r\n换个频道就可以完成任务了！\r\n";
                    for (var key in result) {
                        txt += "#e#b#L" + key + "#" + result[key][0] + "#l#k#n\r\n";
                    }
                    cm.sendSimple(txt);
                } else {
                    txt = "存在正在进行中的任务 请先完成任务 去找 #r劳拉#k\r\n提交任务才可以进行下一步\r\n\r\n";
                    for (var i in quest) {
                        if (cm.getPlayer().getQuestStatus(quest[i][1]) == 0 || cm.getPlayer().getQuestStatus(quest[i][1]) == 2) continue;
                        txt += "[ #r正在进行中#k ] #b" + quest[i][0] + "#k\r\n\r\n";
                        request = quest[i][1];
                        cm.worldMessage(request)
                    }
                    txt += "#L999#放弃任务#l#k\r\n";
                    cm.sendSimple(txt);
                }
                break;
            case 1:
                if (selection == 999) {
                    cm.forceCompleteQuest(request);
                    cm.sendOk("已放弃任务");
                    cm.dispose();
                    return;
                }
                Sel = selection;
                txt = "确认接受这个任务吗?\r\n\r\n";
                // txt += "#r" + cm.getQuest(result[selection][1]).getName() + "\r\n";
                cm.sendYesNo(txt);
                break;
            case 2:
                cm.forceStartQuest(result[Sel][1]);
                cm.sendOk("#r" + cm.getQuest(result[Sel][1]).getName() + "\r\n#b接受成功");
                cm.dispose();
                break;
        }
    }
}

var format = function FormatString(c, length, content) {//符号 位置 代码 - 文本类型 .toString()
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}