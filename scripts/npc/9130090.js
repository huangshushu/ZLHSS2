/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */
function start() {
    cm.sendOk("无需多言了，你有那个能力阻止我吗？");
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        if (cm.getMapId() != 807300210) {
            var mob = em.getMonster(9421581);
            mob.getStats().setChange(true);
            mob.changeLevel(160);
            mob.getChangedStats().setOHp(30000000000);
            mob.setHp(30000000000);
            eim.registerMonster(mob);
            var map = eim.getMapInstance(0);
            cm.removeNpc(cm.getMapId(), 9130090);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-382, 123));
            //cm.spawnMob(9421581, 1, -382, 123);
        } else {
            cm.killAllMob();
            var mob = em.getMonster(9421583);
            mob.getStats().setChange(true);
            mob.changeLevel(210);
            mob.getChangedStats().setOHp(5000000000000);
            mob.setHp(5000000000000);
            eim.registerMonster(mob);
            var map = eim.getMapInstance(0);
            cm.removeNpc(cm.getMapId(), 9130090);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-382, 123));
        }
    }
    cm.dispose();

// If accepted, = summon PB + Kriston Disappear + 1 hour timer
// If deny = NoTHING HAPPEN
}
