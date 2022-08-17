/*
 脚本制作：QQ 121418194
 价格合理，欢迎定制
 说明：下文中poss=10，是概率，10就是1/10，1就是1/1，就是100%
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var poss=5;//概率，10就是1/10，1就是1/1，就是100%

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
			text = "\t	#e欢迎来到#b回顾回忆冒险岛 #k#r道具博彩中心!#n\r\n";
			text += "\r\n\t#r玩法介绍 ：#k 一次下注一个物品进行赌博,有几率获得双倍物品的奖励,失败则消失物品.";
			text += "\r\n#L0##e#d我要使用指定道具下注#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    cm.openNpc(cm.getNpc(), 501);
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = "#e 请选择要下注的道具类型 #n\r\n#d#e";
        text += "\t#L1#装备类#l\r\n";
        text += "\t#L2#消耗类#l\r\n";
        text += "\t#L4#其它类#l\r\n";
        text += "\t#L3#设置类#l\r\n";
        text += "\t#L5#特殊类#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text = "#e 请选择您要下注的道具 #n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
		daoju = selection
		if(cm.getInventory(inventoryType).getItem(daoju).getExpiration() != -1) {
			cm.sendOk("限时装备不能用于下注.");
			cm.dispose();
			return;
		}
		if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b请保证每个栏位至少有空格,否则无法领取.");
			cm.dispose();
			return;
		}
        var item = cm.getInventory(inventoryType).getItem(daoju);
        text = "#e确定要使用#r#v" + item.getItemId() + "##z" + item.getItemId() + "# 1个#k进行下注吗？";
        cm.sendNextPrev(text);
    } else if (status == 4) {
		var item = cm.getInventory(inventoryType).getItem(daoju);
		var sj = Math.floor(Math.random()*poss);
		if(item.getItemId()>=2070000&&item.getItemId()<=2070020){
			cm.sendOk("这个道具不能进行该操作！");
			cm.dispose();
			return;
		}
		if(sj==1){
		cm.gainItem(item.getItemId(),1);
		cm.gainItem(item.getItemId(),1);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"『博彩公告』" + " : " + cm.getPlayer().getName() +" 恭喜他在道具博彩中，获得了双倍的道具回馈！",true).getBytes());
		cm.dispose();
		}else {
        cm.removeSlot(inventoryType, daoju, 1);
        cm.sendOk("很遗憾，你失败了！道具跟你说拜拜了，再来一次吧！");
        status = 0;
		cm.dispose();
		}
		cm.dispose();
    }
}
