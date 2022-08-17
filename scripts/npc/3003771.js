/*  
 *  CHMS_拍卖中心
 */
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fEffect/CharacterEff/1112905/0/1#";//"+z+"//美化
var zz = "#fEffect/CharacterEff/1082565/2/0#";//
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fUI/Gateway.img/WorldSelect/icon/1#";//音符fEffect/ItemEff/1112811/0/0
var ts = "#fUI/Basic.img/Cursor/18/0#";//shuye
var feng = "#v4032733#";
var aaa = "#i4036073#";
var bbb = "#i2631060#";
var ccc = "#i2023578#";
var ddd = "#i2432557#";
var eee = "#i4032751#";
var fff = "#i5000498#";
var ggg = "#i4032357#";
var hhh = "#i2438738#";
var iii = "#i5000982#";
var jjj = "#i2432758#";
var kkk = "#i5000309#";
var lll = "#i5000311#";
var mmm = "#i5000310#";
var nnn = "#i1003718#";
var ooo = "#i5000345#";
var ppp = "#i1004143#";
var qqq = "#i1004140#";
var rrr = "#i1142695#";
var sss = "#i1004141#";
var ttt = "#i2591588#";
var uuu = "#i1004148#";
var vvv = "#i1004147#";
var www = "#i1162014#";
var xxx = "#i4033450#";
var yyy = "#i1113302#";
var zzz = "#i3015278#";
var aaaa = "#i1103151#";
var bbbb = "#i2630106#";
var cccc = "#i1102887#";
var dddd = "#i4001126#";
var eeee = "#i5062024#";
var ffff = "#i5062024#";
var aaaaa = "#i5240050#";
var bbbbb = "#i3015020#";
var ccccc = "#i1003540#";

var menuList = Array(
        Array(aaa, "钻   机", 0, true),
        Array(ccc, "品克缤", 2, true),
        Array(fff, "森兰丸", 5, true),
        Array(hhh, "武陵图腾", 7, true),
        Array(iii, "希纳斯", 8, true),
        Array(jjj, "浓姬", 9, true),
        Array(kkk, "血腥女王", 10, true),
		Array(lll, "皮埃尔", 11, true),
		Array(mmm, " 半 半", 12, true),
		Array(nnn, " 贝  伦", 13, true),
        Array(ooo, "贝勒德 ", 14, true),
        Array(qqq, "斯 乌", 16, true),
        Array(ppp, "麦格纳斯", 15, true),
        Array(rrr, "桃乐丝", 17, true),
		Array(uuu, "希拉 ", 20, true),
        Array(sss, "戴米安", 18, true),
        Array(ttt, "路西德", 19, true),
        Array(vvv, "威 尔", 21, true),
        Array(www, "阿勒玛  ", 22, true),
        Array(zzz, "乌鲁斯 ", 25, true),
		Array(bbbb, "年 兽", 27, true),
		Array(xxx, "至暗魔晶", 23, true),
		Array(yyy, "敦凯尔", 24, true),
		Array(aaaa, "黑魔法", 26, true),
		//Array(aaaaa, "心 魔", 30, true),
		Array(bbbbb, "暴力熊和蝴蝶", 28, true),
		Array(ccccc, "外星入侵", 29, true)
        );
//图片特效,名字，selection，是否显示

var npcid = Array(1530635, 1530636, 1530637, 1530638);

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
    } else if (status == 0) { //
        var selStr = zz+zz+zz+zz+zz+zz+zz+ "#fn华文行楷##fs20##e#d " + cm.getServerName() + " " +zz+zz+zz+zz+zz+zz+ " \r\n#fs12##fn宋体#"
        var x = 0;
        for (var i = 0; i < menuList.length; i++) {
            if (menuList[i][3]) { // 如果允许显示
                x++;
                selStr += "#b#L" + menuList[i][2] + "#" + menuList[i][0] + " " + (menuList[i][2] == 99 && cm.isQuestFinished(1465) ? "五转中心" : menuList[i][1]) + "#l";

                if (x % 3 == 0) {
                    selStr += "\r\n";
                } else {
                    selStr += " ";
                }
				if (menuList[i][2] == 99) {
					selStr
				}
            }

        }

        if (x % 3 != 0) {
            selStr += "\r\n";
        }
        selStr += "\r\n"+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+"\r\n";
        cm.sendSimple(selStr, npcid[Math.floor(Math.random() * npcid.length)]);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
				cm.warp(703020000);
				break;
            case 2:
                cm.dispose();
				cm.warp(270050000);
				break;
            case 5:
                cm.dispose();
				cm.warp(807300100);
				break;
            case 7:
                cm.dispose();
				cm.warp(925020000);
				break;
            case 8:
                cm.dispose();
				cm.warp(271040000);
				break;
            case 9:
                cm.dispose();
				cm.warp(811000000);
				break;
            case 10:
                cm.dispose();
				cm.warp(105200000);
				break;
            case 11:
                cm.dispose();
				cm.warp(105200000);
				break;
            case 12:
                cm.dispose();
				cm.warp(105200000);
				break;
            case 13:
                cm.dispose();
				cm.warp(105200000);
				break;
            case 14:
                cm.dispose();
				cm.warp(863010000);
				break;
            case 15:
                cm.dispose();
				cm.warp(401060000);
				break;
            case 16:
                cm.dispose();
				cm.warp(350060300);
				break;
            case 17:
                cm.dispose();
				cm.warp(867236150);
				break;
            case 18:
                cm.dispose();
				cm.warp(350160100);
				break;
            case 19:
                cm.dispose();
				cm.warp(450003600);
				break;
            case 20:
                cm.dispose();
				cm.warp(940500100);
				break;
            case 21:
                cm.dispose();
				cm.warp(450008400);
				break;
			case 22:
                cm.dispose();
				cm.warp(450001240);
				break;
			case 23:
                cm.dispose();
				cm.warp(450009301);
				break;
			case 24:
                cm.dispose();
				cm.warp(450012200);
				break;
			case 25:
                cm.dispose();
				cm.warp(970072200);
				break;
			case 26:
                cm.dispose();
				cm.warp(450013820);
				break;
			case 27:
                cm.dispose();
				cm.warp(867139400);
				break;
			case 30:
                cm.dispose();
				cm.warp(321190100);
				break;
			case 28:
                cm.dispose();
				cm.warp(910196000);
				break;
			case 29:
                cm.dispose();
				cm.warp(861000000);
				break;
        }
    }
}


function ListFor(type) {
    var x = 0;
    var space = "";
    if (type >= 3)
        space = "  ";
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 3) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l" + space;
                x++;
            }
        }
    }
}