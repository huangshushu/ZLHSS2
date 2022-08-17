
/**
 *冒险岛运营员
 **/
var status = -1;

function start() {
    status = -1;
    cm.sendSimple("组队任务: 女神的痕迹>#n \r\n你好,我是温莉. 如果你想探索女神塔请告诉我。哦对了，如果你的组队里有战士，魔法师，弓箭手，飞侠，海盗，我将给予你温莉的祝福，女神的羽毛可以用来兑换各种奖励哦！\r\n#L0#我要开始女神塔任务\r\n#L1##r我要用女神羽毛兑换奖励\r\n");
}

function action(mode, type, selection) {

    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0: //这是status
            cm.dispose();
            switch (selection) {
                case 0: //这是selection
                    cm.openNpc(9010000, "开始女神塔");
                    return;
                case 1: 
                    cm.openNpc(9010000, "nvshenyumao");
                    return;
                case 2: 
                    cm.openNpc(9010000, "MuiltPet");
                    return;
                case 3: 
                    cm.openNpc(9102001, "PetEvolution");
                    return;
                case 4: 
                    cm.openNpc(9102001, "ChangePetcolor");
                    return;
                case 6: 
                    cm.openNpc(9102001, "9030000");
                    return;
                case 7: 
                    cm.openNpc(9102001, "9030100");
                    return;
                case 22: 
                    cm.openNpc(9102001, "9310008");
                    return;
                case 21: 
                    cm.openNpc(9310073, "9310060");
                    return;
                case 5: 
                    cm.openNpc(9010000, "Compensate");
                    return;
                case 20: //这是selection
                    cm.openNpc(9010000,"9310141_1");
                    break;
            }
            if (selection == 0) {
                //cm.sendOk("在冒险岛生活还愉快吗？");
                //cm.dispose();

            } else if (selection == 1) {

            } else if (selection == 2) {

            } else if (selection == 3) {

            } else if (selection == 4) {

            } else if (selection == 5) {

            }
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
    }
}
