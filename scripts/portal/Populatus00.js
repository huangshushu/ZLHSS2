/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var pop = 2;
function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
        pi.playerMessage(5, "帕普拉图斯只能在頻道1和2能打。");
        return false;
    }
        if (pi.haveItem(4031870) && !pi.getMonsterCount(220080001) < 1) {
		pi.warp(922020300, 0);
        return true;
    }
		 if (pi.getPlayer().getBossLog('Populatus00')>=2) { 
     pi.playerMessage(5,"每天只能挑战2次！"); 
  return false;
  }
    if (pi.getPlayerCount(220080001) <= 0) { // 判断地图没有人
        var papuMap = pi.getMap(220080001);
        papuMap.resetFully();
        //pi.playPortalSE();
		pi.getMap(220080000).resetReactors();
        pi.warp(220080001, "st00");
		pi.getPlayer().setBossLog('Populatus00'); 
        return true;
    } else {
        if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
            //pi.playPortalSE();
            pi.warp(220080001, "st00");
			pi.getPlayer().setBossLog('Populatus00'); 
            return true;
        } else {
            pi.playerMessage(5, "里面的战斗已经开始，请稍后再尝试。");
            return false;
        }
    }
}