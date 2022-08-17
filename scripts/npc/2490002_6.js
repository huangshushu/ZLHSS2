/*
 *兑换
 */

var status = 0;
var nxNum = 10000;//10点券洗1血

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1.) {
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            abb = 1;
            //cm.sendGetText("#r#e\t\t\t[ #h # ] 尊敬的玩家 \r\n\r\n\t\t这里是洗血基地 请输入您需洗的血量值\r\n\r\n\t当前血量：#b" + cm.getPlayerStat("MAXHP") + "", 1033210);
        } else if (status == 1) {
			if(cm.haveItem(2436362,1)){
				nxNum=8;
			}
			if(cm.getJob()== 3101 
			||
 cm.getJob()== 3000 
 			||
 cm.getJob()== 3001 
 			||
 cm.getJob()== 3120 
			||
 cm.getJob()== 3121
            ||
 cm.getJob()== 3122 
            ||
 cm.getJob()== 3100 
            ||
 cm.getJob()== 3110 
            ||
 cm.getJob()== 3111 ){
				cm.sendOk("该职业无法洗血");
				cm.dispose()
				return;
			}
            var xl = cm.getPlayerStat("MAXHP");
            var ll = cm.getPlayerStat("MAXMP");
            if (xl == 500000) {
                cm.playerMessage(1, "抱歉！血量已到最大值\r\n\r\n不能继续增加血量了\r\n\r\n血量：" + xl + "　　血量：" + ll + "\r\n\r\n" + cm.getChar().getName());
                cm.dispose();
            } else {
                if (/^[a-zA-Z]*$/.test(cm.getText())) {
                    cm.playerMessage(1, "请输入整数数值\r\n\r\n不可包含字母");
                    cm.dispose();
                } else if (/^[\u4e00-\u9fa5]*$/.test(cm.getText())) {
                    cm.playerMessage(1, "请输入整数数值\r\n\r\n不可包含汉字");
                    cm.dispose();
                } else if (cm.getText() < 100) {
                    cm.playerMessage(1, "数值不能小于 [100] \r\n\r\n 数值不能大于 [99999] \r\n\r\n请玩家重新调整数值");
                    cm.dispose();
                } else if (cm.getText() > 500000) {
                    cm.playerMessage(1, "数值不能小于 [100] \r\n\r\n 数值不能大于 [500000] \r\n\r\n请玩家重新调整数值");
                    cm.dispose();
                } else {
                    if (cm.haveItem(2430865)) {
                        cm.sendYesNo("#e#d★★★★★★★★★『会员玩家』★★★★★★★★★\r\n\r\n#r[ #h # ]尊敬的玩家 欢迎您光临洗血基地\r\n\r\n血量增#d：" + cm.getText() + "#r\r\n用金币：#d" + cm.getText() * nxNum + "\r\n\r\n#r　　　　请仔细阅读 无误请单击确认！！", 1033210);
                    } else {
                        cm.sendYesNo("#e#d☆☆☆☆☆☆☆☆☆『普通玩家』☆☆☆☆☆☆☆☆☆\r\n\r\n#r[ #h # ]尊敬的玩家 欢迎您光临洗血基地\r\n\r\n血量增#d：" + cm.getText() + "#r\r\n用金币：#d" + cm.getText() * nxNum + "\r\n\r\n#r　　　　请仔细阅读 无误请单击确认！！", 1033210);
                    }
                }
            }
        } else if (status == 2) {
            if (cm.haveItem(2430865)) {
                var getMaxHp = cm.getChar().getStat().getMaxHp();
                if (cm.getPlayer().getMeso() >= cm.getText() * nxNum) {
                    cm.gainMeso(-cm.getText() * nxNum);
                    cm.getChar().getStat().setMaxHp(getMaxHp + cm.getText() * 1, cm.getChar());
                    cm.worldSpouseMessage(0x18, "[ 洗血基地 ] ：尊敬的玩家" + cm.getChar().getName() + "在女神面前 " + cm.getText() * nxNum + " 金币增值了 " + cm.getText() + " 血量上限！");
                    cm.sendOk("#d#e恭喜您 [ #h # ] 增值了" + cm.getText() + "血量\r\n\r\n女神帮你刷新状态 ！");
                    cm.dispose();
                } else {
                    cm.sendOk("#d#e抱歉玩家\r\n\r\n您资金不足 享受不了洗血高端服务！");
                    cm.dispose();
                }
            } else {
                var getMaxHp = cm.getChar().getStat().getMaxHp();
                if (cm.getPlayer().getMeso() >= cm.getText() * nxNum) {
                    cm.gainMeso(-cm.getText() * nxNum);
                    cm.getChar().getStat().setMaxHp(getMaxHp + cm.getText() * 1, cm.getChar());
                    cm.worldSpouseMessage(0x18, "[ 洗血基地 ] ：尊敬的玩家" + cm.getChar().getName() + "在女神面前 " + cm.getText() * nxNum + " 金币增值了 " + cm.getText() + " 血量上限！");
                    cm.sendOk("#d#e恭喜您 [ #h # ] 增值了" + cm.getText() + "血量\r\n\r\n女神帮你刷新状态 ！");
                    cm.dispose();
                } else {
                    cm.sendOk("#d#e抱歉玩家\r\n\r\n您金币不足 享受不了洗血高端服务！");
                    cm.dispose();
                }
            }
        }
    }
}