/*
脚本定制 技术支持 游戏顾问
唯一作者 - Care - 381991414
2017-5-28 18:33:40
 */



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
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/16#"),
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
    Array("华山", "#fEtc/FamiliarSet/1/iconProgress#"),
    Array("武当", "#fEtc/FamiliarSet/20/iconProgress#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("哭脸", "#fEtc/ItemPotLifeInfo/1000/state/bad/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("愁脸", "#fEtc/ItemPotLifeInfo/1000/state/sick/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/0/appear/0#"),
    Array("星星", "#fUI/piggyBarMinigame/crunch/11#"),
    Array("小草", "#fReactor/9108000/0/hit/4#"),
    Array("花草", "#fReactor/3348005/0/hit/1#")
);
var status = 0;
var txt, ver;
var xx = [[50, 7], [180, 30], [450, 120], [888, 888]];

var Care_Push = Array(
    Array(0, 2430865, 1, 7),
    Array(1, 2430865, 1, 30),
    Array(2, 2430865, 1, 120),
    Array(3, 2430865, 1, 365)
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
    if (status == 0) {
        txt = " " + Icon[83][1];
        for (var i = 0; i <= 13; i++) {
            txt += Icon[83][1];
        };
        txt += "\r\n\r\n";
        txt += "\t\t\t\t　#r#e" + Icon[82][1] + " 会员中心 " + Icon[82][1] + "#k#n\r\n\r\n";
        txt += " 　　" + Icon[77][1] + "#d 余 额#r " + format(" ", 10, cm.getHyPay(1).toString()) + "#d　　";
        txt += " " + Icon[77][1] + "#d 累 计#r " + format(" ", 10, cm.getHyPay(3).toString()) + "#k\r\n";
        txt += " 　　" + Icon[77][1] + "#d 点 卷#r " + format(" ", 10, cm.getPlayer().getCSPoints(1).toString()) + "#d　　";
        txt += " " + Icon[77][1] + "#d 抵 用#r " + format(" ", 10, cm.getPlayer().getCSPoints(2).toString()) + "#k\r\n";
        for (var u = 0; u < xx.length; u++) {
            txt += "#b#L" + u + "#" + Icon[79][1] + " #b理财包 #r|#b [ #r" + format(" ", 8, xx[u][0].toString()) + "#b ] 元宝 #r| #b[ #r" + format(" ", 4, xx[u][1].toString()) + "#b ] 天 #l\r\n";
        }
        txt += "\r\n";
        for (var i = 0; i <= 6; i++) {
            txt += " " + Icon[84][1];
        };
        txt += "\r\n";
        txt += "\t\t" + Icon[77][1] + " 理财包请点击神秘礼盒获取功能 " + Icon[77][1] + "\r\n";
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        if (selection == 99) {
            cm.dispose();
            cm.openNpc(9001139);
            return;
        }

        ver = selection;
        txt = " " + Icon[69][1];
        for (var i = 0; i <= 281; i++) {
            txt += Icon[70][1];
        };
        txt += Icon[71][1];
        txt += "\r\n\r\n";
        txt += "\t#r#e" + Icon[82][1] + " " + xx[ver][0] + " #b元宝  #r" + xx[ver][1] + "#b 天 信息查询 " + Icon[82][1] + "#k#n\r\n\r\n";
        for (var u = 0; u < Care_Push.length; u++) {
            if (Care_Push[u][0] != ver) continue;
            txt += "#b" + Icon[77][1] + " 道具 #r" + format(" ", 20, cm.getItemName(Care_Push[u][1]).toString()) + "#b | 数量 #r" + format(" ", 4, Care_Push[u][2].toString()) + "#b | 时间 #r" + format(" ", 3, Care_Push[u][3].toString()) + "#k\r\n";
        }
        cm.sendSimpleS(txt, 2);
    } else if (status == 2) {
        if (cm.getHyPay(1) < xx[ver][0]) {
            cm.playerMessage(1, "抱歉\r\n\r\n你太穷 这里不是你可以胡闹的地方");
            cm.dispose();
            return;
        }
        if (cm.haveItem(2430865) == true) {
            cm.playerMessage(1, "抱歉\r\n\r\n你的VIP盒子还没有到期不能进行购买");
            cm.dispose();
            return;
        }
        for (var u = 0; u < Care_Push.length; u++) {
            if (Care_Push[u][0] != ver) continue;
            if (Care_Push[u][3] == 0) {
                cm.gainItem(Care_Push[u][1], Care_Push[u][2]);
            } else {
                cm.gainItemPeriod(Care_Push[u][1], Care_Push[u][2], Care_Push[u][3])
            }
        }
        cm.addHyPay(xx[ver][0]);
        cm.playerMessage(1, "恭喜你\r\n\r\n成功购买理财包\r\n\r\n理财功能请点击VIP礼盒使用");
        cm.dispose();
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