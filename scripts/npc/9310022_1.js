
/*  
 
 NPC版权:                千雪回顾冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 */

var status = -1;
var itemList = Array(
        Array(1302275, 10000, 180, "法弗纳银槲之剑"),
        Array(1402196, 10000, 180, "法弗纳忏悔之剑"),
        Array(1312153, 10000, 180, "法弗纳双刃切肉斧"),
        Array(1412135, 10000, 180, "法弗纳战斗切肉斧"),
        Array(1322203, 10000, 180, "法弗纳戈耳迪锤"),
        Array(1422140, 10000, 180, "法弗纳闪电锤长枪"),
        Array(1432167, 10000, 180, "法弗纳贯雷枪矛"),
        Array(1442223, 10000, 180, "法弗纳贯雷枪矛"),
        Array(1432167, 10000, 180, "法弗纳半月宽刃斧弓"),
        Array(1452205, 10000, 180, "法弗纳追风者弩"),
        Array(1462193, 10000, 180, "法弗纳风翼弩"),
        Array(1332225, 10000, 180, "法弗纳大马士革剑矛"),
        Array(1472214, 10000, 180, "法弗纳危险之手"),
        Array(1482168, 10000, 180, "法弗纳巨狼之爪"),
        Array(1492179, 10000, 180, "法弗纳左轮枪"),
        Array(1372177, 10000, 180, "法弗纳魔力夺取者"),
        Array(1382208, 10000, 180, "法弗纳魔冠之杖"),
        Array(1302333, 12000, 200, "埃苏莱布斯军刀"),
        Array(1402251, 12000, 200, "埃苏莱布斯宽大刀"),
        Array(1312199, 12000, 200, "埃苏莱布斯战斧"),
        Array(1412177, 12000, 200, "埃苏莱布斯大斧"),
        Array(1322250, 12000, 200, "埃苏莱布斯战锤"),
        Array(1422184, 12000, 200, "埃苏莱布斯大锤"),
        Array(1432214, 12000, 200, "埃苏莱布斯穿透矛"),
        Array(1442268, 12000, 200, "埃苏莱布斯巨灵开山斧"),
        Array(1452252, 12000, 200, "埃苏莱布斯弓"),
        Array(1462239, 12000, 200, "埃苏莱布斯弩"),
        Array(1332274, 12000, 200, "埃苏莱布斯屠龙斩"),
        Array(1472261, 12000, 200, "埃苏莱布斯复仇斗拳"),
        Array(1492231, 12000, 200, "埃苏莱布斯枪"),
        Array(1482216, 12000, 200, "埃苏莱布斯拳甲"),
        Array(1372222, 12000, 200, "埃苏莱布斯短杖"),
        Array(1382259, 12000, 200, "埃苏莱布斯长杖")

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
                cm.gainItem(selectedItem, 1);
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
