/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
function end(mode, type, selection) {
	    qm.forceCompleteQuest();
	if (qm.getJob() == 431) {
	    qm.changeJob(432);
	    qm.gainItem(1132021,1);
	    qm.sendNext("恭喜你，转职成功！");
	}
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
