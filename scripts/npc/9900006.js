/*
QQ：157190323*/
var status = -1;
var need = 0;

function start() {
 action(1, 0, 0);
}
 
function action(mode, type, selection){
	 if(mode == 1){
		 status++;
	 } else {
		 cm.dispose();
		 returm;
	 }
	 if(status == 0){
		 cm.sendYesNo("你是否想出去，回到射手村？#r" );
	 } else if(status == 1){
		 if(cm.getPlayer().getMeso() < need){
		 cm.sendNext("你的金币不够 ");
			 cm.dispose();
			 return;
		 }
		 cm.gainMeso(-need);
		if (cm.getMapId() == 260020000) {
			cm.warp(100000000, 0);
	cm.gainItem(5253004, -1);	} else { // 260020700
			cm.warp(100000000, 1);
  cm.gainItem(5253004, -1);       }
		cm.dispose();
		}
 }

