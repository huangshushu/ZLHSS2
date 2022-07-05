var setupTask;
var map;
function init() {
    scheduleNew();
}

function scheduleNew() {

    var nextTime = 60 * 1000;//cal.getTimeInMillis();
    nextTime += java.lang.System.currentTimeMillis();
    setupTask = em.scheduleAtTimestamp("start", nextTime);

}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {

    scheduleNew()
    var hour = new Date(java.lang.System.currentTimeMillis()).getHours();
    var minute = new Date(java.lang.System.currentTimeMillis()).getMinutes();
    var 星期 = em.获取当前星期();
	var 随机 = Math.ceil(Math.random() * 10);
    if (minute == 30 && 随机 == 1){
        var eim = em.newInstance("Qyu");
        var redm1 = getredm(0, 999);
        for (var i = 1; i < 7; i++) {
            if (i == redm1) {
                map = eim.setInstanceMap(104040001 + i);
                map.spawnNpc(9001106, new java.awt.Point(762, -85));
                em.broadcastServerMsg(5120004, " 射手村训练场II 出现了神秘人正在派送礼物。", true);
            }
        }
    }
    if (hour == 20 && minute == 32 && 星期 == 2) {
        map.removeNpc(9001106);
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
    }
    ;
    return function rand(number) {
        return Math.ceil(rnd() * number);
    };
})();