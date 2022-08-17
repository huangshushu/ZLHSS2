
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var status = 0;

function start() {
    status = -1;
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (cm.getMapId() == 180000001) {
				cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
				cm.dispose();
			} 
			var selStr = "#fn华文行楷##fs12##r<" + cm.getServerName() + "> \r\n#fs12##fn宋体#";
			selStr += "#g亲爱的玩家#r“#h #”#r#g,请问有什么可以帮助您的？\r\n";
			selStr += "#b#L0#"+ttt6+"接受神秘任务#l\r\n";
			selStr += "#b#L1#"+ttt6+"完成神秘任务#l\r\n";
            cm.sendSimple(selStr, 0);
        } else if (status == 1) {
			 switch (selection) {
					case 0:
						cm.dispose();
						cm.openNpc(1540819);
						break;
					case 1:
						cm.dispose();
						cm.warp(101050000,4);
						break;
			 }
        }
    }
}