// Viper Transformation quest

function enter(pi) {
    var pt = pi.getEventManager("KyrinTrainingGroundV");
    if (pt == null) {
        pi.warp(120000101, 0);
    } else if (pt.getInstance("KyrinTrainingGroundV").getTimeLeft() < 120000) {
		pi.completeQuest(6370);
		pi.completeQuest(6330);
		//pi.打开NPC(2007,6370);
		pi.getPlayer().changeSkillLevel(5221006,1,10);
		pi.getPlayer().changeSkillLevel(5121003,1,10);
        pi.warp(120000101, 0);
    } else {
        pi.playerMessage("请坚持2分钟。");
    }
}