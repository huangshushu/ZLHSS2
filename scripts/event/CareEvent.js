var setupTask;
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 20);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60000 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
        scheduleNew();
        //var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(101050000).getCharacters();
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {
            var player = allPlayers.next();


            player.modifyCSPoints(1, 500);
            player.modifyCSPoints(2, 500);
            player.gainItem(item[index], RandomNum(1, 2),"在线小礼物");
          //  player.playerMessage(1, "幸运女神的祝福 - 让你游戏不孤单\r\n　幸运女神赠予你们 - 精品礼包");
        }
        em.broadcastServerMsg(5121069, "欢迎各位玩家- 传奇GM给大家带来了精美小礼物", true);
}

var item = [5062010, 5062500, 5062024, 5062009, 5062503];
var index = Math.floor((Math.random() * item.length)); 
function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range);
    return num;
}