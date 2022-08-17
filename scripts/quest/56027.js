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
        if (qm.isQuestFinished(56027)) {
            qm.dispose();
        } else {
            qm.sendOk("恭喜! 你获得了#v2022457# x 100，#v4006000# x 100，#v4006001# x 100。");
            qm.gainItem(2022457, 100);
            qm.gainItem(4006000, 100);
            qm.gainItem(4006001, 100);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}