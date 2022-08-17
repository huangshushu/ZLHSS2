var status = 0;
var bossid = "首冲礼包";
var giftLevel = Array(1, 10, 100, 500, 1000);
var giftContent = Array(
        Array(5062000, 10, 1),
        Array(5062002, 10, 2),
        Array(5062500, 10, 2),
        Array(1112793, 1, 2),
        Array(5062009, 10, 3),
        Array(2049135, 5, 3),
        Array(2430640, 1, 3),
        Array(5062009, 20, 4),
        Array(5062500, 20, 4),
        Array(2430640, 1, 4),
        Array(3994417, 1, 5),
        Array(5062009, 50, 5),
        Array(5062500, 50, 5),
        Array(2430640, 2, 5)
        )
var giftId = -1;
var giftToken = Array();
var gifts = null;
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
        text += "累计充值达到以下要求即可领取首冲礼包！\r\n\r\n\t#e#d您当前的充值金额：#n#r￥" + cm.getTotalRMB() + "#k\r\n";
        for (var key in giftLevel) {
            var tips = "";
            giftToken[key] = false;
            if (cm.getTotalRMB() >= giftLevel[key]) {
                if (cm.getBossLogAcc(bossid + key) != -1) {
                    tips = "(可领取)";
                    giftToken[key] = true;
                } else {
                    tips = "#g(已领取)#b";
                }
            } else {
                tips = "#r(条件不足)#b";
            }
            text += "#b#L" + (parseInt(key) + 1) + "#领取#r#e" + giftLevel[key] + "#n#b元首冲礼包 " + tips + "#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        var text = "#r#e" + giftLevel[giftId - 1] + "#n#b元首冲礼包内容：\r\n";
        gifts = getGift(giftId);
        for (var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text += "#v" + itemId + "##b#t" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
        }
        text += "\r\n#d是否现在就领取该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId != -1 && gifts != null) {
            if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
                cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
                cm.dispose();
                return;
            }
            if (giftToken[giftId - 1]) {
                cm.setBossLogAcc(bossid + (giftId - 1), -2);
                for (var key in gifts) {
                    var itemId = gifts[key][0];
                    var itemQuantity = gifts[key][1];
                    cm.gainItem(itemId, itemQuantity);
                }
                cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
                cm.channelMessage(0x18, "『首冲礼包』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了 " + giftLevel[giftId - 1] + "元 首冲礼包。");
                cm.dispose();
            } else {
                status = -1;
                cm.sendSimple("您已经领过了该礼包或者充值金额未达到要求，无法领取。");
            }
        } else {
            cm.sendOk("领取错误！请联系管理员！");
            cm.dispose();
        }
    }
}
function getGift(id) {
    var lastGiftContent = Array();
    for (var key in giftContent) {
        if (giftContent[key][2] == id)
            lastGiftContent.push(giftContent[key]);
    }
    return lastGiftContent;
}
