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
			text += "\t\t\t\t#e#b  " + cm.开服名称() + "40000元赞助礼包 #k	#n\r\n"
            text += "#b\t#v1702224# 全属性#r30#b双攻#r30#b透明武器 *1  #l\r\n"//3
			text += "#b\t#v2340000#[祝福卷轴] x100#l\r\n"//3
			text += "#b\t#v2049100# [混沌卷轴] x100#l\r\n"//3
			text += "#b\t#v2000005# [超级药水] x9999#l\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
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
			//1
			//2
			//3
			//4
			//5
		    if(cm.读取累计赞助()>=40000 && cm.getPlayer().getOneTimeLoga("40000元累计赞助礼包") == 0){
				cm.给属性装备(1702224, 0, 0, 30, 30, 30, 30, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0);//V2勋章
				cm.gainItem(2340000, 100);//祝福
				cm.gainItem(2049100,100);
				cm.gainItem(2000005,9999);
				
		cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了40000元累充礼包。")
			cm.getPlayer().setOneTimeLoga('40000元累计赞助礼包');
            cm.dispose();
			}else{
            cm.sendOk("#r只能领取一次，或者你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}