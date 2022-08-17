var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
status = -1;
var itemList = Array(
Array(2290011, 5, 1, 1), //书
Array(2290021, 5, 1, 1), //书
Array(2290023, 5, 1, 1), //书
Array(2290042, 5, 1, 1), //书
Array(2290049, 5, 1, 1), //书
Array(2290061, 5, 1, 1), //书
Array(2290074, 5, 1, 1), //书
Array(2290084, 5, 1, 1), //书
Array(2290083, 5, 1, 1), //书
Array(2290107, 5, 1, 1), //书
Array(2290118, 5, 1, 1), //书
Array(2290133, 30, 1, 1), //书
Array(1402014, 100, 1, 1), //温度计
Array(1382037, 20, 1, 1), //偃月
Array(1022144, 10, 1, 1), //瞳印
Array(1102041, 200, 1, 1), //浪人披风(粉)
Array(1102042, 50, 1, 1), //浪人披风(紫)
Array(1122017, 10, 1, 1), //精灵吊坠
Array(4031504, 200, 1, 1),//蓝色
Array(4031505, 100, 1, 1),//橙色
Array(2613000, 80, 1, 1), //星火
Array(4001165, 300, 1, 1), //太阳神的赐福
Array(2070006, 400, 1, 1), //齿轮镖
Array(2070013, 100, 1, 1), //黄金镖
Array(2049100, 400, 1, 1), //混沌卷
Array(4002000, 100, 1, 1), //邮票
Array(4002001, 100, 1, 1), //邮票
Array(4002002, 100, 1, 1), //邮票
Array(4002003, 100, 1, 1), //邮票
Array(3010055, 500, 1, 1), //冰雪糕丸子椅
Array(3010059, 500, 1, 1), //甜甜的零食王座
Array(3010069, 300, 1, 1), //大黄蜂
Array(3010070, 100, 1, 1), //巨无霸品克缤
Array(3010071, 300, 1, 1), //神兽椅
Array(3010078, 300, 1, 1), //大熊猫椅子
Array(3010086, 300, 1, 1), //梦境沙发
Array(3010093, 300, 1, 1), //鲜美的火鸡
Array(3010112, 300, 1, 1), //情书柜子
Array(3010118, 300, 1, 1), //糖果音符椅子
Array(3010120, 300, 1, 1), //彩蛋篮子
Array(3010123, 300, 1, 1), //夏日花朵
Array(3010125, 300, 1, 1), //尼贝隆战舰椅
Array(3010142, 300, 1, 1), //水族馆椅子
Array(3010145, 300, 1, 1), //周年庆水晶枫叶椅子
Array(3010169, 300, 1, 1), //纸箱里“求领养”
Array(3010014, 500, 1, 1), //月亮弯
Array(3010018, 500, 1, 1), //椰子树沙滩椅
Array(3010019, 500, 1, 1), //寿司椅
Array(3010021, 500, 1, 1), //暖暖桌
Array(3010025, 500, 1, 1), //枫叶纪念凳
Array(3010026, 500, 1, 1), //恶灵附身的娃娃椅子
Array(3010028, 500, 1, 1), //海盗的俘虏
Array(3010036, 400, 1, 1), //浪漫秋千
Array(3010037, 400, 1, 1), //猪猪凳
Array(3010038, 400, 1, 1), //空气沙发
Array(3010043, 400, 1, 1), //魔女的飞扫把
Array(3010044, 400, 1, 1), //同一红伞下
Array(3010048, 400, 1, 1), //圣诞树椅子
Array(3010053, 400, 1, 1), //兔子纪念版椅子
Array(3010054, 400, 1, 1), //呼噜呼噜床
Array(3010718, 300, 1, 1), //初恋云朵
Array(3010594, 300, 1, 1), //蓝莓蛋糕
Array(3010658, 300, 1, 1), //夏日西瓜
Array(3010286, 300, 1, 1), //诺特勒斯
Array(3010660, 300, 1, 1), //梦幻公主城堡
Array(3010661, 300, 1, 1), //欢乐相框
Array(3010643, 300, 1, 1), //10周年蛋糕
Array(3010608, 300, 1, 1), //完美的名画
Array(1422011, 200, 1, 1), //清酒
Array(1442018, 300, 1, 1), //冻冻鱼
Array(1442046, 200, 1, 1), //超级雪板 
Array(1432046, 200, 1, 1), //圣诞拐杖树  
Array(1432039, 300, 1, 1), //钓鱼竿
Array(1432013, 300, 1, 1), //南瓜枪 
Array(1402044, 400, 1, 1), //南瓜
Array(1372031, 400, 1, 1), //圣贤之丈
Array(1372017, 500, 1, 1), //路灯
Array(1442022, 500, 1, 1), //拖把 
Array(1322006, 500, 1, 1), //钢管
Array(1312012, 500, 1, 1), //呼啦圈 
Array(1322051, 500, 1, 1), //七夕
Array(1302001, 400, 1, 1), //锯子
Array(1302080, 400, 1, 1), //闪光彩灯鞭 
Array(1302065, 400, 1, 1), //蓝色枫叶旗 
Array(1302058, 400, 1, 1), //枫叶伞
Array(1302049, 400, 1, 1), //光线鞭
Array(1302037, 500, 1, 1), //小号
Array(1302036, 500, 1, 1), //枫叶小旗 
Array(1432018, 500, 1, 1), //蓝色滑雪板
Array(1442030, 500, 1, 1), //枫之雪板
Array(1432017, 400, 1, 1), //绿色滑雪板
Array(1432018, 50, 1, 1), //蓝色滑雪板
Array(1432015, 50, 1, 1), //红色滑雪板
Array(2210035, 300, 1, 1), //企鹅变身
Array(2210031, 100, 1, 1), //匹诺曹变身
Array(2210000, 200, 1, 1), //蘑菇雕像
Array(2210001, 300, 1, 1), //飘飘猪雕像
Array(2210002, 400, 1, 1), //外心人
Array(2210008, 100, 1, 1), //幽灵
Array(2210012, 400, 1, 1), //老鼠
Array(2210010, 300, 1, 1), //超人
Array(2210020, 200, 1, 1), //粉兔
Array(2210021, 600, 1, 1), //佳佳
Array(2210024, 100, 1, 1), //宝贝龙
Array(2210037, 200, 1, 1), //企鹅2
Array(2210038, 500, 1, 1), //企鹅3
Array(2210039, 600, 1, 1), //企鹅4
Array(2210044, 500, 1, 1), //雪人
Array(2210045, 100, 1, 1), //格里
Array(2210046, 300, 1, 1), //艾娜
Array(2210091, 100, 1, 1), //石头人
Array(2210095, 600, 1, 1), //外星人雷哥
Array(2210097, 100, 1, 1), //小黑龙
Array(2210098, 200, 1, 1), //蛇
Array(2210100, 200, 1, 1), //红花蛇
Array(4010000, 500, 5, 1), //矿
Array(4010001, 500, 5, 1), //矿
Array(4010002, 500, 5, 1), //矿
Array(4010003, 500, 5, 1), //矿
Array(4010004, 500, 5, 1), //矿
Array(4010005, 500, 5, 1), //矿
Array(4010006, 500, 5, 1), //矿
Array(4020000, 500, 5, 1), //矿
Array(4020001, 500, 5, 1), //矿
Array(4020002, 500, 5, 1), //矿
Array(4020003, 500, 5, 1), //矿
Array(4020004, 500, 5, 1), //矿
Array(4020005, 500, 5, 1), //矿
Array(4020006, 500, 5, 1), //矿
Array(4020007, 500, 5, 1), //矿
Array(4020008, 500, 5, 1), //矿
Array(4004000, 500, 5, 1), //水晶
Array(4004001, 500, 5, 1), //水晶
Array(4004002, 500, 5, 1), //水晶
Array(4004003, 500, 5, 1), //水晶
Array(4004004, 400, 5, 1), //水晶
Array(4011000, 200, 2, 1), //矿
Array(4011001, 200, 2, 1), //矿
Array(4011002, 200, 2, 1), //矿
Array(4011003, 200, 2, 1), //矿
Array(4011004, 200, 2, 1), //矿
Array(4011005, 200, 2, 1), //矿
Array(4011006, 200, 2, 1), //矿
Array(4021000, 200, 2, 1), //矿
Array(4021001, 200, 2, 1), //矿
Array(4021002, 200, 2, 1), //矿
Array(4021003, 200, 2, 1), //矿
Array(4021004, 200, 2, 1), //矿
Array(4021005, 200, 2, 1), //矿
Array(4021006, 200, 2, 1), //矿
Array(4021007, 200, 2, 1), //矿
Array(4021008, 200, 2, 1), //矿
Array(4005000, 200, 2, 1), //水晶
Array(4005001, 200, 2, 1), //水晶1
Array(4005002, 200, 2, 1), //水晶
Array(4005003, 200, 2, 1), //水晶
Array(4005004, 200, 5, 1), //水晶
Array(4250802, 50, 1, 1), //高等力量
Array(4251002, 50, 1, 1), //高等幸运
Array(4250902, 50, 1, 1), //高等智慧
Array(4251102, 50, 1, 1), //高等敏捷
Array(4251402, 50, 1, 1), //高等黑暗
Array(2022530, 30, 1, 1)//双倍爆率




);

function start() {
	if (cm.canHold(1002677,1) == false || cm.canHold(2290017,1) == false || cm.canHold(4001126,1) == false){
	cm.sendOk("请确保背包有充足的空间！");
    cm.dispose();	
	}else{
    action(1, 0, 0);
}}
var say = "";
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("再见得把油。");
            cm.dispose();
        }
        status--;
    }
	if (status == 0) {
		if(cm.getMeso() >= 2000000) {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			say = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶;
			say += "\r\n              #r欢迎来到月月冒险岛金币抽奖#k\r\n";
			say += 红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶;
			say += "\r\n\r\n   #r每次抽奖消耗#v4031138#*200W，当前拥有:#v4031138#*"+cm.getMeso()+"\r\n\r\n";
			say += "\t\t#L1##e#b单次抽奖#l\t";
			say += "\t\t#L2##e#b五连抽奖#l\r\n#n\r\n\r\n";
			say += "                   #b金币抽奖奖池如下\r\n" + str1;
			cm.sendYesNo(say);
		} else {
			var str1 = "\r\n";	
			for (var i = 0; i < itemList.length; i++){
				str1 += "#v"+itemList[i][0]+"#";
			}
			cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n              #r欢迎来到攸攸冒险岛金币抽奖#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n   #r每次抽奖消耗#v4031138#*200W，当前拥有:#v4031138#*"+cm.getMeso()+"\r\n\r\n                   #b金币抽奖奖池如下\r\n" + str1);
			cm.dispose();
		}
	} else if (status == 1){	
		if(selection == 1){
			var chance = Math.floor(Math.random() * 500);
			var finalitem = Array();
			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i][1] >= chance) {
					finalitem.push(itemList[i]);
				}
			}
			if (finalitem.length != 0) {
				var item;
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				var notice = finalitem[finalchance][3];
				item = cm.gainGachaponItem(itemId, quantity, "金币抽奖", notice);
				if (item != -500) {
					cm.gainMeso(-2000000);
					cm.sendOk("你获得了#b#t"+item+"#*"+quantity+"#k，恭喜你！");
				} else {
					cm.sendOk("请你确认背包的装备，消耗，其他栏是否有足够的空间。");
				}
				cm.safeDispose();
			} else {
				cm.sendOk("你什么都抽到，非常遗憾！");
				cm.safeDispose();
			}
		}else if(selection == 2){
			if (cm.getInventory(1).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(2).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(3).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(4).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else if (cm.getInventory(5).isFull(5)){
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有 5 格以上的空间。");
                cm.dispose();
            } else {
				if(cm.getMeso() < 10000000){
					cm.sendOk("你没有"+10000000+"金币!");
					cm.dispose();
					return;
				}
				
				var chance = Math.floor(Math.random() * 500);
				var finalitem = Array();
				for (var i = 0; i < itemList.length; i++) {
					if (itemList[i][1] >= chance) {
						finalitem.push(itemList[i]);
					}
				}
				if (finalitem.length != 0) {
					var item;
					for(var i = 0;i < 5;i++){
						var random = new java.util.Random();
						var finalchance = random.nextInt(finalitem.length);
						var itemId = finalitem[finalchance][0];
						var quantity = finalitem[finalchance][2];
						var notice = finalitem[finalchance][3];
						item = cm.gainGachaponItem(itemId, quantity, "金币抽奖", notice);
					}
					if (item != -500) {
						cm.gainMeso(-10000000);
						cm.sendOk("你获得了#b#t"+item+"#*"+quantity+"#k，恭喜你！");
					} else {
						cm.sendOk("请你确认背包的装备，消耗，其他栏是否有足够的空间。");
					}
					cm.safeDispose();
				} else {
					cm.sendOk("你什么都抽到，非常遗憾！");
					cm.safeDispose();
				}
			}
		}
    }
}
