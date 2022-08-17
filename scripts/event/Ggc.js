var setupTask;
function init() {
    eim = em.newInstance("Ggc");
    em.setProperty("state", "0");
    em.setProperty("dropstart", "false");
    dropTimes = 0;
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function startEvent() {
    em.setProperty("state", "0");
    em.setProperty("dropstart", "true");
    setupTask = em.schedule("dropAction", 1000 * 30 * 1);
    ///em.broadcastServerMsg(5121050, "紧急通告 紧急通告 不明生物将在 30m/s 开始进攻我们的家园 请各位玩家提高警惕", true);
    em.broadcastYellowMsg("紧急通告 紧急通告 不明生物将在 30m/s 开始进攻我们的家园 请各位玩家提高警惕");
    em.broadcastYellowMsg("紧急通告 紧急通告 不明生物将在 30m/s 开始进攻我们的家园 请各位玩家提高警惕");
    em.broadcastYellowMsg("紧急通告 紧急通告 不明生物将在 30m/s 开始进攻我们的家园 请各位玩家提高警惕");
    if (em.getChannelServer() != null) {
        var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
    }
    if (allPlayers != null) {
            var player = eim.getPlayers().get(0);
                player.getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(30));
    }
}

function dropAction() {
    var player = eim.getPlayers().get(0);
    player.openNpc(2470018, "spawn");
    dropTimes = 0;
    em.setProperty("dropstart", "false");
    ///em.broadcastServerMsg(5121050, "不明生物已涌进家园了 各方位地区正在沦陷 大家快去抢夺资源 保卫我们的家园吧", true);
}