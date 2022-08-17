function enter(pi) {
	switch(pi.getMapId()) {
		case 930000000:
			pi.warp(930000100,0);
			break;
		case 930000100:
			if (pi.getMap().getAllMonstersThreadsafe().size() <= 20) {
				pi.warpParty(930000300,0);
			} else {
				pi.playerMessage(5, "受到感染物的阻挡，清空当前地图怪物。当前怪物数量 ；"+pi.getMap().getAllMonstersThreadsafe().size()+"");
			}
			break;
		case 930000300:
			if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 1) {//&& pi.getMap().getReactorByName("spine").getState() < 3
			//var 人数=pi.getMap(930000200).getCharactersSize();
			//if (pi.haveItem(4001161,人数)) {	
				//pi.warpParty(930000300,0); 
				//pi.gainItem(4001161,-人数);
				pi.warpParty(930000400,0); 
				
			} else {
				pi.warpParty(930000400,0); 
				//pi.playerMessage(5, "需要恩局队伍人数收集毒素。");
				//assuming they cant get past reactor without it being gone
			}
			break;
	}
}