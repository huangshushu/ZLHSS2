/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("暗影双刀达到了40级！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i3800008# 猫头鹰图标 1个。\r\n\r\n#i1012188# #t1012188# 1个。");
    } else if (status == 1) {
        if (qm.isQuestFinished(10612)) {
            qm.dispose();
        } else {
            qm.sendOk("领取成功了。");
            qm.gainItem(1012188, 1); //绿色面巾
            qm.gainItem(3800008, 1); //猫头鹰图标
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}