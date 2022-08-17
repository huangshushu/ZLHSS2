/*
 蜗牛冒险岛(079)游戏服务端
 */
importPackage(Packages.client);
var status = 0;
var fee;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("你根本不知道暗号。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendGetText("请输入暗号:\r\n#r温馨提示：弗朗西斯是XX人偶师!");
        } else if (status == 1) {
            if (cm.判断任务(21728) == 1) {
                cm.forceCompleteQuest(21728);
                cm.playerMessage(1, "你成功探索到了人偶师的洞穴。请回去找#r日吉#k接取下一个任务。");
                cm.dispose();
                return;
            }
            fee = cm.getText();
            if (fee == "弗朗西斯是天才人偶师!") {
				cm.重置目标地图(910510001);
                cm.warp(910510001, 1);
				cm.指定地图召唤怪物(9300344, 910510001, 355, 400);
                cm.dispose();
            } else {
                cm.sendOk("不知道你在说什么。");
            }
            cm.dispose();
        }
    }
}