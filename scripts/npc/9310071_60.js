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
            text += "#e#r想要挑战未来之城boss请先证明你的实力 帮我收集\r\n#v4001085#1个 每日可以挑战三次【boss攻击非常高】\r\n"
            text += "#L2#我已有材料 我要获取证明.[boss血量比较低]#l\r\n"//3
            text += "#L5#传送至boss地图.[血太少的不建议挑战]#l\r\n"//3
            text += "#L4#boss奖励兑换全新属性点装.#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest11') < 3) {
		cm.gainItem(4001085,-1);
		cm.gainItem(4310012,1);
		cm.setBossLog('PlayQuest11');
		cm.sendOk("任务完成");
		cm.dispose();
	} else 
		cm.sendOk("请检查是否有足够的物品。\r\n#r(注:该任务每天只能完成两次)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,58);
        } else if (selection == 5) {
            cm.openNpc(9310071,61);
}
}
}