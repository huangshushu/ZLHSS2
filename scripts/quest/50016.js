/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	}
	if (status == 0) {
	    qm.sendNext("好吧，所以你也要去战斗. 谢谢... 只是让你知道，敌人可能比任何你所面对的更强大，你准备好了?");
	} else if (status == 1) {
	    qm.warp(802000800, 0);
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}