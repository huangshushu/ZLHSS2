load('nashorn:mozilla_compat.js');
importPackage(Packages.client);

function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        //pi.resetMap(pi.getPlayer().getMapId() + 100);
        pi.warp(pi.getPlayer().getMapId() + 100, 0);
        return true;
    } else {
        pi.playerMessage(5, "Please eliminate all the monsters, to get your reward!");
        return false;
    }
    return true;
}