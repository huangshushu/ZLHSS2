/* 传授野性狂怒链接技能 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("点击画面左侧的相关图标，可以随时指定被传授的角色。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("可以将连锁技能#b#e野性狂怒#n#k传授给账号内的其他角色。现在要指定被传授的角色吗？");
    } else if (status == 1) {
        if (qm.hasSkill(30010241)) { //30010241 - 野性狂怒 - 由于愤怒，伤害增加。
            qm.sendLinkSkillWindow(30010241);
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
