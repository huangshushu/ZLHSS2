
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);

var status = 0;
var job;
var DJ = "15000"; //扣除的点卷
var 高等五彩水晶 = "4251202"; //扣除的点卷

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
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
			textz += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            textz += " \t\t\t  #e#r #v4000422#  回收系统  #v4000422##k#n\r\n "
			textz += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            textz += "#d角色名称：#b" + cm.getName() + "#k#n\t\t  #d充值余额：#b" + cm.getmoneyb() + "#k#n\r\n"	
            var textz = "#e#r装备回收系统\r\n1.第一格装备回收功能只能回收攻击力最低100的武器  2.24格-96格一件回收功能可以回收最低攻击力50的武器，且能回收大部分防具。 \r\n#k2：根据回收的装备属性获得50万~5000万不等的冒险币!\r\n#b3：请务必核对清楚装备栏第一格或二十四格后或七十三格前的物品，回收错装备后果自负！\r\n#r温馨提示：#b”一键回收24格后装备“#r和#b”一键回收73格前装备“#r可找群主:充值满300赠送\r\n";
            textz += " \t\t\t  #e#r #v4000422#  回收系统  #v4000422##k#n \r\n  "   
			
            textz += "#b#L2#『回收装备栏第一格装备』\r\n";
            textz += "#b#L22#『一键回收装备栏24格后的装备』\r\n";
			textz += "#b#L33#『一键回收装备栏73格前的装备』\r\n";

            //     textz += "#r#L1#提高装备攻击力 #k+1需要#r1#b个#z4251200#\r\n";
            cm.sendSimple(textz);

        } else if (status == 1) {
			if (selection == 2) {
				
                if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("第一格没有装备,无法回收.");
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() == 1) {
                    cm.sendOk("限时装备不能使用该功能.");
                    cm.dispose();
                    cm.dispose();
                } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId())) {
                    cm.sendOk("点卷装备不能强化.");
                    cm.dispose();
                } else {

                    var statup = new java.util.ArrayList();
                    //cm.gainItem(高等五彩水晶, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = MapleItemInformationProvider.getInstance();
                    if (item.getWatk() < 20000 && item.getMatk() < 20000 && item.getStr() > 20000 && item.getInt() > 20000 && item.getLuk() > 20000 && item.getDex() > 20000) {
                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(6666666);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 101 && item.getMatk() < 101 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(15000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 100 && item.getMatk() < 100) {
                        cm.sendOk("#r#e装备不行哦!不想回收！请大侠换一件装备吧!#k");
                        cm.dispose();

                    } else if (item.getWatk() > 101 && item.getMatk() > 101 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                        cm.sendOk("#r#e勋章不可回收!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(1000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(1500000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(2000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(3000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(5000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(6000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(8000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(10000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(15000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(18000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(20000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(25000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(30000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(40000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();

                    } else {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(50000000);
                        cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                        cm.dispose();
                    }

                }

            } else if (selection == 22) {
				if(cm.haveItem(2022564)< 1 ){//cm.getmoneyb()>=100
                    cm.sendOk("您没有#v2022564#不能使用哦，请找群主购买一件回收权限获取哦！");
                    cm.dispose();
                    return;
				}
				var 回收金币 = 0;
                for (var i = 24; i < 0; i++) {
             if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i) == null) {
                        //cm.sendOk("第一格没有装备,无法回收.");
						cm.dispose();
                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getExpiration() == 1) {
                        //cm.sendOk("限时装备不能使用该功能.");
                        cm.dispose();
                    } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId())) {
                        //cm.sendOk("点卷装备不能强化.");
                        cm.dispose();
                    } else {

                        var statup = new java.util.ArrayList();
                        //cm.gainItem(高等五彩水晶, -1)
                        var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var ii = MapleItemInformationProvider.getInstance();
                        if (item.getWatk() < 0 && item.getMatk() < 0 && item.getStr() > 0 && item.getInt() > 0 && item.getLuk() > 0 && item.getDex() > 0) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6666666);
							回收金币 += 6666666;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 60 && item.getMatk() < 60 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
             //               //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 40 && item.getMatk() < 40) {
                            //cm.sendOk("#r#e装备不行哦!不想回收！请大侠换一件装备吧!#k");
                            cm.dispose();

                        } else if (item.getWatk() > 99 && item.getMatk() > 99 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                         //   cm.sendOk("#r#e勋章不可回收!#k");
                            cm.dispose();
							
                        } else if (item.getWatk() < 100 && item.getMatk() < 100) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(500000);
							回收金币 += 500000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1000000);
							回收金币 += 1000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1500000);
							回收金币 += 1500000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(2000000);
							回收金币 += 2000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(3000000);
							回收金币 += 3000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(5000000);
							回收金币 += 5000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6000000);
							回收金币 += 6000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(8000000);
							回收金币 += 8000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(10000000);
							回收金币 += 10000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(18000000);
	//						回收金币 += 18000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(20000000);
							回收金币 += 20000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(25000000);
                            回收金币 += 25000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(30000000);
                            回收金币 += 30000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(40000000);
							回收金币 += 40000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(50000000);
							回收金币 += 50000000;
					//		cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        }

                    }
                }
				if(回收金币 > 0){
					cm.sendOk("#r#e装备回收成功,一共获得"+回收金币+" 金币!#k");
					cm.dispose();
				}else{
					cm.sendOk("#r#e目前你的背包内没有能回收的装备!#k");
					cm.dispose();
				}
		
						
			} else if (selection == 33) {
				if(cm.haveItem(2022564)< 1 ){//cm.getmoneyb()>=100
                    cm.sendOk("您没有#v2022564#不能使用哦，请找群主购买一件回收权限获取哦！");
                    cm.dispose();
                    return;
				}
				var 回收金币 = 0;
                for (var i = 0; i < 72; i++) {
                   if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i) == null) {
                        //cm.sendOk("第一格没有装备,无法回收.");
						cm.dispose();
                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getExpiration() == 1) {
                        //cm.sendOk("限时装备不能使用该功能.");
                        cm.dispose();
                    } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId())) {
                        //cm.sendOk("点卷装备不能强化.");
                        cm.dispose();
                    } else {

                        var statup = new java.util.ArrayList();
                        //cm.gainItem(高等五彩水晶, -1)
                        var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var ii = MapleItemInformationProvider.getInstance();
                        if (item.getWatk() < 20000 && item.getMatk() < 20000 && item.getStr() > 20000 && item.getInt() > 20000 && item.getLuk() > 20000 && item.getDex() > 20000) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6666666);
							回收金币 += 6666666;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 60 && item.getMatk() < 60 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
             //               //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 40 && item.getMatk() < 40) {
                            //cm.sendOk("#r#e装备不行哦!不想回收！请大侠换一件装备吧!#k");
                            cm.dispose();

                        } else if (item.getWatk() > 99 && item.getMatk() > 99 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                         //   cm.sendOk("#r#e勋章不可回收!#k");
                            cm.dispose();
							
                        } else if (item.getWatk() < 100 && item.getMatk() < 100) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(500000);
							回收金币 += 500000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1000000);
							回收金币 += 1000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1500000);
							回收金币 += 1500000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(2000000);
							回收金币 += 2000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(3000000);
							回收金币 += 3000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(5000000);
							回收金币 += 5000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6000000);
							回收金币 += 6000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(8000000);
							回收金币 += 8000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(10000000);
							回收金币 += 10000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(18000000);
	//						回收金币 += 18000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(20000000);
							回收金币 += 20000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(25000000);
                            回收金币 += 25000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(30000000);
                            回收金币 += 30000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(40000000);
							回收金币 += 40000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(50000000);
							回收金币 += 50000000;
					//		cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        }

                    }
                }
				if(回收金币 > 0){
					cm.sendOk("#r#e装备回收成功,一共获得"+回收金币+" 金币!#k");
					cm.dispose();
				}else{
					cm.sendOk("#r#e目前你的背包内没有能回收的装备!#k");
					cm.dispose();
				}
				
            }
        }
    }
}
