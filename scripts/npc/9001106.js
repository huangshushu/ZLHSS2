//*   care        *//
//*   381991414    *//
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ttt = "#fUI/UIWindow/Quest/icon2/7#"; // 蓝色箭头
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; //红色箭头
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#"; //美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#"; //美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#"; ////美化感叹号
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#"; //美化下拉
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#"; //蓝色横向小剪头
var yun = "#fUI/UIWindow/Megaphone/2#"; //红色骷髅
var yun2 = "#fUI/UIWindow/Quest/icon8/0#"; //蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; //金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; //金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#"; //奖励文字
var n1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#", //Q图标
        n2 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#", //小>
        n5 = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#", //任务图标
        n6 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#", //开始条件
        n7 = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#",
        n9 = "#fEffect/CharacterEff.img/1082565/2/0#", //小兔兔
        n10 = "#fUI/Basic/BtHide3/mouseOver/0#", //蓝色横向剪头包边
        n11 = "#fUI/UIWindow4/PQRank/rank/gold#"//皇冠1
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星
var i = "#fEffect/ItemEff/1003496/effect/walk1/2#";//小宠物
var j = "#fUI/UIWindow2/FadeYesNo/icon16#";//小人
var k = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var l = "#fUI/UIWindow2/AdditionalOptionTooltip/unique#";//S图标
var Donm;
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
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#")
    );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
                    txt = "\t\t　　#b " + Icon[73][1] + " #r#e 综合中心 #n#b " + Icon[75][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1];
        txt += "　　   " + Icon[68][1] + "#d 在线：#r" + cm.getOnlineTime() + "　" + Icon[68][1] + "#d 积分：#r" + cm.getPlayerPoints() + "　" + Icon[68][1] + "#d 活力值：#r" + cm.getPlayerEnergy() + "#k\r\n\r\n";
        txt += " #b#L0#" + Icon[68][1] + " 积分系统 ※ #d抵用卷 椅子 点装 神级饰品 ※ " + Icon[68][1] + "#l\r\n\r\n";
        txt += " #b#L1#" + Icon[68][1] + " 活力系统 ※ #d卷轴 　饰品 装备 　副手　 ※ " + Icon[68][1] + "#l\r\n\r\n";
             txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        switch (selection) {
            case 0://积分系统
                Donm = 0;
                         txt = "\t\t　　#b " + Icon[73][1] + " #r#e 积分系统 #n#b " + Icon[75][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
                txt += " #b#L0#" + Icon[68][1] + " ※ 积分 ※　#r兑#b　抵用卷　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L1#" + Icon[68][1] + " ※ 积分 ※　#r兑#b　椅　子　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L2#" + Icon[68][1] + " ※ 积分 ※　#r兑#b　时  装　   #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L3#" + Icon[68][1] + " ※ 积分 ※　#r兑#b　暴  君　   #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
				txt += " #b#L4#" + Icon[68][1] + " ※ 积分 ※　#r兑#b　卷  轴　   #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
             txt += Icon[65][1]; 
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
        cm.sendSimple(txt);
                break;
            case 1://活力系统
                Donm = 1;
                          
                         txt = "\t\t　　#b " + Icon[73][1] + " #r#e 活力系统 #n#b " + Icon[75][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
                txt += " #b#L0#" + Icon[68][1] + " ※ 活力值 ※　#r兑#b　卷轴　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L1#" + Icon[68][1] + " ※ 活力值 ※　#r兑#b　饰品　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L2#" + Icon[68][1] + " ※ 活力值 ※　#r兑#b　装备　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
                txt += " #b#L3#" + Icon[68][1] + " ※ 活力值 ※　#r兑#b　副手　　 #d[ 状态：#r推荐#b ] " + Icon[68][1] + "#l\r\n\r\n";
             txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
        cm.sendSimple(txt);
                break;
        }
    } else if (Donm == 0) {
        switch (selection) {
            case 0://积分 - 抵用卷
                cm.dispose();
                cm.openNpc(9001106,1);
                break;
            case 1://积分 - 椅子
                cm.dispose();
                cm.openNpc(9001106, 2);
                break;
            case 2://积分 - 点装
                cm.dispose();
                cm.openNpc(9001106, 3);
                break;
            case 3://积分 - 饰品
                cm.dispose();
                cm.openNpc(9001106, 4);
                break;
            case 4://积分 - 卷轴
                cm.dispose();
                cm.openNpc(9001106, 9);
                break;
        }

    } else if (Donm == 1) {
        switch (selection) {
            case 0://活力值 - 卷轴
                cm.dispose();
                cm.openNpc(9001106, 5);
                break;
            case 1://活力值 - 饰品
                cm.dispose();
                cm.openNpc(9001106, 6);
                break;
            case 2://活力值 - 装备
                cm.dispose();
                cm.openNpc(9001106, 7);
                break;
            case 3://活力值 - 副手
                cm.dispose();
                cm.openNpc(9001106, 8);
                break;
        }
    }
}