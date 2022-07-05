
 function enter(pi) {
    if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
	pi.playPortalSE();
	pi.warp(140010100, 2);
    } else {
	pi.playerMessage(5, "里恩镇就在右边。 走在右边的门户，进入镇里会见莉林.");
    }
}