/* Dawnveil
    Cutscene Mole King
	Woonie, Tracy, Mole king Lair
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
	    cm.sendNextS("I'm scared... We were only rehearsing our play...",5,1500031);
	else if (chat == 1)	
	    cm.sendNextPrevS("Don't worry, Woonie... Everything will be fine! Someone will come and save us... I think...",5,1500032);
	else if (chat == 2)
        cm.sendNextPrevS("What's this? Little lady fairies in the land of the Mole King? What brave little morsels you must be!",5);
	else if (chat == 3)
        cm.sendNextPrevS("Please let us go. I don't want to be mole chow!",5,1500032);
	else if (chat == 4)
        cm.sendNextPrevS("Oh, I won't eat you! I'll keep you around to be my brides! When you're old enough, obviously, we moles have a very strong sense of chivalry",5);	
	else if (chat == 5)
        cm.sendNextS("What?! GROSS!",5,1500031);
	else if (chat == 6)
	    cm.sendNextPrevS("I am sorry if I offended you, m'lady, but I'm not spending my days under the dank dark earth! Once I've liberated all these Mandrakies from your oppressive fairy regime, I'll be the ruler up here, and you will come to love me... as long as that's okay with you.",5);
	else if (chat == 7)
	     cm.sendNextPrevS("Okay, somebody HAS to save us.",5,1500032);
    else if (chat == 8) {	
		cm.introEnableUI(0);
        cm.introDisableUI(false);
		cm.warp(101073100,3);	
        cm.dispose();
    }
}
