/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：仓库店铺
*   时间：2017年1月7日
*/
var status = -1;
var ico1 = "#fEffect/ItemEff/1102815/effect/jump/0#";
var ico2 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
        text = "\t\t\t\t" + ico1
        text += "#L6#返回上一步"
        text += "\r\n#L0##b连续#r签到#k           [#v5062002# #v5064003# #v2431741#]#k#l"
        text += "\r\n#L1##b限定#r签到#k           [#v3010164# #v3010166# #v3010172#]#k#l"
        text += "\r\n#L2##b每日#r点卷.抵用卷#k    #d[大量积分.点卷.抵用卷#v2140008#]#k#l"
        text += "\r\n#L3##b每星期#r0#k#b福利#k        [#v2430069# #v2430781# #v2430070#]#l"
        text += "\r\n#L4##b在线时间领#k         #d[#v4031504# #v4031505# #v4031506#]#k#l"
        text += "\r\n#L5##b隐藏箱子#k           [#v1322009# #v1322056# #v1322010#]#l"
        //text += "\r\n#L6##b每日寻宝#k         #d[#v4031504# #v4031505# #v4031506#]#k#l"

        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(1530635, 10);
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(1530635, 9);
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9030100);
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9030100);
        } else if (selection == 4) {
            cm.dispose();
            cm.openNpc(9030100);
        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(1530635, 11);
        } else if (selection == 6) {
            cm.dispose();
            cm.openNpc(1530635, 0);
        }
    } else {
        cm.dispose();
    }
}

