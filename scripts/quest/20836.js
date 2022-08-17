/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("原來在這裡阿。找了好久。叫你不要亂跑，這次新進訓練生當中可真多會鬧事的。那麼，我們回到練武場，我來教你技能攻擊的方法吧。");
	} else if (status == 1) {	
        qm.forceStartQuest();   
        qm.warp(130030105);		
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
	    qm.sendNext("剛剛教你的東西應該沒忘了吧？按壓Ctr鍵是攻擊怪物的一般攻擊。好像是沒有忘記的樣子，那就繼續教你下一個階段吧。..準備好了嗎？");
	} else if (status == 1) {
	    qm.sendNextPrev("這次是技能攻擊。可以比一般攻擊更強勁地打擊敵人。按壓快捷鍵K開啟技能欄位看看。..你修練得更強的話，就可以使用更多種的技能了，所以認真修練是很重要的啊。");
	} else if (status == 2) {
	    qm.forceCompleteQuest();
	    qm.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/cygnusTutorial/6");	
	    qm.dispose();		
	}
  }
}
