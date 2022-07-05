/* Dawnveil
	The 5 paths 
	Mai
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
        qm.sendAcceptDecline("Hmm, you're making good progress with your leveling. Have you decided on which job you want to take? You could be a Warrior with great strength and high HP, a Magician with many spells, a Bowman that shoots arrows from afar, a Thief that uses quick, sneaky attacks, or a Pirate with all kinds of flashy chain skills... There are so many!");
		qm.startQuest(1400);
	} else if (status == 1) {
        qm.sendSimple("If you go to Victoria Island, you can advance to the job of your choice by going to the right Job Instructor. But before that, lemme know which one you're interested in, and I'll send #bthem#k a letter of recommendation. That will make it easier for you to advance! So, which job will you choose?\r\n#b#L0#I want to be a mighty Warrior!#l\r\n#b#L1#I want to be a mystical Magician!#l\r\n#b#L2#I want to be a sharp-shooting Bowman!#l\r\n#b#L3#I want to be a sneaky Thief!#l\r\n#b#L4#I want to be a swashbuckling Pirate!#l");
    } else if (status == 2) {
        sel = selection;
	if (selection == 0) {
        qm.sendNext("A Warrior, huh? Boy, you're going to get really strong! They can take tons of damage, and dish plenty out, too. Okay, I'll send my recommendation to #bDances with Balrog#k, the Warrior Job Instructor.");
        } else if (selection == 1) {
		qm.sendNext("You want to be a Magician? They sure are mysterious! Their magic is super powerful and has all kind of effects. Just don't get hit...Magicians aren't known for their endurance! Okay, I'll send my recommendation to #bGrendel the Really Old#k, the Magician Job Instructor.");
        } else if (selection == 2) {
		qm.sendNext("You wanna be a Bowman? I hope you have really good aim! With their great dexterity, they have no problem avoiding attacks and firing off plenty of their own. Okay, I'll send my recommendation to #bAthena Pierce#k, the Bowman Job Instructor.");
        } else if (selection == 3) {
		qm.sendNext("Going to be a Thief, are you? They're so quick and sneaky, their enemies don't see them coming until it's too late. They're so cool! Okay, I'll send my recommendation letter to #bDark Lord#k, the Thief Job Instructor.");
        } else if (selection == 4) {
		qm.sendNext("A Pirate? Yarr! Whether in a gunfight or a hand-to-hand brawl, Pirates fight with style! I think you're up to the challenge. Okay, I'll send my recommendation to #bKyrin#k, the Pirate Job Instructor.");
        }
    } else if (status == 3) {
	    if (sel == 0) {
		qm.sendNextPrev("He will contact when you reach Lv. 10. Become a great Warrior!");
		qm.forceStartQuest(1401);
	    qm.forceCompleteQuest(1400);
		qm.dispose();
	    } else if (sel == 1) {
		qm.sendNext("You know that Magicians have their Job Advancements earlier than other jobs, right? Grendel the Really Old will contact you once you reach Lv. 8. Become an amazing Magician!");
		qm.forceStartQuest(1402);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 2) {
		qm.sendNext("She'll contact you once you reach #bLv. 10#k. I hope you become a magnificent Bowman!");
		qm.forceStartQuest(1403);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 3) {
		qm.sendNext("If you get up to #bLv. 10#k, he'll contact you. Become a great Thief, got it?");
		qm.forceStartQuest(1404);
		qm.forceCompleteQuest(1400);
		qm.dispose();
		} else if (sel == 4) {
		qm.sendNext("She'll contact you once you reach #bLv. 10#k. Become a masterful Pirate!");
		qm.forceStartQuest(1405);
		qm.forceCompleteQuest(1400);
		qm.dispose();
	   }
	    qm.dispose();
    }
}