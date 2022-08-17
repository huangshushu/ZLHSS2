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
	var 商店名称 = "里程兑换商店";
	var 奖品集合 = new ArrayList();
	var 价格集合 = new ArrayList();
	//需要添加奖品和价格，就在下面添加，一个奖品对应一个价格
	奖品集合.add(2022468);//洗血箱子
	价格集合.add(1);//洗血箱子价格
	奖品集合.add(4001126);//枫叶
	价格集合.add(1);//枫叶价格
	奖品集合.add(2022523);//10%卷轴自选箱子
	价格集合.add(4);//10%卷轴自选箱子价格
	奖品集合.add(4310081);//BOSS币
	价格集合.add(2);//BOSS币价格
	奖品集合.add(2049100);//混沌卷轴
	价格集合.add(20);//混沌卷轴价格
	奖品集合.add(2340000);//祝福卷轴
	价格集合.add(20);//祝福卷轴价格
	奖品集合.add(2022465);//武器必成卷箱子
	价格集合.add(160);//武器必成卷箱子价格
	奖品集合.add(4310129);//雪花币
	价格集合.add(160);//雪花币价格
	// 奖品集合.add(2614000);//1W破功石
	// 价格集合.add(100);//1W破功石价格
	奖品集合.add(2022336);//创世武器自选箱
	价格集合.add(4000);//创世武器自选箱价格
	奖品集合.add(4002000);//邮票
	价格集合.add(1);//邮票
	奖品集合.add(4002003);//邮票
	价格集合.add(1);//邮票
	奖品集合.add(4031561);//邮票
	价格集合.add(1);//邮票
	奖品集合.add(4031559);//邮票
	价格集合.add(1);//邮票
	奖品集合.add(4002002);//邮票
	价格集合.add(1);//邮票
	奖品集合.add(4002001);//邮票
	价格集合.add(2);//邮票
	奖品集合.add(4001160);//邮票
	价格集合.add(1);//邮票
  	if (status == 0) {
		if(!是否开启){
			cm.sendOk("抱歉，里程商店暂不开放~");
			cm.dispose();
			return;
		}
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += " \t\t#e#r"  + 奖牌 + "    " + 商店名称 + "    "  + 奖牌 + "#k#n              \r\n";
		text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n";
		text += "\t\t\t\t\t#d我的里程：#b" + cm.获得里程() + "#k\r\n";
		for(var i = 0; i < 奖品集合.size(); i++){
			switch(奖品集合.get(i)){
				case 2022523://需要特殊描述，就这样写进来
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #d10%卷轴自选箱子#b x1 #b [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
					break;
				case 2022468://需要特殊描述，就这样写进来
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #d洗血箱子#b x1 #b [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
					break;
				case 2022465://需要特殊描述，就这样写进来
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #d武器必成卷箱子#b x1 #b [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
					break;
				case 2022467://需要特殊描述，就这样写进来
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #d红武自选箱子#b x1 #b [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
					break;
				case 4001126:
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #bx100 [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
					break;
				default://默认的描述，这里别动
					text += "#L" + i + "##r" + 蓝色角点 + "#b\t#v"  + 奖品集合.get(i) + "# #bx1 [#r" + 价格集合.get(i) + "#b 里程]  #k  #l\r\n";//3
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
		}else if(cm.获得里程() >= 价格集合.get(selection)){
			var message = "请输入你想要购买的数量：\r\n";
			var 当前里程 = cm.获得里程();
			var 单价 = 价格集合.get(selection);
			var 最大数量 = 当前里程 / 单价;
			选择ID = selection;
			cm.sendGetNumber(message, 1, 1, 最大数量);
			
		}else{
			cm.sendOk("#r你的里程不足。");
			cm.dispose();
			return;
		}
 
		
	} else if (status == 2) {
		if(cm.获得里程() >= 价格集合.get(选择ID) * selection){
			switch(奖品集合.get(选择ID)){
				case 1112118://需要特殊给予方式，就这样写进来
					for(var i = 0; i < selection; i++){
						cm.给属性装备(奖品集合.get(选择ID), 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 360);
					}
					break;
				case 1112228://需要特殊给予方式，就这样写进来
					for(var i = 0; i < selection; i++){
						cm.给属性装备(奖品集合.get(选择ID), 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 360);
					}
					break;	
				case 4001126:
					var n = parseInt(selection * 100 / 30000);
					//cm.getPlayer().dropMessage("n=" + n);//测试
					if(n > 0){
						var remainder = selection * 100 % 30000;
						for(var i = 0; i < n; i++){
							cm.gainItem(奖品集合.get(选择ID), 30000);
						}
						cm.gainItem(奖品集合.get(选择ID), remainder);
					}else{
						cm.gainItem(奖品集合.get(选择ID), selection * 100);
					}
					break;
				default://这里就是默认的给予方式，这里别动
					cm.gainItem(奖品集合.get(选择ID), selection);
				}
			cm.减少里程(价格集合.get(选择ID) * selection);
			cm.sendOk("购买成功！");
			var item = cm.getNewEquip(奖品集合.get(选择ID));
			//cm.全服道具公告("[" + 商店名称 + "]", "恭喜玩家 "+cm.getPlayer().getName()+" 成功兑换", item);
		}else{
			cm.sendOk("#r你的里程不足。");
			cm.dispose();
			return;
		}
	} else {
		cm.dispose();
		cm.openNpc(9900004, 9);
		return;
	}
}

