function enter(pi) {
	
	if(pi.getMap().getAllMonstersThreadsafe().size()==0){
		if(pi.getPlayer().getMapId()==240060000){
			pi.warp(240060100,0);
		}else{
			pi.warp(240060200,0);
		}
	}else{
	    pi.mapMessage(6, "前进的路被阻挡了。")
	}
}