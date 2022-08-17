/*
 脚本：卷轴回收脚本
 */
 var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
 var 星星 ="#fMap/MapHelper/weather/witch/3#";
 var 奖励物品 = 2430253;
 var 卷轴列表 = Array(
 1702472,
 1082553,
 1049002,
 1042401,
 1049004,
 1049003,
 1102604,
 1032234,
 1005297,
 1802084,
 1802083,
 1802719,
 1802718,
 1802533,
 1802682
 
 );
 
 function start() {
    status = -1;
    action(1, 0, 0);
}
 
 function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
             cm.sendOk("不想回收吗？…找我可以把背包里所有抽奖获得的时装分解获得点券#k哦！\r\n\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		 
        var text = "#r找我可以把背包里所有抽奖获得的时装分解每件60000点券！\r\n#e#d" + 小烟花 + "回收导致损失不予补偿！" + 小烟花 + "#n#k\r\n\r\n";
		text += "可回收以下装备\r\n#v1702472##v1082553##v1049002##v1049004##v1049003##v1102604##v1032234##l\r\n"
        text += "#L1##r" + 小烟花 +  "确认分解" + 小烟花 + "\r\n\r\n";
		//text += "#L104##b" + 小烟花 + "碎片商店" + 小烟花 + "#l\r\n\r\n";
        text += "#L101##b" + 小烟花 + "我再考虑考虑" + 小烟花 + "#l\r\n\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
		if(selection == 1){
			if(cm.判断背包其他栏().isFull()){
				cm.sendOk("#r背包其他栏已满，请先至少留出一格位置\r\n");
				cm.dispose();
			}else{
				var 是否有卷轴 = false;
				var 兑换数量 = 0;
				for (var i = 0; i < 卷轴列表.length; i++) {
					var mount = 0;
					while(cm.haveItem(卷轴列表[i], mount + 1)){
						mount += 1;
						兑换数量 += 1;
					}
					if(mount > 0){
						cm.gainItem(卷轴列表[i], -mount);
						cm.gainNX(60000*mount);
						是否有卷轴 = true;
					}
				}
				if(是否有卷轴){
					cm.sendOk("回收完毕，#b共计回收了 #r" + 兑换数量 + " #b个装备，获得 #r" + 60000*兑换数量 + "点券\r\n");
					cm.getPlayer().setOneTimeLoga("回收3");
					cm.worldMessage(6, "[抽奖回收] : 恭喜 " + cm.getPlayer().getName() + " 回收时装获得" + 60000*兑换数量 + "点券 " );
				}else{
					cm.sendOk("#r回收失败，你背包里并没有可以回收的装备啊。\r\n");
				}
				cm.dispose();
			}
		}else if (selection == 101) {
			cm.sendOk("不想回收吗？…找我可以把背包里所有抽奖获得的时装分解每件60000点券！\r\n\r\n");
			cm.dispose();
		
		}else if (selection == 104) {
			cm.dispose();
			cm.openNpc(9900004,9904);
		} 
		
		
        
	} else {
		cm.dispose();
	}
        

}


 
 