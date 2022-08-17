var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var DatabaseConnection = Java.type('database.DatabaseConnection');

var status = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(//Array(id,Num)
Array(4000016,15),Array(4000008,15),Array(4000002,15),//红蜗牛壳，道符，蝴蝶结
Array(4000007,15),Array(4000029,15),Array(4000023,15),//火独眼，香蕉，冰独眼
Array(4000011,15),Array(4000009,15),Array(4000037,15),//蘑菇苞芽，蓝蘑菇，蓝水灵
Array(4000042,15),Array(4000032,15),Array(4000039,15),//蝙蝠翅膀，鳄鱼皮，铁甲猪蹄
Array(4000045,10),Array(4000052,15),Array(4000060,15),//乌龟壳，白狼尾，月光精灵
Array(4000069,15),Array(4000074,10),Array(4000102,10),//僵尸牙齿，黑色飞狮尾，黑积木
Array(4000106,15),Array(4000115,10),Array(4000128,10),//玩具熊猫棉花，齿轮，黄小丑
Array(4000143,15),Array(4000162,15),Array(4000180,15),//僵尸娃娃，华丽鳞片，鲨鱼假牙
Array(4000182,15),Array(4000183,15),Array(4000188,15),//石灰粉瓶，墨汁瓶，鸭蛋
Array(4000191,15),Array(4000192,10),Array(4000197,15),//黑山羊角，鼻环，石板
Array(4000205,15),Array(4000207,15),Array(4000373,15),//骷髅犬绑带，骨盆，墨汁

Array(4000292,15),Array(4000294,10),Array(4000329,15),//人参汤，百年桔梗，仙人掌球
Array(4000330,15),Array(4000331,15),Array(4000354,15),//仙人掌刺，仙人掌花，烧杯
Array(4000089,15),Array(4000066,15),Array(4000075,15),//流氓A的徽章，云狐尾巴，三角头巾

Array(4000080,15),Array(4000281,15),Array(4000298,10),//火焰猎犬的项链，蛇纹皮，白纸张
Array(4000282,15),Array(4000465,15),Array(4000472,15),//蟠桃核，椰子壳，蛇笛
Array(4000469,15),Array(4000375,15),Array(4000433,15),//围巾，轮胎，油罐
Array(4000432,15),Array(4000434,15),Array(4000118,15),//青苔岩石，大花草，小太空船
Array(4000172,15),Array(4000440,15),Array(4000439,15),//三尾狐的尾巴，粗糙的皮革，青苔石
Array(4000085,15),Array(4000050,15),Array(4000049,15),//火石球的石片，企鹅王的嘴，白雪人角
Array(4000272,15),Array(4000268,15),Array(4000241,15),//蛋壳碎片，飞龙的翅膀，邪恶绵羊嚼过的草
Array(4000233,15),Array(4000236,15),Array(4000240,10),//半人马的净水，橡木甲虫角，小火花羽毛
Array(4000166,15),Array(4000163,15),Array(4000027,10),//虾肉，海马的角，怪猫的眼
Array(4000028,10),Array(4000127,15),Array(4000402,10),//月牙牛魔王的角，玩具鼓，银人心
Array(4000394,15),Array(4000444,15),Array(4000447,15),//白虎尾巴，绿色衣襟，绿色头盔
Array(4000449,15),Array(4000452,15),Array(4000454,15),//蓝色衣襟，蓝色头盔，红色衣襟
Array(4000457,15),Array(4001006,15)//红色头盔，火焰羽毛

);
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
var giftList = Array(//Array(id,Num)
	Array(2022468,3)//
);
var finalGiftList = Array(//Array(id,Num)
	Array(2022468,5)//
);
var rand=Math.floor(Math.random()*100);
//////////////////////////////////////////////////////////
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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			id = cm.getPlayer().getId();
			ringnum = cm.getBossLog("paohuan");
			var textz = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"
				textz += "           "+小烟花 +"#r欢迎来到月月冒险岛每日跑环#k"+小烟花 +"\r\n"
				textz += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n"
				textz += " #r跑环时请保证背包有足够空间，否则奖励领取失败后果自负#l\r\n"
				textz += "               #L0#"+小烟花 +"#r每日跑环说明"+小烟花 +"#l\r\n\r\n"
				textz += "               #L1#"+小烟花 +"#b开始跑环任务"+小烟花 +"#l\r\n\r\n";
				textz += "               #L2#"+小烟花 +"#b领取25环奖励"+小烟花 +"#l\r\n";
			cm.sendSimple (textz);   

		}else if (status == 1) {
			if (selection == 0) {
				var textz1 = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"
				textz1 += "           "+小烟花 +"#r欢迎来到月月冒险岛跑环说明#k"+小烟花 +"\r\n"
				textz1 += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n"
				textz1 += "                  #r每日跑环上限为25环#l\r\n\r\n"
				textz1 += "                  #b每环完成时固定奖励\r\n                       #v3992025#*5#l\r\n";//，#v4005000#*1，#v4005001#*1，#v4005002#*1\r\n          #v4005003#*1， #v4005004#*1，#v4001165#*1，#v4001129#*1
				textz1 += "       #r每完成5环时奖励翻倍，且有概率获得额外奖励\r\n                  #v3992025#*10   #v3992025#*20   #l\r\n"//#v4000313#*10，#v4031138#*500W，#v2028177#*1
				textz1 += "                #b完成全部25环可领取奖励\r\n        #v3992025#*2088，#v4005000#*10，#v4005001#*10，#v4005002#*10\r\n     #v4005003#*10，#v4005004#*10，#v4001165#*100，#v4170012#*1，#v2028171#*1#l\r\n"
				cm.sendSimple (textz1);
				cm.dispose();
			} else if (selection == 1) {
				if (cm.getInventory(2).isFull()) {
					cm.sendOk("#b请保证消耗栏有足够空间，否则将无法领取任务！");
					cm.dispose();
					
				} else if (cm.getInventory(4).isFull()) {
					cm.sendOk("#b请保证其他栏有足够空间，否则将无法领取任务！");
					cm.dispose();
					
				} else {
					itemIndex = getOneTimeLog(id);
					if (ringnum < 25) {
						var ran = Math.floor(Math.random()*itemList.length);
						var itemid = itemList[ran][0];
						var itemnum = itemList[ran][1];
						if (itemIndex == -1){
							setOneTimeLog(ran,id);
							cm.setBossLog("paohuan");
						} else {
							changeOneTimeLog(ran,id);
						}
						if (cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])) {
							cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
							if (ringnum > 0 && ringnum%5 == 0) {//每5环奖励双倍
								if (rand <= 70) {
									cm.gainItem(3992025,20);//圣诞大星
									//cm.gainItem(4005000,2);//水晶
									//cm.gainItem(4005001,2);//水晶
									//cm.gainItem(4005002,2);//水晶
									//cm.gainItem(4005003,2);//水晶
									//cm.gainItem(4005004,2);//黑暗水晶
									//cm.gainItem(4001165,2);//太阳神的赐福
									//cm.gainItem(4001129,2);//冒险岛纪念币
								} else {//30%概率额外给物品
									cm.gainItem(3992025,10);//圣诞大星
									//cm.gainItem(4005000,2);//水晶
									//cm.gainItem(4005001,2);//水晶
									//cm.gainItem(4005002,2);//水晶
									//cm.gainItem(4005003,2);//水晶
									//cm.gainItem(4005004,2);//黑暗水晶
									//cm.gainItem(4001165,2);//太阳神的赐福
									//cm.gainItem(4001129,2);//冒险岛纪念币
									//cm.gainItem(4000313,10);//黄金枫叶
									//cm.gainItem(2028177,1);//跑环礼箱
									//cm.gainMeso(5000000);
								}
							} else {//正常固定奖励
								cm.gainItem(3992025,5);//圣诞大星
								//cm.gainItem(4005000,1);//水晶
								//cm.gainItem(4005001,1);//水晶
								//cm.gainItem(4005002,1);//水晶
								//cm.gainItem(4005003,1);//水晶
								//cm.gainItem(4005004,1);//黑暗水晶
								//cm.gainItem(4001165,1);//太阳神的赐福
								//cm.gainItem(4001129,1);//冒险岛纪念币
							}
							cm.setBossLog("paohuan");
							cm.sendOk("恭喜你完成了每日跑环：第"+(ringnum+1)+"环，请继续加油！\r\n\r\n");
							cm.dispose();
							
						} else {
							var textz2 = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"
								textz2 += "           "+小烟花 +"#r欢迎来到月月冒险岛每日跑环#k"+小烟花 +"\r\n"
								textz2 += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"
								textz2 += "               目前的环数为：第"+(ringnum+1)+"环#l\r\n\r\n"
								textz2 += "        本次跑环你需搜集#v"+itemid+"#*"+itemnum+"，请火速前往！#l\r\n";
							cm.sendSimple (textz2);
							cm.dispose();
						}
					} else {
						cm.sendOk("你今天已完成25环跑环，请进行其他日常活动！\r\n\r\n");
						cm.dispose();
						
					}
				}
			} else if (selection == 2) {
				if (cm.getInventory(2).isFull()) {
					cm.sendOk("#b请保证消耗栏至少有足够空间，否则领取奖励失败后果自负！");
					cm.dispose();
					
				} else if (cm.getInventory(4).isFull()) {
					cm.sendOk("#b请保证其他栏至少有足够空间，否则领取奖励失败后果自负！");
					cm.dispose();
					
				} else {
					if (ringnum == 25 && cm.getBossLog("paohuanjl") == 0) {//25环奖励
						cm.gainItem(3992025,2088);//圣诞大星
						cm.gainItem(2028171,1);//跑环礼箱
						cm.gainItem(4005000,10);//水晶
						cm.gainItem(4005001,10);//水晶
						cm.gainItem(4005002,10);//水晶
						cm.gainItem(4005003,10);//水晶
						//cm.gainItem(4001165,20);//太阳神的赐福
						cm.gainItem(4005004,10);//黑暗水晶
						cm.gainItem(4001165,100);//中介币
						cm.gainItem(4170012,1);//必成蛋
						//cm.gainItem(4001129,20);//冒险岛纪念币
						cm.setBossLog("paohuanjl");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "每日跑环" + " : " + "恭喜『" + cm.getChar().getName() + "』完成了每日25环，获得了最终精美奖励！真是肝帝转世！"));
						cm.dispose();
					} else if (ringnum < 25){
						cm.sendOk("#r你还未完成本日的25环，再接再厉！");
						cm.dispose();
					} else {
						cm.sendOk("#r你已经领取了本日的25环奖励，不可重复领取！");
						cm.dispose();
					}
				}
			}
		}
	}
}

function getBossLog(boss,id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        //ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
		var day = ""+year+"-"+month+"-"+days+"";
		ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ?");// AND lastattempt >= ?
        ps.setInt(1, id);
        ps.setString(2, boss);
		//ps.setString(3,day);
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

function setOneTimeLog(bossid,id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid,id) {
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