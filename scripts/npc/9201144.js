function start() {
    cm.sendSimple("Hello great warrior, I am Shadow Knight Rene.\r\nI am here as an order of #bLord Hyperious#k to test your strength.\r\nWill you accept the challange?\r\n#L0#Tell me more#l\r\n#L1#My group is ready! Let me start to fight!#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            cm.sendOk("#e<The Dragon's Shout>#n\r\n-Time Limit: 10 min\r\n-Number of Participants: 3 - 6 players\r\n\r\nYou will be sent to the Silent Jungle, to fight each against another!\r\nBlackbull will wait for you, to provide you supplies such as bombs and various buffs.\r\nYou will obtain Fire Soul Rocks which will be lost if you get hurt by a bomb. Get as much as you can Fire Soul Rocks to win better prizes!");
            cm.dispose();
            break;
        case 1:
            if (cm.getParty() == null) {
                cm.sendOk("Please gather people who you would want to fight.");
                cm.dispose();
                return;
            }
            if (cm.getParty().getMembers().size() < 3 && !cm.getPlayer().isGM()) {
                cm.sendOk("You cannot fight yourself! Gather at least three 队员.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendOk("Please send the leader to talk to me.");
                cm.dispose();
                return;
            }
            if (cm.getMap(910025200).getCharactersSize() >= 1) {
                cm.sendOk("Someone already took the challange, please wait untill he finish.");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("The Dragon Shout");
            if (em == null) {
                cm.sendOk("An error occured, please contact the admins.");
                cm.dispose();
                return;
            }
            var prop = em.getProperty("state");
            if (prop.equals("0") || prop == null) {
                em.startInstance(cm.getParty(), cm.getMap());
                cm.removeAll(4031469);
                cm.dispose();
                return;
            } else {
                cm.sendSimple("Another party has already entered the #rParty Quest#k in this channel. Please try another channel, or wait for the current party to finish.#b\r\n#L0#I want the Rice Cake Hat.#");
            }
            break;
        default:
            cm.dispose();
            return;
    }
}