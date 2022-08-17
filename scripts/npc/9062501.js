/*
SnailMS脚本生成器
*/
var 消耗道具 = 4310088;
var 消耗数量 = 10;


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
		cm.dispose();
		var text = "我这里可以自由切换#b复古版#k和#b新版#k皮肤，每次仅需消耗#i" + 消耗道具 + ":#x" + 消耗数量 + "。\r\n";
		text += "#rps：若要开通第三套、第四套技能皮肤更换权限，需去礼品币商店消耗#i4310250:#购买。\r\n\r\n"
		
		text += "#L1##b全部切换为复古版\r\n\r\n";
		text += "#L2##b全部切换为新版\r\n\r\n";
		//cm.sendSimple(text);
	} else if (status == 1) {
		if(!cm.haveItem(消耗道具, 消耗数量)){
			cm.sendOk("你身上的#i" + 消耗道具 + ":#不够！");
			cm.dispose();
			return;
		}
		//在这里编写第二步要做的事
		if(selection == 1){
			//在这里编写选项1要做的事
			cm.gainItem(消耗道具, -消耗数量);
			cm.getPlayer().setSkillSkinAll(2);
			cm.sendOk("您已成功将所有技能皮肤更换为复古版！");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//在这里编写选项2要做的事
			cm.gainItem(消耗道具, -消耗数量);
			cm.getPlayer().setSkillSkinAll(1);
			cm.sendOk("您已成功将所有技能皮肤更换为新版！");
			cm.dispose();
			return;
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

