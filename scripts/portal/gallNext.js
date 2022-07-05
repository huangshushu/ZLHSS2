function enter(pi) {
	var map = pi.getMapId();
	if(map == 956010000){
		if(pi.getPQLog("搜刮1") == 1){
		       pi.openNpc(2040015,"搜刮1");
		}else{
		       pi.playerMessage(1, "目前入口处于关闭\r\n请给蓝光掩护罩充能");
		}
	}else if(map == 956010300){
		if(pi.getPQLog("搜刮2") == 1){
		       pi.openNpc(2040015,"搜刮2");
		}else{
		       pi.playerMessage(1, "目前入口处于关闭\r\n请给蓝光掩护罩充能");
		}
	}else if(map == 745010400){
		pi.openNpc(9330201);
	}else if(map == 745010500){
		pi.openNpc(9330201);
	}else{
		pi.openNpc(2042002);
	}
}