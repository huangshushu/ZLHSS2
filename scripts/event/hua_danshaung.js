

var setupTask;
function init() {
    em.setProperty("change", "-1");
    scheduleNew();
}
function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60000;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}
function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var hour = myDate.getHours();
    var Minutes = myDate.getMinutes();
    if (em.getChannel() != 1) {
        return;
    }

    //单双赌博
    var haha = (year + "" + month + "" + day) * 1;
    var 随机数字1 = Math.floor(Math.random() * 9 + 0);// 1-20
    var 随机数字2 = Math.floor(Math.random() * 9 + 0);// 1-20
    var 随机数字3 = Math.floor(Math.random() * 9 + 0);// 1-20
    if (随机数字1 == 随机数字2) {
        var 随机数字2 = Math.floor(Math.random() * 9 + 0);// 1-20	
    }
    var 总和 = 随机数字1 + 随机数字2 + 随机数字3;
    var 给予 = "" + 随机数字1 + "+" + 随机数字2 + "+" + 随机数字3 + "=" + 总和 + "";
    var 大小, 单双;
    if (总和 > 13) {
        大小 = "大";
    } else {
        大小 = "小";
    }
    if (总和 % 2 == 0) {
        单双 = "" + 大小 + "双";
    } else {
        单双 = "" + 大小 + "单";
    }
    幸运赌博(单双, 给予, haha);
    //	
    var map = em.getMap(101050000);
    if (map != null) {
        //
        var 开奖期数1 = parseInt(目前开奖期数());
        em.broadcastYellowMsg("[幸运28]: 第[" + 开奖期数1 + "]期.开奖结果:" + 给予 + "[" + 单双 + "]");
    }
}



function 幸运赌博(type, type2, time) {
    return em.sql_Insert("INSERT INTO `savezodiac` (`type`, `type2`, `time`, `qishu`) VALUES ('" + type + "', '" + type2 + "', '" + time + "', '" + parseInt(目前开奖期数() + 1) + "')");
}

function 目前开奖期数() {
    var i = -1;
    var sql = "select qishu from savezodiac order by id desc limit 1;";
    var push = em.sql_Select(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var qishu = result.get("qishu");
    }

    return qishu;
}