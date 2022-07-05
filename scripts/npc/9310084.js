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
        cm.sendNext("恩... 看起来你并没有#b10000#k金币，这样我可帮不了你。");
    } else {
        if(cm.getPlayer().getMeso() >= 10000) {
            cm.gainMeso(-10000);
            cm.saveLocation("WEDDING");
            cm.warp(700000000,0);
        } else {
			cm.sendNext("恩... 看起来你并没有#b10000#k金币，这样我可帮不了你。");
		}
        cm.dispose();
    }
}