var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
1262016, //ESP
	1542063, // 法弗纳皇刀正宗 - (无描述)
	1212063, // 法弗纳魔力源泉杖, // (无描述)
	1222058, // 法弗纳天使手铳, // (无描述)
	1232057, // 法弗纳死亡使者, // (无描述)
	1242060, // 法弗纳精神之刃, // 鲁塔比斯套装(飞侠)专用武器
	1242061, // 法弗纳精神之刃, // 鲁塔比斯套装(海盗)专用武器
	1302275, // 法弗纳银槲之剑, // (无描述)
	1312153, // 法弗纳双刃切肉斧, // (无描述)
	1412135, // 法弗纳战斗切肉斧, // (无描述)
	1322203, // 法弗纳戈耳迪锤, // (无描述)
	1332225, // 法弗纳大马士革剑, // (无描述)
	1342082, // 法弗纳急速之刃, // (无描述)
	1362090, // 法弗纳洞察手杖, // (无描述)
	1372177, // 法弗纳魔力夺取者, // (无描述)
	1382208, // 法弗纳魔冠之杖, // (无描述)
	1402196, // 法弗纳忏悔之剑, // (无描述)
	1422140, // 法弗纳闪电锤, // (无描述)
	1432167, // 法弗纳贯雷枪, // (无描述)
	1442223, // 法弗纳半月宽刃斧, // (无描述)
	1452205, // 法弗纳追风者, // (无描述)
	1462193, // 法弗纳风翼弩, // (无描述)
	1472214, // 法弗纳危险之手, // (无描述)
	1482168, // 法弗纳巨狼之爪, // (无描述)
	1492179, // 法弗纳左轮枪, // (无描述)
	1522094, // 法弗纳双风翼弩, // (无描述)
	1532098, // 法弗纳荣耀炮, // (无描述)
	1252015 // 法弗纳北极星魔法棒, // (无描述)
);
var needItemList = Array(
	Array(4310030, 1000),
	Array(4001165, 3000),
	Array(4033356, 30),
	Array(4021012, 10),
	Array(4021011, 10),
	Array(4021010, 10),
	Array(4000082, 200),
	Array(4000124, 20),
	Array(4310015, 3),
	Array(4021019, 1)
);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
            var selStr = "#d我这里可以制作150级武器，请选择想要制作的装备：#n#k\r\n";    
			for(var key in weaponList) {
				var item = weaponList[key];
				selStr += "#r#L"+key+"##i"+item+":#";
				if ((key*1+1)%5 == 0) {
					selStr += "\r\n";
				}
			}
        	cm.sendSimple(selStr);	
		} else if (status == 1) {
			weaponId = selection;
			var text = "- #e#d#z"+weaponList[weaponId]+"#需要的材料：#n#k\r\n#b#t4001165##k#r可以通过转蛋机获得哦，如果在阿里安特竞技场能够表现出色，也可以额外获得哦！~\r\n\r\n#b";
			for(var key in needItemList) {
				var itemName = cm.getItemName(needItemList[key][0]);
				text+=itemName;
				for(var i=0; i<=25-itemName.getBytes().length; i++)
				{
					text+=" ";
				}
				var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
				var color="#g";
				if (currentItemQuantity<needItemList[key][1])
					color="#r";
				text+=color+currentItemQuantity+" / "+needItemList[key][1]+" 个#b\r\n";
			}
			text+="#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k";
			cm.sendYesNo(text);
		} else if (status == 2) {
			flag=true;
			for(var key in needItemList) {
				var itemId = needItemList[key][0];
				var itemQuantity = needItemList[key][1];
				if (!cm.haveItem(itemId, itemQuantity))
				{
					flag=false;
					break;
				}
			}
            if (flag) {
				if (cm.getSpace(1)<1) {
					cm.sendOk("装备栏空间不足，请整理后重新制作！");
					cm.dispose();
					return;
				}
				for(var key in needItemList) {
					var itemId = needItemList[key][0];
					var itemQuantity = needItemList[key][1];
					cm.gainItem(itemId, -itemQuantity);
				}
				cm.gainItem(weaponList[weaponId], 1);
				cm.sendOk("恭喜您合成#z"+weaponList[weaponId]+"#一把.");
				cm.worldSpouseMessage(0x20, "[任务公告] : 恭喜 " + cm.getChar().getName() + " 制作了一件 <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("材料不足，无法完成制作！");
				cm.dispose();
			}
		}
	}
}