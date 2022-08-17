function act() {
	rm.mapMessage(6, "24");
	var flames = Array("d6", "d7", "e6", "e7", "f6", "f7");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}