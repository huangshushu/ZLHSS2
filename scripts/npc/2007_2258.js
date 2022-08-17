/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
	if(cm.判断任务(2258)==1){
		cm.任务完成(2258);
	}else{
		cm.任务开始(2258);
		cm.说明文字("赶快去阻止丁满吧。");
	}
	cm.dispose();
}