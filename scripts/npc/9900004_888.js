status = -1;
var itemList = Array(
//-------耳环-------
Array(2290000,800,1,1),
			Array(2290001,600,1,1)
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("所有奖励都在这里哦！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000313,2)) {
            cm.sendYesNo("欢迎光临，两张#v4000313#抽一次，运气好能抽到极品哦！\r\n包括#r真红、风暴、11周年、终极、自创武器#k等系列\r\nPS：黄金枫叶可通过#b打怪、打BOSS、做任务、每日签到、枫叶兑换#k等方式获得，下面展示#r部分抽奖样品#k！\r\n#v01302308##v01302307##v01302310##v01302309##v01302305##v01302258##v01302249##v01402184##v01402300##v01402304##v01402308##v01402310##v01402311##v01402317##v01402319##v01402318##v01402321##v01412153##v01412164##v01422170##v01422185##v01432140##v01432150##v01432151##v01432152##v01432153##v01432154##v01432155##v01442139##v01442140##v01452148##v01452149##v01452232##v01452198##v01452302##v01462138##v01462219##v01462186##v01472241##v01472236##v01472207##v01382239##v01382235##v01382202##v01372201##v01372178##v01432136##v01432150##v01432152#");
        } else {
            cm.sendOk("抽一次奖需要#b两张黄金枫叶#k，你背包里有足够的#b#t4000313##k吗?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 600);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "寻宝活动", notice);
            if (item != -1) {
                cm.gainItem(4000313, -2);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有足够的#b#t4000313##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：红色枫叶10张。)");
            cm.gainItem(4000313, -2);
            cm.gainItem(4001126, 10);
            cm.safeDispose();
        }
    }
}