var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;

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
			var selStr = "#d新手点券任务；\r\n收集以下物品可以兑换点券、附加魔方、闪炫、积分等。   \r\n#i4000000# #i4000001# #i4000016# #i4000004# #i4000115# #i4000020# #i4000051# #i4000134# \r\n";
			//selStr +="#e#r每做完一次任务都可以额外获得 #b#v4001126##r x 500   #l#k\r\n#n"; 
			selStr +="#L1##r"+aaa+" 收集 #b#z4000000##r+#b#z4000016##r   [详情点击查看]#l#k\r\n"; 
			selStr +="#L2##r"+aaa+" 收集 #b#z4000001##r                [详情点击查看]#l#k\r\n"; 
			//selStr +="#L3##r"+aaa+" 收集 #b#z4000016##r   [详情点击查看]#l#k\r\n"; 
			selStr +="#L4##r"+aaa+" 收集 #b#z4000004##r                  [详情点击查看]#l#k\r\n";
			selStr +="#L5##r"+aaa+" 收集 #b#z4000051##r                [详情点击查看]#l#k\r\n"; 
			selStr +="#L6##r"+aaa+" 收集 #b#z4000443##r              [详情点击查看]#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr,0);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000000#个数为：          #r" + cm.getItemQuantity(4000000) + " / 200 个\r\n#b当前拥有#z4000016#个数为：         #r" + cm.getItemQuantity(4000016) + " / 200 个\r\n\r\n#b当前任务奖励点券为： #r100000#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000001#个数为：         #r" + cm.getItemQuantity(4000001) + " / 200 个\r\n\r\n#b当前任务奖励#z5062009#为： #r50#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			} else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000016#个数为：         #r" + cm.getItemQuantity(4000016) + " / 200 个\r\n\r\n#b当前任务奖励#z5062010#为： #r30#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			} else if (selection == 4) {
				typed=4;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000004#个数为：         #r" + cm.getItemQuantity(4000004) + " / 200 个\r\n\r\n#b当前任务奖励#z5062500#为： #r30#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			} else if (selection == 5) {
				typed=5;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000051#个数为：         #r" + cm.getItemQuantity(4000051) + " / 200 个\r\n\r\n#b当前任务奖励点券为： #r10000#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			} else if (selection == 6) {
				typed=6;
				cm.sendYesNo("- #d#e任务要求：#n#k\r\n\r\n#b当前拥有#z4000448#个数为：         #r" + cm.getItemQuantity(4000448) + " / 200 个\r\n#b当前拥有#z4000453#个数为：         #r" + cm.getItemQuantity(4000453) + " / 200 个\r\n#b当前拥有#z4000458#个数为：         #r" + cm.getItemQuantity(4000458) +" / 200 个\r\n#b当前拥有#z4000443#个数为：       #r" + cm.getItemQuantity(4000443) + " / 200 个\r\n\r\n#b当前任务奖励闪炫魔方为： #r10#b 个\r\n#b当前任务奖励积分为： #r10#b 点\r\n\r\n- #e#d管理提示：#n#k#b每个账号只能完成1次！");
			}
		} else if (status == 2) {
			if(typed==1){
                                if (cm.haveItem(4000000,200) && cm.haveItem(4000016,200) && cm.getEventCount("新手收集任务1") <= 0) {
					cm.gainItem(4000000, -200);
					cm.gainItem(4000016, -200);
					cm.gainNX(1, 100000);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务1");
					cm.sendOk("#b成功获得了  #r积分#b 10 和 点卷 #r100000#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
			} else if (typed==2){
				if (cm.haveItem(4000001,200) && cm.getSpace(5) >= 1 && cm.getEventCount("新手收集任务2") <= 0) {
					cm.gainItem(4000001, -200);
					cm.gainItem(5062009, 50);
					//cm.gainItem(4001126, 500);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务2");
					cm.sendOk("#b成功获得了#z5062009# 50个超级神奇魔方 和 #r积分#b  #r10#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
			} else if (typed==3){
				if (cm.haveItem(4000004,200) && cm.getSpace(5) >= 1 && cm.getEventCount("新手收集任务3") <= 0) {
					cm.gainItem(4000004, -200);
					cm.gainItem(5062010, 30);
					//cm.gainItem(4001126, 500);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务3");
					cm.sendOk("#b成功获得了#z5062024# 30个终极魔方 和 #r积分#b  #r10#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
			} else if (typed==4){
				if (cm.haveItem(4000004,200) && cm.getSpace(2) >= 3 && cm.getEventCount("新手收集任务4") <= 0) {
					cm.gainItem(4000004, -200);
					cm.gainNX(1,10000)
					cm.gainItem(5062500, 30);
					//cm.gainItem(4001126, 500);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务4");
					cm.sendOk("#b成功获得了#z5062500# 30个大师附加魔方 和 #r积分#b  #r10#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
			} else if (typed==5){
				if (cm.haveItem(4000051,200) && cm.getSpace(2) >= 3 &&  cm.getEventCount("新手收集任务5") <= 0) {
					cm.gainItem(4000020, -200);
					cm.gainItem(4000051, -200);
					cm.gainNX(1, 10000);
					//cm.gainItem(4001126, 500);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务5");
					cm.sendOk("#b成功获得了  #r积分#b 10 和 点卷 #r100000#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
			} else if (typed==6){
				if (cm.haveItem(4000448,200) && cm.haveItem(4000453,200) && cm.haveItem(4000458,200) && cm.haveItem(4000443,200) && cm.getEventCount("新手收集任务6") <= 0) {
					cm.gainItem(4000448, -200);
					cm.gainItem(4000453, -200);
					cm.gainItem(4000458, -200);
					cm.gainItem(4000443, -200);
					cm.gainItem(5062024, 20);
					//cm.gainItem(4001126, 500);
					cm.gainPlayerPoints(10);
					cm.setEventCount("新手收集任务6");
					cm.sendOk("#b成功获得了#z5062024# 20个 和 #r积分#b  #r10#b 奖励。");
					cm.worldSpouseMessage(0x01, "『新手任务』 : "+ cm.getChar().getName() +" 完成新手任务，获得了丰富奖励。");
					cm.dispose();;
				} else {
					cm.sendOk("每个账号只能完成1次！");
					cm.dispose();
				}
           }
		}
	  }
	}