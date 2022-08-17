function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  这里可以帮你制作红珠玉 #k	#n\r\n"
            text += "#L1##r消耗#v4005004#x1 200W金币 制作#v4032312#x1#l\r\n\r\n"//3
            cm.sendSimple(text);
      }  else if (status == 1) {
                     if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.对话结束();
                        return;
                    }
		    if(cm.haveItem(4005004,1)&&cm.getPlayer().getMeso() > 2000000){
				cm.gainItem(4005004,-1);//祝福
				cm.gainMeso(-2000000);//祝福
				cm.gainItem(4032312,1);
		    cm.sendOk("制作成功");
            cm.dispose();
			}else{
            cm.sendOk("材料不足");
            cm.dispose();
			}
		}
    }
}