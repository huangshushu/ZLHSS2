var chat = -1;
var select, itemid;
var invalid = [
2022766, 1042003, 1062007, 1002140, 1003142, 1322013, 1002959,
1082392, 1082393, 1082394, 2003561, 2003552, 2003553
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 /*End Chat*/ || mode == -1 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == -1) //Previous/No/Delience
        chat--;
    startChat(selection);
}

function startChat(selection) {
    if (chat == 0)
        cm.sendSimple("Ello there, I'm the ID Shop.\r\nWhat would you like me to do for you?\r\n#L0#Have an Item by it's ID#l\r\n#L1#Look up for an Item's ID");
    else if (chat == 1) {
        switch (selection) {
            case 0:
                cm.sendGetNumber("Enter Item's ID:", 0, 1002000, 6000000);
                select = 0;
                break;
            case 1:
                cm.sendGetText("Enter Item's Name:");
                select = 1;
                break;
        }
    } else if (chat == 2) {
        switch (select) {
            case 0:
                itemid = selection;
                for (var i = 0; i < invalid.length; i++) {
                    if(itemid == invalid[i]){
                        cm.sendOk("This is an invalid item.");
                        cm.dispose();
                        return;
                    }
                }
                if (itemid >= 5000000 && itemid < 5010000 || itemid / 10000 == 210 || itemid >= 2003516 && itemid <= 2003520) {
                    cm.sendOk("This is an invalid item.");
                    cm.dispose();
                    return;
                }
                cm.sendGetNumber("Enter the amount you want for the item:", 1, 1, 100);
                break;
            case 1:
                cm.sendPrev(cm.searchId(4, cm.getText()));
                selection = 0;
                chat = 1;
                break;
        }
    } else if (chat == 3) {
        if (itemid / 1000000 == 1) {
            for (var i = 0; i < selection; i++)
                if (cm.canHold(itemid, selection))
                    cm.gainItem(itemid, 1);
                else {
                    cm.sendOk("It seems that you can't hold the item, please check that the item exists and make sure you have enough inventory slots.");
                    cm.dispose();
                    return;
                }
        } else {
            if (cm.canHold(itemid, selection))
                cm.gainItem(itemid, selection);
            else {
                cm.sendOk("It seems that you can't hold the item, please check that the item exists and make sure you have enough inventory slots.");
                cm.dispose();
                return;
            }
        }
        cm.sendOk("Goodbye :)");
    } else
        cm.dispose();
}
