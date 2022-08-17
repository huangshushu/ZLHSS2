var status = 0;
var kkk = "#fMap/MapHelper.img/weather/starPlanet2/8#";
var giftContent = Array(
        //Array("元宝兑换点卷：1元宝=3000点",   1, Array(
        //   Array(-1, 3000)
        //)), 
        // Array("元宝兑换点卷：10元宝=30000点",   10, Array(
        //   Array(-10, 30000)
        //  )), 
        //  Array("神秘椅子箱子",   50, Array(
        //         Array(2431256, 1)
        //  )), 
        Array("金币100万", 50, Array(
                Array(4001714, 1)
                )),
        Array("金币1500万", 500, Array(
                Array(4001714, 15)
                )),
        Array("金币1亿", 3000, Array(
                Array(4001715, 1)
                )),
        Array("永远的涅?火焰", 3000, Array(
                Array(2048717, 1)
                )),
        Array("超级神奇魔方 x 10", 100, Array(
                Array(5062009, 10)
                )),
        Array("超级神奇魔方 x 50", 500, Array(
                Array(5062009, 50)
                )),
        Array("超级神奇魔方 x 100", 1000, Array(
                Array(5062009, 100)
                )),
        Array("终极神奇魔方 x 10", 50, Array(
                Array(5062010, 10)
                )),
        Array("终极神奇魔方 x 50", 250, Array(
                Array(5062010, 50)
                )),
        Array("终极神奇魔方 x 100", 500, Array(
                Array(5062010, 100)
                )),
        Array("闪炫魔方 x 10", 1000, Array(
                Array(5062024, 10)
                )),
        Array("闪炫魔方 x 50", 5000, Array(
                Array(5062024, 50)
                )),
        Array("闪炫魔方 x 100", 10000, Array(
                Array(5062024, 100)
                )),
        Array("大师附加神奇魔方 x 10", 100, Array(
                Array(5062500, 10)
                )),
        Array("大师附加神奇魔方 x 50", 500, Array(
                Array(5062500, 50)
                )),
        Array("大师附加神奇魔方 x 100", 1000, Array(
                Array(5062500, 100)
                )),
        Array("附加潜能记忆魔方 x 10", 1000, Array(
                Array(5062503, 10)
                )),
        Array("附加潜能记忆魔方 x 50", 5000, Array(
                Array(5062503, 50)
                )),
        Array("附加潜能记忆魔方 x 100", 10000, Array(
                Array(5062503, 100)
                )),
        Array("诺巴战士套装", 15000, Array(
                Array(1132169, 1),
                Array(1102476, 1),
                Array(1072737, 1)
                )),
        Array("诺巴魔法师套装", 15000, Array(
                Array(1132170, 1),
                Array(1102477, 1),
                Array(1072738, 1)
                )),
        Array("诺巴弓箭手套装", 15000, Array(
                Array(1132171, 1),
                Array(1102478, 1),
                Array(1072739, 1)
                )),
        Array("诺巴飞侠套装", 15000, Array(
                Array(1132172, 1),
                Array(1102479, 1),
                Array(1072740, 1)
                )),
        Array("诺巴海盗套装", 15000, Array(
                Array(1132173, 1),
                Array(1102480, 1),
                Array(1072741, 1)
                )),
        Array("鲁塔比斯战士套装", 50000, Array(
                Array(1003797, 1),
                Array(1042254, 1),
                Array(1062165, 1)
                )),
        Array("鲁塔比斯魔法师套装", 50000, Array(
                Array(1003798, 1),
                Array(1042255, 1),
                Array(1062166, 1)
                )),
        Array("鲁塔比斯弓箭手套装", 50000, Array(
                Array(1003799, 1),
                Array(1042256, 1),
                Array(1062167, 1)
                )),
        Array("鲁塔比斯飞侠套装", 50000, Array(
                Array(1003800, 1),
                Array(1042257, 1),
                Array(1062168, 1)
                )),
        Array("解放的凯瑟利安", 40000, Array(
                Array(1402180, 1)
                )),
        Array("阿丽莎之光辉", 40000, Array(
                Array(1382235, 1)
                )),
        Array("柳德之剑", 20000, Array(
                Array(1402224, 1)
                )),
        Array("海神王冠", 20000, Array(
                Array(1004075, 1)
                )),
        Array("进阶精灵帽", 10000, Array(
                Array(1003719, 1)
                )),
        Array("进阶半半头盔", 10000, Array(
                Array(1003720, 1)
                )),
        Array("进阶女王王冠", 10000, Array(
                Array(1003721, 1)
                )),
        Array("进阶贝伦头盔", 15000, Array(
                Array(1003722, 1)
                )),
        Array("独眼巨人之眼Lv.3", 30000, Array(
                Array(1022226, 1)
                )),
        Array("8周年点点红", 5000, Array(
                Array(1012319, 1)
                )),
        Array("战斗机器人套装（男）", 20000, Array(
                Array(1662073, 1),
                Array(1672069, 1)
                )),
        Array("战斗机器人套装（女）", 20000, Array(
                Array(1662072, 1),
                Array(1672069, 1)
                )),
        Array("探险之黑暗暴击戒指", 10000, Array(
                Array(1113069, 1)
                )),
        Array("永远的冒险家戒指", 5000, Array(
                Array(1112919, 1)
                )),
        Array("冒险家的格拉泰斯戒指", 5000, Array(
                Array(1112659, 1)
                )),
        Array("冒险家的魔法之戒", 20000, Array(
                Array(1112429, 1)
                )),
        Array("冒险家的爆击之戒", 5000, Array(
                Array(1112428, 1)
                )),
        Array("冒险家的残酷之戒", 5000, Array(
                Array(1112427, 1)
                )),
        Array("冒险家的爆击之戒", 5000, Array(
                Array(1112428, 1),
                Array(-1, 20000)
                )),
        Array("战神祝福戒指", 20000, Array(
                Array(1113020, 1)
                )),
        Array("黑龙传说指环", 20000, Array(
                Array(1113084, 1)
                )),
        Array("黄金休彼德蔓徽章II", 20000, Array(
                Array(1182017, 1)
                )),
        Array("水晶枫叶徽章", 20000, Array(
                Array(1190302, 1)
                )),
        Array("起源之传说纹章(攻)", 5000, Array(
                Array(1190502, 1)
                )),
        Array("起源之传说纹章(魔)", 5000, Array(
                Array(1190503, 1)
                )),
        Array("真?觉醒冒险之心（战士）", 15500, Array(
                Array(1122122, 1)
                )),
        Array("真?觉醒冒险之心（魔法师）", 15500, Array(
                Array(1122123, 1)
                )),
        Array("真?觉醒冒险之心（弓箭手）", 15500, Array(
                Array(1122124, 1)
                )),
        Array("真?觉醒冒险之心（飞侠）", 15500, Array(
                Array(1122125, 1)
                )),
        Array("真?觉醒冒险之心（海盗）", 15500, Array(
                Array(1122126, 1)
                )),
        Array("遗忘之神话耳环", 40000, Array(
                Array(1032219, 1)
                )),
        Array("封印的时间之石", 2500, Array(
                Array(4033999, 1)
                ))
        );
var giftId = -1;
var gifts = null;
var price = 999;
var column = new Array("装备", "消耗", "设置", "其他", "商城");
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "";
        text = "这里有全部的道具购买，欢迎选购\r\n#rPS：固有道具只能购买一个，否则会消失！#n#k\r\n";
        text += "" + kkk + " #b您当前元宝为：#r" + cm.getRMB() + "#k\r\n";
        for (var key in giftContent) {
            text += "#b#L" + key + "#" + kkk + "【#r" + giftContent[key][0] + "#b】 #d = #r" + giftContent[key][1] + " #d元宝#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        price = giftContent[giftId][1];
        gifts = giftContent[giftId][2];
        var text = "#r#e" + giftContent[giftId][0] + "#n#b内容：\r\n";
        for (var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text += "#i" + itemId + ":##b" + (itemId == -1 ? "赠送点券" : "#z" + itemId + "#") + "#k #rx " + itemQuantity + "#k\r\n";
        }
        text += "\r\n#d是否花费#e#r" + price + "#n#d元宝购买该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId != -1 && gifts != null) {
            var needslot = new Array(0, 0, 0, 0, 0);
            for (var i in gifts) {
                var type = Math.floor(gifts[i][0] / 1000000);
                if (type == -1) {
                    continue;
                }
                needslot[type - 1] = needslot[type - 1] + 1;
            }
            for (var i = 0; i < 5; i++) {
                if (cm.getSpace(i + 1) < needslot[i]) {
                    cm.sendOk("您的" + column[i] + "栏位空间不足" + needslot[i] + "格，请清理后再来。");
                    cm.dispose();
                    return;
                }
            }
            if (cm.getRMB() < price) {
                cm.sendOk("您的元宝不足，请先充值后再购买。");
                cm.dispose();
                return;
            }
            for (var key in gifts) {
                var itemId = gifts[key][0];
                var itemQuantity = gifts[key][1];
                if (itemId == -1) {
                    cm.gainNX(itemQuantity);
                } else {
                    cm.gainItem(itemId, itemQuantity);
                }
            }
            cm.setRMB(cm.getRMB() - price);
            cm.sendOk("恭喜您，购买成功！");
            cm.dispose();
        } else {
            cm.sendOk("购买错误！请联系管理员！");
            cm.dispose();
        }
    }
}