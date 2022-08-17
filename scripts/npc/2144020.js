var chat = -1;
var yesno = false;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/ || mode == 0 && yesno == true /*No*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == 0) //Previous/No/Delience
        chat--;
    if (cm.getMapId() == 300000012) {
        if (cm.getPlayer().getLevel() == 1)
            Tutorial1();
        else if (cm.getPlayer().getLevel() >= 4 && cm.getPlayer().getLevel() != 8) {
            if (cm.itemQuantity(4020009) == 0)
                Tutorial2();
            else if (cm.itemQuantity(4020009) > 0 && cm.getMonsterCount(cm.getMapId()) < 1)
                Tutorial3();
            else {
                cm.sendOk("You didn't kill the Powerful Snail yet.");
                cm.dispose();
            }
        } else if (cm.getPlayer().getLevel() == 8) {
            cm.sendOk("You must talk with Hilla!");
            cm.dispose();
        }
    } else
        cm.dispose();
}

function Tutorial1() {
    if (chat == 0) {
        cm.sendNext("You are awake!");
    }else if (chat == 1)
        cm.sendNextPrevS("Where am I?\r\nAm I dead?", 3);
    else if (chat == 2)
        cm.sendNextPrev("Not exactly... \r\nWhen you have defeated the Black Mage You've been cursed.\r\nYour soul is between two worlds.");
    else if (chat == 3)
        cm.sendNextPrevS("Doesn't it mean I'm stuck here forever?", 3);
    else if (chat == 4) {
        cm.sendYesNo("Not at all... I've found a way to get you out of here.\r\nBut first, you have to prove me that I need to resurrect you.\r\nDo you accept the challange?");
        yesno = true;
    } else if (chat == 5) {
        yesno = false;
        while (cm.getPlayer().getLevel() < 4)
            cm.getPlayer().levelUp();
        cm.getPlayer().getClient().getSession().write(CPacket.startMapEffect("Talk to me again when you are ready.", 5122005, true));
        cm.dispose();
    }
}

function Tutorial2() {
    if (chat == 0)
        cm.sendNext("First, you must defeat Power Snail to prove your power.\r\nPower Snail is a little more powerful then 10 snails, wouldn't be too hard.");
    else {
        if (cm.canHold(1302000, 1) && cm.itemQuantity(1302000) == 0)
            cm.gainItem(1302000, 1);
        if (cm.canHold(4020009, 1) && cm.itemQuantity(4020009) == 0)
            cm.gainItem(4020009, 1);
        for (var p = 0; p < 5; p++)
            cm.getPlayer().dropMessage(5, "What is it? HUH! It's a piece of time! Where did it came from?");
        cm.getPlayer().getClient().getSession().write(CPacket.startMapEffect("I've gave you a Sword that will help you to fight. \r\nTalk to me again when you have defeated the Powerful Snail.", 5122005, true));
        cm.spawnCustomMonster(100100, 100, 50, 1, 0, true, 1, 5, 0, "Powerful Snail", 47, 98);
        cm.dispose();
    }
}

function Tutorial3() {
    if (chat == 0)
        cm.sendNext("Congulations! You have killed him!");
    else if (chat == 1)
        cm.sendNextPrevS("Have I already proved you that you must resurrect me?", 3);
    else if (chat == 2)
        cm.sendNextPrev("There's one more thing, In order to get out of here you must touch the darkness.");
    else if (chat == 3)
        cm.sendNextPrevS("HUH?! Touch the darkness? And how will I do that?");
    else if (chat == 4) {
        cm.sendYesNo("I am going to summon Hilla and everything you need to do is act like you are her #bGuard#k.\r\nDo you accept?");
        yesno = true;
    } else if (chat == 5) {
        yesno = false;
        while (cm.getPlayer().getLevel() < 8)
            cm.getPlayer().levelUp();
        cm.spawnNpc(1402400, -173, 98);
        cm.spawnNpc(1402401, -258, 98);
        cm.removeNpc(300000012, 2144020);
        cm.dispose();
    }
}

function nextMap(currentMap) { //Useless but might be used later
    switch (currentMap) {
        case 300000012:
            return 100000000;
            break;
        default:
            return 300000012;
            break;
    }
}