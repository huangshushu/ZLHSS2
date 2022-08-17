/*
SnailMS脚本生成器
*/
importClass(Packages.database.DBConPool);
importClass(java.util.HashMap);
importClass(java.util.Map);
importClass(java.sql.Statement);

var chrName = "";
var chrId = -1;
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
		var text = "请输入你要操作道具表的玩家名字：\r\n\r\n";
		cm.sendGetText(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		chrName = cm.getText();
		chrId = 查询角色ID(chrName);
		if(chrName == "" || chrId < 0){
			cm.sendOk("玩家名不存在");
			cm.dispose();
			return;
		}

		var text = "你选择了玩家#b<" + chrName + ">#k，请选择是要备份还是恢复？\r\n";
		text += "#L1##b备份#l\r\n";
		text += "#L2##b恢复#l\r\n";
		cm.sendSimple(text);

		
	} else if (status == 2) {
		if(selection == 1){
			if(备份道具表(chrId)){
				cm.sendOk("备份成功");
				cm.dispose();
				return;
			}else{
				cm.sendOk("备份失败");
				cm.dispose();
				return;
			}
		}else if(selection == 2){
			var chr = Packages.client.MapleCharacter.getOnlineCharacterByName(chrName);
			if(chr != null){
				chr.dropMessage(1, "正在给你恢复背包数据，已将你的连线断开，请自行退回登录界面重新登录。");
				//chr.getClient().sendPacket(Packages.tools.MaplePacketCreator.serverBlocked(1));
				chr.getClient().disconnect(true,true);
			}
			if(恢复道具表(chrId)){
				Packages.gui.服务端输出信息.println_out("角色<" + chrName + ">数据恢复成功");
				cm.sendOk("恢复成功");
				cm.dispose();
				return;
			}else{
				Packages.gui.服务端输出信息.println_out("角色<" + chrName + ">数据恢复失败");
				cm.sendOk("恢复失败");
				cm.dispose();
				return;
			}
			
		}
	} else {
		cm.dispose();
		return;
	}
}



function 查询玩家名(chrId){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
	ps.setString(1, chrName);
	var rs = ps.executeQuery();
	var jobId = 0;
	if(rs.next()){
		jobId = rs.getInt("job");
	}
	ps.close();
	rs.close();
	return jobId;
}


function 查询角色ID(chrName){
	var con = DBConPool.getConnection();
	var ps;
	var chrid = -1;
	ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
	ps.setString(1, chrName);
	var rs = ps.executeQuery();
	if(rs.next()){
		chrid = rs.getInt("id");
		ps.close();
		rs.close();
		return chrid;
	}
	ps.close();
	rs.close();
	return chrid;
}

function 备份道具表(chrId){
	var con = DBConPool.getConnection();
	var ps1, ps2;
	ps1 = con.prepareStatement("Delete FROM inventoryitems_copy WHERE characterid = ?");
	ps1.setInt(1, chrId);
	ps1.executeUpdate();
	
	ps1 = con.prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ?");
	ps1.setInt(1, chrId);
	ps2 = con.prepareStatement("INSERT INTO `inventoryitems_copy` (inventoryitemid, characterid, itemid, inventorytype, position, quantity, owner, GM_Log, uniqueid, expiredate, flag, `type`, sender, equipOnlyId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	var rs = ps1.executeQuery();
	while(rs.next()){
		ps2.setLong(1, rs.getLong("inventoryitemid"));
		ps2.setInt(2, rs.getInt("characterid"));
		ps2.setInt(3, rs.getInt("itemid"));
		ps2.setInt(4, rs.getInt("inventorytype"));
		ps2.setInt(5, rs.getInt("position"));
		ps2.setInt(6, rs.getInt("quantity"));
		ps2.setString(7, rs.getString("owner"));
		ps2.setString(8, rs.getString("GM_Log"));
		ps2.setInt(9, rs.getInt("uniqueid"));
		ps2.setLong(10, rs.getLong("expiredate"));
		ps2.setByte(11, rs.getByte("flag"));
		ps2.setByte(12, rs.getByte("type"));
		ps2.setString(13, rs.getString("sender"));
		ps2.setLong(14, rs.getLong("equipOnlyId"));
		ps2.executeUpdate();
		
	}
	
	ps1 = con.prepareStatement("SELECT * FROM `inventoryitems` LEFT JOIN `inventoryequipment` USING(`inventoryitemid`) WHERE `characterid` = ? AND (inventorytype = -1 OR inventorytype = 1)");
	ps1.setInt(1, chrId);
	ps2 = con.prepareStatement("INSERT INTO inventoryequipment_copy VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	rs = ps1.executeQuery();
	while(rs.next()){
		ps2.setLong(1, rs.getLong("inventoryitemid"));
		ps2.setInt(2, rs.getInt("upgradeslots"));
		ps2.setInt(3, rs.getInt("level"));
		ps2.setInt(4, rs.getInt("str"));
		ps2.setInt(5, rs.getInt("dex"));
		ps2.setInt(6, rs.getInt("int"));
		ps2.setInt(7, rs.getInt("luk"));
		ps2.setInt(8, rs.getInt("hp"));
		ps2.setInt(9, rs.getInt("mp"));
		ps2.setInt(10, rs.getInt("watk"));
		ps2.setInt(11, rs.getInt("matk"));
		ps2.setInt(12, rs.getInt("wdef"));
		ps2.setInt(13, rs.getInt("mdef"));
		ps2.setInt(14, rs.getInt("acc"));
		ps2.setInt(15, rs.getInt("avoid"));
		ps2.setInt(16, rs.getInt("hands"));
		ps2.setInt(17, rs.getInt("speed"));
		ps2.setInt(18, rs.getInt("jump"));
		ps2.setInt(19, rs.getInt("ViciousHammer"));
		ps2.setInt(20, rs.getInt("itemEXP"));
		ps2.setInt(21, rs.getInt("durability"));
		ps2.setByte(22, rs.getByte("enhance"));
		ps2.setInt(23, rs.getInt("potential1"));
		ps2.setInt(24, rs.getInt("potential2"));
		ps2.setInt(25, rs.getInt("potential3"));
		ps2.setInt(26, rs.getInt("hpR"));
		ps2.setInt(27, rs.getInt("mpR"));
		ps2.setInt(28, rs.getInt("hpRR"));
		ps2.setInt(29, rs.getInt("mpRR"));
		ps2.setInt(30, rs.getInt("itemlevel"));//itemlevel，写入永恒装备等级
		ps2.setString(31, rs.getString("mxmxd_dakong_fumo"));//mxmxd_dakong_fumo,写入装备附魔信息，附魔系统
		ps2.executeUpdate();
	}
	
	return true;
}

function 恢复道具表(chrId){
	var con = DBConPool.getConnection();
	var ps1, ps2;
	var inventoryIdMap = new HashMap();
	
	ps1 = con.prepareStatement("Delete FROM inventoryitems WHERE characterid = ?");
	ps1.setInt(1, chrId);
	ps1.executeUpdate();
	
	ps1 = con.prepareStatement("SELECT * FROM inventoryitems_copy WHERE characterid = ?", Statement.RETURN_GENERATED_KEYS);
	ps1.setInt(1, chrId);
	ps2 = con.prepareStatement("INSERT INTO `inventoryitems` (characterid, itemid, inventorytype, position, quantity, owner, GM_Log, uniqueid, expiredate, flag, `type`, sender, equipOnlyId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
	var rs = ps1.executeQuery();
	while(rs.next()){
		ps2.setInt(1, rs.getInt("characterid"));
		ps2.setInt(2, rs.getInt("itemid"));
		ps2.setInt(3, rs.getInt("inventorytype"));
		ps2.setInt(4, rs.getInt("position"));
		ps2.setInt(5, rs.getInt("quantity"));
		ps2.setString(6, rs.getString("owner"));
		ps2.setString(7, rs.getString("GM_Log"));
		ps2.setInt(8, rs.getInt("uniqueid"));
		ps2.setLong(9, rs.getLong("expiredate"));
		ps2.setByte(10, rs.getByte("flag"));
		ps2.setByte(11, rs.getByte("type"));
		ps2.setString(12, rs.getString("sender"));
		ps2.setLong(13, rs.getLong("equipOnlyId"));
		ps2.executeUpdate();
		
		var rs2 = ps2.getGeneratedKeys();
		if(!rs2.next()){
			return false;
		}
		inventoryIdMap.put(rs.getLong("inventoryitemid"), rs2.getLong(1));
		rs2.close();
	}
	
	ps1 = con.prepareStatement("SELECT * FROM `inventoryitems_copy` LEFT JOIN `inventoryequipment_copy` USING(`inventoryitemid`) WHERE `characterid` = ? AND (inventorytype = -1 OR inventorytype = 1)");
	ps1.setInt(1, chrId);
	ps2 = con.prepareStatement("INSERT INTO inventoryequipment VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	rs = ps1.executeQuery();
	if(inventoryIdMap == null || inventoryIdMap.isEmpty()){
		return false;
	}
	//cm.playerMessage("inventoryIdMap大小：" + inventoryIdMap.size());//测试
	while(rs.next()){
		if(!inventoryIdMap.containsKey(rs.getLong("inventoryitemid"))){
			continue;
		}
		ps2.setLong(1, inventoryIdMap.get(rs.getLong("inventoryitemid")));
		ps2.setInt(2, rs.getInt("upgradeslots"));
		ps2.setInt(3, rs.getInt("level"));
		//cm.playerMessage("level：" + rs.getInt("level"));//测试
		ps2.setInt(4, rs.getInt("str"));
		ps2.setInt(5, rs.getInt("dex"));
		ps2.setInt(6, rs.getInt("int"));
		ps2.setInt(7, rs.getInt("luk"));
		ps2.setInt(8, rs.getInt("hp"));
		ps2.setInt(9, rs.getInt("mp"));
		ps2.setInt(10, rs.getInt("watk"));
		ps2.setInt(11, rs.getInt("matk"));
		ps2.setInt(12, rs.getInt("wdef"));
		ps2.setInt(13, rs.getInt("mdef"));
		ps2.setInt(14, rs.getInt("acc"));
		ps2.setInt(15, rs.getInt("avoid"));
		ps2.setInt(16, rs.getInt("hands"));
		ps2.setInt(17, rs.getInt("speed"));
		ps2.setInt(18, rs.getInt("jump"));
		ps2.setInt(19, rs.getInt("ViciousHammer"));
		ps2.setInt(20, rs.getInt("itemEXP"));
		ps2.setInt(21, rs.getInt("durability"));
		ps2.setByte(22, rs.getByte("enhance"));
		ps2.setInt(23, rs.getInt("potential1"));
		ps2.setInt(24, rs.getInt("potential2"));
		ps2.setInt(25, rs.getInt("potential3"));
		ps2.setInt(26, rs.getInt("hpR"));
		ps2.setInt(27, rs.getInt("mpR"));
		ps2.setInt(28, rs.getInt("hpRR"));
		ps2.setInt(29, rs.getInt("mpRR"));
		ps2.setInt(30, rs.getInt("itemlevel"));//itemlevel，写入永恒装备等级
		ps2.setString(31, rs.getString("mxmxd_dakong_fumo"));//mxmxd_dakong_fumo,写入装备附魔信息，附魔系统
		ps2.executeUpdate();
	}
	inventoryIdMap.clear();
	return true;
}