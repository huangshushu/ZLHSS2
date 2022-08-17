/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	  qm.sendNext("#h0#,，為表達歡迎你來到耶雷弗之意，送上一個小禮物給你。套用裝備的方法很簡單。請按壓#b#e快捷鍵I#k#n。就會開啟您的道具欄視窗。稍等一下，你是個急性子呢？我的話說完以後你試試看吧。帽子還在我手裡。透過快捷鍵 I開啟道具欄視窗後，雙擊帽子，就可以套用該裝備了。現在要試試看了嗎？");
	} else if (status == 1) {
	  qm.forceStartQuest();
	  qm.TutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/cygnusTutorial/5");
	  qm.gainItem(1003769, 1);
	  qm.dispose();
	} else if  (status == 2)  {
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
		qm.sendOk("I found Kinu in a pile of books. He'll tell you what you need to know, or possibly just put you to sleep. Or both.");
	    qm.dispose();
	} else if (status == 1) {
	    qm.dispose();
	}
  }
}
