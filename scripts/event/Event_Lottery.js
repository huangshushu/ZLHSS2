

﻿var setupTask;
var hour;
var random;
var wMin = 55;

var lotteryRed = {};
var lotteryBlue = {};
var redBall = "";
var blueBall = "";

var TOTAL_RED = 35;
var TOTAL_BLUE = 12;

function init() {
    var tmpDate = new Date();
    var date = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1;
    var hours = tmpDate.getHours();
    random = em.getRandom(date + month + hours);
    scheduleNew();
}


function scheduleNew() {
    lotteryRed = {};
    lotteryBlue = {};

    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");

    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    var min = cal.get(java.util.Calendar.MINUTE);
    if (min < wMin) {
        cal.set(java.util.Calendar.MINUTE, 0);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        nextTime += 1000 * 60 * wMin;
        setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
    } else {
        cal.set(java.util.Calendar.HOUR_OF_DAY, 0);
        cal.set(java.util.Calendar.MINUTE, 0);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 60; //设置多久开启
        }
        nextTime += 1000 * 60 * wMin;
        setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
    }
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.broadcastNoticeWithoutPrefix("[幸运怪物乐透] 激动人心的开奖时间到啦！大家快做好准备！");
    em.schedule("randRedNumber", 5 * 1000);
}

function randRedNumber() {
    //生成开奖号码
    var rNumb;
    while (true) {
        rNumb = rand(1, TOTAL_RED);
        var temp = lotteryRed[rNumb];
        if (temp == null) {
            lotteryRed[rNumb] = rNumb;
            break;
        }
    }
    var rCount = 0;
    redBall = "";
    for (var i = 1; i <= TOTAL_RED; i++) {
        var temp = lotteryRed[i];
        if (temp != null) {
            rCount++
            var numb = String(i < 10 ? "0" + i : i);
            redBall += numb + ",";
        }
    }
    em.broadcastNoticeWithoutPrefix("[幸运怪物乐透] 第" + rCount + "个红色球:" + rNumb);
    if (rCount < 5) {
        em.schedule("randRedNumber", 5 * 1000);
    } else {
        em.schedule("randBlueNumber", 5 * 1000);
    }
}

function randBlueNumber() {
    //生成开奖号码
    var rNumb;
    while (true) {
        var rNumb = rand(1, TOTAL_BLUE);
        var temp = lotteryBlue[rNumb];
        if (temp == null) {
            lotteryBlue[rNumb] = rNumb;
            break;
        }
    }
    var bCount = 0;
    blueBall = "";
    for (var i = 1; i <= TOTAL_BLUE; i++) {
        var temp = lotteryBlue[i];
        if (temp != null) {
            bCount++
            var numb = String(i < 10 ? "0" + i : i);
            blueBall += numb + ",";
        }
    }
    em.broadcastNoticeWithoutPrefix("[幸运怪物乐透] 第" + bCount + "个蓝色球:" + rNumb);
    if (bCount < 2) {
        em.schedule("randBlueNumber", 5 * 1000);
    } else {
        redBall = redBall.substring(0, redBall.length - 1);
        blueBall = blueBall.substring(0, blueBall.length - 1);
        em.broadcastNoticeWithoutPrefix("[幸运怪物乐透] 开奖结束！红色球：" + redBall + " ,蓝色球：" + blueBall);
        if (em.getChannel() == 1) {
            //所有号码已经摇出 记录到数据库
            writeData();
            //开始统计所有中奖号码，并分配中奖金额
            checkAllLottery();
        }
        //开始计时下一次开奖时间
        scheduleNew();
    }
}

function writeData() {
    var sql = "INSERT INTO `zcustom_lotteryresult`(`number`, `redball`, `blueball`) VALUES(?, ? ,?)";
    em.customSqlInsert(sql, getCurentTime(), redBall, blueBall);
}

function checkAllLottery() {
    //检测当期中奖情况
    var nowNumber = getCurentTime();
    var checkRes = {};
    var sql = "SELECT * FROM `zcustom_lottery` WHERE `number` = ?";
    var data = em.customSqlResult(sql, nowNumber);

    for (var i = 0; i < data.size(); i++) {
        var result = data.get(i);
        if (null == result) {
            break;
        }
        var info = {};
        info['id'] = result.get('id');
        info['number'] = result.get('number');
        info['redball'] = result.get('redball');
        info['blueball'] = result.get('blueball');
        checkRes[result.get('id')] = info;
    }
    if (!isEmptyObject(checkRes)) {
        //变量内容为空
        for (var key in checkRes) {
            var id = checkRes[key]['id'];
            var number = checkRes[key]['number'];
            var redball = checkRes[key]['redball'];//红球号码
            var blueball = checkRes[key]['blueball'];//蓝色球号码
            var redballSize = redball.split(",").length;//红球个数
            var blueballSzie = blueball.split(",").length;//蓝球个数
            var redCheck = checkLotteryNumb(redball, redBall);//前区中了几个
            var blueCheck = checkLotteryNumb(blueball, blueBall);//后区中了几个
            //var level = getLotteryLevel(redCheck, blueCheck);//中了的最高几等奖
            var bonus = calBonus(redballSize, blueballSzie, redCheck, blueCheck);
            if (bonus > 0) {
                var sql = "UPDATE `zcustom_lottery` SET `check` = 1, `bonus` = ? WHERE `id` =  ?";
                em.customSqlUpdate(sql, bonus, id);
            }
        }
    }
    em.broadcastNoticeWithoutPrefix("[幸运怪物乐透] 具体中奖结果请稍后到[幸运怪物乐透]售卖点查询！");
}

function checkLotteryNumb(lottery, result) {
    //判断有多少相同的数组
    var resRed = result.split(",");
    var nRed = lottery.split(",");

    var long = resRed.length < nRed.length ? nRed : resRed;
    var short = resRed.length < nRed.length ? resRed : nRed;
    var str = "," + long.toString() + ",";
    var resultR = [];
    for (var i in short) {
        if (str.indexOf("," + short[i] + ",") >= 0) {
            resultR.push(short[i]);
        }
    }
    return (resultR.length);
}



function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0;
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function rand(lbound, ubound) {
    return Math.floor(random.nextInt(ubound - lbound + 1)) + lbound;
}

function getCurentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();

    var time = year;

    if (month < 10) {
        time += "0";
    }
    time += month;

    if (day < 10) {
        time += "0";
    }
    time += day;
    if (hh < 10) {
        time += "0";
    }
    time += hh;
    return(time);
}

/*
 * 中奖金额计算器
 * 处理计算金额
 */

function calBonus(a, b, c, d) {
    /*
     a //前区号码个数
     b //后区号码个数
     c //前区中奖号码个数
     d //后区中奖号码个数
     */
    //var price = comp(5, a) * (comp(2, b) * 2);//价格

    var first = calFirst(a, b, c, d);
    var second = calSecond(a, b, c, d);
    var third = calThird(a, b, c, d);
    var fourth = calFourth(a, b, c, d);
    var fiveth = calFiveth(a, b, c, d);
    var sixth = calSixth(a, b, c, d);

    var total = (cal(first, 10000000) + cal(second, 2000000) + cal(third, 500000) + cal(fourth, 20000) + cal(fiveth, 1000) + cal(sixth, 500));//最后的奖金
    return (total);
}

function calFirst(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = comp(2, D) * comp(0, B - D) * comp(5, C) * comp(0, A - C);
    return value;
}

function calSecond(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = (B - D) * D * comp(5, C) * comp(0, A - C);
    return value;
}

function calThird(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = comp(2, B - D) * comp(5, C) * comp(0, A - C) + comp(2, D) * comp(4, C) * comp(1, A - C);
    return value;
}

function calFourth(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = (B - D) * D * comp(4, C) * comp(1, A - C) + comp(2, D) * comp(3, C) * comp(2, A - C);
    return value;
}

function calFiveth(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = comp(2, B - D) * comp(4, C) * comp(1, A - C) + (B - D) * D * comp(3, C) * comp(2, A - C) + comp(2, D) * comp(2, C) * comp(3, A - C);
    return value;
}

function calSixth(a, b, c, d) {
    var A = new Number(a);
    var B = new Number(b);
    var C = new Number(c);
    var D = new Number(d);
    var value = comp(2, B - D) * comp(3, C) * comp(2, A - C) + (B - D) * D * comp(2, C) * comp(3, A - C) + comp(2, D) * comp(1, C) * comp(4, A - C) + comp(2, D) * comp(5, A - C);
    return value;
}

//comp 判断foot个数字有几种head个数字组合
function comp(head, foot) {
    var A = new Number(head);
    var B = new Number(foot);
    var C = 1;
    for (var i = B - A + 1; i <= B; i++) {
        C = C * i;
    }
    for (var i = 2; i <= A; i++) {
        C = C / i;
    }
    return C;
}

function cal(a, b) {
    var A = new Number(a);
    var B = new Number(b);
    return A * B;
}