/* Dawnveil
    Enter Ellinel Fairy Academy Theme Dungeon
	Fanzy
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
	    cm.sendYesNoS("Would you like to enter #b#e[Theme Dungeon Ellinel Fairy Academy]#n#k?", 4);
	} else if (status == 1) {
	  if (cm.getQuestStatus(32102)==0){
	    cm.warp(101070000,0);
		cm.forceStartQuest(32102);
	} else
		cm.warp(101070000,0);
        cm.dispose();
    }
  }
