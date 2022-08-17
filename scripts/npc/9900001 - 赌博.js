/*
* 赌博21点
*
*
*/

var text = "";
var text1 = "";
var score = 0;
var selectionMeso = 0;
var zhuangScore = 0;
var xianScore = 0;
var paiArray = Array("A",2,3,4,5,6,7,8,9,10,"J","Q","K");
var paiArray2 = Array(1,2,3,4,5,6,7,8,9,10,10,10,10);
var ran = -1;


function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status == 0 && mode == 0) {
		
			cm.sendOk("欢迎下次光临。");
			cm.dispose();
			return;                    
		}
		if (mode == 1) {
			status++;
		}
		else {
			 if (status == 0) {
                cm.sendNext("欢迎下次光临。");
                cm.dispose();
            }
			status--;
		} 
		if (status == 0) {
			score = cm.getMeso();
			text += "#fUI/UIWindow/Quest/icon3/6# ";
			text += "我这里可以玩21点,";
			text += " #fUI/UIWindow/Quest/icon3/6#\r\n";
			text += "#L1# #r金币21点 #l";
			text += "#L2# #r点券21点 #l\r\n\r\n";
			text += "#L4# #r彩金系统 #l";
			text += "#L3# #r贫民赌彩 #l\r\n\r\n";
			cm.sendSimple(text);
		} else if(selection == 1){
			cm.openNpc(1022101,0);
			
		}else	if(selection == 2){		
			cm.openNpc(1002006,0);
		}else	if(selection == 4){		
			cm.openNpc(9310390,0);
		}else if(selection == 3){
				cm.openNpc(9310102,0);
		}
	}
}