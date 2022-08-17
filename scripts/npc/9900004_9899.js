importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[混沌卷轴]-(强化系统)";//副本名称
var costitem = 4000463;
var itemCount = 10;
var random = 0
var Str = 0
var Dex = 0
var Luk = 0
var Int = 0
var Watk = 0
var Matk = 0
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
	textz += "#b   萌新记得好好看说明哦，内含混沌强化详细介绍#k#n\r\n"
	textz += "#L0##b超级混沌强化说明\r\n";
	textz += "#L1##b#e开始强化#n#l\r\n";
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "超级混沌强化会消耗一次强化次数\r\n每次强化消耗#v"+costitem+"#x"+itemCount+"\r\n强化会随机增加(减少)0~30点属性，每条属性单独计算\r\n不会出现负属性\r\n"
			
			cm.sendOk(string1);
			cm.dispose();
		}else if (selection == 1) {
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
				var oldStr = item.getStr()
				if(item.getStr() != 0){
					random = Math.floor(Math.random() * +60);
					Str = random - 30
					if(item.getStr() + random <= 0){
						item.setStr(0);
					}else{
						item.setStr(item.getStr()*1+Str);
					}
				}
				var oldDex = item.getDex()
				if(item.getDex() != 0){
					random = Math.floor(Math.random() * +60);
					Dex = random - 30
					if(item.getDex() + random <= 0){
						item.setDex(0);
					}else{
						item.setDex(item.getDex()*1+Dex);
					}
				}
				var oldInt = item.getInt()
				if(item.getInt() != 0){
					random = Math.floor(Math.random() * +60);
					Int = random - 30
					if(item.getInt() + random <= 0){
						item.setInt(0);
					}else{
						item.setInt(item.getInt()*1+Int);
					}
				}
				var oldLuk = item.getLuk()
				if(item.getLuk() != 0){
					random = Math.floor(Math.random() * +60);
					Luk = random - 30
					if(item.getLuk() + random <= 0){
						item.setLuk(0);
					}else{
						item.setLuk(item.getLuk()*1+Luk);
					}
				}
				var oldWdef = item.getWdef()
				if(item.getWdef() != 0){
					random = Math.floor(Math.random() * +60);
					var Wdef = random - 30
					if(item.getWdef() + random <= 0){
						item.setWdef(0);
					}else{
						item.setWdef(item.getWdef()*1+Wdef);
					}
				}
				var oldMdef = item.getMdef()
				if(item.getMdef() != 0){
					random = Math.floor(Math.random() * +60);
					var Mdef = random - 30
					if(item.getMdef() + random <= 0){
						item.setMdef(0);
					}else{
						item.setMdef(item.getMdef()*1+Mdef);
					}
				}
				var oldMatk = item.getMatk()
				if(item.getMatk() != 0){
					random = Math.floor(Math.random() * +60);
					Matk = random - 30
					if(item.getMatk() + random <= 0){
						item.setMatk(0);
					}else{
						item.setMatk(item.getMatk()*1+Matk);
					}
				}
				var oldWatk = item.getWatk()
				if(item.getWatk() != 0){
					random = Math.floor(Math.random() * +60);
					Watk = random - 30
					if(item.getWatk() + random <= 0){
						item.setWatk(0);
					}else{
						item.setWatk(item.getWatk()*1+Watk);
					}
				}
				var oldHp = item.getHp()
				if(item.getHp() != 0){
					random = Math.floor(Math.random() * +60);
					var Hp = random - 30
					if(item.getHp() + random <= 0){
						item.setHp(0);
					}else{
						item.setHp(item.getHp()*1+Hp);
					}
				}
				var oldMp = item.getMp()
				if(item.getMp() != 0){
					random = Math.floor(Math.random() * +60);
					var Mp = random - 30
					if(item.getMp() + random <= 0){
						item.setMp(0);
					}else{
						item.setMp(item.getMp()*1+Mp);
					}
				}
				var oldAcc = item.getAcc()
				if(item.getAcc() != 0){
					random = Math.floor(Math.random() * +60);
					var Acc = random - 30
					if(item.getAcc() + random <= 0){
						item.setAcc(0);
					}else{
						item.setAcc(item.getAcc()*1+Acc);
					}
				}
				var oldAvoid = item.getAvoid()
				if(item.getAvoid() != 0){
					random = Math.floor(Math.random() * +60);
					var Avoid = random - 30
					if(item.getAvoid() + random <= 0){
						item.setAvoid(0);
					}else{
						item.setAvoid(item.getAvoid()*1+Avoid);
					}
				}
				var oldSpeed = item.getSpeed()
				if(item.getSpeed() != 0){
					random = Math.floor(Math.random() * +60);
					var Speed = random - 30
					if(item.getSpeed() + random <= 0){
						item.setSpeed(0);
					}else{
						item.setSpeed(item.getSpeed()*1+Speed);
					}
				}
				var oldJump = item.getJump()
				if(item.getJump() != 0){
					random = Math.floor(Math.random() * +60);
					var Jump = random - 30
					if(item.getJump() + random <= 0){
						item.setJump(0);
					}else{
						item.setJump(item.getJump()*1+Jump);
					}
				}
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				var a=item.getItemId();
				//cm.全服黄色喇叭("[法弗防具觉醒] : 玩家["+cm.getPlayer().getName()+"]将[法弗纳防具]觉醒为["+xnew[choose]+"]！！！即将称霸全岛！！！");
				var string = "混沌强化成功\r\n"
				if(oldStr != 0){
					string += "力量变化：【#b#e"+Str+"#n#k】\r\n"
				}
				if(oldDex != 0){
					string += "敏捷变化：【#b#e"+Dex+"#n#k】\r\n"
				}
				if(oldInt != 0){
					string += "智力变化：【#b#e"+Int+"#n#k】\r\n"
				}
				if(oldLuk != 0){
					string += "运气变化：【#b#e"+Luk+"#n#k】\r\n"
				}
				if(oldMatk != 0){
					string += "魔攻变化：【#b#e"+Matk+"#n#k】\r\n"
				}
				if(oldWatk != 0){
					string += "物攻变化：【#b#e"+Watk+"#n#k】\r\n"
				}
				if(oldMdef != 0){
					string += "魔防变化：【#b#e"+Mdef+"#n#k】\r\n"
				}
				if(oldWdef != 0){
					string += "物防变化：【#b#e"+Wdef+"#n#k】\r\n"
				}
				if(oldHp != 0){
					string += "生命变化：【#b#e"+Hp+"#n#k】\r\n"
				}
				if(oldMp != 0){
					string += "魔法变化：【#b#e"+Mp+"#n#k】\r\n"
				}
				if(oldAcc != 0){
					string += "命中变化：【#b#e"+Acc+"#n#k】\r\n"
				}
				if(oldAvoid != 0){
					string += "回避变化：【#b#e"+Avoid+"#n#k】\r\n"
				}
				if(oldSpeed != 0){
					string += "移速变化：【#b#e"+Speed+"#n#k】\r\n"
				}
				if(oldJump != 0){
					string += "跳跃变化：【#b#e"+Jump+"#n#k】\r\n"
				}
				var sum = Str + Dex + Int + Luk + Matk + Watk
				if(sum != 0){
					string += "#b#e六维变化合计#n#k：【#b#e"+sum+"#n#k】\r\n"
				}
				if(sum >= 30){
					cm.全服黄色喇叭("[超级混沌强化] : 玩家 "+cm.getPlayer().getName()+"的混沌卷轴大成功，六维一共增加了["+sum+"]，效果拔群")
				}
				if(sum <= -60){
					cm.getPlayer().setOneTimeLog("装备毁灭者成就");
					cm.getPlayer().dropMessage(5,"装备毁灭者成就达成");
				}
				if(sum <= -30){
					sum = 0 - sum
					cm.全服黄色喇叭("[超级混沌强化] : 玩家 "+cm.getPlayer().getName()+"的混沌卷轴黑成狗，六维一共减少["+sum+"]，简直教科书一样的毁号")
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


