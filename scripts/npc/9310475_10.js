var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(2431965, 8888),
Array(5551000, 8888),
Array(2434655, 8888),
Array(2435486, 8888),
Array(2435487, 8888),
Array(2435489, 8888),
Array(2435488, 8888),
Array(2434734, 8888),
Array(2434710, 8888),
Array(2434873, 8888),
Array(2434875, 8888),
Array(2434877, 8888),
Array(2434879, 8888),
Array(2435549, 8888),
Array(2435543, 8888),
Array(2435546, 8888),
Array(2435545, 8888),
Array(2435542, 8888),
Array(2434817, 8888),
Array(2434818, 8888),
Array(2435567, 8888),
Array(2435568, 8888),
Array(2435565, 8888),
Array(2435566, 8888),
Array(2434868, 8888),
Array(2434574, 8888),
Array(2434530, 8888),
Array(2434546, 8888),
Array(2434544, 8888),
Array(2434545, 8888),
Array(2434542, 8888),
Array(2434528, 8888),
Array(2434529, 8888),
Array(2433456, 8888),
Array(2435673, 8888),
Array(2435674, 8888),
Array(2434692, 8888),
Array(2434658, 8888),
Array(2434659, 8888),
Array(2433558, 8888),
Array(2433568, 8888),
Array(2433569, 8888),
Array(2433572, 8888),
Array(2433571, 8888),
Array(2433570, 8888),
Array(2433588, 8888),
Array(2433587, 8888),
Array(2435704, 8888),
Array(2434601, 8888),
Array(2434619, 8888),
Array(2434375, 8888),
Array(2434374, 8888),
Array(2435802, 8888),
Array(2434390, 8888),
Array(2434391, 8888),
Array(2435906, 8888),
Array(2435905, 8888),
Array(2434157, 8888),
Array(2434147, 8888),
Array(2433063, 8888),
Array(2434289, 8888),
Array(2433112, 8888),
Array(2433113, 8888),
Array(2432526, 8888),
Array(2433197, 8888),
Array(2433199, 8888),
Array(2433184, 8888),
Array(2433183, 8888),
Array(2433182, 8888),
Array(2435030, 8888),
Array(2435037, 8888),
Array(2432207, 8888),
Array(2435141, 8888),
Array(2435159, 8888),
Array(2432131, 8888),
Array(2435046, 8888),
Array(2435047, 8888),
Array(2435222, 8888),
Array(2435166, 8888),
Array(2435162, 8888),
Array(2435358, 8888),
Array(2435357, 8888),
Array(2435356, 8888),
Array(2435336, 8888),
Array(2435335, 8888),
Array(2432695, 8888),
Array(2432479, 8888),
Array(2432465, 8888),
Array(2432748, 8888),
Array(2432804, 8888),
Array(2433715, 8888),
Array(2433776, 8888),
Array(2433777, 8888),
Array(2433775, 8888),
Array(2433919, 8888),
Array(2434950, 8888),
Array(2434951, 8888),
Array(2435972, 8888),
Array(2433883, 8888),
Array(2433829, 8888),
Array(2433828, 8888),
Array(2433830, 8888),
Array(2433833, 8888),
Array(2433832, 8888),
Array(2435184, 8888),
Array(2433831, 8888)
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

        var txt = "\r\n#d ┏━━━━━━━━━━#b售货━商城#d━━━━━━━━━┓#k\r\n\r\n";
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