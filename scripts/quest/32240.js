/* RED 1st impact
    The Explorer Book and A Maple Leaf
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 3) {
		    qm.sendNextS("Eh? No? Why? What about your adventures? Your memories? My entertainment?",4,9010010);//not sure
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNextS("Hello #b#h0##k!\r\nI'm #bCassandra#k.",1,9010010);
	} else if (status == 1) {
	    qm.sendNextPrevS("Why introduce ourselves now? Don't ask stupid questions.",4);//not sure
	} else if (status == 2) {
	    qm.sendNextPrevS("I came to give you a gift. It's an #bExplorer Book#k, kinda like a diary. In this, you can record every exciting adventure you'll ever have! And then I can read about it later!",4);//not sure
	} else if (status == 3) {
	    qm.sendYesNoS("Why introduce ourselves now? Don't ask stupid questions.",16);//not sure
	} else if (status == 4) {
	    qm.sendNextS("Let's see... I know there's a book that's just perfect for a Adventurer like you...",4);//not sure
	} else if (status == 5) {
	    qm.sendNextPrevS("Found it!  Here. Take a good look at it after I take off.",4);//not sure
	} else if (status == 6) {
	    qm.sendPrevS("Well, have a blast in your adventures!",4);//not sure
	} else if (status == 7) {
        qm.forceStartQuest();
		qm.gainItem(4460000,1);
	    qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("An #bExplorer Book#k? So, I can record all my adventures here?",16);
	} else if (status == 1) {
	    qm.sendNextPrevS("I guess it's been a while since I first started my journey. Looking back, I...",16);//not sure
	} else if (status == 3) {
	    qm.sendNextPrevS("#b#L0#Trained hard to level up.#l\r\n#L1#Worked hard to make money.#l\r\n#L2#Partied hard to make new friends.#l\r\n#L3#Didn't do much at all.#l",4);//not sure
	} else if (status == 4) {
	    qm.sendNextS("I trained myself hard and leveled up a lot. Though I still have a long way to go, I am definitely a lot stronger than before.",16);//not sure
	} else if (status == 5) {
	    qm.sendNextPrevS("Oh well, the past is past. I should focus on future. New adventures! New horizons! ...Huh?",16);//not sure
	} else if (status == 6) {
        qm.showMapleLeafScene();
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.gainItem(2040804,1);
	    qm.dispose();
	}
}