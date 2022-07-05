var setupTask;
var maps = [
    390000000,
    390000100,
    390000200,
    390000300,
    390000400,
    390000500,
    390000600,
    390000700,
    390000800,
    390000900,
    390001000
];

//消耗物品和数量
                //id，数量
var useItems = [4001214, 1];
function init() {
    scheduleNew();
}

function scheduleNew() {
    var nextTime = 59*1000;//cal.getTimeInMillis();
    nextTime += java.lang.System.currentTimeMillis() ;
    setupTask =  em.scheduleAtTimestamp("start", nextTime);

}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {
    if (em.getChannel() == 1) {
        scheduleNew()
    } else {
        return;
    }
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    var minute = cal.get(java.util.Calendar.MINUTE);
    if (hour == 11 && minute == 50) {
        em.broadcastServerMsg(5120008, "[金里奇] : 宝物仓库即将在20点开启！", true);
    }
    if (hour == 12 && minute == 0) {
        em.broadcastServerMsg(5120008, "[金里奇] : 宝物仓库开启了！", true);
        var ch = em.getChannelServer();
        var players = ch.getPlayerStorage().getAllCharactersThreadSafe();
        var ran = Math.floor(Math.random() * maps.length);
        for (var i in players) {
            if (players[i] != null && players[i].haveItem(useItems[0], useItems[1])) {
                // players[i].changeMap(maps[ran]);
                players[i].gainItem(useItems[0], -useItems[1]);
                players[i].dropMessage(5, "已经将你传送至金里奇的宝物仓库");
            } else if (players[i] != null) {
                players[i].dropMessage(5, "物品不足，无法将你传送至金里奇的宝物仓库");
            }
        }
    }

}
function monsterDrop(eim, player, mob) {}