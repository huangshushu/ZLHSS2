/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.sendOk("没有太多的时间。请快点.");
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.sendAcceptDecline("我已经告诉我们#b内政部长#k 的能力。 请立即去拜访他.");
    if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("拯救我们的王国！ 我们相信你!");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0)
            status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0)
        qm.forceCompleteQuest();
    qm.gainExp(4000);
    qm.dispose();
}

	