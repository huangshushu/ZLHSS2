/* Cygnus revamp
	Noblesse tutorial
	Kinu + Hawkeye (1102006+1101006)
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("首先針對耶雷弗來做個介紹。耶雷弗是在女皇的魔法籠罩之下的漂浮島。所以雖然飄浮在這裡，但是卻扮演著楓之谷往返之船的角色。p.");
	} else if (status == 1) {
      qm.sendNextPrev("現在的狀況不太好，留在這裡注視著黑魔法師的一舉一動，同時培養對抗他的力量。");
	} else if (status == 2) {
      qm.sendNextPrev("是，還有…皇家騎士團分為5個組織，分別可以使用光、火、風、雷電、黑暗的精靈的力量。由5名的騎士團長帶領著皇家騎士團…？?\r\n不是啊，鷹眼。怎麼又來我的課程了呢？");
	} else if (status == 3) {
	  qm.sendNextPrevS("當然是很好奇新進的騎士團員有沒有好好接受教育啊。不是因為很憧憬雷電騎士團長鷹眼，才想成為騎士的嗎？.", 1,0,1101007);
	} else if (status == 4) {
	  qm.sendNextPrev("鷹眼，別為難他了。");
	} else if (status == 5) {
	  qm.sendNextPrevS("奇努，首先好像應該向新進騎士團員介紹這個身體才對啊。從打招呼開始吧，如何？", 1,0,1101007);
	} else if (status == 6) {
	  qm.sendNextPrev("鷹眼，我們打了招呼就要走了#h0#.這位是雷電之騎士團長，鷹眼。先打聲招呼吧。");
	} else if (status == 7) {
	  qm.forceStartQuest();
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
	    qm.sendNext("我是雷電之騎士團長，叫做鷹眼。聽過我的名字嗎？這個身體非常活躍，這一點你是知道的吧？");
	} else if (status == 1) {
	    qm.sendNextPrevS("嗯？不，我還…", 3);
	} else if (status == 2) {
	    qm.sendNextPrev("不要不好意思了。見到平常嚮往的對象，會不知所措是當然的。你對雷電之騎士、閃雷悍將感興趣嗎？對了，你說你叫做什麼呢？");	
	} else if (status == 3) {
	    qm.sendNextPrevS("鷹眼，新騎士團候補生名字是#h0#。現在打過招呼了，走吧。", 1,0,1102006);
	} else if (status == 4) {
	    qm.sendNextPrev("那個我日後會慢慢教育的。那麼請慢走吧。");
	} else if (status == 5) {
	    qm.sendNextPrevS("剛剛說到哪了呢？新進騎士團員教育結束後，會受到任命成為修練騎士，到時候也能夠決定自己未來的前途。光之騎士、火之騎士、風之騎士、黑暗之騎士、雷電之騎士…選擇一條適合你自己的道路。", 1,0,1102006);
	} else if (status == 6) {
	    qm.sendNextPrevS("騎士團的任務就是守護女皇，打敗黑魔法師維持楓之谷的和平。除此之外，還有跟身為黑魔法師追蹤者的黑色翅膀打交道的任務、情報蒐集…等，很多的事情要做呢。", 1,0,1102006);	
	} else if (status == 7) {
	    qm.sendNextPrevS("今天的課程就到這裡。下一堂課是…你去問問奇慕吧。", 1,0,1102006);	
    } else if (status == 8) {
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}
