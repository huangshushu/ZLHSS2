var status = 0;
var typed = 0;
var itemid = 0;
var itemprice = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
		} else if (status == 0) {
			var text = "#d#e绝版点装管理系统#k#n\r\n\r\n";
			text+="#r#e[说明]#n#k增加绝版点装时，如果输入的价格为0，就会删除该点装数据，如果输入重复的ID，新的价格数据会覆盖之前的数据。\r\n";
			text+="#b#L1#增加绝版点装#l\r\n";
			//text+="#b#L2#修改/删除绝版点装#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1 || typed==1) {
				cm.sendGetNumber("#d#eStep 1.#n#k 输入要添加的物品ID：", 0, 999999, 9999999);
				typed = 1;
			} else if (selection == 2) {
				cm.dispose();
			}
		} else if (status == 2) {
			if (typed==1) {
				itemid = selection;
				if (cm.getItemName(itemid)==null)
				{
					status = 0;
					cm.sendNext("不存在的ID，请重新输入"+itemid);
				} else {
					cm.sendGetNumber("#d#eStep 2.#n#k 您添加的物品为#b<#z"+itemid+"#>#k，请输入物品的价格：", 0, 0, 9999999);
				}
			} else {
				
			}
		} else if (status == 3) {
			if (true) {
				if (typed==1) {
					itemprice = selection;
					var text = "删除成功";
					var conn = cm.getConnection();
					var delSql = "delete from npccashshop where itemid = ?";
					var pstmt = conn.prepareStatement(delSql);
					pstmt.setInt(1, itemid);
					pstmt.executeUpdate();
					
					if (itemprice > 0) {
						var sql = "insert into npccashshop(itemid,itemname,itemprice, verify) values(?,?,?, 1)";
						pstmt = conn.prepareStatement(sql);
						pstmt.setInt(1, itemid);
						pstmt.setString(2, cm.getItemName(itemid));
						pstmt.setInt(3, itemprice);
						pstmt.executeUpdate();
						text = "添加成功";
					}
					pstmt.close();
					//conn.close();
					cm.sendSimple(text);
					status = -1;
				}
			} else {
				if (typed==1) {
					itemprice = selection;
					var conn = cm.getConnection();
					if (itemprice > 0) {
						var delSql = "delete from npccashshop where itemid = ?";
						var pstmt = conn.prepareStatement(delSql);
						pstmt.setInt(1, itemid);
						pstmt.executeUpdate();
						var sql = "insert into npccashshop(itemid,itemname,itemprice,verify) values(?,?,?, 0)";
						pstmt = conn.prepareStatement(sql);
						pstmt.setInt(1, itemid);
						pstmt.setString(2, cm.getItemName(itemid));
						pstmt.setInt(3, itemprice);
						pstmt.executeUpdate();
						text = "添加成功，请等待管理员审核";
					} else {
						var sql = "insert into npccashshop(itemid,itemname,itemprice,verify) values(?,?,?, -1)";
						pstmt = conn.prepareStatement(sql);
						pstmt.setInt(1, itemid);
						pstmt.setString(2, cm.getItemName(itemid));
						pstmt.setInt(3, itemprice);
						pstmt.executeUpdate();
						text = "您的删除请求已经发出，请等待管理员审核。";
					}
					pstmt.close();
					//conn.close();
					cm.sendSimple(text);
					status = -1;
				}
			}
		}
    }//mode
}//f