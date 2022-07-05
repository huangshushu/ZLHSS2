/*
 * @Name 乐透
 * @Author HeavenlySword
 * @Object cm
 */

/* global cm, java, Integer, Packages, MapleLottery */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client);

var status = 0;

var tip = "";
var say = "";
var msgs = "";
var name = "乐透";
var chr = null;
var em = null;
var eventName = "PQ_Lottery";
var state = 0;
var Stage = 0;
var taxRate = 5;//赏金税率 5%
var totalNumber = 50;//最大号码数量50
var minValue = 100;//押注最小值
var totalNx1 = 0;
var totalNx2 = 0;
var number = 0;
var payType = 0;
var point = 0;
var payPoint = 0;
var maxLottery = 10;//最多可以压多少次
var isText = false;// true false
var channel = 1;//活动启动频道 默认0为所有频道启用
var oldReward = false;
var pl = null;
var ml = null;

function start() {
    status = -1;
    chr = cm.getPlayer();
    if (chr.getLevel() < 50) {
        cm.sendOk("必须50等以上才可以#b乐透#k");
        cm.dispose();
        return;
    }
    em = cm.getEventManager(eventName);
    if (em == null) {
        cm.sendOk("活动事件(" + eventName + ")未启用，请联系管理员。");
        cm.dispose();
        return;
    }
    if ((em.getChannel() != channel) && (channel == 0)) { //只在制定频道启用
        cm.sendOk("当前频道还未启用该功能，请切换到频道" + channel + "再试。");
        cm.dispose();
        return;
    }
    if (em.getProperty("Stage") != null) {
        Stage = Integer.parseInt(em.getProperty("Stage"));
    }
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
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (em.getProperty("state") != null) {
            state = Integer.parseInt(em.getProperty("state"));
        }
        if (em.getProperty("Stage(" + Stage + ")_TotalNx1") != null) {
            totalNx1 = Integer.parseInt(em.getProperty("Stage(" + Stage + ")_TotalNx1"));
        }
        if (em.getProperty("Stage(" + Stage + ")_TotalNx2") != null) {
            totalNx2 = Integer.parseInt(em.getProperty("Stage(" + Stage + ")_TotalNx2"));
        }
        tip = "#e#r<" + name + ">#n";
        say = tip;
        say += "\r\n#gPS：放手一搏，下一个中奖的就是你！";
        say += "\r\n#b活动说明：";
        say += "\r\n#d1. 每天进行一轮，开奖时间为(20：30)。";
        say += "\r\n#k2. 总共有" + totalNumber + "个号码，每次押注不能低于" + minValue + "。";
        say += "\r\n#r3. 开奖后所有中奖玩家按押注中奖号码比例平分奖金池。";
        say += "\r\n#g乐透期数：#r" + Stage;
        say += "\r\n#g乐透状态：#r" + (state == 1 ? "正在押注" : "已经开奖");
        say += "\r\n#g奖池统计：#r累计(" + totalNx1 + ")CASH、(" + totalNx2 + ")枫叶点数";
        if (state == 2) {
            say += "\r\n#g中奖号码：#r" + em.getProperty("Stage(" + Stage + ")_LuckNumber");
        }
        say += "\r\n#g截至时间：#r" + em.getProperty("TimeInfo");
        say += "\r\n#b那么你还想要做什么？";
        pl = MapleLottery.getInstance().getLotteryPlayerInfo(chr.getId(), isText);

        if ((pl != null) && (pl.getLotteryKeyID() != Stage)) {
            var li = MapleLottery.getInstance().getLotteryInfo(pl.getLotteryKeyID());
            if ((li != null) && (li.getLuckNumber() != 0)) {
                oldReward = true;
                say += "\r\n#r第 " + pl.getLotteryKeyID() + " 期乐透，已经开奖，请先去领取奖励吧。";
            } else if (li != null) {
                say += "\r\n#r第 " + pl.getLotteryKeyID() + " 期乐透，并没有开奖，请现在重新押注吧。";
            }
        } else if (pl == null) {
            say += "\r\n#rpl is null";
        }
        if (state == 1) {
            if ((checkCan()) && (!oldReward)) {
                if (getMyLotteryLength() < maxLottery) {
                    say += "\r\n#r#L1#进行押注 （小赌怡情）#l";
                } else {
                    say += "\r\n#r你已经押注" + maxLottery + "次，无法继续押注。";
                }
            } else {
                say += "\r\n#r你还有奖励未领取，请先领取奖励。";
            }
        }
        say += "\r\n#b#L2#领取奖励 （收获果实）#l";
        say += "\r\n#d#L3#数据统计 （最新信息）#l";
        say += "\r\n#g#L8#押注信息 （最新信息）#l";

        if (isText) {
//            em.setProperty("Lottery_" + chr.getId(), "");
            say += "\r\n#r#L4#测试 --- 开启押注#l";
            say += "\r\n#r#L5#测试 --- 结束押注#l";
            say += "\r\n#r#L6#测试 --- 设定中奖#l";
            say += "\r\n#r#L7#测试 --- 重载乐透#l";
        }

        cm.sendSimple(say);
    } else if (status == 1) {
        tip += "\r\n#b当前位置：" + name;
        switch (selection) {
            case 1:
                status = 100;
                tip += " >> 进行押注";
                say = tip;
                msgs = "\r\n#g我的押注信息：#r" + getMyLotteryMsg();
                say += msgs;
                say += "\r\n#b请输入你要押注的号码：";
                cm.sendGetNumber(say, 1, 1, 50);
                break;
            case 2:
                status = 200;
                tip += " >> 领取奖励";
                say = tip;
                pl = null;
                var li = null;
                if (oldReward) {
                    pl = MapleLottery.getInstance().getLotteryPlayerInfo(chr.getId(), false);
                    li = MapleLottery.getInstance().getLotteryInfo(pl.getLotteryKeyID());
                }
                var key2 = (oldReward ? "" + pl.getLotteryKeyID() : em.getProperty("Lottery_Stage_" + chr.getId()));
                if ((key2 != null) && (key2 != "") && ((Integer.parseInt(key2) != Stage) || (state == 2))) {//上一期奖励还未领取
                    var luck = (oldReward ? li.getLuckNumber() : em.getProperty("Stage(" + key2 + ")_LuckNumber"));
                    totalNx1 = (oldReward ? li.getTotalNx1() : Integer.parseInt(em.getProperty("Stage(" + key2 + ")_TotalNx1")));
                    totalNx2 = (oldReward ? li.getTotalNx2() : Integer.parseInt(em.getProperty("Stage(" + key2 + ")_TotalNx2")));

                    var totalKeyNx1 = (oldReward ? li.getLuckNumberTotalNx1() : Integer.parseInt(em.getProperty("Stage(" + key2 + ")_Key1_" + luck)));
                    var totalKeyNx2 = (oldReward ? li.getLuckNumberTotalNx2() : Integer.parseInt(em.getProperty("Stage(" + key2 + ")_Key2_" + luck)));
                    say += "\r\n#g乐透期数：#r" + key2;
                    say += "\r\n#g中奖号码：#r" + luck;
                    say += "\r\n#g号码统计：#r累计(" + totalKeyNx1 + ")CASH、(" + totalKeyNx2 + ")枫叶点数";
                    say += "\r\n#g奖池统计：#r累计(" + totalNx1 + ")CASH、(" + totalNx2 + ")枫叶点数";
                    say += "\r\n#g押注信息：#r" + getMyLotteryMsg();

                    var payNx1 = 0;
                    var payNx2 = 0;
                    var info = (oldReward ? pl.getLotterys() : em.getProperty("Lottery_" + chr.getId()));
                    //info - 格式“Nx号码=Cx点卷类型=数量;”
                    var ss = info.split(";");
                    for (var i = 0; i < ss.length; i++) {
                        var s = ss[i].split("=");
                        if (s[0].split("x")[1] == luck) {//有中奖号码
                            if (s[1].split("x")[1] == "1") {
                                payNx1 += Integer.parseInt(s[2]);
                            } else {
                                payNx2 += Integer.parseInt(s[2]);
                            }
                        }
                    }
                    say += "\r\n#g中奖押注：#rCASH押注(" + payNx1 + ")、枫叶点数押注(" + payNx2 + ")";
                    var giveNx1 = Math.ceil(totalKeyNx1 > 0 ? ((payNx1 / totalKeyNx1)) * totalNx1 : 0);
                    var giveNx2 = Math.ceil(totalKeyNx2 > 0 ? ((payNx2 / totalKeyNx2)) * totalNx2 : 0);
                    say += "\r\n#g中奖内容：#r(" + giveNx1 + ")CASH、(" + giveNx2 + ")枫叶点数";
                    say += "\r\n#g上缴税率：#r" + taxRate + "%";
                    var fg1 = giveNx1 - (taxRate * (giveNx1 - giveNx1 % 100) / 100);
                    var fg2 = giveNx2 - (taxRate * (giveNx2 - giveNx2 % 100) / 100);
                    say += "\r\n#g实际奖励：#r(" + fg1 + ")CASH、(" + fg2 + ")枫叶点数";
                    em.setProperty("Lottery_Stage_" + chr.getId(), "");
                    em.setProperty("Lottery_" + chr.getId(), "");
                    if (oldReward) {
                        pl.setLotteryKeyID(0);
                        pl.setLotterys("");
                        pl.saveToDB();
                    }
                    if (fg1 > 0) {
                        chr.modifyCSPoints(1, fg1);
                    }
                    if (fg2 > 0) {
                        chr.modifyCSPoints(2, fg2);
                    }
                    say += "\r\n#r奖励已经发放，请确认。";
                } else {
                    say += "\r\n#r你似乎还没有中奖，或者你已经领取过本期奖励了。";
                    if (isText) {
                        say += "\r\nkey2(" + key2 + ") state(" + state + ")";
                    }
                }
                cm.sendOk(say);
                cm.dispose();
                break;
            case 3:
                tip += " >> 数据统计";
                say = tip;
                say += "\r\n#r以下是查看前数据统计：";
                for (var i = 1; i <= totalNumber; i++) {
                    say += "\r\n" + getColor(i % 5) + " - 号码(" + (i < 9 ? "0" : "") + i + ") - CASH押注(" + em.getProperty("Stage(" + Stage + ")_Key1_" + i) + ") 枫叶点数押注(" + em.getProperty("Stage(" + Stage + ")_Key2_" + i) + ")";
                }
                cm.sendOk(say);
                cm.dispose();
                break;
            case 4:
                tip += " >> 测试 - 开始押注";
                say = tip;
                em.invokeFunctionMethod("startLottery");
                say += "\r\n#r已经开启。";
                cm.sendOk(say);
                cm.dispose();
                break;
            case 5:
                tip += " >> 测试 - 结束押注";
                say = tip;
                em.invokeFunctionMethod("endLottery");
                say += "\r\n#r已经结束。";
                cm.sendOk(say);
                cm.dispose();
                break;
            case 6:
                status = 600;
                tip += " >> 设定中奖";
                say = tip;
                msgs = "\r\n#g我的押注信息：#r" + getMyLotteryMsg();
                say += msgs;
                say += "\r\n#b请输入要设定中奖的号码：";
                cm.sendGetNumber(say, 1, 1, 50);
                break;
            case 7:
                tip += " >> 重载乐透";
                say = tip;
                MapleLottery.getInstance().loadLottertInfoMaps();
                say += "\r\n#r已经重载完成";
                cm.sendOk(say);
                cm.dispose();
                break;
            case 8:
                tip += " >> 押注信息";
                say = tip;
                say += "\r\n#r以下是查看自己押注信息：";
                say += "\r\n" + getMyLotteryMsg();
                cm.sendOk(say);
                cm.dispose();
                break;
        }
    } else if (status == 601) {
        number = selection;
        tip += " >> 设定结果";
        say = tip;
        em.setProperty("Stage(" + Stage + ")_LuckNumber", "" + number);
        say += "\r\n#r已经设定中奖号码为：" + number;
        cm.sendOk(say);
        cm.dispose();

    } else if (status == 101) {
        number = selection;
        totalNx1 = chr.getCSPoints(1);
        totalNx2 = chr.getCSPoints(2);
        tip += " >> 选择押注类型";
        say = tip;
        msgs += "\r\n#g帐号信息：#r(" + totalNx1 + ")CASH、(" + totalNx2 + ")枫叶点数";
        msgs += "\r\n#g押注号码：#r" + number;
        say += msgs;
        say += "\r\n#b请选择你的押注类型：";
        say += "\r\n#r#L1#CASH#l";
        say += "\r\n#d#L2#枫叶点数#l";
        cm.sendSimple(say);
    } else if (status == 102) {
        payType = selection;
        totalNx1 = chr.getCSPoints(1);
        totalNx2 = chr.getCSPoints(2);
        point = (payType == 1 ? totalNx1 : totalNx2);
        tip += " >> 选择押注类型";
        say = tip;
        msgs += "\r\n#g押注类型：#r" + (payType == 1 ? "CASH" : "枫叶点数");
        say += msgs;
        say += "\r\n#b请输入你要押注数量：";
        var min = Math.min(point, minValue);
        cm.sendGetNumber(say, minValue, min, 2100000000);
    } else if (status == 103) {
        payPoint = selection;
        tip += " >> 确认押注信息";
        say = tip;
        msgs += "\r\n#g押注数量：#r" + payPoint;
        say += msgs;
        say += "\r\n#r请确认上述信息后，选择是否要进行押注。";
        say += "\r\n#r#L1#确认无误，进行押注#l";
        say += "\r\n#b#L2#取消押注#l";
        cm.sendSimple(say);
    } else if (status == 104) {
        if (selection == 1) {
            tip += " >> 押注结果";
            say = tip;
            say += "\r\n#r" + payPointResult();
            cm.sendOk(say);
        }
        cm.dispose();
    }
}

function payPointResult() {
    totalNx1 = chr.getCSPoints(1);
    totalNx2 = chr.getCSPoints(2);
    point = (payType == 1 ? totalNx1 : totalNx2);
    if (payPoint > point) {
        return "帐号剩余点数不足(" + payPoint + ")，无法进行押注。";
    }
    chr.modifyCSPoints(payType, -payPoint);
    var info = em.getProperty("Lottery_" + chr.getId());
    if ((info != null) && (info != "")) {
        info += ";";
    } else {
        info = "";
    }
    info += "Nx" + number + "=Cx" + payType + "=" + payPoint;
    em.setProperty("Lottery_" + chr.getId(), "" + info);
    em.setProperty("Lottery_Stage_" + chr.getId(), "" + Stage);

    //保存玩家买入记录
    pl = MapleLottery.getInstance().getLotteryPlayerInfo(chr.getId(), false);
    pl.setLotteryKeyID(Stage);
    pl.setLotterys("" + info);
    pl.saveToDB();

    var totalNx = 0;
    if (em.getProperty("Stage(" + Stage + ")_TotalNx" + payType) != null) {
        totalNx = Integer.parseInt(em.getProperty("Stage(" + Stage + ")_TotalNx" + payType));
    }
    em.setProperty("Stage(" + Stage + ")_TotalNx" + payType, "" + (totalNx + payPoint));


    var totalNxKey = 0;
    if (em.getProperty("Stage(" + Stage + ")_Key" + payType + "_" + number) != null) {
        totalNxKey = Integer.parseInt(em.getProperty("Stage(" + Stage + ")_Key" + payType + "_" + number));
    }
    em.setProperty("Stage(" + Stage + ")_Key" + payType + "_" + number, "" + (totalNxKey + payPoint));
    //保存彩票期总奖池信息
    var li = MapleLottery.getInstance().getLotteryInfo(Stage);
    li.putBetByType(number, payType, payPoint, true);
    li.updateTotalNx(payType, payPoint, true);

    var msg = "消耗(" + payPoint + ")" + (payType == 1 ? "CASH" : "枫叶点数") + "，押注成功。";
    msg += "\r\n#g押注号码：#r" + number;
    msg += "\r\n#g我的最新押注信息：#r" + getMyLotteryMsg();
    return msg;
}

function checkCan() {
    var key1 = em.getProperty("Lottery_" + chr.getId());
    var key2 = em.getProperty("Lottery_Stage_" + chr.getId());
    return (!((key1 != null) && (key1 != "") && (key2 != null) && (key2 != "") && (Integer.parseInt(key2) != Stage)));
}

function getMyLotteryLength() {
    var info = em.getProperty("Lottery_" + chr.getId());
    if ((info != null) && (info != "")) {
        return info.split(";").length;
    }
    return 0;
}

function getMyLotteryMsg() {
    var msg = "";
    var info = em.getProperty("Lottery_" + chr.getId());
    if (((info == null) || (info == "")) && (pl != null)) {
        msg += "\r\n第 " + pl.getLotteryKeyID() + " 期 - 押注内容：";
        info = pl.getLotterys();
    }
    if ((info != null) && (info != "")) {
        //info - 格式“Nx号码=Cx点卷类型=数量;”
        var ss = info.split(";");
        for (var i = 0; i < ss.length; i++) {
            var s = ss[i].split("=");
            msg += "\r\n - [号码(" + s[0].split("x")[1] + ") 押注(" + s[2] + (s[1].split("x")[1] == "1" ? "CASH" : "枫叶点数") + ")]";
        }
    } else {
        msg = "无";
    }
    return msg;
}

function getColor(modes) {
    switch (modes) {
        case 0:
            return "#r";
        case 1:
            return "#b";
        case 2:
            return "#d";
        case 3:
            return "#g";
    }
    return "#k";
} 
