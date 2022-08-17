/* Cygnus revamp
	Noblesse tutorial
	Kia
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("#b(撲通撲通…)#k");
	} else if (status == 1) {
	    qm.sendNextPrev("…啊！嚇我一跳！精神不好，誰來了也不知道。你就是#p1102006#說的那個貴族嗎？很高興見到你！我是#p1102007#。那麼要進行考驗了嗎？這不會很難的。只要記得到目前為止所學過的東西就沒問題了。");	
	} else if (status == 2) {
	    qm.sendNextPrev("考試很簡單。看到那?的箱子了嗎？破壞箱子的話怪物就會跑出來，擊敗怪物的話就可以得到考試的證書了。");
	} else if (status == 3) {
	    qm.sendNextPrev("嗯？破壞箱子的方法是？啊，用一般攻擊就可以破壞箱子了。..#b以一般攻擊#k破壞箱子， #b對付怪物則是用技能攻擊#k比較好的樣子？那麼就蒐集5個試煉的印記吧。");	
	} else if (status == 4) {	
        qm.forceStartQuest();
		qm.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/cygnusTutorial/9");		
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
	    qm.sendNext("你拿了3個試煉的印記來嗎");
	} else if (status == 1) {
	    qm.sendNextPrev("呵呵?我聽說了。考試合格了。我現在要給你的東西，是我親手打造的椅子。好好使用吧。疲勞的時候坐著休息是最好的了。HP會快速恢復。放在道具欄的裝飾欄裡，去確認一下吧。");
	} else if (status == 2) {
      qm.gainItem(3010060,1);
	  qm.removeAll(4033670);
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}
