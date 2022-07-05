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
	if (mode == 1)
	    status++;
	else
	    status--;
        if (qm.getQuestStatus(2642)!=1 && qm.getQuestStatus(2642)!=2){
            qm.sendOk("Head to Sleepywood and defeat 99 #o6230600# #FMob/6230600.img/stand/0#");
            qm.forceStartQuest();
            qm.dispose();
            status=-2;
            mode=-2;
            return;
        }
	if (status == 0) {
	    qm.forceCompleteQuest();
            qm.changeJob(432);
            qm.dispose();
        }
    }
}