function enter(pi) {
    if (pi.getMap().getReactorByName("rnj3_out2").getState() > 999) {
	pi.warp(926100202,0);
    } else {
	pi.playerMessage(5, "击杀怪物获得卡帕莱特的实验资料和蒙特鸠的实验资料交给罗密欧");
    }
}