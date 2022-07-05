/*
 �ű����ܣ� ���ͥԺ����
 */

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("SkyPark");
    var map = eim.setInstanceMap(910000000);
    map.resetReactors();
    map.killAllMonsters(true);
    map.respawn(true);
    map.shuffleReactors();
    eim.startEventTimer(1000 * 60 * 10);//10 min
    em.setProperty("started", "true");
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    //eim.broadcastPlayerMsg(1, "��ӭ���� <���ͥԺ>!!\r\n ÿһ�����Ҷ������̸��\r\n�����͸�����Ʒ!");
    em.schedule("gifts", 1000 * 60, eim);//1���Ӻ�򿪽���
}

function gifts(eim) {
//eim.getPlayers().get(0).dropMessage(1, "wanjia:" + eim.getPlayers().size());
	if (eim.getPlayers().size() == 0) {
		return;
	}
    eim.getPlayers().get(0).openNpc(9220032)
    em.schedule("gifts", 1000 * 60, eim);//1���Ӻ�򿪽���
}

function playerDead(eim, player) {
    em.setProperty("started", "false");
    eim.disposeIfPlayerBelow(100, 100000000);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    em.setProperty("started", "false");
    eim.disposeIfPlayerBelow(100, 100000000);
}

function changedMap(eim, player, mapid) {
    if (mapid == 910000000) {
        return;
    }
    em.setProperty("started", "false");
    eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
    em.setProperty("started", "false");
    eim.disposeIfPlayerBelow(100, 100000000);
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    em.setProperty("started", "false");
    eim.disposeIfPlayerBelow(100, 100000000);
}

function playerExit(eim, player) {
    em.setProperty("started", "false");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(100000000);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    em.setProperty("started", "false");
    eim.disposeIfPlayerBelow(100, 100000000);
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
    em.setProperty("started", "false");
}