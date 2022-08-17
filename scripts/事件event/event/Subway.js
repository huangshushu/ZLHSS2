
function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //关闭门的时间，4分钟
    em.schedule("takeoff", 300000); // 开始骑的时间，5分钟
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.setProperty("docked","false");
    em.warpAllPlayer(600010004, 600010005);
    em.warpAllPlayer(600010002, 600010003);
    em.schedule("arrived", 60000); //需要移动到目的地的时间
}

function arrived() {
    em.warpAllPlayer(600010005, 600010001);
    em.warpAllPlayer(600010003, 103000100);
    scheduleNew();
}

function cancelSchedule() {
}