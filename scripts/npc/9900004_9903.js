importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[DIY卷轴]-(强化系统)";//副本名称
var costitem = 4000463;
var itemCount = 30;
var card = 5 //特权月卡增加的属性
var random = 0
var Str = 0
var Dex = 0
var Luk = 0
var Int = 0
var Watk = 0
var Matk = 0
var max1 = 15
var max2 = 15
var min1 = 5
var min2 = 5
var mode = -1
//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {

	textz = "#k\t\t\t #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
	textz += "#b   萌新记得好好看说明哦，内含自助强化详细介绍#k#n\r\n"
	textz += "#L0##b自助强化说明\r\n";
	textz += "#L1##b#e强化力量#n#l";
	textz += "#L2##b#e强化敏捷#n#l";
	textz += "#L3##b#e强化运气#n#l";
	textz += "#L4##b#e强化智力#n#l";
	if (cm.getPlayer().isGM()) {
		textz += "\r\n#L5##b#e测试#n#l";
	}
	if(cm.haveItem(3700101,1)){
		max1 += card
		max2 += card
		min1 += card
		min2 += card
		textz +="\r\n\r\n      特权月卡生效，最终属性追加"+card+"！"
	}
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "自助强化会消耗一次强化次数\r\n每次强化消耗#v"+costitem+"#x"+itemCount+"\r\n强化会随机增加#b#e"+min1+"~"+max1+"#n#k点对应属性及#b#e"+min2+"~"+max2+"#n#k点对应攻击"
			if(cm.haveItem(3700101,1)){
				string1 +="\r\n(已计算特权月卡)\r\n"
			}
			cm.sendOk(string1);
			cm.dispose();
		}else if (selection == 1 || selection == 2 || selection == 3 || selection == 4 || selection == 5) {
			mode = selection
			//测试
			if(mode == 5){
				max1++
				max1 = max1 - min1
				var testmax = 0
				var testmin = 1000
				var stringtest = ""
				for(var i = 0; i< 1000 ;i++){
					random = Math.floor(Math.random() * +max1) + min1;
					stringtest += ""+random+";"	
					if(testmax<random){
						testmax = random
					}
					if(testmin>random){
						testmin = random
					}
				}
				stringtest += "\r\n最大："+testmax+"最小："+testmin+";"	
				cm.sendOk(stringtest)
				cm.dispose();
				return;
			}
			//测试结束
			if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null){
				cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(1);
			if (ii.isCash(item.getItemId()) == true) {
                cm.sendOk("商城点卷物品暂不支持.");
                cm.dispose();
				return
			}
			if(item.getUpgradeSlots() > 0){
				item.setUpgradeSlots((item.getUpgradeSlots() - 1));
			}else{
				cm.sendOk("剩余强化次数不足");
				cm.dispose();
				return
			}
			if(cm.haveItem(costitem, itemCount)) { 
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				cm.gainItem(costitem,0 - itemCount);
				max1 ++
				max2 ++
				max1 = max1 - min1
				max2 = max2 - min2
				if(mode == 1){
				random = Math.floor(Math.random() * +max1) + min1;
				Str = random
				random = Math.floor(Math.random() * +max2)+ min2;
				Watk = random
				}
				if(mode ==2){
				random = Math.floor(Math.random() * +max1) + min1;
				Dex = random
				random = Math.floor(Math.random() * +max2)+ min2;
				Watk = random
				}
				if(mode == 3){
				random = Math.floor(Math.random() * +max1) + min1;
				Luk = random
				random = Math.floor(Math.random() * +max2)+ min2;
				Watk = random
				}
				if(mode == 4){
				random = Math.floor(Math.random() * +max1) + min1;
				Int = random
				random = Math.floor(Math.random() * +max2)+ min2;
				Matk = random
				}
				item.setStr(item.getStr()*1+Str);
				item.setDex(item.getDex()*1+Dex);
				item.setInt(item.getInt()*1+Int);
				item.setLuk(item.getLuk()*1+Luk);
				item.setMatk(item.getMatk()*1+Matk);
				item.setWatk(item.getWatk()*1+Watk);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				var a=item.getItemId();
				var string = "DIY强化成功\r\n"
				if(Str != 0){
					string += "力量增加：【#b#e"+Str+"#n#k】\r\n"
				}
				if(Dex != 0){
					string += "敏捷增加：【#b#e"+Dex+"#n#k】\r\n"
				}
				if(Int != 0){
					string += "智力增加：【#b#e"+Int+"#n#k】\r\n"
				}
				if(Luk != 0){
					string += "运气增加：【#b#e"+Luk+"#n#k】\r\n"
				}
				if(Matk != 0){
					string += "魔攻增加：【#b#e"+Matk+"#n#k】\r\n"
				}
				if(Watk != 0){
					string += "物攻增加：【#b#e"+Watk+"#n#k】\r\n"
				}
				var sum = Str + Dex + Int + Luk + Matk + Watk
				if(sum != 0){
					string += "#b#e六维变化合计#n#k：【#b#e"+sum+"#n#k】\r\n"
				}
				if(sum >= 32){
					cm.全服黄色喇叭("[DIY强化] : 玩家 "+cm.getPlayer().getName()+"强化大成功，属性增加了["+sum+"]，效果拔群")
				}
				if(sum <= 18){
					cm.全服黄色喇叭("[DIY强化] : 玩家 "+cm.getPlayer().getName()+"强化黑成狗，属性只增加了["+sum+"]，真是搞笑")
				}
				if(sum >= 30){
					cm.getPlayer().setOneTimeLog("强化大师成就");
					cm.getPlayer().dropMessage(5,"强化大师成就进度："+cm.getPlayer().getOneTimeLog("强化大师成就")+"");
				}
				cm.sendOk(string);
				cm.dispose();
			}else{
				cm.sendOk("没有足够的#v"+costitem+"#");
				cm.dispose();
			}


		}else if (selection == 2) {


		}else if (selection == 3) {
			
		}else if (selection == 4) {
		}else if (selection == 5) {
		}
    }
      }
        }


