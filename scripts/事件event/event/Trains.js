load('nashorn:mozilla_compat.js');
function init() {
    scheduleNew();
}

function scheduleNew() {
    em.getMapFactory().getMap(200000121).setDocked(true);
    em.getMapFactory().getMap(220000110).setDocked(true);
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate
    em.schedule("takeoff", 300000); //The time to begin the ride
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.warpAllPlayer(200000122, 200090100);
    em.warpAllPlayer(220000111, 200090110);
    em.getMapFactory().getMap(200000121).setDocked(false);
    em.getMapFactory().getMap(220000110).setDocked(false);
    em.broadcastShip(200000121, 2);
    em.broadcastShip(220000110, 2);
    em.setProperty("docked","false");
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090100, 220000110); // from orbis
    em.warpAllPlayer(200090110, 200000121); // from ludi
    em.broadcastShip(200000121, 1);
    em.broadcastShip(220000110, 1);
    scheduleNew();
}

function cancelSchedule() {
}