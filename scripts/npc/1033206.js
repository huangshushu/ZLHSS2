var isopenvip = false;
var icon = "#fEffect/CharacterEff/1082565/0/0#";
//var b = "#fUI/Basic/LevelNo/0#"; //[1]+1
//var c = "#fUI/Basic/LevelNo/1#"; //[1]+1
//var d = "#fUI/Basic/LevelNo/2#"; //[1]+1
//var e = "#fUI/Basic/LevelNo/3#"; //[1]+1
//var f = "#fUI/Basic/LevelNo/4#"; //[1]+1
//var g = "#fUI/Basic/LevelNo/5#"; //[1]+1
//var Icon = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#"; //蓝星星
//var IconA = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
//var IconB = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //红心桃心
//var Icon1 = "#fUI/StarCityUI.img/GradeInfo/icon_ss/2#"
//	var Icon2 = "#fUI/UIPVP.img/MiniMapIcon/yellow#"
//	var q6 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#"
//	var e = "#fUI/UIPVP.img/MiniMapIcon/red#"
//	var e1 = "#fUI/UIPVP.img/MiniMapIcon/blue#"
//	var e2 = "#fUI/UIPVP.img/MiniMapIcon/yellow#"
//	var e3 = "#fUI/UIPVP.img/UserRanking/NumRank/iceKnight#"
//	var s = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//var s1 = "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"; //女神
//var s2 = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#"; //星星
//var s3 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#"; //A图标
//var s4 = "#fUI/UIWindow2/AdditionalOptionTooltip/unique#"; //S图标



var townmaps = Array(
		//地图ID 地图名称 航行时间
		Array(910000000, "#b自由市场#k", 15),
		//Array(910001000, "#b匠人街#k  ", 15),
		//Array(680000000, "#b婚礼村#k  ", 15),
		//Array(931000500, "#b抓豹子#k  ", 15),
		//Array(867115950, "#d藏身处  #k", 15),
		//Array(910800200, "#d三维弹球#k", 15),
		//Array(103041002, "废都塔  ", 30),
		//Array(3000200, "可可岛  ", 30),
		//Array(330000000, "神兽学院", 30),
		Array(800000000, "蘑菇神社", 30),
		//Array(141000000, "列纳海峡", 30),
		Array(500000000, "水上市场", 30),
		Array(221000000, "地球本部", 50),
		//Array(1100000, "彩虹岛  ", 30),
		Array(130000000, "圣地    ", 30),
		Array(140000000, "里恩    ", 30),
		//Array(310000000, "德尔斯坦", 30),
		//Array(807000000, "本能寺  ", 30),
		//Array(410000000, "狐狸村  ", 30),
		//Array(866000000, "大树村  ", 30),
		//Array(400000000, "万神殿  ", 50),
		Array(104000000, "明珠港  ", 30),
		Array(100000000, "射手村  ", 20),
		Array(101000000, "魔法密林", 20),
		Array(102000000, "勇士部落", 20),
		Array(103000000, "废弃都市", 20),
		Array(120000000, "诺特勒斯", 20),
		//Array(105000000, "林中之城", 20),
		//Array(402000500, "阿叙隆  ", 30),
		//Array(402000521, "水晶学院", 30),
		//Array(402000000, "暴徒村  ", 30),
		//Array(867118200, "开拓总部", 50),
		//Array(867115900, "阿特利埃", 30),
		//Array(101050000, "埃欧雷  ", 30),
		//Array(101071300, "妖精学院", 40),
		//Array(120040000, "金海滩  ", 40),
		//Array(106030100, "蘑菇城  ", 40),
		Array(200000000, "天空之城", 60),
		Array(211000000, "冰封雪域", 65),
		//Array(211060000, "狮子王城", 65),
		Array(230000000, "水下世界", 65),
		//Array(224000000, "童话村  ", 65),
		Array(220000000, "玩具城  ", 65),
		Array(220050300, "时间通道", 65),
		//Array(223000000, "梦幻公园", 75),
		Array(300000000, "艾琳森林", 65),
		Array(251000000, "百草堂  ", 65),
		Array(250000000, "武陵镇  ", 65),
		//Array(252000000, "黄金寺院", 65),
		Array(260000000, "阿里安特", 65),
		Array(261000000, "玛加提亚", 65),
		//Array(241000000, "克里蒂亚", 65),
		Array(240000000, "神木村  ", 65),
		//Array(240090000, "勘探本部", 65),
		//Array(401000000, "赫里希安", 80),
		//Array(701100000, "上海豫园", 80),
		//Array(701210000, "嵩山镇  ", 80),
		//Array(701220000, "大雄宝殿", 80),
		Array(600000000, "新叶城  ", 80),
		//Array(610020005, "绯红之地", 80),
		//Array(865010200, "渔村贝里", 80),
		//Array(865000000, "凯梅尔兹", 80),
		Array(270000100, "时间神殿", 90));

		
var monstermaps = Array(
		Array(100040001,"  [8-15级]"),
		Array(104040000,"      [1-15级]"),
		Array(104010001,"[10-20级]"),
		Array(103000101,"[20-30级]"),
		Array(101030101,"[20-30级]"),
		Array(101030001,"[20-35级]"),
		Array(230020000,"[20-35级]"),
		Array(230010400,"[20-35级]"),
		Array(101030001,"[25-40级]"),
		Array(105070001,"[20-40级]"),
		Array(101040003,"[40-45级]"),
		Array(251010000,"[40-70级]"),
		Array(200040000,"[40-50级]"),
		Array(105090300,"[40-50级]"),
		Array(211041400,"[50-60级]"),
		Array(222010000,"[50-60级]"),
		Array(220010500,"[40-70级]"),
		Array(105040306,"[40-70级]"),
		Array(220010500,"[40-70级]"),
		Array(250020000,"[50-60级]"),
		Array(101030110,"[50-70级]"),
		Array(106000002,"[50-70级]"),
		Array(541010000,"[50-70级]"),
		Array(541010010,"[50-70级]"),
		Array(541010040,"[50-70级]"),
		Array(541010050,"[50-70级]"),
		Array(800020130,"[60-90级]"),
		Array(200010302,"[70-90级]"),
		Array(800020400,"[80-100级]"),
		Array(220070301,"[90-110级]"),
		Array(220050300,"[80-100级]"),
		Array(240020100,"[80-100级]"),
		Array(240040500,"[110-130级]"),
		Array(240040000,"[110-130级]"),
		Array(541020100,"[80-120级]"));

var lmaps = Array(
		//Array(682000200, "消遣跳跳"),
		Array(280020001, "扎昆跳跳"),
		Array(280020000, "扎昆跳跳"),
		Array(260000301, "紫色宫殿"),
		Array(260000302, "紫色宫殿"),
		Array(260000303, "安特王室"),
		Array(260000300, "安特宫殿"),
		Array(250010600, "蟠桃果二"),
		Array(250010500, "蟠桃果一"),
		Array(140010110, "达人殿堂"),
		Array(600000000, "市区中心"),
		//Array(677000012, "藏身之地"),
		Array(749050500, "魔幻空间"),
		Array(749050501, "璀璨王国"),
		Array(914021000, "精灵王国"),
		Array(914021000, "樱花村庄"),
		Array(914022000, "驱赶小偷"),
		Array(920010200, "雅典禁地"),
		Array(920030001, "封印庭院"),
		//Array(921150000, "雪火望台"),
		//Array(922240000, "太空漫步"),
		Array(925000000, "白云之地"),
		Array(925020003, "百层高塔"),
		Array(980010010, "王的房间"),
		Array(980000801, "专属年华"),
		Array(931000013, "奇怪实验"),
		Array(960000000, "赤壁站长")
		//Array(950100100, "树叶密林")
	); //旅游地图部分

var tiaotiaomaps = Array(
		Array(867115950, "						[掉落星星]"),
		Array(867116900, "				  [掉落咒语痕迹]"),
		Array(211041500, "				 	  [掉落僵尸金牙]"),
		Array(211030000, "				  [掉落企鹅王的嘴]"));

var bossmaps = Array(
		Array(104000400, "[蜗牛王]"),
		Array(701010320, "[蜈蚣王]"),
		Array(100000005, "[蘑菇王]"),
		Array(105090900, "[蝙蝠怪]"),
		Array(105070002, "[僵尸蘑菇王]"),
		Array(230040420, "[鱼王]"),
		Array(211042300, "[扎昆]"),
		Array(220080000, "[闹钟]"),
		Array(240020401, "[喷火龙]"),
		Array(240020101, "[格瑞芬多]"),
		Array(270050000, "[品克缤]"),
		Array(551030100, "[熊跟狮子]"),
		Array(541020700, "[树精王]"),
		Array(240040700, "[黑龙]"),
		Array(702070400, "[少林妖僧]"));

var a = 0;
var selects = 0;
var MapType;

function start() {
	a = -1;
	action(1, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && a == 0) {
		cm.dispose();
	//	cm.openNpc(9310362, "CSNPC");
	}
	if (mode == 1) {
		a++;
	} else {
		a--;
	}

	randomnumber = Math.ceil(Math.random()*1000);
	var needmeso = Math.ceil(randomnumber + 10000 + 10000 * (cm.getPlayer().getLevel() * 0.1));

	if (a == 0) {
		var txt = "\r\n\r\n";
		txt += "    #d#e「 #r#h ##d 」- 贯穿许多位面请选择地方:#k#n\r\n\r\n";
		txt += "             您传送需要的金币：#r"+ needmeso +"\r\n\r\n";
		txt += "#d#L0#" + icon + "村庄移动#l#k";
		//txt += "#b\t#L4#副本传送#l#k\r\n \r\n";
		txt += "#r\t  #L1#" + icon + "升级地图#l#k";
		//txt += "#r\t#L3#" + Icon + "搬砖入口#l#k\r\n \r\n";
		txt += "#r\t  #L5#" + icon + "BOSS地图#l#k";

		cm.sendSimple(txt);

	} else if (a == 1) {
		var text = "请选择你要移动的地方：\r\n#d"
			switch (selection) {
			case 0: //村庄
				for (var i = 0; i < townmaps.length; i++) {
					text += "#L" + i + "# " + icon + " #m" + townmaps[i][0] + "#\r\n"
				}
				MapType = 0
					needMoney = true;
				break;
			case 1: //升级地图
				for (var i = 0; i < monstermaps.length; i++) {
					text += "#b#L" + i + "# " + icon + " #m" + monstermaps[i][0] + "##r" + monstermaps[i][1] + "#l\r\n"
				}
				MapType = 1
					break;
			case 3: //搬砖
				for (var i = 0; i < tiaotiaomaps.length; i++) {
					text += "#b#L" + i + "# " + icon + " #m" + tiaotiaomaps[i] + "# #r" + tiaotiaomaps[i][1] + "#l\r\n"
				}
				MapType = 3
					needMoney = true;
				break;
			case 4: //副本
				cm.dispose();
				cm.openNpc(9000212, "副本_独家副本");
				return;
				break;
			case 5: //BOSS
				for (var i = 0; i < bossmaps.length; i++) {
					text += "#b#L" + i + "# " + icon + " #m" + bossmaps[i][0] + "##r" + bossmaps[i][1] + "#l\r\n"
				}
				MapType = 5
			}
			cm.sendSimple(text);
	} else if (a == 2) {
		selects = selection;
		cm.sendNext("这里的事情做完了吗？现在去#d选择的地点#k吗？");
	} else if (a == 3) {
		var em = cm.getEventManager("MapTP");
		//var eim = em.getInstance("MapTP");
		var player = cm.getPlayer();
		switch (MapType) {
		case 0: //村庄
			if (cm.getPlayer().getMeso() < needmeso) {
				cm.sendOk("#d你金币不够哦。");
				cm.dispose();
				break;
			}
			/*
			if (!cm.haveItem(5041000, 1)) {
				cm.sendOk("#d你没有高级瞬移石头哦，可以在商场包裹秒秒中买到。");
				cm.dispose();
				break;
			}
			*/
			cm.gainMeso(-needmeso);
			//cm.gainItem(5041000, -1);
			cm.warp(townmaps[selects][0]);
			cm.dispose();
			break;

		case 1: //升级地图
			if (cm.getPlayer().getMeso() < needmeso) {
				cm.sendOk("#d你金币不够哦。");
				cm.dispose();
				break;
			}
			/*
			if (!cm.haveItem(5041000, 1)) {
				cm.sendOk("#d你没有高级瞬移石头哦，可以在商场包裹秒秒中买到。");
				cm.dispose();
				break;
			}
			*/
			cm.gainMeso(-needmeso);
			//cm.gainItem(5041000, -1);
			cm.warp(monstermaps[selects][0]);
			cm.dispose();
			break;

		case 2:
			cm.warp(lmaps[selects][0]);
			break;
		case 3: //搬砖
			cm.warp(tiaotiaomaps[selects][0]);
			break;
		case 4: //抓取豹子
			cm.warp(MapHousework[selects][0]);
			break;
		case 5: //boss地图
			if (cm.getPlayer().getMeso() < needmeso) {
				cm.sendOk("#d你金币不够哦。");
				cm.dispose();
				break;
			}
			if (!cm.haveItem(5041000, 1)) {
				cm.sendOk("#d你没有高级瞬移石头哦，可以在商场包裹秒秒中买到。");
				cm.dispose();
				break;
			}
			cm.gainMeso(-needmeso);
			cm.gainItem(5041000, -1);
			cm.warp(bossmaps[selects][0]);
			cm.dispose();
			break;
			}
	cm.dispose();

	} //mode
} //f
