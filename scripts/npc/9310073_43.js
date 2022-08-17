var 魔法师技能 = Array(
		Array(3121002,30,1,"通用技能。"), 	
		Array(1121000,30,1,"骑士团使用"), 	
		Array(4111002,30,1,"分身100%伤害 适用弓.弩.枪手 其他无效"), 
		Array(1121011,5,1,"骑士团使用 解除异常。"), 
		Array(2111005,20,1,"主教使用."),
		Array(1321002,30,1,"通用技能")
		); 
var 战士技能 = Array(
		
		
		Array(9001006,1,1,"主线技能 超级狂龙斩 全屏  无消耗")   
		); 
var 飞侠技能 = Array(
		Array(4111006,20,1,"二段跳。")
		//Array(4101004,20,4,"一定时间内提高所有队员的移动速度和跳跃力."),
		//Array(4221006,30,1,"为了从危险中迅速逃脱仍烟幕弹.烟幕弹内的组队成员在烟幕弹状态下不受敌人的伤害.冷却时间 : 10分")
		); 
var 海盗技能 = Array(
		Array(5101007,10,5,"为了不受怪物攻击地移动，戴上橡木桶变装。有时可能会被好奇的怪物们发现，所以要格外小心。俯卧时被发现的概率减少."),
		Array(5121009,20,10,"消耗HP,MP,一定时间内使武器的攻击速度上升。可与其他武器速度提升技能重复，组队成员全部能收到这些技能的效果。") 
		); 
var 弓箭手技能 = Array(
		Array(3221002,30,0,"飞侠的专属技能.")   
		); 
var 会员技能 = Array(
		//Array(3121002,30,3,"赋予组队成员针对敌人寻找弱点并给予敌人致命伤的能力."), 
		//Array(4111002,30,6,"召唤影分身。没有HP,和角色做一样的动作，会自动消失。"),
		Array(1121002,30,1,"凭借着强韧的精神，受到敌人的攻击仍不会后退。") 		
		); 
var itemid = 3700051;
var itemid1 = 3700048;
var itemid2 = 3700040;
var 完成 = "#fUI/Basic/CheckBox/0#";   //有框框 无√
var 完成1 = "#fUI/Basic/CheckBox/1#";   //有框框 有√
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#"; // 虚体浅色粉红爱心
var 爱心1 = "#fEffect/CharacterEff/1003271/0/0#"; // 实体粉红爱心
var 爱心2 = "#fEffect/CharacterEff/1022223/3/0#"; // 虚体深色粉红爱心
var 爱心3 = "#fEffect/CharacterEff/1042176/0/2#"; // 实体深红爱心【中型】
var 爱心4 = "#fEffect/CharacterEff/1042176/1/1#"; // 实体深红爱心【小型】
var 爱心5 = "#fEffect/CharacterEff/1050312/0/0#"; // 爱心*7
var 爱心6 = "#fEffect/CharacterEff/1050312/1/0#"; // 爱心 星星 混合
var 爱心6 = "#fEffect/CharacterEff/1051296/0/4#"; // 蓝色大爱心
var 蝴蝶 = "#fEffect/CharacterEff/1051366/1/0#"; // 蓝色蝴蝶
var 草莓 = "#fUI/GuildMark/Mark/Plant/00003000/1# "; // 红色草莓
var 草莓1 = "#fUI/GuildMark/Mark/Plant/00003000/10# "; // 淡蓝色草莓
var 草莓2 = "#fUI/GuildMark/Mark/Plant/00003000/11# "; // 紫色草莓
var 草莓3 = "#fUI/GuildMark/Mark/Plant/00003000/15# "; // 白色草莓
var 草莓4 = "#fUI/GuildMark/Mark/Plant/00003000/3# "; // 黄色草莓
var 草莓5 = "#fUI/GuildMark/Mark/Plant/00003000/8# "; // 绿色草莓
var 四方印 = "#fUI/GuildMark/Mark/Pattern/00004014/11#"; // 紫色四方印
var 四方印1 = "#fUI/GuildMark/Mark/Pattern/00004014/16#"; // 褐色四方印
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔1 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 音乐 = "#fEffect/CharacterEff/1003249/0/0#";  //浅颜色音乐符号
var 音乐1 = "#fEffect/CharacterEff/1003249/1/0#"; //深颜色音乐符号
var 音乐2 = "#fEffect/CharacterEff/1032063/0/0#";  //音乐符号*5
var 音乐11 = "#fEffect/CharacterEff/1112900/2/0#";  //浅颜色大音乐符号
var 花 = "#fEffect/CharacterEff/1050334/0/1#";  //粉色小花
var 花1 = "#fEffect/CharacterEff/1050334/0/3#";  //紫色大花
var 花2 = "#fEffect/CharacterEff/1050334/1/2#";  //黄紫色大花
var 星星 = "#fEffect/CharacterEff/1051294/1/0#"; //旋转星星1
var 星星1 = "#fEffect/CharacterEff/1051294/1/1#"; //旋转星星2
var 星星2 = "#fEffect/CharacterEff/1051294/1/2#"; //旋转星星3
var 星星3 = "#fEffect/CharacterEff/1051294/1/3#"; //旋转星星4
var 星星4 = "#fEffect/CharacterEff/1051294/1/4#"; //旋转星星5
var 星星5 = "#fEffect/CharacterEff/1051294/1/5#"; //旋转星星6
var 闪星 = "#fEffect/CharacterEff/1114000/2/0#"; //多角闪星
var 雪娃娃 = "#fCharacter/Cape/01102288/info/icon#";
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var 表情委屈 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/1#";
var 表情开心 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";
var 经验值 = "#fUI/UIWindow/QuestIcon/8/0#";
var 人气度 = "#fUI/UIWindow/QuestIcon/6/0#";
var 几率获得 = "#fUI/UIWindow/Quest/prob#";
var 选择获得 = "#fUI/UIWindow/Quest/select#";
var 奖励 = "#fUI/UIWindow/Quest/reward#";
var 双箭头 = "#fUI/UIWindow/Quest/icon8/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 冰 ="#fMap/MapHelper/mark/ElNath#";
var 躺熊 = "#fItem/Cash/0502/05021008/info/iconRaw#";  //
var 枫叶 = "#fUI/CashShop/Base/Tab/Enable/0#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 气球 ="#fEffect/SetEff/237/effect/walk2/6#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 玫瑰盒 = "#fItem/Consume/0224/02240010/info/iconRaw#";  //
var 蝴蝶结盒 = "#fItem/Consume/0224/02240013/info/iconRaw#";  //
var 大爱心L = "#fItem/Etc/0427/04270005/11/2#";  //
var 大爱心O = "#fItem/Etc/0427/04270005/14/2#";  //
var 大爱心V = "#fItem/Etc/0427/04270005/21/2#";  //
var 大爱心E = "#fItem/Etc/0427/04270005/4/2#";  //
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
		
function start() {
	status = -1;
	action(1, 0, 0);
	
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.sendOk("感谢你的光临！");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			var text =            表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴+表情高兴;
				//text += "\r\nHi~ 您准备好变得更强了吗?#d\r\n\r\n";
				text += "   \r\n\r\n\t\t我这里可以为您提供一点学习技能的途径.\r\n\r\n";
				//text += 四方印+"请问您要学习哪一个职业的技能?\r\n\r\n";
				text += "                 #b#L0#"+箭头+"修仙技能#l      \r\n";
				if(cm.getVip()>0){
					text += "#L5#"+箭头+"会员专属学习技能#l";
				}
				cm.sendSimple(text);
		} else if (status == 1) {
			if(selection == 0){
				var selStr = "目前开放学习的技能有:";
				for (var i = 0; i < 魔法师技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 魔法师技能[i][0] + "# 最高等级: " + 魔法师技能[i][1] + "  需要#i" + itemid + ":# * #r#e" + 魔法师技能[i][2] + "#n#k\r\n说明:" + 魔法师技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 0;
			} else if(selection == 1){
				var selStr = "目前战士开放学习的技能有:";
				for (var i = 0; i < 战士技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 战士技能[i][0] + "# 最高等级: " + 战士技能[i][1] + "  需要#i" + itemid1 + ":# * #r#e" + 战士技能[i][2] + "#n#k\r\n说明:" + 战士技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 1;
			} else if(selection == 2){
				var selStr = "目前飞侠开放学习的技能有:";
				for (var i = 0; i < 飞侠技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 飞侠技能[i][0] + "# 最高等级: " + 飞侠技能[i][1] + "  需要#i" + itemid2 + ":# * #r#e" + 飞侠技能[i][2] + "#n#k\r\n说明:" + 飞侠技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 2;
			} else if(selection == 3){
				var selStr = "目前海盗开放学习的技能有:";
				for (var i = 0; i < 海盗技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 海盗技能[i][0] + "# 最高等级: " + 海盗技能[i][1] + "  需要#i" + itemid + ":# * #r#e" + 海盗技能[i][2] + "#n#k\r\n说明:" + 海盗技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 3;
			} else if(selection == 4){
				var selStr = "目前弓箭手开放学习的技能有:";
				for (var i = 0; i < 弓箭手技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 弓箭手技能[i][0] + "# 最高等级: " + 弓箭手技能[i][1] + "  需要#i" + itemid + ":# * #r#e" + 海盗技能[i][2] + "#n#k\r\n说明:" + 弓箭手技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 4;
			} else if(selection == 5){
				var selStr = "目前会员专属开放学习的技能有:";
				for (var i = 0; i < 会员技能.length; i++) {
				selStr += "\r\n\r\n#L" + i + "##s" + 会员技能[i][0] + "# 最高等级: " + 会员技能[i][1] + "  需要VIP等级:" + 会员技能[i][2] + "#n#k\r\n说明:" + 会员技能[i][3] + "#l";
				}
				cm.sendSimple(selStr);
				job = 5;
			}
		} else if (status == 2){
			if (job == 0) {
				skilllevel = 魔法师技能[selection][1];
				skillid = 魔法师技能[selection][0];
				zscs = 魔法师技能[selection][2];
				if(cm.haveItem(itemid, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
					cm.sendYesNo("系统将把#s" + 魔法师技能[selection][0] + "#放在 A 键");
					zv = 1;
				} else {
					cm.sendOk("所需#i" + itemid + ":#不足！");
					cm.dispose();
				}
				
			} else if (job == 1) {
				zscs = 战士技能[selection][2];
				skilllevel = 战士技能[selection][1];
				skillid = 战士技能[selection][0];
				if(cm.haveItem(itemid1, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
				cm.sendYesNo("系统将把#s" + 战士技能[selection][0] + "#放在 A 键");
				zv = 1;
				} else {
					cm.sendOk("所需#i" + itemid1 + ":#不足！");
					cm.dispose();
				}
			} else if (job == 2) {
				zscs = 飞侠技能[selection][2];
				skilllevel = 飞侠技能[selection][1];
				skillid = 飞侠技能[selection][0];
				if(cm.haveItem(itemid2, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
				cm.sendYesNo("系统将把#s" + 飞侠技能[selection][0] + "#放在 A 键");
				
				zv = 1;
				} else {
					cm.sendOk("所需#i" + itemid2 + ":#不足！");
					cm.dispose();
				}
			} else if (job == 3) {
				zscs = 海盗技能[selection][2];
				skilllevel = 海盗技能[selection][1];
				skillid = 海盗技能[selection][0];
				if(cm.haveItem(itemid, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
				cm.sendYesNo("系统将把#s" + 海盗技能[selection][0] + "#放在 A 键");
				
				zv = 1;
				} else {
					cm.sendOk("所需#i" + itemid + ":#不足！");
					cm.dispose();
				}
			} else if (job == 4) {
				zscs = 弓箭手技能[selection][2];
				skilllevel = 弓箭手技能[selection][1];
				skillid = 弓箭手技能[selection][0];
				if(cm.haveItem(itemid, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
				cm.sendYesNo("系统将把#s" + 弓箭手技能[selection][0] + "#放在 A 键");
				
				zv = 1;
				} else {
					cm.sendOk("所需#i" + itemid + ":#不足！");
					cm.dispose();
				}
			} else if (job == 5) {
				viplevel = 会员技能[selection][2];
				skilllevel = 会员技能[selection][1];
				skillid = 会员技能[selection][0];
				if(cm.getVip() >= viplevel){
					cm.sendYesNo("系统将把#s" + 会员技能[selection][0] + "#放在 A 键");
					zv = 2;
				} else {
					cm.sendOk("会员等级不足！");
					cm.dispose();
				}
			}
		} else if (status == 3){
			if(zv == 2){
				if(cm.getVip() >= viplevel){
					cm.teachSkill(skillid,skilllevel,skilllevel);
					cm.getPlayer().changeKeybinding(30,1,skillid);
					cm.sendOk("学习成功！\r\n请换一个频道就有技能了哦");
					cm.dispose();
				} else {
					cm.sendOk("会员等级不足！");
					cm.dispose();
				}
			} else if(zv == 1){
				if(cm.haveItem(itemid, zscs) || cm.getOneTimeLog("study:"+skillid) != 0){
					cm.gainItem(itemid, -zscs);
					cm.setOneTimeLog("study:"+skillid);
					cm.teachSkill(skillid,skilllevel,skilllevel);
					cm.getPlayer().changeKeybinding(30,1,skillid);
					cm.sendOk("学习成功！\r\n请换一个频道就有技能了哦");
					cm.dispose();
				} else {
					cm.sendOk("所需#i" + itemid + ":#不足！");
					cm.dispose();
				}
			}
		}
	}
}
