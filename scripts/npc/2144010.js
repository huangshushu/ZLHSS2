var status = -1;

function start() {
    cm.askAcceptDecline("You face me directly, after ruining all I've worked for.\r\n\r\n#rI suppose I should thank you. If you hadn't gone to the trouble of destroying my life's work, I would feel a slight pang of guilt at making you suffer before I demolish you.#k");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        cm.removeNpc(cm.getMapId(), 2144010);
        cm.spawnMob(8860010, 0, -181);
        if (!cm.getPlayer().isGM()) {
            cm.getMap().startSpeedRun();
        }
    }
    cm.dispose();
}