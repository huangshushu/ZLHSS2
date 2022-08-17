/*
 脚本：卷轴回收脚本
 */
 var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
 var 星星 ="#fMap/MapHelper/weather/witch/3#";
 var 奖励物品 = 2430253;
 var 卷轴列表 = Array(
 1070031,
 1112745,
 1004042,
 1003544,
 1102653,
 1004044,
 1003545,
 1112734,
 1113021,
 1102555,
 1102659
 
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
            cm.结束对话();
        }
        status--;
    }
    if (status == 0) {
		 
        var text = "#r找我可以把背包里所有抽奖获得的时装分解每件10000点券！\r\n#e#d" + 小烟花 + "回收导致损失不予补偿！" + 小烟花 + "#n#k\r\n\r\n";
		text += "可回收以下装备\r\n#v1070031##v1112745##v1004042##v1003544##v1102653##v1004044##v1003545##v1112734##v1113021##v1102555##v1102659##Ll\r\n\r\n"
        text += "#L1##r" + 小烟花 +  "确认分解" + 小烟花 + "\r\n\r\n";
		//text += "#L104##b" + 小烟花 + "碎片商店" + 小烟花 + "#l\r\n\r\n";
        text += "#L101##b" + 小烟花 + "我再考虑考虑" + 小烟花 + "#l\r\n\r\n";
		
        cm.sendSimple(text);
    } else if (status == 1) {
		if(selection == 1){
			if(cm.判断背包其他栏().isFull()){
				cm.sendOk("#r背包其他栏已满，请先至少留出一格位置\r\n");
				cm.结束对话();
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
						cm.gainNX(10000*mount);
						是否有卷轴 = true;
					}
				}
				if(是否有卷轴){
					cm.sendOk("回收完毕，#b共计回收了 #r" + 兑换数量 + " #b个装备，获得 #r" + 10000*兑换数量 + "点券\r\n");
					cm.getPlayer().setOneTimeLoga("回收1");
				}else{
					cm.sendOk("#r回收失败，你背包里并没有可以回收的装备啊。\r\n");
				}
				cm.结束对话();
			}
		}else if (selection == 101) {
			cm.sendOk("不想回收吗？…找我可以把背包里所有抽奖获得的时装分解每件10000点券！\r\n\r\n");
			cm.结束对话();
		
		}else if (selection == 104) {
			cm.结束对话();
			cm.openNpc(9900004,9904);
		} 
		
		
        
	} else {
		cm.结束对话();
	}
        

}


 
 