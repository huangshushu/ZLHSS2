/*
修改by宗達 20160106 06:52
*/

var Message = new Array(
    "如果遇到不能点技能/能力值/不能进传送/不能点NPC,请在对话框打@ea就可以了",
    "/找人 玩家名字 可以用來找人哦",
	"禁止开外挂，游戏愉快！！",
	"关于玩家指令可以使用@help/@帮助查看",
    "如有bug请报告GM");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 300000);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[帮助]" + Message[Math.floor(Math.random() * Message.length)]);
}

