var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
					Array(3010036, 4320),
					Array(3010054, 4320),
					Array(3010059, 4320),
					Array(3010064, 4320),
					Array(3010069, 4320),
					Array(3010071, 4320),
					Array(3010093, 4320),
					Array(3010587, 4320),
					Array(3010450, 4320),
					Array(3010526, 4320),
					Array(3010522, 4320),
					Array(3010375, 4320),
					Array(3010373, 4320),
					Array(3010361, 4320),
					Array(3010357, 4320),
					Array(3010356, 4320),
					Array(3010318, 4320),
					Array(3010303, 4320),
					Array(3010223, 4320),
					Array(3010222, 4320),
					Array(3010196, 4320),
					Array(3010220, 4320),
					Array(3010221, 4320),
					Array(3010589, 4320),
					Array(3010218, 4320),
					Array(3010180, 4320),
					Array(3010181, 4320),
					Array(3010187, 4320),
					Array(3010169, 4320),
					Array(3010167, 4320),
					Array(3010162, 4320),
					Array(3010156, 4320),
					Array(3010119, 4320),
					Array(3010698, 4320),
					Array(3010098, 4320),
					Array(3010099, 4320),
					Array(3010100, 4320),
					Array(3010523, 14400),
					Array(3010718, 14400),
					Array(3010417, 14400),
					Array(3010416, 14400),
					Array(3010592, 14400),
					Array(3010591, 14400),
					Array(3010631, 14400),
					Array(3010621, 14400),
					Array(3014000, 14400),
					Array(3014001, 14400),
					Array(3014002, 14400),
					Array(3014003, 14400),
					Array(3014004, 14400),
					Array(3014006, 14400),
					Array(3015010, 14400),
					Array(3010658, 43200),
					Array(3015111, 43200),
					Array(3015831, 43200),
				    Array(3015299, 43200)
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

        var txt = "\r\n#d ┏━━━━━━━━━━#b积分━椅子#d━━━━━━━━━┓#k\r\n\r\n";
        txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
        txt += "　　" + icon0 + "#d 当前共有积分：#r" + cm.getPlayerPoints() + "#k\r\n";
        txt += "　　" + icon0 + "#r 管理员提示：请选择你需购买的椅子#k\r\n\r\n";
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
        cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][1] + " ] 积分\r\n ", 1, 0, 9999);
    } else if (status == 2) {
        buynum = selection;
        cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉 [ " + (buynum * itemlist[selects][1]) + " ] 积分");
    } else if (status == 3) {
        if (cm.getChar().getPlayerPoints() >= buynum * itemlist[selects][1]) {
            cm.getChar().gainPlayerPoints(-buynum * itemlist[selects][1]);
            cm.gainItem(itemlist[selects][0], buynum);
            cm.sendOk("购买成功了！");
            cm.dispose();
        } else {
            cm.sendOk("对不起，你没有足够的积分");
            cm.dispose();
        }
    }
}