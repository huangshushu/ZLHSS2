
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
     if (cm.isQuestActive(2322)==1) {
	cm.forceCompleteQuest(2322);//完成任务
	cm.gainExpR(11000);
	cm.sendSimple("完成了蘑菇王国的城墙进行调查!");	
	cm.dispose();
	} else {
	cm.sendSimple("请问有什么事情?"); 
    cm.dispose();
}
}