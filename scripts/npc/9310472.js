status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
/***************************************/
var cost = 30; //每次消耗的HyPay额度
var itemList = Array(
	// Array(物品ID, 概率, 1, 3),
		Array(1352928, 45, 1, 3),	//银河副手系列ID
		Array(1352957, 45, 1, 3), // 银河副手系列ID // 
		Array(1353105, 45, 1, 3), // 银河副手系列ID // 
		Array(1352256, 45, 1, 3), // 银河副手系列ID // 
		Array(1352296, 45, 1, 3), // 银河副手系列ID // 
		Array(1352967, 45, 1, 3),// 银河副手系列ID
		Array(1353006, 45, 1, 3), // 银河副手系列ID // 
		Array(1352246, 45, 1, 3), // 银河副手系列ID // 
		Array(1352286, 45, 1, 3), // 银河副手系列ID // 
		Array(1353405, 45, 1, 3), // 银河副手系列ID // 
		Array(1352266, 45, 1, 3),// 银河副手系列ID
		Array(1352236, 45, 1, 3), // 银河副手系列ID // 
		Array(1352009, 45, 1, 3), // 银河副手系列ID // 
		Array(1092049, 45, 1, 3), // 银河副手系列ID // 
		Array(1099012, 45, 1, 3), // 银河副手系列ID // 
		Array(1352824, 45, 1, 3),// 银河副手系列ID
		Array(1352707, 45, 1, 3), // 银河副手系列ID // 
		Array(1352916, 45, 1, 3), // 银河副手系列ID // 
		Array(1352945, 45, 1, 3), // 银河副手系列ID // 
		Array(1352975, 45, 1, 3), // 银河副手系列ID // 
		Array(1352807, 45, 1, 3), // 银河副手系列ID // 
		Array(1352276, 45, 1, 3), // 银河副手系列ID // 
		Array(1352606, 45, 1, 3), // 银河副手系列ID // 
		Array(1352906, 45, 1, 3), // 银河副手系列ID // 
		Array(1352935, 45, 1, 3), // 银河副手系列ID // 
		Array(1352226, 45, 1, 3), // 银河副手系列ID // 
		Array(1352206, 45, 1, 3), // 银河副手系列ID // 
		Array(1352506, 45, 1, 3), // 银河副手系列ID // 
		Array(1352815, 45, 1, 3), // 银河副手系列ID // 
		Array(1342095, 45, 1, 3), // 银河副手系列ID // 
		Array(1352216, 45, 1, 3), // 银河副手系列ID // 
		Array(1352109, 45, 1, 3), // 银河副手系列ID // 
		Array(1099011, 45, 1, 3), // 银河副手系列ID // 
		Array(1352406, 45, 1, 3), // 银河副手系列ID // 
		Array(3015002, 50, 1, 3), // 椅子 // 
		Array(3018137, 50, 1, 3), // 椅子 // 
		Array(3015754, 50, 1, 3), // 椅子 // 
		Array(3015482, 50, 1, 3), // 椅子 // 
		Array(3018052, 50, 1, 3), // 椅子 // 
		Array(3015873, 50, 1, 3), // 椅子 // 
		Array(3010416, 50, 1, 3), // 椅子 // 
		Array(3018195, 50, 1, 3), // 椅子 // 
		Array(3016000, 50, 1, 3), // 椅子 // 
		Array(3015725, 50, 1, 3), // 椅子 // 
		Array(3018227, 50, 1, 3), // 椅子 // 
		Array(2430302, 50, 1, 3), // 筋斗云
		Array(2439915, 50, 1, 3), // 五彩泡泡
		Array(3018363, 50, 1, 3), // 星源号起航椅子
		Array(3018386, 50, 1, 3), // 黄金银河椅子
		Array(3018349, 50, 1, 3), // 轮滑椅子顶级
		Array(3018099, 50, 1, 3), // 黄金树椅子
		Array(3018265, 50, 1, 3),// 秋千
		Array(2614076, 15, 1, 3), // 5亿突破石头 // 
		Array(2614075, 15, 1, 3), // 5亿突破石头 // 
		Array(1162035, 5, 1, 3), // 校长织田徽章 // 
		Array(1182017, 15, 1, 3), // 黄金秀彼得曼 // 
		Array(2048717, 70, 1, 3),// 永远的涅槃 // 
		Array(2614074, 50, 1, 3),// 1亿突破石
		Array(2614079, 70, 1, 3), // 1000W突破石 // 
		Array(2614078, 70, 1, 3), // 500W突破石 // 
		Array(2614025, 70, 1, 3) // 100W突破石 // 
	);

var itemList2 = Array(
		Array(2433849, 10, 1, 3), // 神秘武器自选包 // 
		Array(2430470, 10, 1, 3), // 神秘防具自选包 // 
		Array(1672069, 5, 1, 3), // 女武神心脏 // 
		Array(2437534, 15, 1, 3), // 埃苏自选包 // 
		Array(2432069, 15, 1, 3), // 暴君自选包 // 
		Array(2434340, 15, 1, 3), // 埃苏武器自选包 // 
		Array(2439331, 10, 1, 3), // 天鹅（永久） // 
		Array(2439913, 10, 1, 3), // 灵狐（永久） // 
		Array(2439329, 10, 1, 3), // 麋鹿（永久） // 
		Array(2439675, 15, 1, 3), // 日蚀鸟（永久） // 
		Array(2631146, 15, 1, 3), // 魅影良驹（永久） // 
		Array(2630768, 15, 1, 3), // 伟大的金龙（永久） // 
		Array(2630399, 15, 1, 3), // 青焰格里芬（永久） // 
		Array(2439036, 15, 1, 3), // 火焰独角兽（永久） // 
		Array(2630765, 5, 1, 3), // 飞天马骑宠交换券（永久）
		Array(2438715, 5, 1, 3), // 水晶凤凰（永久）
		Array(3018112, 5, 1, 3), // 时间掌控者 // 
		Array(3700620, 20, 1, 3), // 盟誓之火 // 
		Array(3700619, 20, 1, 3), // 骑士盟誓 // 
		Array(3700617, 20, 1, 3), // 正式骑士的老师 // 
		Array(3700599, 5, 1, 3), // 五彩斑斓的冒险岛 // 
		Array(3700582, 5, 1, 3), // 我真是超神 // 
		Array(3700550, 20, 1, 3), // 光耀之蚀 // 
		Array(3700581, 20, 1, 3), // 品克缤世界冠军 // 
		Array(3700548, 5, 1, 3), // 速度不要太快 // 
		Array(2439265, 5, 1, 3), // 迷雾伤害皮肤（单元） // 
		Array(2439394, 5, 1, 3), // 迷宫火焰伤害皮肤（单元） // 
		Array(2439572, 5, 1, 3), // Star Planet伤害皮肤（单元） // 
		Array(2630754, 5, 1, 3), // 荣耀特攻队伤害皮肤（单元） // 
		Array(3700525, 20, 1, 3), // 挑战世界赛季I SS级 // 
		Array(2049389, 5, 1, 3), // 20星强化卷 // 
		Array(1113220, 30, 1, 3), // 幽暗戒子 // 
		Array(1012174, 30, 1, 3), // 恐怖鬼娃的伤口 // 
		Array(1113075, 30, 1, 3), // 最高级贝勒德 // 
		Array(1032223, 30, 1, 3), // 最高级贝勒德 // 
		Array(1132246, 30, 1, 3), // 最高级贝勒德 // 
		Array(1122267, 30, 1, 3), // 最高级贝勒德 // 
		Array(2430746, 30, 1, 3), // 究极黑暗自选
		Array(5010044, 30, 1, 3), // 幻影残像
		Array(2614077, 30, 1, 3), // 5亿突破石头 // 
		Array(2432206, 30, 1, 3), // X卷自选包 // 
		Array(2435824, 30, 1, 3), // V卷随机选包 // 
		Array(2435824, 30, 1, 3), // V卷自选包
		Array(2436626, 30, 1, 3), // FFN武器自选包 // 
		Array(2434007, 30, 1, 3) // FFN防具自选包  // 
		
	);
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("不想使用吗？…我的肚子里有各类#b稀有道具#k哦！");
			cm.dispose();
		}
		status--;

	}
	if (status == 0) {
		if(cm.getPQLog("高级抽奖券抽奖") < 5){
			cost = 30;
		}else{
			cost = 30;
		}
		var txt = "	#d搏一搏单车变摩托，赌一赌摩托变路虎(☆ω☆)\r\n";
		txt += Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
		txt += "#d[ #r#h ##d ] 玩家蘑菇币：#r" + cm.getItemQuantity(4031997) + "#d\t\t本日抽奖次数：#r" + cm.getPQLog("高级抽奖券抽奖") + "#b\r\n#k";
		//txt += "#b[ 元宝抽奖首次10元宝,依次叠加至50元宝为峰值! ]\r\n#k"
		txt += "			#b#L888##r☆蘑菇币抽奖☆[#r"+cost+"个]/次#l#k\r\n\r\n\r\n";
		txt += "				  #r☆奖品图鉴如下☆#l#k\r\n\r\n";
		txt += Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
		txt += "#i2439331##i2439913##i2439329##i2438715##i2439036##i2631146##i2630768##i2630399##i2439675##i2630765#\r\n";
		txt += "#i1302343#   #i1004808#  #i1053063#   #i1073158#  #i1082695#  #i1102940#   #i1152196#\r\n";
		txt += "#i1302333#   #i1004422#   #i1052882#   #i1073030#  #i1082636#   #i1102775#  #i1152174#\r\n";
		txt += "#i1302275# #i1003797#  #i1042254#  #i1062165#  #i1132174#  #i1102481#  #i1072743# #i1082543#\r\n";
		txt += "#i1302355# #i2049389# #i2613066# #i2613064# #i1032223##i1122267##i1132246# #i1113075#\r\n";
		txt += "#i2631452##i2631095##i2630970##i2630754##i2439572##i2439395##i2439337##i2631472##i2631150##i2631135#\r\n";
		txt += "#i3700620##i3700619# #i3700617##i3700599# #i3700582# #i3700581##i3700550# #i3700548##i3700525#\r\n";
		cm.sendSimple(txt);
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.getHyPay(1) < cost) {
				cm.sendOk("你好像没有" + cost + "点元宝");
				cm.dispose();
				return;
			}
			var chance = Math.floor(Math.random() * 100);
			var finalitem = Array();
			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i][1] >= chance) {
					finalitem.push(itemList[i]);
				}
			}
			for (var i = 0; i < itemList2.length; i++) {
				if (itemList2[i][1] >= chance) {
					finalitem.push(itemList2[i]);
				}
			}
			if (finalitem.length != 0) {
				var item;
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				var notice = finalitem[finalchance][3];
				item = cm.gainGachaponItem(itemId, quantity, "[一夜暴富]终极抽奖", notice);
				if (item != -1) {
					cm.addHyPay(cost);
					cm.setPQLog("高级抽奖券抽奖");
					cm.sendOk("你获得了 #b#z" + item + "##k " + quantity + "个。");
				} else {
					cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
				}
				cm.safeDispose();
			} else {
				cm.sendOk("今天的运气可真差，什么都没有拿到");
				cm.setPQLog("高级抽奖券抽奖");
				cm.safeDispose();
			}
		}else if(selection == 888){
			if (!cm.haveItem(4031997, 30)) {
				cm.sendOk("你的#i4031997#不够了哦，请检查背包！");
				cm.dispose();
				return;
			}
			var chance = Math.floor(Math.random() * 100);
			var finalitem = Array();
			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i][1] >= chance) {
					finalitem.push(itemList[i]);
				}
			}
			for (var i = 0; i < itemList2.length; i++) {
				if (itemList2[i][1] >= chance) {
					finalitem.push(itemList2[i]);
				}
			}
			if (finalitem.length != 0) {
				var item;
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				var notice = finalitem[finalchance][3];
				item = cm.gainGachaponItem(itemId, quantity, "[一夜暴富]终极抽奖", notice);
				if (item != -1) {
					cm.gainItem(4031997, -30);
					cm.setPQLog("高级抽奖券抽奖");
					cm.sendOk("你获得了 #b#z" + item + "##k " + quantity + "个。");
				} else {
					cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
				}
				cm.safeDispose();
			} else {
				cm.sendOk("今天的运气可真差，什么都没有拿到");
				cm.safeDispose();
			}
		}
	}
}
