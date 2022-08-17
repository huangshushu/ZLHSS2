importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var fbmc = "[混沌卷轴]-(强化系统)";//副本名称
var costitem = 4000463;
var itemCount = 500;
var card = 100
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
	if(cm.haveItem(3700101,1)){
		itemCount = itemCount - card
	}
	textz = "#k\t\t\t #r#v4030001#" + fbmc + "#v4030001##k#l\r\n\r\n";
	textz += "#b   萌新记得好好看说明哦，内含无限金锤详细介绍#k#n\r\n每次金锤消耗#v"+costitem+"#x"+itemCount+"\r\n"
	textz += "#L0##b无限金锤说明\r\n";
	textz += "#L1##b#e开始强化#n#l\r\n";
	if(cm.haveItem(3700101,1)){
		textz +="      特权月卡生效，#v"+costitem+"#消耗数量减少"+card+"！"
	}
	 
	cm.sendSimple (textz);   
	}else if (status == 1) {
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
		
		if(selection == 0) {
			var string1 = "无限金锤可以无限增加强化次数（剩余次数不能超过10）\r\n每次金锤消耗#v"+costitem+"#x"+itemCount+""
			if(cm.haveItem(3700101,1)){
				string1 +="(已计算特权月卡)"
			}
			cm.sendOk(string1);
			cm.dispose();
		}else if (selection == 1) {
			if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null){
				cm.sendOk("你的装备栏第一格没有装备，不能进行此操作!..");
				cm.dispose();
				return;
			}
			var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
			if (ii.isCash(item.getItemId()) == true) {
                cm.sendOk("商城点卷物品暂不支持.");
                cm.dispose();
				return
			}
			var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			if(cm.haveItem(costitem, itemCount)){
				cm.gainItem(costitem, -itemCount)
				if(item.getUpgradeSlots() < 10){
					item.setUpgradeSlots((item.getUpgradeSlots() + 1));
				}else{
					cm.sendOk("强化次数还有很多呢，用掉一些再来吧");
					cm.dispose();
					return
				}
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
				var a=item.getItemId();
				var string = "增加强化次数成功\r\n"
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


