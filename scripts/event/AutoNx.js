var setupTask;
 
function init() {
    scheduleNew();
}
 
function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.SECOND, 5);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 100*10; 
}
		setupTask = em.scheduleAtTimestamp("start", nextTime);
}
 
function cancelSchedule() {
    setupTask.cancel(true);
}
 
function start() {
    scheduleNew();
    em.getChannelServer().AutoNx(10);
}  