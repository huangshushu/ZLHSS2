var setupTask;
var mobid = 9600061;
var mapList = Array(
500000000,
105000000,
600000000,
101050000,
130000000,
101050000,
211000000
        );
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
        nextTime += 1000 * 60 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function setup() {
    
	//return eim;
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	scheduleNew();
	 if ((hour<=23 && hour >=11) && (min == 0)) {
		for(var j=0; j<mapList.length; j++) {
			var mapid = mapList[j];
			var eim=em.getInstance("TianjiangZakun_"+mapid);
			if (eim==null)
				eim=em.newInstance("TianjiangZakun_"+mapid);
			var map = eim.setInstanceMap(mapid);
			map.resetFully();
    		map.killMonster(mobid);
			//java.lang.System.out.println("清空小扎昆完成 mapid:"+mapid);
		}
		for (var i = 0; i<3; i++) {
			makeMonster(em);
		}
		em.broadcastServerMsg(5120116, "疯狂 字母君 又出现各种【旅游地图】捣乱了，大家快去消灭他它吧！",true);
	}
    
}

function makeMonster(em) {
	var mapid = mapList[Math.floor(Math.random() * mapList.length)];
	var eim=em.getInstance("TianjiangZakun_"+mapid);
	if (eim==null)
		eim=em.newInstance("TianjiangZakun_"+mapid);
	var map = eim.setInstanceMap(mapid);
	map.respawn(false);
    var mob = em.getMonster(mobid);
    var modified = em.newMonsterStats();
    modified.setOHp(2);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    //var mapForMob = eim.getMapInstance(mapid);
	var x = (Math.floor(Math.random()*200+80))*-1;
	//java.lang.System.out.println("x:"+x);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(x, -85));
	//eim.dispose();
	//java.lang.System.out.println("[小扎昆]频道："+em.getChannel()+" / 地图编号："+mapid+" / 横坐标："+x);
}

function allMonstersDead(eim) {
	//eim.dispose();
}
function monsterValue(eim, mobId) {
    return 1;
}