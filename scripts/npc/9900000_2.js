/*
SnailMS脚本生成器
*/

var 活动名称 = Array("OX答题", "打椰子", "推雪球", "寻宝", "向高地", "上楼上楼");
var choosed = 0;

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
		var text = "你选择你要管理的活动：\r\n\r\n";
		for(var i = 0; i < 活动名称.length; i++){
			text += "\t\t#L" + i + "##b" + 活动名称[i] + "#k#l";
			if(i % 2 == 0){
				text += "\t";
			}else{
				text += "\r\n";
			}
		}
		text += "\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		choosed = selection;
		var text = "你选择了#r" + 活动名称[choosed] + "#k，请选择 #g开启#k 或者 #r关闭#k:\r\n\r\n"
		text += "\t\t#b#L1#【开启】#k#l\t#b#L2#【关闭】#k#l";
		cm.sendSimple(text);
		
	} else if(status == 2){
		switch(choosed){
			case 0:
				if(selection == 1){
					cm.startOxQuiz(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.OX答题比赛);
					myEvent.unreset();
					break;
				}
			case 1:
				if(selection == 1){
					cm.startCoconut(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.打椰子比赛);
					myEvent.unreset();
					break;
				}
			case 2:
				if(selection == 1){
					var chrList = cm.getPlayer().getMap().getAllPlayersThreadsafe();
					if(chrList != null){
						var it = chrList.iterator();
						var i = 1;
						while(it.hasNext()){
							var chr = it.next();
							if(chr != null){
								/* chr.changeMap(910000000);
								while(chr.getMapId() == 910000000){
									if(i % 2 == 0){
										chr.changeMap(109060000, 0);
									}else{
										chr.changeMap(109060000, 1);
									}
								} */
								if(i % 2 == 0){
										chr.changeMap(109060000, 0);
									}else{
										chr.changeMap(109060000, 1);
									}
								i++;
							}
						}
						cm.startSnowBall(cm.getChannel());
					}
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.推雪球比赛);
					myEvent.unreset();
					break;
				}
			case 3:
				if(selection == 1){
					cm.startJewel(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.寻宝);
					myEvent.unreset();
					break;
				}
			case 4:
				if(selection == 1){
					cm.startFitness(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.向高地比赛);
					myEvent.unreset();
					break;
				}
			case 5:
				if(selection == 1){
					cm.startOla(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.上楼上楼);
					myEvent.unreset();
					break;
				}
				
		}
		if(selection == 1){
			cm.全服喇叭(6, "[活动公告] 管理员开启了 " + 活动名称[choosed] + " 活动。")
			cm.sendOk("你已开启活动。");
			cm.dispose();
			return;
		}else if(selection == 2){
			cm.全服喇叭(6, "[活动公告] 管理员关闭了 " + 活动名称[choosed] + " 活动。")
			cm.sendOk("你已关闭活动。");
			cm.dispose();
			return
		}
		
	} else {
		cm.dispose();
		return;
	}
}

