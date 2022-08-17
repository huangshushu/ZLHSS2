/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：冒险收集
 */
importPackage(Packages.client);
importPackage(Packages.database);
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(
        Array(4000000, "数量"), Array(4000001, "数量"), Array(4000005, "数量"),
        Array(4000003, "数量"), Array(4000006, "数量"), Array(4000007, "数量"),
        Array(4000008, "数量"), Array(4000009, "数量"), Array(4000011, "数量"),
        Array(4000014, "数量"), Array(4000026, "数量"), Array(4000025, "数量"),
        Array(4000029, "数量"), Array(4000032, "数量"), Array(4000036, "数量"),
        Array(4000052, "数量"), Array(4000051, "数量"), Array(4000037, "数量"),
        Array(4000097, "数量"), Array(4000102, "数量"), Array(4000103, "数量"),
        Array(4000109, "数量"), Array(4000113, "数量"), Array(4000117, "数量"),
        Array(4000120, "数量"), Array(4000115, "数量"), Array(4000111, "数量"),
        Array(4000121, "数量"), Array(4000154, "数量"), Array(4000157, "数量"),
        Array(4000158, "数量"), Array(4000153, "数量"), Array(4000159, "数量"),
        Array(4000164, "数量"), Array(4000162, "数量"), Array(4000161, "数量"),
        Array(4000165, "数量"), Array(4000133, "数量"), Array(4000169, "数量"),
        Array(4000190, "数量"), Array(4000191, "数量"), Array(4000193, "数量"),
        Array(4000196, "数量"), Array(4000188, "数量"), Array(4000192, "数量"),
        Array(4000197, "数量"), Array(4000195, "数量"), Array(4000236, "数量"),
        Array(4000004, "数量"), Array(4000002, "数量"), Array(4000012, "数量"),
        Array(4000015, "数量"), Array(4000016, "数量"), Array(4000018, "数量"),
        Array(4000035, "数量"), Array(4000033, "数量"), Array(4000034, "数量"),
        Array(4000031, "数量"), Array(4000023, "数量"), Array(4000027, "数量"),
        Array(4000165, "数量"), Array(4000133, "数量"), Array(4000169, "数量"),
        Array(4000043, "数量"), Array(4000041, "数量"), Array(4000039, "数量"),
        Array(4000059, "数量"), Array(4000060, "数量"), Array(4000061, "数量"),
        Array(4000132, "数量"), Array(4000134, "数量"), Array(4000069, "数量"),
        Array(4000147, "数量"), Array(4000155, "数量"), Array(4000156, "数量"),
        Array(4000170, "数量"), Array(4000171, "数量"), Array(4000172, "数量"),
        Array(4000205, "数量"), Array(4000204, "数量"), Array(4000187, "数量"),
        Array(4000206, "数量"), Array(4000207, "数量"), Array(4000018, "数量"),
        Array(4000110, "数量"), Array(4000107, "数量"), Array(4000106, "数量"),
        Array(4000021, "数量"), Array(4000018, "数量"), Array(4000019, "数量"),
        Array(4000024, "数量"), Array(4000027, "数量"), Array(4000034, "数量"),
        Array(4000118, "数量"), Array(4000119, "数量"), Array(4000119, "数量"),
        Array(4000351, "数量"), Array(4000350, "数量"), Array(4000332, "数量"),
        Array(4000333, "数量"), Array(4000329, "数量"), Array(4000334, "数量"),
        Array(4000335, "数量"), Array(4000379, "数量"), Array(4000380, "数量"),
        Array(4000160, "数量"), Array(4000167, "数量"), Array(4000168, "数量"),
        Array(4000177, "数量"), Array(4000178, "数量"), Array(4000185, "数量"),
        Array(4000276, "数量"), Array(4000277, "数量"), Array(4000278, "数量"),
        Array(4000279, "数量"), Array(4000280, "数量"), Array(4000281, "数量"),
        Array(4000282, "数量"), Array(4000298, "数量"), Array(4000299, "数量"),
        Array(4000289, "数量"), Array(4000288, "数量"), Array(4000287, "数量"),
        Array(4000292, "数量"), Array(4000291, "数量"), Array(4000286, "数量"),
        Array(4000293, "数量"), Array(4000295, "数量"), Array(4000168, "数量"),
        Array(4000353, "数量"), Array(4000354, "数量"), Array(4000356, "数量"),
        Array(4000361, "数量"), Array(4000364, "数量"), Array(4000000, "数量"),
        Array(4000365, "数量"), Array(4000359, "数量"), Array(4000360, "数量"),
        Array(4000433, "数量"), Array(4000467, "数量"), Array(4000468, "数量"),
        Array(4000471, "数量"), Array(4000472, "数量"), Array(4000469, "数量"),
        Array(4000470, "数量"), Array(4000474, "数量"), Array(4000473, "数量"),
        Array(4000476, "数量"), Array(4000475, "数量"), Array(4000477, "数量"),
        Array(4000090, "数量"), Array(4000089, "数量"), Array(4000078, "数量"),
        Array(4000091, "数量"), Array(4000092, "数量"), Array(4000093, "数量"),
        Array(4000033, "数量"), Array(4000436, "数量"), Array(4000438, "数量"),
        Array(4000439, "数量"), Array(4000000, "数量"), Array(4000000, "数量"),
        Array(4000383, "数量"), Array(4000382, "数量"), Array(4000000, "数量")
        );
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
var giftList = Array(
        Array(2000005, 10)
        );
var finalGiftList = Array(
        Array(2000005, 20)
        );
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1){
            status++;
        }else{
            status--;
		}
		if (cm.getInventory(1).isFull()) {
            cm.说明文字("请保证 #b装备栏#k 至少有2个位置。");
            cm.dispose();
            return;
        } else if (cm.getInventory(2).isFull()) {
            cm.说明文字("请保证 #b消耗栏#k 至少有2个位置。");
            cm.dispose();
            return;
        } else if (cm.getInventory(3).isFull()) {
            cm.说明文字("请保证 #b设置栏#k 至少有2个位置。");
            cm.dispose();
            return;
        } else if (cm.getInventory(4).isFull()) {
            cm.说明文字("请保证 #b其他栏#k 至少有2个位置。");
            cm.dispose();
            return;
        } else if (cm.getInventory(5).isFull()) {
            cm.说明文字("请保证 #b特殊栏#k 至少有2个位置。");
            cm.dispose();
            return;
        }
        var MC = cm.getServerName();
        var 等级 = cm.getPlayer().getLevel();
        var 人气 = cm.getPlayer().getFame();
        var 数量 = 0;
		if(等级<100){
			cm.说明文字(" 100级以上才可以进行。");
            cm.dispose();
            return;
		}
		
        if (等级 > 210) {
            数量 += 130;
			if(人气>=10){
				数量-=10;
			} 
			if(人气>=50){
				数量-=10;
			}
			if(人气>=70){
				数量-=10;
			}
			if(人气>=100){
				数量-=10;
			}
		} else if (等级 > 120) {
			数量 += 100;
		} else if (等级 > 110) {
			数量 += 90;
		} else if (等级 > 100) {
			数量 += 80;
        }
		
        var 星期 = cm.获取当前星期();
        if (status == 0) {
            id = cm.getPlayer().getId();
            ringnum = getBossLog("paoshang", id);
            itemIndex = getOneTimeLog(id);
            var strlen = "       " + 心 + " " + 心 + " " + 心 + " #e#r" + MC + "每日收集#k#n " + 心 + " " + 心 + " " + 心 + "\r\n\r\n";
            if (ringnum == 0)
                strlen += "#r任务详细#k:\r\n收集环数: #r20#k 环\r\n每环随机物品，玩家需要收集到指定数量即可完成这一环，进入下一环。\r\n#r奖励详细#k\r\n#d每次奖励 #r1#k AP。\r\n#d最终奖励 #b#z4032226##k x ( 10 - 20 )";

            else if (ringnum <= 20) {
                strlen += "\t#r#h ##k 您已经完成我这次的委托了么？\r\n\r\n\t您背包里持有 #r#c" + itemList[itemIndex][0] + "##k 个  #v" + itemList[itemIndex][0] + "# 收集需要 #r" + 数量.toFixed(0) + " #k个";
            } else {
                strlen = "真厉害！您已经完成了当日所有的收集！";
                cm.sendOk(strlen);
                cm.dispose();
                return;
            }
            cm.sendNext(strlen);
        } else if (status == 1) {
            if (cm.getInventory(4).isFull()) {
                cm.sendOk("#b请保证其他栏位至少有2个空格,否则无法继续.");
                cm.dispose();
                return;
            }
            if (cm.getInventory(2).isFull()) {
                cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法继续.");
                cm.dispose();
                return;
            }
            itemIndex = getOneTimeLog(id);
            //每轮奖励
            if (ringnum > 0 && ringnum < 20) {
                if (cm.haveItem(itemList[itemIndex][0], 数量)) {
                    cm.gainItem(itemList[itemIndex][0], -数量);
                    //cm.setBossRankCount("每日收集排行");
                    cm.setBossLog("paoshang");
					cm.给物品(4032226,1);
					cm.给经验(等级*5000);
                    cm.gainAp(1);
                    cm.sendNext("恭喜您完成了这次收集，请继续！");
					var ran = Math.floor(Math.random() * itemList.length);
					var itmeid = itemList[ran][0];
					var 数量 = itemList[ran][1];
					if (itemIndex == -1) {
						setOneTimeLog(ran, id);
					} else {
						changeOneTimeLog(ran, id);
					}
                } else {
                    cm.sendOk("       " + 心 + " " + 心 + " " + 心 + " #e#r" + MC + "每日收集#k#n " + 心 + " " + 心 + " " + 心 + "\r\n\r\n当前第 #r" + ringnum + "#k 环\r\n对不起，您还没有拿来我需要的材料，加油哦！\r\n这次您需要帮我搜集 #r" + 数量.toFixed(0) + " #k个#v" + itemList[itemIndex][0] + "# #b #t" + itemList[itemIndex][0] + "##k\r\n\r\n您背包里持有 #r#c" + itemList[itemIndex][0] + "##k 个 ");
                    cm.dispose();
                    return;
                }
                //最终奖励
            } else if (ringnum == 20) {
                if (cm.haveItem(itemList[itemIndex][0], 数量)) {
                    cm.gainItem(itemList[itemIndex][0], -数量);
					var 随机金猪 = cm.随机数(5);
					if(随机金猪<=0){
						var 随机金猪 =1;
					}
					cm.gainAp(1);
					cm.给物品(4032226,随机金猪);
					cm.给经验(等级*10000);
                    //cm.setBossRankCount("每日收集排行");
                    cm.setBossLog("paoshang");
                    cm.sendNext("恭喜您完成了今日收集。");
					var ran = Math.floor(Math.random() * itemList.length);
					var itmeid = itemList[ran][0];
					var 数量 = itemList[ran][1];
					if (itemIndex == -1) {
						setOneTimeLog(ran, id);
					} else {
						changeOneTimeLog(ran, id);
					}
                } else {
                    cm.sendOk("当前第#r" + ringnum + "#k环\r\n对不起，您还没有拿来我需要的材料，加油哦！\r\n\r\n这次您需要帮我搜集" + 数量.toFixed(0) + "个#v" + itemList[itemIndex][0] + "#\r\n期待您的好消息");
                    cm.dispose();
                    return;
                }
            } else {
                var ran = Math.floor(Math.random() * itemList.length);
                var itmeid = itemList[ran][0];
                var 数量 = itemList[ran][1];
                if (itemIndex == -1) {
                    setOneTimeLog(ran, id);
                } else {
                    changeOneTimeLog(ran, id);
                }
                var strlen1 = "您当前跑环环数为：#r " + (ringnum + 1) + " #k\r\n\r\n需要收集 #v" + itemList[itemIndex][0] + "#\r\n\r\n";
                strlen1 += "您已经成功的领取了本次跑环！";
                cm.setBossLog("paoshang");
                cm.sendOk(strlen1);
                cm.dispose();
            }
        } else if (status == 2) {
            if (ringnum < 20) {
                var ran = Math.floor(Math.random() * itemList.length);
                var itemid = itemList[ran][0];
                var 数量 = itemList[ran][1];
                if (itemIndex == -1) {
                    setOneTimeLog(ran, id);
                } else {
                    changeOneTimeLog(ran, id);
                }
                var strlen = "       " + 心 + " " + 心 + " " + 心 + " #e#r" + MC + "每日收集#k#n " + 心 + " " + 心 + " " + 心 + "\r\n您当前跑环环数为： #r" + (ringnum + 1) + "#k\r\n\r\n";
                strlen += "这次您需要帮我搜集#v" + itemid + "#\r\n期待您的好消息";
                cm.sendOk(strlen);
                cm.dispose();
            } else {
                cm.sendOk("您已经完成了跑环！");
                cm.dispose();
            }
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
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid, id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
    var con = DatabaseConnection.getConnection();
    var count = 0;
    var ps;
    ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ?");
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