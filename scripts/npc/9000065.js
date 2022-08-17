/*
SnailMS 4转技能商店
*/
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);

var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 技能册 = "#fSkill/112.img/info/icon#";
//火毒
var 火凤球 = "#fSkill/212.img/skill/2121003/icon#";
var 冰破魔兽 = "#fSkill/212.img/skill/2121005/icon#";
var 天降落星 = "#fSkill/212.img/skill/2121007/icon#";
//冰毒
var 冰凤球 = "#fSkill/222.img/skill/2221003/icon#";
var 火魔兽 = "#fSkill/222.img/skill/2221005/icon#";
var 落霜冰破 = "#fSkill/222.img/skill/2221007/icon#";
//主教
var 强化圣龙 = "#fSkill/232.img/skill/2321003/icon#";
var 复活术 = "#fSkill/232.img/skill/2321006/icon#";
var 圣光普照 = "#fSkill/232.img/skill/2321008/icon#";
//黑骑
var 灵魂治愈 = "#fSkill/132.img/skill/1320008/icon#";
var 灵魂祝福 = "#fSkill/132.img/skill/1320009/icon#";
var 恶龙附身 = "#fSkill/132.img/skill/1320006/icon#";
var 黑骑士突进 = "#fSkill/132.img/skill/1321003/icon#";
var 黑骑士稳如泰山 = "#fSkill/132.img/skill/1321002/icon#";
//英雄
var 寒冰掌 = "#fSkill/112.img/skill/1120005/icon#";
var 英雄稳如泰山 = "#fSkill/112.img/skill/1121002/icon#";
var 英雄突进 = "#fSkill/112.img/skill/1121006/icon#";
var 葵花宝典 = "#fSkill/112.img/skill/1121010/icon#";
//圣骑
var 寒冰掌 = "#fSkill/122.img/skill/1220006/icon#";
var 圣骑士稳如泰山 = "#fSkill/122.img/skill/1221002/icon#";
var 圣骑士突进 = "#fSkill/122.img/skill/1221007/icon#";
var 圣域 = "#fSkill/122.img/skill/1221011/icon#";
//var 圣灵之剑 = "#fSkill/122.img/skill/1221003/icon#";
var 圣灵之锤 = "#fSkill/122.img/skill/1221004/icon#";
//神射
var 暴风箭雨 = "#fSkill/312.img/skill/3121004/icon#";
var 火凤凰 = "#fSkill/312.img/skill/3121006/icon#";
var 集中精力 = "#fSkill/312.img/skill/3121008/icon#";
var 射手飞龙冲击波 = "#fSkill/312.img/skill/3121003/icon#";
//箭神
var 一击要害箭 = "#fSkill/322.img/skill/3221007/icon#";
var 冰凤凰 = "#fSkill/322.img/skill/3221005/icon#";
var 穿透箭 = "#fSkill/322.img/skill/3221001/icon#";
var 弩手飞龙冲击波 = "#fSkill/322.img/skill/3221003/icon#";
//侠盗
var 侠盗忍者伏击 = "#fSkill/422.img/skill/4221004/icon#";
var 暗杀 = "#fSkill/422.img/skill/4221001/icon#";
var 烟幕弹 = "#fSkill/422.img/skill/4221006/icon#";
//隐士
var 隐士忍者伏击 = "#fSkill/412.img/skill/4121004/icon#";
var 忍者冲击 = "#fSkill/412.img/skill/4121008/icon#";
//船长
var 武装 = "#fSkill/522.img/skill/5221006/icon#";
var 急速射 = "#fSkill/522.img/skill/5221007/icon#";
var 重量炮击 = "#fSkill/522.img/skill/5221008/icon#";
var 地毯式空袭 = "#fSkill/522.img/skill/5221003/icon#";
var 心灵控制 = "#fSkill/522.img/skill/5221009/icon#";
//队长
var 超级变身 = "#fSkill/512.img/skill/5121003/icon#";
var 索命 = "#fSkill/512.img/skill/5121005/icon#";
var 金手指 = "#fSkill/512.img/skill/5121004/icon#";
var 伺机待发 = "#fSkill/512.img/skill/5121010/icon#";

//战神
var 全力挥击 = "#fSkill/2111.img/skill/21110002/icon#";
var 战神之舞 = "#fSkill/2112.img/skill/21120002/icon#";

var selection_bf;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	
	
	//设置区域
	var 活动名称 = "技能册";
	// var 兑换物 = 3992000;
	var 奖品集合 = new ArrayList();
	var 奖品图标 = new ArrayList();
	var 价格集合 = new ArrayList();
	//需要添加奖品和价格，就在下面添加，一个奖品对应一个价格
	奖品图标.add(火凤球 + "#b 火凤球#k");
	奖品集合.add(2121003);
	价格集合.add(30000000);
	奖品图标.add(冰破魔兽 + "#b 冰破魔兽#k");
	奖品集合.add(2121005);
	价格集合.add(30000000);
	奖品图标.add(天降落星 + "#b 天降落星#k");
	奖品集合.add(2121007);
	价格集合.add(30000000);
	奖品图标.add(冰凤球 + "#b 冰凤球#k");
	奖品集合.add(2221003);
	价格集合.add(30000000);
	奖品图标.add(火魔兽 + "#b 火魔兽#k");
	奖品集合.add(2221005);
	价格集合.add(30000000);
	奖品图标.add(落霜冰破 + "#b 落霜冰破#k");
	奖品集合.add(2221007);
	价格集合.add(30000000);
	奖品图标.add(强化圣龙 + "#b 强化圣龙#k");
	奖品集合.add(2321003);
	价格集合.add(30000000);
	奖品图标.add(复活术 + "#b 复活术#k");
	奖品集合.add(2321006);
	价格集合.add(30000000);
	奖品图标.add(圣光普照 + "#b 圣光普照#k");
	奖品集合.add(2321008);
	价格集合.add(30000000);
	奖品图标.add(灵魂治愈 + "#b 灵魂治愈#k");
	奖品集合.add(1320008);
	价格集合.add(30000000);
	奖品图标.add(灵魂祝福 + "#b 灵魂祝福#k");
	奖品集合.add(1320009);
	价格集合.add(30000000);
	奖品图标.add(恶龙附身 + "#b 恶龙附身#k");
	奖品集合.add(1320006);
	价格集合.add(30000000);
	奖品图标.add(黑骑士突进 + "#b 黑骑士突进#k");
	奖品集合.add(1321003);
	价格集合.add(30000000);
	奖品图标.add(黑骑士稳如泰山 + "#b 黑骑士稳如泰山#k");
	奖品集合.add(1321002);
	价格集合.add(30000000);
	奖品图标.add(寒冰掌 + "#b 寒冰掌#k");
	奖品集合.add(1120005);
	价格集合.add(30000000);
	奖品图标.add(英雄稳如泰山 + "#b 英雄稳如泰山#k");
	奖品集合.add(1121002);
	价格集合.add(30000000);
	奖品图标.add(英雄突进 + "#b 英雄突进#k");
	奖品集合.add(1121006);
	价格集合.add(30000000);
	奖品图标.add(葵花宝典 + "#b 葵花宝典#k");
	奖品集合.add(1121010);
	价格集合.add(30000000);
	奖品图标.add(寒冰掌 + "#b 寒冰掌#k");
	奖品集合.add(1220006);
	价格集合.add(30000000);
	奖品图标.add(圣骑士稳如泰山 + "#b 圣骑士稳如泰山#k");
	奖品集合.add(1221002);
	价格集合.add(30000000);
	奖品图标.add(圣骑士突进 + "#b 圣骑士突进#k");
	奖品集合.add(1221007);
	价格集合.add(30000000);
	奖品图标.add(圣域 + "#b 圣域#k");
	奖品集合.add(1221011);
	价格集合.add(30000000);
	// 奖品图标.add(圣灵之剑 + "#b 圣灵之剑#k");
	// 奖品集合.add(1221003);
	// 价格集合.add(30000000);
	奖品图标.add(圣灵之锤 + "#b 圣灵之锤#k");
	奖品集合.add(1221004);
	价格集合.add(30000000);
	奖品图标.add(暴风箭雨 + "#b 暴风箭雨#k");
	奖品集合.add(3121004);
	价格集合.add(30000000);
	奖品图标.add(火凤凰 + "#b 火凤凰#k");
	奖品集合.add(3121006);
	价格集合.add(30000000);
	奖品图标.add(射手飞龙冲击波 + "#b 射手飞龙冲击波#k");
	奖品集合.add(3121003);
	价格集合.add(30000000);
	奖品图标.add(集中精力 + "#b 集中精力#k");
	奖品集合.add(3121008);
	价格集合.add(30000000);
	奖品图标.add(一击要害箭 + "#b 一击要害箭#k");
	奖品集合.add(3221007);
	价格集合.add(30000000);
	奖品图标.add(冰凤凰 + "#b 冰凤凰#k");
	奖品集合.add(3221005);
	价格集合.add(30000000);
	奖品图标.add(穿透箭 + "#b 穿透箭#k");
	奖品集合.add(3221001);
	价格集合.add(30000000);
	奖品图标.add(弩手飞龙冲击波 + "#b 弩手飞龙冲击波#k");
	奖品集合.add(3221003);
	价格集合.add(30000000);
	奖品图标.add(侠盗忍者伏击 + "#b 侠盗忍者伏击#k");
	奖品集合.add(4221004);
	价格集合.add(30000000);
	奖品图标.add(暗杀 + "#b 暗杀#k");
	奖品集合.add(4221001);
	价格集合.add(30000000);
	奖品图标.add(烟幕弹 + "#b 烟幕弹#k");
	奖品集合.add(4221006);
	价格集合.add(30000000);
	奖品图标.add(隐士忍者伏击 + "#b 隐士忍者伏击#k");
	奖品集合.add(4121004);
	价格集合.add(30000000);
	奖品图标.add(忍者冲击 + "#b 忍者冲击#k");
	奖品集合.add(4121008);
	价格集合.add(30000000);
	奖品图标.add(武装 + "#b 武装#k");
	奖品集合.add(5221006);
	价格集合.add(30000000);
	奖品图标.add(急速射 + "#b 急速射#k");
	奖品集合.add(5221007);
	价格集合.add(30000000);
	奖品图标.add(重量炮击 + "#b 重量炮击#k");
	奖品集合.add(5221008);
	价格集合.add(30000000);
	奖品图标.add(地毯式空袭 + "#b 地毯式空袭#k");
	奖品集合.add(5221003);
	价格集合.add(30000000);
	奖品图标.add(心灵控制 + "#b 心灵控制#k");
	奖品集合.add(5221009);
	价格集合.add(30000000);
	奖品图标.add(超级变身 + "#b 超级变身#k");
	奖品集合.add(5121003);
	价格集合.add(30000000);
	奖品图标.add(索命 + "#b 索命#k");
	奖品集合.add(5121005);
	价格集合.add(30000000);
	奖品图标.add(金手指 + "#b 金手指#k");
	奖品集合.add(5121004);
	价格集合.add(30000000);
	奖品图标.add(伺机待发 + "#b 伺机待发#k");
	奖品集合.add(5121010);
	价格集合.add(30000000);
	奖品图标.add(全力挥击 + "#b 全力挥击#k");
	奖品集合.add(21110002);
	价格集合.add(5000000);
	奖品图标.add(战神之舞 + "#b 战神之舞#k");
	奖品集合.add(21120002);
	价格集合.add(20000000);

	
  	if (status == 0) {
		
		if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
		}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
		}
		var tex2 = "";
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		text += " \t\t\t  #e#r "  + 技能册 + "  " + 活动名称 + "商店  "  + 技能册 + "#k#n              \r\n"
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            
		//var tex2 = ""+cm.getHyPay(1)+"";
			
		for(var i = 0; i < 奖品集合.size(); i++){
			switch(奖品集合.get(i)){
				default://默认的描述，这里别动
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t"  + 奖品图标.get(i) + " [需 #r"  + 价格集合.get(i) + " #k金币]  #k  #l\r\n";//3
			}
			
		}
		text += "\r\n";
		text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1 || status == 2) {
		if(status == 1){
			selection_bf = selection;
			cm.sendYesNo("你确认要购买" + 奖品图标.get(selection) + "吗？\r\n#r请自行确认你的职业是否匹配，如职业不符，技能是无法成功授予的，扣除的金币不予返还。\r\n");
			return;
		}
		if (cm.getInventory(1).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}
		if (cm.getInventory(2).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}
		if (cm.getInventory(3).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}
		if (cm.getInventory(4).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}
		if (cm.getInventory(5).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}
		if(cm.判断金币() >= 价格集合.get(selection_bf)){
			switch(奖品集合.get(selection_bf)){			
				default://这里就是默认的给予方式，这里别动
					cm.teachSkill(奖品集合.get(selection_bf), 0, 10);
				}
			// cm.gainItem(兑换物, -价格集合.get(selection));
			cm.收金币(价格集合.get(selection_bf));
			cm.sendOk("购买成功！你已成功学会技能" + 奖品图标.get(selection_bf) + "\r\n");
			cm.dispose();
		}else{
			cm.sendOk("#r你的金币不足。");
			cm.dispose();
		}
 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

