/*
装备出售
 */

var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var newItemList = Array();
var beDeletedArr = new Array();
var listq = Array(
    1, 2, 3
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
            text = "您好，在我这里可以直接分解130~140的装备，分解装备可以获得#b点卷#k/#b抵用#k/#b蘑菇金币#k/#b核心碎片#k。\r\n\r\n";
            //text += "#b#L0#了解分解说明#l\r\n";
            text += "#b#L1#我要进行筛选普通分解（可以获得更多点卷）#l\r\n";
            text += "#b#L2#我要一键进行特殊分解（获得核心碎片/蘑菇金币/黄金枫叶）#l\r\n";
            cm.sendSimpleN(text, 716, 9001062);
        } else if (status == 1) {
            if (selection == -1)
                selection = 1;
            switch (selection) {
                case 0:
                    text = "#e#d分解说明#n#k：\r\n";
                    text += "130-139装备分解后可获得3个#v4031997#和1个#v4000313#\r\n";
                    text += "140-149装备分解后可获得3个#v4031997#和2个#v4000313#\r\n";
                    cm.sendOk(text);
                    cm.dispose();
                    break;
                case 1:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 请选择要出售的装备 -#n\r\n\r\n#b";
                    var indexof = 1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel < 130 || reqLevel > 159)
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
                    cm.sendSimple(text);
                    break;
                case 2:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel >= 130 && reqLevel < 149) {
                            if (cm.getInventory(1).getItem(128) != null) continue;
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(item.getPosition());
                        }
                    }
                    for (var key in newItemList) {
                        if (key == 128) continue;
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    if (key == null) {
                        cm.playerMessage(1, "抱歉 你没有这个类型的道具");
                        cm.dispose();
                        return;
                    }
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 2;
                    cm.sendOk(text);
                    //cm.sendYesNo(text);
                    //cm.dispose();
                    break;
            }
        } else if (status == 2) {
            if (typed == 1) {
                var item = cm.getInventory(inventoryType).getItem(selection);
                if (item == null) {
                    cm.sendOk("选择的装备错误，请重新对话。");
                    cm.dispose();
                    return;
                }
                deleteSlot = selection;
                deleteQuantity = item.getQuantity();
                var reqLevel = cm.getReqLevel(item.getItemId());
                itemq = getType(reqLevel);
                if (cm.getSpace(4) < 2) {
                    cm.sendOk("其他栏格子不足，请整理后分解。");
                    cm.dispose();
                    return;
                }
                text = "#e确定要分解#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？#k";
                cm.sendNextPrev(text);
            } else if (typed == 2) {
                itemq = getType(130);
                var count = beDeletedArr.length * itemq;
                var indexP = false;

                for (var key in beDeletedArr) {
                    if (beDeletedArr[key] > 127) {
                        indexP = true;
                    }
                }

                if (indexP) {
                    cm.sendOk("您要分解的装备不能放置在装备栏最后一格。");
                    cm.dispose();
                    return;
                }
                for (var key in newItemList) {
                    cm.removeSlot(1, key, 1);
                    //cm.worldMessage(newItemList[key]);
                }
                cm.gainNX(1, count * 150);
                cm.gainNX(2, count * 200);
                cm.gainVCraftCore(count); //核心
                cm.gainItem(4031997, count * 5); //星星
                text = "分解成功，获得了点卷和抵用每种" + count * 100 + "点!核心碎片" + count + "个!蘑菇金币" + count * 3 + "个!";
                cm.sendOk(text);
                cm.dispose();
            }
        } else if (status == 3) {
            if (typed == 1) {
                if (deleteSlot > 127) {
                    cm.sendOk("您要分解的装备不能放置在装备栏最后一格。");
                    cm.dispose();
                    return;
                }
                cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
                cm.gainNX(1, itemq * 50);
                cm.gainNX(2, itemq * 100);
                text = "分解成功，获得了点卷和抵用每种" + itemq * 300 + "点！啊   ";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    }
}

function getType(reqLevel) {
    if (reqLevel >= 130 && reqLevel < 139) {
        return listq[0];
    } else if (reqLevel >= 140 && reqLevel < 149) {
        return listq[1];
    } else if (reqLevel >= 150 && reqLevel < 159) {
        return listq[2];
    } else {
        return 0;
    }
}