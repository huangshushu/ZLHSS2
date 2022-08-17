 /* * * * * * * * * * * *
 * *  脚本作者：路飞 * *
 * *  QQ：964391128  * *
 * * * * * * * * * * * */
 
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;



	if (status == 0) {
   	    var add = "      #b 欢迎光临 - 这里是赞助礼包套餐选择中心.\r\n  #r 1RMB = 2余额#k\r\n";

		add += "你剩余的余额: #r " + cm.getmoneyb() + "#k\r\n\r\n";

add += "#L1#兑换#v4430000#x1，需要#r1#k点余额\r\n";
add += "#L2#兑换#v4430000#x10，需要#r10#k点余额\r\n";
add += "#L3#兑换#v4430000#x30，需要#r30#k点余额\r\n";
add += "#L4#兑换#v4430000#x50，需要#r50#k点余额\r\n";
add += "#L5#兑换#v4430000#x100，需要#r100#k点余额\r\n";
add += "#L6#兑换#v4430000#x200，需要#r200#k点余额\r\n";
add += "#L7#兑换#v4430000#x500，需要#r500#k点余额\r\n";
//add += "#L10#"+ttt+"#r使用200钻石购买#k#v2022615#x20,#v4031138#2E\r\n";	

		cm.sendSimple (add);    

	} else if (status == 1) {

	if (selection == 0) {
		cm.openNpc(9250009);

	} else if (selection == 1) {
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
 if (cm.getmoneyb() >= 1){
cm.setmoneyb(-1);
cm.gainItem(4430000, 1);//国庆币
cm.worldMessage(2,"  【货币中心】 恭喜玩家[" + cm.getPlayer().getName() +"]使用1点余额购买了1个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有1点余额");
cm.dispose();
}

	} else if (selection == 2) {
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
 if (cm.getmoneyb() >= 10){
cm.setmoneyb(-10);
cm.gainItem(4430000, 10);//国庆币
cm.worldMessage(2,"   【货币中心】恭喜玩家[" + cm.getPlayer().getName() +"]使用10点余额购买了10个通金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有10点余额");
cm.dispose();
}


	} else if (selection == 3) {
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
 if (cm.getmoneyb() >= 30){
cm.setmoneyb(-30);
cm.gainItem(4430000, 30);//国庆币
cm.worldMessage(2,"   【货币中心】恭喜玩家[" + cm.getPlayer().getName() +"]使用30点余额购买了30个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有30点余额");
cm.dispose();
}
     

	} else if (selection == 4) {
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
 if (cm.getmoneyb() >= 50){
cm.setmoneyb(-50);
cm.gainItem(4430000, 50);//国庆币
cm.worldMessage(2,"   【货币中心】【货币中心】恭喜玩家[" + cm.getPlayer().getName() +"]使用50点余额购买了50个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有50点余额");
cm.dispose();
}

        
        
    } else if (selection == 5) {
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
 if (cm.getmoneyb() >= 100){
cm.setmoneyb(-100);
cm.gainItem(4430000, 100);//国庆币
cm.worldMessage(2, "   【货币中心】恭喜玩家[" + cm.getPlayer().getName() +"]使用100点余额购买了100个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有100点余额");
cm.dispose();
}

        
        
              } else if (selection == 6) {
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
 if (cm.getmoneyb() >= 200){
cm.setmoneyb(-200);
cm.gainItem(4430000, 200);//国庆币
cm.worldMessage(2,"   【货币中心】恭喜玩家[" + cm.getPlayer().getName() +"]使用200点余额购买了200个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有200点余额");
cm.dispose();
}
  } else if (selection == 7) {
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
 if (cm.getmoneyb() >= 500){
cm.setmoneyb(-500);
cm.gainItem(4430000, 500);//国庆币
cm.worldMessage(2,"  【货币中心】 恭喜玩家[" + cm.getPlayer().getName() +"]使用500点余额购买了500个金砖");
cm.dispose();
}else  {
cm.sendOk("你身上没有200点余额");
cm.dispose();
}
                }														
		}
		}
		}

       

