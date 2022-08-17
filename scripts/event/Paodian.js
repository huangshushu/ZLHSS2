/*    
 *  @名称：    泡点
 *  @制作：    皮皮工作室
 *  @时间：    2016年12月30日
 */
        ﻿var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
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
        if (player.haveItem(2436384, 1)) {          		 //元宝4级
            player.modifyCSPoints(1, 140000);
            player.dropMessage(5, "[元宝④级]：获得 [ 140000 ] 点券");

        } else if (player.haveItem(2436383 , 1)) {           //元宝3级
            player.modifyCSPoints(1, 120000);
            player.dropMessage(5, "[元宝③级]：获得[ 120000 ] 点券");
			
		} else if (player.haveItem(2436382 , 1)) {           //元宝2级
            player.modifyCSPoints(1, 100000);
            player.dropMessage(5, "[元宝②级]：获得 [ 100000 ] 点券");
			
		} else if (player.haveItem(2436381 , 1)) {           //元宝1级
            player.modifyCSPoints(1, 80000);
            player.dropMessage(5, "[元宝①级]：获得 [ 80000 ] 点券");
			
		} else if (player.haveItem(2436380 , 1)) {           //蘑菇2级
            player.modifyCSPoints(1, 60000);
            player.dropMessage(5, "[蘑菇②级]：获得 [ 60000 ] 点券");
			
		} else if (player.haveItem(2436379 , 1)) {           //蘑菇1级
            player.modifyCSPoints(1, 40000);
            player.dropMessage(5, "[蘑菇①级]：获得 [ 40000 ] 点券");

        } else {
            player.modifyCSPoints(1, 20000);
            player.dropMessage(5, "[泡点奖励]：获得 [ 20000 ] 点券");
        }
       }
}
