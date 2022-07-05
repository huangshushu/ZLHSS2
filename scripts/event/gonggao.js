/*
公告
*/
var 公告1 = "欢迎使用ZEVMS冒险岛服务端";
var 公告2 = "欢迎使用ZEVMS冒险岛服务端";

var Message = new Array(
    ""+公告1+"",
    ""+公告2+""
	);

var setupTask;

function init() {

    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 1000*60*5);
}

function cancelSchedule() {
	
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.broadcastServerMsg("[游戏快讯]: " + Message[Math.floor(Math.random() * Message.length)]);
    
}

