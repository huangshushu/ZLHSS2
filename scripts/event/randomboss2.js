var setupTask;
//npc出现的地图
var maps = [
	//id  名字  x坐标  y坐标
	[100000000, "射手村", 693, 94],
	[104000000, "明珠港", 693, 94],
	[270000000, "三个门", 693, 94]
	
];
//召唤npc的id
var npcid = 9310022;
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
	var cal = java.util.Calendar.getInstance();
	
    if (hour%3 == 0 && minute == 0 ) {
		var ran = Math.floor(Math.random() * maps.length);
		var map = em.getMapFactoryMap(maps[ran][0]);
		map.spawnNpc(npcid, new java.awt.Point(maps[ran][2],maps[ran][3]));
        em.broadcastServerMsg(5120008, "随机NPC出现在<"+maps[ran][1]+">了！", true);
    }
}
function monsterDrop(eim, player, mob) {}