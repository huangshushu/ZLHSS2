/* Gritto
	Leafre : Forest of the Priest (240010501)
	4th Job Advancer/Quests.
        Made by TheGM
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
            qm.sendNext("Contless Warriors wander Maple World, but only a few are worthy of meeting with me. You have obtained incredible strength... But do not confuse strength with greatness.");
        }else if(status == 1) {
            qm.sendNextPrev("The #b4th Job Advancement#k will grant you even greater power, but it also comes with new responsibility. You must use your strength for justice. It will be your duty to #blead Maple World into the future.#k");
        }else if(status == 2) {
            qm.sendNextPrev("Perhaps you've travelled the world, carefree, only having fun. Now it's time to become #ba hero#k and help those around you.");
        }else if(status == 3) {
            qm.sendAcceptDecline("Now, it is time for your test. #rGriffey#k and #rManon#k have the power to recognize a true hero. Your task is to defeat them and obtain #b The Heroic Pentagon#k and #bThe Heroic Star.#k");
        }else if(status == 4) {
            qm.forceStartQuest();
            qm.sendOk("Heroes are not born, but made. What can you do to help Maple World?");
            qm.dispose();
        }
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
            qm.sendYesNo("You proved that everything you need to be a true hero exists within yourself. There is nothing left for you to prove. Are you ready to realize your full potential?");
        }else if(status == 1) {
            if (qm.haveItem(4031511, 1) || qm.haveItem(4031512, 1) ) {
                qm.removeAll(4031511);//Heroic Pentagon
                qm.removeAll(4031512);//Heroic Star
                qm.gainItem(1142110, 1);//Master Adventure medal
                qm.sendNext("You started your journey as a simple adventurer... But you have grown so much since then. You possess great strength, willpower, and courage.");
                if(qm.getJob() == 211){
                    qm.changeJob(212);
                }else if (qm.getJob() == 221){
                    qm.changeJob(222);
                }else if (qm.getJob() == 231){
                    qm.changeJob(232);
                }else{
                    qm.sendOk("Something went wrong, please report it.");
                    qm.dispose();
                }
				qm.gainSp(2);
                qm.forceCompleteQuest();
            }
	}else if(status == 2){
            qm.sendNextPrev("If one who possesses all of these qualities cannot be called a hero, then who can?");
        }else if (status == 3){
            qm.sendOk("A hero is not born, but is created through struggle. Accept your destiny, and lead Maple World to a brighter future.");
            qm.dispose();
        }else{
            qm.sendOk("Please go find The Heroic Pentagon & The Heroic Star.");
            qm.dispose();
        }
    }
}