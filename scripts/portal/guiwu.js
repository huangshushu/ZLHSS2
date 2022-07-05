function enter(pi) {
    if (pi.haveMonster(9500196) > 0) {
	pi.playerMessage("请击杀完地图上所有的怪物。");
    } else {
	pi.openNpc(2120001,1);
    }
}