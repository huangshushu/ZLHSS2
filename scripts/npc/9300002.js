/* Dawnveil
    To Victoria Island
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("我可以直接送你去红鸾宫，你想去吗？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("恩... 看起来你并没有准备好。");
	} else {
	cm.saveLocation("MULUNG_TC");
	cm.warp(700000000,0);
    }
    cm.dispose();
}
