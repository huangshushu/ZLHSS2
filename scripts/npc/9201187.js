var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.haveItem(5220094)) {
                cm.sendYesNo("You may use the Nebulite Gachapon. Which service would you like to use?\r\n#b#L0#Use a Gachapon Ticket#l#k");
            } else {
                cm.sendSimple("Welcome to the Nebulite Gachapon. How may I help you?\r\n\r\n#b#L0#What is Gachapon?#l\r\n#L1#Where can you buy Gachapon Tickets?#l#k");
            }
        } else if (status == 1) {
            if (cm.haveItem(5220094)) {
                var item = cm.useNebuliteGachapon();
                if (item != -1) {					
                    cm.sendNext("You have obtained #b#t" + item + "##k from Nebulite Gachapon.\r\nThank you for using our gachapon services. Please come again!");
                } else {
                    cm.sendOk("Please check your item inventory and see if you have the ticket, or if the inventory is full.");
                }
                cm.safeDispose();
            } else {
                if (selection == 0) {
                    cm.sendNext("Play Gachapon for a chance to win rare Nebulites and Preminum Fusion Ticket Pieces! All you need is a Nebuilte Gachapon Ticket to be the winner of a random Nebulite.");
                } else if (selection == 1) {
                    cm.sendOk("Gachapon Tickets are available at the #rCash Shop#k and can be purchased using NX or Maple Points. Click on the red SHOP button at the bottom of the screen to the right of your EXP. bar to visit the #rCash Shop#k where you can purchase tickets.");
                }
                cm.safeDispose();
            }
        }
    }
}