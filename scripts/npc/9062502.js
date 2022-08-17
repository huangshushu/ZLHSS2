/*
SnailMS脚本生成器
*/
importClass(Packages.constants.WorldConstants);


function start() {
	status = -1;
	action(1, 0, 0);
}

var 判断职业id = -1;
var 学习技能id = 1013;
var 学习技能等级 = 1;
var 能手等级 = 1;
var 技能书ID = 0;
var 键盘位置 = 0;
var 成功率 = 100;

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
		cm.dispose();
		var text = "你好，#r战神#k与#r骑士团#k职业可以在我这里#b补领轮回技能#k。你的身上需要有#i1602008:#才可以领取哦！确认要领取么？\r\n\r\n";
		// text += "#L1#选项1内容\r\n\r\n";
		// text += "#L2#选项2内容\r\n\r\n";
		//cm.sendYesNo(text);
	} else if (status == 1) {
		if(!cm.getPlayer().haveItem(1602008, 1, true, true)){
			cm.sendOk("你身上并没有#i1602008:#");
			cm.dispose();
			return;
		}
		
		if(技能书ID > 0 && !cm.haveItem(技能书ID, 1)){
			cm.sendOk("抱歉，你的技能书数量不足！");
			cm.dispose();
			return;
		}
		if(判断职业id == -1 || cm.getPlayer().getJob() == 判断职业id){
			if(键盘位置 < 0 || 键盘位置 > 9){
				cm.sendOk("你设置的键盘位置不在范围内！");
				cm.dispose();
				return;
			}
			var random = Math.random() * 100;
			if(random <= 成功率){
				if(技能书ID > 0){
					cm.gainItem(技能书ID, -1);
				}
				cm.teachSkill(学习技能id, 学习技能等级, 能手等级);
				if(键盘位置 >= 1 && 键盘位置 <= 9){
					cm.getPlayer().changeKeybinding(键盘位置 + 1, 1, 学习技能id);
				}else if(键盘位置 == 0){
					cm.getPlayer().changeKeybinding(11, 1, 学习技能id);
				}else{
					cm.sendOk("你设置的键盘位置不在范围内！");
					cm.dispose();
					return;
				}
				var channel = cm.getPlayer().getClient().getChannel();
				if(channel < WorldConstants.CHANNEL_COUNT){
					cm.getPlayer().dropMessage(1, "恭喜你学习成功，请在键盘位置 " + 键盘位置 + " 处查看！");
					cm.getPlayer().changeChannel(channel + 1);
				}else{
					cm.getPlayer().dropMessage(1, "恭喜你学习成功，请在键盘位置 " + 键盘位置 + " 处查看！");
					cm.getPlayer().changeChannel(1);
				}
			}else{
				if(技能书ID > 0){
					cm.gainItem(技能书ID, -1);
					cm.sendOk("哦豁，技能书炸掉了！");
				}
			}
			
			
		}else{
			cm.sendOk("抱歉，你的职业不满足要求！");
		}
		
	} else {
		cm.dispose();
		return;
	}
}

