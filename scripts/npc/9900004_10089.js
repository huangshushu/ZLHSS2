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
		var message = "徒弟可以在这里领取阶段性奖励，每个阶段只能领取一次哦！\r\n";
		message += "#L1##b30#k级奖励:\t#v2000019#x#r100#k 点券x#r1000#k 抵用券x#r1000";
		if(cm.getOneTimeLog("徒弟30级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L2##b40#k级奖励:\t#v2000019#x#r200#k 点券x#r2000#k 抵用券x#r2000";
		if(cm.getOneTimeLog("徒弟40级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L3##b50#k级奖励:\t#v2000019#x#r300#k 点券x#r3000#k 抵用券x#r3000";
		if(cm.getOneTimeLog("徒弟50级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L4##b60#k级奖励:\t#v2000019#x#r350#k 点券x#r4000#k 抵用券x#r4000";
		if(cm.getOneTimeLog("徒弟60级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L5##b70#k级奖励:\t#v2000019#x#r400#k 点券x#r5000#k 抵用券x#r5000";
		if(cm.getOneTimeLog("徒弟70级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L6##b80#k级奖励:\t#v2000019#x#r450#k 点券x#r6000#k 抵用券x#r6000";
		if(cm.getOneTimeLog("徒弟80级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		message += "#L7##b90#k级奖励:\t#v2000019#x#r500#k 点券x#r8000#k 抵用券x#r8000";
		if(cm.getOneTimeLog("徒弟90级奖励") > 0){
			message += " #g已领取#k#l\r\n"
		}else{
			message += "#k#l\r\n";
		}
		// var mount = cm.获得总徒弟数量();
	    cm.sendSimple(message);
		// cm.getPlayer().dropMessage("开师门\r\n");
		
	} else if (status == 1) {
		// cm.getPlayer().dropMessage("status == 1\r\n");//调试
		if(!是否有师门(cm.getPlayer().getId())){
			cm.sendOk("你并没有师门啊！")
			cm.safeDispose();
			return;
		}
		switch(selection){
			case 1:
				if(cm.getPlayer().getLevel() < 30){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟30级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟30级奖励");
					// cm.gainItem(2000019, 100);
					cm.gainItem(2000019, 100, false, 0, 3000);
					cm.给点券(1000);
					cm.给抵用券(1000);
					cm.sendOk("恭喜你成功领取第1阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 2:
				if(cm.getPlayer().getLevel() < 40){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟40级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟40级奖励");
					// cm.gainItem(2000019, 200);
					cm.gainItem(2000019, 200, false, 0, 3000);
					cm.给点券(2000);
					cm.给抵用券(2000);
					cm.sendOk("恭喜你成功领取第2阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 3:
				if(cm.getPlayer().getLevel() < 50){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟50级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟50级奖励");
					// cm.gainItem(2000019, 300);
					cm.gainItem(2000019, 300, false, 0, 3000);
					cm.给点券(3000);
					cm.给抵用券(3000);
					cm.sendOk("恭喜你成功领取第3阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 4:
				if(cm.getPlayer().getLevel() < 60){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟60级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟60级奖励");
					// cm.gainItem(2000019, 350);
					cm.gainItem(2000019, 350, false, 0, 3000);
					cm.给点券(4000);
					cm.给抵用券(4000);
					cm.sendOk("恭喜你成功领取第4阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 5:
				if(cm.getPlayer().getLevel() < 70){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟70级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟70级奖励");
					// cm.gainItem(2000019, 400);
					cm.gainItem(2000019, 400, false, 0, 3000);
					cm.给点券(5000);
					cm.给抵用券(5000);
					cm.sendOk("恭喜你成功领取第5阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 6:
				if(cm.getPlayer().getLevel() < 80){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟80级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟80级奖励");
					// cm.gainItem(2000019, 450);
					cm.gainItem(2000019, 450, false, 0, 3000);
					cm.给点券(6000);
					cm.给抵用券(6000);
					cm.sendOk("恭喜你成功领取第6阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
			case 7:
				if(cm.getPlayer().getLevel() < 90){
					cm.sendOk("你的等级不够啊");
					cm.safeDispose();
					return;
				} else if(cm.getOneTimeLog("徒弟90级奖励") > 0){
					cm.sendOk("你已经领取过该奖励了");
					cm.safeDispose();
					return;
				} else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包空间不足");
				} else {
					cm.setOneTimeLog("徒弟90级奖励");
					// cm.gainItem(2000019, 500);
					cm.gainItem(2000019, 500, false, 0, 3000);
					cm.给点券(8000);
					cm.给抵用券(8000);
					cm.sendOk("恭喜你成功领取第7阶段奖励！你离出师更近一步了~");
					cm.safeDispose();
				}
				break;
				
			
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

function 是否有师门(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = false;
	ps = con.prepareStatement("SELECT * FROM 徒弟列表 WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		result = true;
	}
	return result;
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
	var message = "#d可以消耗大量储备经验强行给#r在线#d的徒弟升级，但最高只能升到#r50#d级。请选择你要拔苗助长的徒弟：\r\n";
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
