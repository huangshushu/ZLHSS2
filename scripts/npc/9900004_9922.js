//odinms_MS

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r欢迎来到点券换购系统中心#n\r\n#d====================================================\r\n#d目前账户剩余点券:"+ cm.getPlayer().getNX() + "\r\n====================================================#b#n\r\n#L5##b#e#v4000463#国庆币1个       兑换#r950点券\n#b#n\r\n#L6##b#e#v4000463#国庆币10个      兑换#r9500点券\n#b#n\r\n#L7##b#e#v4000463#国庆币50个      兑换#r47500点券\r\n\r\n    ");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b点券的获取方法（新人必看）#n#d\r\n====================================================#k\r\n本服一切装备都可以靠努力获得，加油！#k#d\r\n====================================================#k\r\n想要获得更多信息咨询，请加入我们的交流群一起讨论#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
			    if(cm.getPlayer().getNX() > 1000){
                cm.sendOk("#b#e恭喜您获得#r#e【1个国庆币】");
                cm.gainItem(4000463,1);
				cm.gainNX(-1000);
                cm.全服公告("恭喜玩家[" + cm.getChar().getName() + "]兑换1个国庆币成功！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的点券进行购买,请努力吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
			    if(cm.getPlayer().getNX() > 10000){
                cm.sendOk("#b#e恭喜您获得#r#e【10个国庆币】.");
                cm.gainItem(4000463,10);
                cm.gainNX(-10000);
                cm.全服公告("恭喜玩家[" + cm.getChar().getName() + "]兑换10个国庆币成功！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的点券进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	           
			    if(cm.getPlayer().getNX() > 50000){
                cm.sendOk("#b#e恭喜您获得#r#e【50个国庆币】.");
                cm.gainItem(4000463,15);
                cm.gainNX(-50000);
                cm.全服公告("恭喜玩家[" + cm.getChar().getName() + "]兑换50个国庆币成功！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的点券进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	           
			   if(cm.haveItem(4000463,1)){
                cm.sendOk("#b#e恭喜您获得#r#e【950点券】.");
                cm.gainItem(4000463,-1);
				cm.gainNX(950);
                cm.全服公告("玩家[" + cm.getChar().getName() + "]在货币中心兑换950点券！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的国庆币进行兑换,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 6){ 	           
			   if(cm.haveItem(4000463,10)){
                cm.sendOk("#b#e恭喜您获得#r#e【9500点券】.");
                cm.gainItem(4000463,-10);
                cm.gainNX(9500);
                cm.全服公告("玩家[" + cm.getChar().getName() + "]在货币中心兑换9500点券！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的点券进行购买,请努力收集吧.");
                cm.dispose();
                }
                }else if(selection == 7){ 	           
					if(cm.haveItem(4000463,50)){
						cm.sendOk("#r#e恭喜您获得了47500点券.");
						cm.gainItem(4000463,-50);
						cm.gainNX(47500);
						cm.全服公告("玩家[" + cm.getChar().getName() + "]在货币中心兑换47500点券！！");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b您没有足够的国庆币进行兑换,请努力收集吧.");
						cm.dispose();
					}
				}
	}
    }
}
