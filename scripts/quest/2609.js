/* 
	NPC Name: 		Lady syl
	Map(s): 		103050101
	Description: 		Quest - Becoming a Blade Specialist 2
*/
var status = -1;
function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1){
	    status++;
	}else{
	    status--;
	}
        if (qm.getQuestStatus(2608)==2){
            qm.forceStartQuest();
            qm.dispose();
            status=-2;
            mode=-2;
            return;
        }

	if (status == 2) {
	    qm.forceCompleteQuest();
            qm.dispose();
        }
    }
    qm.dispose();
}

function end(mode, type, selection) {
qm.forceCompleteQuest();
qm.dispose();
}
