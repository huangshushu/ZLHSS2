/* ===========================================================
			注释 itemQuantity()
	脚本类型: 		NPC
	所在地图:		
	脚本名字:		
=============================================================
本脚本源自网上流传，仅为技术交流之用。如侵权。请联系我们，我们将在第一时间删除。
*/

var a = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
				cm.sendYesNo("#e#r确定要出去吗？出去了就进不来了哦。！");

	}//status
else if (a == 1) {
cm.warp(910000000,0);
cm.dispose();
}
}
}