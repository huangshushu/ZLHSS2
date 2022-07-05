importPackage(Packages.tools.packet);
importPackage(Packages.server);
importPackage(Packages.tools);
var equiplist;
var stra = "";
var equip;
var equipItem;
var equiplist2;
var stra2 = "";
var equip2;
var equipItem2;
function start() {
    var Editing = false //false 开始
    if (Editing) {
        cm.sendOk("维修中");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("#b亲爱的 #k#h  ##e\r\n#b你是否要为你的现金装备转移属性，只有相同部位才可以转移哦。#k \r\n#L0##r我要转移属性#k#l");

    } else if (status == 1) {

        equiplist = cm.getCsEquipList();
        if (equiplist != null) {
            for (var i = 0; i < equiplist.size(); i++) {
                stra += "#L" + i + "##i" + equiplist.get(i).getItemId() + "##t" + equiplist.get(i).getItemId() + "##k\r\n";
            }
        }
        if (stra == "") {
            cm.sendOk("您目前没有装备可使用转移");
            cm.dispose();
            return;
        }
        cm.sendSimple("选择你想要转移属性的点状的装备。\r\n" + stra);


    } else if (status == 1) {
        equip = selection;
        equipItem = cm.getEquipStat(equiplist.get(equip).getPosition());
        if (!MapleItemInformationProvider.getInstance().isCash(equipItem.getItemId())) {
            cm.sendOk("该道具不是点装无法附魔。");
            cm.dispose();
            return;
        }
        equiplist2 = cm.getCsEquipList();
        if (equiplist2 != null) {
            for (var i = 0; i < equiplist2.size(); i++) {
                stra2 += "#L" + i + "##i" + equiplist2.get(i).getItemId() + "##t" + equiplist2.get(i).getItemId() + "##k\r\n";
            }
        }
        if (stra2 == "") {
            cm.sendOk("您目前没有装备可使用转移");
            cm.dispose();
            return;
        }
        cm.sendSimple("选择你想要转移属性的点状的装备。\r\n" + stra);

    } else if (status == 2) {
        equip2 = selection;
        equipItem2 = cm.getEquipStat(equiplist2.get(equip2).getPosition());
        if (!MapleItemInformationProvider.getInstance().isCash(equipItem2.getItemId())) {
            cm.sendOk("该道具不是点装无法附魔。");
            cm.dispose();
            return;
        }
        if (equipItem.getInventoryId() == equipItem.getInventoryId()) {
            cm.sendOk("同一个道具无法替换。");
            cm.dispose();
            return;
        }
        if (equipItem.getInventoryId() == equipItem2.getInventoryId()) {
            cm.sendOk("同一个道具无法替换。");
            cm.dispose();
            return;
        }

        if (cm.getEquipItemType(equipItem.getItemId()) == 0) {
            cm.sendOk("道具异常1");
            cm.dispose();
            return;
        }
        if (cm.getEquipItemType(equipItem2.getItemId()) == 0) {
            cm.sendOk("道具异常2");
            cm.dispose();
            return;
        }
        if (cm.getEquipItemType(equipItem.getItemId()) != cm.getEquipItemType(equipItem2.getItemId())) {
            cm.sendOk("不同类别的道具无法转移属性。");
            cm.dispose();
            return;
        }
        equipItem.setItemId(equipItem2.getItemId());
        cm.forceReAddItem(equipItem, 1);
        equipItem2.setItemId(equipItem.getItemId());
        cm.forceReAddItem(equipItem2, 1);
        cm.sendOk("转移成功！");
        cm.dispose();
        return;

    }
}
