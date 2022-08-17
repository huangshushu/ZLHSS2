/* 点卷商店 */

var status = 0;

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
        var selStr = "#e#r本服特殊的军衔系统，点击升级可以查看晋级军衔的所需要的材料，属性非常可观，还有奖励丰富的每日军衔礼包，后期还会开放各种特权。\r\n\r\n#b团长军衔#r奖励#l\r\n#k每日五千抵用券#v2049130#*5张#v2340000#*5张#v5064000#*5张#v5062002#*10个#v5062500#*5个#v1142321#金币300W\r\n\r\n#b旅长军衔#r奖励#l\r\n#k每日1W抵用券#v2049135#*5个#v2340000#*10个#v5064000#*5个#v5062500#*10个#v5062002#*20个#v1142318#金币500W\r\n\r\n#b师长军衔#r奖励#l\r\n#k每日2W抵用券#v2049135#*10个#v2340000#*20个#v5064000#*10个#v5062002#*20个#v5062009#*10个#v1142319#金币1000W\r\n\r\n#b军长军衔#r奖励#l\r\n每日#b3W抵用券#v2049135#*20个#v2340000#*30个#v5064000#*20个#v5062002#*30个#v5062009#*20个#v1142320#金币2000W";
     //#b#L8#购买绝版宠物#l#L14#购买酷炫骑宠#l

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9330006); //双倍道具
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9310074, 3); //暴君
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9310074, 2); //各种椅子
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 15); //各种喇叭
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 16); //洗点卷轴
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //玩具商店
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9110103); //骑宠商店
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9110114); //破攻石头
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 5); //一键潜能
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9270096, 13); //一键潜能
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 1301); //一键潜能
            break;
	case 15:
            cm.dispose();
            cm.openNpc(9270096, 15); //一键潜能
            break;
        }
    }
}