function start() {
	if (cm.haveMonster(5090001)) {
		cm.getMap().killMonster(5090001);
		cm.mapMessage("看起来你非常的用心来关看你的成绩呢！");
	} else {
		cm.sendNext("你也会来关心你的成绩啊？");
	}
	cm.dispose();
}
