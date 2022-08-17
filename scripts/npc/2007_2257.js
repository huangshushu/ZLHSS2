/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if(cm.判断地图()==260020000){
		cm.任务完成(2257);
	}else{
		cm.任务开始(2257);
	}
	cm.dispose();
}