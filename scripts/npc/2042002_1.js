/*
SnailMS脚本生成器
*/

var target1 = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
		//在这里编写脚本第一步要做的事
		var text = "#r在#b外面#r，我是怪物嘉年华，在#b自由市场#r，我就是活动总管\r\n#k请选择你要参加的活动：\r\n\r\n";
		//text += "#L1##bOX答题#k#l\t\t#L2##b打椰子#k#l\t\t#L3##b推雪球#k#l\r\n\r\n";
		//text += "#L4##b寻宝  #k#l\t\t#L5##b向高地#k#l\t\t#L6##b上楼上楼#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.sendYesNo("要把你传送到#rOX答题的比赛场地#k么？")
			target1 = 1;
		} else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.sendYesNo("要把你传送到#r打椰子的比赛场地#k么？")
			target1 = 2;
		} else if (selection == 3) {
			//在这里编写选项3要做的事
			cm.sendYesNo("要把你传送到#r推雪球的比赛场地#k么？")
			target1 = 3;
		} else if (selection == 4) {
			//在这里编写选项4要做的事
			cm.sendYesNo("要把你传送到#r寻宝的比赛场地#k么？")
			target1 = 4;
		} else if (selection == 5) {
			//在这里编写选项5要做的事
			cm.sendYesNo("要把你传送到#r向高地的比赛场地#k么？")
			target1 = 5;
		} else if (selection == 6) {
			//在这里编写选项6要做的事
			cm.sendYesNo("要把你传送到#r上楼上楼的比赛场地#k么？")
			target1 = 6;
		} 
		
	} else if (status == 2){
		switch(target1){
			case 1:
			cm.warp(109020001);
			break;
			case 2:
			cm.warp(109080000);
			break;
			case 3:
			var cs = cm.getPlayer().getClient().getChannelServer();
			var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.推雪球比赛);
			if(myEvent.isRunning()){
				cm.sendOk("抱歉，活动已开始，通道已关闭，下次早点来吧~");
				cm.dispose();
				return;
			}else{
				cm.warp(109060000);
			}
			break;
			case 4:
			cm.warp(109010000);
			break;
			case 5:
			cm.warp(109040000);
			break;
			case 6:
			cm.warp(109030001);
			break;
		}
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

