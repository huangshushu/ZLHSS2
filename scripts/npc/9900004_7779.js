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
			text += "\t\t\t\t#e#b  " + cm.开服名称() + "60000元赞助礼包 #k	#n\r\n"
            text += "#b\t#v1602008# 全属性#r50#b轮回碑石 x1（怪物刷新数量翻倍，刷新率大幅提高) #l\r\n"//3
			text += "#b\t#v2340000#[祝福卷轴] x200#l\r\n"//3
			text += "#b\t#v2049100# [混沌卷轴] x200#l\r\n"//3
			text += "#b\t#v2000005# [超级药水] x9999#l\r\n"//3
			//text += "#b\t#v2022466# [暴君自选箱子] x2#l\r\n"//3
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
		    if(cm.读取累计赞助()>=60000 && cm.getPlayer().getOneTimeLoga("60000元累计赞助礼包") == 0){
				/* if(cm.haveItem(1912016) || cm.判断背包穿戴栏().countById(1912016) > 0){
					cm.sendOk("请先把身上的#v1912016#清理掉。");
					cm.dispose();
					return;
				}else if(cm.haveItem(1902022) || cm.判断背包穿戴栏().countById(1902022) > 0){
					cm.sendOk("请先把身上的#v1902022#清理掉。");
					cm.dispose();
					return;
				} */
				cm.给属性装备(1602008, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//V2勋章
				//cm.gainItem(1912016, 1);
				cm.gainItem(2340000, 200);//祝福
				cm.gainItem(2049100,200);
				cm.gainItem(2000005,9999);
				
		cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了60000元累充礼包。")
			cm.getPlayer().setOneTimeLoga('60000元累计赞助礼包');
            cm.dispose();
			}else{
            cm.sendOk("#r只能领取一次，或者你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}