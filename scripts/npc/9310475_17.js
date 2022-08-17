var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1222058, 480000),
Array(1232057, 480000),
Array(1242060, 480000),
Array(1242061, 480000),
Array(1302275, 480000),
Array(1312153, 480000),
Array(1322203, 480000),
Array(1332225, 480000),
Array(1342082, 480000),
Array(1362090, 480000),
Array(1372177, 480000),
Array(1382208, 480000),
Array(1402196, 480000),
Array(1412135, 480000),
Array(1422140, 480000),
Array(1432167, 480000),
Array(1442223, 480000),
Array(1452205, 480000),
Array(1462193, 480000),
Array(1472214, 480000),
Array(1482168, 480000),
Array(1492179, 480000),
Array(1522094, 480000),
Array(1532098, 480000),
Array(1542063, 480000),
Array(1552063, 480000),
Array(1552115, 480000),
Array(1352808, 480000)
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

        var txt = "\r\n#d ┏━━━━━━━━━━#b售货━武器#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的点　卷：#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n\r\n";
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
        cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][1] + " ] 点卷\r\n ", 1, 0, 9999);
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