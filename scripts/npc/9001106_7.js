var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
                    Array(1102481, 3000),
                    Array(1102485, 3000),
                    Array(1102484, 3000),
                    Array(1102483, 3000),
                    Array(1102482, 3000),
                    Array(1072744, 3000),
                    Array(1072743, 3000),
                    Array(1072746, 3000),
                    Array(1072745, 3000),
                    Array(1072747, 3000),

                    Array(1412135, 5000),
                    Array(1532098, 5000),
                    Array(1542063, 5000),
                    Array(1472214, 5000),
                    Array(1362090, 5000),
                    Array(1242061, 5000),
                    Array(1242060, 5000),
                    Array(1432167, 5000),
                    Array(1302275, 5000),
                    Array(1492179, 5000),
                    Array(1522094, 5000),
                    Array(1372177, 5000),
                    Array(1212063, 5000),
                    Array(1222058, 5000),
                    Array(1262016, 5000),
                    Array(1552063, 5000),
                    Array(1442223, 5000),
                    Array(1462193, 5000),
                    Array(1232057, 5000),
                    Array(1422140, 5000),
                    Array(1382208, 5000),
                    Array(1332225, 5000),
					Array(1402196, 5000),
					Array(1322203, 5000),
					Array(1482168, 5000),
					Array(1582016, 5000),
					Array(1452205, 5000),
					Array(1312153, 5000),
					Array(1342082, 5000),
                    Array(1252015, 5000)
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

        var txt = "\r\n#d ┏━━━━━━━━━#b活力值━卷轴#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前共有活力值：#r" + cm.getPlayerEnergy() + "#k\r\n";
        txt += "　　" + icon0 + "#r 管理员提示：请选择你需购买的道具#k\r\n\r\n";
        txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        for (var i = 0; i < itemlist.length; i++) {
            txt += "#L" + i + "##i" + itemlist[i] + "#  ";
            if (i != 0 && (i + 1) % 4 == 0) {
                txt += "\r\n";
            }
        }
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        selects = selection;
        cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][1] + " ] 活力值\r\n ", 1, 0, 9999);
    } else if (status == 2) {
        buynum = selection;
        cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉 [ " + (buynum * itemlist[selects][1]) + " ] 活力值");
    } else if (status == 3) {
        if (cm.getChar().getPlayerEnergy() >= buynum * itemlist[selects][1]) {
            cm.getChar().gainPlayerEnergy(-buynum * itemlist[selects][1]);
            cm.gainItem(itemlist[selects][0], buynum);
            cm.sendOk("购买成功了！");
            cm.dispose();
        } else {
            cm.sendOk("对不起，你没有足够的活力值");
            cm.dispose();
        }
    }
}