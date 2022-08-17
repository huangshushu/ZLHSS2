/* Dawnveil
    Enter Ellinel Fairy Academy Theme Dungeon
	Chase Tosh the Fairy
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNextS("Enjoy your adventure.",5);
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendAcceptDecline("Chase after #bTosh the Fairy#k.\r\n\r\n#b(Must be in a party (1 - 6 people) / Level: At least 30)");
	} else if (status == 1) {
	    cm.warp(101073010,0);
        cm.dispose();
    }
  }
