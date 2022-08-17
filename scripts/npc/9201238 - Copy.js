/* Dawnveil
    Gachapon
	The Great Gachapierrot
    Made by Daenerys
*/
var status = -1;
var selection = -1;

function start() {
    status = -1;
    selection = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        cm.sendSimple("Try out the new and improved Great Gachapierrot! Which service would you like to use?\r\n#b#L0#Use a Gachapon Ticket.#k.#l\r\n#L1##bUse a Gachapon Food Coupon#n.#l\r\n#L2##bNebulite Gachapon Ticket Exchange#n.#l\r\n#L3##bMount Gachapon Ticket Exchange#n.#l\r\n#L4##rUse a Powergacha Ticket.(Event Quest)#n");
    } else if (status == 1) {
    if (selection == 0) {
        cm.sendNext("You do not have a Gachapon Ticket you can use. Please return after purchasing a Gachapon Ticket.");
        cm.dispose();
		return;
    } else if (selection == 1) {		
		 cm.sendNext("You do not have a Gachapon Food Coupon. Please return after acquiring a Gachapon Food Coupon.");
         cm.dispose();
		 return;
	} else if (selection == 2) {		
		 cm.sendNext("You do not have a Nebulite Gachapon Ticket.");
         cm.dispose();
		 return;	 
	} else if (selection == 3) {		
		 cm.sendNext("You do not have a Mount Gachapon Ticket.");
         cm.dispose();
		 return;	 
	} else if (selection == 4) {		
		 cm.sendNext("You do not have a Powergacha Ticket you can use. Use 20 tickets in the newly revamped gachapon to receive a Powergacha Ticket.");
         cm.dispose();
		 return;	 
        }
		cm.dispose();
    }
}
