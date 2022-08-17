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

var status = -1;
var itemss;
var shul = 0;
var itemList =
	Array(
		//Array(回收的物品id, 回收得到的物品id,回收得到的物品数量),
		//回收得到的物品id = 0  是金币
		//回收得到的物品id = 1  是抵用卷
		//回收得到的物品id = 2  是点券
		
 Array(1003782, 2, 80000),
 Array(1003783, 2, 80000),
 Array(1003785, 2, 80000),
 Array(1003784, 2, 80000),
 
 Array(1003767, 2, 20000),
 Array(1003768, 2, 20000),
 Array(1003765, 2, 20000),
 Array(1003766, 2, 20000),
 
 

 
 Array(4000463, 4001128, 1500),
 Array(2340000, 2022465, 15), //祝福卷轴
 Array(2049100, 2022465, 8),//混沌卷轴60%
 //圣诞一套
 Array(1332081,0,100000),//短剑
 Array(1372046,0,100000),
 Array(1382062,0,100000),//长杖
 Array(1402053,0,100000),//双手剑
 Array(1432050,0,100000),//枪
 Array(1442071,0,100000),//矛
 Array(1452062,0,100000),//弓
 Array(1472077,0,100000),//全套
 Array(1482029,0,100000),//指节
 Array(1492030,0,100000),//手枪
 Array(4001254,0,100000),//筹码
 
  Array(1112763,4000487, 80), //S级力量戒指
 Array(1112775,4000487, 80), //S级敏捷戒指
 Array(1112767,4000487, 80), //S级运气戒指
 Array(1112771,4000487, 80), //S级智慧戒指
 Array(1132192,4000487, 20), //S级力量宝石腰带	 
 Array(1132196,4000487, 20), //S级运气宝石腰带	 
 Array(1132200,4000487, 20), //S级智慧宝石腰带	  
 Array(1132204,4000487,20), //S级敏捷宝石腰带
 
 //伞
 Array(1302016,4011002,2),//伞
 Array(1302017,4011003,2),//
 Array(1302025,4011005,2),//
 Array(1302026,4021001,2),//
 Array(1302027,4021008,2),//
 Array(1302028,4021006,2),//
 Array(1302029,4011006,2),//
 Array(1302058,4020002,10),//
 
//椅子一套		
 Array(3010832,2,20000),//太阳		
 Array(3015183,1,150),//
 Array(3015143,1,150),//
 Array(3010756,1,150),//
 Array(3010850,1,150),//
 Array(3010845,1,150),//
 Array(3010900,1,150),//
 Array(3010014,1,150),//
 Array(3010984,1,150),//
 Array(3010199,1,150),//
 Array(3010073,1,200),//小
 Array(3010070,1,1000),//大
 Array(3010298,1,150),//
 Array(3010313,1,150),//
 Array(3010567,1,150),//
 Array(3010574,1,150),//
 Array(3010609,1,150),//
 Array(3010799,1,150),//
 Array(3010842,1,150),//
 Array(3010754,1,150),//
 Array(3010983,1,150),//
 Array(3010848,1,150),//红地毯主人公椅子
 Array(3010100,1,150),//财神椅子
 Array(3010029,1,150),//
 Array(3010030,1,150),//
 Array(3010031,1,150),//
 Array(3010032,1,150),//
 Array(3010033,1,150),
 
 Array(1302032,2022465,1),//火焰四件套
 Array(1332028,2022465,1),//火焰四件套
 Array(1382013,2022465,1),//火焰四件套
 Array(1462020,2022465,1),//火焰四件套
 
 Array(1472054,2,88),//信玄
 Array(1442078,4004000,10),//贝音矛
 Array(1402062,4004001,10),//贝音剑
 Array(1472086,4004002,10),//贝音拳
 Array(1452071,4004003,10),//贝音弓
 Array(1492037,4004004,10),//贝音枪
 
 
 //垃圾一套
 Array(1302080,4010000,5),//圈跟法杖
 Array(1312013,4010000,5),//
 Array(1322021,4010000,5),//
 Array(1322022,4010000,5),//
 Array(1322023,4010000,5),//
 Array(1322024,4010000,5),//
 Array(1322025,4010000,5),//
 Array(1322026,4010000,15),//
 Array(1322027,4010001,5),//
 Array(1322051,4010001,5),//
 Array(1372011,4010001,5),//
 Array(1372017,4010001,5),//
 Array(1382015,4010001,5),//
 Array(1382016,4010001,20),//
			
 Array(1402013,4004004,10),//
 Array(1402017,4004004,5),//
 Array(1402029,4004003,5),//
 Array(1422011,4010006,10),//
 Array(1432013,0,100000),//
 Array(1442026,4010005,10),//
 Array(1442027,4010005,10),//
 Array(1442028,4010005,10),//
 Array(1442029,4010005,10),//
 Array(1442030,4010005,10),//
 Array(1332032,1,20),//圣诞树
 Array(1432046,1,20),//圣诞树手杖
 Array(1442039,1,50),//冻冻 鱼
 Array(1382014,1,100),// 孙家
 Array(1442025,1,100),//青龙
 Array(1332029,1,100),//双古
 Array(1442004,0,18888),//
 Array(1442021,1,50),//
 Array(1442022,1,50),//
 Array(1442023,1,50),//
 Array(1332021,1,50),//乌龙茶
 Array(1312014,1,20),//阎王笔
 Array(1322009,1,10),//马桶吸
 Array(1332030,1,20),//团扇
 Array(1332053,2,30),//野外烧烤
 Array(1332054,2,30),//闪电飞刀
 Array(1402044,1,50),//南瓜灯笼
 Array(1050165,2022465,1),//守护套
 Array(1052217,2022465,1),//白云套
 Array(1012011,1,10),//鹿鼻子
 Array(1082145,1,10),//工地手套（各种颜色全部+进去）
 Array(1082146,1,10),//工地手套（各种颜色全部+进去）
 Array(1082147,1,10),//工地手套（各种颜色全部+进去）
 Array(1082148,1,10),//工地手套（各种颜色全部+进去）
 Array(1082150,1,10),//工地手套（各种颜色全部+进去）
 Array(1082175,1,10),//工地手套（各种颜色全部+进去）
 Array(1082176,1,10),//工地手套（各种颜色全部+进去）
 Array(1082177,1,10),//工地手套（各种颜色全部+进去）
 Array(1082178,1,10),//工地手套（各种颜色全部+进去）
 Array(1082252,1,10),//枫叶手套
 Array(1072238,1,50),//钉鞋
 Array(1072239,1,50),//钉鞋
 Array(1002418,1,10),//报废报纸头盔
 Array(1004427,2022465,1),//宇宙冲撞头盔
 Array(1002419,1,10),//枫叶帽
 Array(1002677,1,20),//玩具匠人帽
 Array(1002424,1,10),//红马术帽
 Array(1002425,1,10),//蓝马术帽
 Array(1002758,1,50),//强化版枫叶头盔
 Array(1002511,1,30),//枫叶头盔
 Array(1002510,1,10),//枫叶头盔
 Array(1002391,1,10),//海盗四色
 Array(1002392,1,10),//海盗四色
 Array(1002393,1,10),//海盗四色
 Array(1002394,1,10),//海盗四色
 Array(1002395,1,10),//浴巾四色
 Array(1102079,1,10),//破披风一套
 Array(1102081,1,10),//破披风一套
 Array(1102226,1,10),//破披风一套
 Array(1102227,1,10),//破披风一套
 Array(1102053,1,10),//破披风一套
 Array(1050100,1,10),//浴巾四色
 Array(1050127,1,10),//浴巾四色
 Array(1051098,1,10),//浴巾四色
 Array(1302036,1,10),//枫叶小旗子
 Array(1302087,2022465,1),//火炬
 Array(1112423,2022465,1),//银笔
 Array(1112422,2022465,1),//调色
 Array(1112421,2022465,1),//灵感
 Array(1112424,2022465,1),//黑羽笔
 Array(1112425,2022465,1),//金怀表
 Array(1112426,2022465,1),//蒲公英
 Array(1122128,2022465,2),//冒险之心
 Array(1012058,1,10),//垃圾一套
 Array(1012059,1,10),//垃圾一套
 Array(1012060,1,10),//垃圾一套
 Array(1012061,1,10),//垃圾一套
 Array(1012070,1,10),//垃圾一套
 Array(1012071,1,10),//垃圾一套
 Array(1012072,1,10),//垃圾一套
 Array(1012073,1,10),//垃圾一套
 Array(1012072,1,10),//垃圾一套
 Array(1032032,1,10),//垃圾一套
 Array(1132000,1,10),//白色腰带
 Array(1132001,1,10),//黄色腰带
 Array(1132002,1,10),//蓝色腰带
 Array(1132003,1,10),//红色腰带
 Array(1132004,1,10),//黑
 Array(1132012,1,10),//法老的腰带
 Array(1132013,2022465,1),//不灭
 Array(1122001,1,10),//绿色蝶形领结
 Array(1122002,1,10),//红色蝶形领结
 Array(1122003,1,10),//黄色蝶形领结
 Array(1122004,1,10),//粉红蝶形领结
 Array(1122006,1,10),//蓝色蝶形领结
 Array(1122005,1,10),//黑色蝶形领结
 
Array(1072366,1,50),//工作人员
	 Array(1072368,1,50),//最强工作人员
	 Array(1032055,1,50),//工作人员C的旧收信机
	 Array(1032058,1,50),//工作人员C钛质收信机
	 Array(1052166,1,50),//无敌工作人员套装
	 Array(1052165,1,50),//降落伞工作人员套装
	 Array(1322012,1,30),//红色砖头
	 Array(1302061,1,10),//藤蔓鞭子
	 Array(1302049,1,10),//光线鞭子
	 Array(1302013,1,80),//红色鞭子
	 Array(1302084,1,10),//火柴
	 Array(1302021,1,10),//橡皮榔头
	 Array(1332020,1,20),//太极扇
	 Array(1302085,1,10),//叉子
     Array(1382017,1,10),//金轮杖
	 
Array(1302212, 4000487, 1),
Array(1312114, 4000487, 1),
Array(1322154, 4000487, 1),
Array(1332186, 4000487, 1),
Array(1372131, 4000487, 1),
Array(1382160, 4000487, 1),
Array(1402151, 4000487, 1),
Array(1412104, 4000487, 1),
Array(1422105, 4000487, 1),
Array(1432135, 4000487, 1),
Array(1442173, 4000487, 1),
Array(1452165, 4000487, 1),
Array(1462156, 4000487, 1),
Array(1472177, 4000487, 1),
Array(1482138, 4000487, 1),
Array(1492138, 4000487, 1),
	 


//终极系列
Array(1322191, 4000487, 3),
Array(1452198, 4000487, 3),
Array(1472207, 4000487, 3),
Array(1462186, 4000487, 3),
Array(1492172, 4000487, 3),
Array(1302258, 4000487, 3),
Array(1482161, 4000487, 3),
Array(1332216, 4000487, 3),
Array(1372170, 4000487, 3),
Array(1432160, 4000487, 3),
Array(1382202, 4000487, 3),
Array(1412128, 4000487, 3),
Array(1442211, 4000487, 3),
Array(1402187, 4000487, 3),	 

	 
//扎昆套
Array(1302312, 4000487, 2),
Array(1312182, 4000487, 2),
Array(1322233, 4000487, 2),
Array(1332257, 4000487, 2),
//Array(1362118, 4000487, 2),
Array(1372204, 4000487, 2),
Array(1382242, 4000487, 2),
Array(1402233, 4000487, 2),
Array(1412161, 4000487, 2),
Array(1422168, 4000487, 2),
Array(1432197, 4000487, 2),
Array(1452235, 4000487, 2),
Array(1462222, 4000487, 2),
Array(1472244, 4000487, 2),
Array(1482199, 4000487, 2),
Array(1492209, 4000487, 2),	 
	 
 
 //一段不速
 Array(1302143,2,100),
 Array(1312058,2,100),
 Array(1322086,2,100),
 Array(1332116,2,100),
 Array(1332121,2,100),
 Array(1372074,2,100),
 Array(1402086,2,100),
 Array(1412058,2,100),
 Array(1422059,2,100),
 Array(1432077,2,100),
 Array(1442107,2,100),
 Array(1452102,2,100),
 Array(1462087,2,100),
 Array(1472113,2,100),
 Array(1482075,2,100),
 Array(1102476,0,1000000),
 Array(1492075,2,100)
 
 
 
 

	);
var slot = Array();

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var 物品组 = "";
	for (var i = 0; i < itemList.length; i++) {
		物品组 += "|" + itemList[i][0];
	}
	if (mode == 1) {
		status++;
	} else if (mode == 0 && status != 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		var avail = "";
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(1).getItem(i) != null && 物品组.indexOf("" + cm.getInventory(1).getItem(i).getItemId()) >= 0) {
				avail += "#L" + cm.getInventory(1).getItem(i).getItemId() + "##i" + cm.getInventory(1).getItem(i).getItemId() + ":##l";
			}

			if (i != 0) {
				slot.push(i);
			}

		}
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(2).getItem(i) != null && 物品组.indexOf("" + cm.getInventory(2).getItem(i).getItemId()) >= 0) {
				avail += "#L" + cm.getInventory(2).getItem(i).getItemId() + "##i" + cm.getInventory(2).getItem(i).getItemId() + ":##l";
			}
			if (i != 0) {
				slot.push(i);
			}
		}
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(3).getItem(i) != null && 物品组.indexOf("" + cm.getInventory(3).getItem(i).getItemId()) >= 0) {
				avail += "#L" + cm.getInventory(3).getItem(i).getItemId() + "##i" + cm.getInventory(3).getItem(i).getItemId() + ":##l";
			}
			if (i != 0) {
				slot.push(i);
			}
		}
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(4).getItem(i) != null && 物品组.indexOf("" + cm.getInventory(4).getItem(i).getItemId()) >= 0) {
				avail += "#L" + cm.getInventory(4).getItem(i).getItemId() + "##i" + cm.getInventory(4).getItem(i).getItemId() + ":##l";
			}
			if (i != 0) {
				slot.push(i);
			}
		}
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(5).getItem(i) != null && 物品组.indexOf("" + cm.getInventory(5).getItem(i).getItemId()) >= 0) {
				avail += "#L" + cm.getInventory(5).getItem(i).getItemId() + "##i" + cm.getInventory(5).getItem(i).getItemId() + ":##l";
			}
			if (i != 0) {
				slot.push(i);
			}
		}

		if (avail == "") {
			cm.sendOk("没有需要回收的物品");
			cm.dispose();
			return;
		} else {
			cm.sendOk("请选择你需要回收的物品:\r\n#b" + avail);
		}

	} else if (status == 1) {
		itemss = selection;
		shul = cm.getPlayer().getItemQuantity(itemss, false);

		var txt = "-----------------------------------------\r\n"
			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i][0] == itemss) {

					if (itemList[i][1] == 0) {
						txt += "金币 *  " + (itemList[i][2] * shul) + "\r\n\r\n";
					} else if (itemList[i][1] == 1) {
						txt += "抵用卷 *  " + (itemList[i][2] * shul) + "\r\n\r\n";
					} else if (itemList[i][1] == 2) {
						txt += "点卷 *  " + (itemList[i][2] * shul) + "\r\n\r\n";
					} else {
						txt += "#v" + itemList[i][1] + "#  *  " + (itemList[i][2] * shul) + "\r\n\r\n";
					}
				}
			}

			txt += "-----------------------------------------\r\n"

			cm.sendYesNo("将回收你背包里的 #d#i" + itemss + ":# #t" + itemss + ":# 数量：#e#r" + shul + "#n#b\r\n 并且得到以下回报：\r\n" + txt);
	} else if (status == 2) {
		if (cm.getPlayer().getItemQuantity(itemss, false) == shul) { //删除物品
			////----------------------------------------------------------------------------------
			for (var i = 0; i < itemList.length; i++) {

				//---------------------------------------------------
				if (itemList[i][1] > 3 && itemList[i][0] == itemss) {
					if (!cm.canHold(itemList[i][1], (itemList[i][2] * shul))) {

						cm.sendOk("背包不足够！清理后再来");
						cm.dispose();
						return;
					}
				}
				//---------------------------------------------------------------------------------------------------

				if (itemList[i][0] == itemss) {

					if (itemList[i][1] == 0) {
						cm.gainMeso( + (itemList[i][2] * shul)); //金币
					} else if (itemList[i][1] == 1) {
						cm.getPlayer().modifyCSPoints(2,  + (itemList[i][2] * shul), true);
					} else if (itemList[i][1] == 2) {
						cm.getPlayer().modifyCSPoints(1,  + (itemList[i][2] * shul), true);

					} else {
						///--------------------------------------------------------------------

						cm.gainItem(itemList[i][1], (itemList[i][2] * shul));

					}
				}

				//----------------------------------------------------------------------------------------


			}
		}
		//-------
		cm.removeAll(itemss);
		cm.sendOk("清理完毕！"+"#v"+itemss+"#");
		status = -1;
	}

}
