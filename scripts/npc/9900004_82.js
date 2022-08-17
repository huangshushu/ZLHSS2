/*
SnailMS脚本生成器
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
var 奖牌 = "#fUI/Basic.img/PQuestRank/S#";
var 选择ID = 0;
var 伤害皮肤 = "#fEffect/BasicEff.img/NoRed0/0#";
var 技能皮肤 = "#fSkill/112.img/skill/1121000/icon#";


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
	var 是否开启 = true;//关闭脚本是false,开启是true
	var 商店名称 = "赞助商店";
	var 兑换物 = 4310088;
	var 奖品集合 = new ArrayList();
	var 价格集合 = new ArrayList();
	var 神秘百宝箱 = 2614101;
	//需要添加奖品和价格，就在下面添加，一个奖品对应一个价格
/* 	奖品集合.add(1);//伤害皮肤自选权限
	价格集合.add(188);//伤害皮肤自选权限价格
	奖品集合.add(2);//技能皮肤自选权限
	价格集合.add(288);//技能皮肤自选权限价格 */
	
	
	奖品集合.add(2614022);//超级宿命剪刀
	价格集合.add(28);//超级宿命剪刀价格
	奖品集合.add(2022428);//100R赞助箱子
	价格集合.add(100);//100R赞助箱子价格
	奖品集合.add(2048088);//宠物攻击卷轴
	价格集合.add(48);//宠物攻击卷轴价格
	奖品集合.add(2350002);//角色改名券
	价格集合.add(58);//角色改名券价格
	奖品集合.add(2350000);//角色栏增加券
	价格集合.add(198);//角色栏增加券价格
	奖品集合.add(4310025);//岛主银币
	价格集合.add(30);//岛主银币价格
	奖品集合.add(5150038);//超级明星美发卡
	价格集合.add(20);//超级明星美发卡价格
	奖品集合.add(2614102);//隐形药水
	价格集合.add(5);//隐形药水价格
	奖品集合.add(2614103);//随机变形药水
	价格集合.add(5);//随机变形药水价格
	
	
  	if (status == 0) {
		if(!是否开启){
			cm.sendOk("抱歉，" + 商店名称 + "暂不开放~");
			cm.dispose();
			return;
		}
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += " \t\t\t#e#r#v"  + 兑换物 + "#    " + 商店名称 + "    #v"  + 兑换物 + "##k#n              \r\n";
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += "#d角色名称：#b" + cm.getName() + "#k#n\r\n"	
		text += "#r注：#b赞助比例 1: 2#l  \r\n\r\n"//3
			
			text += "#r" + 蓝色角点 + "#k 联系群主购买~~ 金肝月卡 \r\n" + 蓝色角点 + " 每日领取#r 2000点券，3000抵用，混沌祝福卷轴各3张   #l \r\n\r\n"//3
		text += "\t\t\t\t  #d赞助币剩余#v" + 兑换物 + "#：#b" + cm.判断背包其他栏().countById(兑换物) + "#k\r\n";
            
			
		for(var i = 0; i < 奖品集合.size(); i++){
			switch(奖品集合.get(i)){
				case 1:
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t"  + 伤害皮肤 + "#d伤害皮肤自选权限#k [#r" + 价格集合.get(i) + "#b #v" + 兑换物 + "#]  #k  #l\r\n";//3
					break;
				case 2:
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t"  + 技能皮肤 + "#d技能皮肤自选权限#k [#r" + 价格集合.get(i) + "#b #v" + 兑换物 + "#]  #k  #l\r\n";//3
					break;
				case 1115309:
					text += "#L" + i + "##r" + 蓝色角点 + "#d\t#v"  + 奖品集合.get(i) + "# " + cm.getItemName(奖品集合.get(i)) + " #bx1 [#r" + 价格集合.get(i) + "#b #v" + 兑换物 + "#]\r\n\t\t\t（附赠每日免费隐形药水领取权限）#k  #l\r\n";//3
					break;
				default://默认的描述，这里别动
					
					text += "#L" + i + "##r" + 蓝色角点 + "#d\t#v"  + 奖品集合.get(i) + "# " + cm.getItemName(奖品集合.get(i)) + " #bx1 [#r" + 价格集合.get(i) + "#b #v" + 兑换物 + "#]  #k  #l\r\n";//3
			}
			
		}
		text += "\r\n";
		text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1) {
		if (cm.getInventory(1).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}else if (cm.getInventory(2).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		} else if (cm.getInventory(3).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		} else if (cm.getInventory(4).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		} else if (cm.getInventory(5).isFull(0)) {
			cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
			cm.dispose();
			return;
		}else if(cm.判断背包其他栏().countById(兑换物) >= 价格集合.get(selection)){
			var message = "请输入你想要购买的数量：\r\n";
			var 当前数量 = cm.判断背包其他栏().countById(兑换物);
			var 单价 = 价格集合.get(selection);
			var 最大数量 = 当前数量 / 单价;
			选择ID = selection;
			cm.sendGetNumber(message, 1, 1, 最大数量);
			
		}else{
			cm.sendOk("#r你的#v" + 兑换物 + "#不足。");
			cm.dispose();
			return;
		}
 
		
	} else if (status == 2) {
		if(cm.判断背包其他栏().countById(兑换物) >= 价格集合.get(选择ID) * selection){
			switch(奖品集合.get(选择ID)){
				case 1112118://需要特殊给予方式，就这样写进来
					for(var i = 0; i < selection; i++){
						cm.给属性装备(奖品集合.get(选择ID), 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 360);
					}
					break;
				case 1://需要特殊给予方式，就这样写进来
					if(cm.getOneTimeLog("伤害皮肤切换") > 0){
						cm.sendOk("您已经购买过该权限了。\r\n");
						cm.dispose();
						return;
					}else if(selection != 1){
						cm.sendOk("购买权限的数量只能为 #r1#k。\r\n");
						cm.dispose();
						return;
					}else{
						if(!cm.haveItem(神秘百宝箱)){
							cm.gainItem(神秘百宝箱, 1);
						}
						cm.gainItem(兑换物, -价格集合.get(选择ID) * selection);
						cm.setOneTimeLog("伤害皮肤切换");
						cm.sendOk("购买成功！\r\n");
						var item = cm.getNewEquip(神秘百宝箱);
						//cm.全服道具公告("[" + 商店名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换了 伤害皮肤切换 权限。", item);
						cm.dispose();
						return;
					}
					break;	
				case 2://需要特殊给予方式，就这样写进来
					if(cm.getOneTimeLog("基础技能皮肤切换") > 0){
						cm.sendOk("您已经购买过该权限了。\r\n");
						cm.dispose();
						return;
					}else if(selection != 1){
						cm.sendOk("购买权限的数量只能为 #r1#k。\r\n");
						cm.dispose();
						return;
					}else{
						if(!cm.haveItem(神秘百宝箱)){
							cm.gainItem(神秘百宝箱, 1);
						}
						cm.gainItem(兑换物, -价格集合.get(选择ID) * selection);
						cm.setOneTimeLog("基础技能皮肤切换");
						cm.sendOk("购买成功！\r\n");
						var item = cm.getNewEquip(神秘百宝箱);
						//cm.全服道具公告("[" + 商店名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换了 技能皮肤切换 权限。", item);
						cm.dispose();
						return;
					}
					break;	
				case 1115309://需要特殊给予方式，就这样写进来
					if(selection != 1){
						cm.sendOk("购买的数量只能为 #r1#k。\r\n");
						cm.dispose();
						return;
					}else{
						if(!cm.haveItem(神秘百宝箱)){
							cm.gainItem(神秘百宝箱, 1);
						}
						cm.gainItem(兑换物, -价格集合.get(选择ID) * selection);
						cm.setOneTimeLog("隐形药水免费领取");
						cm.gainItem(奖品集合.get(选择ID), selection);
						cm.sendOk("购买成功，可以使用#v" + 奖品集合.get(选择ID) + "#领取隐形药水了！\r\n");
						var item = cm.getNewEquip(奖品集合.get(选择ID));
						//cm.全服道具公告("[" + 商店名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功购买了 隐形戒指 ，并获得了免费领取隐形药水的权限。", item);
						cm.dispose();
						return;
					}
					break;	
				default://这里就是默认的给予方式，这里别动
					cm.gainItem(奖品集合.get(选择ID), selection);
				}
			cm.gainItem(兑换物, -价格集合.get(选择ID) * selection);
			cm.sendOk("购买成功！");
			var item = cm.getNewEquip(奖品集合.get(选择ID));
			//cm.全服道具公告("[" + 商店名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换", item);
		}else{
			cm.sendOk("#r你的#v" + 兑换物 + "#不足。");
			cm.dispose();
			return;
		}
	} else {
		cm.dispose();
		cm.openNpc(9900004, 82);
		return;
	}
}

