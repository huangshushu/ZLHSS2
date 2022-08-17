 /*
  * 火焰狼副本
  */

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");
	eim = em.newInstance("Test");
	eim.startEventTimer(60000 * 10);
	var map = eim.setInstanceMap(993000500);
	map.resetFully();
	eim.schedule("beginQuest", 300);
	map.removeNpc(9001059);
	return eim;
}

function spawnMonster(eim) {//召唤火焰狼
	var map = eim.getMapFactoryMap(993000500);
	var mob = em.getMonster(9101078);
	mob.changeLevel(120);
    mob.getChangedStats().setOHp(24000000000000);
    mob.setHp(24000000000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(22, 352));
	eim.startEventTimer(900000 * 2);
	em.setProperty("state", "2");
}

function scheduledTimeout(eim) {
	if (em.getProperty("state") == "1") {
		spawnMonster(eim);
	} else {
		eim.disposeIfPlayerBelow(100, 993000600);
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function playerEntry(eim, player) { //玩家进入副本
    var map = eim.getMapFactory().getMap(993000500);
    player.changeMap(map, map.getPortal(0));
}

function beginQuest(eim) {
		var map = eim.getMapInstance(993000500);
		em.getMapFactory().getMap(993000500).startMapEffect("火焰狼即将出现，请大家做好准备！", 5120116);
		}
		
function allMonstersDead(eim) { //击杀所有怪物 击杀了火焰狼
	var map = eim.getMapFactoryMap(993000500);
	map.spawnNpc(9001059, new java.awt.Point(22, 352));
	eim.startEventTimer(60000);
}

function changedMap(eim, player, mapid) {//离开火焰狼的地图
    if (mapid != 993000500) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}