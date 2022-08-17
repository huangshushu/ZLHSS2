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
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(
        Array(100100, "数量"),
        Array(100101, "数量"),
        Array(120100, "数量"),
        Array(130100, "数量"),
        Array(130101, "数量"),
        Array(210100, "数量"),
        Array(1110100, "数量"),
        Array(1110101, "数量"),
        Array(1110130, "数量"),
        Array(1120100, "数量"),
        Array(1130100, "数量"),
        Array(1140100, "数量"),
        Array(1140130, "数量"),
        Array(1210100, "数量"),
        Array(1210101, "数量"),
        Array(1210102, "数量"),
        Array(1210103, "数量"),
        Array(2100100, "数量"),
        Array(2100101, "数量"),
        Array(2100102, "数量"),
        Array(2100103, "数量"),
        Array(2100104, "数量"),
        Array(2100105, "数量"),
        Array(2100106, "数量"),
        Array(2100107, "数量"),
        Array(2110200, "数量"),
        Array(2110300, "数量"),
        Array(2110301, "数量"),
        Array(2130100, "数量"),
        Array(2130103, "数量"),
        Array(2220000, "数量"),
        Array(2220100, "数量"),
        Array(2230100, "数量"),
        Array(2230101, "数量"),
        Array(2230102, "数量"),
        Array(2230103, "数量"),
        Array(2230104, "数量"),
        Array(2230105, "数量"),
        Array(2230106, "数量"),
        Array(2230107, "数量"),//?
        Array(2230108, "数量"),
        Array(2230109, "数量"),
        Array(2230110, "数量"),
        Array(2230111, "数量"),
        Array(2230131, "数量"),
        Array(2230200, "数量"),
        Array(2300100, "数量"),
        Array(3000000, "数量"),
        Array(3000005, "数量"),
        Array(3000006, "数量"),
        Array(3100101, "数量"),
        Array(3100102, "数量"),
        Array(3110300, "数量"),
        Array(3110301, "数量"),
        Array(3110302, "数量"),
        Array(3110303, "数量"),
        Array(3210100, "数量"),
        Array(3210200, "数量"),
        Array(3210201, "数量"),
        Array(3210202, "数量"),
        Array(3210203, "数量"),
        Array(3210204, "数量"),
        Array(3210205, "数量"),
        Array(3210206, "数量"),
        Array(3210207, "数量"),
        Array(3210208, "数量"),
        Array(3210450, "数量"),
        Array(3210800, "数量"),
        Array(3230100, "数量"),
        Array(3230101, "数量"),
        Array(3230102, "数量"),
        Array(3230103, "数量"),
        Array(3230104, "数量"),
        Array(3230200, "数量"),
        Array(3230303, "数量"),
        Array(3230304, "数量"),
        Array(3230305, "数量"),
        Array(3230306, "数量"),
        Array(3230307, "数量"),
        Array(3230308, "数量"),
        Array(3230400, "数量"),
        Array(3230405, "数量"),
        Array(3300001, "数量"),
        Array(3300003, "数量"),
        Array(4090000, "数量"),
        Array(4110300, "数量"),
        Array(4130100, "数量"),
        Array(4130101, "数量"),
        Array(4130102, "数量"),
        Array(4230100, "数量"),
        Array(4230101, "数量"),
        Array(4230102, "数量"),
        Array(4230111, "数量"),
        Array(4230112, "数量"),
        Array(4230116, "数量"),
        Array(4230117, "数量"),
        Array(4230118, "数量"),
        Array(4230119, "数量"),
        Array(4230120, "数量"),
        Array(4230121, "数量"),
        Array(4230123, "数量"),
        Array(4250001, "数量"),
        Array(5100003, "数量"),
        Array(5100004, "数量"),
        Array(5100005, "数量"),
        Array(5130107, "数量"),
        Array(5130108, "数量"),
        Array(5130104, "数量"),
        Array(5140000, "数量"),
        Array(5150001, "数量"),
        Array(5200002, "数量")
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
    var MC = cm.getServerName();
    var 等级 = cm.getPlayer().getLevel();
    var 人气 = cm.getPlayer().getFame();
    var 数量 = 1;
    if (等级 < 50) {
        cm.说明文字(" 50级以上才可以进行。");
        cm.dispose();
        return;
    }
    var MC = cm.getServerName();
    var 角色 = cm.getPlayer().id;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 寻找怪物 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang4", id);
        if (getOneTimeLog(id) == -1) {
            itemIndex = 1;
			setOneTimeLog(1, id);
        } else {
            itemIndex = getOneTimeLog(id);
        }
		if (cm.getBossLog("刷新每日4") <= 0) {
			var ran = Math.floor(Math.random() * itemList.length);
			var itmeid = itemList[ran][0];
			changeOneTimeLog(ran, id);
			cm.setBossLog("刷新每日4");
			cm.说明文字("该任务已经被重置了，请重新打开吧。");
			cm.dispose();
			return;
		}
        if (ringnum >= 10) {
            selStr += "		        你已经完成了今日寻找怪物哦。\r\n";
        } else {
            selStr += "#d寻找环数#k: #r10#k / #b" + (ringnum + 1) + "#k 环\r\n";
            selStr += "#d每环奖励#k: 人气 + 1 #b#z4006000##k x 10\r\n";
            selStr += "#d寻找目标#k: 请寻找 #b#o" + itemList[itemIndex][0] + "##k 。\r\n\r\n";
			if(itemList[itemIndex][0]>1000000){
				selStr += " #fMob/"+itemList[itemIndex][0]+".img/die1/0#  \r\n\r\n";
			}else{
				selStr += " #fMob/0"+itemList[itemIndex][0]+".img/die1/0#  \r\n\r\n";
			}
			//selStr += " " + cm.显示怪物图片(itemList[itemIndex][0]) + "  \r\n\r\n";
        }
		//if(cm.是否主城()){
		//	selStr += "#b#L0#返回#k#n#l\r\n";
		//}
		if(cm.getBossRank("寻找怪物",2)<=0){
			selStr += "#b#L10#开始寻找怪物#k#n#l\r\n";
		}
        if (ringnum < 10) {
            if (cm.判断当前地图指定怪物是否存在(itemList[itemIndex][0])) {
                selStr += "#b#L1#找到了#k#n#l\r\n";
            }
            selStr += "#b#L2#重置寻找怪物#k#n#l\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 10:
				cm.setBossRankCount("寻找怪物",1);
				cm.说明文字("开始了寻找怪物。");
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
                    cm.openNpc(9310060, 12);
                } else {
                    cm.说明文字("很抱歉你没有 #b重置卡#k x 1");
                    cm.dispose();
                }
                break;
            case 1:
                if (cm.判断当前地图指定怪物是否存在(itemList[itemIndex][0])) {
                    cm.setBossLog("paoshang4");
                    cm.给人气(1);
                    cm.给物品(4006000, 10);
                    var ran = Math.floor(Math.random() * itemList.length);
                    var itmeid = itemList[ran][0];
                    if (itemIndex == -1) {
                        setOneTimeLog(ran, id);
                    } else {
                        changeOneTimeLog(ran, id);
                    }
					cm.setBossRankCount("寻找怪物",-cm.getBossRank("寻找怪物",2));
					cm.setBossLog("寻找怪物");
                    cm.sendNext("恭喜你找到了 #b#o" + itemList[itemIndex][0] + "##k。");
					if(ringnum == 9){
						cm.群输出信息("[寻找怪物] : 恭喜 "+cm.getChar().getName()+" 完成了星缘的寻找怪物。");
					}
                } else {
                    cm.说明文字("你还没找到 #b#o" + itemList[itemIndex][0] + "##k 呢。");
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
    var ps = con1.prepareStatement("insert into onetimelob (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimelob set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimelob WHERE characterid = ?");
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