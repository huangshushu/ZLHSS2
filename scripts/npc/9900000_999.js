/*
 * 联系QQ：381991414
 * 欢迎定制各种脚本
 * 打蚊子副本
 */
var status = 0;
var result = Array();
var resultAll = Array();
var aaa = Array();//后面得不到resultAll数据 用这个来转
var em;
var eim;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            em = cm.getEventManager("Wenzi");
            eim = em.getInstance("Wenzi")
            text = "#e<消灭蚊子大赛>#n\r\n#d现在我来公布消灭蚊子的结果：\r\n\r\n#b"
            for (var i = 0; i < eim.getPlayerCount(); i++) {
                result.push(eim.getPlayers().get(i).getName())//一维载入名字
                result.push(eim.getKillCount(eim.getPlayers().get(i)))//三维载入怪物数量
                resultAll.push(result)//集合成一个数组
                result = Array();
            }

            //冒泡排序法开始，取最大
            for (var i = 0; i < resultAll.length; i++) {
                for (var j = 0; j < resultAll.length; j++) {
                    var temp;
                    if (resultAll[i][1] > resultAll[j][1]) {
                        temp = resultAll[j];
                        resultAll[j] = resultAll[i];
                        resultAll[i] = temp;
                    }
                }
            }

            var sort;
            for (var i = 0; i < resultAll.length; i++) {
                sort = i + 1;
                text += "第" + sort + "名：" + resultAll[i][0] + "  消灭蚊子总数：" + resultAll[i][1] + "\r\n"
                aaa.push(resultAll[i][0]);
            }
            text += "#b#L99# 知道了排名，领取积分离开地图。"
            cm.sendSimpleS(text, 9)
        } else if (status == 1) {
            var em = cm.getEventManager("Wenzi");
            var count = eim.getKillCount(cm.getPlayer());
            cm.warp(101050000, 0)
            //cm.MissionAddMinNum(cm.getPlayer().getId(), 105, count)
            setEventPoints(2, cm.getPlayer().getId(), count);
            setEventTimes(2, cm.getPlayer().getId(), count);
            var text = "获得了消灭蚊子积分：　" + count + "。\r\n你可以使用积分在(拍卖处)处兑换礼品."
            cm.sendOk(text);
            //cm.worldMessage("[阿里安特竞技场] 截至现在" + cm.getChar().getName() + "  玩家共获得了" + cm.MissionGetMinNum(cm.getPlayer().getId(), 105, 999999) + "竞技场积分。");
            cm.worldSpouseMessage(0xA, cm.getChar().getName() + "在消灭蚊子大赛中一共拍打了" + count + "只蚊子，大家一起祝贺他吧！");
            cm.dispose();
        }
    }
}


function DelEventPoints(Eventid, charid) {
    cm.sql_Update("delete from Mosquitoes where eventid = ? and cid = ?", Eventid, charid);
}

function getEventTimes(Eventid, charid) {//通过eventid来得到参与这个活动的次数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM Mosquitoes where eventid = ? and cid = ?", Eventid, charid)
    if (Times.length > 0) {
        i = Times.get(0).get("times");//得到次数
    }
    return parseInt(i);
}

function getEventPoints(Eventid, charid) {//通过eventid来得到参与这个活动的点数
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM Mosquitoes where eventid = ? and cid = ?", Eventid, charid)
    if (Times.length > 0) {
        i = Times.get(0).get("points");//得到点数
    }
    return parseInt(i);
}

function setEventPoints(Eventid, charid, points) {//通过eventid来给予参与这个活动的点数
    var Times = cm.sql_Select("SELECT * FROM Mosquitoes where eventid = ? and cid = ?", Eventid, charid)
    var i = Times.length
    if (i == 0) {//insert
        cm.sql_Insert("INSERT INTO Mosquitoes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer().getName(), points, this.getEventTimes(1, charid), null); // 载入数据
    } else {//update
        cm.sql_Update("update Mosquitoes set points = points + ? where eventid = ? and cid = ?", points, Eventid, charid);//更新为已使用
    }
}

function setEventTimes(Eventid, charid, times) {//通过eventid来设置参与这个活动的次数
    var Times = cm.sql_Select("SELECT * FROM Mosquitoes where eventid = ? and cid = ?", Eventid, charid); // 查询数据
    var i = Times.length;
    if (i == 0) {//insert
        cm.sql_Insert("INSERT INTO Mosquitoes VALUES(?,?,?,?,?,?,?)", null, Eventid, cm.getPlayer().getId(), cm.getPlayer.getName(), this.getEventPoints(2, charid), times, null); // 载入数据
    } else {//update
        cm.sql_Update("update Mosquitoes set times = times + ? where eventid = ? and cid = ?", times, Eventid, charid);//更新为已使用
    }
}