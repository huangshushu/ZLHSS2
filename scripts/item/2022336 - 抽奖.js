/*
 ZEVMS冒险岛(079)游戏服务端
 1204033_1 ，抽奖
 1204033_2 ，经验金币点券
 1204033_3 ，8%
 */
function action() {
	var r = Math.ceil(Math.random() * 100);
	//进入抽奖
	if(r >=0 && r <=30){
		cm.打开NPC(1204033,1);
	}else if(r >50 && r<=70){
		cm.打开NPC(1204033,2);
	/*}else if(r >70 && r<=72){
		cm.打开NPC(1204033,3);
	}else if(r ==77){
		cm.打开NPC(1204033,4);
	}else if(r ==80){
		cm.打开NPC(1204033,5);*/
	}else{
		cm.说明文字(" 这TMD是个空的？？");
		cm.gainItem(2022336, -1);
		cm.对话结束();
	}
}