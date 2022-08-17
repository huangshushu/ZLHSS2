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
    em.setProperty("expRate", "1");
	em.setProperty("dropRate", "1");
	em.setProperty("mesoRate", "1");
	em.setProperty("duration", "10800000");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("DoubleRate");
	var cservs = Packages.handling.channel.ChannelServer.getAllInstances();
	var it = cservs.iterator();
	while(it.hasNext()){
		var cserv = it.next();
		var expRate =  cserv.getExpRate();
		var mesoRate =  cserv.getMesoRate();
		var dropRate =  cserv.getDropRate();
		//em.broadcastYellowMsg("[双倍系统]目前 " + cserv.getChannel() + " 频道经验倍率为：" + expRate + " 金币倍率为：" + mesoRate + " 掉落倍率为：" + dropRate);
		em.setProperty("oldExpRate", expRate + "");
		em.setProperty("oldMesoRate", mesoRate + "");
		em.setProperty("oldDropRate", dropRate + "");
		cserv.setExpRate(expRate * parseInt(em.getProperty("expRate")));
		cserv.setMesoRate(mesoRate * parseInt(em.getProperty("mesoRate")));
		cserv.setDropRate(dropRate * parseInt(em.getProperty("dropRate")));
		//em.broadcastYellowMsg("[双倍系统] " + cserv.getChannel() + " 线双倍经验倍率开启为：" + cserv.getExpRate());
		em.broadcastYellowMsg("[双倍系统] 双倍系统激活，目前 " + cserv.getChannel() + " 频道经验倍率为：" + cserv.getExpRate() + " 金币倍率为：" + cserv.getMesoRate() + " 掉落倍率为：" + cserv.getDropRate());
	}
    scheduleNew();
	
	
    eim.startEventTimer(em.getProperty("duration")); // 限制时间，单位毫秒
    return eim;
}

function scheduleNew() {
    setupTask = em.schedule("start", em.getProperty("duration"));
}

function cancelSchedule() {
	var cservs = Packages.handling.channel.ChannelServer.getAllInstances();
	var it = cservs.iterator();
	while(it.hasNext()){
		var cserv = it.next();
		var expRate =  cserv.getExpRate();
		cserv.setExpRate(em.getProperty("oldExpRate"));
		cserv.setMesoRate(em.getProperty("oldMesoRate"));
		cserv.setDropRate(em.getProperty("oldDropRate"));
	}
    em.broadcastYellowMsg("[双倍系统]双倍时间已提前结束");
    setupTask.cancel(true);
}

function start() {
    var cservs = Packages.handling.channel.ChannelServer.getAllInstances();
	var it = cservs.iterator();
	while(it.hasNext()){
		var cserv = it.next();
		var expRate =  cserv.getExpRate();
		cserv.setExpRate(em.getProperty("oldExpRate"));
		cserv.setMesoRate(em.getProperty("oldMesoRate"));
		cserv.setDropRate(em.getProperty("oldDropRate"));
	}
    em.broadcastYellowMsg("[双倍系统]双倍时间已结束");
}

