var status = 0;
var fstype = 0;
var price = 500000; //砸卷价格
var types = new Array("装备栏", "消耗栏", "任务栏", "杂物栏", "现金栏");
var chance3 = (Math.floor(Math.random() * 8) + 1);

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
            cm.sendSimple("\t你好伟大的#b#h ##k,我是本服管理装备的NPC\r\n\r\n   #d#e注意：同一个装备砸卷次数不要超过#r100#d次\r\n#r#e\r\n#L2##r<高级强化+1>#v4000463##k#z4000463# #r增加装备砸卷次数\r\n");
        } else if (status == 1) {
            if (selection == 0) { 
                fstype = 1;
                cm.sendNext("你目前选择的是#r<普通强化+3>#k\r\n这项功能目前需要手续费用2500点券和200W冒险币\r\n#r注意：50%机率成功#k,失败仅收取手续费100W");
           
            } else if (selection == 2) { //黄金枫叶
          	  cm.openNpc(9900004, 96);
            } else if (selection == 4) { //梦旅币
                fstype = 5;
                cm.sendNext("你目前选择的是#r随即增加装备全属性(20~50)#k\r\n这项功能目前需要手续费用2000梦旅币\r\n#b注意,这是100%机率成功哟#k,当然就不用担心失败啦~\r\n什么是随即增加全属性呢？就是选择要加的装备后，会随即给这装备加全属性随机一项(20~50)，全凭人品哟");
            } else if (selection == 5) { //狼人脚趾
                fstype = 6;
                cm.sendNext("你目前选择的是#r随即增加装备全属性(10~20)#k\r\n这项功能目前需要手续费用1E冒险币+100个白狼人脚趾\r\n#b注意：50%机率成功#k,当然失败会返回你一半的手续费费用\r\n什么是随即增加全属性呢？就是选择要加的装备后，会随即给这装备加全属性随机一项(10~20)，全凭人品哟\r\n#r提示#k：#b白狼人脚趾#k可通过击杀#g白狼人#k掉落");
            } else if (selection == 6) {
                cm.dispose();
                cm.openNpc(9900000, 1);
            } else if (selection == 105) {
                cm.dispose();
                cm.openNpc(9900000, 3);
            } else if (selection == 245) {
                cm.dispose();
                cm.openNpc(9310072,2);
            } else if (selection == 7) { //装备属性置换
                fstype = 7;
                cm.sendNext("你目前选择的是#r装备属性置换#k\r\n这项功能目前需要手续费用#e#r8888梦旅币#b#l\r\n#b注意,这是100%机率成功哟#k,当然就不用担心失败啦~\r\n什么是装备属性置换呢？\r\n就是把#e#r装备栏的第一格的放你不想要的属性装备\r\n第二格放你需要带的装备#k\r\n第一格的装备就会消失!属性会移到第二格子装备上\r\n\r\n#e#r本服暂不支持脸饰 徽章 草莓护肩 和商城点卷装备 消失不负责#b#l");
            }
        } else if (status == 2) {
            if (fstype == 1) { //正义币
                fstype = 13;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
            }
            if (fstype == 2) { //清理装备
                if (selection == 1) {
                    var it;
                    var texts = "#r---------------请选择您要清理的装备----------------#b\r\n";
                    var inv = cm.getInventory(1);
                    for (var i = 1; i <= 96; i++) {
                        it = inv.getItem(i);
                        if (it != null) {
                            texts += "#L" + i + "#装备图片:#v" + it.getItemId() + "# 装备名称及属性:#g#z" + it.getItemId() + "##l#b\r\n"
                        }
                    }
                    fstype = 101;
                    cm.sendSimpleS(texts, 2);
                } else if (selection == 2) {
                    var it;
                    var texts = "#r---------------请选择您要清理的装备----------------#b\r\n";
                    var inv = cm.getInventory(5);
                    for (var i = 1; i <= 96; i++) {
                        it = inv.getItem(i);
                        if (it != null) {
                            texts += "#L" + i + "#装备图片:#v" + it.getItemId() + "# 装备名称及属性:#g#z" + it.getItemId() + "##l#b\r\n"
                        }
                    }
                    fstype = 102;
                    cm.sendSimpleS(texts, 2);
                }
            }
            if (fstype == 3) { //黄金枫叶
                fstype = 14;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
            }
            if (fstype == 4) { //彩色枫叶
                fstype = 15;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
            }
            if (fstype == 5) { //梦旅币
                fstype = 16;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
            }
            if (fstype == 6) { //脚趾
                fstype = 17;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("商城点卷物品暂不支持.");
                    cm.dispose();
                } else {
                    cm.sendNext("请把装装备放在装备窗口的第一格，否则你将不能成功.\r\n请确认一下你要砸的装备是：#v" + item.getItemId() + "##z" + item.getItemId() + "#吗？");
                }
            }
            if (fstype == 7) { //属性置换
                fstype = 18;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var item2 = cm.getInventory(1).getItem(2);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("对不起,你装备栏第一格没有装备!");
                    cm.dispose();
                } else if (item2 == null) {
                    cm.sendOk("对不起,你装备栏第二格没有装备!");
                    cm.dispose();
                } else if (cm.getSpace(1) < 2) {  
                   cm.sendOk("#r - 属性置换 >> #k\r\n\r\n属性置换失败，您的装备栏小于2个。");  
                    cm.dispose(); 
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("暂不支持商城物品.");
                    cm.dispose();           
                } else {
                    cm.sendNext("你确认你是要把#r#z" + item.getItemId() + "##k的属性替换到#b#z" + item2.getItemId() + "##k上面吗,替换成功后#r#z" + item.getItemId() + "##k将消失.");
                }
            }
        } else if (status == 3) {
            if (fstype == 13) {
                if (cm.getMeso() < 500000 ||cm.getPlayer().getCSPoints(1) < 5000) {
                    cm.sendOk("对不起,您没有足够点券或冒险币");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		    cm.gainNX(-2500);
                    cm.gainMeso(-2000000);
                    cm.sendOk("恭喜你成功拉，快快看你的包裹吧！");
                    cm.worldMessage("[装备提升]：恭喜[" + cm.getChar().getName() + "]在装备管理处，为武器提升了1次砸卷次数");
                    cm.dispose();
                } else {
                    cm.gainMeso(-2000000);
                    cm.sendOk("真遗憾，升级失败，扣除手续费10W冒险币");
                }
                cm.dispose();
                return;
            }
            if (fstype == 16) {
                if (cm.getMeso() < price || cm.haveItem(4000313, 100) == false) {
                    cm.sendOk("对不起,你没有足够的冒险币,或者是没有足够的#z4310003#");
                    cm.dispose();
                    return;
                }
                var chance = Math.floor(Math.random() * 2);
                if (chance == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() + 7));
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainMeso(-price);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("恭喜你成功拉，快快看你的包裹吧！");
                    cm.worldMessage("[武器升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用黄金枫叶为武器提升了1次砸卷次数");
                    cm.dispose();
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4310003, -1);
                    cm.sendOk("真遗憾，升级失败");
                }
                cm.dispose();
                return;
            }

            if (fstype == 17) {
                if (cm.getMeso() < price || cm.haveItem(4000054, 100) == false) {
                    cm.sendOk("对不起,你没有足够的冒险币,或者是没有足够的#z4000054#");
                    cm.dispose();
                    return;
                }
                var chance1 = Math.floor(Math.random() * 2);
                if (chance1 == 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = Packages.server.MapleItemInformationProvider.getInstance();
                    var chance = Math.floor(Math.random() * 100);
                    var lvsj = Math.floor(Math.random() * 10) + 10;
                    cm.gainMeso(-price);
                    cm.gainItem(4000054, -100);
                    if (chance <= 5) { //watk
                        item.setWatk(item.getWatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k攻击.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的攻击");
                    } else if (chance > 2 && chance <= 4) { //matk
                        item.setMatk(item.getMatk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k魔攻.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的魔法攻击");
                    } else if (chance > 5 && chance <= 10) { //str
                        item.setStr(item.getStr() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k力量.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的力量");
                    } else if (chance > 11 && chance <= 20) { //dex
                        item.setDex(item.getDex() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k敏捷.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的敏捷");
                    } else if (chance > 21 && chance <= 50) { //luk
                        item.setInt(item.getInt() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k智力.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的智力");
                    } else if (chance > 81) { //int
                        item.setLuk(item.getLuk() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k运气.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的运气");
					} else if (chance > 51 && chance <= 70) { //Hp
                        item.setHp(item.getHp() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#khp.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的Hp");
				    } else if (chance > 71 && chance <= 80) { //Mp
                        item.setMp(item.getMp() * 1 + lvsj);
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#kMP.");
                        cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用白狼人脚趾提升了武器的MP");
                    }
                } else {
                    cm.gainMeso(-price / 2);
                    cm.gainItem(4000054, -50);
                    cm.sendOk("真遗憾，升级失败");
                }
                cm.dispose();
                return;
            }
            if (fstype == 16) {
                if (cm.getHyPay(1) < 2000) {
                    cm.sendOk("对不起,你没有足够的梦旅币");
                    cm.dispose();
                    return;
                }
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var chance = Math.floor(Math.random() * 100);
                var lvsj = Math.floor(Math.random() * 30) + 50;
                cm.addHyPay(2000,true);
                if (chance <= 5) { //watk
                    item.setWatk(item.getWatk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k攻击.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "攻击.");
                } else if (chance > 5 && chance <= 20) { //matk
                    item.setMatk(item.getMatk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k魔攻.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "魔法攻击");
                } else if (chance > 20 && chance <= 40) { //str
                    item.setStr(item.getStr() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k力量.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "力量");
                } else if (chance > 40 && chance <= 60) { //dex
                    item.setDex(item.getDex() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k敏捷.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "敏捷");
                } else if (chance > 60 && chance <= 80) { //luk
                    item.setInt(item.getInt() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k智力.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "智力");
                } else if (chance > 80) { //int
                    item.setLuk(item.getLuk() * 1 + lvsj);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.sendOk("恭喜，成功给装备增加了:#r" + lvsj + "#k运气.");
                    cm.worldMessage("[装备升级]：恭喜[" + cm.getChar().getName() + "]在市场Kin处，使用梦旅币叶提升了武器" + lvsj + "运气");
                }
                cm.dispose();
                return;
            }
            if (fstype == 18) {
                if (cm.getHyPay(1) < 15888) {
                    cm.sendOk("对不起,你没有足够的梦旅币");
                    cm.dispose();
                    return;
                }
                cm.addHyPay(15888,true);
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy(); //获取第一格的装备
                var item2 = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).copy(); //获取第二格的装备
                item2.setStr(item.getStr());
                item2.setDex(item.getDex());
                item2.setInt(item.getInt());
                item2.setLuk(item.getLuk());
                item2.setHp(item.getHp());
                item2.setMp(item.getMp());
                item2.setWatk(item.getWatk());
                item2.setMatk(item.getMatk());
                item2.setWdef(item.getWdef());
                item2.setMdef(item.getMdef());
                item2.setAcc(item.getAcc());
                item2.setAvoid(item.getAvoid());
                item2.setHands(item.getHands());
                item2.setSpeed(item.getSpeed());
                item2.setJump(item.getJump());
                item2.setPotential1(item.getPotential1());
                item2.setPotential2(item.getPotential2());
                item2.setPotential3(item.getPotential3());
                item2.setPotential4(item.getPotential4());
                item2.setPotential5(item.getPotential5());
                item2.setSocket1(item.getSocket1());
                item2.setSocket2(item.getSocket2());
                item2.setSocket3(item.getSocket3());
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
		cm.getPlayer().getInventory(type).addItem(item2);
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
                cm.sendOk("恭喜,属性置换成功.快看看你的包袱吧！");
                cm.worldMessage("[属性置换]：恭喜[" + cm.getChar().getName() + "]在市场成功使用了属性置换功能.");
                cm.dispose();
            }
            if (fstype == 101) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, selection, 1, true);
                cm.sendOk("恭喜,此道具已被清除.");
                cm.dispose();
            }
            if (fstype == 102) {
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.CASH, selection, 1, true);
                cm.sendOk("恭喜,此道具已被清除.");
                cm.dispose();
            }
        }
    }
	    }
