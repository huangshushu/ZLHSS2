function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("请清理当前地图剩余的怪物");
    } else {
	pi.dojo_getUp();
	pi.getMap().setReactorState();
    }
}