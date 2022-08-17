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
		qm.sendNext("現在試著實地使用技能攻擊怪物吧。將技能登錄到快捷欄的話，使用起來會更方便。將要使用的技能以滑鼠拖曳到快捷欄上就可以了。");
	} else if (status == 1) {	
        qm.forceStartQuest();	
        qm.forceCompleteQuest();
        qm.warp(130030106);		
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
