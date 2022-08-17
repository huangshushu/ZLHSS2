var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
                    Array(4001839, 3),//星星
                    Array(2500000, 500),//SP重置
					Array(2501000, 500),//AP重置
					Array(4310235, 50000),//AP重置
                    Array(2450155, 2000),//三倍经验BUFF增益
					//Array(2610002, 20000),//解封卷100%
					Array(4310199, 2000),//冬季限量硬币
					Array(2049750, 10000),//S潜能卷80% 
					Array(2049752, 3000),//S潜能卷30%
					Array(5530360, 10000),//特殊附加潜能附加古卷100%
                    Array(2048309, 3000),//附加潜能附加卷轴60%
					Array(5064003, 5000),//极真保护之盾
                    Array(2047818, 10000),//惊人的双手武器攻击力卷轴100%
                    Array(2612059, 10000),//惊人的双手武器魔力卷轴100%
                    Array(2046996, 10000),//惊人的单手武器攻击力卷轴100%
                    Array(2046997, 10000),//惊人的单手武器魔力卷轴100%
                    Array(2613000, 6000),//星火单手武器攻击力卷轴
                    Array(2613001, 6000),//星火单手武器魔法力卷轴
                    Array(2612010, 6000),//星火双手武器攻击力卷轴
					//Array(2049323, 5000),//无损
					//Array(2049600, 5000),//还原卷轴70%
                    Array(2049116, 8000),//强混 
                    //Array(2049104, 28000),//工作人员的强混 
					Array(2049043, 3000),//白医卷轴—神
					Array(2049122, 3000),//正向
					Array(2049166, 2000),//惊人正义混沌卷轴
                    Array(2046173, 5000),//宿命正义双手武器攻击力卷轴100%
                    Array(2046914, 5000),//宿命正义单手武器魔力卷轴100%
                    Array(2046913, 5000),//宿命正义单手武器攻击卷轴100%
					Array(2340000, 2500),//祝福
					Array(5064000, 2500),//防爆
					Array(2049008, 1500),//诅咒白医卷轴
					Array(2049004, 1500)//纯白卷轴
					//Array(2046579, 4000),//咒语痕迹
					//Array(2048700, 1500),//涅槃火焰110
					//Array(2048701, 3000),//涅槃火焰120
					//Array(2048702, 5000),//涅槃火焰130
					//Array(2048703, 8000),//涅槃火焰140
					//Array(2048704, 10000),//涅槃火焰150
					//Array(2048716, 30000),//强大的涅槃火焰
					//Array(2048717, 60000)//永远的涅槃火焰

					);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#r#h0##k,您好，欢迎您光顾点卷商店！\r\n";
			for (var i=0; i<itemlist.length; i++) {
            text+= "#b#L"+i+"##v"+ itemlist[i][0]+"##z"+ itemlist[i][0]+"##d   需点卷 #r"+itemlist[i][1]+"#k\r\n";

			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "点卷", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "点卷。");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("购买成功了！");
				cm.worldSpouseMessage(0x18,"[ 点卷商店 ] ：玩家 "+ cm.getChar().getName() +" 在点卷商店购买"+ cm.getItemName(itemlist[selects][0]) +" " + buynum + "个 ");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的点卷。");
                cm.dispose();
            }
        }
    }//mode
}//f