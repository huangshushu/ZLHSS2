/*
	Encrypted Slate of the Squad - Leafre Cave of life
*/

var status = -1;

function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
	if (cm.haveItem(4001086)) {
		cm.warp(240050400,0);
	} else {
		cm.sendOk("#b(一座石碑，上面写著看不懂的文字……。)");
	}
    cm.dispose();
}
