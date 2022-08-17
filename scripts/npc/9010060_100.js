

/*  
 
 NPC版权:                追忆冒险岛 	        
 NPC类型: 		        综合NPC
 制作人：故事丶
 */




var status = -1;
var itemList = Array(
        //现金道具类
        Array(2022893, 1, 1),
        Array(5062000, 1, 1),
        Array(5062002, 2, 1),
        Array(5064000, 5, 1),
        //椅子类
        Array(3010002, 5, 100), //绿色时尚转椅
        Array(3010003, 5, 100), //红色时尚转椅
        Array(3010006, 5, 100), //黄色时尚转椅
        Array(3010004, 5, 100), //黄蓝休闲椅
        Array(3010005, 5, 100), //红蓝休闲椅
        Array(3010018, 5, 100), //椰子树沙滩椅
        Array(3010029, 6, 100), //蓝环凳
        Array(3010030, 6, 100), //黑环凳
        Array(3010031, 6, 100), //红环凳
        Array(3010032, 6, 100), //黄环凳
        Array(3010033, 6, 100), //绿环凳
        Array(3010043, 8, 100), //魔女的飞扫把
        Array(3013002, 8, 100), //烟花祭
        Array(3010166, 10, 100), //双刀同门
        Array(3010044, 10, 100), //同一红伞下
        Array(3010045, 10, 100), //寒冰椅子
        Array(3010049, 15, 100), //雪房子
        Array(3010068, 15, 100), //露水椅子
        Array(3010050, 15, 100), //公主凳
        Array(3010069, 15, 100), //大黄风
        //玩具类
        Array(1422011, 20, 100),
        Array(1092035, 20, 100),
        Array(1372017, 20, 100),
        Array(1302087, 20, 100),
        Array(1302024, 20, 100),
        Array(1322027, 20, 100),
        Array(1402044, 20, 100),
        Array(1402029, 20, 100),





        
        Array(1142295, 30)

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
        var selStr = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n#r注意事项#k：玩具和椅子都无法交易。~~\r\n已收集#v4032398##b#z4032398##k: " + cm.itemQuantity(4032398) + " 个";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("兑换 #i" + selectedItem + "# 需要 #r" + selequantity + "个 #v4032398##k 你确定兑换吗?");
        } else {
            cm.sendOk("兑换出错,请联系管理员...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("兑换出错,请联系管理员...");
            cm.dispose();
            return;
        }
        if (cm.itemQuantity(4032398) >= selequantity) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4032398, -selequantity);
                cm.gainItemPeriod(selectedItem, 1, 20);
                cm.sendOk("兑换成功,商品#i" + selectedItem + ":# #b#t" + selectedItem + "##k已送往背包。");
            } else {
                cm.sendOk("背包所有栏目窗口有一格以上的空间才可以进行兑换。");
            }

        } else {
            cm.sendOk("你没有足够的#i4032398#。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selequantity + "个 #i4032398##k。");
        }
        status = -1;
    }
}
