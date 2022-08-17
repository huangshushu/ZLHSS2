/* Cygnus revamp
	Noblesse tutorial
	Kiku
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("#h0#，在這期間果然很認真地進行修練啊。跟第一次見面的時候比起來，的確變強了很多~其他的評價似乎也很良好…現在已經有足夠的資格可以成為修練騎士了吧？..女皇在耶雷弗的中心，往那邊去就可以了。跟著箭頭指標走吧。");
	} else if (status == 1) {
	    qm.sendNextPrev("那麼，希望你一定要成為帥氣的騎士…");
	} else if (status == 2) {
        qm.forceStartQuest();	
                qm.getLevelup();
                qm.getLevelup();
                qm.getLevelup(); 
                qm.getLevelup();
                qm.getLevelup();
                qm.getLevelup();
                qm.getLevelup();
                qm.getLevelup();
                qm.getLevelup();
		//qm.gainExp(3348);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
