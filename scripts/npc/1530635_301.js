/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：每天领奖
*   时间：2017年1月7日
*/
var status = -1;
var text;

var dayno = new Date().getDay();
var day = ["日", "一", "二", "三", "四", "五", "六"]
var days = "星期" + day[dayno];
var rewards = [
    [ // 星期一
        [5062002, 20],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期二
        [4001839, 88],
        [4001832, 50],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期三
        [2049325, 5],
        [2431152, 1],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期四
        [2340000, 2],
        [2430070, 1],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期五
        [2049100, 5],
        [2430069, 1],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期六
        [5062002, 20],
        [4001832, 50],
        //[4001839, 200],
        [2022956, 2],
        [4001006, 10],
    ],
    [ // 星期日
        [5062002, 20],
        [4001832, 50],
        [2049325, 5],
        [2022956, 2],
        [4001006, 10],
    ],
]

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (status == 0) {
        text = "\t\t#L0#领取#r" + days + "#k福利  每天自动更新#l\r\n\r\n";
        rewards.forEach(function (value, index, array) {
            if (index == 0 || index == 6) {
                return;
            }
            text += "星期" + day[index] + ": 奖励 ";
            value.forEach(function (subvalue, subindex, subarray) {
                text += "#i" + subvalue[0] + "#×" + subvalue[1] + " ";
            })
            text += "\r\n";
        })
        text += "\r\n\t星期" + day[5] + ": 奖励#r不公布#k";
        text += "\t星期" + day[6] + ": 奖励#r不公布#k";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (cm.getEventCount(days + "奖励", 0) > 0) {
            cm.sendOk("您已领取#r" + days + "#k的奖励,不要重复领取.");
            cm.dispose();
            return;
        }
        var needslot = rewards[dayno].length;
        if (!cm.canHoldSlots(needslot)) {
            cm.sendOk("包裹空间不足" + needslot + "格");
            cm.dispose();
        } else {
            text = "恭喜你获得了#r" + days + "#k奖励:\r\n\r\n"
            rewards[dayno].forEach(function (value, index, array) {
                cm.gainItem(value[0], value[1]);
                text += "#i" + value[0] + "# #z" + value[0] + "# × " + value[1] + "个\r\n";
            })
            cm.sendOk(text);
            cm.setEventCount(days + "奖励");
            cm.dispose();
        }
    }
}