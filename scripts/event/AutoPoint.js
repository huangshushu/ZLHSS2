/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：泡点
 *  
 *  @Author Jackson 
 */

/* global em, java */

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60000;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var map = em.getMap(101050000);
    if (map != null) {
        var allPlayers = map.getCharacters();//取得当前地图上面的所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
            if (player.haveItem(2431092, 1)) { //超级VIP
                player.modifyCSPoints(1, 150);
                player.modifyCSPoints(2, 150);
                player.dropMessage(-1, "[神豪泡点奖励] 获得 [ 150 ] 点卷 [ 150 ] 抵用卷 ");
                player.dropMessage(-1, "[神豪泡点奖励] 获得 [ 150 ] 点卷 [ 150 ] 抵用卷 ");
			 } else if (player.haveItem(2431643, 1)) { //普通VIP
                player.modifyCSPoints(1, 100);
                player.modifyCSPoints(2, 100);
                player.dropMessage(-1, "[年费泡点奖励] 获得 [ 100 ] 点卷 [ 100 ] 抵用卷 ");
                player.dropMessage(-2, "[年费泡点奖励] 获得 [ 100 ] 点卷 [ 100 ] 抵用卷 ");
            } else if (player.haveItem(2430865, 1)) { //普通VIP
                player.modifyCSPoints(1, 80);
                player.modifyCSPoints(2, 80);
                player.dropMessage(-1, "[会员泡点奖励] 获得 [ 80 ] 点卷 [ 8 0] 抵用卷 ");
                player.dropMessage(-2, "[会员泡点奖励] 获得 [ 80 ] 点卷 [ 8 0] 抵用卷 ");
            } else {//平民
                player.modifyCSPoints(1, 50);
                player.modifyCSPoints(2, 50);
                player.dropMessage(-1, "[普通会员泡点奖励] 获得 [ 5 0] 点卷 [ 5 0] 抵用卷 ");
                player.dropMessage(-2, "[普通会员泡点奖励] 获得 [ 50 ] 点卷 [ 5 0] 抵用卷 ");
            }
        }
    }
}