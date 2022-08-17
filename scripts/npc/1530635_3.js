/*
*   制作：dgms
*   唯一qq:2310492726
*   功能：每日福利
*   时间：2017年1月7日
*/
var status = -1;
var ico1 = "#fEffect/ItemEff/1102815/effect/jump/0#";
var ico2 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var dayno = new Date().getDay();
var day = ["日", "一", "二", "三", "四", "五", "六"]
var days = "星期" + day[dayno];

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
        text += "\r\n\t\t\t\t\t#L6##r#e返回上一步#l"
        //text += "\r\n#L0##b连续#r签到#k           [#v1182087# #v1162025# #v4033667#]#k#l"
        text += "\r\n#L1##b限定#r签到#k           [#v3015671# #v3015597# #v3015710#]#k#l"
		text += "\r\n#L10##b等级#r奖励#k         #d[#v2431938# #v4001208# #v5062024#]#k#l"
        text += "\r\n#L5##b冲级#r奖励#k         #d[#v2049116# #v2616061# #v2436245#]#k#l"
        text += "\r\n#L7##b在线#r奖励#k         #d[#v4031504# #v4031505# #v4031506#]#k#l"
        text += "\r\n#L2##b每日#r点卷.抵用卷#k    #d[大量积分.点卷.抵用卷#v2140008#]#k#l"
        text += "\r\n#L3##b每#r" + days + "#k#b福利#k       [#v2430069# #v2430781# #v2430070#]#l"
        text += "\r\n#L4##bBOSS门票领取#k       #d[#v4001017##v4031179##v4033981##v5030036#]#k#l"



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
            cm.openNpc(1530635, "Onlinebonus");
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(1530635, 301);
        } else if (selection == 4) {
            if (cm.getLevel() < 150) {
                cm.playerMessage(1, "抱歉\r\n\r\n等级150才可以领");
                cm.dispose();
                return;
            }
            if (cm.getPQLog("Boss门票啊") >= 1) {
                cm.playerMessage(1, "抱歉\r\n\r\n一天只能领一次");
                cm.dispose();
                return;
            }
            cm.gainItem(4001017, 2);
            cm.gainItem(4031179, 2);
            cm.gainItem(4033981, 2);
            //cm.gainItem(4032246, 2);
            cm.gainItem(5030036, 2);
            cm.setPQLog("Boss门票啊");
            cm.playerMessage(1, "恭喜你\r\n\r\n领取成功");
            cm.dispose();
        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(1530635, 6666);
        } else if (selection == 10) {
            cm.dispose();
            cm.openNpc(1064026,"Levelreward");
        } else if (selection == 6) {
            cm.dispose();
            cm.openNpc(1530635, 0);
        } else if (selection == 7) {
            cm.dispose();
            cm.openNpc(1530635, 7878);
        }
    } else {
        cm.dispose();
    }
}

