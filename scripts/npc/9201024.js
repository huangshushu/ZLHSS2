/*
	NPC Name: 		Hera
	Map(s): 		Towns
	Description: 		Wedding Village Entrance
*/

var status = -1;

function start() {
    cm.sendSimple("Hello there~  How can I help you with on this lovely day in Maple World? \n\r #b#L0# I would like to go to Wedding village.#l \n\r #L1# I am married and I want my Chair of Love!!! #l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 1 && mode == 0) {
        cm.sendOk("Are you really going to miss this incredible chance? It is a very beautiful place to be. Probably you have yet to meet someone you love? Exactly it is. If you are falling in love with someone then it is impossible to ignore this lovely news.");
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        switch (selection) {
            case 0:
                cm.sendNext("Oh! What a wonderful day! The world is so beautiful~! The world seems to be full of love, isn't it? I can feel the spirit of love filling up the wedding village even from here~!");
                break;
            case 1:
	        var marr = cm.getQuestRecord(160001);
	        var data = marr.getCustomData();
	        if (data == null) {
		    marr.setCustomData("0");
	            data = "0";
	        }
		if (cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
                    cm.sendOk("I am truly sorry my dear.  This Chair of Love is a special gift designed only for the married ones.  You might want to get married first.");
		} else if (cm.canHold(cm.isGMS() ? 3012015 : 3012000,1) && !cm.haveItem(cm.isGMS() ? 3012015 : 3012000,1)) {
		    cm.gainItem(cm.isGMS() ? 3012015 : 3012000,1);
		} else {
		    cm.sendOk("Please make space or you already have this chair.");
		}
                cm.dispose();
                break;
        }
    } else if (status == 1) {
        cm.sendYesNo("Have you ever been to the wedding village? It is an amazing place where the love is overloading. Loving couple can get married there, How romantic it is? If you want to be there, I'll show you the way.");
    } else if (status == 2) {
        cm.sendNext("You made a right decision! You can feel the spirit of love at the wedding village to the fullest. When you want to come back, your destination will be here so don't worry about it.");
    } else if (status == 3) {
        cm.saveLocation("AMORIA");
        cm.warp(680000000, 0);
        cm.dispose();
    }
}