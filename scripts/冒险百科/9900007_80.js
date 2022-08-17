var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 蓝色双箭头 = "#fUI/UIWindow.img/Quest/icon8/0#";
var 选择道具图标 = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var H字母 = "#fUI/CashShop/CSEffect/effect/1#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var 兑换倍率 = "1.5";
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
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

	if (status == 0) {
   	    var text= "\t\t\t\t  "+铅笔图标+" [充值系统] "+铅笔图标+"\r\n\r\n";
		text += "\t\t\t"+警报灯+" #d您账户上有余额: #r"+cm.getmoneyb()+" 元 "+警报灯+"\r\n";
		text += "\t\t\t"+警报灯+" #d您目前拥有: #r"+cm.getzb()+" 颗钻石 "+警报灯+"\r\n";
		text += "#d#L1#点击全部兑换为钻石  [可以兑换: #r"+cm.getmoneyb() * 兑换倍率+" "+金币图标+" #d钻石]\r\n";
		text += "#d#L2#[Nwe]小伙伴招募系统\r\n";
		text += "#d#L3#充值礼包\r\n";


		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) {     
			if(cm.getmoneyb() >= 1){
				if (cm.获取推广人ID() > 1) { 
                    var 可领取般若币 = cm.getmoneyb() * 兑换倍率;
                    var 推广人积分 = cm.getmoneyb();
						cm.喇叭(2,"感谢[" + cm.getPlayer().getName() + "]为我们初心冒险岛赞助了"+cm.getmoneyb()+"元,获得"+可领取般若币+"钻石！"); 
						cm.sendOk("恭喜：操作已成功。领取完成！领取了钻石:"+可领取般若币+"。推广人获得了"+推广人积分+"积分");
                        cm.gainzb(+""+可领取般若币+"");
						cm.gaincz(+""+cm.getmoneyb()+"");
                        cm.写入推广值(+推广人积分);
                        cm.getChar().gaincz(+""+cm.getmoneyb()+"");
						cm.setmoneyb(-cm.getmoneyb());
						
						
						cm.dispose();
				} else {
                    var 可领取般若币 = cm.getmoneyb()*兑换倍率;
						cm.sendOk("恭喜：操作已成功。领取完成！领取了钻石:"+可领取般若币+"。");
						cm.喇叭(2,"感谢[" + cm.getPlayer().getName() + "]为我们初心冒险岛赞助了"+cm.getmoneyb()+"元,获得"+可领取般若币+"钻石！"); 
                        cm.gainzb(+""+可领取般若币+"");
                        cm.getChar().gaincz(+""+cm.getmoneyb()+"");
						cm.setmoneyb(-cm.getmoneyb());
						
						cm.dispose();   
				}	
			}else{
				cm.sendOk("看来你没有充值过。是无法使用的。");
                cm.dispose();
            }
		} else if (selection == 2) {
			cm.openNpc(9900007,881);
		} else if (selection == 3) {
			cm.openNpc(9900007,1000);
		
		}
		
	}
}
}