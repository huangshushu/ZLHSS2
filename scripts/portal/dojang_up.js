function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("There are still some monsters remaining.");
    } else {
	pi.dojo_getUp();
	pi.getMap().setReactorState();
    }
}