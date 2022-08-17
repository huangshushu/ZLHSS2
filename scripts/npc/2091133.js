
var eff = "#fEffect/CharacterEff/1051296/1/0#";
var eventid = 16711;//活動ID
//var menpaiboss = false;
var mpid;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
		
		//var revenue = cm.getHyPay(3);
		//var selStr = "小提示:你可以将游戏窗口调整到1024×768分辨及以上的的其他分辨率,然后就可以在频道选项框的左上角看到拍卖小按钮啦,这样就可以直接呼出万能NPC哟!\r\n";
		var selStr = "\t\t\t\t\t飞龙在天门派\r\n\r\n";
            selStr += "尊敬的玩家#r#h0##k您好:\r\n";
			selStr += "我是负责管理飞龙在天门派的管理员，您是否愿意加入我们门派？\r\n";
			selStr += "#b#L1#恩，是的，我非常愿意加入门派。#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            cm.dispose();
		if (cm.haveItem(1142745) || cm.getPlayer().hasEquipped(1142745)) {
			cm.sendOk("你身上已经有了#v1142745#了，或者你已经加入了虎啸九天的门派了，不可以再领取了。");
            //cm.gainItem(1142745, 1);
			//cm.sendOk("恭喜你成为飞龙在天的一员。");
		} else {
			//cm.sendOk("你身上已经有了#v1142745#，不可以再领取了。");
			var P = new EvPoint();
		    mpid = 2;
			P.AddMenpaiMember(mpid);
			cm.gainItem(1142745, 1);
			cm.gainItem(3015305, 1);
			cm.gainItem(1142746, -1);
			cm.gainItem(3015306, -1);
			//cm.setPQLog("加入飞龙在天" ,1)
			cm.sendOk("恭喜你成为飞龙在天的一员。");
			cm.worldSpouseMessage(0x05,"★★★★★★★『门派管理』：【"+ cm.getChar().getName() +"】 成功成为了飞龙在天门派的一员!★★★★★★★");
            break;
}
}
    }
}

function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}


var EvPoint = function() {
    //用法：var P = new EvPoint();
    //P.函數名字(),如：P.AddMenpaiMemberPoints(增加的贡献度)
    this.getMenpaiBoss = function(mpid) {//通過贡献度排名第一个的情況来确定门派老大(24小时內必须有增加活跃度)。
        var conn = cm.getConnection();
        var pstmt = conn.prepareStatement("SELECT charname,DATE_FORMAT(date,'%m月%d日') as date FROM menpaiMember where mpid = " + mpid + " and DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(date) ORDER BY points DESC LIMIT 1");
        var RankDataBase = pstmt.executeQuery();
        if (RankDataBase.next()) {
            return RankDataBase.getString("charname");
        }
    }
    this.getMenPaiMemberTotal = function(mpid) {
        var i = 0;
        var data = cm.getConnection().prepareStatement("SELECT id FROM menpaiMember where mpid = " + mpid + "").executeQuery(); // 查询数据
        while (data.next()) {
            i++;
        }
        return i;
    }
    this.getMenpaiPoints = function(mpid) {//得到门派的总荣誉值
        var data = cm.getConnection().prepareStatement("SELECT points FROM menpaiSystem where mpid = " + mpid + "").executeQuery(); // 查询数据
        if (data.next()) {
            return data.getInt("points");
        }
    }
    this.AddMenpaiMemberPoints = function(points) {//增加门派角色的贡献度（可负号扣除）
        var data = cm.getConnection().prepareStatement("SELECT * FROM menpaiMember where charid = " + cm.getPlayer().getId() + "").executeQuery(); // 查询数据
        if (!data.next()) {
            //cm.playerMessage("增加贡献度失敗，请先加入一个门派。");
        }
        var update = cm.getConnection().prepareStatement("update menpaiMember set points = ?,date = ? where charid = " + cm.getPlayer().getId() + "");//更新为已使用
        update.setString(1, this.getMenpaiMemberPoints() + points);
        update.setString(2, null);//更新时间
        update.executeUpdate();
        update.close();
        this.checkIfBeingBoss();////检查是否变成了门派老大！
    }
    this.checkIfBeingBoss = function() {//检查是否变成了门派老大！
        if (this.getMenpaiBoss(this.getMenpaiId()) == cm.getPlayer().getName()) {
            cm.worldMessage(6, "恭喜" + cm.getPlayer().getName() + "成为了" + this.getMenpaiName() + "的门派老大！！");
        }
        return;
    }
    this.getMenpaiMemberPoints = function() {//得到门派角色的贡献度
        var data = cm.getConnection().prepareStatement("SELECT points FROM menpaiMember where charid = " + cm.getPlayer().getId() + "").executeQuery(); // 查询数据
        if (data.next()) {
            return data.getInt("points");
        }
    }
    this.AddMenpaiMember = function(mpid) {//在某个门派中增加一个成员
        var data = cm.getConnection().prepareStatement("SELECT * FROM menpaiMember where charid = " + cm.getPlayer().getId() + "").executeQuery(); // 查询数据
        if (data.next()) {
            return false;
        }
        var insert = cm.getConnection().prepareStatement("INSERT INTO menpaiMember VALUES(?,?,?,?,?,?,?)"); // 载入数据
        insert.setString(1, null); //载入记录ID
        insert.setString(2, mpid); //载入mpid
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, 0);//points 点数
        insert.setString(6, 0);// 角色在门派中扮演的角色
        insert.setString(7, null);//角色门派加入時間
        insert.executeUpdate(); //更新
        insert.close();
        this.setEventPoints(eventid, cm.getPlayer().getId(), 1);
        return true;
    }
    this.getMenpaiName = function() {//得到角色门派的名字
        var i = 0;
        var data = cm.getConnection().prepareStatement("SELECT mpid FROM menpaiMember where charid = " + cm.getPlayer().getId() + "").executeQuery(); // 查询数据
        while (data.next()) {
            i = data.getInt("mpid");//得到门派id
        }
        if (i == 1) {
            return "飞龙在天";
        } else if (i == 2) {
            return "虎啸九天";
        } else {
            return i;
        }
    }
    this.getMenpaiId = function() {//得到角色门派的ID
        var i = 0;
        var data = cm.getConnection().prepareStatement("SELECT mpid FROM menpaiMember where charid = " + cm.getPlayer().getId() + "").executeQuery(); // 查询数据
        while (data.next()) {
            i = data.getInt("mpid");//得到门派id
        }
        return i;
    }

    // ----- 分割线（下面是活动需要函數） ------
    this.DelEventPoints = function(Eventid, charid) {
        var delectData = cm.getConnection().prepareStatement("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
        delectData.executeUpdate(); //删除数据
    }

    this.DelEventPoints = function(Eventid, charid) {
        var delectData = cm.getConnection().prepareStatement("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
        delectData.executeUpdate(); //删除数据
    }

    this.getEventTimes = function(Eventid, charid) {//通过eventid来得到参与这个活动的次数
        var i = 0;
        var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
        while (Times.next()) {
            i = Times.getString("times");//得到次数
        }
        return parseInt(i);
    }

    this.getEventPoints = function(Eventid, charid) {//通过eventid来得到参与这个活动的点数
        var i = 0;
        var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
        while (Times.next()) {
            i = Times.getString("points");//得到点数
        }
        return parseInt(i);
    }

    this.setEventPoints = function(Eventid, charid, points) {//通过eventid来给予参与这个活动的点数
        var i = 0;
        var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
        while (Times.next()) {
            i++;
        }
        if (i == 0) {//insert
            var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 载入数据
            insert.setString(1, null); //载入记录ID
            insert.setString(2, Eventid); //载入活动ID
            insert.setString(3, cm.getPlayer().getId());//cid
            insert.setString(4, cm.getPlayer().getName());//cname
            insert.setString(5, points);//points 点数
            insert.setString(6, this.getEventTimes(1, charid));//times 次数
            insert.setString(7, null);//
            insert.executeUpdate(); //更新
        } else {//update
            var update = cm.getConnection().prepareStatement("update EventTimes set points = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新为已使用
            update.setString(1, this.getEventPoints(Eventid, charid) + points);
            update.executeUpdate();
        }
    }

    this.setEventTimes = function(Eventid, charid, times) {//通过eventid来设置参与这个活动的次数
        var i = 0;
        var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查询数据
        while (Times.next()) {
            i++;
        }
        if (i == 0) {//insert
            var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 载入数据
            insert.setString(1, null); //载入记录ID
            insert.setString(2, Eventid); //载入活动ID
            insert.setString(3, cm.getPlayer().getId());//cid
            insert.setString(4, cm.getPlayer().getName());//cname
            insert.setString(5, this.getEventPoints(2, charid));//points 点数
            insert.setString(6, times);//times 次数
            insert.setString(7, null);//
            insert.executeUpdate(); //更新
        } else {//update
            var update = cm.getConnection().prepareStatement("update EventTimes set times = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新为已使用
            update.setString(1, this.getEventTimes(Eventid, charid) + times);
            update.executeUpdate();
        }
    }
}
