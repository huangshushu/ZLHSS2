/* Dawnveil
    Futuroid
	Gaga
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
		    cm.sendNextS("Bummer. Let me know when you change your mind.",5,9000021);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
	    cm.sendYesNoS("I'm ready to blow the world away with my new invention! Are you ready to make a Futuroid?", 5,9000021);
	} else if (status == 1) {	
	    cm.sendNextS("You don't have enough parts. Come back with more parts!", 5,9000021);
        cm.dispose();
    }
}