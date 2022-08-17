function enter(pi) {
	switch(pi.getPlayer().getMapId()){
		case 109030001:
			if(pi.getPlayer().getPosition().y < -70){
				pi.warp(109030002,0);
				break;
			}
			
		case 109030002:
			if(pi.getPlayer().getPosition().y < -610){
				pi.warp(109030003,0);
				break;
			}
		case 109030003:
			if(pi.getPlayer().getPosition().y < -609){
				pi.getPlayer().getClient().getChannelServer().getEvent(Packages.server.events.MapleEventType.上楼上楼).finished(pi.getPlayer());
				pi.warp(910000000,0);
				break;
			}
	}

}