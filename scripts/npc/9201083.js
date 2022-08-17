
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var status = 0;
var fenjieType = -1;

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
			selStr += "#g亲爱的玩家#r“#h #”#r#g,这里是魔方分解中心？\r\n";
			selStr += "#b#L0##i5062000# #rx 100 #b分解获得 #r抵用券 x 5000#l\r\n";
			selStr += "#b#L1##i5062002# #rx 100 #b分解获得 #r抵用券 x 10000#l\r\n";
			selStr += "#b#L2##i5062009# #rx 100 #b分解获得 #r抵用券 x 12000#l\r\n";
			selStr += "#b#L3##i5062010# #rx 100 #b分解获得 #r抵用券 x 15000#l\r\n";
			selStr += "#b#L4##i5062500# #rx 100 #b分解获得 #r抵用券 x 20000#l\r\n";
			selStr += "#b#L5# #i5062024# #r x 100 #b分解获得 #r抵用券 x 25000#l\r\n";
            cm.sendSimple(selStr, 0);
        } else if (status == 1) {
			 switch (selection) {
					case 0: // 
						fenjieType = 0;
						cm.sendNext("确定分解100个 #i5062000#?");
						break; 
					case 1: // 
						fenjieType = 1;
						cm.sendNext("确定分解100个 #i5062002#?");
						break; 
					case 2: // 
						fenjieType = 2;
						cm.sendNext("确定分解100个 #i5062009#?");
						break; 
					case 3: // 
						fenjieType = 3;
						cm.sendNext("确定分解100个 #i5062010#?");
						break; 
					case 4: // 
						fenjieType = 4;
						cm.sendNext("确定分解100个 #i5062500#?");
						break; 
					case 5: // 
						fenjieType = 5;
						cm.sendNext("确定分解100个 #i5062024#?");
						break; 
			 }
		} else if (status == 2){
			switch (fenjieType){
				case 0:
					if(cm.haveItem(5062000,100)){
						cm.gainItem(5062000,-100);
						cm.gainNX(2,5000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
				case 1:
					if(cm.haveItem(5062002,100)){
						cm.gainItem(5062002,-100);
						cm.gainNX(2,10000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
				case 2:
					if(cm.haveItem(5062009,100)){
						cm.gainItem(5062009,-100);
						cm.gainNX(2,12000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
				case 3:
					if(cm.haveItem(5062010,100)){
						cm.gainItem(5062010,-100);
						cm.gainNX(2,15000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
				case 4:
					if(cm.haveItem(5062500,100)){
						cm.gainItem(5062500,-100);
						cm.gainNX(2,20000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
				case 5:
					if(cm.haveItem(5062024,100)){
						cm.gainItem(5062024,-100);
						cm.gainNX(2,25000);
						cm.sendOk("分解成功！")
						cm.dispose();
					}else{
						cm.sendOk("您的魔方不足！")
						cm.dispose();
					}
					break;
			}
		}
    }
}