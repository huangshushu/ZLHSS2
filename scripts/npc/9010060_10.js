var status = -1;
var selectedType = 0;
var selectedMeso = 0;
var moneyMeso = 100000000;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 2) {
                cm.sendNext("如果您需要存款或者取款的话请找我，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n\r\n您目前身上有#r " + cm.getMeso() + " #k金币\r\n银行存款为#r " + cm.getMoney() + " #k亿金币\r\n#b#L0#我要存款#l\r\n#L1#我要取款#l");
        } else if (status == 1) {
            selectedType = selection;
            if (selectedType == 0) {
                cm.sendGetNumber("请输入您要存款的金额(单位: 亿 ):\r\n", 1, 1, 23);
            } else if (selectedType == 1) {
                cm.sendGetNumber("请输入您要取款的金额(单位: 亿 ):\r\n", 1, 1, 5);
            }
        } else if (status == 2) {
            selectedMeso = selection;
            if (selectedType == 0) {
                cm.sendYesNo("您是否要存入#r " + selectedMeso + " #k亿金币。");
            } else if (selectedType == 1) {
                cm.sendYesNo("您是否要取出#r " + selectedMeso + " #k亿金币。");
            }
        } else if (status == 3) {
            if (selectedType == 0) {
                if (cm.getMeso() < selectedMeso * moneyMeso) {
                    cm.sendNext("您的金币不够。");
                } else if (cm.addMoney(selectedMeso, 0) > 0) {
                    cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("好的，已经存入！");
                } else {
                    cm.sendOk("存款出现错误，请反馈给管理员！");
                }
                cm.dispose();
            } else if (selectedType == 1) {
                if (cm.getMoney() < selectedMeso) {
                    cm.sendNext("您没有存那么多钱。");
                } else if (cm.getMeso() > 1500000000) {
                    cm.sendNext("您身上的金币超过了 15 亿，领取失败。请将金币存入仓库后来找我领取吧！");
                } else if (cm.addMoney( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * moneyMeso);
                    cm.sendOk("好的，请收好您的钱！");
                } else {
                    cm.sendOk("取款出现错误，请反馈给管理员！");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}
