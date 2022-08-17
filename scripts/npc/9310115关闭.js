var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑

var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var Care;
var typed = 0;
var beDeletedArr = new Array();
var listq = Array(
	1, 3, 5, 8
);
var itemq = 0;

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
            inventoryType = 1;
            var list = cm.getInventory(inventoryType).list();
            itemList = list.iterator();
            text = "\t\t#r　" + icon4 + " 请选择解除锁定的道具 " + icon4 + "#n\r\n\r\n#b";
            var indexof = 1;
            var newItemList = Array();
            while (itemList.hasNext()) {
                var item = itemList.next();
                if (cm.isCash(item.getItemId()))
                    continue;
                var reqLevel = cm.getReqLevel(item.getItemId());
                if ( reqLevel < 30)
                    continue;
                newItemList[item.getPosition()] = item.getItemId();
            }
            for (var key in newItemList) {
                text += "#L" + key + "##v" + newItemList[key] + "#";
                if (indexof > 1 && indexof % 5 == 0) {
                    text += "\r\n";
                }
                indexof++;
            }
            typed = 1;
            cm.sendSimpleS(text, 2);
        } else if (status == 1) {
            var item = cm.getInventory(inventoryType).getItem(selection);
            deleteQuantity = item.getQuantity(); 
            Care = item;
            text = "#b确定将 #r#v" + item.getItemId() + "# #z" + item.getItemId() + "# [ " + deleteQuantity + " ] 个 #b道具进行解锁吗？#k";
            cm.sendNextPrev(text);
        } else {
            if (Care.getFlag() & 0x01 == 0x01) {
                Care.setFlag(Care.getFlag() & ~0x01);
                Care.setExpiration(-1);
            }
            cm.getPlayer().forceUpdateItem(Care);
            cm.sendOkS("恭喜你,解锁成功", 2);
            cm.gainItem(2432220, -1);
            cm.dispose();
        }
    }
}