/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：活动开始时间提示
 *  @Author Kent 
 */
        ﻿var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR_OF_DAY, 21);
    cal.set(java.util.Calendar.MINUTE, 30);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 24;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {
  scheduleNew();
    var allPlayers = em.getMapFactoryMap(101050000).getCharacters();//取得当前地图上面的所有玩家
       allPlayers = allPlayers.iterator();
    while (allPlayers.hasNext()) {//循环每一个玩家
			var player = allPlayers.next();
			/*if(player.haveItem(2431643)||player.haveItem(2430865)){
				player.modifyCSPoints(1, 16);
				player.modifyCSPoints(2, 30);
				player.dropMessage(5, "尊贵的理财用户[2倍泡点奖励]：获得 [ 16 ] 点券 [ 30 ] 抵用");
			}else {
				player.modifyCSPoints(1, 8);
				player.modifyCSPoints(2, 15);
				player.dropMessage(5, "[泡点奖励]：获得 [ 8 ] 点券 [ 15 ] 抵用券");
			}*/
			player.openNpc(9310362, "市场奖励");
			em.broadcastServerMsg(5121048, "恭喜所有在自由市场的玩家都获得了每日低保奖励。" ,true);
            
            
    }
}

