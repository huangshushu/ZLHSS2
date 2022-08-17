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
	    qm.sendNext("嗯，你永远不会知道，除非你试试。这蜥蜴是大到足以成为枫树的信不信由你。它可能吃干草");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("会不会蜥蜴享受#b干草屈指可数#k,像牛？ 有很多的#b干草堆#k 附近，所以尽量喂养它的.");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.evanTutorial("UI/tutorial/evan/12/0", 1);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("哦，我太饿了！你有没有找到好东西给我吃，主人？嗯...这看起来像......草。我真的可以吃吗？好主人，我相信你.");
    } else if (status == 1) {
	qm.sendOk("Okay, here goes!");
    } else if (status == 2) {
	qm.gainExp(800);
	qm.gainItem(4032452, -3);
	qm.sendOk("呸！ 这是什么？这是又苦又强悍！你确定这是可以食用？师父，你吃了！我不能吃这个！我找别的东西!");
	qm.forceCompleteQuest();
	qm.dispose();
    }
}