/* 
 * create by Vietnamms_namthemano1
 * q20810 npc cygnus
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;

	if (status == 0) {
	    qm.sendYesNo("Mihile, cau thuc su manh me. Cau da san sang nhan suc manh moi roi chu?");
	} else if (status==1){
            qm.sendNext("Hay su dung suc manh 1 cach thong minh va giup do nhung nguoi khac nua nhe!");
            qm.forceCompleteQuest();
            qm.changeJob(5110);
        }
        
    }
}