function enter(pi) {
	var nextMap = 922010600;
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal("st00");
	// only let people through if the eim is ready
	var avail = eim.getProperty("5stageclear");
	if (avail == null) {
		// can't go thru eh?
		pi.getPlayer().dropMessage(5, "Some seal is blocking this door.");
		return false;	}
	else {
		pi.getPlayer().changeMap(target, targetPortal);
		return true;
	}
}
