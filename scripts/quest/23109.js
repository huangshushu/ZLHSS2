/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

//member of resistance.

function end(mode, type, selection) {
    qm.sendNext("你的第一个任务是消除巡逻机器人.");
    qm.forceStartQuest(23129, "1");
    qm.forceStartQuest(23110);
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}