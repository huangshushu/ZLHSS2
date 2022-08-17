 /*
*/
status = -1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
			if (cm.getInventory(1).getItem(1) == null ){
				cm.sendOk("灵魂结晶删除\r\n装备栏第一格得放上装备哦.否则无法使用此功能");
				cm.dispose();
			} else {
				var txt = "灵魂结晶删除\r\n请将需要去除灵魂结晶的装备放到装备栏第一格\r\n"
				txt += "是否将#v"+cm.getInventory(1).getItem(1).getItemId()+"#的灵魂结晶删除?\r\n#L1#确定删除#l"
				cm.sendSimple(txt);
			}
    }  else if (status == 1) {
			var toDrop = cm.getInventory(1).getItem(1).copy();
			toDrop.setSoulName(0);
			toDrop.setSoulEnchanter(0);
			toDrop.setSoulPotential(0);
			toDrop.setSoulSkill(0);
			cm.removeItem(1, 1, 1);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
			cm.sendOk("删除成功");
			cm.dispose();
    } 
}