/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：高手进阶
*   时间：2017年1月7日
*/
var status = -1;
var ico1 = "#fUI/Basic.img/icon/arrow#";
var rewardItem = [
    1702620,
    1702711,
    1702712,
    1702710,
    1702713,
    1702714,
    1702639,
    1702636,
    1702634,
    1702631,
    1702660,
    1702623,
    1702593,
    1702594,
    1702595,
    1702611
]
var selitem;

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
    }

    if (status == 0) {
        text = "#d#e|----------------- 高手进阶 -----------------|#l"
        text += "\r\n"
        text += "#L0#" + ico1 + " 军衔系统#l"
        text += "\t"
        text += "#L1#" + ico1 + " 时装觉醒#l"
        text += "\t"
        text += "#L2#" + ico1 + " 宠物进化#l"
        text += "\r\n"
        text += "#L3##r" + ico1 + " 装备合成#l"
        text += "\t"
        text += "#L4##r" + ico1 + " 制作中心#l"
        text += "\t"
        text += "#L5##r" + ico1 + " 装备分解#l"
        text += "\r\n"
        text += "#L6##d" + ico1 + " 点券洗血#l"
        text += "\t"
        text += "#L8#" + ico1 + " 首充奖励#l"
        text += "\t"
        text += "#L9#" + ico1 + " 财富转盘#l"
        text += "\r\n\r\n\t"
        text += "#L7#520个 #i4000164# 随机兑换永久稀有点装装备#l"
        text += "\r\n\r\n"
        text += "#i1702620# #i1702710# #i1702711# #i1702712# #i1702713# #i1702714# #i1702639# #i1702636#"
        text += " "
        text += "#i1702634# #i1702631# #i1702660# #i1702623# #i1702593# #i1702594#  #i1702595# #i1702611#"
        text += "\r\n"
        text += "\t\t\t\t\t#L99##r#e返回上一步#l"

        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(9020009, 1);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(1530636, 1007);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(1032102);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(1530635, 2002);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 4) {
            cm.dispose();
            cm.openNpc(1530635, 2001);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(1022003, 246);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 6) {
            cm.dispose();
            cm.openNpc(1530636, 1009);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 7) {
            if (cm.getItemQuantity(4000164) > 520 && cm.canHoldSlots(1)) {
                text = "稀有道具列表:\r\n\r\n";
                rewardItem.forEach(function (value, index, array) {
                    text += "#L" + index + "##i" + value + "##l" + ((index + 1) % 6 == 0 ? "\r\n" : "");
                })
                cm.sendSimple(text);
            } else {
                cm.sendOk("1.#i4000164# 数量不足!\r\n2.装备栏空间不足");
                cm.dispose();
            }
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 8) {
            cm.dispose();
            cm.openNpc(1530635, 2006);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 9) {
            cm.dispose();
            cm.openNpc(1530635, 2007);
            /////////////////////////////////////////////////////////////////////
        } else if (selection == 99) {
            cm.dispose();
            cm.openNpc(1530635, 0);
        }
    } else if (status == 2) {
        selitem = selection;
        cm.sendYesNo("确定兑换#i" + rewardItem[selection] + "#吗？");
    } else if (status == 3) {
        cm.gainItem(4000164, -520);
        cm.gainItem(rewardItem[selitem], 1);
        cm.sendOk("恭喜您兑换成功。");
        cm.dispose();
    } else {
        cm.dispose();
    }
}

