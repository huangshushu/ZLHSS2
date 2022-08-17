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
        if (status == 2) {
            qm.sendNext("你默默不明白这是怎么回事？我会，如果你跟我一次再次解释给你听.");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("#t4032315#... #r这个木偶正在发出奇怪的噪音#k. 你不能用你的耳朵听到，当然，因为它只能听到 #o1210102#. 我相信这是噪音改变了个性的#o1210102#.");
    } else if (status == 1) {
        qm.askAcceptDecline("#o1210102# 已经受到噪音的影响已变得愤世嫉俗。 他们已经开始与未受影响的人打 #o1210102#, 这已经使所有 #o1210102# 准备战斗. #b的 所有这些的原因 改变在 的 #o1210102# 是这个木偶#k! 你明白吗?");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.sendNextS("我不知道什么触发了这个 的 第一名. 的是没有办法这个木偶是自然创造的，这意味着有人计划这个。 我应该留意的 #o1210102#.", 9);
    } else if (status == 3) {
        qm.sendPrevS("#b(你能够找出导致的原因 的 改变在 的 #o1210102#.你应该报告#p1002104#并提供 你的信息.)#k", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}