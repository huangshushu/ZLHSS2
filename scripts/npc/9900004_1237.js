/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：游戏CDK兑换系统
 */
 
var status = 0;
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var fee;
var chance = Math.floor(Math.random() * 1);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("你没有卡号？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			
            cm.sendGetText("请输入合法的兑换卡号；");
        } else if (status == 1) {
            fee = cm.getText();
            if (cm.判断兑换卡是否存在("" + fee + "") <= 0) {
                cm.sendOk("卡号不存在。");
                cm.dispose();
            }
            if (cm.判断兑换卡类型("" + fee + "") == 1) {
				cm.gainNX(cm.判断兑换卡数额("" + fee + ""));
				cm.sendOk("恭喜你成功兑换了 #r" + cm.判断兑换卡数额("" + fee + "") + "#k 点券。");
            } else if (cm.判断兑换卡类型("" + fee + "") == 2) {
				cm.gainD(cm.判断兑换卡数额("" + fee + ""));
				cm.sendOk("恭喜你成功兑换了 #r" + cm.判断兑换卡数额("" + fee + "") + "#k 抵用券。");
            } else if (cm.判断兑换卡类型("" + fee + "") == 5) {
				var Lb = cm.判断兑换卡礼包("" + fee + "");
				cm.openNpc(9900005,Lb);
            }
			cm.Deleteexchangecard("" + fee + "");
        }
    }
}