/* Dawnveil
    [Job Advancement] Thieves of Kerning City
	Dark Lord
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
        qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

    if (status == 0) {
	    qm.sendYesNo("Welcome to the Thieves' Hideout. Only those who are invited will ever find it. Try not to get lost on the way out. So, are you ready to become a Thief?");
	} else if (status == 1) {
	    qm.sendNext("With this, you have become a Thief. Since you can use Thief skills now, open your Skill windows and have a look. As you level up, you will be able to learn more skills.");
	} else if (status == 2) {
		qm.sendNextPrev("But skills aren't enough, right? A true Thief must have the stats to match! A Thief uses LUK as the main stat and DEX as the secondary stat. If you don't know how to raise stats, just use #bAuto-Assign#k.");
	} else if (status == 3) {
	   	qm.sendNextPrev("Oh, I gave you a little gift, too. I expanded a few slots in your Equip and ETC item tabs. Bigger inventory, better life, I always say.");
	} else if (status == 4) {
	    qm.sendNextPrev("Now a word of warning. Everyone loses some of their earned EXP when they fall in battle. Be careful. You don't want to lost anything you worked to get, eh?");
	} else if (status == 5) {
	    qm.sendNextPrev("Right, that's it. Take the equipment I gave you, and use it to train your skills as a Thief.");
	} else if (status == 6) {
	    qm.resetStats(4, 4, 4, 25);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(400);
		qm.gainSp(3);
	    qm.gainItem(1332063,1);
	    qm.gainItem(1472000,1);
	    qm.gainItem(2070015, 500);
		qm.forceCompleteQuest();
		qm.dispose();
	    }
	}
}	