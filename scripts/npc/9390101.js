/* Dawnveil
    enterPortal
	??????
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	    status++;
	 else
	    status--;
    if (status == 0) {
	    cm.sendNextS("Insignificant child! Are you deaf to the fury of the old world? Can you not hear the roars of pain and resentment that echo around you? Discard whatever foot touched the corruption of this soil, and escape while you can. THe Heart Tree's corruption touches the very ground you stand upon.",4);
	} else if (status == 1) {	
	    cm.sendYesNoS("What the heck was that?! I feel like someone was yelling inside my bones. Should I keep going?",16);
	} else if (status == 2) {
	    cm.warp(863000100,0);
        cm.dispose();
    }
}