/*
 蜗牛冒险岛(079)游戏服务端
 突破石系统
 */


var status = -1;
var sels;

function start() {
	status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.对话结束();
        return;
    }
    if (status == 0) {
		var 增加上限值 = 10000000;
		if(cm.判断物品数量(2614003,1)){
			cm.增加伤害上限值(增加上限值);
			cm.gainItem(2614003,-1);
			var message = "恭喜玩家<" + cm.getPlayer().getName() + ">突破成功，伤害上限增加" + 增加上限值 + "，目前伤害上限为" +
			cm.读取伤害上限值() + "。";
			cm.全服喇叭(9,message);
			// var message = "突破成功，伤害上限增加" + 增加上限值 + "，目前伤害上限为" +
			// cm.读取伤害上限值() + "。";
			// cm.getPlayer().dropMessage(message);
			cm.对话结束();
		}else{
			cm.getPlayer().dropMessage("抱歉，你没有足够的突破石！");
			cm.对话结束();
			return;
		}

    } else {
        cm.对话结束();
    }
}