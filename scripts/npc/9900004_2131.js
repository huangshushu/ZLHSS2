1var status = 0;
var fstype = 0;
var itemid = 4251202; //玛亚的爱的见证
var itemnum = 2; //玛亚的爱的见证的数量
var types = new Array("装备栏", "消耗栏", "任务栏", "杂物栏", "现金栏");
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {

            cm.sendNext("伟大的#b#h ##k,我的ID是：" + cm.getNpc() + ".\r\n#b如果你有#v4251202#*2 我可以帮你增加一次装备强化次数");

        } else if (status == 1) {
            cm.sendSimple("我是本服唯一的装备强化次数添加NPC，请将需要强化的装备放置第一格#r（最高上线125次）。#e\r\n#b#L0#增加装备砸卷次数#l");
        } else if (status == 2) {
            if (selection == 0) {
                fstype = 1;
                cm.sendNext("你目前选择的是#r增加装备砸卷次数#k,这项功能目前需要" + itemnum + "个#z" + itemid + "#,#b#k,%100成功,.");
            } else if (selection == 1) {
                var a = "你好,请问您要清空哪一项呢,目前可以免费的哟：\r\n#b"
                for (var i = 0; i < types.length; i++) {
                    a += "\r\n#L" + i + "#" + types[i] + "";
                }
                cm.sendSimple(a);
                fstype = 2;
            }

        } else if (status == 3) {
            if (fstype == 1) {
                fstype = 3;
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "#吗？\r\n #rps:如果是那就继续点击下一步程序..");
                }

            }
        } else if (status == 4) {
            if (fstype == 3) {
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                if (item.getUpgradeSlots() >= 125) {
                    cm.sendOk("对不起,最高只能提升125次!");
                    cm.dispose();
                } else {
                    if (cm.haveItem(itemid, itemnum)) {
                        var statup = new java.util.ArrayList();
                        item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.gainItem(itemid, -itemnum);
                    cm.worldMessage("[装备提升]：恭喜[" + cm.getChar().getName() + "]使用强化水晶为装备提升了1次砸卷次数");
                        cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
                        cm.dispose();
                    } else {
                        cm.sendOk("对不起,你没有足够的#z" + itemid + "#..");
                        cm.dispose();
                    }
                }

            }
        }
    }
}