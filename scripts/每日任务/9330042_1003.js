/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：每日任务
 */
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
        var selStr = "在城镇找#b渔夫#k进入钓鱼场，坐着钓钓鱼即可获取活跃度。";
        cm.说明文字(selStr);
    } else if (status == 1) {
        switch (selection) {
			default:
                cm.对话结束();
				cm.打开NPC(9330042,0);
                break;
        }
    }
}