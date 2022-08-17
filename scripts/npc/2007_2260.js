/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if(cm.判断任务(2260)==1){
		cm.任务完成(2260);
		cm.任务开始(2261);
		cm.任务开始(2262);
		cm.任务开始(2263);
	}else if(cm.判断任务(2260)==0){
		cm.任务开始(2260);
		cm.说明文字("你到达 #b30#k 级以上在找我吧。");
	}
	cm.dispose();
}