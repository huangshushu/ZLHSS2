
/*  
 
 NPC版权:                千雪回顾冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 */

var status = -1;
var itemList = Array(
        Array(1002140, 500000, 200, "维泽特帽"),
        Array(1022152, 200000, 200, "盛大腰带"),
        Array(1112932, 50000, 80, "老公老婆戒指LV50"),
        Array(1003755, 50000, 80, "无限白雪"),
        Array(1102689, 50000, 80, "无法承受之重披风"),
        Array(1102382, 50000, 80, "极真·比耶莫特披风"),
        Array(1102383, 50000, 80, "极真·夏其尔披风"),
        Array(1102354, 50000, 80, "粉嫩披风"),
        Array(1102163, 50000, 80, "贵族披风"),
        Array(1102246, 50000, 80, "冰雪披风"),
        Array(1102489, 50000, 80, "吸血鬼披风"),
        Array(1102601, 80000, 80, "兹博伊双手剑")

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
        var selStr = "您好，请选择您需要兑换的物品                          ★#r点券:#r" + cm.getNX(1) + "#k点\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k需要 #r" + itemList[i][1] + "#k点券 剩余"+ cm.getxg(itemList[i][0]) +"个#l";
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
                     if (cm.getxg(selectedItem)>0) {
           if (cm.canHold(selectedItem)) {
				cm.gainNX(-selequantity);
				cm.gainxg(selectedItem,-1);
                cm.gainItem(selectedItem, 1);
                cm.sendOk("兑换成功,商品#i" + selectedItem + ":# #b#t" + selectedItem + "##k已送往背包。");
                        cm.dispose();
						} else {
                cm.sendOk("背包所有栏目窗口有一格以上的空间才可以进行兑换。");
						cm.dispose();
						}
						
            } else {
                cm.sendOk("已经卖光了");
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
