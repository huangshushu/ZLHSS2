/*
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 * OX问答副本  个人版进入NPC
 * 
 */

var status = 0;
var maxPlay = 50;
var em;
var emgate;
var Eventstatus;
var itemid, leftday, quantity, needpoints;
var ItemArray = Array(
        Array(4310088, 1, -1, 1),
        Array(4310143, 1, -1, 2),
        Array(4310234, 1, -1, 3),
		Array(4310233, 1, -1, 3),
        Array(4310049, 1, -1, 1),
        Array(4310085, 1, -1, 2),
		Array(4001839, 1, -1, 10),
        Array(2049122, 1, -1, 50),
        Array(2049153, 1, -1, 50),
		Array(5537000, 1, -1, 10),
        Array(5743003, 1, -1, 10),
        Array(2340000, 1, -1, 30),
		Array(5062002, 1, -1, 10),
		Array(5062009, 1, -1, 15),
		Array(5062500, 1, -1, 15)
        );//道具id，个数，剩余天数，所需积分

function start() {
    status = -1;
    em = cm.getEventManager("OXEvent");
    emgate = cm.getEventManager("OXEventOpen");
    Eventstatus = "#r关闭状态。#k";
    if (em.getProperty("start") == "3") {//已经关闭入口了
        Eventstatus = "#e#r正在进行中。#n"
    }
    if (em.getProperty("start") == "1") {//
        Eventstatus = "#e#r开放入口中。#n"
    }
    if (em.getProperty("start") == "2") {//
        Eventstatus = "#e#r等待入场中。#n"
    }
    if (em.getProperty("start") == "0") {//已经关闭入口了
        Eventstatus = "#e#r等待入场。#n"
    }
    if (emgate.getProperty("open") == "false") {//
        Eventstatus = "#e#r管理员已关闭入口，禁止进入。#n"
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMap().getId() == 910048100) {
                if (cm.getPlayer().isGM()) {
                    cm.sendSimple("你想做什么呢？\r\n目前的活动状态：" + Eventstatus + "\r\n#L99# #r#e[Hot~]利用答题积分兑换物品！！#n#b\r\n#b#L1# 我想查看活动介绍。\r\n#L2# 我想放弃挑战离开这里。#r#e\r\n#L3# 关闭入口！（管理员可见）\r\n#L4# 开启入口！（管理员可见）");
                } else {
                    cm.sendSimple("你想做什么呢？\r\n目前的活动状态：" + Eventstatus + "\r\n#L99# #r#e[Hot~]利用答题积分兑换物品！！#n#b\r\n#b#L1# 我想查看活动介绍。\r\n#L2# 我想放弃挑战离开这里。");
                }
            } else if (cm.getMap().getId() == 910048200) {
                cm.sendOk("你好~");
                cm.dispose();
            } else {
                em = cm.getEventManager("OXEvent");
                emgate = cm.getEventManager("OXEventOpen");
                if (emgate.getProperty("open") == "false") {//已经关闭入口了
                    if (cm.getPlayer().isGM()) {
                        status = 2;
                        cm.sendYesNo("尊敬的管理员，您想开放OX宾果活动的入口吗？");
                    } else {
                        cm.sendSimple("现在不是活动时间，请稍后再试！\r\n#L99# #r#e[Hot~]利用答题积分兑换物品！！#n#b\r\n")
                    }
                    return;
                }
                if (cm.getBossLog("OX宾果活动") >= maxPlay) {
                    cm.sendOk("今天你已经参与了" + maxPlay + "次，不能再参与该副本了！请明天赶早~");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayerCount(910048100) == 0 && (em.getProperty("start") == "3" || em.getProperty("start") == "4")) {//已经关闭入口了 但是里面已经没人了，重置
                    em.setProperty("OXEventState", "0");
                    em.setProperty("start", "0");
                    em.setProperty("question", "0");
                    em.setProperty("RightAnwser", "0");//得到问题的正确答案
                    cm.sendOk("请重新打开我哦~~");
                    cm.dispose();
                    return;
                }
                if (em.getProperty("start") == "3") {//已经关闭入口了
                    cm.sendOk("已经开始了OX宾果活动，请稍后再来。");
                    cm.dispose();
                    return;
                }

                if (em == null) {
                    cm.sendOk("出现错误，请重新进入副本。");
                } else {
                    if (cm.getPlayer().isGM()) {
                        cm.sendSimple("#n#b\r\n\t\t\t\t#e<OX问答活动>#n\r\n\r\n#dOX问答活动就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n#b#e#L0#参加<OX问答活动>。#l#n\r\n\r\n#L1#我想了解一下该活动的说明。#l\r\n\r\n#L99##r#e[Hot~]利用答题积分兑换物品！！#n#b\r\n#L3# 关闭活动入口！(GM可见)")
                    }
                    else if (em.getProperty("start") == "2" || em.getProperty("start") == "1") {//等待状态
                        cm.sendSimple("#n#b\r\n\t\t\t\t#e<OX问答活动>#n\r\n\r\n#dOX问答活动就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n#b#e#L0#参加<OX问答活动>。#l#n\r\n\r\n#L1#我想了解一下该活动的说明。#l\r\n\r\n#L99##r#e[Hot~]利用答题积分兑换物品！！#n")
                    } else {//第一个人进入的
                        cm.sendSimple("#n#b\r\n\t\t\t\t#e<OX问答活动>#n\r\n\r\n#dOX宾果活动就要开始啦！……\r\n目前的活动状态：" + Eventstatus + "\r\n\r\n\r\n#b#L0#我想执行<OX宾果活动>。#l\r\n#L99# #r#e[Hot~]利用答题积分兑换物品！！#n#b\r\n#L1#我想了解一下该活动的说明。#l")
                    }
                }
            }
        } else if (status == 1) {
            if (selection == 0) {
                if (em.getProperty("start") == "0") {
                    em.setProperty("OXEventState", "0");//问题清空
                    em.setProperty("start", "1");//设置开关，已经可以进入了。 之后一个倒计时60秒，等候后面的玩家进来
                    cm.warp(910048100, "sp");
                    cm.setBossLog("OX宾果活动");
                    cm.getMap().startMapEffect("现在有3分钟的时间等候其它玩家，请稍后！", 5121052);
                    cm.sendOk("[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，#b#eO正确，X错误#n#k。\r\n题目出现的时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得#i4031332#X1 回答错误#i4031332#-1");
                } else if (em.getProperty("start") == "1") {//入口已经开放
                    cm.warp(910048100, "sp");
                    cm.setBossLog("OX宾果活动");
                    cm.getMap().startMapEffect("现在有3分钟的时间等候其它玩家，请稍后！", 5121052);
                    cm.sendOk("[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，#b#eO正确，X错误#n#k。\r\n题目出现的时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得#i4031332#X1 回答错误#i4031332#-1");
                } else {//等待状态
                    cm.warp(910048100, "sp");
                    cm.setBossLog("OX宾果活动");
                    cm.sendOk("[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，#b#eO正确，X错误#n#k。\r\n题目出现的时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得#i4031332#X1 回答错误#i4031332#-1");
                    cm.getPlayer().dropMessage(1, "活动马上开始，请等候后面的玩家！");
                }
                // cm.getNpcNotice(1540104, "[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n#b让我们先等候3分钟来欢迎后面到来的冒险家吧！#k\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，#b#eO正确，X错误#n#k。\r\n题目出现的时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得连胜证明 回答错误减少连胜证明。", 9);//显示180秒的活动介绍
                cm.safeDispose();
            } else if (selection == 1) {
                cm.sendOk("[欢迎来到OX问答活动！]\r\n大家好，欢迎来到这里！\r\n在这我们将回答二十道问答题，它们涉及到很多方面，但问题只有两种答案，#b#eO正确，X错误#n#k。\r\n题目出现的时，选择正确答案，站在正确的位置吧！\r\n#e（站在中间的位置不算，将会被视为错误答案）\r\n#n#r 回答正确获得连胜证明 回答错误减少连胜证明。。")
                cm.safeDispose();
            } else if (selection == 2) {
                cm.sendYesNo("真的要离开这里吗？这样就不能和大家一起玩了呢！");
            } else if (selection == 3) {
                emgate.setProperty("open", "false");
                cm.sendOk("已经关闭了入口！");
                cm.spouseMessage(0x24, "[OX宾果活动] 现在管理员已经关闭了活动入口。");
                cm.worldBrodcastEffect(5121052, "[OX宾果活动] 现在管理员已经关闭了活动入口。");
                cm.dispose();
            } else if (selection == 4) {
                emgate.setProperty("open", "true");
                cm.sendOk("已经开启入口！");
                cm.spouseMessage(0x24, "[OX宾果活动] 现在管理员已经开启了活动入口。");
                cm.worldBrodcastEffect(5121052, "[OX宾果活动] 现在管理员已经开启了活动入口。");
                cm.dispose();
            } else if (selection == 99) {
                cm.dispose();
                cm.openNpc(9000277, 5)

}
            
        } else if (status == 2) {
            cm.warp(101050000, 0);
            cm.dispose();
        } else if (status == 3) {
            emgate.setProperty("open", "true");
            cm.sendOk("已经开启了入口！");
            cm.spouseMessage(0x24, "[OX宾果活动] 管理员已经开放了活动入口，请大家速度从自由市场-??? 进入哦！");
            cm.worldBrodcastEffect(5121052, "管理员已经开放了活动入口，请大家速度从自由市场-??? 进入哦！");
            cm.dispose();
        } else if (status == 4) {
            itemid = ItemArray[selection][0];
            leftday = ItemArray[selection][2];
            quantity = ItemArray[selection][1];
            needpoints = ItemArray[selection][3];
            if (leftday <= 0) {
                cm.sendYesNo("你想使用" + needpoints + "抽奖积分来兑换#i" + itemid + "# #b#t" + itemid + "##k 吗？\r\n 使用期限：#b永久#k。");
            } else {
                cm.sendYesNo("你想使用" + needpoints + "抽奖积分来兑换#i" + itemid + "# #b#t" + itemid + "##k 吗？ \r\n使用期限：#b" + leftday + "天#k。");
            }
        } else if (status == 5) {
            if (cm.getSpace(1) < 2 && cm.getSpace(2) < 2 && cm.getSpace(3) < 2 && cm.getSpace(4) < 2 && cm.getSpace(5) < 2) {
                cm.sendOk("请确保您所有的背包栏都有2个以上的空格。");
                cm.dispose();
                return;
            }
            if (getEventPoints(20, cm.getPlayer().getId()) >= needpoints) {
                setEventPoints(20, cm.getPlayer().getId(), -needpoints);
                if (leftday <= 0) {
                    cm.gainItem(itemid, quantity);
                } else {
                    cm.gainItemPeriod(itemid, quantity, leftday);
                }
                status = -1;
                cm.sendOk("兑换成功了！");
            } else {
                status = -1;
                cm.sendOk("对不起，你没有足够的积分兑换。");
            }
        }
    }
}


function DelEventPoints(Eventid, charid) {
    cm.sql_Update("delete from EventTimes where eventid = ? and cid = ?", Eventid, charid);
}

function getEventTimes(Eventid, charid) {//通过eventid来得到参与这个活动的次数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = ? and cid = ?", Eventid, charid)
    if (Times.length > 0) {
        i = Times.get(0).get("times");//得到次数
    }
    return parseInt(i);
}

function getEventPoints(Eventid, charid) {//通过eventid来得到参与这个活动的点数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = ? and cid = ?", Eventid, charid)
    if (Times.length > 0) {
        i = Times.get(0).get("points");//得到点数
    }
    return parseInt(i);
}

function setEventPoints(Eventid, charid, points) {//通过eventid来给予参与这个活动的点数
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = ? and cid = ?", Eventid, charid)
    var i = Times.length
    if (i == 0) {//insert
        cm.sql_Insert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer().getName(), points, this.getEventTimes(1, charid), null); // 载入数据
    } else {//update
        cm.sql_Update("update EventTimes set points = points + ? where eventid = ? and cid = ?", points, Eventid, charid);//更新为已使用
    }
}

function setEventTimes(Eventid, charid, times) {//通过eventid来设置参与这个活动的次数
    var Times = cm.sql_Select("SELECT * FROM EventTimes where eventid = ? and cid = ?", Eventid, charid); // 查询数据
    var i = Times.length;
    if (i == 0) {//insert
        cm.sql_Insert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer.getName(), this.getEventPoints(2, charid), times, null); // 载入数据
    } else {//update
        cm.sql_Update("update EventTimes set times = times + ? where eventid = ? and cid = ?", times, Eventid, charid);//更新为已使用
    }
}
