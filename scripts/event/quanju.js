var SetupTask;

function init() {
    Schedule();
}

function Schedule() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);

    var nexttime = cal.getTimeInMillis();

    while (nexttime <= java.lang.System.currentTimeMillis()) {
        nexttime += 1000 * 180 * 180;
    }
    SetupTask = em.scheduleAtTimestamp("notice", nexttime);
}

function cancelSchedule() {
    if (SetupTask != null) {
        SetupTask.cancel(true);
    }
}

function notice() {
    /* 10分钟执行 */
    em.broadcastServerMsg(5122011, "[ 幸运女神 ] 通告 通告 !!! 10 S 后自由将有幸运女神降临 并且携有物品发送给玩家 !! ( 仅自由内玩家有效 )", true);
    /* 延迟 10S 开始发送 */
    SetupTask = em.scheduleAtTimestamp("Start", 10000);
}

function Start() {
    /* 开始计时新的一轮 */
    Schedule();
    /* 筛选出指定地图且发送并弹出信息框 */
    var AllPlayers = em.getMapFactoryMap(910000000).getCharacters();
    AllPlayers = AllPlayers.iterator();
    while (AllPlayers.hasNext()) {
        var player = AllPlayers.next();
        player.gainItem(4031997, 1,"幸运女神");
        player.dropMessage(1, "恭喜你领到了幸运物品");
    }
}