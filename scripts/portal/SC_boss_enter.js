var 挑战次数 = 1;

function enter(pi) {
    //pi.openNpc(2081005);
	
	if (pi.getPlayerCount(231050000) <= 0) { // krex. Map
        var krexMap = pi.getMap(231050000);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLoga("蟾蜍领主") >= 挑战次数) {
		pi.playerMessage(5, "一个账号一天只能挑战 " + 挑战次数 + " 次蟾蜍领主。");
		return true;
	}else if(pi.getPlayerCount(211061100) > 0){
		pi.playerMessage(5, "对抗BOSS的挑战已经开始了，你不能进入到里面。");
		return false;
	}
    if (pi.haveItem(4031582)) {
        pi.gainItem(4031582, -1);
        pi.warp(231050000);
		pi.setBossLoga("蟾蜍领主");
		pi.getMap(231050000).给时钟(30, true, true);
    } else {
       
        pi.mapMessage(6, "你没有宫殿出入证!")
    }
}




