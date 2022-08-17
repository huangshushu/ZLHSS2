var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 红色 = "#fEffect/CharacterEff/1114000/2/0#";
var status = 0;
var fstype = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {

            var textz = "#r使用水晶可以在我这里强化装备.有几率失败.祝您好运! #k\r\n注意:装备请放第一格，#r强化成功会扣除升级次数!#k\r\n#r无论是否成功都会消耗 1 张#v2049100#\r\n";

            textz += "------------------------------------------------------\r\n";
			textz += "#b#L4#" + 红色 + "使用10个#z4005004##v4005004#增加3点全属性2点攻击/魔力\r\n";
			
            textz += "#b#L0#" + 红色 + "使用6个#z4005000##v4005000#增加装备3点力量2点攻击\r\n";

            textz += "#b#L1#" + 红色 + "使用6个#z4005001##v4005001#增加装备3点智力2点魔力\r\n";

            textz += "#b#L2#" + 红色 + "使用6个#z4005002##v4005002#增加装备3点敏捷2点攻击\r\n";

            textz += "#b#L3#" + 红色 + "使用6个#z4005003##v4005003#增加装备3点运气2点攻击\r\n";

            

            //textz += "#r#L5#" + 红色 + "使用#v4031891#金币和#v4001126#枫叶提高装备可强化次数\r\n           #r升级失败会扣除少量手续费!\r\n\r\n";

            //textz += "#r#L6#" + 红色 + "使用#v4031891#金币和#v4000463#国庆币提高装备可强化次数\r\n           #r该选项100%成功!\r\n";

            //textz += "#r#L5#" + 蓝色角点 + "用1个鱼王象征增加装备100HP（100%成功，不减回合）\r\n";

            //textz += "#r#L6#" + 蓝色角点 + "用1个扎昆象征增加装备200HP（100%成功，不减回合）\r\n";

            //textz += "#r#L7#" + 蓝色角点 + "用1个黑龙之角增加装备四维10（100%成功，扣除回合）\r\n";

            //textz += "#r#L8#" + 蓝色角点 + "用1个时间之泪增加装备攻击10（100%成功，扣除回合）\r\n";


            cm.sendSimple(textz);

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------
        } else if (status == 1) {

            if (selection == 0) { //力量水晶
                fstype = 0;
                cm.sendNext("你目前选择的是用力量水晶增加装备3点力量2点攻击（有几率失败，失败退回3个，成功了回合减1）\r\n#r强化的装备为装备栏第一格，请仔细确认！强化错装备概不负责");

            } else if (selection == 1) { //智慧水晶
                fstype = 1;
                cm.sendNext("你目前选择的是用智慧水晶增加装备3点智力2点魔力（有几率失败，失败退回一半，成功了回合减1）\r\n#r强化的装备为装备栏第一格，请仔细确认！强化错装备概不负责");

            } else if (selection == 2) { //敏捷水晶
                fstype = 2;
                cm.sendNext("你目前选择的是用敏捷水晶增加装备3点敏捷2点攻击（有几率失败，失败退回一半，成功了回合减1）\r\n#r强化的装备为装备栏第一格，请仔细确认！强化错装备概不负责");

            } else if (selection == 3) { //幸运水晶
                fstype = 3;
                cm.sendNext("你目前选择的是用幸运水晶增加装备3点运气2点攻击（有几率失败，失败退回一半，成功了回合减1）\r\n#r强化的装备为装备栏第一格，请仔细确认！强化错装备概不负责");

            } else if (selection == 4) { //黑暗水晶
                fstype = 4;
                cm.sendNext("你目前选择的是用黑暗水晶增加装备3点全属性2点攻击/魔力（有几率失败，失败退回一半，成功了回合减1）\r\n#r强化的装备为装备栏第一格，请仔细确认！强化错装备概不负责");

            } else if (selection == 5) { //象征
                cm.dispose();
                //cm.openNpc(2131006,101);
            } else if (selection == 6) { //象征
                cm.dispose();
                //cm.openNpc(2131006,102);
            } else if (selection == 7) { //黑龙角
                fstype = 7;
                cm.sendNext("你目前选择的是用黑龙之角增加装备四维各10.加工费2000点卷（100%成功，回合减1）");

            } else if (selection == 8) { //黑龙角
                fstype = 8;
                cm.sendNext("你目前选择的是用时间之石增加装备攻击、魔法力10.加工费2000点卷（100%成功，回合减1）");
            }

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------

        } else if (status == 2) {

            if (fstype == 0) { //力量母矿
                fstype = 0;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();

                }
            }

            if (fstype == 1) { //智慧母矿
                fstype = 1;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 2) { //敏捷母矿
                fstype = 2;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 3) { //运气母矿
                fstype = 3;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }
            if (fstype == 9) { //运气母矿
                fstype = 9;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 4) {
                fstype = 4;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 5) { //运气母矿
                fstype = 5;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 6) { //运气母矿
                fstype = 6;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 7) { //运气母矿
                fstype = 7;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            if (fstype == 8) { //运气母矿
                fstype = 8;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                }
            }

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------
            if (fstype == 0) {
                if (!cm.haveItem(4005000, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("请带来#r 6 #k个#z4005000##v4005000# 和 1 #k个#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setStr(item.getStr() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005000, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                        cm.serverNotice("『水晶强化』：恭喜" + cm.getChar().getName() + "        使用6个力量水晶为装备增加3点力量2点攻击");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005000, -6);
                        cm.gainItem(4005000, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("强化失败，退回你3个力量水晶");
                    }
					status = -1;
                }

            } else if (fstype == 1) {
                if (!cm.haveItem(4005001, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("请带来#r 6 #k个#z4005001##v4005001# 和 1 #k个#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 1) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setInt(item.getInt() + 3);
                        item.setMatk(item.getMatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005001, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                        cm.serverNotice("『水晶强化装备』：恭喜" + cm.getChar().getName() + "        使用6个智慧水晶为装备增加3点智力2点魔力");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005001, -6);
                        cm.gainItem(4005001, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("强化失败，退回你3个智慧水晶");
                    }
					status = -1;
                }

            } else if (fstype == 2) {
                if (!cm.haveItem(4005002, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("请带来#r 6 #k个#z4005002##v4005002# 和 1 #k个#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setDex(item.getDex() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005002, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                        cm.serverNotice("『水晶强化装备』：恭喜" + cm.getChar().getName() + "        使用6个敏捷水晶为装备增加3点敏捷2点攻击");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005002, -6);
                        cm.gainItem(4005002, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("强化失败，退回你3个敏捷水晶");
                    }
					status = -1;
                }

            } else if (fstype == 3) {
                if (!cm.haveItem(4005003, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("请带来#r 6 #k个#z4005003##v4005003# 和 1 #k个#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setLuk(item.getLuk() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005003, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                        cm.serverNotice("『水晶强化装备』：恭喜" + cm.getChar().getName() + "        使用6个幸运水晶为装备增加3点运气2点攻击");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005003, -6);
                        cm.gainItem(4005003, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("强化失败，退回你3个运气水晶");
                    }
					status = -1;
                }

            } else if (fstype == 4) {
                if (!cm.haveItem(4005004, 10) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("请带来#r 10 #k个#z4005004##v4005004# 和 1 #k个#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("升级次数没了，无法强化!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 1) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setStr(item.getStr() + 3);
                        item.setDex(item.getDex() + 3);
                        item.setInt(item.getInt() + 3);
                        item.setLuk(item.getLuk() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setMatk(item.getMatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005004, -10);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                        cm.serverNotice("『水晶强化装备』：恭喜" + cm.getChar().getName() + "        使用10个黑暗水晶为装备增加3点全属性2点攻击");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005004, -10);
                        cm.gainItem(4005004, 5);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("强化失败，退回你5个黑暗水晶");
                    }
					status = -1;
                }

            } else if (fstype == 5) {
                if (!cm.haveItem(4001085, 1)) {
                    cm.sendOk("请带来#r 1 #k个#z4001085##v4001085#");
                    cm.dispose();
                } else if (cm.getMeso() <= 5000000) {
                    cm.sendOk("请带来500万加工费");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setHp(item.getHp() + 100);
                    //item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    cm.gainItem(4001085, -1);
                    cm.gainMeso(-5000000);
                    cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.serverNotice("『象征强化装备』：恭喜" + cm.getChar().getName() + "        使用1个鱼王象征为装备增加100HP");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("强化失败，退回你5个运气母矿");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 6) {
                if (!cm.haveItem(4001083, 1)) {
                    cm.sendOk("请带来#r 1 #k个#z4001083##v4001083#");
                    cm.dispose();
                } else if (cm.getMeso() <= 5000000) {
                    cm.sendOk("请带来500万加工费");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setHp(item.getHp() + 200);
                    //item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-10000000);
                    cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.serverNotice("『象征强化装备』：恭喜" + cm.getChar().getName() + "        使用1个扎昆象征为装备增加200HP");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("强化失败，退回你5个运气母矿");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 7) {
                if (!cm.haveItem(4001430, 1)) {
                    cm.sendOk("请带来#r 1 #k个#z4001430##v4001430#");
                    cm.dispose();
                } else if (cm.getPlayer().getNX() <= 2000) {
                    cm.sendOk("请带来2000点卷");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    item.setStr(item.getStr() + 10); //给予装备10力量
                    item.setDex(item.getDex() + 10); //给予装备10敏捷
                    item.setInt(item.getInt() + 10); //给予装备10智力
                    item.setLuk(item.getLuk() + 10); //给予装备10运气
                    cm.gainItem(4001430, -1);
                    cm.gainNX(-2000);
                    cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.serverNotice("『黑龙之角强化装备』：恭喜" + cm.getChar().getName() + "        使用1个黑龙之角为装备增加四维各10");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("强化失败，退回你5个运气母矿");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 8) {
                if (!cm.haveItem(4021010, 1)) {
                    cm.sendOk("请带来#r 1 #k个#z4021010##v4021010#");
                    cm.dispose();
                } else if (cm.getPlayer().getNX() <= 2000) {
                    cm.sendOk("请带来2000点卷");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("升级次数没了，无法强化!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    item.setWatk(item.getWatk() + 10);
                    item.setMatk(item.getMatk() + 10);
                    cm.gainItem(4021010, -1);
                    cm.gainNX(-2000);
                    cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.serverNotice("『黑龙之角强化装备』：恭喜" + cm.getChar().getName() + "        使用1个时间之石为装备增加攻击10");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("强化失败，退回你5个运气母矿");
                    //}
					status = -1;
                    //cm.dispose();
                }

            }
        }
    }
}