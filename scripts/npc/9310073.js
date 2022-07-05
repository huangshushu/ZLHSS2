var status = -1;
var itemss;
var slot = Array();
var sel_0 = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

	if (status == 0) {
		cm.sendSimple("我可以帮你删除背包里的道具,请选择背包类型:\r\n#e#b#L1#装备#l #L2#消耗#l #L3#设置#l #L4#其它#l #L5#特殊#l ");
	}else if (status == 1) {
		sel_0 = selection;
		var avail = "";
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(selection).getItem(i) != null) {
				avail += "#L" + i + "##i" + cm.getInventory(selection).getItem(i).getItemId() + ":##l";
			}
		}
		
		cm.sendSimple("请选择你需要清除的物品:\r\n#b" + avail);
	 
    } else if (status == 2) {
        itemss = cm.getInventory(sel_0).getItem(selection);
		var shul = itemss.getQuantity();
		cm.removeSlot(sel_0, selection, shul);
		Ok("我已经将你背包里的 #d#i" + itemss.getItemId() + "# #t" + itemss.getItemId() + "# 数量：#e#r" + shul + "#n#b\r\n从你的背包删除！");
		cm.dispose();
    } else {
        cm.dispose();
    }//status
}// function

function Ok(text) {
    cm.sendOk(text);
}



