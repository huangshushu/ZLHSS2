
var status = -1;
var itemList = Array(
         Array(5211047, 300, 1000, "双倍经验卡"),
		  Array(5360014, 500, 1000, "双爆")
        );
var selectedItem = -1;
var selequantity = -1;
var selectedCos = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "您好，请选择您需要兑换的物品,本物品购买后需换线才可生效!\r\n★#r点券:#r" + cm.getNX(1) + "#k点\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k需要 #r" + itemList[i][1] + "#k点券#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            cm.sendYesNo("兑换 #i" + selectedItem + "# 需要 #r" + selequantity + "#k点券。你确定兑换吗?");//修炼点代码 记得换 40000000是蓝蜗牛壳
        } else {
            cm.sendOk("兑换出错,请联系管理员。");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("兑换出错,请联系管理员。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >=selequantity) {//修炼点代码 记得换
            if (cm.canHold(selectedItem)) {
				cm.gainNX(-selequantity);
		var ii = MapleItemInformationProvider.getInstance();
        var type = ii.getInventoryType(selectedItem);
        var toDrop = ii.randomizeStats(ii.getEquipById(selectedItem)).copy();
        var temptime = cm.setzbsj(3*60*60*1000); 
        toDrop.setExpiration(temptime);
		MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,false);
        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); 
                //cm.gainItem(selectedItem, 1);
                cm.sendOk("兑换成功,商品#i" + selectedItem + ":# #b#t" + selectedItem + "##k已送往背包。");
                        cm.dispose();
						} else {
                cm.sendOk("背包所有栏目窗口有一格以上的空间才可以进行兑换。");
				cm.dispose();
            }

        } else {
            cm.sendOk("你没有足够的点券兑换。");
			            cm.dispose();
						            return;
        }
        status = -1;
    }
}
