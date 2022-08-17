var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else if (mode == 0) {
		cm.sendOk("需要的时候再来找我。");
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0) {		
		cm.sendYesNo("您是否想用#v4251202#x 10 #v3994731#x 2 #v4000464#x 10批量兑换#v2460005#。确认其他栏空出再点确认");	
	} else if (status == 1)  {

                 if (cm.getPlayer().getMeso() < 20*10000){
						 cm.sendOk("金币不足。");
						 cm.dispose();
				 }else{
							for (var i = 0; i < 100; i++) {
							if(cm.haveItem(4251202,10) && cm.haveItem(3994731,2) && cm.haveItem(4000464,10)){
							 if (cm.getPlayer().getMeso() < 10*10000){
								cm.sendOk("金币不足。");
								cm.dispose();
								return;
								}
								cm.gainMeso(-100000); //加减金币
							 cm.gainItem(4251202, -10);
							 cm.gainItem(3994731, -2);
							 cm.gainItem(4000464, -10);
							 cm.gainItem(2460005, 1);

							
							}
							}
								
						 cm.sendOk("兑换成功！");
						 cm.dispose();	
            }

}
}
}