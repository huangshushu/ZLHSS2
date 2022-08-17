/*
 ZEVMS冒险岛(079)每日收集
 71447500
 */
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
    status = -1;
    action(1, 0, 0);
}
importPackage(Packages.client);
importPackage(Packages.database);
var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
//地图，提示，坐标X1，坐标X2，坐标Y1，坐标Y2
var itemList = Array(
        Array(100000000, "踩在星缘旁边的邮箱上。", 5200, 5235, 400, 402),
        Array(105030000, "笑脸上的木桶。", 260, 300, -731, -731),
        Array(105030000, "笑脸下的木桶。", -150, -120, -370, -370),
        Array(100000200, "去”游戏地带“广告牌上4个位置上猜猜哪个是对的。", 4353, 4385, 607, 607),
        Array(100000200, "去”游戏地带“广告牌上4个位置上猜猜哪个是对的。", 4395, 4417, 639, 639),
        Array(100000200, "去”游戏地带“广告牌上4个位置上猜猜哪个是对的。", 4563, 4594, 611, 611),
        Array(100000200, "去”游戏地带“广告牌上4个位置上猜猜哪个是对的。", 4519, 4546, 647, 647),
        Array(100000204, "去看看吧，那个弓箭手的殿堂。", -370, 370, 155, 165),
        Array(100000200, "去喷泉上看看。", 2193, 2487, 403, 403),
        Array(100000103, "去院长和医生中间，让他们好好看看你。", -27, 30, 181, 181),
        Array(100000103, "去偷听院长和医生他们对话，去房间内最高的地方。", -174, -174, -219, -219),
        Array(100000105, "去护理一下皮肤吧，去那个美容师旁边机器里。", -82, 114, -52, -52),
        Array(809030000, "去豆豆交换机那个黄色椅子上看看。", 182, 296, -83, -83),
        Array(749030000, "去解梦的身边吧。", -399, 415, -9, -9),
        Array(100000000, "站在射手村左边入口草堆最上面。", -502, -395, 173, 173),
        Array(100000000, "站在射手村左边入口的那个木屋上。", -663, -475, 110, 125),
        Array(100000000, "站在广告牌上，你可以么？", -155, -148, 203, 203),
        Array(100000000, "去送快递的车上。", 5216, 5382, -225, -175),
        Array(100000001, "去玛亚的家右边门外逛逛。", 258, 638, 274, 274),
        Array(100000001, "去玛亚的身边。", -174, 106, 38, 38)
        );
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
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
    var 等级 = cm.getPlayer().getLevel();
    if (等级 < 100) {
        cm.说明文字(" 100级以上才可以进行。");
        cm.dispose();
        return;
    }
    var x = cm.getPlayer().getPosition().x;
    var y = cm.getPlayer().getPosition().y;
    var MC = cm.getServerName();
    var 角色 = cm.getPlayer().id;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 游览世界 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang6", id);
        if (getOneTimeLog(id) == -1) {
            itemIndex = 1;
            setOneTimeLog(1, id);
        } else {
            itemIndex = getOneTimeLog(id);
        }
        if (cm.getBossLog("刷新每日6") <= 0) {
            var ran = Math.floor(Math.random() * itemList.length);
            var itmeid = itemList[ran][0];
            changeOneTimeLog(ran, id);
            cm.setBossLog("刷新每日6");
            cm.说明文字("该任务已经被重置了，请重新打开吧。");
            cm.dispose();
            return;
        }
        var x1 = itemList[itemIndex][2];
        var x2 = itemList[itemIndex][3];
        var y1 = itemList[itemIndex][4];
        var y2 = itemList[itemIndex][5];
        if (ringnum >= 2) {
            selStr += "		        你已经完成了今日游览哦。\r\n";
        } else {
            selStr += "#d游览环数#k: #r2#k / #b" + (ringnum + 1) + "#k 环\r\n";
            selStr += "#d游览奖励#k: #b自由币#k x 1\r\n#d";
            selStr += "#d游览提示#k: \r\n";
            selStr += "#d地图#k: #b#m" + itemList[itemIndex][0] + "##k\r\n";
            selStr += "#d提示#k: #b" + itemList[itemIndex][1] + "#k\r\n";
        }
        selStr += "#b#L0#返回#k#n#l\r\n";
        if (ringnum < 2) {
            if (cm.getBossRank("游览世界", 2) <= 0) {
                selStr += "#b#L10#开始游览世界#k#n\r\n";
            }
            if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
                selStr += "#b#L1#完成游览#l#k#n\r\n";
            }
            selStr += "#b#L2#重置游览#l#k#n\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 10:
                cm.setBossRankCount("游览世界", 1);
                cm.说明文字("开始了游览世界。");
                cm.dispose();
                break;
            case 2:
                if (cm.getBossRank9("重置卡", 2) > 0) {
                    var ran = Math.floor(Math.random() * itemList.length);
                    var itmeid = itemList[ran][0];
                    var 数量 = itemList[ran][1];
                    if (itemIndex == -1) {
                        setOneTimeLog(ran, id);
                    } else {
                        changeOneTimeLog(ran, id);
                    }
                    cm.setBossRankCount9("重置卡", -1);
                    cm.getPlayer().dropMessage(5, "重置卡 - 1");
                    cm.dispose();
                    cm.openNpc(9310060, 14);
                } else {
                    cm.说明文字("很抱歉你没有 #b重置卡#k x 1");
                    cm.dispose();
                }
                break;
            case 1:
				var x = cm.getPlayer().getPosition().x;
				var y = cm.getPlayer().getPosition().y;
				var x1 = itemList[itemIndex][2];
				var x2 = itemList[itemIndex][3];
				var y1 = itemList[itemIndex][4];
				var y2 = itemList[itemIndex][5];
                if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
                    cm.setBossLog("游览世界");
                    cm.setBossLog("paoshang6");
                    var ran = Math.floor(Math.random() * itemList.length);
                    var itmeid = itemList[ran][0];
                    var 数量 = itemList[ran][1];
                    if (itemIndex == -1) {
                        setOneTimeLog(ran, id);
                    } else {
                        changeOneTimeLog(ran, id);
                    }
                    cm.setBossRankCount("游览世界", -cm.getBossRank("游览世界", 2));
                    cm.setBossRankCount9("自由币", 1);
                    cm.getPlayer().dropMessage(5, "自由币 + 1");
                    cm.sendNext("恭喜您完成了游览世界。");
                    if (ringnum == 1) {
                        cm.worldMessage(6, "[每日收集] : 恭喜 " + cm.getChar().getName() + " 完成了星缘的每日游览世界。");
                        cm.群输出信息("[每日收集] : 恭喜 " + cm.getChar().getName() + " 完成了星缘的每日游览世界。");
                    }
                }
                cm.dispose();
                break;
            case 0:
                cm.dispose();
                cm.openNpc(9310060, 0);
                break;
        }
    }
}

function getBossLog(boss, id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    var day = "" + year + "-" + month + "-" + days + "";
    ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= ?");
    ps.setInt(1, id);
    ps.setString(2, boss);
    ps.setString(3, day);
    var rs = ps.executeQuery();
    if (rs.next()) {
        count = rs.getInt(1);
    } else {
        count = -1;
    }
    rs.close();
    ps.close();
    return count;
}

function setOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("insert into onetimeloe (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimeloe set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimeloe WHERE characterid = ?");
    ps.setInt(1, id);
    var rs = ps.executeQuery();
    if (rs.next()) {
        count = rs.getString("log");
    } else {
        count = -1;
    }
    rs.close();
    ps.close();
    return count;
}