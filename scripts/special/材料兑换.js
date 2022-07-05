

var 红蓝点 = "#fEffect/CharacterEff.img/1032054/0/0#";
var 蓝星 = "#fEffect/CharacterEff.img/1052203/1/0#";
var 红星 = "#fEffect/CharacterEff.img/1052203/2/0#";
var 大蓝星 = "#fEffect/CharacterEff.img/1022223/2/0#";
var 大红星 = "#fEffect/CharacterEff.img/1022223/1/0#";
var 蓝点 = "#fEffect/CharacterEff.img/1022223/6/0#";
var 红点 = "#fEffect/CharacterEff.img/1022223/7/0#";
var 分割线 = "#fUI/CashShop.img/CSDiscount/Line#";
var 熊1 = "#fUI/GuildMark/Mark/Animal/00002011/1#";
var 熊2 = "#fUI/GuildMark/Mark/Animal/00002011/2#";
var 熊3 = "#fUI/GuildMark/Mark/Animal/00002011/3#";
var 熊4 = "#fUI/GuildMark/Mark/Animal/00002011/4#";
var 熊5 = "#fUI/GuildMark/Mark/Animal/00002011/5#";
var 熊6 = "#fUI/GuildMark/Mark/Animal/00002011/6#";

var status = -1;
var typed = -1;
var sel = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;

var 勇气之心 = 4001226;
var 智慧之心 = 4001227;
var 精准之心 = 4001228;
var 敏捷之心 = 4001229;
var 自由之心 = 4001230;


var dh = Array(
        Array(1112446, 20, 20, 20, 20, 20), //公婆戒指
        Array(4000464, 15, 15, 15, 15, 15), //爱心宝石
        Array(4440300, 5, 5, 5, 5, 5), //C级力量
        Array(4441300, 5, 5, 5, 5, 5), //C级运气
        Array(4442300, 5, 5, 5, 5, 5), //C级智慧
        Array(4443300, 5, 5, 5, 5, 5) //C级敏捷
        //Array(4032352, 5, 5, 5, 5, 5), //纯净之水
        //Array(4000358, 5, 5, 5, 5, 5), //强化钢铁
        //Array(5210001, 15, 15, 15, 15, 15), //双倍经验卡7天（给时间）
        //Array(5360016, 20, 20, 20, 20, 20), //双倍爆率卡7天（给时间）
        //Array(5041000, 5, 5, 5, 5, 5), //高级瞬移之石
        //Array(5040000, 3, 3, 3, 3, 3), //缩地石
        //Array(5230000, 2, 2, 2, 2, 2)  //猫头鹰
        );

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var rq = year + "" + month;
    switch (status) {
        case 0:
            var Text = "\t\t\t  " + 红星 + 大红星 + 红点 + "#e#r兑换" + 红蓝点 + "中心#k" + 蓝点 + 大蓝星 + 蓝星 + "#n#k\r\n";
            Text += "你当期拥有#v" + 勇气之心 + "##z" + 勇气之心 + "#[#r" + cm.itemQuantity(勇气之心) + "#k]个 刷怪掉落\r\n";
            Text += "你当期拥有#v" + 智慧之心 + "##z" + 智慧之心 + "#[#r" + cm.itemQuantity(智慧之心) + "#k]个 答题奖励\r\n";
            Text += "你当期拥有#v" + 精准之心 + "##z" + 精准之心 + "#[#r" + cm.itemQuantity(精准之心) + "#k]个 红水灵机\r\n";
            Text += "你当期拥有#v" + 敏捷之心 + "##z" + 敏捷之心 + "#[#r" + cm.itemQuantity(敏捷之心) + "#k]个\r\n";
            Text += "你当期拥有#v" + 自由之心 + "##z" + 自由之心 + "#[#r" + cm.itemQuantity(自由之心) + "#k]个\r\n";
            for (var i = 0; i < dh.length; i++) {
                Text += "#L" + i + "#兑换#v" + dh[i][0] + "##z" + dh[i][0] + "# #k\r\n\r\n";

                //Text += "#L" + i + "#兑换#v" + dh[i][0] + "##z" + dh[i][0] + "# \r\n需要" + dh[i][1] + "个#v" + 勇气之心 + "# 需要" + dh[i][2] + "个#v" + 智慧之心 + "# 需要" + dh[i][3] + "个#v" + 精准之心 + "# 需要" + dh[i][4] + "个#v" + 敏捷之心 + "# 需要" + dh[i][5] + "个#v" + 自由之心 + "# 每月" + "#r[不限购]" + "#k\r\n";

            }
            cm.sendSimple(Text);
            break;
        case 1:
            sel = selection;
            var Text = "需要" + dh[sel][1] + "个#v" + 勇气之心 + "#\r\n" +
                    "需要" + dh[sel][2] + "个#v" + 智慧之心 + "#\r\n" +
                    "需要" + dh[sel][3] + "个#v" + 精准之心 + "#\r\n" +
                    "需要" + dh[sel][4] + "个#v" + 敏捷之心 + "#\r\n" +
                    "需要" + dh[sel][5] + "个#v" + 自由之心 + "#\r\n";
            Text += "请输入你要兑换#v" + dh[sel][0] + "##z" + dh[sel][0] + "#的数量\r\n" +
                    "";
            if (dh[sel][2] == 0) {
                cm.sendGetNumber(Text, 1, 1, 100);
            } else {
                cm.sendGetNumber(Text, 1, 1, 100);
            }
            break;
        case 2:
            if (selection <= 0 || selection >= 32767) {
                cm.sendOk("输入错误~！超出最小值或超过最大值。");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(勇气之心) < (dh[sel][1] * selection)) {
                cm.sendOk("你的#v" + 勇气之心 + "##z" + 勇气之心 + "#不足兑换");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(智慧之心) < (dh[sel][2] * selection)) {
                cm.sendOk("你的#v" + 智慧之心 + "##z" + 智慧之心 + "#不足兑换");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(精准之心) < (dh[sel][3] * selection)) {
                cm.sendOk("你的#v" + 精准之心 + "##z" + 精准之心 + "#不足兑换");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(敏捷之心) < (dh[sel][4] * selection)) {
                cm.sendOk("你的#v" + 敏捷之心 + "##z" + 敏捷之心 + "#不足兑换");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity(自由之心) < (dh[sel][5] * selection)) {
                cm.sendOk("你的#v" + 自由之心 + "##z" + 自由之心 + "#不足兑换");
                cm.dispose();
                return;
            }


            cm.gainItem(勇气之心, -(selection * dh[sel][1]));
            cm.gainItem(智慧之心, -(selection * dh[sel][2]));
            cm.gainItem(精准之心, -(selection * dh[sel][3]));
            cm.gainItem(敏捷之心, -(selection * dh[sel][4]));
            cm.gainItem(自由之心, -(selection * dh[sel][5]));
            cm.gainItem(dh[sel][0], selection);
            cm.sendOk("恭喜你兑换成功获得了#v" + dh[sel][0] + "##z" + dh[sel][0] + "#" + selection + "个");
        default:
            cm.dispose();
            break;
    }
}