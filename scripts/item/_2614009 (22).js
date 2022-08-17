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
		var 增加上限值 = 1000000;
		var 成功概率 = 30;//0~100
		if(cm.判断物品数量(2614008,1)){
			if(cm.概率判定(成功概率)){
				cm.增加伤害上限值(增加上限值);
				cm.gainItem(2614008,-1);
				var message = "恭喜玩家<" + cm.getPlayer().getName() + ">突破成功，伤害上限增加" + 增加上限值 + "，目前伤害上限为" +
				cm.读取伤害上限值() + "。";
				cm.全服喇叭(9,message);
				// var message = "突破成功，伤害上限增加" + 增加上限值 + "，目前伤害上限为" +
				// cm.读取伤害上限值() + "。";
				// cm.getPlayer().dropMessage(message);
				cm.对话结束();
			}else{
				var message = "天空一道闪电击下，正好落在了你的突破石上，它竟然碎了！";
				cm.getPlayer().dropMessage(message);
				cm.gainItem(2614008,-1);
				cm.对话结束();
			}
			
		}else{
			cm.getPlayer().dropMessage("抱歉，你没有足够的突破石！");
			cm.对话结束();
			return;
		}

    } else {
        cm.对话结束();
    }
}