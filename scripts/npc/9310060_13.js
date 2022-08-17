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
        Array(4031627, "数量"), 
		Array(4031628, "数量"),
		Array(4031630, "数量"),
		Array(4031631, "数量"),
		Array(4031633, "数量"),
		Array(4031634, "数量"),
		//Array(4031635, "数量"),
		//Array(4031636, "数量"),
		Array(4031637, "数量"),
		Array(4031638, "数量"),
		Array(4031639, "数量"),
		Array(4031640, "数量"),
		Array(4031641, "数量"),
		Array(4031642, "数量"),
		Array(4031643, "数量"),
		Array(4031644, "数量"),
		Array(4031645, "数量"),
		Array(4031646, "数量"),
		Array(4031647, "数量"),
		Array(4031648, "数量")
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
    var 数量 = 0;
    if (等级 < 100) {
        cm.说明文字(" 100级以上才可以进行。");
        cm.dispose();
        return;
    }

    数量 += 5;
    var MC = cm.getServerName();
    var 角色 = cm.getPlayer().id;
    if (status == 0) {
        var selStr = "   " + 心 + " " + 心 + "  " + 心 + "  " + 心 + " #r#e < 鱼类收集 > #k#n " + 心 + "  " + 心 + "  " + 心 + " " + 心 + "\r\n\r\n";
        id = cm.getPlayer().getId();
        ringnum = getBossLog("paoshang5", id);
		if(getOneTimeLog(id)==-1){
			itemIndex = 1;
			setOneTimeLog(1, id);
		}else{
			itemIndex = getOneTimeLog(id);
		}
		if (cm.getBossLog("刷新每日5") <= 0) {
			var ran = Math.floor(Math.random() * itemList.length);
			var itmeid = itemList[ran][0];
			changeOneTimeLog(ran, id);
			cm.setBossLog("刷新每日5");
			cm.说明文字("该任务已经被重置了，请重新打开吧。");
			cm.dispose();
			return;
		}
		if(ringnum >= 2){
			selStr += "		        你已经完成了今日收集哦。\r\n";
		}else{
			selStr += "#d收集环数#k: #r2#k / #b" + (ringnum+1) + "#k 环\r\n";
			selStr += "#d每环奖励#k: #b自由币#k x 1\r\n#d";
			selStr += "#d收集进程#k: 持有 #r#c" + itemList[itemIndex][0] + "##k 个  #v" + itemList[itemIndex][0] + "#  收集需要 #r" + 数量 + " #k个\r\n\r\n";
		}	
        selStr += "#b#L0#返回#k#n\r\n";
		if(ringnum < 2){
			selStr += "#b#L1#提交收集#k#n#l\r\n";
			selStr += "#b#L2#重置收集物品#k#n#l\r\n";
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
					cm.openNpc(9310060, 13);
                }else{
					cm.说明文字("很抱歉你没有 #b重置卡#k x 1");
					cm.dispose();
				}
                break;
            case 1:
                    if (cm.haveItem(itemList[itemIndex][0], 数量)) {
                        cm.gainItem(itemList[itemIndex][0], -数量);
                        cm.setBossLog("paoshang5");
	            cm.setBossRankCount9("自由币",1);
		   cm.getPlayer().dropMessage(5,"自由币 + 1");
                        var ran = Math.floor(Math.random() * itemList.length);
                        var itmeid = itemList[ran][0];
                        var 数量 = itemList[ran][1];
                      //  if (itemIndex == -1) {
                       //     setOneTimeLog(ran, id);
                      //  } else {
                         //   changeOneTimeLog(ran, id);
                      //  }
	
				
                        //cm.sendNext("恭喜您完成了今日收集。");
                  
                       if (itemIndex == -1) {
                            setOneTimeLog(ran, id);
                        } else {
                            changeOneTimeLog(ran, id);
                        }
                        cm.sendNext("恭喜您完成了第 #b" + (ringnum + 1) + "#k 环收集，请开始下一环收集吧。");
                    } else {
                        cm.说明文字("你还没收集完成 #v" + itemList[itemIndex][0] + "# x #r" + 数量.toFixed(0) + " #k个呢。");
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
    var ps = con1.prepareStatement("insert into onetimeloc (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimeloc set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimeloc WHERE characterid = ?");
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