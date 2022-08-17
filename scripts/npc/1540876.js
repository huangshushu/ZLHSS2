var status = 0;
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var A=0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0){
			//初始化对象
			cm.sendGetText("#b请输入 16 位 CDKEY 序列号领取奖品：\r\n#d1. 每晚GM会在QQ群中会发放CDKEY，拼拼手速与运气吧！\r\n2. 通过转盘抽奖获得CDKEY进行兑换。\r\n3. 通过各类内测活动获得CDKEY\r\n");
		} else if (status == 1) {
			var cdkeyCode = cm.getText();
			if(Care_Ver(cdkeyCode)==0){
				cm.sendOk("CDKEY不存在或已经被人使用！");
				cm.dispose();
			}else if (Care_Ver(cdkeyCode)>1){
					cm.sendOk("您输入的CDKEY已经使用过了！");
					cm.dispose();
			}
			if (Care_Ver(cdkeyCode)==1){
				A=cdkeyCode;
					var text= "是否现在就要领取？";
					cm.sendYesNo(text);
			}
		} else if (status == 2) {
			if(Care_Acc(A)!=cm.getAccountName()){
					cm.sendOk("抱歉的当前礼包只能内测的固定玩家账号领取");
					cm.dispose();
					return;
			}

			if(Care_Ver(A)==1){
			cm.gainItem(Care_item(A),1)
				cm.sendOk("恭喜你 领取成功");
			Care_Up(A);
					cm.dispose();
			}else {
							cm.sendOk("被别人领了 抱歉");
					cm.dispose();
			}
		}
	}
}

function Care_Ver(ver) {
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM `Care_Cdkey` WHERE `cdkey` = "+ver+"").executeQuery();
    while (Times.next()) {
        i = Times.getString("ver");
    }
    Times.close();
    return parseInt(i);
}

function Care_item(ver) {
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM `Care_Cdkey` WHERE `cdkey` = "+ver+"").executeQuery();
    while (Times.next()) {
        i = Times.getString("item");
    }
    Times.close();
    return parseInt(i);
}

function Care_Up(ver) {
        var update = cm.getConnection().prepareStatement("update `Care_Cdkey` set ver = ? WHERE (`cdkey`='" + ver + "');");
        update.setString(1, 2);
        update.executeUpdate();
}

function Care_Acc(ver) {
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM `Care_Cdkey` WHERE `cdkey` = "+ver+"").executeQuery();
    while (Times.next()) {
        i = Times.getString("acc");
    }
    Times.close();
    return i;
}