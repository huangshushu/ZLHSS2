/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
        qm.sendNext("谢谢你完成此任务\r\n如果还会看此任务请重登。");
        qm.forceCompleteQuest();
        qm.dispose();
}

function end(mode, type, selection) {
        qm.forceCompleteQuest();
        qm.dispose();
}

