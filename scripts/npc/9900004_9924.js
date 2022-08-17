

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
			
			cm.sendSimple("\t\t\t\t\t#e#r欢迎来到点券换购系统中心#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getPlayer().getMeso() + "\r\n====================================================#b#n\r\n#L2##b#r#v4031138# 1亿       兑换#v3994731#理琳情人金币1个\r\n#L3##b#r#v4031138# 10亿       兑换#v3994731#理琳情人金币10个\r\n#L4##b#r#v3994731# 理琳情人金币1个      兑换#v4031138# 9500万\r\n#L5##b#r#v3994731# 理琳情人金币10个  兑换#v4031138# 9亿5000万    ");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b点券的获取方法（新人必看）#n#d\r\n====================================================#k\r\n本服一切装备都可以靠努力获得，加油！#k#d\r\n====================================================#k\r\n想要获得更多信息咨询，请加入我们的交流群一起讨论#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
				  if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
			    if(cm.getPlayer().getMeso() > 100000000){
                cm.sendOk("#b#e恭喜您获得#r#e【1个利琳情人节金币】");
                cm.gainItem(3994731,1);
				cm.gainMeso(-100000000);
                cm.全服公告("恭喜玩家[" + cm.getChar().getName() + "]在货币中心用金币兑换了1个利琳情人节金币！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的金币进行兑换,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }				  
			    if(cm.getPlayer().getMeso() > 1000000000){
                cm.sendOk("#b#e恭喜您获得#r#e【10个利琳情人节金币】.");
                cm.gainItem(3994731,10);
                cm.gainMeso(-1000000000);
                cm.全服公告("恭喜玩家[" + cm.getChar().getName() + "]在货币中心用金币兑换了10个利琳情人节金币！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的金币进行兑换,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }				  
				if(cm.haveItem(3994731,1)){
				cm.sendOk("#r#e恭喜您获得了95000000金币.");
				cm.gainItem(3994731,-1);
				cm.gainMeso(95000000);
				cm.全服公告("玩家[" + cm.getChar().getName() + "]在货币中心兑换95000000金币！！");
				cm.dispose();		
				}else{ 
				cm.sendOk("#b您没有足够的情人币进行兑换,请努力收集吧.");
				cm.dispose();
				}
                  }else if(selection == 5){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }				  
				if(cm.haveItem(3994731,10)){
				cm.sendOk("#r#e恭喜您获得了950000000金币.");
				cm.gainItem(3994731,-10);
				cm.gainMeso(950000000);
				cm.全服公告("玩家[" + cm.getChar().getName() + "]在货币中心兑换950000000金币！！");
				cm.dispose();		
				}else{ 
						cm.sendOk("#b您没有足够的情人币进行兑换,请努力收集吧.");
						cm.dispose();
				}
                  }else if(selection == 6){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }				  
			   if(cm.haveItem(4000463,1)){
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
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }				
					if(cm.haveItem(4000463,1)){
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
