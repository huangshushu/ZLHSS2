var status = -1;
var year;
var month;
var day;
var calendar;
var date;
var starDate = "2018-7-28";
var endDate = "2018-8-28";

/*function action(mode, type, selection) {
    calendar = java.util.Calendar.getInstance();
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
    date = year + "-" + month + "-" + day;*/
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("看来你对这个并不感兴趣..");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getEventCount("开锁游戏") >= 1) {
            cm.sendOk("抱歉，解锁小游戏副本一天只能进入一次!");
            cm.dispose();
            return;
        }
        if (cm.getEventCount("开锁游戏") >= 0) {
            cm.sendYesNo("你是否想要就开始#b#e解锁小游戏#n#k每日一次#r一次十个机会#k？");
       } else {
            cm.sendOk("下次活动开放时间:" + starDate + " 至 " + endDate + " ,现在活动还没有开始!。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.setEventCount("开锁游戏")
        cm.opennpc(1530636, 1004)
        //cm.getPlayer().startMapTimeLimitTask(60 * 10, cm.getMap(101050000));
        cm.dispose();
    }

