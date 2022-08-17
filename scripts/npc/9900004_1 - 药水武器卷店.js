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
		
	
			//if(cm.getPlayer().getMapId() == 10000){
	//cm.sendOk("请点击旁边的npc领取新手奖励后再使用拍卖");
//cm.dispose();
//return;
//}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "                    #n#d欢迎来到辅助店\r\n\r\n\r\n#r当前金币：     元\r\n\r\n"//3
            text += "#L2##e#d药水店铺#l       #L3##e#d装备店铺#l       #L4##e#d卷轴店铺#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("你已经在市场了，别逗了好吗?");
cm.dispose();
return;
}		
		cm.warp(910000000);
		cm.dispose();
        } else if (selection == 2) {
				cm.openShop(81);
				cm.dispose();//药水店铺
        } else if (selection == 3) {
				cm.openShop(79);
				cm.dispose();//装备店铺
        } else if (selection == 4) {
				cm.openShop(77);
				cm.dispose();//卷轴店铺
	}
    }
}


