

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
					//cm.dispose();
cm.sendSimple("#e#r#L0#老麦副本#l\r\n\r\n#b#L1#小丑老巢副本#l");
	}//status
else if (a == 1) {
switch (selection) {
case 0:
 if(((cm.getHour()>=21 && cm.getHour()<22) && (cm.getPlayer().getMapId() == 910000000) ) || cm.getPlayer().isGM()){//新叶城)){
 	cm.dispose();
	cm.openNpc(3001021,1);//其实是1 修复
		}else {
		cm.sendOk("副本晚上9点-10点才会开放!欢迎各位冒险岛爱好者来公益冒险岛107,群号18341304");	
		cm.dispose();	
		}
break;
case 1:

 cm.dispose()
cm.openNpc(9900000,990)
break;

	}
}//
}
}