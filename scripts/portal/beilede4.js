function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
 pi.warpPart(863010240,0); //next
    } else {
	pi.playerMessage(5, "请消灭地图上的所有敌人.");
    }
}