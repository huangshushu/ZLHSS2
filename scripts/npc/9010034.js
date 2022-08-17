var status = -1;
var nitems = Array("20k Cash", "#v2340000#White Scroll (level 70+)", "#v2049100#Chaos Scroll x 5 (level 70+)", "#v5220000#Gachapon Ticket x 25", "#v5050000#AP Reset x 5", "#v5050000#AP Reset x 26", "#v5062000#Miracle Cube x 4", "#v5062000#Miracle Cube x 21", "#v2022179#Onyx Apple x 4", "#v2022179#Onyx Apple x 21", "#v5062001#Premium Miracle Cube x 2", "#v2530000#Lucky Day (level 70+)", "#v2531000#Protection Scroll (level 70+)");
var np = Array(1, 5, 2, 1, 1, 5, 1, 5, 1, 5, 9, 5, 10);
var ditems = Array("#v5211067#1.2x EXP Card (1 Day)", "#v5211068#1.5x EXP Card (1 Day)", "#v5360000#2x Drop/Meso Card (1 Day)", "#v4030004#Clone (1 Day, Untradeable)");
var dp = Array(4, 8, 3, 4, 4, 3);
var items = [
/*Common*/ [[2340000, 1, 10], [2049100, 5, 4], [5220000, 25, 2], [5050000, 6, 2], [5050000, 31, 10], [5062000, 4, 2], [5062000, 21, 10], [2022179, 3, 4], [2022179, 10, 12], [5062001, 3, 7], [2530000, 1, 10], [2531000, 1, 20], [4310015, 3, 7], [5062002, 5, 11], [5062003, 2, 11], [2049004, 1, 4]],
/*Special*/ [[5211046, 4, 3], [5360000, 4, 2], [5211046, 12, 6], [5360000, 12, 5], [5211046, 24, 10], [5360000, 24, 8], [4030004, 24, 6], [2501000, -1, 70], [5051001, -1, 35], [2450043, -1, 2], [2022531, -1, 2], [2022976, -1, 2], [5590000, 72, 5]/*, [2048203, -1, 35]*//*, [2049605, -1, 35]*/, [4031864, 4, 4], [4031864, 12, 8], [4031864, 24, 14]]
];
var itemowner = "Rental";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("Hello! I'm the #r#eVoting Point NPC#n#k. If you have voted on our site, you will get a point each time! I see you have #e#r" + cm.getPlayer().getVPoints() + "#n#k vote points! I can redeem your points for cool things! What would you like...?\r\n\r\n#b#L0#Trade for Common Items#l\r\n#L1#Trade for Special Items#l\r\n#L2#Additional Pendant Slot(7 Days) for 20 vote points#l\r\n#L3#Trade points for buddy slots#l#k");
    } else if (status == 1) {
        status += selection;
        var selStr;
        var extra = "";
        var extral = 0;
        if (selection == 0) {
            selStr = "#rCommon Items?#k Well, here's my selection...\r\n\r\n";
            extra += "#b#L0#Trade 1 points for 5k Cash#l#k\r\n";
            extra += "#b#L1#Trade 2 points for 11k Cash#l#k\r\n";
            extra += "#b#L2#Trade 1 points for 2 Fame#l#k\r\n";
            extra += "#b#L3#Trade 2 points for 5 Fame#l#k\r\n";
            extra += "#b#L4#Trade 3 points for 11 Fame#l#k\r\n";
            extral = 5; //selections length
        } else if (selection == 1) {
            selStr = "#rSpecial Items?#k Well, these are items you can't get anywhere else. Here's my selection...\r\n\r\n";
        } else if (selection == 2) {
            if (cm.getPlayer().getVPoints() < 20) {
                cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
                cm.dispose();
                return;
            }
            cm.sendYesNo("Once you proceed with this selection, you can't go back! Are you sure you want Additional Pendant Slot (7 Days) for 20 Vote Points?");
        } else if (selection == 3) {
            if (cm.getBuddyCapacity() < 100) {
                cm.sendOk("You may only buy additional buddy slots when you already have 100 slots.");
                cm.dispose();
                return;
            }
            cm.sendSimple("How many buddy slots do you want?\r\n#L5#5 Additional Slots for 1 vote point(s)#l\r\n#L15#15 Additional Slots for 2 vote point(s)#l\r\n#L25#25 Additional Slots for 3 vote point(s)#l");
        } else {
            cm.dispose();
            return;
        }
        if (selection == 0 || selection == 1) {
            selStr += extra;
            for (var i = 0 + extral; i < items[selection].length; i++) {
                var a = items[selection][i][0];
                var b = items[selection][i][1];
                var c = items[selection][i][2];
                selStr += "#b#L" + i + "#Trade " + c + " points for #v" + a + "#" + getSpecialName(a) + (selection == 1 ? "" : " x " + b) + " ";
                if ((c == 2340000 || c == 2049100 || c == 2022179 || c == 5062001 || c == 2530000 || c == 2531000) && cm.getPlayer().getLevel() < 70) {
                    selStr += "(level 70+)";
                }
                if (selection == 1 && b > 0) {
                    if (b > 24) {
                        selStr += "(" + b / 24 + " Day)";
                    } else {
                        selStr += "(" + b + " Hour)";
                    }
                }
                selStr += "#l#k\r\n";
            }
            cm.sendSimple(selStr);
        }
    } else if (status == 2 || status == 3) {
        if (cm.getPlayer().getVPoints() < items[status - 2][selection][2]) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            if ((selection == 0 || selection == 1) && (status - 2) != 1) {
                if (cm.getPlayer().getCSPoints(1) + (selection == 0 ? 5000 : 11000) > (2147473647)) { //integer.max_value
                    cm.sendOk("You have too much Cash.");
                    cm.dispose();
                    return;
                } else {
                    cm.getPlayer().modifyCSPoints(1, (selection == 0 ? 5000 : 11000) * 2, false);
                }
            } else if ((selection == 2 || selection == 3 || selection == 4) && (status - 2) != 1) {
                if (cm.getPlayer().getFame() + (selection == 0 ? 2 : selection == 0 ? 5 : 11) > (32767)) { //short.max_value
                    cm.sendOk("You have too much Fame.");
                    cm.dispose();
                    return;
                } else {
                    cm.getPlayer().addFame(selection == 0 ? 2 : selection == 0 ? 5 : 11);
                }
            } else {
                if (selection + 1 > items[status - 2].length) {
                    cm.sendOk("Hacking Attempt Detected");
                    cm.dispose();
                    return;
                }
                var item = items[status - 2][selection][0];
                if ((item == 2340000 || item == 2049100 || item == 2022179 || item == 5062001 || item == 2530000 || item == 2531000) && cm.getPlayer().getLevel() < 70) {
                    cm.sendOk("You must be level 70 or above to get this item.");
                    cm.dispose();
                    return;
                }
                if (!cm.canHold(items[status - 2][selection][0], (status - 2) == 1 ? 1 : items[status - 2][selection][1])) {
                    cm.sendOk("You have too much item.");
                    cm.dispose();
                    return;
                }
                if ((status - 2) == 1 && items[status - 2][selection][1] > -1) {
                    cm.gainItemPeriod(items[status - 2][selection][0], 1, items[status - 2][selection][1], true, itemowner);
                } else {
                    cm.gainItem(items[status - 2][selection][0], (status - 2) == 1 ? 1 : items[status - 2][selection][1]);
                }
            }
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - items[status - 2][selection][2]);
            cm.sendOk("Thank you for the purchase~");
        }
        cm.dispose();
    } else if (status == 4) {
        cm.addPendantSlot(7);
        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 20);
        cm.sendOk("Thank you for the purchase~");
        cm.dispose();
    } else if (status == 5) {
        if (selection + cm.getBuddyCapacity() >= 200) {
            cm.sendOk("You cannot have more than 200 buddy slots.");
            cm.dispose();
            return;
        }
        var vp;
        switch (selection) {
            case 5:
                vp = 1;
                break;
            case 15:
                vp = 2;
                break;
            case 25:
                vp = 3;
                break;
            default:
                cm.dispose();
                return;
        }
        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - vp);
        cm.updateBuddyCapacity(cm.getBuddyCapacity() + selection);
        cm.showMessage(7, "You have lost " + vp + " Vote Points.");
        cm.sendOk("Thank you for the purchase~");
        cm.dispose();
    }
}

function getSpecialName(id) {
    if (id / 10000 == 421) {
        return "2x EXP Card";
    }
    if (id / 10000 == 536) {
        return "2x Drop Card";
    }
    if (id / 10000 == 245) {
        return "2x EXP (1 hour) (Does not stack with Family)";
    }
    if (id / 10000 == 202) {
        return "2x Drop (1 hour) (Does not stack with Family)";
    }
    if (id == 2022976) {
        return "1.5x Meso (40 minutes) (Does not stack with Family)";
    }
    if (id == 4030004) {
        return "Clone";
    }
    if (id == 4031864) {
        return "2x NX Cash";
    }
    return "#t" + id + "#";
}