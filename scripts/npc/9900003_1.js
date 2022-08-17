var status = -1;
var victim;

function start() {
	var level = cm.getPlayerStat("LVL");
    if (!cm.haveItem(5350000,1) || level < 100||!cm.getPlayerCount(230040420) <= 0) {
		cm.playerMessage(5, "你没有高级鱼饵罐头或者是你的等级尚未达到100或是里面有人！");
		cm.dispose();
    } else {
		if (cm.getMonsterCount(230040420) <= 0) { // Fant. Map
            //cm.changeMusic("Bgm06/FinalFight");
			//cm.getMap().spawnZakum(650, -215);
			cm.getMap(230040420).resetFully();//地图刷新
			cm.gainItem(5350000,-1);
			cm.warpParty(230040420, 0);
			cm.mapMessage("因为受到了高级鱼饵罐头的吸引，鱼王出来了！");
			cm.dispose();
		} else {
			cm.playerMessage(5, "想见鱼王请带来高级鱼饵罐头！");
			cm.dispose();
		}
		cm.dispose();
    }
}