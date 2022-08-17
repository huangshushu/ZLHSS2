var status = 0;
var kkk = "#fMap/MapHelper.img/weather/starPlanet2/8#";
var giftContent = Array(
        Array("咬紧牙关的面罩", 80, Array(
                Array(1012553, 1)
                )),
        Array("觉醒解封卷轴", 1200, Array(
                Array(2432220, 1)
                )),
        Array("20星之力卷轴", 1500, Array(
                Array(2049376, 1)
                )),
        Array("V卷轴自选 箱子", 300, Array(
                Array(2435824, 1)
                )),
        Array("绝版坐骑盒", 50, Array(
                Array(2433853, 1)
                )),
        Array("神秘徽章拉克兰", 20, Array(
                Array(1712003, 1)
                )),
        Array("神秘徽章啾啾岛", 20, Array(
                Array(1712002, 1)
                )),
        Array("强化混沌卷轴x50", 50, Array(
                Array(2049116, 50)
                )),
        Array("强化混沌卷轴x100", 100, Array(
                Array(2049116, 100)
                )),
        Array("黑暗羽毛", 1000, Array(
                Array(4034999, 2000)
                )),
        Array("黑暗羽毛", 200, Array(
                Array(4034999, 400)
                )),
        Array("黑暗羽毛", 100, Array(
                Array(4034999, 200)
                )),
        Array("黑暗羽毛", 40, Array(
                Array(4034999, 20)
                )),
        Array("逆转宝石耳环", 70, Array(
                Array(1032217, 1)
                )),
        Array("逆转金属护肩", 100, Array(
                Array(1152156, 1)
                )),
        Array("逆转法典", 60, Array(
                Array(1162018, 1)
                )),
        Array("高科技电光镖", 20, Array(
                Array(2070019, 1)
                )),
        Array("还原卷轴X1", 2, Array(
                Array(2049600, 1)
                )),
        Array("还原卷轴X10", 20, Array(
                Array(2049600, 10)
                )),
        Array("还原卷轴X100", 200, Array(
                Array(2049600, 100)
                )),
        Array("X单手武器攻击力卷", 30, Array(
                Array(2613050, 1)
                )),
        Array("X单手武器魔力卷", 30, Array(
                Array(2613051, 1)
                )),
        Array("X双手武器攻击力卷", 30, Array(
                Array(2612061, 1)
                )),
        Array("X双手武器魔力卷", 30, Array(
                Array(2612062, 1)
                )),
        Array("X防具攻击力卷", 30, Array(
                Array(2616061, 1)
                )),
        Array("X防具魔力卷", 30, Array(
                Array(2616062, 1)
                )),
        Array("X饰品攻击力卷", 30, Array(
                Array(2615031, 1)
                )),
        Array("X饰品魔力卷", 30, Array(
                Array(2615032, 1)
                )),
        Array("永远的涅?火焰", 15, Array(
                Array(2048717, 1)
                )),
        Array("星岩魔方 x 10", 20, Array(
                Array(5750000, 10)
                )),
        Array("星岩魔方 x 25", 100, Array(
                Array(5750000, 25)
                )),
        Array("星岩魔方 x 50", 200, Array(
                Array(5750000, 50)
                )),
        Array("大师附加神奇魔方 x 10", 20, Array(
                Array(5062500, 10)
                )),
        Array("大师附加神奇魔方 x 50", 50, Array(
                Array(5062500, 50)
                )),
        Array("大师附加神奇魔方 x 100", 100, Array(
                Array(5062500, 100)
                )),
        Array("超级强化无损装备卷轴 x 10", 50, Array(
                Array(2409323, 10)
                )),
        Array("超级强化无损装备卷轴 x 50", 250, Array(
                Array(2409323, 50)
                )),
        Array("超级强化无损装备卷轴 x 100", 500, Array(
                Array(2409323, 100)
                )),
        Array("附加潜能记忆魔方 x 10", 20, Array(
                Array(5062503, 10)
                )),
        Array("附加潜能记忆魔方 x 50", 50, Array(
                Array(5062503, 50)
                )),
        Array("附加潜能记忆魔方 x 100", 200, Array(
                Array(5062503, 100)
                )),
        Array("神秘武器自选箱", 3000, Array(
                Array(2431980, 1)
                )),
        Array("暴君自选箱", 500, Array(
                Array(2436114, 1)
                )),
        Array("法弗纳武器箱", 200, Array(
                Array(2434007, 1)
                )),
        Array("特米纳斯武器箱", 500, Array(
                Array(2430888, 1)
                )),
        Array("法弗纳防具套装箱", 300, Array(
                Array(2435712, 1),
                Array(2435712, 1),
                Array(2435712, 1)
                )),
        Array("诺巴战士套装", 150, Array(
                Array(1132169, 1),
                Array(1102476, 1),
                Array(1072737, 1)
                )),
        Array("诺巴魔法师套装", 150, Array(
                Array(1132170, 1),
                Array(1102477, 1),
                Array(1072738, 1)
                )),
        Array("诺巴弓箭手套装", 150, Array(
                Array(1132171, 1),
                Array(1102478, 1),
                Array(1072739, 1)
                )),
        Array("诺巴飞侠套装", 150, Array(
                Array(1132172, 1),
                Array(1102479, 1),
                Array(1072740, 1)
                )),
        Array("诺巴海盗套装", 130, Array(
                Array(1132173, 1),
                Array(1102480, 1),
                Array(1072741, 1)
                )),
        Array("鲁塔比斯战士套装", 150, Array(
                Array(1003797, 1),
                Array(1042254, 1),
                Array(1062165, 1)
                )),
        Array("鲁塔比斯魔法师套装", 150, Array(
                Array(1003798, 1),
                Array(1042255, 1),
                Array(1062166, 1)
                )),
        Array("鲁塔比斯弓箭手套装", 150, Array(
                Array(1003799, 1),
                Array(1042256, 1),
                Array(1062167, 1)
                )),
        Array("鲁塔比斯飞侠套装", 150, Array(
                Array(1003800, 1),
                Array(1042257, 1),
                Array(1062168, 1)
                )),
        Array("解放的凯瑟利安", 120, Array(
                Array(1402180, 1)
                )),
        Array("银河之咒盾", 120, Array(
                Array(1099011, 1)
                )),
        Array("银河之刃", 80, Array(
                Array(1342095, 1)
                )),
        Array("银河之箭矢", 80, Array(
                Array(1352009, 1)
                )),
        Array("银河之卡片", 80, Array(
                Array(1352109, 1)
                )),
        Array("银河之吊坠", 80, Array(
                Array(1352206, 1)
                )),
        Array("银河之念珠", 80, Array(
                Array(1352216, 1)
                )),
        Array("银河之项链", 80, Array(
                Array(1352226, 1)
                )),
        Array("银河之赤铜之书", 80, Array(
                Array(1352236, 1)
                )),
        Array("银河之青银之书", 80, Array(
                Array(1352246, 1)
                )),
        Array("银河之白金之书", 80, Array(
                Array(1352256, 1)
                )),
        Array("银河之暴风羽毛", 80, Array(
                Array(1352266, 1)
                )),
        Array("银河之扳指", 80, Array(
                Array(1352276, 1)
                )),
        Array("银河之剑精", 80, Array(
                Array(1352286, 1)
                )),
        Array("银河之灵符", 80, Array(
                Array(1352296, 1)
                )),
        Array("银河之魂珠", 80, Array(
                Array(1352406, 1)
                )),
        Array("银河之精髓", 80, Array(
                Array(1352506, 1)
                )),
        Array("银河之灵魂手镯", 80, Array(
                Array(1352606, 1)
                )),
        Array("银河之麦林弹", 80, Array(
                Array(1352707, 1)
                )),
        Array("银河之私语", 80, Array(
                Array(1352815, 1)
                )),
        Array("银河之腕轮", 80, Array(
                Array(1352906, 1)
                )),
        Array("银河之鹰眼", 80, Array(
                Array(1352916, 1)
                )),
        Array("银河之火药桶", 80, Array(
                Array(1352928, 1)
                )),
        Array("银河之天龙锤", 80, Array(
                Array(1352935, 1)
                )),
        Array("银河之龙神的遗产", 80, Array(
                Array(1352945, 1)
                )),
        Array("银河之极限球", 80, Array(
                Array(1352957, 1)
                )),
        Array("银河之狂野之矛", 80, Array(
                Array(1352967, 1)
                )),
        Array("银河之圣地之光", 80, Array(
                Array(1352975, 1)
                )),
        Array("银河之控制器", 80, Array(
                Array(1353006, 1)
                )),
        Array("银河之狐狸珠", 80, Array(
                Array(1353105, 1)
                )),
        Array("银河之爆破弹", 80, Array(
                Array(1353405, 1)
                )),
        Array("阿丽莎之光辉", 300, Array(
                Array(1382235, 1)
                )),
        Array("柳德之剑", 60, Array(
                Array(1402224, 1)
                )),
        Array("海神王冠", 60, Array(
                Array(1004075, 1)
                )),
        Array("进阶精灵帽", 70, Array(
                Array(1003719, 1)
                )),
        Array("进阶半半头盔", 70, Array(
                Array(1003720, 1)
                )),
        Array("进阶女王王冠", 70, Array(
                Array(1003721, 1)
                )),
        Array("进阶贝伦头盔", 70, Array(
                Array(1003722, 1)
                )),
        Array("独眼巨人之眼Lv.3", 80, Array(
                Array(1022226, 1)
                )),
        Array("8周年点点红", 90, Array(
                Array(1012319, 1)
                )),
        Array("战斗机器人套装（男）", 300, Array(
                Array(1662073, 1),
                Array(1672069, 1)
                )),
        Array("战斗机器人套装（女）", 300, Array(
                Array(1662072, 1),
                Array(1672069, 1)
                )),
        Array("探险之黑暗暴击戒指", 80, Array(
                Array(1113069, 1)
                )),
        Array("永远的冒险家戒指", 100, Array(
                Array(1112919, 1)
                )),
        Array("冒险家的格拉泰斯戒指", 80, Array(
                Array(1112659, 1)
                )),
        Array("冒险家的魔法之戒", 80, Array(
                Array(1112429, 1)
                )),
        Array("冒险家的爆击之戒", 80, Array(
                Array(1112428, 1)
                )),
        Array("冒险家的残酷之戒", 100, Array(
                Array(1112427, 1)
                )),
        Array("冒险家的爆击之戒", 100, Array(
                Array(1112428, 1),
                Array(-1, 1)
                )),
        Array("战神祝福戒指", 100, Array(
                Array(1113020, 1)
                )),
        Array("黑龙传说指环", 100, Array(
                Array(1113084, 1)
                )),
        Array("黄金休彼德蔓徽章II", 200, Array(
                Array(1182017, 1)
                )),
        Array("水晶枫叶徽章", 150, Array(
                Array(1190302, 1)
                )),
        Array("起源之传说纹章(攻)", 80, Array(
                Array(1190502, 1)
                )),
        Array("起源之传说纹章(魔)", 80, Array(
                Array(1190503, 1)
                )),
        Array("真?觉醒冒险之心（战士）", 100, Array(
                Array(1122122, 1)
                )),
        Array("真?觉醒冒险之心（魔法师）", 100, Array(
                Array(1122123, 1)
                )),
        Array("真?觉醒冒险之心（弓箭手）", 100, Array(
                Array(1122124, 1)
                )),
        Array("真?觉醒冒险之心（飞侠）", 100, Array(
                Array(1122125, 1)
                )),
        Array("真?觉醒冒险之心（海盗）", 100, Array(
                Array(1122126, 1)
                )),
        Array("遗忘之神话耳环", 50, Array(
                Array(1032219, 1)
                )),
        Array("封印的时间之石", 60, Array(
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
        cm.sendSimpleN(text, 716, 2400009);
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
        cm.sendSimpleN(text, 716, 2400009);
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