var setupTask;

function init() {
	scheduleNew();
}

function scheduleNew() {
	var nextTime = 15*1000;//cal.getTimeInMillis();
	nextTime += java.lang.System.currentTimeMillis() ;
	setupTask =  em.scheduleAtTimestamp("start", nextTime);
	
}

function cancelSchedule() { 
	if (setupTask != null)
		setupTask.cancel(true);
}

function start() {
	
	scheduleNew()
	var hour=new Date(java.lang.System.currentTimeMillis()).getHours();
	var minute=new Date(java.lang.System.currentTimeMillis()).getMinutes();
	
	var r = Math.ceil(Math.random() * 100); 
	var HWSL = em.GetPiot("行商货物数量","1");
	var 星期 = em.获取当前星期();
	/*var 最高等级 = em.获取最高等级玩家名字();
	var 最高人气 = em.获取最高人气玩家名字();
	var 最高在线 = em.获取最高在线玩家名字();
	var 最高财富 = em.获取最高财富玩家名字();*/
	
	if ( minute == 10  ) {
	em.worldMessage(5,"[巅峰排行榜] : [ 最高等级:"+em.获取最高等级玩家名字()+" ] [ 最高人气:"+em.获取最高人气玩家名字()+" ] [ 最高在线:"+em.获取最高在线玩家名字()+" ] [ 最高财富:"+em.获取最高财富玩家名字()+" ]"); 
    }

	/*if ( minute == 20 && second == 10 ) {
	cm.worldMessage2(3,"[巅峰排行榜] : [ 最高等级:"+最高等级+" ] [ 最高人气:"+最高人气+" ] [ 最高在线:"+最高在线+" ] [ 最高财富:"+最高财富+" ]"); 
    }

	if ( minute == 30 && second == 10 ) {
	cm.worldMessage2(3,"[巅峰排行榜] : [ 最高等级:"+最高等级+" ] [ 最高人气:"+最高人气+" ] [ 最高在线:"+最高在线+" ] [ 最高财富:"+最高财富+" ]"); 
    }
	
	if ( minute == 40 && second == 10 ) {
	cm.worldMessage2(3,"[巅峰排行榜] : [ 最高等级:"+最高等级+" ] [ 最高人气:"+最高人气+" ] [ 最高在线:"+最高在线+" ] [ 最高财富:"+最高财富+" ]"); 
    }
	
	if ( minute == 50 && second == 10 ) {
	cm.worldMessage2(3,"[巅峰排行榜] : [ 最高等级:"+最高等级+" ] [ 最高人气:"+最高人气+" ] [ 最高在线:"+最高在线+" ] [ 最高财富:"+最高财富+" ]"); 
    }*/
	
	
	}
function monsterDrop(eim, player, mob) {}