var setupTask;
var map;
function init() {
	scheduleNew();
}

function scheduleNew() {
	
	var nextTime = 60*1000;//cal.getTimeInMillis();
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
	if (hour == 7&& minute == 0) 
	{
	var eim = em.newInstance("Laba3");
	var redm1 = getredm(6, 999);
        for (var i = 0; i < 0; i++) {
        if (i == redm1) {
         map = eim.setInstanceMap(910000001);
         map.spawnNpc(9270065, new java.awt.Point(859, -146));
	   em.broadcastServerMsg(5120020, "市场1洞大量收购各种鱼类啦，需要出售鱼鱼", true);
                       }
                    }
    }
  if (hour == 8 && minute == 0 ) 
	{
         map.removeNpc(9270065);
        em.broadcastServerMsg(5120020, "今天已经收购完成了，明天同一时间，我还会再来收购的", true);
                       }
	
}

















function monsterDrop(eim, player, mob) {}






















function getredm(max, count) {
    var redm = Math.floor(Math.random() * max);
    if (redm == count) {
        redm = getredm(max, count)
    }
    return redm;
}

rand = (function () {
    var today = new Date();
    var seed = today.getTime();
    function rnd() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / (233280.0);
    };
    return function rand(number) {
        return Math.ceil(rnd() * number);
    };
})();