/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */




var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
                                        Array(100000005,50000,"蘑菇王-0.5h"), 
                                        Array(104000400,50000,"蜗牛王"), 
										Array(106020300,50000,"蘑菇王主题战场"),
                                        Array(800010100,80000,"蓝蘑菇王"), 
                                        Array(105070002,100000,"僵尸蘑菇王"), 
										Array(220050100,100000,"提莫-猫头鹰-时钟"),
										Array(200010300,100000,"艾利杰-黑飞狮"),
										Array(250010304,100000,"肯德熊"),
										Array(250010503,100000,"妖怪禅师"),
										Array(222010310,100000,"九尾狐"),
                                        Array(701010320,150000,"蜈蚣王"), 
										Array(105090900,200000,"被诅咒的寺院 - 小蝙蝠魔"), 
                                        Array(105040400,200000,"巨大蝙蝠怪 - 毕业鞋子出处"), 
										Array(240040401,200000,"大海兽 - 峡谷"), 
										Array(270030500,200000,"神殿三大BOSS - 雷卡"),
										Array(270020500,200000,"神殿三大BOSS - 独角兽"),
										Array(270010500,200000,"神殿三大BOSS - 多多"),
                                        //Array(910300000,0,"达克鲁的训练场 - 暗影杀手"), 
										//Array(551030200,200000,"阴森世界 - 暴力熊心疤狮"),
										//Array(541020700,200000,"克雷塞尔的遗迹I - 树精BOSS"),
										Array(702070400,200000,"藏经阁七层   - 少林妖僧"), 
										Array(240020400,200000,"喷火龙栖息地 - 神木喷火龙-"),
										Array(240020100,200000,"格瑞芬多森林 - 神木天鹰-"),
										Array(230040410,200000,"皮亚奴斯洞穴 - 鱼王-"),
										Array(220080000,200000,"时间塔的本源 - 闹钟"), 
                                        Array(801030000,200000,"黑道boss -     老板-"),
                                        Array(800020130,200000,"大佛的邂逅Boss - 天狗  -4h"), 
                                        Array(300000011,200000," 艾里葛斯  - 一天两次 出强化材料 "), 
                                        Array(800020300,200000,"墓地boss   -  大姐大   一天两次 出成品水晶"),  
										Array(211042300,200000,"扎昆入口   -  扎昆"), 
										//Array(209000001,0,"同步BOSS传送   -爆 暴君 RED卷 勇气之心 "), 
										//Array(280030000,0,"扎昆重返 - 掉线以后再进，不然召唤不了扎昆"), 
										Array(240050400,200000,"生命之穴入口 - 暗黑龙王"),
										Array(211040102,500000,"精灵的休息处 - 女王"),
										Array(270050100,500000,"神的黄昏  - 品克缤  可以挑战了 ")   											
		);

//------------------------------------------------------------------------

var monstermaps = Array(
		Array(104040001,5000,"射手训练场2　　　　　 适合 1 ~ 15 级玩家。加了怪"), 
		Array(104010001,5000,"猪的海岸 　　　　　   适合 10 ~ 20 级玩家。加了怪"),
		Array(103000101,5000,"地铁一号线<第1地区>   适合 20 ~ 30 级玩家。加了怪 "), 
		Array(101040001,5000,"野猪的领土　　　　　  适合 20 ~ 35 级玩家。"), 
		Array(101040003,5000,"钢之黑怪之地　　　　  适合 20 ~ 35 级玩家。"), 
		Array(105070100,5000,"火独眼兽洞穴Ⅰ 　　　 适合 20 ~ 40 级玩家。加了怪"),
        Array(101030001,5000,"野猪的领土Ⅱ　　　　  适合 20 ~ 35 级玩家。加了怪"), 		
		Array(100040103,5000,"猴子森林2　　　　     适合 20 ~ 35 级弓箭。加了怪"), 
		Array(222010000,50000,"乌山入口　　　　　　 适合 20 ~ 50 级玩家。加了怪"), 
		Array(230020000,10000,"东海叉路　　　　　　 适合 30 ~ 40 级玩家。"), 
		Array(200040000,50000,"云彩公园Ⅲ　　　　　 适合 35 ~ 60 级玩家。"),
		Array(230010400,50000,"西海叉路　　　　　　 适合 40 ~ 50 级玩家。"),
        Array(220010500,50000,"露台大厅　　　　　　 适合 40 ~ 70 级玩家。加了怪"), 		
		Array(103000105,5000,"地铁一号线<第4地区>   适合 40 ~ 70 级玩家。加了怪"), 
		Array(101030110,5000,"第1军营　　　　　　   适合 40 ~ 60 级玩家。"), 
		Array(106000002,5000,"危险的峡谷Ⅱ　　　　  适合 40 ~ 60 级玩家。"), 
		Array(101030103,5000,"遗迹发掘地Ⅲ　　　　  适合 40 ~ 60 级玩家。"), 		
		Array(105090300,5000,"龙穴　　　　　　　　  适合 40 ~ 70 级玩家。加了怪"), 
		Array(105040306,10000,"巨人之林 　　　　　  适合 45 ~ 70 级玩家。加了怪"), 
		Array(251010000,50000,"十年药草地　　　　　 适合 45 ~ 70 级玩家。加了怪"), 
		Array(250020000,50000,"初级修炼场　　　　　 适合 50 ~ 70 级玩家。加了怪"),
		Array(800020130,50000,"大佛的邂逅　　　　　 适合 50 ~ 70 级玩家。加了怪"), 
		Array(541010010,50000,"幽灵船２  　　　　　 适合 50 ~ 80 级玩家。加了怪"),
		Array(211041400,50000,"死亡之林Ⅳ　　　　　 适合 55 ~ 70 级玩家。加了怪"), 
		Array(200010301,10000,"黑暗庭院Ⅰ　　　　　 适合 70 ~ 90 级玩家。 加了怪"),
		Array(600020300,100000,"狼蛛洞穴Ⅰ　　　　　适合 70 ~ 120 级玩家。加了怪"),
		Array(240020100,100000,"火焰死亡战场　　　　适合 70 ~ 120 级玩家。加了怪"),
		Array(220070201,100000,"消失的时间　　　　　适合 70 ~ 100 级玩家。加了怪"),
        Array(551030000,100000,"梦幻主题公园3　　 　适合 70 ~ 100 级玩家。加了怪"),
        Array(270000000,150000,"时间神殿　　　　　  适合 70 ~ 100 级玩家。加了怪"),		
		Array(551030100,150000,"阴森世界入口　　　　适合 80 ~ 110 级玩家。加了怪"),
        Array(220060301,150000,"怪异时间-红船　　　 适合 80 ~ 120 级玩家。加了怪"),		
		Array(220070301,150000,"时间停止之间　　　　适合 90 ~ 120 级玩家。加了怪"),
		Array(240030101,150000,"火焰树林　　　　　  适合 120 ~ 150 级玩家。加了怪"),
        Array(921100300,150000,"蝙蝠魔之家　　　　  适合 120 ~ 150 级玩家。加了怪"),
        Array(270010500,150000,"神殿-追忆5　　　　适合 120 ~ 150 级玩家。强化加经验"),		
		Array(240040500,150000,"龙之巢穴入口　　　适合 120 ~ 160 级玩家。强化加经验"), 
		Array(541020000,200000,"乌鲁城入口　　　  适合 130 ~ 170 级玩家。强化加经验"),
		Array(240040510,200000,"死龙巢穴　　　    适合 140 ~ 180 级玩家。强化加经验"),
        Array(270020500,250000,"神殿-后悔5　　　　适合 160 ~ 200 级玩家。强化加经验"),
        Array(270030500,250000,"神殿-追忆5　　　　适合 160 ~ 250 级玩家。强化加经验")		
		); 

//------------------------------------------------------------------------

var townmaps = Array(

		//Array(109010000,0,"冒险岛活动-寻找宝物"), 
		//Array(701000210,0,"挂机地方大擂台"),
		Array(910000000,10000,"自由市场")
		
		//Array(130000200,10000,"圣地岔路"),
	//	Array(741000208,0,"钓鱼场"),
	//	Array(925020000,0,"武陵道场入口"),
		//Array(930000000,0,"毒雾森林")
		//Array(930000010,0,"森林入口")	
	//	Array(702090400,0,"英语村"),  
	//	Array(700000000,0,"红鸾宫"), 
	//	Array(749020000,0,"国庆蛋糕地图")
		);

//------------------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,5000,"家族PK地图"),
		Array(193000000,5000,"网吧地图")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "#e#k.快捷传送服务.#k\r\n\r\n";

//		add += "#r　　　　　　　　　新物品展览#k\r\n";

//		add += "#b座椅#k\r\n";

//		add += "#v3010154# #v3010179# #v3010169# #v3010171# #v3010174# #v3010182# #v3010183# #v3010053##b\r\n\r\n";

//		add += "#b坐骑#k\r\n";

//		add += "#v1902060# #v1912053# #v1902062# #v1912055# #v1902063# #v1912056# #v1902040# #v1912057#\r\n\r\n";

		add += "#L0##e#d城镇地图传送#l ";

		//add += "#L1#练级地图传送#l ";		
				
		//add += "#L2#BOSS传送#l\r ";

		//add += "#L3##r挑战树精#l ";
		
		//add += "#L6##r挑战暴力熊#l\r ";
 
		//add += "#L5##r 10.4号 遇见蛋糕 活动传送#l\r ";
		
		//add += "#L4##r搬砖,刷矿,刷强化水晶 地图#l\r ";
		
		//add += "#L7##r 10.6号 遇见跳跳 活动传送#l\r ";
		
		
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "#r冒险岛#k\r\n#d　　　　　　　　　选择你的目的地吧.#k#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "#r冒险岛#k\r\n#d　　　　　　　　　选择你的目的地吧.#k#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "#r冒险岛#k\r\n#d　　　　　　　　　选择你的目的地吧.#k#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		if (cm.getLevel() < 120) {
		cm.sendOk ("等级不足 120 级，无法挑战。"); 
		cm.dispose();
		} else if (cm.getBossLog("挑战树精") > 2) {
			cm.sendOk ("只能传送 2 次。"); 
		cm.dispose();
			} else if (cm.getPlayerCount(541020800) > 0 || cm.getPlayerCount(541020800) > 0) {
        cm.sendNext("当前副本有人正在挑战，稍后再试");
        cm.dispose();
		} else {
			cm.setBossLog("挑战树精")
			cm.warp(541020800);
			cm.刷新地图();
			//cm.warp(240060200);
			cm.dispose()

                   }}
				   
		if (selection == 4) {
			cm.dispose();
			cm.openNpc(9120009);;
		}
		if (selection == 5) {
            cm.warp(749020900);;
		}
		if (selection == 7) {
            cm.warp(101000100);;
		}
		if (selection == 6) {
			if (cm.getLevel() < 120) {
		cm.sendOk ("等级不足 120 级，无法挑战。"); 
		cm.dispose();
		} else if (cm.getBossLog("挑战暴力熊") > 1) {
			cm.sendOk ("只能传送 1 次。"); 
		cm.dispose();
			} else if (cm.getPlayerCount(551030200) > 0 && cm.getBossLog('挑战暴力熊') < 2|| cm.getPlayerCount(551030200) > 0) {
        cm.sendNext("当前副本有人正在挑战，稍后再试");
        cm.dispose();
		} else {
			cm.setBossLog("挑战暴力熊")
			cm.warp(551030200);
			cm.刷新地图();
			cm.dispose()
	
                   }}


//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("你确定要去 " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

