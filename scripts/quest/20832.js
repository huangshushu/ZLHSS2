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
	  qm.sendNext("看來好像已經熟悉了基本攻擊，這次來告訴你比較進階的攻擊方式。");
	} else if (status == 1) {
      qm.sendNextPrevS("#h0#，只是練習而已？繼續認真做。奇慕，奇加暫時說個話…", 1,0,1102100);
	} else if (status == 2) {
      qm.sendNextPrev("#h0#，稍微休息一下吧。");	
	} else if (status == 3) {
	  qm.sendNextPrevS("(嘀嘀咕咕)", 1,0,1102000);
	} else if (status == 4) {
      qm.sendNextPrev("!!!");	
    } else if (status == 5) {
	  qm.sendNextPrevS("...", 1,0,1102004);
	} else if (status == 6) {
      qm.sendNextPrev("#h0#，在這裡稍等一下。我馬上就回來。不管怎樣都不要獨自行動");
	} else if (status == 7)  {
	  qm.spawnNpcForPlayer(1102113, -824, -88);
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
