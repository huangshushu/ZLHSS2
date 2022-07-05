/* Dawnveil
    [Root Abyss] An Urgent Summons
	Neinheart
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("#b#h ##k! Your presence is needed in Ereve right away. We haven't a second to lose.");
    } else if (status == 1) {	   
        qm.sendNext("I will transport you here.");
    } else if (status == 2) {
		qm.warp(913080000,0);
		qm.forceStartQuest();
		qm.dispose();
	}
}
