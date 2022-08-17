function act() {
  	rm.gainItem(4001132,-1);
    if (rm.getReactor().getState() >= 7) {
        rm.mapMessage(6, "实验储存杯灌满了");
        var em = rm.getEventManager(rm.getMapId() == 926100100 ? "Romeo": "ZChaosPQ3");
        if (em != null && rm.getReactor().getState() >= 7) {
            var react = rm.getMap().getReactorByName(rm.getMapId() == 926100100 ? "rnj2_door": "jnr2_door");
            em.setProperty("stage2", parseInt(em.getProperty("stage2")) + 1);
            react.forceHitReactor(react.getState() + 1);
        }
    }
    if (em != null && em.getProperty("stage2").equals("3")) {
	rm.mapMessage(6, "实验室入口的大门已开启!");
    }
}