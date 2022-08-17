var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 3600000;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    weekday -= 1;
    scheduleNew();
    if (min == 00) {
        allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            player.openNpc(9310373, "水果开奖");
        }
    }

    else if (min == 01) {
        allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            player.openNpc(9310373, "水果开奖提示");
        }
    }

    else if (min == 30) {
        allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            player.openNpc(9310373, "水果开奖结果");
        }
    }

    else if (min == 31) {
        allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//取得当前所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            player.openNpc(9310373, "水果结束提示");
        }
    }
}