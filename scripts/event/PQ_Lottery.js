/*
 * @Name 乐透
 * @Author HeavenlySword
 * @Object em
 */
/* global em, java, Packages, Integer, MaplePacketCreator, chr, Randomizer, System, MapleLottery */

load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.server);
importPackage(Packages.client);
importPackage(Packages.tools);

var setupTask = null;
var eventName = "乐透";
var channel = 1;//活动启动频道 默认0为所有频道启用
var totalNumber = 50;//最大号码数量50
var luckTimeHour = 20;//开奖时间 - 小时
var luckTimeMin = 30;//开奖时间 - 分


/*
 * 载入初始化处理
 * @returns {undefined}
 */
function init() {
    if (em.getChannel() == 1) {
        MapleLottery.getInstance().loadLottertInfoMaps();//载入历史乐透信息
    }
    if ((em.getChannel() == channel) || (channel == 0)) { //只在制定频道启用
        setup();
    }
}

/*
 * 生成对象初始化处理
 * @returns {undefined}
 */
function setup() {
    em.setProperty("totalNumber", "" + totalNumber);
    em.setProperty("state", "0");
    var Stage = MapleLottery.getInstance().getLotteryNextKeyID(false);
    em.setProperty("Stage", "" + Stage);
    em.setProperty("baseNx1", "0");
    em.setProperty("baseNx2", "0");
    scheduleNew();
}

/*
 * 取消线程处理
 * @returns {undefined}
 */
function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(false);
        setupTask = null;
    }
}

/*
 * 新建一个线程
 * @returns {undefined}
 */
function scheduleNew() {
    startLottery();//每天一次直接启动
//    var cal = java.util.Calendar.getInstance();
//    var min = cal.get(java.util.Calendar.MINUTE);
//    //先判断当前时间属于那一个时间段
//    if (((min >= 0) && (min < 10)) || ((min >= 20) && (min < 30))) {//属于可以押注时间段
//        startLottery();
//    } else {
//        nextSchedule(2);
//    }
}

/*
 * 下一阶段线程启动
 * @param {type} type
 * @returns {undefined}
 */
function nextSchedule(type) {
    cancelSchedule();
    var wait = getEndLotteryTime();//getWaitTime(type);
    setupTask = em.schedule((type == 1 ? "endLottery" : "startLottery"), wait * 1000);
    em.setProperty("TimeInfo", "" + new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date(System.currentTimeMillis() + wait * 1000)));
}

/*
 * 开启乐透
 * @returns {undefined}
 */
function startLottery() {
    em.setProperty("state", "1");//活动状态为押注
    
    var baseNx1 = Integer.parseInt(em.getProperty("baseNx1"));
    var baseNx2 = Integer.parseInt(em.getProperty("baseNx2"));
    var Stage = MapleLottery.getInstance().getLotteryNextKeyID(false);//Integer.parseInt(em.getProperty("Stage")) + 1;
    var li = MapleLottery.getInstance().getLotteryInfo(Stage);
    //先判断上一期是否已经开奖，如果没有开奖继续
    if ((li != null) && (li.getLuckNumber() == 0)) {
        baseNx1 = li.getTotalNx1();
        baseNx2 = li.getTotalNx2();
    } else {
        Stage = MapleLottery.getInstance().getLotteryNextKeyID(true);
        li = new MapleLottery.LotteryInfo(Stage, baseNx1, baseNx2, 0, 0, 0);
        MapleLottery.getInstance().putLotteryInfo(li);
    }
    em.setProperty("Stage", "" + (Stage));
    
    em.setProperty("Stage(" + Stage + ")_TotalNx1", "" + baseNx1);//重置当前阶段点卷总押注
    em.setProperty("Stage(" + Stage + ")_TotalNx2", "" + baseNx2);//重置当前阶段抵用卷总押注
    
    //初始化号码押注内容
    for (var i = 1; i <= totalNumber; i++) {
        var p = li.getBet(i);
        em.setProperty("Stage(" + Stage + ")_Key1_" + i, (p != null ? "" + p.getLeft().intValue() : "0"));//点卷押注
        em.setProperty("Stage(" + Stage + ")_Key2_" + i, (p != null ? "" + p.getRight().intValue() : "0"));//抵用卷押注
    }
    nextSchedule(1);
}

/*
 * 统计乐透 - 开奖
 * @returns {undefined}
 */
function endLottery() {
    em.setProperty("state", "2");//活动状态为开奖
    //随机一个中奖号码。
    var Stage = Integer.parseInt(em.getProperty("Stage"));
    var luck = Randomizer.nextInt(totalNumber) + 1;
    em.setProperty("Stage(" + Stage + ")_LuckNumber", "" + luck);

    var li = MapleLottery.getInstance().getLotteryInfo(Stage);
    if (li == null) {
        li = new MapleLottery.LotteryInfo(Stage, 0, 0, 0, 0, 0);
    }
    li.setTotalNx1(Integer.parseInt(em.getProperty("Stage(" + Stage + ")_TotalNx1")));
    li.setTotalNx2(Integer.parseInt(em.getProperty("Stage(" + Stage + ")_TotalNx2")));
    li.setLuckNumber(luck);
    li.setLuckNumberTotalNx1(Integer.parseInt(em.getProperty("Stage(" + Stage + ")_Key1_" + luck)));
    li.setLuckNumberTotalNx2(Integer.parseInt(em.getProperty("Stage(" + Stage + ")_Key2_" + luck)));
    //判断是否有人压中中奖号码，如果没有，奖金叠加
    if (li.getLuckNumberTotalNx1() == 0) {//点卷奖池没人压，累计到下一期
        em.setProperty("baseNx1", "" + li.getTotalNx1());
    } else {
        em.setProperty("baseNx1", "0");
    }
    if (li.getLuckNumberTotalNx2() == 0) {//抵用卷奖池没人压，累计到下一期
        em.setProperty("baseNx2", "" + li.getTotalNx2());
    } else {
        em.setProperty("baseNx2", "0");
    }

    //发送公告信息
    var cs = em.getChannelServer();
    var msg = "第 " + Stage + " 期 - 本期中奖号码为（" + luck + "），请中奖玩家来领取奖金。";
    cs.broadcastPacket(MaplePacketCreator.serverNotice(5, "[" + eventName + "] " + msg));//发送公告内容

    startLottery();//开启下一期
//    nextSchedule(2);
}

/*
 * 获取今天开奖等待时间
 * @returns {Number}
 */
function getEndLotteryTime() {
    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    if ((hour > luckTimeHour) || ((hour == luckTimeHour) && ((min > luckTimeMin) || ((min == luckTimeMin) && (sec > 0))))) {//明天20：30开奖
        return (((luckTimeHour + 24 - hour - 1)*60 + (luckTimeMin + 60 - min - 1))*60) + (60 - sec);
    }
    return (((luckTimeHour - hour)*60 + (luckTimeMin - min - 1))*60 + (60 - sec));//今天20：30开奖
}

/*
 * 获取线程等待时间
 * @param {type} type
 * @returns {Number}
 */
function getWaitTime(type) {
    var wait = 10 * 60;
    var cal = java.util.Calendar.getInstance();
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    if (type == 1) {//押注等待时间
        if ((min >= 0) && (min < 10)) {
            wait = (10 - min) * 60 - sec;
        } else if ((min >= 10) && (min < 30)) {
            wait = (30 - min) * 60 - sec;
        } else {
            wait = (60 - min + 10) * 60 - sec;
        }
    } else if (type == 2) {//开奖等待时间
        if ((min >= 10) && (min < 20)) {
            wait = (20 - min) * 60 - sec;
        } else if ((min >= 20) && (min < 40)) {
            wait = (40 - min) * 60 - sec;
        } else {
            wait = (60 - min + 20) * 60 - sec;
        }
    }
    return wait;
}
