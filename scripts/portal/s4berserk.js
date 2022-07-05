function enter(pi) {
    if (pi.getQuestStatus(6153) == 1) {
        if (!pi.haveItem(4031471)) {
            if (pi.haveItem(4031475)) {
                var em = pi.getEventManager("4jberserk");
                if (em == null) {
                    pi.playerMessage("事件不存在，请联系管理员。");
                } else {
                    em.startInstance(pi.getPlayer());
                    return true;
                }
                // start event here
                // if ( ret != 0 ) target.message( "Other character is on the quest currently. Please try again later." );
            } else {
                pi.playerMessage("要进入，你需要一把遗忘神殿的钥匙。");
            }
        } else {
            pi.playerMessage("你已经有#z4031475#了。");
        }
    } else {
        pi.playerMessage("你不能进入封闭的地方。");
    }
    return false;
}