var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
    Array(0, 30000000000, 20000, " 0 --- 300E "),
	Array(30000000000, 100000000000, 15000 , " 300E --- 1000E "),
	Array(100000000001, 5000000000000000, 10000 , " 1000E ~ 50000000E ")
	//Array(0, 2000000000000, 30000 , " 中介破功")
);

function start() {
	if (cm.getInventory(1).getItem(1) == null)  {
		cm.sendOk("请将你所需进阶的装备放置在装备栏的第一格。");
		cm.dispose();
	}else{
    a = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "          		月光冒险岛破攻系统\r\n\r\n";
			text += "  请选择想要强化的选项：\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##fUI/GuildMark/Mark/Etc/00009023/11# #b进行 #r"+itemlist[i][3]+" #b阶段强化#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var ItemPG = cm.getInventory(1).getItem(1).getLimitBreak();
			selects = selection;
			if (itemlist[selects][3] == " 中介破功") {
				cm.dispose();
				cm.openNpc(9300011,"中介破功");
				return; 
			}

			var txt = " - 当前所要强化装备：#r#v" + ItemID + "##z" + ItemID + "##k\r\n\r\n"
			txt += " - 当前武器破攻值：#r" + ItemPG + "#k\r\n\r\n"
			  // txt += " - 当前武器破攻值：#r" + cm.getLimitBreak() + "#k\r\n\r\n"
			   txt += " - 每个可提升破攻：#b" + itemlist[selects][2] + "#k\r\n\r\n"
			   txt += " - 请输入所需消耗数值：\r\n - 当前拥有国庆纪念币：( #r"+cm.itemQuantity(4000463)+"#k )\r\n\r\n"
			   cm.sendGetNumber(txt,1,1,30000);
        } else if (a == 2) {
			var ItemPG = cm.getInventory(1).getItem(1).getLimitBreak();
			jg = selection
			var itemid = itemlist[selects][0];
			if (parseInt(cm.getInventory(1).getItem(1).getItemId() / 100000) < 12 || parseInt(cm.getInventory(1).getItem(1).getItemId() / 100000) > 15) {
				cm.sendOk("只有武器才能进行强化");
				cm.dispose();
				return; 
			}
			if ((cm.getInventory(1).getItem(1).getLimitBreak() + jg * itemlist[selects][2]) > itemlist[selects][1]) {
				cm.sendOk("当前武器破功值#b过高#k，无法使用该阶段强化。");
				cm.dispose();
				return; 
			}
			if (cm.getItemQuantity(4000463) < jg) {
				cm.sendOk("没有足够的#i4000463#。");
				cm.dispose()
				return; 
			}		
			if (ItemPG < itemlist[selects][0]) {
				cm.sendOk("当前武器破功值#r低与200E#k，无法使用该阶段强化。");
				cm.dispose()
				return; 
			}
			if (cm.getInventory(1).getItem(1).getLimitBreak() > itemlist[selects][1]) {
				cm.sendOk("当前武器破功值#b过高#k，无法使用该阶段强化。");
				cm.dispose();
            } else {
                cm.gainItem(4000463, -jg);
				cm.gainMeso(-itemlist[selects][1] * jg);
				var weaponItem = cm.getInventory(1).getItem((1));
		var toDrop = weaponItem.copy();
		toDrop.setLimitBreak(toDrop.getLimitBreak() + jg * itemlist[selects][2]);
		cm.removeItem(1, 1, 1);
		Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
		cm.sendOk("破功成功！");
                cm.dispose();
            }
        }
    }//mode
}//f
