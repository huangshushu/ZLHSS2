/*
 *	阿斯旺 - 阿斯旺解放战
 */

var status = -1;
var minLevel = 40;
var maxCount = 5;
var minPartySize = 1;
var maxPartySize = 4;

function start() {
    cm.sendSimple("#e<阿斯旺解放战>#n\r\n你愿意去扫荡仍然在阿斯旺地区徘徊的希拉的残党吗?#b\r\n\r\n\r\n#L0#扫荡希拉的残党#l\r\n#L1#直接消灭希拉 (120级以上)#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (selection == 0) {
            cm.playerMessage("阿斯旺解放战暂时处于和平状态。请等到下一季的解放战。");
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getLevel() >= 120) {
                cm.sendNext("现在你将到达希拉之塔入口，请务必消灭希拉吧。");
            } else {
                cm.sendOk("以你现在的实力，对战希拉有些勉强。必须达到120级以上才能进行挑战。");
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(262030000, 0); //希拉之塔 - 希拉之塔入口
        cm.dispose();
    } else {
        cm.dispose();
    }
}
