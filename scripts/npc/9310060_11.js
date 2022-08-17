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
        Array(100000000, "数量"), 
		Array(101000000, "数量"),
		Array(102000000, "数量"),
		Array(103000000, "数量"),
		Array(104000000, "数量"),
		Array(105040300, "数量"),
		Array(120000200, "数量"),
		Array(140000000, "数量"),
		Array(200000000, "数量"),
		Array(211000000, "数量"),
		Array(220000000, "数量"),
		Array(222000000, "数量"),
		Array(230000000, "数量"),
		Array(240000000, "数量"),
		Array(250000000, "数量"),
		Array(261000000, "数量"),
		Array(500000000, "数量"),
		Array(550000000, "数量"),
		Array(551000000, "数量"),
		Array(701000100, "数量"),
		Array(702000000, "数量")
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
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 每日拜访 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang3", id);
		if(getOneTimeLog(id)==-1){
			itemIndex = 1;
			setOneTimeLog(1, id);
		}else{
			itemIndex = getOneTimeLog(id);
		}
		if (cm.getBossLog("刷新每日3") <= 0) {
			var ran = Math.floor(Math.random() * itemList.length);
			var itmeid = itemList[ran][0];
			changeOneTimeLog(ran, id);
			cm.setBossLog("刷新每日3");
			cm.说明文字("该任务已经被重置了，请重新打开吧。");
			cm.dispose();
			return;
		}
		if(ringnum >= 3){
			selStr += "		        你已经完成了今日拜访哦。\r\n";
		}else{
			selStr += "#d收集环数#k: #r3#k / #b" + (ringnum+1) + "#k 环\r\n";
			selStr += "#d每环奖励#k: 人气 + 1 豆豆 + 20\r\n";
			selStr += "#d拜访进程#k: 请到 #b#m"+itemList[itemIndex][0]+"##k 来找我吧。\r\n\r\n";
		}	
        selStr += "#b#L0#返回#k#n#l\r\n";
		if(ringnum < 3){
			if (cm.判断地图()==itemList[itemIndex][0]) {
				selStr += "#b#L1#完成拜访#k#n#l\r\n";
			}
			selStr += "#b#L2#重置拜访地址#k#n#l\r\n";
		}
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 2:
                if(cm.getBossRank9("重置卡",2)>0){
					var ran = Math.floor(Math.random() * itemList.length);
					var itmeid = itemList[ran][0];
					var 数量 = itemList[ran][1];
					if (itemIndex == -1) {
						setOneTimeLog(ran, id);
					} else {
						changeOneTimeLog(ran, id);
					}
					cm.setBossRankCount9("重置卡",-1);
					cm.getPlayer().dropMessage(5,"重置卡 - 1");
					cm.dispose();
					cm.openNpc(9310060, 11);
                }else{
					cm.说明文字("很抱歉你没有 #b重置卡#k x 1");
					cm.dispose();
				}
                break;
            case 1:
				if (cm.判断地图()==itemList[itemIndex][0]) {
                        cm.setBossLog("paoshang3");
                        cm.给人气(1);
						cm.给豆豆(20);
                        var ran = Math.floor(Math.random() * itemList.length);
                        var itmeid = itemList[ran][0];
                        var 数量 = itemList[ran][1];
                        if (itemIndex == -1) {
                            setOneTimeLog(ran, id);
                        } else {
                            changeOneTimeLog(ran, id);
							setOneTimeLog(ran, id);
                        }
						if(ringnum == 2){
							cm.群输出信息("[每日拜访] : 恭喜 "+cm.getChar().getName()+" 完成了星缘的每日拜访。");
						}
                        cm.sendNext("恭喜您完成了拜访。");
                    } else {
                        cm.说明文字("你还没完成拜访 #b#m"+itemList[itemIndex][0]+"##k 的星缘呢。");
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
    var ps = con1.prepareStatement("insert into onetimeloa (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimeloa set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimeloa WHERE characterid = ?");
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