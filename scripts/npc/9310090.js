importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var status = 0;
var itemList =
	Array(

	Array(1402014, 500, 1, 1), //温度计
Array(1302063, 500, 1, 1), //燃烧的火焰刀
Array(1302106, 500, 1, 1), //燃烧的冰焰刀
Array(1402037, 300, 1, 1), //龙背
Array(1102085, 1000, 1, 1), //黄色盖亚披风	
Array(1102086, 1000, 1, 1), //紫色盖亚披风
Array(1102040, 1000, 1, 1), //浪人披风(黄)	
Array(1102043, 1000, 1, 1), //浪人披风(褐)	
Array(1102042, 1000, 1, 1), //浪人披风(紫)
Array(1102084, 100, 1, 1), //粉红盖亚披风
Array(1102041, 100, 1, 1), //浪人披风(粉)	
Array(1402063, 1000, 1, 1),  //樱花伞 
Array(1302026, 1000, 1, 1), //黑雨伞
Array(1442122, 1000, 1, 1), //恐怖战士的玫瑰
Array(1442123, 1000, 1, 1), //愤怒战士的玫瑰
Array(1092022, 1000, 1, 1), //调色板盾牌
Array(1432018, 1000, 1, 1), //蓝色滑雪板	
Array(1442030, 1000, 1, 1), //枫之雪板
Array(1432048, 1000, 1, 1), //铲子
Array(1442046, 1000, 1, 1), //超级滑雪板
Array(1442039, 1000, 1, 1), //冻冻鱼
Array(1082149, 500, 1, 1), //工地手套(褐)
Array(1082179, 500, 1, 1), //马绍尔手套(黄)
Array(1050100, 100, 1, 1), //蓝色浴巾	
Array(1051098, 100, 1, 1), //红色浴巾
Array(1051140, 100, 1, 1), //黄色浴巾
Array(1082145, 1000, 1, 1), //工地手套(黄)
Array(1082146, 1000, 1, 1), //工地手套(红)
Array(1082147, 1000, 1, 1), //工地手套(蓝)
Array(1082148, 1000, 1, 1), //工地手套(紫)
Array(1082150, 1000, 1, 1), //工地手套(灰)
Array(1082002, 1000, 1, 1), //工地手套(白)
Array(1382016, 1000, 1, 1), //香菇 ——--高级货
Array(1302017, 1000, 1, 1), //蓝色雨伞	
Array(1302016, 1000, 1, 1), //黄色雨伞
Array(1002508, 1000, 1, 1), //枫叶头盔
Array(1002509, 1000, 1, 1), //枫叶头盔
Array(1002510, 1000, 1, 1), //枫叶头盔
Array(1002511, 1000, 1, 1), //枫叶头盔
Array(1002391, 1000, 1, 1), //海盗头巾(绿)

Array(1402013, 1000, 1, 1), //白日剑
//------脸饰------

Array(1012056, 500, 1, 1), //狗狗鼻
Array(1022047, 500, 1, 1), //猫头鹰
Array(1012058, 300, 1, 1), //匹诺曹的鼻子
Array(1012059, 300, 1, 1), //匹诺曹的鼻子
Array(1012060, 300, 1, 1), //匹诺曹的鼻子
Array(1012061, 300, 1, 1), //匹诺曹的鼻子
Array(1472054, 50, 1, 1), //信玄
Array(1372035, 1000, 1, 1), //火灵珠短杖
Array(1372036, 1000, 1, 1), //毒灵珠短杖
Array(1372037, 1000, 1, 1), //冰灵珠短杖
Array(1372038, 1000, 1, 1), //
Array(1012070, 1000, 1, 1), //雷灵珠短杖

//------披风-----
Array(1102163, 1000, 1, 1), //贵族披风

//-----耳环-----
Array(1032026, 1000, 1, 1), //黄水晶耳环
Array(1032040, 1000, 1, 1), //枫叶型耳环
Array(1032041, 1000, 1, 1), //枫叶型耳环
Array(1032042, 1000, 1, 1), //枫叶型耳环
//-----鞋-----
Array(1072238, 1000, 1, 1), //紫色钉鞋
Array(1072239, 1000, 1, 1), //黄色钉鞋
//-----卷轴-----
Array(2040810, 1000, 1, 1), //手套攻击诅咒卷轴70
Array(2040811, 1000, 1, 1), //手套攻击诅咒卷轴30
Array(2040814, 1000, 1, 1), //手套魔力诅咒卷轴70
Array(2040815, 1000, 1, 1), //手套魔力诅咒卷轴30
Array(2040916, 1000, 1, 1), //盾牌攻击诅咒卷轴70
Array(4000244, 1000, 1, 1), //蓝色双角龙的灵魂
Array(4000245, 1000, 1, 1), //蓝色双角龙的鳞片
Array(4020009, 2000, 1, 1), //时间碎片
Array(2070007, 100, 1, 1), //手套攻击诅咒卷轴70
Array(2070006, 100, 1, 1), //手套攻击诅咒卷轴30
Array(1092050, 100, 1, 1), //手套魔力诅咒卷轴70
Array(4260007, 100, 1, 1), //手套魔力诅咒卷轴30
Array(4260008, 100, 1, 1), //盾牌攻击诅咒卷轴70
Array(4021010, 100, 1, 1),//蓝色双角龙的灵魂
Array(1132036, 100, 1, 1), //手套魔力诅咒卷轴30
Array(1022153, 100, 1, 1), //盾牌攻击诅咒卷轴70
Array(1132103, 100, 1, 1),//蓝色双角龙的灵魂
Array(1113040, 100, 1, 1), //腰带运气卷轴60%
Array(1032182, 100, 1, 1) //蓝色双角龙的灵魂
	);

function start() {
	status = -1;
	action(1, 0, 0);
}
function 爆肝节(a) {
	cm.getQuestRecord(744441).gainCustomData(+a);
	var 抽奖次数 = Number(cm.getQuestRecord(744441).getCustomData()); //读取抽奖次数
	var 抽奖次数a = Number(cm.getQuestRecord(744442).getCustomData()); //读取抽奖次数
	cm.getPlayer().dropMessage(5,"抽奖次数："+抽奖次数);
	if (抽奖次数 >= 1200000000 && 抽奖次数a==0) {
		cm.getPlayer().MapEffectlaba("恭喜玩家 " + cm.getPlayer().getName() + " 抽奖12次 获得纪念币*2");
		cm.gainItem(5220000, 2);
		cm.getQuestRecord(744442).gainCustomData(+1);
	}
	if (抽奖次数 >= 1200000000 && 抽奖次数a==1) {
		cm.getPlayer().MapEffectlaba("恭喜玩家 " + cm.getPlayer().getName() + " 抽奖120次 获得纪念币*12");
		cm.gainItem(5220000, 12);
		cm.getQuestRecord(744442).gainCustomData(+1);
		cm.getPlayer().dropMessage(5,"次数："+抽奖次数a);
	}
	if (抽奖次数 >= 12120000000 && 抽奖次数a==2) {
		cm.getPlayer().MapEffectlaba("恭喜玩家 " + cm.getPlayer().getName() + " 抽奖1212次 获得纪念币*120");	
		cm.gainItem(5220000, 120);
		cm.getQuestRecord(744441).gainCustomData(-抽奖次数);
		cm.getPlayer().dropMessage(5,"重置抽奖次数成功");
		cm.getQuestRecord(744442).gainCustomData(-抽奖次数a);
	}
}
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
        if (status >= 0) {
			var selStrs = "\r\n";
		for (i = 0; i < itemList.length; i++) {
			selStrs += "#d#v" + itemList[i][0] + "#";

		}
			cm.sendOk("  #v1102163#v1012070#v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          物品全随机 好坏全看脸 抽奖请慎重 \r\n#r 你错过以下东西！" + selStrs);
            cm.dispose();
            return;
        }
		status--;
	}
	if (status == 0) {
		selStr = "\r\n";
		for (i = 0; i < itemList.length; i++) {
			selStr += "#d#v" + itemList[i][0] + "#";
		}

		 if (cm.haveItem(5220000, 1)) {//判断物品
			//cm.sendYesNo("  #v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          物品全随机 好坏全看脸 抽奖请慎重 \r\n#r          【十连抽】           确认抽取?"+selStr);
			cm.sendGetNumber("请输入抽奖次数 #r#v5220000#/次\r\n当前拥有数量: #r" +
				cm.getPlayer().getItemQuantity(5220000, false) + " \r\n", 1, 1, cm.getPlayer().getItemQuantity(5220000, false) / 1 > 10 ? 10 : cm.getPlayer().getItemQuantity(5220000, false) / 1);

		} else {
			cm.sendOk("  #v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          物品全随机 好坏全看脸 抽奖请慎重 \r\n#r             【十连抽】        您的点卷不足500" + selStr);
			cm.dispose();
		}
	} else if (status == 1) {
		if (cm.getInventory(1).isFull(selection - 1)) { //判断第一个也就是装备栏的装备栏是否有一个空格
			cm.sendOk("#b请保证装备栏位至少有" + (selection) + "个空格,否则无法抽奖.");
			cm.dispose();
		} else if (cm.getInventory(2).isFull(selection - 1)) { //判断第二个也就是消耗栏的装备栏是否有一个空格
			cm.sendOk("#b请保证消耗栏位至少有" + (selection) + "个空格,否则无法抽奖.");
			cm.dispose();
		} else if (cm.getInventory(3).isFull(selection - 1)) { //判断第三个也就是设置栏的装备栏是否有一个空格
			cm.sendOk("#b请保证设置栏位至少有" + (selection) + "个空格,否则无法抽奖.");
			cm.dispose();
		} else if (cm.getInventory(4).isFull(selection - 1)) { //判断第四个也就是其它栏的装备栏是否有一个空格
			cm.sendOk("#b请保证其它栏位至少有" + (selection) + "个空格,否则无法抽奖.");
			cm.dispose();
		} else if (cm.getInventory(5).isFull(selection - 1)) { //判断第五个也就是现金栏的装备栏是否有一个空格
			cm.sendOk("#b请保证现金栏位至少有" + (selection) + "个空格,否则无法抽奖.");
			cm.dispose();
		} else if (!cm.haveItem(5220000, selection)) {//判断物品
		    cm.sendOk("#b你没有" + selection + "个#v5220000#.");
			cm.dispose();
		} else {
			var 失败 = 0;
			cm.gainItem(5220000,-selection);
			for (var ai = 0; ai < selection; ai++) {

				var ii = MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random() * 500);
				var finalitem = Array();
				for (var i = 0; i < itemList.length; i++) {
					if (itemList[i][1] >= chance) {
						finalitem.push(itemList[i]);
					}
				}

				if (finalitem.length != 0) {

					var random = new java.util.Random();
					var finalchance = random.nextInt(finalitem.length);
					var itemId = finalitem[finalchance][0];
					var quantity = finalitem[finalchance][2];
					//var notice = finalitem[finalchance][3];
					// item = cm.gainGachaponItem(itemId, quantity,);//, notice
					var Laba = finalitem[finalchance][3];

					if (ii.getInventoryType(itemId).getType() == 1) {
						var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
						MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
					} else {
						var toDrop = new Equip(itemId, 0).copy();
						cm.gainItem(itemId, quantity);
					}

					if (Laba == 1) {

						cm.全服黄色字体(" 【" + ai + "】【点卷抽奖】获得，大家一起恭喜他/她吧!", toDrop)
						//cm.gainItem(-500);//扣除点券
						//cm.sendOk("你获得了 #b#t" + itemId + "##k " + quantity + "个。");
					} else { //不喇叭
						//cm.sendOk("你获得了 #b#t" + itemId + "##k " + quantity + "个。");
					}

				} else {
					//cm.sendOk("今天的运气可真差，什么都没有拿到.");
					//cm.gainItem(-500);//扣除点券
					//cm.gainItem(5220000,1);
					失败++;

				}
			}
			//cm.gainItem(5220000, 失败);
			cm.dispose();
		}
	}
}
