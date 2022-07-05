/* 
 * create by Vietnamms_namthemano1
 * q20411 npc 
*/
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
        
	if (status == 0) {
            if (qm.getQuestStatus(20411)!=1 && qm.getQuestStatus(20411)!=2) {
                qm.warp(913070100,1);
                qm.forceStartQuest();
                qm.dispose();
                mode=-1;
                status=-1;
                return;
            }
	    if (qm.getQuestStatus(20411)==1) qm.sendYesNo("Mihile, cau thuc su manh me. Cau da san sang nhan suc manh moi roi chu?");
	} else if (status==1){
            qm.sendNext("Hay su dung suc manh 1 cach thong minh va giup do nhung nguoi khac nua nhe!");
            qm.forceCompleteQuest();
            qm.changeJob(5112);
        }
        
    }
}