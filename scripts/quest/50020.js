/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    cm.sendNext("纽黑文天使被击败...");
    cm.forceCompleteQuest(50019);
    cm.forceStartQuest();
    cm.dispose();
}

function end(mode, type, selection) {
}