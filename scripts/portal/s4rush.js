function enter(pi) {
    if (pi.getQuestStatus(6110) == 1) {
        if (pi.getParty() != null) {
            if (!pi.isLeader()) {
                pi.playerMessage("请找队伍队长来找我。");
            } else {
                //if (pi.getParty().getMembers().size < 2) {
                //    pi.playerMessage("队伍人数必须大于两个以上。");
                //} else {
                //if (!pi.isAllPartyMembersAllowedJob(1)) {
                //    pi.playerMessage("队伍裡有人职业不符合。");
                //} else {
                var em = pi.getEventManager("4jrush");
                if (em == null) {
                    pi.playerMessage("尚未找到副本，请联繫管理员。");
                } else {
                    em.startInstance(pi.getParty(), pi.getMap());
                    return true;
                }
                //}
                //}
            }
        } else {
            pi.playerMessage(5, "尚未组队，请组队后再来找我。");
        }
    } else {
        pi.playerMessage("你不能进入封闭的地方。");
    }
    return false;
}