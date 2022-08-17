

function enter(pi) {
    if (pi.haveItem(4001094)) {
		if(pi.getBossLog("九灵龙蛋孵化") > 0){
			pi.playerMessage(5, "每天只能孵化一次");
		}else{
			// pi.getMap().getReactorByName("dragonBaby").setState(0);
			// pi.getMap().getReactorByName("dragonBaby2").setState(0);
			pi.setBossLog("九灵龙蛋孵化");
			pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
			Packages.java.lang.Thread.sleep(1000);
			pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
			pi.getMap().getReactorByName("dragonBaby2").hitReactor(pi.getClient());
			pi.playerMessage(5, "九灵蛋发出了神秘的光，并回到了舒适地的巢中。");
			pi.gainItem(4001094, -1);
		}
	
    }
}