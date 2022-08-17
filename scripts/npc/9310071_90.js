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
            text += "#e#r想要挑战骑士团副本请先证明你的实力 帮我收集\r\n#v4001083#1个 每日可以挑战五次【boss攻击非常高】\r\n"
            text += "#L2#我已有材料 我要获取证明.[完成后清除#v4001083#]#l\r\n"//3
            text += "#L5#传送至boss地图.[难度适中]#l\r\n"//3
            text += "#L4#boss奖励兑换全新椅子[正在添加中].#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.haveItem(4001083,1) && cm.getBossLog('qst1') < 5) {
		cm.gainItem(4001083,-1);
                cm.removeAll(4001083);
		cm.gainItem(3990000,1);
		cm.setBossLog('qst1');
		cm.sendOk("任务完成");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成五次)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,92);
        } else if (selection == 5) {
            cm.openNpc(9310071,91);
}
}
}