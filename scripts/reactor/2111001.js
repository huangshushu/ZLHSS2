/*
 Zakum Altar - Summons Zakum.
 */

function act() {
    rm.changeMusic("Bgm06/FinalFight");
    rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("由于火焰之眼的力量,扎昆被召唤。");
    rm.getMap(211042300).setReactorState();
    //if (!rm.getPlayer().isGM()) {
    rm.getMap().startSpeedRun();
    //}
}
