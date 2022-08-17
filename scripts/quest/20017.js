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
	    qm.sendNext("嗯，没有什么可担心的。这将是你的人水平变得轻而易举。鼓起你的勇气，让我知道当你准备好.");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("嗯？ #p1101002#送你，是吧？您必须是最近加入新天鹅骑士的新手。欢迎，并且很高兴见到你！ 我的名字是#p1102000#. I''m的培训讲师。当然，我不是一个人的，你可以告诉.");
    } else if (status == 1) {
	qm.sendNextPrev("我们被称为骑士。 你看过#p1101001# 谁是慈禧“的一面的时候，是不是？ 骑士是同一家庭的#p1101001#, 但我们属于不同的类型。当然，你有没有看到我们任何人，因为我们只生活在圣地。你会习惯骑士在任何时间。");
    } else if (status == 2) {
	qm.sendNextPrev("哦，你可知道，有在圣地没有怪物？甚至没有一个邪恶的点点敢闯圣地。但是，你不要担心。您可以通过创建虚幻的怪物训练#p1101001# 叫咪咪的.");
    } else if (status == 3) {
	qm.askAcceptDecline("你似乎准备！看着你所取得的成就，我认为你应该直接进入狩猎更先进的米米斯。你可以去狩猎#b15只#r#o100122#它就在#m130010100##k#k.使用左边的门到达#b修炼森林II#k.");
    } else if (status == 4) {
//	qm.summonMsg(12);
	qm.forceStartQuest(20020);
	qm.forceCompleteQuest(20100);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
}