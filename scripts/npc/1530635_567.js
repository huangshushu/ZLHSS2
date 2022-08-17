var IconA = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var txt;
var status = -1;

var itemListA = Array(//  -  ID 武公的证物 时间 数量
    Array(4001839, 1, 0, 20),
    Array(2433287, 1, 0, 15),
    Array(1152120, 25, 0, 1),
    Array(1152121, 50, 0, 1),
    Array(1152122, 100, 0, 1),
    Array(1152123, 125, 0, 1),
    Array(1152124, 150, 0, 1),
    Array(1132211, 25, 0, 1),
    Array(1132212, 50, 0, 1),
	Array(1132213, 100, 0, 1),
    Array(1132214, 125, 0, 1),
    Array(1132215, 150, 0, 1),
    Array(1022226, 480, 0, 1),
	Array(1082392, 500, 0, 1),
    Array(1102786, 99, 0, 1),
    Array(1102572, 99, 0, 1),
    Array(1102624, 99, 0, 1),
    Array(1102939, 99, 0, 1),
    Array(1102938, 99, 0, 1),
    Array(1102937, 99, 0, 1),
    Array(1102902, 99, 0, 1),
    Array(1102901, 99, 0, 1),
	Array(1102900, 99, 0, 1),
    Array(1102920, 99, 0, 1),
    Array(1102910, 99, 0, 1),
    Array(1102908, 99, 0, 1),
	Array(1102903, 99, 0, 1),
	Array(1102876, 99, 0, 1),
    Array(1102874, 99, 0, 1),
    Array(1102831, 99, 0, 1),
    Array(1042361, 99, 0, 1),
    Array(1051491, 99, 0, 1),
    Array(1042346, 99, 0, 1),
    Array(1052626, 99, 0, 1),
    Array(1051414, 99, 0, 1),
	Array(1042330, 99, 0, 1),
    Array(1052605, 99, 0, 1),
    Array(1042314, 99, 0, 1),
    Array(1042320, 99, 0, 1),
	Array(1052657, 99, 0, 1),
	Array(1052656, 99, 0, 1),
    Array(1051366, 99, 0, 1),
    Array(1052727, 99, 0, 1),
    Array(1042159, 99, 0, 1),
    Array(1042285, 99, 0, 1),
    Array(1042275, 99, 0, 1),
    Array(1042104, 99, 0, 1),
    Array(1042105, 99, 0, 1),
	Array(1052224, 99, 0, 1),
    Array(1042142, 99, 0, 1),
    Array(1041142, 99, 0, 1),
    Array(1052200, 99, 0, 1),
	Array(1052061, 99, 0, 1),
	Array(1052059, 99, 0, 1),
    Array(1051152, 99, 0, 1),
    Array(1050210, 99, 0, 1),
    Array(1051256, 99, 0, 1),
    Array(1051278, 99, 0, 1),
    Array(1050227, 99, 0, 1),
    Array(1052201, 99, 0, 1),
    Array(1052412, 99, 0, 1),
	Array(1052503, 99, 0, 1),
    Array(1062226, 99, 0, 1),
    Array(1062235, 99, 0, 1),
    Array(1062236, 99, 0, 1),
	Array(1062211, 99, 0, 1),
	Array(1062212, 99, 0, 1),
    Array(1062213, 99, 0, 1),
    Array(1062214, 99, 0, 1),
    Array(1062216, 99, 0, 1),
    Array(1062218, 99, 0, 1),
    Array(1062219, 99, 0, 1),
    Array(1062220, 99, 0, 1),
    Array(1062221, 99, 0, 1),
	Array(1062222, 99, 0, 1),
    Array(1062223, 99, 0, 1),
    Array(1062224, 99, 0, 1),
    Array(1062225, 99, 0, 1),
	Array(1062229, 99, 0, 1),
	Array(1062231, 99, 0, 1),
    Array(1062233, 99, 0, 1),
    Array(1062171, 99, 0, 1),
    Array(1062172, 99, 0, 1),
    Array(1062173, 99, 0, 1),
    Array(1062174, 99, 0, 1),
    Array(1062175, 99, 0, 1),
    Array(1062209, 99, 0, 1),
	Array(1062179, 99, 0, 1),
    Array(1062183, 99, 0, 1),
    Array(1062189, 99, 0, 1),
    Array(1062203, 99, 0, 1),
	Array(1062204, 99, 0, 1),
	Array(1073109, 99, 0, 1),
    Array(1072841, 99, 0, 1),
    Array(1072842, 99, 0, 1),
    Array(1073046, 99, 0, 1),
    Array(1073047, 99, 0, 1),
    Array(1072926, 99, 0, 1),
    Array(1072426, 99, 0, 1)
    );

var A = -1;
var B = -1;
var C = -1;
var D = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        txt = IconA + " #d尊敬的[ #r#h ##d ] 玩家 - 请选择您兑换的道具\r\n\r\n\t\t\t#r当前拥有武公的证物 [ " + cm.getItemQuantity(2431690) + " ]#k";
        for (var i = 0; i < itemListA.length; i++) {
            if (itemListA[i][2] <= 0) {
                txt += "\r\n#L" + i + "##d武公的证物 [ #r" + itemListA[i][1] + " #d]　#i" + itemListA[i][0] + "#　#z" + itemListA[i][0] + "##l";
            } else {
                txt += "\r\n#L" + i + "##d武公的证物 [ #r" + itemListA[i][1] + " #d]　#i" + itemListA[i][0] + "#　#z" + itemListA[i][0] + "# #b时间 [ #r" + itemListA[i][2] + " #d]#k#l";
            }
        }
        cm.sendYesNoS(txt, 2);
    } else if (status == 1) {
        var item = itemListA[selection];
        if (item != null) {
            A = item[0];//道具
            B = item[1];//武公的证物
            C = item[2];//时间
            D = item[3];//数量
            if (C <= 0) {
                cm.sendYesNo("你想使用 [ " + B + " ] 武公的证物来兑换#i" + A + "# #b#t" + A + "##k 吗？\r\n 使用期限：#b永久#k。");
            } else {
                cm.sendYesNo("你想使用 [ " + B + " ] 武公的证物来兑换#i" + A + "# #b#t" + A + "##k 吗？ \r\n使用期限：#b" + C + "天#k。");
            }
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getSpace(1) < 2 && cm.getSpace(2) < 2 && cm.getSpace(3) < 2 && cm.getSpace(4) < 2 && cm.getSpace(5) < 2) {
            cm.sendOk("请确保您所有的背包栏都有2个以上的空格。");
            cm.dispose();
            return;
        }
        if (A <= 0 || B <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }

        if (cm.getItemQuantity(4001620) >= B) {
            if (C <= 0) {
                cm.gainItem(A, D);
            } else {
                cm.gainItemPeriod(A, D, C);
            }
            status = -1;
            cm.gainItem(4001620, -B);
            cm.sendOk("恭喜您兑换成功");
            //var gachaponItem = cm.gainGachaponItem(A, 0, "[ 钓鱼公告 ]", 3, true);
        } else {
            status = -1;
            cm.sendOk("对不起，你没有足够的武公的证物。");
        }
        cm.dispose();
    }
}