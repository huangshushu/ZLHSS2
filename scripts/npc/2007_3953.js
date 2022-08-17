/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if(cm.判断任务(3953)==1){
		cm.任务完成(3953);
	}else{
		cm.任务开始(3953);
	}
	cm.dispose();
}