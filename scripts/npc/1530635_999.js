var status;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fMap/MapHelper.img/weather/starPlanet2/7#";//"+z+"//美化
var zz = "#fEffect/CharacterEff/1082565/2/0#";//
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符
var ttt = tt;
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化

var feng = "#v4032733#"
var kkk = tt;
var menuList = Array(
       // Array(ttt, "#r装备制作#b", 0, true),
      //  Array(ttt, "#r装备加强#b", 1, true),
        Array(ttt, "#r伤害皮肤#b", 2, true),
        Array(ttt, "学习技能#b", 3, true),
        //Array(ttt, "在线奖励#b", 4, true),
        //Array(ttt, "首充奖励 #b", 5, true),
        //Array(ttt, "财富转盘#b", 6, true),
        Array(ttt, "红包系统#b", 7, true),
        Array(ttt, "淘居婚姻#b", 8, true),
        //Array(ttt, "骑宠市场#b", 9, true),
        Array(ttt, "点装回收#b", 10, true),
        Array(ttt, "游戏中心#b", 11, true),
        Array(ttt, "提交建议#b", 20, true)
        );
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
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            var selStr = "" + ttt + " #e#d请选择#n#k\r\n" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
            var x = 0;
            for (var i = 0; i < menuList.length; i++) {
                if (menuList[i][3]) { // 如果允许显示
                    x++;
                    selStr += "#b#L" + menuList[i][2] + "#" + menuList[i][0] + " " + menuList[i][1] + "#l";

                    if (x % 3 == 0) {
                        selStr += "\r\n";
                    } else {
                        selStr += " ";
                    }
                }
            }
            selStr += "\r\n\r\n" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "\r\n";
            selStr += "\r\n\t\t\t#b#L999#" + ttt + " 返回上一页#l#k\r\n";
            cm.sendSimple(selStr);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    cm.dispose();
                    cm.openNpc(1530635, 2001);
                    break;
                case 1:
                    cm.dispose();
                    cm.openNpc(1530635, 2002);
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(1530635, 2003);
                    break;
                case 3:
                    cm.dispose();
                    cm.openNpc(1530635, 2004);
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(1530635, "Onlinebonus");
                    break;
                case 5:
                    cm.dispose();
                    cm.openNpc(1530635, 2006);
                    break;
                case 6:
                    cm.dispose();
                    cm.openNpc(1530635, 2007);
                    break;
                case 7:
                    cm.dispose();
                    cm.openNpc(1530635, 2008);
                    break;
                case 8:
                    cm.warp(680000000, 0);
                    cm.dispose();
                    break;
                case 9:
                    cm.dispose();
                    cm.openNpc(1530637, 2009)
                    break;
                case 10:
                    cm.dispose();
                    cm.openNpc(1012121, "DeleteCash")
                    break;
                case 11:
                    cm.dispose();
                    cm.openNpc(1012008, "GameCenter")
                    break;
                case 20:
                    cm.dispose();
                    cm.openNpc(1530637, 2010);
                    break;
                case 999:
                    cm.dispose();
                    cm.openNpc(1530635,0)
                    break;
            }
        }
    }
}