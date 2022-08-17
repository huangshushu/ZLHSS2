/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if(cm.判断任务(2259)==1){
		if(cm.判断地图()==260020700){
			cm.任务完成(2259);
		}else{
			cm.说明文字("这里不能跟你说，快去#b沙哈地带1#k。");
		}
	}else if(cm.判断任务(2259)==0){
		cm.任务开始(2259);
		cm.说明文字("赶快去阻止蝎子吧。");
	}
	cm.dispose();
}