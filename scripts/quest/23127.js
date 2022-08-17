/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

//member of resistance.

function start(mode, type, selection) {
    qm.sendNext("你的第三个任务是保护SURL.");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.sendNext("你的第三个任务是保护SURL.");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}