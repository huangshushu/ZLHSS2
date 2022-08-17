var chat = -1;
var select;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    if (mode == 1) //Next/Ok/Yes/Accept
        chat++;
    else if (mode == 0) //Previous/No/Delience
        chat--;
    if (cm.getMapId() == 300000012 && cm.getPlayer().getLevel() >= 8)
        Tutorial4(selection);
    else
        cm.dispose();
}

function Tutorial4(selection) {
    if (chat == 0)
        cm.sendSimple("You! Who are you, and what are you doing here?\r\n#L0#I'm just... another ghost#l\r\n#L1#I'm Guard #hh# And I've caught Rhinne, Goddess of Time#l\r\n#L2#I will defeat you!");
    else if (chat == 1) {
        switch (selection) {
            case 0:
                cm.sendNextS("I'm just... another ghost.", 3);
                break;
            case 1:
                cm.sendNextS("I'm Guard #hh# And I've caught Rhinne, Goddess of Time.", 3);
                break;
            case 2:
                cm.sendNextS("I will defeat you!", 3);
                break;
        }
        select = selection;
    } else if (chat == 2) {
        switch (select) {
            case 0:
            case 2:
                cm.sendOk("Qucikly, talk to her again! I've made her think you never met.", 2144020);
                cm.dispose();
                break;
            case 1:
                cm.sendNext("Oh, really? I'm very proud of you! Bring her to me!");
                break;
        }
    } else if (chat == 3)
        cm.sendNext("Ugh! By the powers of time!", 2144020);
    else if (chat == 4)
        cm.sendNext("Fast! She's about to cast a spell! Lets get out of here!\r\nI will send you to henesys and I'll try to catch her!");
    else if (chat == 5) {
        cm.removeNpc(300000012, 1402400);
        cm.removeNpc(300000012, 1402401);
        cm.warp(100000000);
        while (cm.getPlayer().getLevel() < 10)
            cm.getPlayer().levelUp();
        cm.dispose();
    }
}