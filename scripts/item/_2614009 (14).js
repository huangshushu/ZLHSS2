/*
 蜗牛冒险岛(079)游戏服务端
 突破石系统
 */
importPackage(Packages.client.inventory);
importClass(Packages.server.MapleItemInformationProvider);

var status = -1;
var sels;

function start() {
	status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
		var type = MapleInventoryType.EQUIP;
		var item = cm.getInventory(1).getItem(1);
		if(MapleItemInformationProvider.getInstance().isCash(item.getItemId())){
			cm.sendOk("错误，现金装备不允许使用！");
			cm.对话结束();
			return;
		}
		
		if(item.超级剪刀(type)){
			cm.getPlayer().forceReAddItem_Flag(item, type);
			cm.sendSimple("剪取成功！");
			cm.gainItem(2614022, -1);
			cm.对话结束();
			return;
		}else{
			cm.sendSimple("剪取失败！请检查装备是否符合要求。");
			cm.对话结束();
			return;
		}

    } else {
        cm.对话结束();
    }
}