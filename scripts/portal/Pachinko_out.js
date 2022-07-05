 ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 
 function enter(pi) {
	var returnMap = pi.getSavedLocation("PACH");
	if (returnMap < 0) {
		returnMap = 100000000;
	}
	var target = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(returnMap);
	var portal = target.getPortal("pachinkoDoor");
	if (portal == null) {
		portal = target.getPortal(0);
	}
	pi.clearSavedLocation("PACH");
	pi.getPlayer().changeMap(target, portal);
	return true;
}


function enter(pi) {
    //pi.saveLocation("PVP");
    //pi.playPortalSE();
    pi.warp(910000000);//, "out00"
	return true;
	//return true;
}