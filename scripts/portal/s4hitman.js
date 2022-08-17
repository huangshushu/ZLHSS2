function enter(pi) {
    if (pi.isQuestActive(6141)) { //ninja ambush :D
	pi.getMap().killAllMonsters(true);
	pi.spawnMonster(9300088,6); //is it good idea to spawn directly here?
	pi.playerMessage(5, "黑暗主门徒已经出现了。");
    } else {
    	pi.playerMessage(5, "这里似乎进不去，有股力量阻挡");
    }
}