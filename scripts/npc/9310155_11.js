
var status = 0;
var PPO = "#fMap/MapHelper.img/weather/5000days/3#";
var PPI = "#fMap/MapHelper.img/weather/5000days/0#";
var PPC = "#fMap/MapHelper.img/weather/5000days/2#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function equip(itemId) {
	cm.gainItemAndEquip(itemId, -1201);
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
		cm.sendGetNumber(""+PPO+" 请输入您想为机器人装备的 #r#e点装披风代码\r\n ",1,1100000,1109999);
    } else if (status == 1) {
		if(!cm.isCash(selection)){
			cm.playerMessage(1,"此功能只能输入点装代码");
			cm.dispose();
			return;
		}else{
		QQL = selection
		cm.sendYesNo("#b您输入代码的点装为\r\n\r\n#v"+selection+"##r#z"+selection+"#\r\n\r\n#b#e是否为机器人穿上\r\n ");
        
		}
}   else if(status == 2){
	if(selection == 0){
		cm.dispose();
	}
	else if(selection == selection){
	equip(QQL);
	cm.gainNX(1,-500000);
	cm.sendOk("已为您的机器人穿上嚕 !\r\n重新装备机器人即可查看");
	cm.dispose();
	}
	
}
    }

