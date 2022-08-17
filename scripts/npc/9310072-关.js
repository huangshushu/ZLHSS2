var status = -1;
var job = 0;
var type = -1;
var skill = [[8]];

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection) {
	if(mode == 0 && status == 0) {
		status --;
	} else if(mode == 1) {
		status ++;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		cm.sendYesNo("学习#s8#同时带多只宠物喔~只需1000点券~是否学习?");
	} else if (status == 1){
                if (cm.getPlayer().getCSPoints(1) >= 1000) {	//判断点券	
					if(cm.getJob() >=0 && cm.getJob() <= 900){
						cm.teachSkill(0000008, 1, 1);
						cm.gainNX(-1000);
						cm.sendOk("恭喜你,已经学会!!");
						cm.dispose();
					} else if(cm.getJob() >=2000 && cm.getJob() <= 2112){
						cm.teachSkill(20000024, 1, 1);
						cm.gainNX(-1000);
						cm.sendOk("恭喜你,已经学会!!");
						cm.dispose();	
					} else if(cm.getJob() >=1000 && cm.getJob() <= 1999){
						cm.teachSkill(10000018, 1, 1);
						cm.gainNX(-1000);
						cm.sendOk("恭喜你,已经学会!!");
						cm.dispose();		
					}
                } else {
					cm.sendOk("你没有足够的点券。无法学习！");
					cm.dispose();
                }
	}
}
