/*
 蜗牛冒险岛(079)游戏服务端
 */
function action(mode, type, selection) {
    cm.给经验(100000);
	cm.任务完成(3935);
	cm.任务开始(3936);
	cm.playerMessage(1,"任务完成，任务残缺，非常抱歉。");
	cm.dispose();
}