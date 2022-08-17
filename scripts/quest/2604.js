/* Cygnus revamp
	Dualblade tutorial
	Ryden
    Made by Daenerys
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("How interesting. New recruit, you didn't even bat an eyelash at Shibo's insults... It was all a setup, you see. We wanted to see how you would react. You did quite well.");
	} else if (status == 1) {
      qm.sendNextPrev("You have a knack for our Dual Blade ways. #bI recommend you for the special mission!");
    } else if (status == 2) {	   
        qm.sendNextPrev("I can't tell you what kind of mission it is. That's up to #bLady Syl#k, IF she agrees that you're worthy. If not, you'll train the same way as everyone else. So, try not to tick Lady Syl off.");	
	} else if (status == 3) {	
	    qm.sendYesNo("When you accept, I'll send you to Lady Syl.");	
	} else if (status == 4) {		
		qm.warp(103050101);
		qm.removeNpc(103050910,1057001);
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
