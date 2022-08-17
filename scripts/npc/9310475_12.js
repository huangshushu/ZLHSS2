var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(3010853,88888),
Array(3015100,88888),
Array(3015109,88888),
Array(3015143,88888),
Array(3015144,88888),
Array(3015142,88888),
Array(3015031,88888),
Array(3015058,88888),
Array(3015014,88888),
Array(3010842,88888),
Array(3010820,88888),
Array(3015131,88888),
Array(3010849,88888),
Array(3012011,88888),
Array(3012010,88888),
Array(3010659,88888),
Array(3012024,88888),
Array(3010788,88888),
Array(3010416,88888),
Array(3010191,88888),
Array(3010552,88888),
Array(3010642,88888),
Array(3015109,88888),
Array(3010835,88888),
Array(3010117,88888),
Array(3015808,88888),
Array(3015759,88888),
Array(3015117,88888),
Array(3015115,88888),
Array(3015118,88888),
Array(3015545,88888),
Array(3015671,88888),
Array(3015672,88888),
Array(3015673,88888),
Array(3015674,88888),
Array(3015296,88888),
Array(3014025,88888),
Array(3015814,88888),
Array(3010743,88888),
Array(3015295,88888),
Array(3012032,88888),
Array(3010815,88888),
Array(3010862,88888),
Array(3015120,88888),
Array(3015243,88888),
Array(3015309,88888),
Array(3015408,88888),
Array(3015636,88888),
Array(3015662,88888),
Array(3015597,88888),
Array(3015598,88888),
Array(3015621,88888),
Array(3012031,88888),
Array(3012025,88888),
Array(3015451,88888),
Array(3015010,88888),
Array(3015694,88888),
Array(3015695,88888),
Array(3015696,88888),
Array(3015697,88888),
Array(3015698,88888),
Array(3015699,88888),
Array(3015755,88888),
Array(3010844,88888),
Array(3014000,88888),
Array(3014001,88888),
Array(3014002,88888),
Array(3014003,88888),
Array(3014004,88888),
Array(3014006,88888),
Array(3015656,88888),
Array(3015419,88888),
Array(3015495,88888),
Array(3015494,88888),
Array(3015526,88888),
Array(3015816,88888),
Array(3016104,88888),
Array(3010757,88888),
Array(3010760,88888),
Array(3010836,88888),
Array(3010837,88888),
Array(3015369,88888),
Array(3015228,88888),
Array(3015229,88888),
Array(3015756,88888),
Array(3015793,88888),
Array(3015794,88888),
Array(3015838,88888),
Array(3015854,88888),
Array(3015855,88888),
Array(3015031,88888),
Array(3015092,88888),
Array(3015119,88888),
Array(3015234,88888),
Array(3015235,88888),
Array(3015619,88888),
Array(3015443,88888),
Array(3010661,88888),
Array(3015524,88888),
Array(3015519,88888),
Array(3010520,88888),
Array(3010946,88888),
Array(3015107,88888),
Array(3015114,88888),
Array(3015248,88888),
Array(3015739,88888),
Array(3015107,88888),
Array(3015717,88888),
Array(3015638,88888),
Array(3015659,88888),
Array(3015661,88888),
Array(3015299,88888),
Array(3015831,88888),
Array(3015809,88888),
Array(3015843,88888),
Array(3015836,88888),
Array(3010838,88888),
Array(3015236,88888),
Array(3015246,88888),
Array(3015247,88888),
Array(3015263,88888),
Array(3015272,88888),
Array(3015297,88888),
Array(3015637,88888),
Array(3015642,88888),
Array(3015646,88888),
Array(3015541,88888),
Array(3015439,88888),
Array(3014020,88888),
Array(3015811,88888),
Array(3015111,88888),
Array(3015172,88888),
Array(3015276,88888),
Array(3015277,88888),
Array(3015278,88888),
Array(3015341,88888),
Array(3015438,88888),
Array(3015609,88888),
Array(3015482,88888),
Array(3015795,88888),
Array(3015837,88888),
Array(3010681,88888),
Array(3010700,88888),
Array(3010723,88888),
Array(3015440,88888),
Array(3015599,88888),
Array(3015820,88888),
Array(3015328,88888)
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

        var txt = "\r\n#d ┏━━━━━━━━━━#b售货━椅子#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的点　卷：#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n";
        txt += "　　" + icon0 + "#d 当前拥有的抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n\r\n";
        txt += "　　" + icon0 + "#r 管理员提示：请选择你需购买的道具#k\r\n\r\n";
        txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        for (var i = 0; i < itemlist.length; i++) {
            txt += "#L" + i + "##i" + itemlist[i] + "#  ";
            if (i != 0 && (i + 1) % 5 == 0) {
                txt += "\r\n";
            }
        }
        cm.sendSimpleS(txt, 2);
    } else if (status == 1) {
        selects = selection;
        cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][1] + " ] 点卷\r\n ", 1, 0, 88888);
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