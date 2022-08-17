/*
 便捷功能
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
            text = "#你好这里可以清理物品。\r\n\r\n";
            text += "#L0##e#r删除包裹内指定道具#l\r\n";
            text += "#L1##e#r删除包裹内批量道具#l\r\n";
            text += "#L2##e#r快速删除更多道具\r\n#l\r\n";
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
                    break;
                case 2:
                    deleteItemBySlot(selection);
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        
		
		if (selection==1){
			
			
        text += "\t#L2#消耗栏#l\r\n";
			
	}else if(selection==2){
                    cm.openNpc(9900004, 31);
	}else {
		
		
		text = "#e- 请选择要删除的道具类型 -#n\r\n#d#e";
        text += "\t#L1#装备栏#l\r\n";
        text += "\t#L2#消耗栏#l\r\n";
        text += "\t#L4#其它栏#l\r\n";
        text += "\t#L3#设置栏#l\r\n";
        text += "\t#L5#特殊栏#l\r\n";
        cm.sendSimple(text);}
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text = "#e- 请选择要删除的道具 -#n\r\n\r\n#b";
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
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#e确定要删除#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendOk("删除成功，祝你游戏愉快~");
        status = 0;
		cm.dispose();
    }
}