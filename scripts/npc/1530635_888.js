/*
Care - 脚本调整 - 
家族驻地
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
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

var Care = [75, 75, 76, 79, 80, 81, 82];
var txt, Care_A, Care_U, Care_C, Care_Rank, Care_Rankin, Care_Push = false, Care_ACE = false;

function start() {
    if (cm.getPlayerStat("GID") == 0) {
        cm.playerMessage(1, "抱歉\r\n\r\n你需先拥有一个家族")
        cm.dispose();
        return;
    }

    Care_Rank = new Care_Guli();
    Care_Rankin = Care_Rank.Guli_Cun(10);
    status = -1;
    action(1, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose()
    } else {
        if (mode == 1) status++;
        else {
            cm.dispose();
            return;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            txt = "\t\t　#b " + Icon[73][1] + " #r#e  家族驻地  #n#b " + Icon[Care[Math.floor(Math.random() * Care.length)]][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";

            txt += "　　　#b#L99#" + Icon[8][1] + " #r家族驻地#b 说明中心 [#d 阅读#b ] " + Icon[8][1] + "#l#k\r\n\r\n";
            for (var U = 0; U < Care_Rankin.length; U++) {
                if (Care_Rankin[U]['state'] == 0) {
                    txt += "#r#L" + U + "# " + Icon[4][1] + " [ #d　空闲状态　#r ] #b驻地#r " + Care_Rankin[U]['Resident'] + "  - #d未入驻#r " + Icon[4][1] + "#k#l\r\n";
                } else {
                    txt += "#r#L" + U + "# " + Icon[4][1] + " [ " + format(" ", 12, Care_Rankin[U]['Guilname'].toString()) + " ] #b驻地#r " + Care_Rankin[U]['Resident'] + "  - #r已入驻#r " + Icon[4][1] + "#k#l\r\n";

                }
            }
            txt += "\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1];
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {

            Care_U = selection; /*指针 防止目录错乱*/
            if (Care_Rankin[selection]['state'] == 1) Care_Push = true;/*状态 判断当前领地是否已被抢*/
            if (Care_Push) {
                txt = " " + Icon[73][1] + "\t 　" + Icon[83][1] + "\t\t" + Icon[79][1] + "\r\n";
                txt += Icon[88][1];
                for (var i = 0; i <= 11; i++) {
                    txt += Icon[89][1];
                };
                txt += Icon[90][1] + "\r\n";
                txt += "#b　 " + Icon[4][1] + " 驻地名称 　 　#r" + format(" ", 25, Care_Rankin[selection]['Resident'].toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 所属家族 　 　#r" + format(" ", 25, Care_Rankin[selection]['Guilname'].toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 家族族长 　　 #r" + format(" ", 25, Care_Rankin[selection]['Charname'].toString()) + Icon[4][1] + "#k\r\n";

                if (Care_Rankin[selection]['alliance_Guilid'] == null) Care_A = " 空闲状态 ";
                if (Care_Rankin[selection]['alliance_Guilid'] != null) Care_A = Care_Rankin[selection]['alliance_guilname'];
                txt += "#b　 " + Icon[4][1] + " 同盟家族 　　 #r" + format(" ", 25, (Care_A).toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 驻地经验 　　 #r" + format(" ", 25, (Care_Rankin[selection]['exp'] + " / 100000").toString()) + Icon[4][1] + "#k\r\n";
                txt += "\t\t\t\t #B" + parseInt(parseInt(Care_Rankin[selection]['exp']) / 100000 * 100) + "#\r\n";
                txt += Icon[88][1];
                for (var i = 0; i <= 11; i++) {
                    txt += Icon[89][1];
                };
                txt += Icon[90][1];
                txt += "#r#L0#" + Icon[16][1] + " 进　入 " + Icon[16][1] + "#l";
                txt += "#r#L1#" + Icon[16][1] + " 提　升 " + Icon[16][1] + "#l";
                txt += "#r#L2#" + Icon[16][1] + " 排　行 " + Icon[16][1] + "#l";
                cm.sendSimpleS(txt, 2);
            } else {
                txt = " " + Icon[73][1] + "\t 　" + Icon[83][1] + "\t\t" + Icon[79][1] + "\r\n";
                txt += Icon[88][1];
                for (var i = 0; i <= 11; i++) {
                    txt += Icon[89][1];
                };
                txt += Icon[90][1] + "\r\n";
                txt += "#b　 " + Icon[4][1] + " 驻地费用 　 　#r" + format(" ", 25, Care_Rankin[selection]['Cost'].toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 驻地名称 　 　#r" + format(" ", 25, Care_Rankin[selection]['Resident'].toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 所属家族 　 　#r" + format(" ", 25, ("空闲状态").toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 家族族长 　　 #r" + format(" ", 25, ("空闲状态").toString()) + Icon[4][1] + "#k\r\n";
                if (Care_Rankin[selection]['alliance_Guilid'] == null) Care_A = "空闲状态 ";
                if (Care_Rankin[selection]['alliance_Guilid'] != null) Care_A = Care_Rankin[selection]['alliance_guilname'];
                txt += "#b　 " + Icon[4][1] + " 同盟家族 　 　#r" + format(" ", 25, Care_A.toString()) + Icon[4][1] + "#k\r\n";
                txt += "#b　 " + Icon[4][1] + " 驻地经验 　　 #r" + format(" ", 25, (Care_Rankin[selection]['exp'] + " / 100000").toString()) + Icon[4][1] + "#k\r\n";
                txt += "\t\t\t\t #B" + parseInt(parseInt(Care_Rankin[selection]['exp']) / 100000 * 100) + "#\r\n";
                txt += Icon[88][1];
                for (var i = 0; i <= 11; i++) {
                    txt += Icon[89][1];
                };
                txt += Icon[90][1];
                txt += "\t\t　#r#L0#" + Icon[78][1] + " 我 想 购 买 领 地 " + Icon[78][1] + "#l";
                cm.sendSimpleS(txt, 2);
            }
        } else if (status == 2) {
            if (Care_Rankin[Care_U]['state'] == 1) Care_ACE = true;/*状态 购买 或者 进入*/
            if (Care_ACE) {
                switch (selection) {
                    case 0:
                        if (Care_Rankin[Care_U]['Guilid'] != cm.getPlayerStat("GID")) {
                            cm.playerMessage(1, "\r\n\r\n抱歉 - 你不是这个家族的成员\r\n\r\n抱歉 - 你不是同盟家族的成员\r\n\r\n不能进入当前领地\r\n\r\n");
                            cm.dispose();
                            return;
                        } else {
                            cm.warp(Care_Rankin[Care_U]['map']);
                            cm.dispose();
                        }
                        break;
                    case 1:
                    case 2:
                        cm.playerMessage(1, "敬请期待");
                        break;
                }
            } else {
                if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") != 1) {
                    cm.playerMessage(1, "抱歉\r\n\r\n你需先拥有家族\r\n\r\n只能族长购买领地\r\n\r\n或找管理员购买领地")
                    cm.dispose();
                    return;
                }
                if (cm.getHyPay(1) < Care_Rankin[Care_U]['Cost']) {
                    cm.playerMessage(1, "抱歉\r\n\r\n你没有足够的费用")
                    cm.dispose();
                    return;
                }
                Care_Rank.Guli_UPDATE(Care_Rankin[Care_U]['Resident'], cm.getPlayerStat("GID"), Care_Rank.Guli_Name(cm.getPlayerStat("GID")), cm.getPlayer().getId(), cm.getPlayer().getName());
                cm.addHyPay(Care_Rankin[Care_U]['Cost']);
                cm.playerMessage(1, "\r\n\r\n领　地 - " + format(" ", 12, Care_Rankin[Care_U]['Resident'].toString()) + "\r\n\r\n购买者 - " + format(" ", 12, cm.getName().toString()) + "\r\n\r\n购买完毕 - 请体验领地的好处吧\r\n\r\n ");
            }
            cm.dispose();
        }
    }
}

var format = function FormatString(c, length, content) {
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

var Care_Guli = function () {
    this.Guli_Cun = function (limit) {
        if (limit == null)
            limit = 10;
        var ranking = new Array();
        var result = cm.sql_Select("select Rank, Guilid, Guilname, Charid, Charname, Resident, state, alliance_Guilid, alliance_guilname, exp, map, Cost from Care_Guilds order by Rank ASC limit ?", limit)
        for (var i in result) {
            var rankPerson = new Array();
            rankPerson['exp'] = result[i].get("exp");
            rankPerson['map'] = result[i].get("map");
            rankPerson['Rank'] = result[i].get("Rank");
            rankPerson['Cost'] = result[i].get("Cost");
            rankPerson['state'] = result[i].get("state");
            rankPerson['Guilid'] = result[i].get("Guilid");
            rankPerson['Charid'] = result[i].get("Charid");
            rankPerson['Guilname'] = result[i].get("Guilname");
            rankPerson['Charname'] = result[i].get("Charname");
            rankPerson['Resident'] = result[i].get("Resident");
            rankPerson['alliance_Guilid'] = result[i].get("alliance_Guilid");
            rankPerson['alliance_guilname'] = result[i].get("alliance_guilname");
            ranking.push(rankPerson);
        }
        return ranking;
    }

    this.Guli_Name = function (GID) {
        var o = 0;
        var Namere = cm.sql_Select("SELECT name FROM guilds WHERE guildid = ?", GID);
        if (Namere.length > 0) {
            o = Namere[0].get("name")
        }
        return o;
    }

    this.Guli_UPDATE = function (A, B, C, D, E) {
        return cm.sql_Update("UPDATE care_guilds SET Guilid=?, Guilname=?, Charid=?, Charname=?, state=? WHERE (Resident=?)", B, C, D, E, 1, A);
    }
}