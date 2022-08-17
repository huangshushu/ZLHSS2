/*
脚本定制 技术支持 游戏顾问
唯一作者 - Care - 381991414
2017-5-28 18:33:40
 */



var Icon = Array(
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#"),
    Array("星星", "#fUI/piggyBarMinigame/crunch/11#")
    );
var status = 0;
var txt;
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
        txt = " " + Icon[1][1] + " ";
        for (var i = 0; i < 11; i++) {
            txt += Icon[1][1] + " ";
        }
        txt += "\r\n\r\n";
        txt += "\t\t\t\t #b#e" + Icon[1][1] + " 攻城中心 " + Icon[1][1] + "#k#n\r\n\r\n"
        txt += "#L0#" + Icon[0][1] + " #r攻城中心说明与介绍#l\r\n\r\n";
        txt += "#L1#" + Icon[0][1] + " #b每日签到 | 已签到回合 [ #r" + cm.getPQLog("攻城签到") + "#b ] 天#l#k\r\n\r\n";
        txt += "#L2#" + Icon[0][1] + " #d道具 | 高 [ #r" + cm.getItemQuantity(4251202) + "#d ] 中 [ #r" + cm.getItemQuantity(4251201) + "#d ] 下 [ #r" + cm.getItemQuantity(4251200) + "#d ]#l#k\r\n\r\n\r\n";
        txt += " " + Icon[1][1] + " ";
        for (var i = 0; i < 11; i++) {
            txt += Icon[1][1] + " ";
        }
        cm.sendSimpleS(txt, 2, 9000368);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                break;

            case 1:
                if (cm.getPQLog("攻城签到") >= 1) {
                    cm.playerMessage(1, "抱歉\r\n\r\n签到终止 - 仅签到 1 天");
                    cm.dispose();
                    return;
                }
                if (cm.getPQLog("攻城签到检测") < 1) {
                    cm.setPQLog("攻城签到检测");
                    cm.setPQLog("攻城签到", 1);
                    if (cm.getPQLog("攻城签到") == 5) {
                        cm.gainItem(1004885, 1);
                        cm.playerMessage(1, "恭喜你\r\n\r\n签到完毕 - 且获得 " + cm.getItemName(1004885));
                        cm.dispose();
                        return;
                    }
                    if (cm.getPQLog("攻城签到") == 1) {
                        cm.gainItem(2436259, 1);
                        cm.playerMessage(1, "恭喜你\r\n\r\n签到完毕 - 且获得 " + cm.getItemName(2436259));
                        cm.dispose();
                        return;
                    }
                    cm.playerMessage(1, "恭喜你\r\n\r\n签到完毕 - 且在固定时间会拥有奖品");
                } else {
                    cm.playerMessage(1, "抱歉\r\n\r\n每天只能签到一回");
                }
                cm.dispose();
                break;

            case 2:
                cm.dispose();
                cm.openNpc(2470018, "GcDj");
                break;
        }
    }
}

var format = function FormatString(c, length, content) {//符号 位置 代码 - 文本类型 .toString()
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
