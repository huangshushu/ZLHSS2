/*
SnailMS脚本生成器
*/
importClass(Packages.handling.channel.ChannelServer);
importClass(Packages.database.DBConPool);

var itemId = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("对话结束语");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//在这里编写脚本第一步要做的事
		
		var text = "请输入你要删除的道具ID：\r\n\r\n";
		cm.sendGetNumber(text, 0, 0, 9999999);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection > 0 && cm.getNewEquip(selection) != null){
			itemId = selection;
			var text = "确认要删除所有玩家的#v" + itemId + "##z" + itemId + "#吗？";
			cm.sendYesNo(text);
			
		}else{
			cm.sendOk("找不到该物品，请输入正确的ID");
			cm.dispose();
			return;
		}
		
	} else if(status == 2){
		var count = 删除所有玩家道具(itemId);
		var text = "共检索了 " + count + " 个在线玩家，并删除了#v" + itemId + "#";
		if(删除所有玩家道具_数据库(itemId)){
			text += "，同时成功清理了其他离线玩家的#v" + itemId + "#。\r\n";
		}
		cm.sendOk(text);
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

function 删除所有玩家道具(itemId0){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	var i = 0;
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			chrIt.next().removeAll(itemId0, true, true);
			i++;
		}
	}
	return i;
	
}

function 删除所有玩家道具_数据库(itemId0){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE itemid = ?");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//测试
	ps.setInt(1, itemId0);
	var rs = ps.executeQuery();
	if(rs.next()){
		var sqlstr = " delete from inventoryitems where itemid =" + itemId0 + "";
        ps.executeUpdate(sqlstr);
		return true;
	}
	return false;
	
}

