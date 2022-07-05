/*
 * 功能: 贝勒德事件
 * (通往贝勒德的路)
 * (贝勒德的心脏)
 * From: 99Team
 */
var status = -1;

function action(mode, type, selection) {
	var mapid = ms.getMapId().toString();
	var name = mapid.slice(6, 8);
	ms.showMapEffect("giantBoss/enter/" + name);
	var em = ms.getEventManager("BeidlerPQ");
	var eim = ms.getEventInstance();
	if (em != null && eim != null) {
		var prop = eim.getProperty("open");
		if (prop != null) {
			ms.getPlayer().showPortal("open", prop);
		}
		ms.getPlayer().gaintBossMap();
		ms.getPlayer().sendDathCount();
	}
	ms.dispose();
}
