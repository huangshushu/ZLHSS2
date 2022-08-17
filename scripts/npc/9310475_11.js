var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(5220006,200),
Array(2180000,200),
Array(5220040,200),
Array(5570000,3000),
Array(5537000,800),
Array(5743003,500),
Array(5062002,1200),
Array(5062009,1300),
Array(5062500,2000),
Array(5062010,2200),
Array(5062024,6000),
Array(2590009,8000),
Array(2049751,15000),
Array(5750002,1000),
Array(5750001,2500),
Array(5530111,1500),
Array(5530268,2500),
Array(2049517,3000),
Array(2048309,3000),
Array(5064100,4500),
Array(5064000,4900),
Array(5064003,30000),
Array(2702001,3000),
Array(5062400,3000),
Array(2049405,30000),
Array(5050100,35000),
Array(5520000,3500),
Array(5520001,5000),
Array(5150040,1000),
Array(5152053,1000),
Array(5152093,1500),
Array(5152094,2000),
Array(5152098,2500),
Array(5150090,280000),
Array(5360015,1500),
Array(5211060,3000),
Array(5060000,10000),
Array(5062402,90000),
Array(5151036,980),
Array(5153015,980),
Array(5840000,500),
Array(5840001,700),
Array(5840002,900),
Array(2610002,20000),
Array(2049601,3000),
Array(2435719,1000),
Array(2340000,5000),
Array(2049600,10000), 
Array(5062800,10000),
Array(5190011,1000),
Array(2028336,1000)
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