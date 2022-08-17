var status = 0;
var itemList = 
Array(     
Array(3992013, 100, 1, 1), //法弗纳忏悔之剑
Array(3992013, 50, 1, 1), //法弗纳忏悔之剑
Array(3992013, 10, 1, 1), //法弗纳忏悔之剑
Array(3992014, 50, 1, 1), //法弗纳贯雷枪
Array(3992014, 30, 1, 1), //法弗纳贯雷枪
Array(3992015, 20, 1, 1), //法弗纳危险之手
Array(3992015, 5, 1, 1), //法弗纳危险之手
Array(4011000, 50, 2, 1),//?????法弗纳魔冠之杖
Array(4011001, 50, 2, 1),//?????法弗纳追风者

Array(4011002, 50, 2, 1),//?????法弗纳风翼弩
Array(4011003, 50, 2, 1),//?????法弗纳左轮枪
Array(4011004, 50, 2, 1),//?????法弗纳大马士革剑
Array(4011005, 50, 2, 1),//?????法弗纳半月宽刃斧
Array(4011006, 50, 2, 1),//?????法弗纳银槲之剑


Array(4031504, 100, 1, 1),//?????蓝
Array(4031504, 80, 1, 1),//?????蓝
Array(4031504, 30, 1, 1),//?????蓝
Array(4031505, 20, 1, 1),//?????黄
Array(4031505, 90, 1, 1),//?????黄
Array(4031505, 30, 1, 1),//?????黄
Array(4031506, 50, 1, 1),//?????绿
Array(4031506, 10, 1, 1),//?????绿
Array(3992025, 100, 100, 1),//?????强化
Array(3992025, 50, 200, 1),//?????强化
Array(2049100, 50, 5, 1),//?????混沌
Array(2022529, 50, 1, 1),//?????双爆
Array(2450000, 20, 1, 1),//?????双倍
Array(2070013, 20, 1, 1),//?????黄金标
Array(4005004, 50, 5, 1),//?????黑暗
Array(4000463, 20, 3, 1),//?????国庆
Array(4000463, 10, 5, 1),//?????国庆
Array(4251202, 30, 1, 1),//?????五彩
Array(4251202, 20, 3, 1),//?????五彩
Array(4011008, 5, 1, 1),//?????锂
Array(4310012, 70, 1, 1),//必成
Array(4310012, 20, 2, 1)//必成
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
            cm.sendOk("快乐怪物戒指强化材料抽奖");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4170001, 5)) {
            cm.sendYesNo("快乐怪物戒指强化材料抽奖");
        } else {
            cm.sendOk("确认你背包里有5个#b#v4170001##k吗?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "快乐怪物戒指强化材料抽奖", notice);
            if (item != -1) {
                cm.gainItem(4170001, -5);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有#b#t4170001##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();

        }
    }
}