/* 
    退出
*/

var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
            cm.dispose();
        status--;
    }
	if (status == 0) {
        cm.sendYesNo("#e#你确定退出副本吗？!"); 
    } else if (status == 1) {
			cm.dispose();
			cm.warp(800026000,0);
		} else {
		cm.dispose();
	 }
}
