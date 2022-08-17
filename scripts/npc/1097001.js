/*
唐云
 */

function start() {
	cm.sendYesNo("你想停止制作料理并退出吗？料理没有完成的话，就无法获得奖励。如果你觉得没关系，我就送你出去。");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(912080000);
		cm.dispose();
	} else {
		cm.sendNext("应该把料理做完才对嘛！明智的决定！制作料理是一种快乐！");
		cm.dispose();
	}
}
