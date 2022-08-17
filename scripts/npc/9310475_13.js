var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1402014, 16, 12, 588888),//ID 名称 与 价位 之间的距离 - 价位 与 图标 之间的距离
Array(1302063, 10, 12, 588888),
Array(1302106, 10, 12, 588888),
Array(1402044, 14, 12, 148888),
Array(1322051, 18, 12, 148888),
Array(1332021, 16, 12, 148888),
Array(1302035, 16, 12, 148888),
Array(1432037, 12, 12, 148888),
Array(1452050, 4, 12, 148888),
Array(1452049, 6, 12, 148888),
Array(1432043, 6, 12, 148888),
Array(1432044, 4, 12, 148888),
Array(1442058, 6, 12, 148888),
Array(1462044, 6, 12, 148888),
Array(1462045, 4, 12, 148888),
Array(1322058, 0, 12, 148888),
Array(1322057, 2, 12, 148888),
Array(1422034, 2, 12, 148888),
Array(1382044, 2, 12, 148888),
Array(1382043, 4, 12, 148888),
Array(1332060, 4, 12, 148888),
Array(1332061, 2, 12, 148888),
Array(1412030, 2, 12, 148888),
Array(1412031, 1, 12, 148888),
Array(1302076, 1, 12, 148888),
Array(1302075, 3, 12, 148888),
Array(1472059, 5, 12, 148888),
Array(1472060, 3, 12, 148888),
Array(1312035, 3, 12, 148888),
Array(1312036, 1, 12, 148888),
Array(1402042, 3, 12, 148888)
					);
//-----------------------------------------------------------------//
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

        var txt = "\r\n#d ┏━━━━━━━━━━#b售货━玩具#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的点　卷：#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n\r\n";
        txt += "　　" + icon0 + "#r 管理员提示：请选择你需购买的道具#k\r\n\r\n";
        txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        txt += "#d#n\r\n　　名称　　　　　　　　价格　　　　　　　图标\r\n";
        for (var i = 0; i < itemlist.length; i++) {
            txt += "#L" + i + "#";
            txt += "#b#z" + itemlist[i][0] + "#";

            for (var j = itemlist[i][1]; j > 0; j--) {
                txt += " ";
            }
            txt += "#r" + itemlist[i][3];
            for (var j = itemlist[i][2]; j > 0; j--) {
                txt += " ";
            }
            txt += "#i" + itemlist[i][0] + "#";
            txt += "#l#k\r\n";
        }
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        selects = selection;
        cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][3] + " ] 点卷\r\n ", 1, 0, 9999);
    } else if (status == 2) {
        buynum = selection;
        cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉 [ " + (buynum * itemlist[selects][1]) + " ] 点卷");
    } else if (status == 3) {
        if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
            cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
            cm.gainItem(itemlist[selects][0], buynum);
            cm.sendOk("购买成功了！");
            cm.dispose();
        } else {
            cm.sendOk("对不起，你没有足够的点卷");
            cm.dispose();
        }
    }
}