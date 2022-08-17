/*
装备分解
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status;
var text;
var cost;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var beDeletedArr = new Array();
var giftList = new Array(
	//分解后可获得的道具与数量、几率，最大值500
	Array(4033356, 1, 100), 
	Array(4001465, 1, 500),
	Array(4001465, 2, 300),
	Array(4001465, 5, 100),
	Array(4001839, 1, 500),
	Array(4001839, 5, 500),
	Array(4001839, 10, 500),
	Array(4001832, 1, 300),
	Array(4001832, 5, 300),
	Array(4001832, 10, 300),
	Array(2614006, 1, 500),
	Array(2614006, 2, 500),
	Array(2614006, 3, 500),
	Array(2431174, 1, 500),
	Array(2431174, 5, 500),
	Array(2431174, 10, 500),
	Array(2614008, 1, 100)
);
var finalItemList = new Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text ="#d#e├───────── 分解中心 ────────┤#n#k\r\n\r\n";
            //text += "#b#L0#"+icon+" 了解分解说明#l\r\n";
			//text += "#b#L1#"+icon+" 分解指定装备#l\r\n";
			text += "#b#L2#"+icon+" #b#e批量分解#r130-149#k#b装备#k#n【每件分解需要#r80W#k金币】#l\r\n\r\n\r\n";
			text += "\t\t\t#e#r130-149#k装备分解可随机获得#n#k\r\n";
			text +="\t\t\t#v4033356##v4001465##v4001839##v4001832##v2614008##v2431174#\r\n";
			text +="\t\t#d#e【认真核实装备等级，分错一律自己负责】\r\n";
            cm.sendSimple(text);
		} else if (status == 1){
			if (selection == -1)
				selection = 1;
			switch(selection) {
				case 0:
					text = "#e#d分解说明#n#k：\r\n";
					text += "只有130以上的装备可以进行分解。\r\n";
					text += "130-139装备分解后可获得2个#v4310129#\r\n";
					text += "140-149装备分解后可获得5个#v4310129#\r\n";
					text += "150-159装备分解后可获得20个#v4310129#\r\n";
					cm.sendOk(text);
					cm.dispose();
				break;
				case 1:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- 请选择要分解的装备 -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel < 130 || reqLevel > 150)
							continue;
						newItemList[item.getPosition()]=item.getItemId();
					}
					for(var key in newItemList) {
						text += "#L" + key + "##v" + newItemList[key] + "#";
						if (indexof > 1 && indexof % 5 == 0) {
							text += "\r\n";
						}
						indexof++;
					}
					if (newItemList.length <= 0) {
						cm.sendSimple("您没有可以分解的装备。");
						status = -1;
						return;
					}
					typed=1;
					cm.sendSimple(text);
				break;
				case 2:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel >= 130 && reqLevel <149) {
							newItemList[item.getPosition()]=item.getItemId();
							beDeletedArr.push(item.getPosition());
						}
					}
					for(var key in newItemList) {
						text += "#v" + newItemList[key] + "#";
						indexof++;
					}
					cost = beDeletedArr.length * 800000;
					
					text+="\r\n#r#e您需要花费#b"+cost+"#r游戏币来分解以上装备\r\n#d#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
					typed=2;
					if (newItemList.length <= 0) {
						cm.sendSimple("您没有可以分解的装备。");
						status = -1;
						return;
					}
					cm.sendYesNo(text);
				break;
			}
		} else if (status == 2) {
			if (typed==1) {
				var item = cm.getInventory(inventoryType).getItem(selection);
				deleteSlot = selection;
				deleteQuantity = item.getQuantity();
				var reqLevel = cm.getReqLevel(item.getItemId());
				itemq = getType(reqLevel);
				if (cm.getSpace(4)<2) {
					cm.sendOk("其他栏格子不足，请整理后分解。");
					cm.dispose();
					return ;
				}
				text = "#e确定要分解#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？#k";
				cm.sendNextPrev(text);
			} else if (typed==2) {
				if (cm.getMeso() < cost) {
					cm.sendOk("您的游戏币不足，无法分解！");
					cm.dispose();
					return;
				}
				for(var key in beDeletedArr) {
					cm.removeSlot(1, beDeletedArr[key], 1);
					getItem();
				}
				text = "分解成功！恭喜获得如下物品：\r\n";
				for(var i in finalItemList) {
					if (finalItemList[i] == null || finalItemList[i] == 0)
						continue;
					cm.gainItem(i, finalItemList[i]);
					text += "#v"+i+"##rx"+finalItemList[i]+" ";
				}
				cm.gainMeso(-cost);
				finalItemList = [];
				//text="分解成功！";
				cm.sendOk(text);
				cm.dispose();
			}
		} else if (status == 3) {
			if (typed==1) {
				cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
				//cm.gainItem(4001832, itemq);
				cm.gainItem(4310129, itemq);
				text="分解成功，获得了#v4310129#"+itemq+"个";
				cm.sendOk(text);
				cm.dispose();
			}
		}
    }
}

function getItem() {
	var chance = Math.floor(Math.random()*500);
	var finalItem = new Array();
	for(var i in giftList) {
		//java.lang.System.out.println(i);
		if (giftList[i][2] >= chance) {
			finalItem.push(giftList[i]);
		}
	}
	var randomId = Math.floor(Math.random() * finalItem.length);
	var itemId = finalItem[randomId][0];
	if (finalItemList[itemId] == null)
		finalItemList[itemId] = 1;
	else
		finalItemList[itemId]+=finalItem[randomId][1];
}