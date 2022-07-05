var status = -1;
var mobid = 0;
var add = false;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {
            cm.sendOk("当前地图没有怪物");
            cm.dispose();
            return;
        }
        var selStr = "请选择你要查看怪物的爆率\r\n\r\n#b";
        var iz = cm.getMap().getAllUniqueMonsters().iterator();
        while (iz.hasNext()) {
            var zz = iz.next();
            selStr += "#L" + zz + "##o" + zz + "##l\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        mobid = selection;
        cm.sendNext(cm.checkDrop(cm.getPlayer(), selection, cm.getPlayer().isGM()));
    } else if (status == 2) {
        if (!cm.getPlayer().isGM()) {
            cm.dispose();
        }
        if (selection == 10000) {
            add = true;
            cm.sendGetText("请输入您要新增的物品代码。#k");
        } else if (selection == 10001) {
            cm.sendGetText("请输入您要更改的机率。\r\n#b更改方法:\r\n(若要改为100%请输入1000000,改为3%请输入30000..以此类推)#k");
        } else if (selection == 10002) {
            cm.DeleteDropData(mobid, itemid);
            status = 7;
            cm.sendYesNo("#b已成功删除此物品掉落!是否要重载怪物掉宝机率?\r\n(点选立即生效)");
        } else {
            status = 1;
            itemid = selection;
            cm.sendOk("#L10001#更改此物品爆率#l\r\n\r\n#L10002#删除此物品爆率#l");
        }
    } else if (status == 3) {
        if (add == true) {
            itemid = cm.getText();
            cm.sendGetText("请输入此物品要设定的掉落机率。\r\n#b新增方法:\r\n(若要改为100%请输入1000000,改为3%请输入30000..以此类推)#k");
        } else {
            cm.UpdateDropChance(cm.getText(), mobid, itemid);
            status = 7;
            cm.sendYesNo("#b已成功更改此物品掉落机率!是否要重载怪物掉宝机率?\r\n(点选立即生效)");
        }
    } else if (status == 4) {
        chance = cm.getText();
        cm.sendGetText("请输入此物品要设定的任务ID(编号)。\r\n#b设定方法:\r\n若掉落物有需求任务请填写任务ID\r\n若掉落物无需求任务请填写0#k");
    } else if (status == 5) {
        questid = cm.getText();
        cm.AddDropData(chance, mobid, itemid, questid);
        status = 7;
        cm.sendYesNoS("#b已成功新增此掉落物!您是否要重载怪物掉宝机率?\r\n(点选立即生效)", 3);
    } else if (status == 6) {
        cm.dispose();
    } else if (status == 8) {
        cm.processCommand("!reloaddrops");
        cm.sendOk("已重载怪物掉宝机率!");
        cm.dispose();
    }
}