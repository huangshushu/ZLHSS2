var status = -1;
var nitems;
var np;
var ditems;
var dp;
var mitems = Array("#v4080100#Match Cards", "#v4080000#Omok", "#v4080001#Omok", "#v4080002#Omok", "#v4080003#Omok", "#v4080004#Omok", "#v4080005#Omok", "#v4080006#Omok", "#v4080007#Omok", "#v4080008#Omok", "#v4080009#Omok", "#v4080010#Omok", "#v4080011#Omok");
var mp = Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
var mhair;
var fhair;
var hairnew;

function start() {
    action(1, 0, 0);
    if (cm.isGMS()) {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
        mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
        nitems = Array("2 million mesos", "5k Cash", "#v2340000#White Scroll (level 70+)", "#v2049100#Chaos Scroll x 5 (level 70+)", "#v5220000#Ga-cha-pon Ticket x 25", "#v5050000#AP Reset x 5", "#v5050000#AP Reset x 26", "#v5062000#Miracle Cube x 4", "#v5062000#Miracle Cube x 21", "#v2022179#Onyx Apple x 4", "#v2022179#Onyx Apple x 21", "#v5062001#Premium Miracle Cube x 2", "#v2530000#Lucky Day (level 70+)", "#v2531000#Protection Scroll (level 70+)");
        np = Array(2, 2, 10, 4, 2, 2, 10, 2, 10, 2, 10, 18, 10, 20);
        ditems = Array("#v5211067#1.2x EXP Card (1 Day)", "#v5211068#1.5x EXP Card (1 Day)", "#v5360000#2x Drop/Meso Card (1 Day)", "#v4030004#Clone (1 Day, Untradeable)");
        dp = Array(8, 16, 6, 8, 8, 6);
    } else {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
        mhair = Array(33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
        nitems = Array("2 million mesos", "10k Cash", "#v2340000#White Scroll (level 70+)", "#v2049100#Chaos Scroll x 5 (level 70+)", "#v5220000#Ga-cha-pon Ticket x 25", "#v5050000#AP Reset x 5", "#v5050000#AP Reset x 26", "#v5062000#Miracle Cube x 4", "#v5062000#Miracle Cube x 21", "#v2022179#Onyx Apple x 4", "#v2022179#Onyx Apple x 21", "#v5062001#Premium Miracle Cube x 2", "#v2530000#Lucky Day (level 70+)", "#v2531000#Protection Scroll (level 70+)");
        np = Array(2, 2, 10, 4, 2, 2, 10, 2, 10, 2, 10, 18, 10, 20);
        ditems = Array("#v5211074#1.2x EXP Card (1 Day)", "#v5211077#1.5x EXP Card (1 Day)", "#v5360017#2x Drop/Meso Card (1 Day)", "#v4030004#Clone (1 Day, Untradeable)");
        dp = Array(8, 16, 6, 8, 8, 6);
    }
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("Hello! I'm the #r#eVoting Point NPC#n#k. If you have voted on our site, you will get a point each time! I see you have #e#r" + cm.getPlayer().getVPoints() + "#n#k voting points! I can redeem your points for cool things! What would you like...?\r\n\r\n#b#L0#Trade for Common Items#l\r\n#L1#Trade for Special Items#l\r\n#L2#Trade for Royal Hair(35 vote points)#l\r\n#L3#Trade for Minigame Item#l\r\n#L4#Reset ALL AP (35 vote points) (DOES NOT reset HP or MP)#l#k");
    } else if (status == 1) {
        status += selection;
        var selStr;
        var it;
        var ip;
        if (selection == 0) {
            selStr = "#rCommon Items?#k Well, here's my selection...\r\n\r\n";
            it = nitems;
            ip = np;
        } else if (selection == 1) {
            selStr = "#rSpecial Items?#k Well, these are items you can't get anywhere else. Here's my selection...\r\n\r\n";
            it = ditems;
            ip = dp;
        } else if (selection == 2) {
            hairnew = Array();
            if (cm.getPlayerStat("GENDER") == 0) {
                for (var i = 0; i < mhair.length; i++) {
                    if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
                        hairnew.push(mhair[i]);
                    } else {
                        hairnew.push(mhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
                    }
                }
            } else {
                for (var i = 0; i < fhair.length; i++) {
                    if (fhair[i] == 34160) {
                        hairnew.push(fhair[i]);
                    } else {
                        hairnew.push(fhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
                    }
                }
            }
            cm.sendStyle("Pick a hairstyle that you would like.", hairnew);
            return;
        } else if (selection == 3) {
            selStr = "#rMinigame Items?#k Here's my selection...\r\n\r\n";
            it = mitems;
            ip = mp;
        } else if (selection == 4) {
            cm.sendYesNo("Once you proceed with this selection, you can't go back! Are you sure you want to #ereset ALL YOUR AP? (DOES NOT reset HP or MP)#k");
            return;
        } else {
            cm.dispose();
            return;
        }
        for (var i = 0; i < it.length; i++) {
            selStr += "#b#L" + i + "#Trade " + ip[i] + " points for " + it[i] + "#l#k\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) { //normal item
        if (cm.getPlayer().getVPoints() < np[selection]) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (cm.getPlayer().getMeso() > (2145483647)) { //integer.max_value - 2m
                        cm.sendOk("You have too much meso.");
                    } else {
                        cm.gainMeso(2000000);
                        passed = true;
                    }
                    break;
                case 1:
                    if (cm.getPlayer().getCSPoints(1) > (2147473647)) {
                        cm.sendOk("You have too much Cash.");
                    } else {
                        cm.getPlayer().modifyCSPoints(1, 10000, false);
                        passed = true;
                    }
                    break;
                case 2:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2340000)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2340000, 1);
                        passed = true;
                    }
                    break;
                case 3:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2049100, 5)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2049100, 5);
                        passed = true;
                    }
                    break;
                case 4:
                    if (!cm.canHold(5220000, 25)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5220000, 25);
                        passed = true;
                    }
                    break;
                case 5:
                    if (!cm.canHold(5050000, 5)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5050000, 5);
                        passed = true;
                    }
                    break;
                case 6:
                    if (!cm.canHold(5050000, 26)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5050000, 26);
                        passed = true;
                    }
                    break;
                case 7:
                    if (!cm.canHold(5062000, 4)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5062000, 4);
                        passed = true;
                    }
                    break;
                case 8:
                    if (!cm.canHold(5062000, 21)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5062000, 21);
                        passed = true;
                    }
                    break;
                case 9:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2022179, 4)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2022179, 4);
                        passed = true;
                    }
                    break;
                case 10:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2022179, 21)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2022179, 21);
                        passed = true;
                    }
                    break;
                case 11:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(5062001, 2)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(5062001, 2);
                        passed = true;
                    }
                    break;
                case 12:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2530000, 1)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2530000, 1);
                        passed = true;
                    }
                    break;
                case 13:
                    if (cm.getPlayer().getLevel() < 70) {
                        cm.sendOk("You must be level 70 or above to get this item.");
                    } else if (!cm.canHold(2531000, 1)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(2531000, 1);
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - np[selection]);
                cm.sendOk("Thank you for the purchase~");
            }
        }
        cm.dispose();
    } else if (status == 3) { // donators item
        if (cm.getPlayer().getVPoints() < dp[selection]) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (!cm.canHold(cm.isGMS() ? 5211067 : 5211074)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItemPeriod(cm.isGMS() ? 5211067 : 5211074, 1, 1, "Rental");
                        passed = true;
                    }
                    break;
                case 1:
                    if (!cm.canHold(cm.isGMS() ? 5211068 : 5211077)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItemPeriod(cm.isGMS() ? 5211068 : 5211077, 1, 1, "Rental");
                        passed = true;
                    }
                    break;
                case 2:
                    if (!cm.canHold(cm.isGMS() ? 5360000 : 5360017)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItemPeriod(cm.isGMS() ? 5360000 : 5360017, 1, 1, "Rental");
                        passed = true;
                    }
                    break;
                case 3:
                    if (!cm.canHold(4030004)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItemPeriod(4030004, 1, 1, "Rental");
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - dp[selection]);
                cm.sendOk("Thank you for the purchase~");
            }
        }
        cm.dispose();
    } else if (status == 4) {
        if (cm.getPlayer().getVPoints() < 35) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            cm.setHair(hairnew[selection]);
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 35);
            cm.sendOk("Thank you for the purchase~");
        }
        cm.dispose();
    } else if (status == 5) { // donators item
        if (cm.getPlayer().getVPoints() < mp[selection]) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            var passed = false;
            switch(selection) {
                case 0:
                    if (!cm.canHold(4080100)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(4080100, 1);
                        passed = true;
                    }
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (!cm.canHold(4079999 + selection)) {
                        cm.sendOk("You have too much item.");
                    } else {
                        cm.gainItem(4079999 + selection, 1);
                        passed = true;
                    }
                    break;
						
            }
            if (passed) {
                cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - mp[selection]);
                cm.sendOk("Thank you for the purchase~");
            }
        }
        cm.dispose();
    } else if (status == 6) {
        if (cm.getPlayer().getVPoints() < 35) {
            cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
        } else {
            cm.getPlayer().resetStatsByJob(false);
            cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 35);
            cm.sendOk("Thank you for the purchase~");
        }
        cm.dispose();
    }

}