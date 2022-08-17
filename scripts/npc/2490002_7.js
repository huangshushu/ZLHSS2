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
    if (mode == -1) {
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
            cm.sendGetText("#r#e\t\t\t[ #h # ] 尊敬的玩家 \r\n\r\n\t\t这里是洗蓝基地 请输入您需洗的蓝量值\r\n\r\n\t当前血量：#b" + cm.getPlayerStat("MAXHP") + "#r\t\t当前蓝量：#b" + cm.getPlayerStat("MAXMP"), 1033210);
        } else if (status == 1) {
			if(cm.haveItem(2436362,1)){
				nxNum=nxNum*1;
			}
            var xl = cm.getPlayerStat("MAXHP");
            var ll = cm.getPlayerStat("MAXMP");
            if (ll == 500000) {
                cm.playerMessage(1, "抱歉！蓝量已到最大值\r\n\r\n不能继续增加蓝量了\r\n\r\n血量：" + xl + "　　蓝量：" + ll + "\r\n\r\n" + cm.getChar().getName());
                cm.dispose();
            } else {
                if (/^[a-zA-Z]*$/.test(cm.getText())) {
                    cm.playerMessage(1, "请输入整数数值\r\n\r\n不可包含字母");
                    cm.dispose();
                } else if (/^[\u4e00-\u9fa5]*$/.test(cm.getText())) {
                    cm.playerMessage(1, "请输入整数数值\r\n\r\n不可包含汉字");
                    cm.dispose();
                } else if (cm.getText() < 100) {
                    cm.playerMessage(1, "数值不能小于 [100] \r\n\r\n 数值不能大于 [500000] \r\n\r\n请玩家重新调整数值");
                    cm.dispose();
                } else if (cm.getText() > 500000) {
                    cm.playerMessage(1, "数值不能小于 [100] \r\n\r\n 数值不能大于 [500000] \r\n\r\n请玩家重新调整数值");
                    cm.dispose();
                } else {
                    if (cm.haveItem(2430865)) {
                        cm.sendYesNo("#e#d★★★★★★★★★『会员玩家』★★★★★★★★★\r\n\r\n#r[ #h # ]尊敬的玩家 欢迎您光临洗蓝基地\r\n\r\n蓝量增#d：" + cm.getText() + "#r\r\n用金币：#d" + cm.getText() * nxNum + "\r\n\r\n#r　　　　请仔细阅读 无误请单击确认！！", 1033210);
                    } else {
                        cm.sendYesNo("#e#d☆☆☆☆☆☆☆☆☆『普通玩家』☆☆☆☆☆☆☆☆☆\r\n\r\n#r[ #h # ]尊敬的玩家 欢迎您光临洗蓝基地\r\n\r\n蓝量增#d：" + cm.getText() + "#r\r\n用金币：#d" + cm.getText() * nxNum + "\r\n\r\n#r　　　　请仔细阅读 无误请单击确认！！", 1033210);
                    }
                }
            }
        } else if (status == 2) {
            if (cm.haveItem(2430865)) {
                var getMaxMp = cm.getChar().getStat().getMaxMp();
                if (cm.getPlayer().getMeso()  >= cm.getText() * nxNum) {
                    cm.gainMeso(-cm.getText() * nxNum);
                    cm.getChar().getStat().setMaxMp(getMaxMp + cm.getText() * 1, cm.getChar());
                    cm.worldSpouseMessage(0x20, "[ 洗蓝基地 ] ：尊敬的玩家" + cm.getChar().getName() + "在女神面前 " + cm.getText() * nxNum + " 金币增值了 " + cm.getText() + " 蓝量上限！");
                    cm.sendOk("#d#e恭喜您 [ #h # ] 增值了" + cm.getText() + "蓝量\r\n\r\n女神帮你刷新状态 ！");
                    cm.dispose();
                    cm.fakeRelog();
                } else {
                    cm.sendOk("#d#e抱歉玩家\r\n\r\n您资金不足 享受不了洗蓝高端服务！");
                    cm.dispose();
                }
            } else {
                var getMaxMp = cm.getChar().getStat().getMaxMp();
                if (cm.getPlayer().getMeso()  >= cm.getText() * nxNum) {
                    cm.gainMeso(-cm.getText() * nxNum);
                    cm.getChar().getStat().setMaxMp(getMaxMp + cm.getText() * 1, cm.getChar());
                    cm.worldSpouseMessage(0x20, "[ 洗蓝基地 ] ：尊敬的玩家" + cm.getChar().getName() + "在女神面前 " + cm.getText() * nxNum + " 金币增值了 " + cm.getText() + " 蓝量上限！");
					
                    cm.sendOk("#d#e恭喜您 [ #h # ] 增值了" + cm.getText() + "蓝量\r\n\r\n女神帮你刷新状态 ！\r\n\r\n切换频道即可显示。");
                    cm.dispose();
                } else {
                    cm.sendOk("#d#e抱歉玩家\r\n\r\n您资金不足 享受不了洗蓝高端服务！");
                    cm.dispose();
                }
            }
        }
    }
}