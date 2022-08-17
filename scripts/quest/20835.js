/* Cygnus revamp
	Noblesse tutorial
	Neinheart + other chief knights
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("你好，#b#h0##k。歡迎你加入皇家騎士團。我的名字是#p1101002#波恩魯賓司坦。是女皇的策士。以後會常常見面的，應該會要記著名字的。呼呼…");
	} else if (status == 1) {
	    qm.sendNextPrev("但是，這裡是怎麼回事呢？#h0#？現在好像正在認真修練呢。");
	} else if (status == 2) {
      qm.sendNextPrevS("啊，我…那個…鳥忽然地出現，我就跟著來看看…");
	} else if (status == 3) {
	   qm.sendNextPrevS("哈哈哈哈。#h0#，比看起來的樣子還要有幽默感啊。是無法忘懷剛剛見到我的帥氣模樣才跟著來的嗎？", 1,0,1101007);
	} else if (status == 4) {
        qm.sendNextPrevS("鬧哄哄的呢。和女皇的會面就到此為止，回去吧.", 1,0,1101006);
	} else if (status == 5) {
	    qm.sendNextPrevS("#h0#，可以見到你真的太高興了。那麼，下次再見了。希望你能成為勇敢又賢明的騎士…，", 1,0,1404008);
	} else if (status == 6) {
        qm.sendNextPrev("雖說你是騎士團的ㄧ員，但也還不是騎士。連修練騎士都還不是，就更別說正式的騎士了。但是你覺得就這麼回去的話，也沒關係嗎？只要再更集中精神練習就可以了。");
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
	    qm.sendNext("不用太在意那因哈特的話。#h0#，在受命擔任修練騎士之前，不只是和了不起的鷹眼，還有皇家騎士團長們見面的感覺如何啊？要不要給你一點自我介紹的時間啊？#h0#，自我介紹吧~！");
	} else if (status == 1) {
	    qm.sendNextPrevS("你好，我是#h0#。受女皇之命來到這裡。想要成為一名勇敢的騎士，打敗黑魔法師，守護楓之谷！");
	} else if (status == 2) {
	    qm.sendNextPrevS("是個夢想非常堅定的小子啊。希望你能夠成為一個了解自己的事並且有能力解決的人。不要惹那些麻煩的事端。我是黑暗騎士團長，伊卡勒特。", 1,0,1101006);	
	} else if (status == 3) {
	    qm.sendNextPrevS("我是火之騎士團長，奧茲。歡迎你來到耶雷弗。 但你是從哪裡來的呢？", 1,0,1102109);
	} else if (status == 4) {
	    qm.sendNextPrevS("奧茲，好奇的事情可真多啊。從你身上感覺到了舒服的風呢。我是風之騎士團長，伊麗娜。祝你好運。", 1,0,1102110);
	} else if (status == 5) {
	    qm.sendNextPrevS("我是光之騎士團長，米哈逸。不要太鬆懈，要努力進行自我修練。要有身為騎士團的驕傲。#h0#，遲早會再見面的，打招呼之類的話就到這裡…你快進去吧。", 1,0,1101003);
	} else if (status == 6) {
	    qm.sendNextPrev("知道了，米哈逸。#h0#。那麼，因為有事要忙，就不聊了。我們走吧?認真修練吧。");	
	} else if (status == 7) {
	  qm.forceCompleteQuest();
	  qm.dispose();		
	}
  }
}
