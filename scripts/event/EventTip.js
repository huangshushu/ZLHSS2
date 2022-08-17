/*  
 *  
 *  功能：活动开始时间提示
 *  
 */
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    var month = cal.get(java.util.Calendar.MONTH) + 1; //获得月份
    var day = cal.get(java.util.Calendar.DATE); //获取日
    weekday = weekday - 1;
    scheduleNew();
    if (hour == 19 && (minute == 40) && (weekday == 6 || weekday == 5 || weekday == 0)) {
        //em.broadcastServerMsg(5121028, "20分钟后将开启 < 挤牛奶活动 >，大家抓紧时间做好准备吧！", true);
    }
    /*if (hour == 13 && (min >= 0 && min <= 20)) {
     //em.broadcastServerMsg(5120074, "下午13点的无限火力关卡开始了。20分钟后将关闭了，请抓紧挑战。", true);
     } else*/
    if (min >= 30 && min < 40) {
        ///em.broadcastServerMsg(5120074, "[数字猜猜猜] 活动开始了。 " + (40 - min) + "分钟后将关闭，请抓紧来来【凯茜】处参与吧。", true);
    } else if (min == 48 || min == 49 || min == 50) {
        if (min == 55) {
            ///em.broadcastServerMsg(5120074, "< 答题 > 在市场【凯茜】处开放了,小伙伴们抓紧时间做作业吧..", true);
        } else {
            ///em.broadcastServerMsg(5120074, "< 答题 > 活动将在" + (50 - min) + "分钟后开始,小伙伴们赶紧准备哟...", true);
        }
    } else if (min == 0) {
        ///em.broadcastServerMsg(5120074, " < 答题 > 活动结束了，请期待下个小时55分的时候继续回来答题哦.", true);
    } else if (hour == 1 && (min == 55 || min == 57 || min == 59)) {
        //em.broadcastPlayerMsg(6, "服务器IP将在2点后进行更新,请玩家安全下线等待几分钟后再上线.");
    }
    //if ((month == 2 || month == 3) && (day == 27 || day == 28 || (day >=1 && day<=5)) && hour == 16 && min == 30) {
    //	em.broadcastServerMsg(5120074,"裂空之鹰开服红包开抢啦，只有5分钟时间，速速前往领取！",true);
    //}
}