status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
/***************************************/
var cost = 30; //每次消耗的HyPay额度
var itemList = Array(
	// Array(物品ID, 概率, 1, 3),
		Array(1102476, 100, 1, 3), //小暴君战士系列
		Array(1072737, 100, 1, 3), //小暴君战士系列 - (无描述)
		Array(1132169, 100, 1, 3), //小暴君战士系列 - (无描述)
		Array(1102477, 100, 1, 3), //小暴君法师系列ID - (无描述)
		Array(1072738, 100, 1, 3), //小暴君法师系列ID - (无描述)
		Array(1132170, 100, 1, 3), //小暴君法师系列ID - (无描述)
		Array(1102478, 100, 1, 3), //小暴君弓手系列ID - (无描述)
		Array(1072739, 100, 1, 3), //小暴君弓手系列ID - (无描述)
		Array(1132171, 100, 1, 3), //小暴君弓手系列ID - (无描述)
		Array(1102479, 100, 1, 3), //小暴君飞侠系列ID - (无描述)
		Array(1072740, 100, 1, 3), //小暴君飞侠系列ID - (无描述)
		Array(1132172, 100, 1, 3), //小暴君飞侠系列ID - (无描述)
		Array(1102480, 100, 1, 3), //小暴君海盗系列ID - (无描述)
		Array(1072741, 100, 1, 3), //小暴君海盗系列ID - (无描述)
		Array(1132173, 100, 1, 3), //小暴君海盗系列ID - (无描述
		//Array(2435986, 100, 1, 3), //火焰鸟骑宠兑换券ID - (无描述)
		
		Array(1352928, 45, 1, 3),	//银河副手系列ID
		Array(1352957, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1353105, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352256, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352296, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352967, 45, 1, 3),// 银河副手系列ID
		Array(1353006, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352246, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352286, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1353405, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352266, 45, 1, 3),// 银河副手系列ID
		Array(1352236, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352009, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1092049, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1099012, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352824, 45, 1, 3),// 银河副手系列ID
		Array(1352707, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352916, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352945, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352975, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352807, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352276, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352606, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352906, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352935, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352226, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352206, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352506, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352815, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1342095, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352216, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352109, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1099011, 45, 1, 3), // 银河副手系列ID // (无描述)
		Array(1352406, 45, 1, 3), // 银河副手系列ID // (无描述)

		
		Array(3016208, 50, 1, 3), // 椅子 // (无描述)
		Array(3015002, 50, 1, 3), // 椅子 // (无描述)
		Array(3018137, 50, 1, 3), // 椅子 // (无描述)
		Array(3015754, 50, 1, 3), // 椅子 // (无描述)
		Array(3015482, 50, 1, 3), // 椅子 // (无描述)
		Array(3018052, 50, 1, 3), // 椅子 // (无描述)
		Array(3015873, 50, 1, 3), // 椅子 // (无描述)
		Array(3010416, 50, 1, 3), // 椅子 // (无描述)
		Array(3018195, 50, 1, 3), // 椅子 // (无描述)
		Array(3016000, 50, 1, 3), // 椅子 // (无描述)
		Array(3015725, 50, 1, 3), // 椅子 // (无描述)
		Array(3018227, 50, 1, 3), // 椅子 // (无描述)
		Array(2430302, 50, 1, 3), // 筋斗云
		Array(2630451, 50, 1, 3), // 白帝鸟
		Array(2439915, 50, 1, 3), // 五彩泡泡
		Array(3018363, 50, 1, 3), // 星源号起航椅子
		Array(3018386, 50, 1, 3), // 黄金银河椅子
		Array(3018349, 50, 1, 3), // 轮滑椅子顶级
		Array(3018099, 50, 1, 3), // 黄金树椅子
		Array(3018265, 50, 1, 3),// 秋千
		Array(2614076, 15, 1, 3), // 5亿突破石头 // (无描述)
		Array(2614075, 15, 1, 3), // 5亿突破石头 // (无描述)
		Array(1162035, 15, 1, 3), // 校长织田徽章 // (无描述)
		Array(1182017, 15, 1, 3), // 黄金秀彼得曼 // (无描述)
		Array(2048717, 70, 1, 3),// 永远的涅槃 // (无描述)
		Array(2614074, 50, 1, 3),// 1亿突破石
		Array(2614079, 70, 1, 3), // 1000W突破石 // (无描述)
		Array(2614078, 70, 1, 3), // 500W突破石 // (无描述)
		Array(2614025, 70, 1, 3) // 100W突破石 // (无描述)
	);

var itemList2 = Array(
		Array(2433849, 10, 1, 3), // 神秘武器自选包 // (无描述)
		Array(2430470, 10, 1, 3), // 神秘防具自选包 // (无描述)
		//Array(4033334, 5, 1, 3), // 神秘觉醒材料 // (无描述)
		Array(1672069, 10, 1, 3), // 女武神心脏 // (无描述)
		Array(2437534, 15, 1, 3), // 埃苏自选包 // (无描述)
		Array(2432069, 15, 1, 3), // 暴君自选包 // (无描述)
		Array(2434340, 15, 1, 3), // 埃苏武器自选包 // (无描述)
		//Array(2433922, 10, 1, 3), // 贝勒德觉醒材料 // (无描述)
		//Array(2432022, 10, 1, 3), // 拍卖卷 // (无描述)
		Array(3018112, 50, 1, 3), // 椅子 // (无描述)
		Array(2049389, 25, 1, 3), // 20星强化卷 // (无描述)
		Array(1113220, 30, 1, 3), // 幽暗戒子 // (无描述)
		Array(1012174, 30, 1, 3), // 恐怖鬼娃的伤口 // (无描述)
		Array(1113075, 30, 1, 3), // 最高级贝勒德 // (无描述)
		Array(1032223, 30, 1, 3), // 最高级贝勒德 // (无描述)
		Array(1132246, 30, 1, 3), // 最高级贝勒德 // (无描述)
		Array(1122267, 30, 1, 3), // 最高级贝勒德 // (无描述)
		Array(2430746, 30, 1, 3), // 究极黑暗自选
		Array(5010044, 30, 1, 3), // 幻影残像
		Array(2614077, 30, 1, 3), // 5亿突破石头 // (无描述)
		Array(2432206, 30, 1, 3), // X卷自选包 // (无描述)
		Array(2435824, 30, 1, 3), // V卷随机选包 // (无描述)
		Array(2435824, 30, 1, 3), // V卷自选包
		Array(2436626, 30, 1, 3), // FFN武器自选包 // (无描述)
		Array(2434007, 30, 1, 3) // FFN防具自选包  // (无描述)
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
		var txt = Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
		txt += "#d想一夜暴富吗？想单车变摩托吗？我这里有极度稀有的道具\r\n";
		txt += "#r神秘自选 埃苏自选 暴君自选 FFN自选 20星强化卷#d 等稀有道具!!!\r\n\r\n#k";
		txt += "#d[ #r#h ##d ] 玩家蘑菇币：#r" + cm.getItemQuantity(4031997) + "#d\t\t本日抽奖次数：#r" + cm.getPQLog("高级抽奖券抽奖") + "#b\r\n#k";
		//txt += "#b[ 元宝抽奖首次10元宝,依次叠加至50元宝为峰值! ]\r\n#k"
		txt += "#b#L888##r☆蘑菇币抽奖☆[#r"+cost+"个]/次#l#k\r\n\r\n\r\n";
		txt += "#r☆奖品图鉴如下☆#l#k\r\n\r\n";
		txt += Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
		txt += "#i2433849##i2430746##i2430470##i2435824##i2437534##i2434007##i2432069##i2434340##i1672069##i2430885##i2435824##i5010044##i2432206##i2049389##i1113220##i1012174##i1113075##i1032223##i1132246##i1122267##i1352824##i1352807##i1352276##i1342095##i3018363##i1352266##i1242061##i1352967##i1352928##i1352707##i1352226##i1352216##i1352236##i1353006##i1352957##i1352916##i1352606##i1352206##i1352109##i1352009##i1352246##i1353105##i1352945##i1352906##i1352506##i1099011##i1092049##i1352286##i1352256##i1352975##i1352935##i1352815##i1352406##i1099012##i1353405##i1352296##i1102476##i1072737##i1132169##i1102477##i1072738##i1132170##i1102478##i1072739##i1132171##i1102479##i1072740##i1132172##i1102480##i1072741##i1132173##i1162035##i1182017##i2048717##i2614025##i2614079##i2614074#";
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
			if (!cm.haveItem(4031997, 10)) {
				cm.sendOk("你好像没有#4031997# X 5物品道具!");
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
