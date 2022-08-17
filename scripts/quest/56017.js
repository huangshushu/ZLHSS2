/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
        if (qm.isQuestFinished(56017)) {
            qm.dispose();
        } else {
            qm.sendOk("恭喜! 你获得了#v2022457# x 100。");
            qm.gainItem(2000005, 100);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}