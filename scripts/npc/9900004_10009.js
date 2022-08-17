importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
// importClass(java.lang.String);
importClass(Packages.database.DBConPool);
importPackage(java.util.regex);
importClass(Packages.tools.处理字符串);
importClass(Packages.client.MapleCharacter);
importClass(Packages.handling.channel.ChannelServer);
importClass(Packages.constants.GameConstants);


/*
SnailMS脚本生成器
*/

var chrid = 0;
var chr = null;
var totalNeeded = 0;
var totalNeededFianl = 0;
var targetLevel = 0;
var 最高等级 = 50;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
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
		var message = 读取在线徒弟列表选项();
		// var mount = cm.获得总徒弟数量();
	    cm.sendSimple(message);
		// cm.getPlayer().dropMessage("开师门\r\n");
		
	} else if (status == 1) {
		// cm.getPlayer().dropMessage("status == 1\r\n");//调试
		if(selection > 0){
			chrid = selection;
			
			var name = MapleCharacter.getCharacterNameById(chrid);
			var online_chrs = 读取在线角色();
			var isOnline = false;
			for(var i = 0; i < online_chrs.size(); i++){
				// cm.getPlayer().dropMessage("online_chrs.get(i).getId() == " + online_chrs.get(i).getId() + "\r\n");//调试
				// cm.getPlayer().dropMessage("chrid == " + chrid + "\r\n");//调试
				if(online_chrs.get(i).getId() == chrid){
					isOnline = true;
					chr = online_chrs.get(i);
				}
			}
			if(isOnline){
				if(chr != null && chr.getLevel() < 最高等级){
					cm.sendGetNumber("你的徒弟 #r" + name + "#k 目前等级为 #r" + chr.getLevel() + "#k 级，你想把他/她拔高到多少级？", 1, chr.getLevel() + 1, 最高等级);
					
				}else{
					cm.sendOk("你的徒弟 #r" + name + " #k等级超过了#r" + 最高等级 + "#k级！\r\n");
				}
			}else{
				cm.sendOk("你的徒弟 #r" + name + " #k并不在线啊！\r\n");
				cm.dispose();
				return;
			}
		
			cm.sendYesNo("想清楚了么？你确认要把 #r" + name +"#k 逐出师门么？");
		}
		
	}else if (status == 2){
		// cm.getPlayer().dropMessage("status == 2\r\n");//调试
		targetLevel = selection;
		// cm.getPlayer().dropMessage("targetLevel " + targetLevel);//调试
		if(chr != null){
			if(targetLevel <= chr.getLevel()){
				cm.sendOk("你输入的等级比该角色等级还低，你是要给你徒弟降级么？");
				cm.dispose();
				return;
			}else if(targetLevel > 最高等级){
				cm.sendOk("你输入的等级超过了 " + 最高等级 + " 级，再给你一次机会重新输入~");
				cm.dispose();
				return;
			}else{
				totalNeeded = 0;
				var old_level = chr.getLevel();
				for(var level = old_level + 1; level <= targetLevel; level++){
					totalNeeded += GameConstants.getExpNeededForLevel(level);
				}
				totalNeeded -= chr.getExp();
				totalNeededFianl = totalNeeded * 8;//升级经验和乘以一个系数
				cm.sendYesNo("想要将你的徒弟 #r" + chr.getName() + " #k升级到 " + targetLevel + " #k级，共计需要 #r" + totalNeeded + " #k经验值，这将消耗你 #r" + totalNeededFianl + " #k的储备经验，你目前的储备经验存量为 #b" + cm.读取储备经验() + " #k，请确认是否要给徒弟升级？");
				
			}
		}else{
			cm.sendOk("错误！选中角色为 null");
			cm.safeDispose();
			return;
		}
	} else if (status == 3){
		if(chr == null){
			cm.sendOk("错误！选中角色为 null");
			cm.safeDispose();
			return;
		}
		if(cm.读取储备经验() >= totalNeededFianl){
			cm.getPlayer().扣除经验储备(totalNeededFianl);
			for(var i = chr.getLevel(); i < targetLevel; i++){
				chr.levelUp();
			}
			cm.sendOk("恭喜，你已成功将徒弟 #r" + chr.getName() + " #k的等级拔高至 " + targetLevel + " #k级。");
			cm.全服黄色喇叭("【师徒系统】 : 师恩重如山, ["+cm.getPlayer().getName()+"] 望徒成龙，将徒弟 ["+ chr.getName() +"] 的等级拔高到了 " + targetLevel + " 级。");
			
		}else{
			cm.sendOk("你的储备经验不足，无法给徒弟拔高到指定的等级");
			cm.dispose();
		}
		
	} else {
		cm.safeDispose();
		return;
	}
}

function 是否出师(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		result = rs.getInt("graduate");
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function 离开师门(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		var ps0 = con.prepareStatement("Delete FROM 徒弟列表 WHERE student_id = ?");
		ps0.setInt(1, chrid);
		ps0.executeUpdate();
		result = 1;
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function 获得徒弟列表(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("name");
	}
	return name;
}

function 获得师傅姓名(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("chrname");
	}
	return name;
}


function 迁移徒弟列表(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var log = "";
	var graduates_id = new ArrayList();
	var students_id = new ArrayList();
	var students_name = new ArrayList();
	var chrname = "";
	var str = "";

	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		chrname = rs.getString("name");
	}else{
		return "";
	}
	ps.close();
	rs.close();
	
	var ps0 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps0.setInt(1, chrid);
	var rs0 = ps0.executeQuery();
	var is_teacher = false;
	while(rs0.next()){
		if(rs0.getString("log").equals("师傅")){
			is_teacher = true;
			break;
		}
	}
	if(!is_teacher){
		cm.getPlayer().dropMessage("角色 " + chrid + " 不是师傅");
		return "该角色不是师傅";
	}
	
	var ps1 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps1.setInt(1, chrid);
	var rs1 = ps1.executeQuery();
	while(rs1.next()){
		log = rs1.getString("log");
		if(Pattern.compile("^-?[1-9]\\d*$").matcher(log).find()){
			if(Integer.parseInt(log) > 0){
				var ps2 = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
				ps2.setInt(1, Integer.parseInt(log));
				var rs2 = ps2.executeQuery();
				while(rs2.next()){
					if(rs2.getInt("id") == null){
						break;
					}
					students_id.add(rs2.getInt("id"));
					students_name.add(rs2.getString("name"));
				}
				ps2.close();
				rs2.close();
			}else{
				graduates_id.add(-Integer.parseInt(log));
				str += graduates_id.get(0);
			}
			
		}
	}
	ps1.close();
	rs1.close();
	
	if(!students_id.isEmpty()){
		var ps3 = con.prepareStatement("Delete FROM 徒弟列表 WHERE chrid = ?");
		ps3.setInt(1, chrid);
		ps3.executeUpdate();
		ps3.close();
		
		for(var i = 0; i < students_id.size(); i++){
			var ps4 = con.prepareStatement("INSERT INTO 徒弟列表 (chrid, chrname, student_id, student_name, graduate) VALUES (?, ?, ?, ?, ?)");
			// ps4.setInt(1, i + 1);
			// ps4.setInt(1, chrid);
			// ps4.setString(2, 处理字符串.removeSpecialCharacters2(chrname));
			// ps4.setInt(3, students_id.get(i));
			// ps4.setString(4, 处理字符串.removeSpecialCharacters2(students_name.get(i)));
			
			ps4.setInt(1, chrid);
			ps4.setString(2, chrname);
			ps4.setInt(3, students_id.get(i));
			ps4.setString(4, students_name.get(i));

			if(is_contain(graduates_id, students_id.get(i))){
				ps4.setInt(5, 1);
			}else{
				ps4.setInt(5, 0);
			}
			ps4.executeUpdate();
			ps4.close();
		}
	}
	
	
	
	return str;
}

function 迁移所有角色(){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters");
	var rs = ps.executeQuery();
	var i = 0;
	while(rs.next()){
		var chridi = rs.getInt("id");
		cm.getPlayer().dropMessage("迁移中，第 " + i + " 个，chrid： " + chridi);
		迁移徒弟列表(chridi);
		i = i + 1;
		
	}
	cm.getPlayer().dropMessage("迁移成功");
}


function 读取徒弟列表(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d你的徒弟列表如下：\r\n";
	message += "\t   序号\t\t姓名\t\t  等级\t   是否出师\r\n";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE chrid = ?");
	cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		ps0.setInt(1, rs.getInt("student_id"));
		var rs0 = ps0.executeQuery();
		var level = 0;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		
		message += "\t\t" + i + "\t\t#b" + 处理字符串.formatString(15, " ", rs.getString("student_name")) + 处理字符串.formatString(3, " ", level + "");
		if(rs.getInt("graduate") > 0){
			message += "\t\t#g已出师#d\r\n";
		}else{
			message += "\t\t#r未出师#d\r\n";
		}
		i++;
	}
	return message;
}

function 读取徒弟列表选项(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d请选择你要踢掉的徒弟：\r\n";
	message += "\t   序号\t\t姓名\t\t  等级\t   是否出师\r\n";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE chrid = ?");
	// cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		ps0.setInt(1, rs.getInt("student_id"));
		var rs0 = ps0.executeQuery();
		var level = 0;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		
		message += "\t #L" + rs.getInt("student_id") + "#" + i + "\t\t#b" + 处理字符串.formatString(15, " ", rs.getString("student_name")) + 处理字符串.formatString(3, " ", level + "");
		if(rs.getInt("graduate") > 0){
			message += "\t\t#g已出师#d#l\r\n";
		}else{
			message += "\t\t#r未出师#d#l\r\n";
		}
		i++;
	}
	return message;
}

function 读取在线徒弟列表选项(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d可以消耗大量储备经验强行给#r在线#d的徒弟升级，但最高只能升到#r" + 最高等级 + "#d级。请选择你要拔苗助长的徒弟：\r\n";
	message += "\t   序号\t\t姓名\t\t  等级\t   是否在线\r\n";
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE chrid = ?");
	// cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	var online_chrs = 读取在线角色();
	
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		var student_id = rs.getInt("student_id");
		ps0.setInt(1, student_id);
		var rs0 = ps0.executeQuery();
		var level = 0;
		var isOnline = false;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		for(var j = 0; j < online_chrs.size(); j++){
			if(online_chrs.get(j).getId() == student_id){
				isOnline = true;
			}
		}
		
		message += "\t #L" + student_id + "#" + i + "\t\t#b" + 处理字符串.formatString(15, " ", rs.getString("student_name")) + 处理字符串.formatString(3, " ", level + "");
		if(isOnline){
			message += "\t\t#g在线#d#l\r\n";
		}else{
			message += "\t\t#r不在线#d#l\r\n";
		}
		i++;
		
		
	}
	return message;
}

function 读取在线角色(){
	var chrs0 = new ArrayList();
	var csvrs = new ArrayList(ChannelServer.getAllInstances());
	// cm.getPlayer().dropMessage("csvrs" + csvrs + "\r\n");//测试
	for(var i = 0; i < csvrs.size(); i++){
		var cs = csvrs.get(i);
		if(cs != null){
			var chrs = new ArrayList(cs.getPlayerStorage().getAllCharacters());
			for(var j = 0; j < chrs.size(); j++){
				chrs0.add(chrs.get(j));
				// cm.getPlayer().dropMessage("chr" + chrs[j]);//测试
			}
		}
		

	}
	/* for(var cs : ChannelServer.getAllInstances()){
		for (var chr : cs.getPlayerStorage().getAllCharacters()) {
			chrs.add(chr);
		}
	} */
	return chrs0;
}

function ArrayList(arr) {
    this._elementData = arr || [];
}
 
var arrayListPrototype = {
 
    '_arrayPrototype': Array.prototype,
 
    '_getData': function () {
        return this._elementData;
    },
 
    'size': function () {
        return this._getData().length;
    },
 
    'isEmpty': function () {
        return this.size() === 0;
    },
 
    'contains': function (obj) {
		var i, data = this._getData(), length = data.length;
		for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return true;
            }
        }
        return false;
    },
 
    'indexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'lastIndexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = length - 1; i > -1; i--) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'get': function (index) {
        return this._getData()[index];
    },
 
    'set': function (index, element) {
        this._getData()[index] = element;
    },
 
    'add': function (index, element) {
        if (element) {
            this.set(index, element);
        } else {
            return this._getData().push(index);
        }
    },
 
    'remove': function (index) {
        var oldValue = this._getData()[index];
        this._getData()[index] = null;
        return oldValue;
    },
 
    'clear': function () {
        this._getData().length = 0;
    },
 
    'addAll': function (index, array) {
        if (array) {
            this._getData().splice(index, 0, array);
        } else {
            this._arrayPrototype.push.apply(this._getData(), index);
        }
    }
 
};
 
ArrayList.prototype = arrayListPrototype;

function is_contain(datas, data){
	for(var i = 0; i < datas.size(); i++){
		if(data == datas.get(i)){
			return true;
		}
	}
	return false;
}
