/*
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";

var 抽奖系列 = "坐骑";
status = -1;
var itemList = Array(


Array(1002677, 300, 1, 1), //玩具匠人帽

Array(1002699, 300, 1, 1), //南瓜帽子

//------披风------
Array(1102040, 500, 1, 1), //浪人披风(黄)

Array(1102041, 50, 1, 1), //浪人披风(粉)

Array(1102042, 50, 1, 1), //浪人披风(紫)

Array(1102043, 500, 1, 1), //浪人披风(褐)

Array(1102140, 400, 1, 1), //卡帕莱特披风

Array(1102147, 420, 1, 1), //玩具匠人披风

Array(1102172, 400, 1, 1), //永恒不灭披风

Array(1102174, 400, 1, 1), //工作人员披风

Array(3010129,250,1,1), //酋长宝座
			Array(3010512,250,1,1), //半半
			Array(3010589,250,1,1), //充电
			Array(3010600,250,1,1), //福星
			Array(3010601,250,1,1), //竹篮
			Array(3010069,250,1,1), //大黄蜂
			Array(3010147,250,1,1), //龙蛋椅子
			Array(3010149,250,1,1), //风扇
			Array(3010169,250,1,1), //求领
			Array(3010110,250,1,1), //白熊
			Array(3010139,250,1,1), //私密空间
			Array(3010149,250,1,1), //风扇
			Array(3010151,250,1,1), //三角张峰
			Array(3010169,250,1,1), //求领养
			Array(3010172,250,1,1), //星空椅子
			Array(3010175,250,1,1), //名画家椅子
			Array(3010193,250,1,1), //炼金瓶
			Array(3010195,250,1,1), //泡泡浴缸
			Array(3010289,250,1,1), //老奶奶读通话
			Array(3010293,250,1,1), //恶灵椅子
			Array(3010403,250,1,1), //音乐会
			Array(3010410,250,1,1), //珍妮
			Array(1402047,100, 1, 1),//重生玄冥剑
			Array(1432049,100, 1, 1), //重生显圣枪
			Array(1442067,100, 1, 1), //重生神光戟
			Array(1452059,100, 1, 1), //重生惊电弓
			Array(1462051,100, 1, 1), //重生冥雷弩
			Array(1472071,100, 1, 1), //重生大悲赋
			Array(1482024,100, 1, 1), //重生孔雀翎
			Array(1492025,100, 1, 1), //重生凤凰铳
			Array(1302086,100, 1, 1), //重生破甲剑
			Array(1332075,100, 1, 1), //重生狂鲨锯
			Array(1332076,100, 1, 1), //重生断首刃
			Array(1382059,100, 1, 1),//重生蝶翼杖
			Array(3015304,10,1,1), //红伞椅子
			Array(3015406,10,1,1), //红伞椅子
			Array(3015407,10,1,1), //红伞椅子
			Array(3010070,10,1,1), //红伞椅子
			Array(3015051,10,1,1), //红伞椅子
			Array(3010416,10,1,1), //红伞椅子
			Array(3010044,150,1,1), //红伞椅子
			Array(3010036,150,1,1), //秋千


	Array(1012170, 150, 1, 1),//恐怖娃娃

	Array(1012171, 100, 1, 1),//恐怖娃娃

	Array(1012172, 100, 1, 1),//恐怖娃娃

	Array(1012173, 50, 1, 1),//恐怖娃娃

	Array(1012174, 20, 1, 1),//恐怖娃娃

	Array(1302063, 10 , 1, 1), //神器

	Array(1092048, 10, 1, 1), //神器


	Array(1050100, 100, 1, 1), //兵法男
	Array(1051098, 100, 1, 1), //兵法女
	Array(4001226, 100, 1, 1), //勇气之心
	Array(4001227, 100, 1, 1), //智慧之心
	Array(4001228, 100, 1, 1), //精准之心
	Array(4001229, 100, 1, 1), //敏捷之心
	Array(4001230, 100, 1, 1), //自由之心

	Array(4000463, 20, 1, 1), //国庆币
	Array(4251202, 50, 1, 1), //高等五彩水晶
	Array(1332242, 30, 1, 1),// 红色切割者
	Array(1382226, 30, 1, 1),// 红色长杖
	Array(1402214, 30, 1, 1),// 红色双手剑

	Array(1422156, 30, 1, 1),// 红色巨锤
	Array(1432182, 30, 1, 1),// 红色之矛
	Array(1452220, 30, 1, 1),// 红色弓
	Array(1462208, 30, 1, 1),// 红色之弩
	Array(1472230, 30, 1, 1),// 红色拳甲（飞侠）
	Array(1482183, 30, 1, 1),// 红色拳甲（海盗）
	Array(1492194, 30, 1, 1),// 红色短枪
	Array(1132211, 100, 1, 1),//冒险岛强韧意志黄色腰带
	Array(1132212, 100, 1, 1),//冒险岛强韧意志绿色腰带
	Array(1132213, 100, 1, 1),//冒险岛强韧意志蓝色腰带

	Array(1132214, 50, 1, 1),//冒险岛强韧意志红色腰带
	Array(1132215, 20, 1, 1),//冒险岛强韧意志黑色腰带

	Array(1132246, 10, 1, 1),//最高级贝勒德刻印腰带
	Array(1003797, 50, 1, 1),//高贵战士头盔
	Array(1003799, 50, 1, 1),//高贵游侠贝雷帽
	Array(1003801, 50, 1, 1),//高贵流浪者帽
	Array(1003798, 50, 1, 1),//高贵流丹维奇帽

	Array(1003800, 50, 1, 1),//高贵刺客软帽
	Array(1003621, 1 , 1, 1),//混沌品克缤帽
	Array(1042254, 50, 1, 1),//鹰眼战士盔甲

	Array(1042255, 50, 1, 1),//鹰眼丹维奇长袍
	Array(1042256, 50, 1, 1),//鹰眼游侠斗篷
	Array(1042257, 50, 1, 1),//鹰眼刺客衬衣
	Array(1042258, 50, 1, 1),//鹰眼流浪者外衣
	Array(1062165, 50, 1, 1),//魔术师战士短裤

	Array(1062166, 50, 1, 1),//魔术师丹维奇短裤
	Array(1062167, 50, 1, 1),//魔术师游侠短裤
	Array(1062168, 50, 1, 1),//魔术师刺客短裤
	Array(1062169, 50, 1, 1),//魔术师流浪者短裤

	Array(1082543, 20, 1, 1),//暴君西亚戴斯手套
	Array(1082544, 20, 1, 1),//暴君赫尔梅斯手套
	Array(1082545, 20, 1, 1),//暴君凯伦手套

	Array(1082546, 20, 1, 1),//暴君利卡昂手套
	Array(1082547, 20, 1, 1),//暴君阿尔泰手套
	Array(1132174, 20, 1, 1),//暴君西亚戴斯腰带
	Array(1132175, 20, 1, 1),//暴君西亚戴斯腰带

	Array(1132176, 20, 1, 1),//暴君西亚戴斯腰带
	Array(1132177, 20, 1, 1),//暴君西亚戴斯腰带
	Array(1132178, 20, 1, 1),//暴君西亚戴斯腰带
	Array(1102476, 20, 1, 1),//诺巴西亚戴斯披风

	Array(1102477, 20, 1, 1),//诺巴西亚戴斯披风
	Array(1102478, 20, 1, 1),//诺巴西亚戴斯披风
	Array(1102479, 20, 1, 1),//诺巴西亚戴斯披风
	Array(1102480, 20, 1, 1),//诺巴西亚戴斯披风
	Array(1022261, 10, 1, 1),//混沌品克缤瞳印


	Array(1032206, 100, 1, 1),//神话耳环复原第I阶段
	Array(1032207, 50, 1, 1),//神话耳环复原第II阶段
	Array(1032208, 10, 1, 1),//神话耳环复原第III阶段
	Array(1032209, 5, 1, 1),//神话耳环复原第IV阶段
	Array(1032219, 1, 1, 1),//遗忘之神话耳环
	Array(1122267, 10, 1, 1),//最高级贝勒德刻印吊坠
	Array(1122236, 30, 1, 1),//觉醒的心之项链
	Array(1122237, 30, 1, 1),//觉醒的心之项链
	Array(1122238, 30, 1, 1),//觉醒的心之项链

	Array(1122239, 30, 1, 1),//觉醒的心之项链
	Array(1122240, 30, 1, 1),//觉醒的心之项链
	
	Array(1112951, 10, 1, 1),//麦格纳斯的愤怒

	Array(1112952, 10, 1, 1),//希拉的愤怒
	Array(1112915, 10, 1, 1),//蓝调戒指

	Array(1112444, 10, 1, 1),//6周年黄金枫叶戒指
	Array(1112763, 50, 1, 1),//S力量宝石戒指
	Array(1112775, 50, 1, 1),//S敏捷宝石戒指
	Array(1112771, 50, 1, 1),//S智慧宝石戒指
	Array(1112767, 50, 1, 1),//S运气宝石戒指
	Array(1112794, 100, 1, 1),//终极戒指
	
	Array(1113077, 100, 1, 1),//绝对之戒
	Array(1113020, 100, 1, 1),//战神祝福戒指
	Array(2460005, 10, 1, 1),//鉴定放大镜（最高级）
	Array(2614000, 10, 1, 1),//突破一万之石
	Array(4000464, 10, 1, 1),//中国心

	Array(1492073, 50, 1, 1),
	Array(1302142, 50, 1, 1),
	Array(1312056, 50, 1, 1),
	Array(1322084, 50, 1, 1),
	Array(1332114, 50, 1, 1),
	Array(1342028, 50, 1, 1),
	Array(1372071, 50, 1, 1),
	Array(1382093, 50, 1, 1),

	Array(1412055, 50, 1, 1),
	Array(1422057, 50, 1, 1),
	Array(1432075, 50, 1, 1),
	Array(1442104, 50, 1, 1),
	Array(1302021, 50, 1, 1),
	Array(1302024, 50, 1, 1),
	Array(1302036, 50, 1, 1),
	Array(1302049, 50, 1, 1),

	Array(1302080, 50, 1, 1),
	Array(1302084, 50, 1, 1),
	Array(1302085, 50, 1, 1),
	Array(1302087, 50, 1, 1),
	Array(1302106, 50, 1, 1),
	Array(1302128, 50, 1, 1),

	Array(1302129, 50, 1, 1),
	Array(1302132, 50, 1, 1),
	Array(1302138, 50, 1, 1),
	Array(1302173, 50, 1, 1),
	Array(1302332, 50, 1, 1),
	Array(1322202, 50, 1, 1),

	Array(1382173, 50, 1, 1),
	Array(1402029, 50, 1, 1),
	Array(1402044, 50, 1, 1),
	Array(1442039, 50, 1, 1),
	Array(1112738, 50, 1, 1),
	Array(1112683, 50, 1, 1),
	Array(1112794, 50, 1, 1),
	Array(1102040, 50, 1, 1),

	Array(1102041, 50, 1, 1),
	Array(1102042, 50, 1, 1),
	Array(1102043, 50, 1, 1),
	Array(1072737, 50, 1, 1),
	Array(1072738, 50, 1, 1),
	Array(1072739, 50, 1, 1),
	Array(1072740, 50, 1, 1),
	Array(1072741, 50, 1, 1),

	Array(1402037, 50, 1, 1),
	Array(1402014, 50, 1, 1),
Array(2000004, 900, 20, 1), //特殊药水
Array(2000005, 700, 20, 1), //超级药水
Array(2000005, 900, 30, 1), //超级药水
Array(2022245, 850, 5, 1), //心跳停止糖
Array(1382013, 200, 1, 1), //烈焰之杖
Array(1382015, 100, 1, 1), //毒蘑菇
Array(1002914, 100, 1, 1), //盖福克斯的帽子(力量)
Array(1002915, 100, 1, 1), //盖福克斯的帽子(敏捷)
Array(1002916, 100, 1, 1), //盖福克斯的帽子(智力)
Array(1002917, 100, 1, 1), //盖福克斯的帽子(幸运)
Array(1132000, 200, 1, 1), //白色腰带
Array(1132001, 200, 1, 1), //黄色腰带
Array(1132002, 200, 1, 1), //蓝色腰带
Array(1132003, 200, 1, 1), //红色腰带
Array(1132004, 250, 1, 1), //黑贺腰带
Array(1132010, 200, 1, 1), //黄金猪猪腰带
Array(1132011, 100, 1, 1), //黄金猪猪腰带
Array(1132012, 100, 1, 1), //法老的腰带
Array(1132013, 100, 1, 1), //不灭的法老腰带
Array(1012011, 100, 1, 1), //圣诞鹿的鼻子
Array(1012012, 100, 1, 1), //圣诞鹿的鼻子
Array(1012013, 100, 1, 1), //圣诞鹿的鼻子
Array(1012014, 100, 1, 1), //圣诞鹿的鼻子
Array(1012015, 100, 1, 1), //圣诞鹿的鼻子
Array(1012016, 100, 1, 1), //圣诞鹿的鼻子
Array(1012017, 100, 1, 1), //圣诞鹿的鼻子
Array(1012018, 100, 1, 1), //圣诞鹿的鼻子
Array(1012019, 100, 1, 1), //圣诞鹿的鼻子
Array(1012020, 100, 1, 1), //圣诞鹿的鼻子
		    Array(1492179,100,1, 1),//FFN
			Array(1482168,100,1, 1),//FFN
			Array(1472214,100,1, 1),//FFN
			Array(1462193,100,1, 1),//FFN
			Array(1452205,100,1, 1),//FFN
			Array(1442223,100,1, 1),//FFN
			Array(1432167,100,1, 1),//FFN
			Array(1422140,100,1, 1),//FFN
			Array(1412135,100,1, 1),//FFN
			Array(1402196,100,1, 1),//FFN
			Array(1382208,100,1, 1),//FFN
			Array(1372177,100,1, 1),//FFN
		    Array(1492235,10,1, 1),//神秘
			Array(1482221,5,1, 1),//神秘
			Array(1472265,5,1, 1),//神秘
			Array(1462243,5,1, 1),//神秘
			Array(1452257,5,1, 1),//神秘
			Array(1442274,5,1, 1),//神秘
			Array(1432218,5,1, 1),//神秘
			Array(1422189,5,1, 1),//神秘
			Array(1412181,5,1, 1),//神秘
			Array(1402259,5,1, 1),//神秘
			Array(1382265,5,1, 1),//神秘
			Array(1372228,5,1, 1),//神秘
			Array(2022336,0,1, 1)//创世自选箱
		



);

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…百宝箱里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！\r\n\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		 
            var   text = "#r使用2000点券就可以随机获得百宝箱里的礼物大部分增加属性，快行动吧！\r\n#e#d" + 小烟花 + "先穿戴上现金怪物鞍子再穿戴普通怪物鞍子" + 小烟花 + "#n#k\r\n\r\n";
        text += "#L1#" + 小烟花 +  "使用2000点券抽#r1#k次#l#L10"+"#" + 小烟花 + "使用20000点券抽#r10#k次\r\n\r\n";
        text += "#L101##r" + 星星 + "想看百宝箱里有什么东西吗" + 星星 + "#l\r\n\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 102) {
            cm.dispose();
            cm.openNpc(9310022, 102);
        }else if(selection == 106){
			cm.dispose();
			cm.openNpc(9900001, "百宝券抽奖");
			//cm.openNpc(9310022,103 );
			return;
		}else if(selection == 104){
			cm.dispose();
			cm.openNpc(9310022, "装备积分兑换");
			return;
		}else if(selection == 105){
			cm.dispose();
			cm.openNpc(9310022, 104);
			return;
		}
		else if (selection == 101) {
            var textItem = ""
            // for (var i = 0; i < itemList.length; i++) {
                // textItem += "#i" + itemList[i][0] + ":#"
            // }
			var rewardIDs = cm.读取奖品ID(抽奖系列);
			var chances = cm.读取奖品概率(抽奖系列);
			for(var i = 0; i < rewardIDs.size(); i++){
				textItem += "#i" + rewardIDs.get(i) + ":# ";
			}
			textItem += "\r\n";
            cm.sendOk("使用2000点券随机获得以下道具，快行动吧！\r\n#e#r任何建议，请联系管理，谢谢！#n#k\r\n" + textItem);
            status = -1;
            //cm.safeDispose();
        } else if (selection > 0 && selection <= 10) {
			//cm.getPlayer().getCSPoints(1) < 500
           if  (cm.getPlayer().getNX() < 2000 ){
                cm.sendOk("点券不足！");
                cm.dispose();
                return;
            }
			
			var message = "你获得了:\r\n";
			for(var i = 1;  i <= selection; i++){
				if  (cm.getPlayer().getNX() < 2000 ){
						cm.sendOk("点券不足！");
						cm.dispose();
						return;
				}
				var itemid = cm.抽奖(抽奖系列, "坐骑百宝箱");
				var 数量 = 1;
				if (itemid != -1) {
					cm.gainItem(itemid, 数量, true);
					cm.gainNX(-2000);
					message += cm.显示物品(itemid) + "\r\n";
					cm.getPlayer().dropMessage("你获得了 " + cm.读取奖品名称(抽奖系列, itemid) + "");
				} else {
					cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					cm.dispose();
					break;
				}
			}
			cm.sendOk(message);
			cm.dispose();
			
        }

    }
}

