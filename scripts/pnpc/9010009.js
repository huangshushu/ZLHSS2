/*
SnailMS脚本生成器
*/
importClass(Packages.snail.Marathon);
importClass(Packages.client.MapleCharacter);
importClass(Packages.tools.处理字符串);

var 起点 = Array(250020300, "起点在哪里呢");
var 终点 = Array(230040420, "终点比赛开始后会弹出来的");
var 比赛时长 = 30;//分钟
var 前3奖品 = Array(
	Array(Array(2430282, 1), Array(4310088, 1)),
	Array(Array(2340000, 2)),
	Array(Array(2340000, 2))
);
var 全体点券 = 10000;
var 全体抵用 = 10000;


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
		if(Marathon.isBegain() && Marathon.hasJoined(cm.getPlayer()) && cm.getPlayer().getMapId() == Marathon.getFinishMapId() && !Marathon.isFinished(cm.getPlayer())){
			if(Marathon.arrive(cm.getPlayer())){
				cm.sendOk("恭喜你完成了比赛，等比赛结束后，就可以找我领取奖励了！");
				cm.dispose();
				return;
			}else{
				cm.sendOk("你的#v" + Marathon.getItemId() + "#呢？没有它就无法完成比赛哦！如果你没有在变身状态，也无法完成比赛~");
				cm.dispose();
				return;
			}
		}
		var text = "";
		if(!Marathon.isOpen()){
			text += "抱歉，马拉松比赛尚未开启，仅可查看排名与领取奖品。\r\n\r\n";
			text += "\t\t\t\t#L3##b查看排名#k#l\r\n";
			text += "\t\t\t\t#L4##b查看奖品列表#k#l\r\n";
			text += "\t\t\t\t#L5##b领取奖品#k#l\r\n";
			text += "\t\t\t\t#L10##b领回禁用技能#k#l\r\n\r\n";
			text += "\t\t\t\t#L6##r对不起打扰了#k#l\r\n\r\n";
		}else{
			text += "欢迎来到激动人心的#r马拉松比赛#k，这次比赛的起点是 #r" + 起点[1] + "#k，终点是 #r" + 终点[1] + "#k，比赛时长为 #r" + Marathon.getDuration()/1000/60 + " #k分钟，#r请尽快报名#k，然后等待比赛开始。\r\n\r\n";
			text += "\t\t\t\t#L1##b我要报名#k#l\r\n";
			text += "\t\t\t\t#L2##b查看参赛队伍名单#k#l\r\n";
			text += "\t\t\t\t#L3##b查看排名#k#l\r\n";
			text += "\t\t\t\t#L4##b查看奖品列表#k#l\r\n";
			text += "\t\t\t\t#L5##b领取奖品#k#l\r\n";
			text += "\t\t\t\t#L10##b领回禁用技能#k#l\r\n\r\n";
			text += "\t\t\t\t#L6##r对不起打扰了#k#l\r\n\r\n";
		}
		
		if(cm.getPlayer().getGMLevel() >= 30){
			text += "********************以下为GM选项**********************\r\n";
			text += "\t\t\t\t#L7##d开启活动#k#l\r\n";
			text += "\t\t\t\t#L8##d比赛开始#k#l\r\n";
			text += "\t\t\t\t#L9##d关闭活动#k#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			if(Marathon.joinIn(cm.getPlayer())){
				cm.sendOk("恭喜你报名成功，已将比赛道具#v" + Marathon.getItemId() + "#发放至你的背包，请耐心等候比赛开始。\r\n#r注：比赛期间，若变身效果消失，可使用比赛道具重新变身，即可继续比赛。\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("报名失败，请保证你的背包至少留有 #r1#k 格空间，或者比赛已经开始，无法报名。\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			var chrIdList = Marathon.getChrIdList();
			if(chrIdList == null){
				cm.sendOk("暂时无人报名。\r\n");
				cm.dispose();
				return;
			}else{
				var text = "参赛人员如下：\r\n";
				for(var i = 0;i < chrIdList.size(); i++){
					var chrName = MapleCharacter.getCharacterNameById(chrIdList.get(i));
					text += "\t\t\t\t\t#d" + 处理字符串.formatString(3, " ", (i + 1)) + ": #b" + 处理字符串.formatString(10, " ", chrName) + "#k\r\n";
				}
				cm.sendOk(text);
				cm.dispose();
				return;
			}
		}else if (selection == 3) {
			//在这里编写选项2要做的事
			var chrList = Marathon.getChrList();
			if(chrList == null){
				cm.sendOk("暂时无人完成比赛。\r\n");
				cm.dispose();
				return;
			}else{
				var text = "马拉松排行榜如下：\r\n";
				text += "\t\t\#d排名\t\t\t姓名\t\t\t耗时#k\r\n";
				for(var i = 0;i < chrList.size(); i++){
					var chrName = MapleCharacter.getCharacterNameById(chrList.get(i).left);
					var min = parseInt(chrList.get(i).right/1000/60);
					var sec = parseInt(chrList.get(i).right/1000%60);
					text += "\t\t  #b" + 处理字符串.formatString(3, " ", (i + 1)) + "\t\t\t  #b" + 处理字符串.formatString(12, " ", chrName) + "   " +  + min + "分" + sec +"秒#k\r\n";
				}
				cm.sendOk(text);
				cm.dispose();
				return;
			}
		}else if (selection == 4) {
			//在这里编写选项2要做的事
			var text = "奖品列表如下：\r\n";
			for(var i = 0; i < 前3奖品.length; i++){
				text += "第 #r" + (i + 1) + "#k 名:";
				for(var j = 0; j < 前3奖品[i].length; j++){
					text += "#v" + 前3奖品[i][j][0] + "##bx" + 前3奖品[i][j][1] + "#k ";
				}
				text += "\r\n";
			}
			text += "全体奖励：#b" + 全体点券 + "#k 点券，#b" + 全体抵用 + " #k抵用\r\n";
			cm.sendOk(text);
			
		}else if (selection == 5) {
			//在这里编写选项2要做的事
			if(Marathon.isBegain()){
				cm.sendOk("比赛仍再进行中，请等待比赛结束后领取奖品。\r\n");
				cm.dispose();
				return;
			}
			if(!Marathon.isFinished(cm.getPlayer())){
				cm.sendOk("你并没有完成比赛啊。\r\n");
				cm.dispose();
				return;
			}
			if(Marathon.isRewarded(cm.getPlayer())){
				cm.sendOk("你已经获得过奖励了。\r\n");
				cm.dispose();
				return;
			}
			Marathon.setReward(cm.getPlayer(), true);
			var rank = Marathon.getRank(cm.getPlayer());
			for(var i = 0; i < 前3奖品.length; i++){
				if(i + 1 == rank){
					for(var j = 0; j < 前3奖品[i].length; j++){
						cm.gainItem(前3奖品[i][j][0], 前3奖品[i][j][1]);
					}
				}
			}
			cm.给点券(全体点券);
			cm.给抵用券(全体抵用);
			if(rank <= 前3奖品.length){
				cm.全服喇叭(3, "恭喜第 " + rank + " 名参赛者 " + cm.getPlayer().getName() + " 领取了丰厚的马拉松比赛奖励。");
			}else{
				cm.全服喇叭(3, "恭喜 " + cm.getPlayer().getName() + " 领取了马拉松比赛奖励。");
			}
			cm.sendOk("恭喜你成功领取了丰厚的奖品。\r\n");
			cm.dispose();
			return;
			
		}else if (selection == 6) {
			//在这里编写选项2要做的事
			cm.dispose();
			return;
		}else if (selection == 7) {
			//在这里编写选项2要做的事
			Marathon.setBegainMapId(起点[0]);
			Marathon.setFinishMapId(终点[0]);
			Marathon.setDuration(比赛时长 * 1000 * 60);
			if(Marathon.open()){
				cm.sendOk("马拉松活动已开启。\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("开启失败，马拉松活动已经是开启状态，请先关闭活动后再重新开启。\r\n");
				cm.dispose();
				return;
			}
			
			
		}else if (selection == 8) {
			//在这里编写选项2要做的事
			if(Marathon.begain()){
				cm.sendOk("比赛已开始。\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("无法开始，原因：\r\n1.无人报名。 \r\n2.起点、终点地图ID设置错误。\r\n3.未开启活动。\r\n");
				cm.dispose();
				return;
			}
		}else if (selection == 9) {
			//在这里编写选项2要做的事
			if(Marathon.close()){
				cm.sendOk("您已将马拉松活动关闭。\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("关闭失败，马拉松活动已经是关闭状态。\r\n");
				cm.dispose();
				return;
			}
		}else if (selection == 10) {
			//在这里编写选项2要做的事
			if(Marathon.returnSkills(cm.getPlayer())){
				cm.sendOk("您已成功领回禁用的技能。\r\n");
				cm.dispose();
				return;
			}
			cm.sendOk("领取失败，失败原因可能如下：\r\n#r1.你没有被禁用的技能。\r\n2.比赛尚未结束，且你身上拥有幸运星，仍处于参赛状态，无法领回技能。\r\n3.您已经领取过了。\r\n");
			cm.dispose();
			return;
		
		}
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

