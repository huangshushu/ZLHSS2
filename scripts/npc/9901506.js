var status = -1;
var items;
var itemsp = Array(800, 500, 550, 2000, 800, 1000, 3000, 1000, 750, 1500);
var itemsu = Array(0, 2, 0, 0, 0, 0, 0, 0, 0, 0); // extra slots, not set.
var itemsq = Array(1, 1, 125, 1, 1, 1, 1, 1, 1, 1);
var itemse = Array(1, -1, -1, -1, -1, 7, 7, -1, -1, -1);
var extra_text = Array("2x Drop", "Brown Work Gloves", "Gachapon Ticket", "Purple Surfboard", "White Scroll", "Junior GM Cap (+25 all)", "Pet Itemvac", "Aura Pendant (Permanent)", "Lucky Day Scroll", "Protection Scroll");
var acash = 40000;
var acashp = 500;
var sel = -1;
var itt = -1;
var previous_points;
var chairs;
var chairsp = Array(1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 800, 1000, 1000, 1000, 1500, 800, 800, 1200, 1000, 1000, 1500, 1000, 800, 800, 1000, 1000, 1200, 1200, 1500, 1000, 1000, 800, 1000, 1000, 1200, 1500);
var hairp = 1000;
var mhair;
var fhair;
var hairnew;
var keys = Array(16, 17, 18, 20, 21, 22, 36, 44, 45, 46, 47, 48);
var keynames = Array("Q", "W", "F", "T", "Y", "U", "J", "Z", "X", "C", "V", "B"); //just as reference
var skills;
var skillsnames = Array("Dispel", "Haste", "Bless", "Teleport", "Hyper Body");
var skillsp = Array(1000, 1500, 1800, 1500, 2500);
var allskillsp = 5000;
var resetp = 1000;
var pendantp = 500;
var pendantp_perm = 1000;
var namep = 1000;
var buddyp = 100;
var ep = 500;
var slot = Array();
var inv;
var npcname = "Donation Master";
var ownername = "Donor";

function start() {
    action(1, 0, 0);
    if (cm.isGMS()) {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
        mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
        chairs = Array(3010045, 3010014, 3010068, 3010009, 3010022, 3010023, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010112, 3010096, 3010131, 3010172, 3012010, 3012011, 3010180, 3010181, 3010188);
        items = Array(5360000, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
        skills = Array(9101000, 9101001, 9101003, 9101007, 9101008);
    } else {
        fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
        mhair = Array(33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
        chairs = Array(3010045, 3010054, 3012002, 3010014, 3010068, 3010009, 3010022, 3010023, 3012003, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010144, 3010112, 3010096, 3010131, 3010172, 3012006);
        items = Array(5360017, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
        skills = Array(9001000, 9001001, 9001003, 9001007, 9001008);
    }
    inv = cm.getInventory(1);
    previous_points = cm.getPlayer().getPoints();
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("Hello #r#h ##k! My name is #r" + npcname + "#k. I am the master of #bpoints#k. What would you like?\r\n#b#L0#What are points?#l\r\n#b#L1#Trade points for items#l \r\n#b#L3#Give a slot to an existing equipment#l \r\n#L4#Trade points for Cash#l \r\n#b#L6#Trade points for chairs#l \r\n#L7#Royal Hair (" + hairp + " points)#l \r\n#L8#FULL AP Reset (" + resetp + " points)#l \r\n#L9#Trade skills for points#l \r\n#L10#Change name for " + namep + " points#l \r\n#L11#Buddy capacity 120 for " + buddyp + " points#l \r\n#L18#Additional Pendant Slot#l \r\n#L5#How many points do I have?#l \r\n#L12#Trade M Coins for points(100)#l \r\n#L13#Trade points(100) for M Coins#l  \r\n#L16#Trade Red Luck Sacks for points(1000)#l \r\n#L17#Trade points(1000) for Red Luck Sacks#l#k");
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            cm.sendNext("Points can be achieved through donations. They can be used to trade for really good things, such as equipments, chairs, and Cash right here by me! If you save up your points, perhaps there is a greater reward...");
            status = -1;
        } else if (selection == 1) {
            var selStr = "Alright, I can trade these items for points...#b\r\n\r\n";
            for (var i = 0; i < items.length; i++) {
                selStr += "#L" + i + "##v" + items[i] + "#" + extra_text[i] + (itemsu[i] > 0 ? "(with " + itemsu[i] + " extra slots)" : "") + " x " + itemsq[i] + " for #e" + itemsp[i] + "#n points#n" + (itemse[i] > 0 ? (" ...lasts #r#e" + itemse[i] + "#n#bdays") : "") + "#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 3) {
            var bbb = false;
            var selStr = "Alright. I can #eonly give a slot to equipments that have 0 upgrade slots and have been hammered twice. You can only give a slot up to 10 times to a certain item. It will cost #b" + ep + "#k points, and #b" + (ep*2) + "#k points for items above 5 slots upgraded.#n Select the equipment you have below(equipped items are not included):\r\n\r\n#b";
            for (var i = 0; i <= inv.getSlotLimit(); i++) {
                slot.push(i);
                var it = inv.getItem(i);
                if (it == null || it.getUpgradeSlots() > 0 || it.getViciousHammer() < 2 || it.getViciousHammer() > 6) {
                    continue;
                }
                var itemid = it.getItemId();
                //bwg - 7, with hammer is 9.
                //therefore, we should make the max slots (natural+7)
                if (cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080 || cm.isCash(itemid)) {
                    continue;
                }
                bbb = true;
                selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l\r\n";
            }
            if (!bbb) {
                cm.sendOk("You don't have any equipments I can enhance. I can #eonly enhance equipments that have 0 upgrade slots and have been hammered twice#n.This does not include cash items.");
                cm.dispose();
                return;
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 4) {
            cm.sendYesNo("Cash, is that what you need? Well, I can trade #r#e" + (cm.isGMS() ? (acash/2) : acash) + " Cash for " + acashp + " points.#n#k. Would you like to accept the offer?");
        } else if (selection == 5) {
            cm.sendOk("You have currently #e" + cm.getPlayer().getPoints() + "#n points.");
            cm.dispose();
        } else if (selection == 6) {
            var selStr = "Alright, I can trade these chairs for points...#b\r\n\r\n";
            for (var i = 0; i < chairs.length; i++) {
                selStr += "#L" + i + "##v" + chairs[i] + "##t" + chairs[i] + "# for #e" + chairsp[i] + "#n points#n#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (selection == 7) {
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
        } else if (selection == 8) {
            cm.sendYesNo("Once you proceed with this selection, you can't go back! Are you sure you want to #ereset ALL YOUR AP?#k");
        } else if (selection == 9) {
            var selStr = "Alright, I can trade these skills for points...#eIf you have bought a skill once, you will not be charged points for it thereafter.#n#b\r\n\r\n";
            for (var i = 0; i < skills.length; i++) {
                selStr += "#L" + i + "##s" + skills[i] + "#" + skillsnames[i] + " for #e" + skillsp[i] + "#n points#n#l\r\n";
            }
            selStr += "#L" + skills.length + "##rALL skills above#b for #e" + allskillsp + "#n points#l\r\n";
            cm.sendSimple(selStr + "#k");
        } else if (selection == 10) {
            cm.sendGetText("Please enter the name you wish to change to.");
        } else if (selection == 11) {
            if (cm.getBuddyCapacity() < 120 && cm.getPlayer().getPoints() >= buddyp) {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - buddyp);
                cm.logDonator(" has bought buddy capacity 120 costing " + buddyp + ".", previous_points);
                cm.updateBuddyCapacity(120);
            } else {
                cm.sendOk("You either have 120 capacity or you don't have enough points.");
            }
            cm.dispose();
        } else if (selection == 12) {
            if (!cm.getPlayer().haveItem(5220013)) {
                cm.sendOk("You need at least 1 M Coin.");
                cm.dispose();
            } else {
                cm.sendGetNumber("How many M Coins would you like to redeem? (1 M Coin = 100 points) (Current M Coins: " + cm.getPlayer().itemQuantity(5220013) + ") (Current Points: " + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(5220013), 1, cm.getPlayer().itemQuantity(5220013));
            }
        } else if (selection == 13) {
            if (cm.getPlayer().getPoints() < 100) {
                cm.sendOk("You need at least 100 points for an M Coin.");
                cm.dispose();
            } else {
                cm.sendGetNumber("How many M Coins would you like? (1 M Coin = 100 points) (Current Points: " + cm.getPlayer().getPoints() + ") (Current M Coins: " + cm.getPlayer().itemQuantity(5220013) + ")", cm.getPlayer().getPoints() / 100, 1, cm.getPlayer().getPoints() / 100);
            }
        } else if (selection == 16) {
            if (!cm.getPlayer().haveItem(3993003)) {
                cm.sendOk("You need at least 1 Red Luck Sack.");
                cm.dispose();
            } else {
                cm.sendGetNumber("How many Red Luck Sacks would you like to redeem? (1 Red Luck Sack = 1000 points) (Current: " + cm.getPlayer().itemQuantity(3993003) + ") (Current Points: " + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(3993003), 1, cm.getPlayer().itemQuantity(3993003));
            }
        } else if (selection == 17) {
            if (cm.getPlayer().getPoints() < 1000) {
                cm.sendOk("You need at least 1000 points for a Red Luck Sack.");
                cm.dispose();
            } else {
                cm.sendGetNumber("How many Red Luck Sacks would you like? (1 Red Luck Sack = 1000 points) (Current Points: " + cm.getPlayer().getPoints() + ") (Current Red Luck Sacks: " + cm.getPlayer().itemQuantity(3993003) + ")", cm.getPlayer().getPoints() / 1000, 1, cm.getPlayer().getPoints() / 1000);
            }
        } else if (selection == 18) {
            cm.sendSimple("#b#L0#30 Days - " + pendantp + " points#l\r\n#L1#90 Days - " + pendantp_perm + " points#l");
        }
    } else if (status == 2) {
        if (sel == 1) {
            var it = items[selection];
            var ip = itemsp[selection];
            var iu = itemsu[selection];
            var iq = itemsq[selection];
            var ie = itemse[selection];
            if (cm.getPlayer().getPoints() < ip) {
                cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + ip + ".");
            } else if (!cm.canHold(it, iq)) {
                cm.sendOk("Please free up inventory.");
            } else {
                if (iu > 0) {
                    cm.gainItem(it, iq, false, ie, iu, ownername);
                } else {
                    cm.gainItemPeriod(it, iq, ie, ownername);
                }
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - ip);
                cm.sendOk("There! Thank you for those points. I have given you your item. Come again~");
                cm.logDonator(" has bought item [" + it + "] x " + iq + " costing " + ip + ". [Expiry: " + ie + "] [Extra Slot: " + iu + "] ", previous_points);
            }
            cm.dispose();
        } else if (sel == 3) {
            var statsSel = inv.getItem(slot[selection]);
            if (statsSel == null || statsSel.getUpgradeSlots() > 0 || statsSel.getViciousHammer() < 2) {
                cm.dispose();
                return;
            }
            var itemid = statsSel.getItemId();
            //bwg - 7, with hammer is 9.
            //therefore, we should make the max slots(natural+7)
            if (statsSel.getViciousHammer() > 6 || cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080) {
                cm.dispose();
                return;
            }
            if (cm.isCash(itemid)) {
                cm.dispose();
                return;
            }
            var pointsToUse = ep;
            if (statsSel.getViciousHammer() >= 4) { //2 slots with normal, 3 slots afterwards with doubled price
                pointsToUse = ep*2;
            }
            if (cm.getPlayer().getPoints() < pointsToUse) {
                cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + pointsToUse + ".");
            } else {
                cm.replaceItem(selection, 1, statsSel, 1);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pointsToUse);
                cm.sendOk("There! Thank you for those points. I have given you your item. Come again~");
                cm.logDonator(" has enhanced +1 slot on item [" + statsSel.getItemId() + "] costing " + pointsToUse + ". [Used slots: " + statsSel.getViciousHammer() + "]", previous_points);
            }
            cm.dispose();
        } else if (sel == 4) {
            if (cm.getPlayer().getPoints() < acashp) {
                cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + acashp + ".");
            } else if (cm.getPlayer().getCSPoints(1) > (java.lang.Integer.MAX_VALUE - acash)) {
                cm.sendOk("You have too much Cash.");
            } else {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - acashp);
                cm.getPlayer().modifyCSPoints(1, acash, true);
                cm.sendOk("There! Thank you for those points, I have given you Cash. Come again~");
                cm.logDonator(" has bought Cash [" + (cm.isGMS() ? (acash/2) : acash) + "] costing " + acashp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 6) {
            var it = chairs[selection];
            var cp = chairsp[selection];
            if (cm.getPlayer().getPoints() < cp) {
                cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + cp + ".");
            } else if (!cm.canHold(it)) {
                cm.sendOk("Please free up inventory.");
            } else {
                cm.gainItem(it, 1);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - cp);
                cm.sendOk("There! Thank you for those points. I have given you your chair. Come again~");
                cm.logDonator(" has bought chair [" + it + "] costing " + cp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 7) {
            if (cm.getPlayer().getPoints() < hairp) {
                cm.sendOk("You don't have enough points. You only have " + cm.getPlayer().getPoints());
            } else {
                cm.setHair(hairnew[selection]);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - hairp);
                cm.sendOk("Thank you for the purchase~");
                cm.logDonator(" has bought hair [" + hairnew[selection] + "] costing " + hairp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 8) {
            if (cm.getPlayer().getPoints() < resetp) {
                cm.sendOk("You don't have enough points. You only have " + cm.getPlayer().getPoints());
            } else {
                cm.getPlayer().resetStatsByJob(false);
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - resetp);
                cm.sendOk("Thank you for the purchase~");
                cm.logDonator(" has bought full AP reset costing " + resetp + ".", previous_points);
            }
            cm.dispose();
        } else if (sel == 9) {
            if (selection == skills.length) {
                if (cm.getPlayer().getPoints() < allskillsp) {
                    cm.sendOk("You don't have enough points. You only have " + cm.getPlayer().getPoints());
                } else {
                    for (var i = 0; i < skills.length; i++) {
                        cm.teachSkill(skills[i], 1, 0);
                    }
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - allskillsp);
                    cm.sendOk("Thank you for the purchase~ To use your skills, please click on me again and distribute each skill to a key.");
                    cm.logDonator(" has bought all skills costing " + allskillsp + ".", previous_points);
                }
                cm.dispose();
                return;
            }
            itt = selection;
            var selStr = "Alright, I can put your skill on these keys...#b\r\n\r\n";
            for (var i = 0; i < keys.length; i++) {
                selStr += "#L" + i + "#" + keynames[i] + "#l\r\n";
            }
            cm.sendSimple(selStr + "#k");
        } else if (sel == 10) {
            if (cm.getPlayer().getPoints() >= namep && cm.isEligibleName(cm.getText())) {
                cm.getPlayer().setPoints(cm.getPlayer().getPoints() - namep);
                cm.logDonator(" has bought name change from " + cm.getPlayer().getName() + " to " + cm.getText() + " costing " + namep + ".", previous_points);
                cm.getClient().getChannelServer().removePlayer(cm.getPlayer().getId(), cm.getPlayer().getName());
                cm.getPlayer().setName(cm.getText());
                cm.getClient().getSession().close();
            } else {
                cm.sendOk("You either don't have enough points or " + cm.getText() + " is not an eligible name");
            }
            cm.dispose();
        } else if (sel == 12) {
            if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(5220013)) {
                if (cm.getPlayer().getPoints() > (2147483647 - (selection * 100))) {
                    cm.sendOk("You have too many points.");
                } else {
                    cm.gainItem(5220013, -selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 100));
                    cm.sendOk("You have lost " + selection + " M Coins and gained " + (selection * 100) + " points. Current Points: " + cm.getPlayer().getPoints());
                    cm.logDonator(" has redeemed " + selection + " M Coin(s) gaining " + (selection * 100) + ".", previous_points);
                }
            } 
            cm.dispose();
        } else if (sel == 13) {
            if (selection >= 1 && selection <= 100) {
                if (selection > (cm.getPlayer().getPoints() / 100)) {
                    cm.sendOk("You can only get max " + (cm.getPlayer().getPoints() / 100) + " M Coins. 1 M Coin = 100 points.");
                } else if (!cm.canHold(5220013, selection)) {
                    cm.sendOk("Please make space in CASH tab.");
                } else {
                    cm.gainItem(5220013, selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 100));
                    cm.sendOk("You have gained " + selection + " M Coins and lost " + (selection * 100) + " points. Current Points: " + cm.getPlayer().getPoints());
                    cm.logDonator(" has gained " + selection + " M Coin(s) costing " + (selection * 100) + ".", previous_points);
                }
            }
            cm.dispose();
        } else if (sel == 16) {
            if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(3993003)) {
                if (cm.getPlayer().getPoints() > (2147483647 - (selection * 1000))) {
                    cm.sendOk("You have too many points.");
                } else {
                    cm.gainItem(3993003, -selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 1000));
                    cm.sendOk("You have lost " + selection + " and gained " + (selection * 1000) + " points. Current Points: " + cm.getPlayer().getPoints());
                    cm.logDonator(" has redeemed " + selection + " Red Luck Sack(s) gaining " + (selection * 1000) + ".", previous_points);
                }
            } 
            cm.dispose();
        } else if (sel == 17) {
            if (selection >= 1) {
                if (selection > (cm.getPlayer().getPoints() / 1000)) {
                    cm.sendOk("You can only get max " + (cm.getPlayer().getPoints() / 1000) + ". 1 Item = 1000 points.");
                } else if (!cm.canHold(3993003, selection)) {
                    cm.sendOk("Please make space in SETUP tab.");
                } else {
                    cm.gainItem(3993003, selection);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 1000));
                    cm.sendOk("You have gained " + selection + " and lost " + (selection * 1000) + " points. Current Points: " + cm.getPlayer().getPoints());
                    cm.logDonator(" has gained " + selection + " Red Luck Sack(s) costing " + (selection * 1000) + ".", previous_points);
                }
            }
            cm.dispose();
        } else if (sel == 18) {
            if (selection == 0) {
                if (cm.getPlayer().getPoints() < pendantp) {
                    cm.sendOk("You do not have enough points.");
                } else {
                    var marr = cm.getQuestNoRecord(122700);
                    if (marr != null && marr.getCustomData() != null && parseInt(marr.getCustomData()) > cm.getCurrentTime()) {
                        cm.sendOk("You already have a pendant slot.");
                    } else {
                        cm.getQuestRecord(122700).setCustomData("" + (cm.getCurrentTime() + (30 * 24 * 60 * 60 * 1000)));
                        cm.forceStartQuest(7830, "1");
                        cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp);
                        cm.sendOk("You have gained additional pendant slot - 30 days.");
                        cm.sendPendant(true);
                        cm.getPlayer().fakeRelog();
                        cm.logDonator(" has gained Additional Pendant Slot (30 Day) costing " + (pendantp) + ".", previous_points);
                    }
                }
            } else {
                if (cm.getPlayer().getPoints() < pendantp_perm) {
                    cm.sendOk("You do not have enough points.");
                } else {
                    var marr = cm.getQuestNoRecord(122700);
                    if (marr != null && marr.getCustomData() != null && parseInt(marr.getCustomData()) > cm.getCurrentTime()) {
                        cm.sendOk("You already have a pendant slot.");
                    } else {
                        cm.getQuestRecord(122700).setCustomData("" + (cm.getCurrentTime() + (90 * 24 * 60 * 60 * 1000)));
                        cm.forceStartQuest(7830, "1");
                        cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp_perm);
                        cm.sendOk("You have gained additional pendant slot - 90 days.");
                        cm.sendPendant(true);
                        cm.getPlayer().fakeRelog();
                        cm.logDonator(" has gained Additional Pendant Slot (90 Day) costing " + (pendantp) + ".", previous_points);
                    }
                }
            }
            cm.dispose();
        }
    } else if (status == 3) {
        if (sel == 9) {
            var hadSkill = true;
            if (cm.getPlayer().getSkillLevel(skills[itt]) <= 0) {
                hadSkill = false;
                if (cm.getPlayer().getPoints() < skillsp[itt]) {
                    cm.sendOk("You don't have enough points. You have " + cm.getPlayer().getPoints() + " while I need " + skillsp[itt] + ".");
                    cm.dispose();
                    return;
                } else {
                    cm.teachSkill(skills[itt], 1, 0);
                    cm.getPlayer().setPoints(cm.getPlayer().getPoints() - skillsp[itt]);
                }
            }
            cm.putKey(keys[selection], 1, skills[itt]);
            cm.sendOk("There! Thank you for those points. I have given you your skill. Come again~");
            cm.logDonator(" has bought skill [" + skills[itt] + "] costing " + skillsp[itt] + " on key " + keynames[selection] + " (" + keys[selection] + "). [HadSkill: " + hadSkill + "] ", previous_points);
        }
        cm.dispose();

    }
}
