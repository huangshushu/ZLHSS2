/* Dawnveil
    Evolving Tutorial 2
	Orchid + Gelimer
    Made by Daenerys
*/
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
	    cm.sendNextPrevS("Lotus? Lotus! Are you awake?!", 1,0,9075005);
	else if (chat == 1)	
	    cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 2)
        cm.sendNextPrevS("Oh, brother, I've missed you so much! You've been napping all this time and I've had to blow up SO many people.", 1,0,9075005);
	else if (chat == 3)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 4)
        cm.sendNextPrevS("Now we can be together again! We can take over this whole planet of stupid monkeys and rule it like we're supposed to!", 1,0,9075005);
	else if (chat == 5)
        cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 6)
	    cm.sendNextPrevS("Lotus? Can you hear me? Remember your sister, Orchid?", 1,0,9075005);
	else if (chat == 7)
	     cm.sendNextPrevS("......", 1,0,9075001);
	else if (chat == 8)
	     cm.sendNextPrevS("I thought you said he was waking up, Gelimer! If you scrambled his brain, I'm going to turn you inside out!", 1,0,9075005);
	else if (chat == 9)
	     cm.sendNextPrevS("I assure you, Commander Orchid. Lotus is perfectly fine. Do you wish to see? Here... Execute Program Alpha-97.",1);
    else if (chat == 10) {	
		cm.introEnableUI(0);
        cm.introDisableUI(false);
	    cm.warp(310010000,0);
        cm.forceCompleteQuest(1081);		
        cm.dispose();
    }
}

