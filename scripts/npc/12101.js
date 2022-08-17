/*
 ZEVMS冒险岛(079)游戏服务端
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
	
    if (status == 0) {
	cm.sendNext("这是一个名叫阿巴姆斯特的小镇，位于枫树岛东北部。你知道枫岛是初学者，对吧？我很高兴这里周围只有微弱的怪物。");
    } else if (status == 1) {
	cm.sendNextPrev("如果你想变得更强壮，那就去一个有海港的巴斯佩里。坐上那艘巨轮，前往一个叫做“维多利亚岛”的地方。与这个小岛相比，它的面积是无与伦比的。");
    } else if (status == 2) {
	cm.sendPrev("在金银岛岛，你可以选择你的工作。它被称为“πbPixixk……”吗？我听说那里有一个光秃秃荒凉的城镇，那里住着勇士们。高地……那是一个什么样的地方？");
    } else if (status == 3) {
	cm.dispose();
    }
}