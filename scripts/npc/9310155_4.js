
var status = 0;
var PPO = "#fMap/MapHelper.img/weather/5000days/3#";
var PPI = "#fMap/MapHelper.img/weather/5000days/0#";
var hair_Colo_new;
var isSecond = false;
var PPC = "#fMap/MapHelper.img/weather/5000days/2#";

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
		cm.sendGetNumber(""+PPO+" 请输入您想更换的 #r#e肤色代码 ( 1 - 12 )\r\n ",1,0,12);
    }  
	else if(status == 1){	
    QQL = selection		
	if(selection == null){
		cm.playerMessage(1,"您输入的肤色不存在");
		cm.dispose();
		return;
	}
	if (cm.getChar().getCSPoints(1) <=500000){
		cm.sendOk("您的点券不足 500000 无法变更!");
		cm.dispose();
		return;
	}
	else if(selection == selection){
    cm.setAndroidSkin(QQL);
	cm.gainNX(1,-500000);
	cm.sendOk("帮您机器人替换肤色了唷!");
	cm.dispose();
	}
	
}
    }

