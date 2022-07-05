var status = -1;

function start() {
	if (cm.isQuestActive(21731) || cm.isQuestActive(20730))
		cm.sendGetText("听见奇怪的声音。若想进入，#e#b就要说出暗号#k#n");
	else
		cm.dispose();
}

function action(mode, type, selection) {
    if(mode != 1) {
        cm.dispose();
    } else {
        status++;
		if (status == 0) {
			if (cm.getText() == "浦蓝西斯是天才傀儡师！") {
				cm.warp(910510001);
			} else {
				cm.sendNext("有奇怪的声音嘲笑著\r\n\r\n#e#b是笨蛋吗？这不是暗号吗？从连写法到感叹号都一模一样#k#n");
			}
			cm.dispose();
		}
    }
}
