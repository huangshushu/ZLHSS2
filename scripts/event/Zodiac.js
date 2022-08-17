/*
	作者：AND 358122354
	功能：12生肖竞猜
*/
var hour;
var min;
var year;
var month;
var day;
var date;
var timeStamp;
var setupTask;
var Name =Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
function init() {
	em.setProperty("Zodiac", "无");
	em.setProperty("LastZodiac", "无");
    em.setProperty("check", "0");
	em.setProperty("change", "-1");
	em.setProperty("AAA", "0");
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
	hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	min = cal.get(java.util.Calendar.MINUTE);
	refreshDates(cal);
	if (hour < 20){
		date = year + "-" + month + "-" + day + " 19:55:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg("[12生肖竞猜活动] 开奖活动将在-晚上8点整-开始，领奖时间在晚上8点~10点期间，请大家注意！");
	}else if (hour == 20&&min==00){
        startEvent();
	}else{
		date = year + "-" + month + "-" + (day+1) + " 19:55:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg("[12生肖竞猜活动]:开奖活动将在明天晚上8点整再次开始，领奖时间在晚上8点~10点期间，请大家注意！");
	}
}

function startEvent() {
    em.setProperty("check", "1");//开奖中
    em.schedule("startEvent1", 1000 * 60*4);//
	em.broadcastServerMsg(5120117, "[12生肖竞猜] 朋友们请注意！5分钟后福利彩票即将开奖！",true);
    em.broadcastServerMsg("[12生肖竞猜]:5分钟后彩票福利系统即将开奖。开奖后请中奖玩家在8~10点内领取奖励，逾期无效！");
}
function startEvent1() {
	em.schedule("startEvent2", 1000 * 60);//
	em.broadcastServerMsg(5120117, "[12生肖竞猜] 朋友们请注意！1分钟后福利彩票即将开奖！",true);
    em.broadcastServerMsg("[12生肖竞猜]:1分钟后彩票福利系统即将开奖。开奖后请中奖玩家在8~10点内领取奖励，逾期无效！");
}
function startEvent2() {
	em.setProperty("check", "2");//领奖中
	if (em.getProperty("change")=="-1"){
		var Number = Math.floor(Math.random()*Name.length);
	}else{
		var Number = parseInt(em.getProperty("change"));
	}
	em.setProperty("change", "-1");
	em.setProperty("Zodiac",""+Name[Number]);
	save();
	em.schedule("finishEvent", 1000 * 60*60*2);//
}
function finishEvent() {
	em.setProperty("AAA", "0");
	em.schedule("change", 1000 * 60);//
	em.setProperty("check", "0");//开奖结束，领取奖励状态关闭
    scheduleNew();
}
function change() {
	var Last = em.getProperty("Zodiac");
	em.setProperty("LastZodiac", ""+Last);
	em.setProperty("Zodiac", "待开结果");
}
function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}
function save() {
	var B = em.getChannelAllChr();
	B = B.iterator();
	while (B.hasNext()){
		if (em.getProperty("AAA")=="1"){
			break;
		}
		var player = B.next();
		player.openNpc(9000030, "savezodiac");
	}
}
function refreshDates(calendar) {
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
}