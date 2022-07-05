function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0")
}
function setup(a, b) {
    a = em.newInstance("Pinkbean");
    a.startEventTimer(144E5);
    return a
}
function playerEntry(a, b) {
    var c = a.getMapFactory().getMap(270050100);
    b.changeMap(c, c.getPortal(0))
}
function playerRevive(a, b) {
    return ! 1
}
function scheduledTimeout(a) {
    a.disposeIfPlayerBelow(100, 270050300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true")
}
function changedMap(a, b, c) {
    270050100 != c && (a.unregisterPlayer(b), a.disposeIfPlayerBelow(0, 0) && (em.setProperty("state", "0"), em.setProperty("leader", "true")))
}
function playerDisconnected(a, b) {
    return 0
}
function monsterValue(a, b) {
    return 1
}
function playerExit(a, b) {
    a.unregisterPlayer(b);
    a.disposeIfPlayerBelow(0, 0) && (em.setProperty("state", "0"), em.setProperty("leader", "true"))
}
function end(a) {
    a.disposeIfPlayerBelow(100, 270050300) && (em.setProperty("state", "0"), em.setProperty("leader", "true"))
}
function clearPQ(a) {
    end(a)
}
function allMonstersDead(a) {}
function leftParty(a, b) {}
function disbandParty(a) {}
function playerDead(a, b) {}
function cancelSchedule() {};