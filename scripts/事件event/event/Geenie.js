function init() {
    scheduleNew();
}

function scheduleNew() {
    em.getMapFactory().getMap(200000151).setDocked(true);
    em.getMapFactory().getMap(260000100).setDocked(true);
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate
    em.schedule("takeoff", 300000); //The time to begin the ride
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.warpAllPlayer(200000152, 200090400);
    em.warpAllPlayer(260000110, 200090410);
    em.getMapFactory().getMap(200000151).setDocked(false);
    em.getMapFactory().getMap(260000100).setDocked(false);
    em.broadcastShip(200000151, 2);
    em.broadcastShip(260000100, 2);
    em.setProperty("docked","false");
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090400, 260000100);
    em.warpAllPlayer(200090410, 200000100);
    em.broadcastShip(200000151, 1);
    em.broadcastShip(260000100, 1);
    scheduleNew();
}

function cancelSchedule() {
}