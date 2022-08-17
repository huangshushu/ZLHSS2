function start() {
    cm.sendSimple("Hello Adventurers, as Hyperious requested, I am here to help you fight each against another.\r\nI will provide you #bBombs for Hunting Competition#k.\r\n#L0#I want to hear the rules#l\r\n#L1#Give me a few bombs!#l\r\n#L2#I want you to give me shielding buffs, so the bombs can't h it me!(Price: 10 Fire Soul Rocks)#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            cm.sendOk("#e<The Dragon's Shout>#n\r\n-Time Limit: 10 min\r\n-Number of Participants: 3 - 6 players\r\n\r\nYou will be sent to the Silent Jungle, to fight each against another!\r\nI am here, to provide you supplies such as bombs and various buffs.\r\nYou will obtain Fire Soul Rocks which will be lost if you get hurt by a bomb. Get as much as you can Fire Soul Rocks to win better prizes!");
            cm.dispose();
            break;
        case 1:
            if (cm.itemQuantity(2430121) + 30 <= 30) {
                if (cm.canHold(2430121)) {
                    cm.gainItem(2430121, 30);
                    cm.sendOk("Good luck!");
                } else {
                    cm.sendOk("Please free some inventory room");
                }
            } else
                cm.sendOk("You may not have more than 30 bombs at once, you don't want to bomb yourself right?");
            cm.dispose();
            break;
        case 2:
            if (cm.itemQuantity(4031469) > 10) {
                cm.useItem(2000005);
                cm.useSkill(2311009, 20);
                cm.gainItem(4031469, -10);
                cm.sendOk("You have obtained a shielding buff which will last enough time so you can bomb the others!");
            } else
                cm.sendOk("It appears that you don't have enough Fire Soul Rocks. Please bomb participants to get some.")
        default:
            cm.dispose();
            return;
    }
}