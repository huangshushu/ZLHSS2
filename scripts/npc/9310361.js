/* 
阶梯
*/

function start() {
	cm.sendSimple("（要移动到哪里？）\r\n#b#L0#移动至光荣大厅1层。#l\r\n#L1#移动至光荣大厅2层。#l\r\n#L2#移动至光荣大厅3层。#l\r\n#L3#移动至光荣大厅4层。#l\r\n#L4#移动至光荣大厅5层。#l\r\n#L5#退出光荣大厅。#l");
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	switch (selection) {
		case 0:
			cm.warp(710000000);
			break;
		case 1:
			cm.warp(710000100);
			break;
		case 2:
			cm.warp(710000200);
			break;
		case 3:
			cm.warp(710000300);
			break;
		case 4:
			cm.warp(710000400);
			break;
		case 5:
			cm.warp(cm.getSavedLocation("MULUNG_TC"));
			cm.clearSavedLocation("MULUNG_TC");
			break;
	}
	cm.dispose();
}
