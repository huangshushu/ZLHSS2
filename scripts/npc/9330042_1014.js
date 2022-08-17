/*
 
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
        var selStr = "击杀野外的精英怪物，即可获取活跃度。";
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