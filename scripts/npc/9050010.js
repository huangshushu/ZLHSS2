status = -1;
var meso = 3000000;
var itemList = Array(
        Array(1102271, 930, 1, 0), //爱你唷!巧克力气球
        Array(1702089, 1, 1, 0), //巧克力苹果
        Array(1702228, 930, 1, 0), //浓郁香蕉巧克力
        Array(1702299, 930, 1, 0), //甜蜜巧克力棒
        Array(1003836, 930, 1, 0), //彩色螺壳假发
        Array(1003837, 930, 1, 0), //彩色飘飘海带假发
        Array(1003838, 930, 1, 0), //彩色天弓假发
        Array(1003839, 930, 1, 0), //彩色核子爆发假发
        Array(1004327, 930, 1, 0), //星光闪闪发饰
        Array(1082548, 930, 1, 0), //星光手触
        Array(1102755, 930, 1, 0), //星光气球
        Array(1702564, 930, 1, 0), //趣味溜溜球
        Array(1702200, 930, 1, 0), //透明雨伞
        Array(1102503, 930, 1, 0), //摇晃的小猫尾巴
        Array(1102510, 930, 1, 0), //猫咪尾巴飞柔柔
        Array(1012208, 930, 1, 0), //苹果脸
        Array(1052587, 930, 1, 0), //哈维海豹装
        Array(1102651, 930, 1, 0), //雷射熊尾巴
        Array(1052655, 930, 1, 0), //灵魂熊服装
        Array(1050359, 930, 1, 0), //凉爽的雪花
        Array(1003083, 930, 1, 0), //芽芽露水
        Array(1003901, 930, 1, 0), //胆大的兔子帽
        Array(1004384, 930, 1, 0), //绿怪物帽子
        Array(1004480, 930, 1, 0), //顽皮男孩的帽子
        Array(1062229, 930, 1, 0), //顽皮男孩的下裤
        Array(1003123, 930, 1, 0), //黑色娃娃头巾
        Array(1003149, 930, 1, 0), //洛皮尔小兔头巾
        Array(1702533, 930, 1, 0), //上镜头
        Array(1042320, 930, 1, 0), //环岛旅行咕咕T
        Array(1012384, 930, 1, 0), //淘气鬼发箍
        Array(1102359, 930, 1, 0), //圆通通雪人气球
        Array(1003130, 930, 1, 0), //光明羽毛之冠
        Array(1702185, 930, 1, 0), //光明天使
        Array(1702279, 930, 1, 0), //光明羽毛剑
        Array(1702280, 930, 1, 0), //光明羽毛双手剑
        Array(1702281, 930, 1, 0), //光明羽毛权杖
        Array(1702282, 930, 1, 0), //光明羽毛弓
        Array(1702283, 930, 1, 0), //光明羽毛指虎
        Array(1702436, 930, 1, 0), //光明圣杖
        Array(1042275, 930, 1, 0), //青蛙雨滴
        Array(1102380, 930, 1, 0), //大大小小的青蛙
        Array(1702382, 930, 1, 0), //中秋节柿子树树枝
        Array(3010070, 10, 1, 1), //皮卡啾椅子
        Array(3010139, 30, 1, 1), //我的王座
        Array(3010123, 30, 1, 1), //花漾彩蝶椅
        Array(3010069, 30, 1, 1), //机器人椅
        Array(3012001, 70, 1, 1) //营火
        );

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，您不想转蛋吗？");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        if (cm.getPlayer().getLevel() < 10) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷枫币转蛋机，需要10等才能抽奖。");
            cm.dispose();
        } else if (cm.getMeso() > meso) {
            cm.sendYesNo("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "\t  #b该转蛋机转到的点装均无法放回商城以及有期限30天\r\n" +
					"           #r此为泡泡谷转蛋机，转一次需要300万哦#k\r\n");
        } else {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
					"\t  #b该转蛋机转到的点装均无法放回商城以及有期限30天\r\n" +
                    "       #r此为泡泡谷转蛋机，需要300万枫币。#k\r\n");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        if (chance > 930) {
            chance = 930;
        }
        if (chance < 1) {
            chance = 930;
        }
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if ((cm.getMeso() > meso) && cm.canHold()) {
                cm.gainMeso(-meso);
                if (notice == 1) {
                    cm.gainGachaponItemTime(itemId, quantity, "转蛋机", 30);
                } else {
                    cm.gainItemTime(itemId, quantity, 30);
                }
                cm.getItemLog("金币转蛋机", " 抽到 " + itemId + "(" + cm.getItemName(itemId) + ") " + quantity + "个。");
                cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    " #r此为泡泡谷转蛋机，恭喜你得到了#k #b#t" + itemId + "##k #r" + quantity + "个。#k");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有300万唷。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("出现未知问题，请稍后再试。");
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}
