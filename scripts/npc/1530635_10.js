/*
	脚本名：连续签到
	作者：Memory
*/
var status = 0;
var times = 0;
var lasttime = 0;
var cal;
var year;
var month;
var day;
var date;

var listItem = Array(
    Array(1012478, 1), //凝聚之力结晶石
    Array(1032136, 1), //地狱火焰
    Array(1113149, 1),  //银花戒指
    Array(1122254, 1),  //毒蛇终结者吊坠
    Array(1132272, 1),  //黄金四叶草腰带
    Array(1152170, 1),  //皇家黑色金属护肩
    Array(1162025, 1), //粉色圣杯
    Array(1022231, 1),//永生之石 
    Array(1182087, 1), //水晶幸运徽章
    Array(4033667, 6) //意志盒
);
var 限制天 = 10;// 限制签到最高天数
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    //开始执行
    if (status == 0) {
/*		if (cm.getPlayer().getName() != "木公子观鱼") {
			cm.sendOk("你不是哈士奇，无法命令我。");
			cm.dispose();
			return;
		}
	*/	var info = getSignInfo();
        var text = "#b【连续签到】#k\r\n\r\n";
        var isSign = ""
        if (!info['isDone']) {
            text += "您已经连续签到了#e#r" + info['times'] + "#k#n天。\r\n#r(同一账号下只限一个角色进行连续签到)\r\n#k您今天签到可以领取：\r\n";
        } else {
            isSign = "#r(今天已签到)#b";
            text += "您已经连续签到了#e#r" + info['times'] + "#k#n天。\r\n#r(同一账号下只限一个角色进行连续签到)\r\n#k您明天签到可以领取：\r\n";
        }
        text += "#b#i" + listItem[info['times']][0] + ":##t" + listItem[info['times']][0] + "##rx" + listItem[info['times']][1] + "#k个\r\n";
        //for(var i=0; i<listItem.length; i++) {
        //	text+="第"+(i+1)+"天：#b#i"+listItem[i][0]+":##t"+listItem[i][0]+"##rx"+listItem[i][1]+"#k个\r\n";
        //}
        text += "\r\n#b#L1#我要签到" + isSign + "#l\r\n";
        text += "#L2#查看所有奖励#l";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 1) {
            var info = getSignInfo();
            if (cm.getPlayer().getTodayOnlineTime() < 120) {
                cm.sendOk("在线时间小于120分钟，不能签到，请过#r" + (120 - cm.getPlayer().getTodayOnlineTime()) + "分钟再来签到吧！#k");
                cm.dispose();
                return;
            }
            //if (cm.getPlayer().getLevel< 120)
            if (info['isDone']) {
                cm.sendOk("您今天已经签到过了，不能再进行签到" + info['isDone']);
                cm.dispose();
                return;
            }
            cm.sendOk("恭喜您，签到成功");

            cm.gainItem(listItem[info["times"]][0], listItem[info["times"]][1]);
            var times = info["times"] * 1 + 1;
            if (info["times"] == 限制天) {
                times = 0;
            }
            var lastTime = times
            if (times == 0) {
                lastTime = 9;
            }
            cm.worldSpouseMessage(0x07, "[连续签到] : 玩家【" + cm.getChar().getName() + "】连续" + (lastTime) + "天签到，获取了丰厚的奖励");
            updateSign(times);
            cm.dispose();
        } else if (selection == 2) {
            var text = "#r连续签到每日奖励如下，温馨提示签到满9天可以获得BOSS套装属性：\r\n";
            for (var i = 0; i < listItem.length; i++) {
                text += "第" + (i + 1) + "天：#b#i" + listItem[i][0] + ":##t" + listItem[i][0] + "##rx" + listItem[i][1] + "#k个\r\n";
            }
            cm.sendOk(text);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}

function getSignInfo() {
    var lastTimestamp = null;
    var isDone = false;
    var pstmt = cm.sql_Select("select lasttime, times from days_check_log where charid = ?",cm.getPlayer().getAccountID())
    if (pstmt.length > 0) {
        times = pstmt[0].get("times");
        lasttime = pstmt[0].get("lasttime");
        lastTimestamp = lasttime.substring(0, 10);
        lastTimestamp += " 00:00:00";
        lastTimestamp = java.sql.Timestamp.valueOf(lastTimestamp).getTime();
    } else {
        cm.sql_Insert("insert into days_check_log(charid) values(?)" + cm.getPlayer().getAccountID());
        times = 0;
    }
    cal = java.util.Calendar.getInstance();
    refreshDates(cal);
    date = year + "-" + month + "-" + day + " 00:00:00";
    var currentTimestamp = java.sql.Timestamp.valueOf(date).getTime();
    if (Math.floor(currentTimestamp * 1 - lastTimestamp * 1) <= 0) {
        isDone = true;
    }
    //java.lang.System.out.println((currentTimestamp-lastTimestamp));
    if ((currentTimestamp - lastTimestamp) > (86400 * 1000)) {
        times = 0;
    }
    var info = new Array();
    info['lastTimestamp'] = lastTimestamp;
    info['currentTimestamp'] = currentTimestamp;
    info['times'] = times;
    info['isDone'] = isDone;
    return info;
}

function updateSign(times) {
    cm.sql_Update("update days_check_log set times=?, lasttime=CURRENT_TIMESTAMP where charid=?", times, cm.getPlayer().getAccountID());
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