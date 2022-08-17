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
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("你似乎并不遵循指示良好。快来看看我，当你准备好.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("现在，您将能够穿透蘑菇森林的带刺的藤蔓障碍，但在此之前，#b民政事务部长#k希望有一个词你。请立刻去看他.");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("Good luck.");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendOk("我一直在你的神话般的工作跟上。我知道，你已经成功创建了#b杀手孢菇#k, 它穿过森林的难以逾越的障碍。祝贺!");
    } else if (status == 1) {
        qm.gainExp(2500);
        qm.sendOk("现在的问题是要弄清楚如何进入城堡.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}