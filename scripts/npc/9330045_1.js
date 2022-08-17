importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var selStr = "";
var 编号 = -1;
var 要兑换的物品id = -1;
var ItemId = Array(//材料
		//物品  需要的多少个  隶属那个装
		//Array(需要的物品id, 需要的多少个,隶属那个装备的id),
		//如果   需要的物品id = 0 就是代表金币
		//需要的物品id = 1 就是代表点卷
		//需要的物品id = 2 就是代表抵用卷4031250
		Array(1052893, 1, 1052165),//0
		//-----------------------------	
		Array(1032241, 1, 1032111),	//1	,1003112,,,
		//-----------------------------	
		Array(1002357, 1, 1002357),//2
		//-----------------------------	
		Array(1003112, 1, 1003112),//3
		//-----------------------------	
		Array(1003439, 1, 1003439),//4
		//-----------------------------	
		Array(1004119, 1, 1004119),//5
		//-----------------------------	
	    Array(0, 10000000, 1492194),
		Array(4032398, 66, 1492194),
		Array(4001094, 5, 1492194),//6
		//-----------------------------
	    Array(0, 10000000, 1482183),
		Array(4032398, 66, 1482183),
		Array(4001094, 5, 1482183),//7
	    //-----------------------------
	    Array(0, 10000000, 1472230),
		Array(4032398, 66, 1472230),
		Array(4001094, 5, 1472230),//8
	    //-----------------------------
	    Array(0, 10000000, 1462208),
		Array(4032398, 66, 1462208),
		Array(4001094, 5, 1462208),//9
		//-----------------------------
	    Array(0, 10000000, 1452220),
		Array(4032398, 66, 1452220),
		Array(4001094, 5, 1452220),//10
		//--------------------------------------
		Array(1142594, 1, 1142594),
		Array(4002001, 20, 1142594),
		Array(4002002, 20, 1142594),//11
		Array(4001158, 10, 1142594),
		Array(4021007, 30, 1142594),
		Array(3992025, 30, 1142594),
		///---------------------------------------------
		Array(4001323, 6, 1112562),
		Array(4001261, 30, 1112562),
		Array(4031227, 20, 1112562),//12
		//---------------------------------------------
		Array(1112793, 1, 1113185),
		Array(4002001, 10, 1113185),
		Array(4000175, 1, 1113185),
		Array(4001111, 1, 1113185),
		Array(4000257, 8, 1113185),
		Array(4000313, 500, 1113185),//013

		//---------------------------------------
		Array(1003843, 1, 1003271),
		Array(4000175, 2, 1003271),
		Array(4001084, 1, 1003271),
		Array(4000313, 1000, 1003271),//014
		//----------------------------------------
		Array(1102039, 1, 1102784),
		Array(4001242, 10, 1102784),
		Array(4001083, 1, 1102784),
		Array(4001430, 1, 1102784),
		Array(4000313, 1500, 1102784),//015
		//----------------------------------------------------
		Array(1032241, 1, 1102784)//016
		);

		//-----------------------------		
		//如需其它道具兑换，请按照此格式自行添置。
		//代码,价格,介绍
		
	   
var jzid = Array(//戒指id  按顺序拍下去
		//Array(物品id，力量 ，敏捷 ，智力 ，运气，物理攻击 ，魔法攻击 ，魔法防御， 物理防御，HP，MP，跳跃力，移动力， 编号 ),
		Array(1052165, 30, 30, 30, 30, 25, 100, 0, 0, 0, 0, 0, 0, 0),
		Array(1032111, 8, 8, 8, 8, 12, 12, 10, 10, 300, 300, 5, 10, 1),

		Array(1003112, 25, 25, 25, 25, 22, 105, 181, 181, 300, 300, 0, 0, 2),
		Array(1003439, 25, 25, 25, 25, 22, 105, 181, 181, 300, 300, 0, 0, 3),
		Array(1004119, 25, 25, 25, 25, 22, 105, 181, 181, 300, 300, 0, 0, 4),
		Array(1002357, 25, 25, 25, 25, 22, 105, 181, 181, 300, 300, 0, 0, 5)
		//Array(1402214, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 2),
		//Array(1382226, 0, 0, 0, 0, 89, 135, 0, 0, 0, 0, 0, 0, 3),
		//Array(1342087, 0, 0, 0, 0, 75, 0, 0, 0, 450, 0, 0, 0, 4),,1002357,1003112,1003439,1004119,
		//Array(1332242, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 5),
		//Array(1492194, 0, 0, 0, 0, 94, 0, 0, 0, 0, 0, 0, 0, 6),
		//Array(1482183, 0, 0, 0, 0, 94, 0, 0, 0, 0, 0, 0, 0, 7),
		//Array(1472230, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 8),
		//Array(1462208, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 9),
		//Array(1452220, 0, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 10),
		//Array(1142594, 8, 8, 8, 8, 18, 90, 5, 5, 150, 150, 10, 10, 11),
		//Array(1422156, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 12),
		//Array(1113185, 8, 8, 8, 8, 17, 80, 0, 0, 150, 150, 3, 3, 13),
		//Array(1003271, 25, 25, 25, 25, 30, 150, 0, 0, 0, 0, 0, 0, 14),
		//Array(1102784, 25, 25, 25, 25, 25, 100, 0, 0, 0, 0, 0, 0, 15)
		//Array(1112582, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 16)
		//Array(1032111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17)
        );

function start() {
	status = -1;

	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();

	} else {
		if (status >= 0 && mode == 0) {

			cm.sendOk("坑货不够材料不要点嘛！");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {

			var text = "";

			text += "#e#r功能未开放\r\n\r\n"
			//Array(物品id0，力量1 ，敏捷2 ，智力3 ，运气4，物理攻击5 ，魔法攻击6 ，魔法防御7， 物理防御8，HP9，MP10，跳跃力11，移动力12， 编号13 ),
			//0     1
			for (var c = 0; c < jzid.length; c++) { //
				var sx = "";
				if (jzid[c][1] != 0) {
					sx += " 力量+" + jzid[c][1];
				}
				if (jzid[c][2] != 0) {
					sx += " 敏捷+" + jzid[c][2];
				}
				if (jzid[c][3] != 0) {
					sx += " 智力+" + jzid[c][3];
				}
				if (jzid[c][4] != 0) {
					sx += " 运气+" + jzid[c][4];
				}
				if (jzid[c][5] != 0) {
					sx += " 物理攻击+" + jzid[c][5];
				}
				if (jzid[c][6] != 0) {
					sx += " 魔法攻击+" + jzid[c][6];
				}
				if (jzid[c][7] != 0) {
					sx += " 魔法防御+" + jzid[c][7];
				}
				if (jzid[c][8] != 0) {
					sx += " 物理防御+" + jzid[c][8];
				}

				if (jzid[c][9] != 0) {
					sx += " HP +" + jzid[c][9];
				}

				if (jzid[c][10] != 0) {
					sx += " MP +" + jzid[c][10];
				}
				if (jzid[c][11] != 0) {
					sx += " 跳跃+" + jzid[c][11];
				}
				if (jzid[c][12] != 0) {
					sx += " 移动+" + jzid[c][12];
				}
				text += "#L" + jzid[c][13] + "##e#d制作#v" + jzid[c][0] + "##z" + jzid[c][0] + "# " + sx + "\r\n\r\n"

			}

			cm.sendSimple(text);
		} else if (status == 1) {
			要兑换的物品id = jzid[selection][0];
            编号 = selection;
			selStr = "------------------------------------------------\r\n合成需要如下材料:\r\n";
			for (var i = 0; i < ItemId.length; i++) { //需要固定材料
				if (ItemId[i][2] == 要兑换的物品id) {

					if (ItemId[i][0] == 0) { //金币
						selStr += "#r 金币 * " + ItemId[i][1] + "#k  [#r" + cm.getMeso() + "#k/" + ItemId[i][1] + "]\r\n";
					} else if (ItemId[i][0] == 1) { //点卷
						selStr += "#r 点卷 * " + ItemId[i][1] + "#k  [#r" + cm.getPlayer().getCSPoints(1) + "#k/" + ItemId[i][1] + "]\r\n";
					} else if (ItemId[i][0] == 2) { //抵用券
						selStr += "#r 抵用卷 * " + ItemId[i][1] + "#k  [#r" + cm.getPlayer().getCSPoints(2) + "#k/" + ItemId[i][1] + "]\r\n";
					} else { //物品
						selStr += "#r#i" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k  [#r" + cm.getPlayer().getItemQuantity(ItemId[i][0], false) + "#k/" + ItemId[i][1] + "]\r\n";

					}

				}
			}
			//------------------------------------------------------------	调试用
			/* 				for (var i = 0; i < ItemId.length; i++) {//需要固定材料
			cm.gainItem(ItemId[i][0], +ItemId[i][1]);
			} */
			//-----------------------------------------------------------------------------------

			selStr += "------------------------------------------------\r\n";

			cm.sendYesNo(selStr + "是否制作呢？");
		} else if (status == 2) {
			var 材料足够 = true;
			for (var i = 0; i < ItemId.length; i++) { //查询固定材料
				if (ItemId[i][2] == 要兑换的物品id) {

					if (ItemId[i][0] == 0) { //金币
						if (cm.getMeso() < ItemId[i][1]) {
							材料足够 = false;
						}

					} else if (ItemId[i][0] == 1) { //点卷

						if (cm.getPlayer().getCSPoints(1) < ItemId[i][1]) {
							材料足够 = false;
						}

					} else if (ItemId[i][0] == 2) { //抵用券
						if (cm.getPlayer().getCSPoints(2) < ItemId[i][1]) {
							材料足够 = false;
						}
					} else { //物品
						if (!cm.haveItem(ItemId[i][0], ItemId[i][1])) {
							材料足够 = false;

						}

					}

				}

			}

			if (材料足够 == false) {
				cm.sendOk(selStr +"\r\n材料不足无法做！" );
				cm.dispose();
				return;
			}

			if (cm.getInventory(1).isFull(0)) {
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
				cm.dispose();
				return;

			} else {
				//-----------------------------------------------------------
				for (var i = 0; i < ItemId.length; i++) { //丢固定材料
					if (ItemId[i][2] == 要兑换的物品id) {
						//------------------------------------------------------
						if (ItemId[i][0] == 0) { //金币
							cm.gainMeso(-ItemId[i][1]); //扣除多少金币
						} else if (ItemId[i][0] == 1) { //点卷
							cm.getPlayer().modifyCSPoints(1, -ItemId[i][1], true); //点券
						} else if (ItemId[i][0] == 2) { //抵用券
							cm.getPlayer().modifyCSPoints(2, -ItemId[i][1], true); //抵用券
						} else { //物品
							cm.gainItem(ItemId[i][0], -ItemId[i][1]);
						}

					}
				}
				//-------------------------------------------------------------------------------------------------
			var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(jzid[编号][0]); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(jzid[编号][0])).copy(); // 生成一个Equip类
				//Array(物品id，力量 ，敏捷 ，智力 ，运气，物理攻击 ，魔法攻击 ，魔法防御， 物理防御， 编号 ),
				////toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
				if (jzid[编号][1] != 0) {
					toDrop.setStr(jzid[编号][1]); //给力量
				}

				if (jzid[编号][2] != 0) {
					toDrop.setDex(jzid[编号][2]); //给敏捷
				}

				if (jzid[编号][3] != 0) {
					toDrop.setInt(jzid[编号][3]); //给智力
				}

				if (jzid[编号][4] != 0) {
					toDrop.setLuk(jzid[编号][4]); //给运气
				}

				if (jzid[编号][5] != 0) {
					toDrop.setWatk(jzid[编号][5]); //攻击力
				}

				if (jzid[编号][6] != 0) {
					toDrop.setMatk(jzid[编号][6]); //魔法力
				}

				if (jzid[编号][7] != 0) {
					toDrop.setWdef(jzid[编号][7]); //物理防御
				}

				if (jzid[编号][8] != 0) {
					toDrop.setMdef(jzid[编号][8]); //魔法防御
				}

				if (jzid[编号][9] != 0) {
					toDrop.setHp(jzid[编号][9]); //HP
				}

				if (jzid[编号][10] != 0) {
					toDrop.setMp(jzid[编号][10]); //MP
				}

				if (jzid[编号][11] != 0) {
					toDrop.setJump(jzid[编号][11]); //跳跃
				}

				if (jzid[编号][12] != 0) {
					toDrop.setSpeed(jzid[编号][12]); //移动
				}

				//Array(物品id0，力量1 ，敏捷2 ，智力3 ，运气4，物理攻击5 ，魔法攻击6 ，魔法防御7， 物理防御8，HP9，MP10，跳跃力11，移动力12， 编号13 ),
				/* 				toDrop.setStr(jzid[编号][1]); //给力量
				toDrop.setDex(jzid[编号][2]); //给敏捷
				toDrop.setInt(jzid[编号][3]); //给智力
				toDrop.setLuk(jzid[编号][4]); //给运气
				//toDrop. setHp(0);//HP
				//toDrop. setMp(0);//MP
				toDrop.setWatk(jzid[编号][5]); //攻击力
				toDrop.setMatk(jzid[编号][6]); //魔法力
				toDrop.setWdef(jzid[编号][7]); //物理防御
				toDrop.setMdef(jzid[编号][8]); //魔法防御 */

				cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.itemlaba("此处应有祝福!", toDrop)
				cm.sendOk("#b成功兑换了.");
				cm.dispose();
				return;
			}

		}
	}
}
