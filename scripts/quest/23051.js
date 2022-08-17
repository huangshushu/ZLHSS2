/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("我不喜欢我们在做什么 #p2154009#''但是如果他收集所有的下巴，事情会变得毛茸茸。 让我们离开这里。 使用地下基地#t4032740# 对我的计数。 一二三!");
	} else {
		qm.warp(310010000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
