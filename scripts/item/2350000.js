/*
 蜗牛冒险岛(079)游戏服务端
 增加角色卡
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
		var 增加数量 = 1;
		if(cm.读取角色位() >= 15){
			cm.sendSimpleS("抱歉，你的角色数量已达到可添加的上限值", 0, 3003364);
			cm.dispose();
			return;
		}
		if(cm.判断物品数量(2350000,1)){
			cm.增加角色位(增加数量);
			
			cm.gainItem(2350000,-1);
			// var message = "恭喜玩家<" + cm.getPlayer().getName() + ">突破成功，伤害上限增加" + 增加上限值 + "，目前伤害上限为" +
			// cm.读取伤害上限值() + "。";
			//cm.全服喇叭(9,message);
			var item = cm.getNewEquip(2350000);
			cm.sendSimpleS("恭喜你增加成功，当前角色位数量为 #b" + cm.读取角色位() + "#k 个，请重新登陆确认。", 0, 3003364);
			cm.全服道具公告("【角色系统】", "玩家 " + cm.getPlayer().getName() + " 使用角色卡增加了角色栏上限！", item);
			cm.对话结束();
		}else{
			cm.sendSimpleS("抱歉，你没有足够的#v2350000#", 0, 3003364);
			cm.对话结束();
			return;
		}

    } else {
        cm.对话结束();
    }
}