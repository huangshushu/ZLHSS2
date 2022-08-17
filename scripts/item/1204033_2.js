/*
 ZEVMS冒险岛(079)游戏服务端
 1204033_1 ，抽奖
 1204033_2 ，经验金币点券
 */
function action() {
	var r = Math.ceil(Math.random() * 2);
	//进入抽奖
	if(r ==0){
		cm.给点券( Math.ceil(Math.random() * 10000));
	}else if(r ==1){
		cm.给金币( Math.ceil(Math.random() * 10000));
	}else if(r ==2){
		cm.给经验( Math.ceil(Math.random() * 100000));
	}
	cm.gainItem(2022336, -1);
	cm.对话结束();
}