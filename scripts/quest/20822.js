/* Cygnus revamp
	Noblesse tutorial
	Kiku
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	  qm.sendYesNo("你也知道，我们冒险骑士团是冒险岛世界的女皇希纳斯为了对抗黑魔法师而建立的。我们忠于女皇，正在为了阻止即将醒来的黑魔法师而积蓄力量。我看你好像需要大量的修炼才行……不过别担心，我们这些教官会把你打造成一个合格的骑士。准备好了吗？");
	} else if (status == 1) {
	  qm.forceStartQuest();
	  qm.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/cygnusTutorial/1");
	  qm.dispose();
    }
  }
function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNextPrev("你去和奇库打过招呼了吗？#h0#，我们这些教官会让你成为一名优秀的骑士。");
	} else if (status == 1) {
	    qm.sendNextPrev("欢迎会差不多该结束了，让我们开始修炼吧。做好心理准备了吗？");
	} else if (status == 2) {
	    qm.forceCompleteQuest();
		qm.warp(130030101,0);
	    qm.dispose();
	}
  }
}
