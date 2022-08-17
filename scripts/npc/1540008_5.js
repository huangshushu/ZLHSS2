/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414

*/
var A;
var txt;
var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
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
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#")
    );
/*------------------------------------------------------------*/
var 材料 = new Array(
    Array(1, 4033356, 66, 13, 15, 5, 13),//-所需 -已有 -信息 -还差       -火焰
    Array(1, 4310080, 88, 12, 15, 5, 13),//　　　　　　　　　　　　　-硬币
    Array(1, 4310036, 1000, 12, 15, 17, 13),//　　　　　　　　　　　　　-结晶
    Array(1, 4310030, 1000, 12, 15, 9, 13), //　　　　　　　　　　　　　-星星
    Array(1, 4000001, 1000, 12, 15, 9, 13)
    );
/*------------------------------------------------------------*/
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
        if (status == 0) {
            txt = "\t　　　   #r#e#i1162032#　口袋潜能系统　#i1162032##k#n\r\n\r\n";
            txt += "　　 　　   #e#d#L0#" + Icon[4][1] + "　合成金利奇手帕　" + Icon[4][1] + "#l#k#n\r\n\r\n";
            txt += "　　 　　　　　   #B100#\r\n";
            txt += "#d　  ┏━━━━━#r━#k━━━━#b━#k━━━━#g━#k━━━━━┓\r\n";
            txt += "　　　  #b#L1#" + Icon[8][1] + " 开启金利奇手帕上三行潜能 " + Icon[8][1] + "#l#k\r\n";
            txt += "　　　  #b#L2#" + Icon[16][1] + " 开启金利奇手帕下三行潜能 " + Icon[16][1] + "#l#k\r\n\r\n";
            txt += "#d　  ┗━━━━━#g━#k━━━━#d━#k━━━━#r━#k━━━━━┛\r\n\r\n\r\n";
            for (var i = 17; i <= 31; i++) {
                txt += Icon[i][1] + "  ";
            };

            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            if (selection == 0) {
                cm.playerMessage(1, "抱歉合成失败");
                cm.dispose();
                return;
            } else if (selection == 1) {
                A = 0;
                txt = "";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[33][1] + " ";
                }
                txt += "\r\n\r\n\t\t\t\t\t　" + Icon[32][1] + "\r\n";
                txt += "#d#n\r\n　　材料　　　　　　　　所需　　　　　　　已有\r\n\r\n";
                for (var i = 0; i < 材料.length; i++) {
                    txt += "   #d#z" + 材料[i][1] + "#";
                    for (var j = 材料[i][3]; j > 0; j--) {
                        txt += " ";
                    }
                    txt += "#r" + 材料[i][2] + "#b";
                    if ((材料[i][2]) - 5 < 0) {
                        txt += " ";
                    }
                    for (var j = 材料[i][4]; j > 0; j--) {
                        txt += " ";
                    }
                    txt += cm.getItemQuantity(材料[i][1]);

                    if ((材料[i][2]) - 5 < 0) {
                        txt += " ";
                    }
                    txt += "#k\r\n";
                }
                txt += "\r\n";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[34][1] + " ";
                }
                cm.sendYesNoS(txt, 2);
            } else if (selection == 2) {
                A = 1;
                txt = "";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[33][1] + " ";
                }
                txt += "\r\n\r\n\t\t\t\t\t　" + Icon[32][1] + "\r\n";
                txt += "#d#n\r\n　　材料　　　　　　　　所需　　　　　　　已有\r\n\r\n";
                for (var i = 0; i < 材料.length; i++) {
                    txt += "   #d#z" + 材料[i][1] + "#";
                    for (var j = 材料[i][3]; j > 0; j--) {
                        txt += " ";
                    }
                    txt += "#r" + 材料[i][2] + "#b";
                    if ((材料[i][2]) - 5 < 0) {
                        txt += " ";
                    }
                    for (var j = 材料[i][4]; j > 0; j--) {
                        txt += " ";
                    }
                    txt += cm.getItemQuantity(材料[i][1]);

                    if ((材料[i][2]) - 5 < 0) {
                        txt += " ";
                    }
                    txt += "#k\r\n";
                }
                txt += "\r\n";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[34][1] + " ";
                }
                cm.sendYesNoS(txt, 2);
            }
        } else if (status == 2) {
            if (A == 0) {
                txt = "";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[34][1] + " ";
                }
                if (cm.haveItem(材料[0][1], 材料[0][2]) && cm.haveItem(材料[1][1], 材料[1][2]) && cm.haveItem(材料[2][1], 材料[2][2]) && cm.haveItem(材料[3][1], 材料[3][2]) && cm.haveItem(材料[4][1], 材料[4][2])) {
                    txt += "\r\n\t\t\t\t\t　" + Icon[32][1] + "\r\n\r\n";
                    txt += "\t\t\t\t\t\t#r 金利奇上三行潜能#k#\r\n";
                    txt += "\t\t　#d当前完成制作的潜能 [ #r金利奇上三行潜能 #d]#k\r\n\r\n\r\n";

                    if (cm.getEquipBySlot(1) == null) {
                        cm.playerMessage(1, "抱歉\r\n\r\n第一个位置不能为空");
                        cm.dispose();
                        return;
                    }
                    if (cm.getEquipBySlot(1).getItemId() != 1162032) {
                        cm.playerMessage(1, "抱歉\r\n\r\n第一个道具必须是金利奇手帕");
                        cm.dispose();
                        return;
                    }

                    if (cm.changePotential(1, 4, 10051, false)) {
                        cm.changePotential(1, 5, 10051, false)
                        cm.changePotential(1, 6, 10051, false)
                        cm.playerMessage(1, "恭喜\r\n\r\n开放完毕");
                        cm.getPlayer().saveToDB(false, false);
                    }
                    cm.gainItem(材料[0][1], -材料[0][2]);
                    cm.gainItem(材料[1][1], -材料[1][2]);
                    cm.gainItem(材料[2][1], -材料[2][2]);
                    cm.gainItem(材料[3][1], -材料[3][2]);
                    cm.gainItem(材料[4][1], -材料[4][2]);

                    for (var i = 0; i <= 13; i++) {
                        txt += Icon[34][1] + " ";
                    }
                    txt += "\r\n";
                    cm.dispose();
                    cm.sendOkS(txt, 2);
                    return;
                } else {
                    cm.playerMessage(1, "抱歉\r\n\r\n当前材料不足");
                    cm.dispose();
                    return;
                }
            } else if (A == 1) {
                txt = "";
                for (var i = 0; i <= 13; i++) {
                    txt += Icon[34][1] + " ";
                }
                if (cm.haveItem(材料[0][1], 材料[0][2]) && cm.haveItem(材料[1][1], 材料[1][2]) && cm.haveItem(材料[2][1], 材料[2][2]) && cm.haveItem(材料[3][1], 材料[3][2])) {
                    txt += "\r\n\t\t\t\t\t　" + Icon[32][1] + "\r\n\r\n";
                    txt += "\t\t\t\t\t\t#r 金利奇下三行潜能#k#\r\n";
                    txt += "\t\t　#d当前完成制作的潜能 [ #r金利奇下三行潜能 #d]#k\r\n\r\n\r\n";

                    if (cm.getEquipBySlot(1) == null) {
                        cm.playerMessage(1, "抱歉\r\n\r\n第一个位置不能为空");
                        cm.dispose();
                        return;
                    }
                    if (cm.getEquipBySlot(1).getItemId() != 1162032) {
                        cm.playerMessage(1, "抱歉\r\n\r\n第一个道具必须是金利奇手帕");
                        cm.dispose();
                        return;
                    }

                    if (cm.changePotential(1, 1, 10051, false)) {
                        cm.changePotential(1, 2, 10051, false)
                        cm.changePotential(1, 3, 10051, false)
                        cm.playerMessage(1, "恭喜\r\n\r\n开放完毕");
                        cm.getPlayer().saveToDB(false, false);
                    }
                    cm.gainItem(材料[0][1], -材料[0][2]);
                    cm.gainItem(材料[1][1], -材料[1][2]);
                    cm.gainItem(材料[2][1], -材料[2][2]);
                    cm.gainItem(材料[3][1], -材料[3][2]);
                    cm.gainItem(材料[4][1], -材料[4][2]);
                    for (var i = 0; i <= 13; i++) {
                        txt += Icon[34][1] + " ";
                    }
                    txt += "\r\n";
                    cm.dispose();
                    cm.sendOkS(txt, 2);
                    return;
                } else {
                    cm.playerMessage(1, "抱歉\r\n\r\n当前材料不足");
                    cm.dispose();
                    return;
                }
            }
        }
    }
}