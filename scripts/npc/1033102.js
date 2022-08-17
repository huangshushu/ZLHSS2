/*
 石头剪刀布
 */

 var meso = 500000;
 function start() {
    status = 0;
    action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendOk(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = " 什么？你要跟我玩石头剪刀布？\r\n你赢了我就给你50W\r\n不过，你输了也要给我#b#e50万#n#k喔#r#e";
        
			selStr += "\r\n#L0#石头#l";
			selStr += "\r\n#L1#剪刀#l";
			selStr += "\r\n#L2#布#l";
        
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if(selection == 0){
			if(cm.getMeso() < meso){
				cm.sendOk("穷鬼走开啦！");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("我出石头，平局！你赢了才能给你金币哦！");
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("我出剪刀，哼！你赢了，喏，给你吧");
				cm.gainMeso(+500000);
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("我出布，哈哈，你输了！给钱吧！");
			cm.gainMeso(-meso);
			cm.dispose();
			}
			cm.dispose();
		};
		if(selection == 1){
			if(cm.getMeso() < meso){
				cm.sendOk("穷鬼走开啦！");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("我出石头，哈哈，你输了！给钱吧！");
				cm.gainMeso(-meso);
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("我出剪刀，平局！你赢了才能给你金币哦！");
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("我出布，哼！你赢了，喏，给你吧");
			cm.gainItem(4032246,2);
			cm.dispose();
			}
			cm.dispose();
		};
		if(selection == 2){
			if(cm.getMeso() < meso){
				cm.sendOk("穷鬼走开啦！");
				cm.dispose();
			}
			var random = Math.floor(Math.random() * +3);
			if(random == 0){
				cm.sendOk("我出石头，哼！你赢了，喏，给你吧！");
				cm.gainItem(4032246,2);
				cm.dispose();
			}
			if(random == 1){
				cm.sendOk("我出剪刀，哈哈，你输了！给钱吧！");
				cm.gainMeso(-meso);
				cm.dispose();
			}
			if(random == 2){
			cm.sendOk("我出布，平局！你赢了才能给你金币哦！");
			cm.dispose();
			}
			cm.dispose();
		};
    } else if (status == 3) {
		cm.sendOk("异常");
        cm.dispose();
    }
}