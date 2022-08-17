var property = "1";
var select;

function start() {
    property = "1";
    cm.sendSimple("Hello great warrior! I am #bGold Richie#k, who keeps Hyperious's gold.\r\n#L0#Exchange Fire Soul Rocks for Icy Soul Rocks#l\r\n#L1#Buy special items with Icy Soul Rocks#l")
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else
    if (property == "1")
        switch (selection) {
            case 0:
                var fire = cm.itemQuantity(4031469);
                var icy = fire / 10;
                if (icy > 0) {
                    cm.gainItem(4031469, -fire);
                    cm.gainItem(4031470, icy);
                    cm.sendOk("Exchanged successfuly!");
                } else
                    cm.sendOk("Make sure you have Fire Soul Rocks.");
                cm.dispose();
                break;
            case 1:
                cm.sendSimple(
                    "\r\n#L0##i1102207# Goldensoul Cape - Special Stat: 9% ATT, 9% MAGIC, 30% Boss Damage#l" +
                    "\r\n#L1##i1122080# Dragon Lord Necklace - Special Stat: 30% All Stat#l" +
                    "\r\n#L2##i2041213# Dragon Lord Ruby - Special Scroll for the Dragon Lord Necklace#l" +
                    "\r\n#L3##i2022704# Blessing of the Dragon Lord - Increase Weapon ATT +20 and Magic ATT +30 for 15 minutes#l"
                    );
                property = "2";
                break;
            default:
                cm.dispose();
                return;
        }
    else if (property == "2") {
        select = selection;
        cm.sendYesNo("Are you sure you want to buy " + (selection == 0 ? "#i1102207# Goldensoul Cape" : selection == 1 ? "#i1122080# Dragon Lord Necklace" : selection == 2 ? "#i2041213# Dragon Lord Ruby" : "#i2022704# Blessing of the Dragon Lord") + "?\r\nIt will cost you " + (selection == 0 ? "100" : selection == 1 ? "50" : selection == 2 ? "30" : "10") + " Icy Soul Rocks.");
        property = "3";
    } else if (property == "3") {
        if (cm.itemQuantity(4031470) >=  (select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10)) {
            cm.gainItem(4031470, -(select == 0 ? 100 : select == 1 ? 50 : select == 2 ? 30 : 10))
            cm.dragonShoutReward(select);
            cm.sendOk("Thanks for your purchase!\r\nBlack Mage has interest in these soul rocks... I'm sure I can sell him some.");
        } else
            cm.sendOk("It seems that you don't have enough Icy Soul Rocks! I can't give you priceless equipment for nothing!\r\nBesides, Black Mage has interest in these soul rocks... I'm sure I can sell him some.");
        cm.dispose();
    } else cm.dispose();
}