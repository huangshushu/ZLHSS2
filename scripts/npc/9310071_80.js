function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#r每日福利boss需要收集三个道具才能召唤\r\n每日每人可领取一个道具 集合三人材料可召唤\r\n"
            text += "#L2#我要领取每日召唤材料【需要120级】#l\r\n"//3
            text += "#L5#传送至boss房间.[无需面板]#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.getLevel()>= 120 && cm.getBossLog('PlayQuest110') < 1) {
		cm.gainItem(4000493,1,1);
		cm.setBossLog('PlayQuest110');
		cm.sendOk("任务完成");
		cm.dispose();
	} else 
		cm.sendOk("#r(注:该任务每天只能领取一次)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,58);
        } else if (selection == 5) {
            cm.openNpc(9310071,81);
}
}
}