/*      
 *  
 *  物品清理
 *  
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

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
            text = "\t\t\t\t#e- 便捷功能 -#n\r\n\r\n#b";
            text += "\t\t\t#L0#回收包裹内指定道具#l\r\n";
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
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        //text = "\t\t#e- 请选择要回收的道具类型 -#n\r\n\r\n#b";
        text = "\t\t#e- 请选择要回收的道具类型 -#n\r\n\r\n#b";
        text += "\t\t\t\t#L1#装备栏#l\r\n";
        text += "\t\t\t\t#L2#消耗栏#l\r\n";
        text += "\t\t\t\t#L4#其它栏#l\r\n";
        text += "\t\t\t\t#L3#设置栏#l\r\n";
        text += "\t\t\t\t#L5#特殊栏#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        var list = cm.getInventory(inventoryType).list();
        itemList = list.iterator();
        text = "\t\t#e- 请选择要回收的道具 -#n\r\n\r\n#b";
        var indexof = 1;
        var newItemList = Array();
        while (itemList.hasNext()) {
            var item = itemList.next();
            newItemList[item.getPosition()] = item.getItemId();
        }
        for (var key in newItemList) {
            text += "#L" + key + "##v" + newItemList[key] + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#e确定要回收#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendOk("回收成功，祝你游戏愉快~");
        status = 0;
    }
}