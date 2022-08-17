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
    Array("梦幻", "#fEtc/streamBait/streamBait/1/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/2/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/3/appear/0#"),
    Array("梦幻", "#fEtc/streamBait/streamBait/4/appear/0#")
);
var status = 0;
var txt;
var hairid = [];
var hairidplus = [];
var hairnew;
var selects;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (status == 2 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        //cm.worldMessage(mode)
        txt = "\t\t\t\t　　　#r#e" + Icon[11][1] + " 造型社 " + Icon[11][1] + "#k#n\r\n\r\n";
        txt += "　　　" + Icon[79][1] + "#g 　 你好 - 你想随意变更自己的造型 吗\r\n";
        txt += "　　　" + Icon[79][1] + " #r#z5150040##g　　　自己挑选合适的发型　[ #r" + cm.itemQuantity(5150040) + "#g ]\r\n";
        txt += "　　　" + Icon[79][1] + " #r#z5150090##g　任意自己喜欢的发型　[ #r" + cm.itemQuantity(5150090) + "#g ]\r\n\r\n";
        txt += " 　　#b#L0#" + Icon[78][1] + " 开始随机发型 " + Icon[78][1] + "#l";
        txt += " 　　#b#L1#" + Icon[80][1] + " 开始搜索发型 " + Icon[80][1] + "#l\r\n";
        // txt += Icon[81][1] + " " + Icon[83][1] + " " + Icon[84][1] + " " + Icon[85][1] + " " + Icon[86][1] + " " + Icon[81][1];
        cm.sendSimpleN(txt, 712, 2400009);
    } else if (status == 1) {
        cm.worldMessage(mode)
        switch (selection) {
            case 0:
                if (cm.haveItem(5150040) == false) {
                    cm.playerMessage(1, "抱歉\r\n\r\n你没有皇家理发卷");
                    cm.dispose();
                    return;
                }

                if (cm.canChangeHairFace(parseInt(getHair())) == false) {
                    cm.playerMessage(1, "抱歉\r\n\r\n当前发型存在Bug请重新随机");
                    cm.dispose();
                    return;
                } else {
                    cm.setHair(parseInt(getHair()));
                    cm.playerMessage(1, "恭喜你\r\n\r\n请欣赏你的新发型吧");
                    cm.gainItem(5150040, -1);
                    cm.dispose();
                }
                break;

            case 1:
                cm.worldMessage(mode)
                txt = "\t\t\t#r#e" + Icon[82][1] + " 查询发型中心 " + Icon[82][1] + "#k#n\r\n\r\n";
                txt += "　" + Icon[79][1] + "#b请输入你想查询的发型 #rID#b 或 #r名称#k\r\n\r\n\r\n ";
                cm.sendGetText(txt);
                break;
        }
    } else if (status == 2) {
        if (getBLen(cm.getText()) < 4) {
            cm.playerMessage(1, "抱歉\r\n\r\n输入内容不可低于4个字符");
            cm.dispose();
            return;
        }
        hairnew = Array();
        hairid = getHair_Plus(cm.getText(), true);
        for (var i = 0; i < hairid.length; i++) {
            hairnew.push(hairid[i] + parseInt(cm.getChar().getHair() % 10));
        }

        txt = "\t\t\t\t#r#e" + Icon[82][1] + " 查询发型中心 " + Icon[82][1] + "#k#n\r\n\r\n";
        for (var u = 0; u < hairnew.length; u++) {
            if (cm.getItemName(hairnew[u]) == null) continue;
            txt += "#d#L" + u + "#" + Icon[79][1] + " 发型ID - #b" + hairnew[u] + "#d　发型 - #r" + cm.getItemName(hairnew[u]) + "#l#k\r\n";
        }
        cm.sendYesNoS(txt, 2);
    } else if (status == 3) {
        selects = selection;
        if (cm.haveItem(5150090) == false) {
            cm.playerMessage(1, "抱歉\r\n\r\n你没有皇家理发卷");
            cm.dispose();
            return;
        }
        cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", [hairnew[selects], hairnew[selects]], 5150090, false);
    } else if (status == 4) {
        if (typeof (hairnew[selects]) == "undefined") {
            cm.playerMessage(1, "抱歉\r\n\r\n当前发型存在Bug请重新随机");
        } else {
            cm.setHair(hairnew[selects]);
            cm.gainItem(5150090, -1);
            cm.playerMessage(1, "恭喜你\r\n\r\n请欣赏你的新发型吧");
        }
        cm.dispose();
    }
}

function getHair() {
    var Hair = [];
    var Care_Sql = cm.sql_Select("select s.hair  from carehair s  order by rand() LIMIT 1;")
    for (var key in Care_Sql) {
        Hair.push(parseInt(Care_Sql[key].get("hair")))
    }
    return Hair;
}

function getHair_Plus(name_id, ver) {
    var Hair = [];
    var Hair_plus = [];
    var Carepush_Sql = cm.sql_Select("select concat('发型ID - ',hair,'　发型名称 - ',hairname) as care, hair from carehair where concat('发型ID - ',hair,'　　　发型名称 - ',hairname) LIKE '%" + name_id + "%';")
    for (var key in Carepush_Sql) {
        Hair.push(parseInt(Carepush_Sql[key].get("hair")))
        Hair_plus.push(Carepush_Sql[key].get("care"))
    }
    if (ver == true) {
        return Hair;
    } else if (ver == false) {
        return Hair_plus;
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

getBLen = function (str) {
    if (str == null) return 0;
    if (typeof str != "string") {
        str += "";
    }
    return str.replace(/[^\x00-\xff]/g, "01").length;
}