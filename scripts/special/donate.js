/* global cm */
var status = -1;
var donatePrice = -1;
var donateType = -1;

function start() {
    cm.sendYesNo("捐赠须知:\r\nblablabla...\r\n是否已阅读须知并进行捐赠?");
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendGetNumber("请输入你需要捐赠的金额\r\n#r※捐赠金额必须在 300 以上 20000 以下#k", 300, 300, 20000);
    } else if (status === i++) {
        if (donatePrice === -1) {
            donatePrice = selection;
        }
        if (donatePrice < 300 || donatePrice > 20000) {
            cm.sendOk("#r※捐赠金额必须在 300 以上 20000 以下#k 阁下输入的金额不在范围内,请重新尝试。");
            cm.dispose();
        } else {
            cm.sendSimple("阁下输入的捐赠金额为#b" + donatePrice + "#k, 能获得#b" + parseInt(donatePrice * getCashRate(donatePrice)) + "#k点数\r\n请选择付款方式\r\n"+
                "#L1#超商代码(全家/莱尔富/OK超商)#l\r\n" +
                "#L2#ATM虚拟帐号转帐#l\r\n" +
                "#L3#7-11 ibon代码#l\r\n"
            );
        }
    } else if (status === i++) {
        if (donateType === -1) {
            donateType = selection;
        }
        if (donateType < 1 || donateType > 3) {
            cm.sendOk("发生未知错误。");
        } else {
            //donate fuction
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function getCashRate(price) {
    var cashRate = -1;
    switch (price / 1000) {
        case 1:
            cashRate = 4;
            break;
        case 2:
            cashRate = 4.5;
            break;
        default:
            if (price / 1000 >= 3) {
                cashRate = 5;
            } else {
                cashRate = 3.2;
            }
            break;
    }
    return cashRate;
}
