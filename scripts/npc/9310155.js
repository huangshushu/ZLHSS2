
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
		if(cm.getChar().getAndroid() == null){
			cm.sendSimple("#r#e你要先装备机器人呀!");
			cm.dispose();
			return;
		}
		if(cm.getPlayer().getCSPoints(1) <=500000){
			cm.sendSimple("#r#e请您先准备 500000 点券再来找我哦~");
			cm.dispose();
			return;
		}
		cm.sendSimpleN("#r#e请选择你想帮机器人做什么造型,直接输入代码即可#n#k\r\n(#b代码请前往百度搜索:冒险岛代码 自行查看#k)\r\n#k#L1#机器人整容#l\r\n\r\n#L2#机器人美发#l\r\n\r\n#L3#机器人护肤#l\r\n\r\n#L4#机器人穿点装#l",730,9310373);
    } else if (status == 1) {
		if(selection == 1){
			cm.dispose();
			cm.openNpc(9310155,1);
		}
		else if (selection == 2){
			cm.dispose();
			cm.openNpc(9310155,2);
		}
		else if (selection == 3){
			cm.dispose();
			cm.openNpc(9310155,4);
		}
		else if(selection == 4){
			cm.sendSimple("#r#e请选择您想穿戴哪个部位(每次需要消耗50w点券哦)：#k#n\r\n\r\n#b#L5#帽子#l   #L6#脸饰#l   #L7#套装#l   #L8#上衣#l\r\n\r\n#L9#裤子#l   #L10#手套#l   #L11#披风#l   #L12#鞋子#l")
		}
    } else if(status == 2){
		if(selection != null){
			cm.dispose();
			cm.openNpc(9310155,selection)
		}
	}
}

