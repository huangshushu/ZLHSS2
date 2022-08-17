/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：在线时间兑换礼盒
*   时间：2017年1月13日
*/
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    } if (status == 0) {
        text = "#e|---------------- 在线时间兑换 ---------------|#n"
        text += "\r\n#L0##b查看兑换详细规则#n#l"
        text += "\r\n\r\n\t#e您的在线时间为:" + cm.getOnlineTime() + "分钟#n"
        text += "\r\n\r\n#L1##b领取#v4031504# #v4031505# #v4031506#"
        text += "\r\n\r\n#L2##r使用#v4031504# #v4031505# #v4031506#兑换特别礼物"

        cm.sendSimpleS(text, 9);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            text1 = "您可以使用#v4031504# #v4031505# #v4031506#兑换特别奖励"
            text1 += "\r\n"
            text1 += "在线时间为#b300#k到#b600#k点可以兑换获得1个#v4031504#"
            text1 += "\r\n"
            text1 += "在线时间为#b700#k到#b899#k点可以兑换获得1个#v4031505#"
            text1 += "\r\n"
            text1 += "在线时间为#b900#k点可以兑换获得1个#v4031506#"

            cm.sendNext(text1)
        } else if (selection == 1) {
            if (cm.getOnlineTime() >= 300 && cm.getOnlineTime() <= 600 && cm.getBossLog('在线礼盒300') == 0) {
                cm.gainItem(4031504, 1)
                cm.sendOk("成功兑换一个#v4031504#")
                cm.setBossLog('在线礼盒300')
            } else if (cm.getOnlineTime() >= 700 && cm.getOnlineTime() <= 899 && cm.getBossLog('在线礼盒700') == 0) {
                cm.gainItem(4031505, 1)
                cm.sendOk("成功兑换一个#v4031505#")
                cm.setBossLog('在线礼盒700')
            } else if (cm.getOnlineTime() >= 900 && cm.getBossLog('在线礼盒900') == 0) {
                cm.gainItem(4031505, 1)
                cm.sendOk("成功兑换一个#v4031506#")
                cm.setBossLog('在线礼盒900')
            } else {
                cm.sendOk("1.在线时间不足,无法兑换!\r\n2.你已经领取过了!");
            }
            cm.dispose();
        } else if (selection == 2) {
            cm.sendNext("#L3##r兑换奖品#v4031504# #L4#兑换奖品#v4031505# #L5#兑换奖品#v4031506#")
        }
    } else if (status == 2) {
        if (selection == 3) {
            cm.dispose();
            cm.gainItem(4031504,1)
            cm.sendOk("成功兑换了奖品");
        } else if (selection == 4) {
            cm.dispose();
            cm.gainItem(4031504,1)
            cm.sendOk("成功兑换了奖品");
        } else if (selection == 5) {
            cm.dispose();
            cm.gainItem(4031504,1)
            cm.sendOk("成功兑换了奖品");
        }

    }
}