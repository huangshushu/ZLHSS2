load("nashorn:mozilla_compat.js");

var status = 0;
var job;
var DJ = "0"; //扣除的点卷
var DJ = "0"; //扣除的点卷
var 高等五彩水晶 = "4251202"; //扣除的点卷

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";



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

            var textz = "#b欢迎光临本岛。想让自己更加强大嘛，没错，本服推出特色强化系统那么仔细看完介绍 : \r\n#r1.本服为增加乐趣性在所有装备强化次数 \r\n#r2.而且百分百成功，不做坑爹几率！！！\r\n3.本服强化物品不难收集，亦可快捷锻造\r\n";

            textz += "#r#L2# ★高#v4251202#★『次数+1』\r\n";

           // textz += "#d#L3# ★ #v4250602# ★『+ 50Hp 』";
           //textz += "#d#L4# ★ #v4002002# ★『+ 20Mp 』\r\n";

            //textz += "#b#L0# ★中#v4251201#★『攻力+2』 ";
           // textz += "#b#L1# ★中#v4251201#★『魔力+2』\r\n";


           // textz += "#b#L5# ★中#v4251201#★『 力量+3』";
           // textz += "#b#L6# ★中#v4251201#★『 敏捷+3』\r\n";
           // textz += "#b#L7# ★中#v4251201#★『 运气+3』";
           // textz += "#b#L8# ★中#v4251201#★『 智力+3』\r\n";


            //     textz += "#r#L1#提高装备攻击力 #k+1需要#r1#b个#z4251200#\r\n";
            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 0) { //材料强化在装备上
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();

                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+2);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力
                 item.setHp(item.getHp() + 0); //血量
                 item.setMp(item.getMp() + 0); //蓝量

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功攻击力+２，次数-１★★>");

                    //	cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+2);//魔法力
                 item.setHp(item.getHp() + 0); //血量
                 item.setMp(item.getMp() + 0); //蓝量

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功魔法攻击力+２，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }


            } else if (selection == 3) {//邮票
                if (!cm.haveItem(4250602, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4250602##v4250602#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4250602, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);


                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力
                 item.setHp(item.getHp() + 50); //血量
                 item.setMp(item.getMp() + 0); //蓝量

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功Hp+２0，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }
            } else if (selection == 4) {//邮票
                if (!cm.haveItem(4002002, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4002002##v4002002#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4002002, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力
                 item.setHp(item.getHp() + 0); //血量
                 item.setMp(item.getMp() + 20); //蓝量

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功Mp+２0，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }

            } else if (selection == 5) {//五彩
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+3);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功力量+3，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }

            } else if (selection == 6) {//五彩
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+3);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功敏捷+3，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }

            } else if (selection == 7) {//五彩
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+0);//智力
                 item.setLuk(item.getLuk()+3);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功运气+3，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }

            } else if (selection == 8) {//五彩
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("你的装备强化次数不够");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("请把要强化的装备放在第一格才能进行.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//力量
		 item.setDex(item.getDex()+0);//敏捷
		 item.setInt(item.getInt()+3);//智力
                 item.setLuk(item.getLuk()+0);//运气
                 item.setWatk(item.getWatk()+0);//攻击力
                 item.setMatk(item.getMatk()+0);//魔法力

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.喇叭(4, "" + cm.getPlayer().getName() + ":     ★★装备成功智力+3，次数-１★★>");
                    //cm.sendOk("#r#e强化成功,祝您游戏愉快!#k");
                    cm.dispose();
                }


            } else if (selection == 2) {
                if (!cm.haveItem(高等五彩水晶, 1)) {
                    cm.sendOk("需要#r 1 #k个#z4251202##v4251202#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("第一格没有装备,无法使用.");
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() == 1) {
                    cm.sendOk("限时装备不能使用该功能.");
                    cm.dispose();
                    cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getLevel() >= 200) {
                    cm.sendOk("#r#e该装备强化次数已满200次、你不能再继续强化了.");
                    cm.dispose();

                } else {
	
                    var statup = new java.util.ArrayList();
                    cm.gainItem(高等五彩水晶, -1)
                    cm.gainNX(-DJ)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = MapleItemInformationProvider.getInstance();

                    item.setLocked(1);
                    //item.setLevel((item.getLevel() + 1));
                    item.setUpgradeSlots(item.getUpgradeSlots() + 1);
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");

                    cm.喇叭(4, "  ☆☆☆☆☆  强化次数 +1 成功  ☆☆☆☆☆！");


                    cm.sendOk("#r#e装备强化+1成功,祝您游戏愉快!#k");

                    cm.dispose();

                }



            }
        }
    }
}
