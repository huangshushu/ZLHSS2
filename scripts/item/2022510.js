/*
SnailMS脚本生成器
*/
importClass(Packages.constants.WorldConstants);


function start() {
	status = -1;
	action(1, 0, 0);
}

var 判断职业id = 112;
var 学习技能id = 2321005;
var 学习技能等级 = 30;
var 能手等级 = 30;
var 技能书ID = 2022510;
var 键盘位置 = 0;

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
		
		// var text = "\r\n\r\n";
		// text += "#L1#选项1内容\r\n\r\n";
		// text += "#L2#选项2内容\r\n\r\n";
		// cm.sendSimple(text);
		if(!cm.haveItem(技能书ID, 1)){
			cm.sendOk("抱歉，你的技能书数量不足！");
			cm.dispose();
			return;
		}
		if(cm.getPlayer().getJob() == 判断职业id){
			cm.gainItem(技能书ID, -1);
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
				cm.getPlayer().dropMessage(1, "恭喜你学习成功！");
				cm.getPlayer().changeChannel(channel + 1);
			}else{
				cm.getPlayer().dropMessage(1, "恭喜你学习成功！");
				cm.getPlayer().changeChannel(1);
			}
			
		}else{
			cm.sendOk("抱歉，你的职业不满足要求！");
		}
		cm.dispose();
		return;
	} else if (status == 1) {
		
		if(selection == 1){
			
			
		}else if (selection == 2) {
			
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

