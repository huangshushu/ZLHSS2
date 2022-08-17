var status = 0;
var kkk = "#fMap/MapHelper.img/weather/starPlanet2/8#";
var giftContent = Array(
        Array("全属性+55,.攻击力+25的的150级随机防具箱子", 100, Array(
                Array(2434229, 1)
				 )),
				Array("超越证明自选装备", 30, Array(
                Array(2434230, 1)
				 )),
				Array("100全属性的as自选装备", 1000, Array(
                Array(2431986 , 1)
				 )),
				Array(" 1000万突破石（可以交易）", 85, Array(
                Array(2614067 , 1)
				 )),
				Array("500万突破石", 35, Array(
                Array(2614061  , 1)
				 )),
				Array("100万突破石", 10, Array(
                Array(2614002  , 1)
				 )),
				Array("V 卷 盒子", 160, Array(
                Array(2435824, 1)
				 )),
				Array("X 卷盒子", 25, Array(
                Array(2432206 , 1)
				 )),
				Array("永恒火焰", 3, Array(
                Array(2048721  , 1)
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
        text = "勇敢的冒险家.来吧!用你的战利品选购吧!\r\n#r#n#k\r\n";
        text += "" + kkk + " #b您当前#v4001210#数量为：#r"+cm.getItemQuantity(4001210)+"#k\r\n";
        for (var key in giftContent) {
            text += "#b#L" + key + "#" + kkk + "【#r" + giftContent[key][0] + "#b】 #d = #r" + giftContent[key][1] + " #d#v4001210##l#k\r\n";
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
        text += "\r\n#d是否花费#e#r" + price + "#n#d个#z4001210#选购该物品？#k";
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
            if (!cm.haveItem(4001210,price)) {
                cm.sendOk("您的物品数量不足.请确认后选购。");
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
            cm.gainItem(4001210, - price);
            cm.sendOk("恭喜您，购买成功！");
            cm.dispose();
			        cm.worldSpouseMessage(0x18, "『变态BOSS战利品兑换』" + "[" + cm.getChar().getName() + "] 成功兑换了一个精美战利品 大家恭喜Ta吧！");

        } else {
            cm.sendOk("购买错误！请联系管理员！");
            cm.dispose();
        }
    }
}