/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;
var oreArray;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	//qm.sendNext("然后等待一会儿。 我会去得到的东西，以帮助你通过卡帕莱特协会会长的考试.");
    qm.dispose();
		
}

function end(mode, type, selection) {
	    qm.forceCompleteQuest();
	    qm.dispose();
}