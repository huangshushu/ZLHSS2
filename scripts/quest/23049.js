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
		qm.sendNext("我将向爱无非要擦什么我们做了#p2154009#''的脸，但事情可能会很麻烦，如果他聚集他的爪牙。让我们在这里了。使用地下基地#t4032740# 我计数。 一二三!");
	} else {
		qm.warp(310010000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
