/* Cygnus revamp
	Noblesse tutorial
	Cygnus
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("你好。是為了成為騎士而來的那位啊");
	} else if (status == 1) {
	    qm.sendNextPrevS("是，我叫做#h0#。是第一次來到這個庭園。看來耶雷弗有很多美麗的地方啊。");
	} else if (status == 2) {
      qm.sendNextPrev("耶雷弗可是個和平又美麗的地方呢。訓練太困難了，你不用做嗎？");
	} else if (status == 3) {
	    qm.sendNextPrevS("是，雖然還有很多不足的地方，但是即使面臨到怎樣的困難，我也會堅定的！好！我會戰勝這些，成為一個了不起的騎士的。所以，楓之谷的和平就由我來守護了。應該…");
	} else if (status == 4) {
        qm.sendNextPrev("(淺淺的微笑) 即使是再怎麼堅困的道路也是必然要走的道路啊。現在是大家要加把勁的時候了。");
	} else if (status == 5) {
	    qm.sendNextPrevS("但是，是誰呢？照這個打扮看來應該不是皇家騎士團…");
	} else if (status == 6) {
        qm.sendNextPrev("是，我是…");
	} else if (status == 7) {	
        qm.forceStartQuest();    
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
