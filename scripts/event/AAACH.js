var setupTask;
var map=new Array( //在这里输入需要检测的地图ID
    101030300,
	101030200,
	101030100,
	101030000,
	105020100,
	980000501,
	980000101,
	450003500
);
var timer=[30,60];//每隔15~30 （随机） 分钟进行一次测谎
function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	var shijian = java.lang.Math.floor(Math.random() * 6000 + 6000);
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        var rtime=Math.floor(Math.random()*(timer[1]-timer[0])+1)+timer[0];//15-30分钟
        nextTime += 1000 * 60 * rtime;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	if (setupTask != null)
    setupTask.cancel(true);
}

function start() {
	scheduleNew();
	var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();//MP3
	//var allPlayers = em.getChannelAllChr();//彩虹
	allPlayers = allPlayers.iterator();
	while (allPlayers.hasNext()) {//循环每一个玩家
		var player = allPlayers.next();
		if(map.indexOf(player.getMapId())>=0 && player.getEventInstance()== null)
			player.openNpc(9310362, "测谎");
		}	
	}