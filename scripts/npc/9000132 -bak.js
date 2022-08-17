var status;
var selected;

function start() {
    status = 0;
    cm.sendSimple("You want to know more about Jewel Crafting?\r\n#L0##b#eJewel Craft#k#n?#l\r\n#L2##b#eJewel Synergy#k#n?#k#l\r\n#L1#Fusion #b#eJewels#n#k?#l\r\n#L3#Trade #b#eJewel Powders#n#k for Magical Jewel Box.#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 1:
            selected = selection;
            if (selected == 0) {
                cm.sendNextS("Jewel Crafting allows you to infuse your equipment with jewel power to increase its stats.", 4, 9000132);
            } else if (selected == 1) {
                cm.sendNextS("Use the #i2048402:##t2048402# if you're carrying two useless jewels. Fusing them together could turn out something good!", 4, 9000132);
            } else if (selected == 2) {
                cm.sendNextS("You need special jewels to add stats to #i1112762:# #t1112762# and #i1132191:# #t1132191#. You know, special jewels with powers infused.", 4, 9000132);
            } else if (selected == 3) {
                cm.sendSimple("Which jewel do you want to trade in?\r\n#L0#Trade 10 piles of #b#e#t4008000##k#n for a Magical Jewel Box.#l\r\n#L1#Trade 10 piles of #b#e#t4008001##k#n for a Magical Jewel Box.#k#l\r\n#L2#Trade 10 piles of #b#e#t4008002##k#n for a Magical Jewel Box.#l\r\n#L3#Trade 10 piles of #b#e#t4008003##k#n for a Magical Jewel Box.#l");
            }
            break;
        case 2:
            if (selected == 0) {
                cm.sendNextPrevS("But you can't just use any items for Jewel Crafting! Only  #i1112762:# #t1112762# and #i1132191:# #t1132191#! ", 4, 9000132);
            } else if (selected == 1) {
                cm.sendNextPrevS("Also, you can obtain Rank S and A jewels with a #t2048402#!", 4, 9000132);
                cm.dispose();
            } else if (selected == 2) {
                cm.sendNextPrevS("There are #bMighty Jewels#k, #bLucky Jewels#k, #bNimble Jewels#k, and #bKeen Jewels#k. They'll make you stronger, luckier, more dextrous, and smarter! The higher the rank, the more stats it carries. Why don't you bring me jewels suited for your needs?", 4, 9000132);
                cm.dispose();
            } else if (selected == 3) {
                var reqItem = 4008000 + selection;
                if (cm.haveItem(reqItem, 10)) { //todo handle
                } else {
                    cm.sendNext("You sure you have 10 piles of #t" + reqItem + "#? I need all of them to make a Magical Jewel Box.");
                }
                cm.dispose();
            }
            break;
        case 3:
            if (selected == 0) {
                cm.sendNextPrevS("I'm embarrassed to admit this, but Idon't always know my own strength. Sometimes I... break things. But hey! If you have jewel powder, I can form it into new jewels.", 4, 9000132);
            }
            break;
        case 4:
            if (selected == 0) {
                cm.sendNextPrevS("Click on the #b#eJeweler's Mortar#n#k next to me to access Jewel Crafting, and see for yourself!", 4, 9000132);
                cm.dispose();
            }
            break;
    }
}
