var a = 0;
var text;
var selection; //记录玩家的选项
var itemlist = Array(
1082313,1332143,1342038,1372095,1382119,
1402105,1432075,1442131,1452124,1462112,
1472135,1482097,1492096);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			if (cm.haveItem(1102551,1)) {
			var text = "\r\n#L0#升级至#v1102874#需要#v4001246#100个"
			cm.sendSimple(text);
	 } else if (cm.haveItem(1102874,1)) {
			var text = "\r\n#L1#升级至#v1102376#需要#v4001246#200个"
			cm.sendSimple(text);
	 } else if (cm.haveItem(1102376,1)) {
			var text = "\r\n#L2#升级至#v1102709#需要#v4001246#300个"
            cm.sendSimple(text);
	 } else if (cm.haveItem(1102709,1)) {
			var text = "\r\n#L3#升级至#v1102349#需要#v4001246#400个"
            cm.sendSimple(text);
	 } else if (cm.haveItem(1102349,1)) {
			var text = "\r\n#L4#升级至#v1102039#需要#v4001246#500个"
            cm.sendSimple(text);		
	 }else{
		 
		 cm.sendOk("没有可升级的装备。");
		 cm.dispose()
		 }
		} else if (a == 1) {
			if (selection == 0) {
			if (cm.haveItem(4001246,100)){
                cm.gainItem(1102551,-1);
                cm.gainItem(1102874,15,15,15,15,100,100,15,15,0,0,0,0,0,0,0);
				cm.gainItem(4001246,-100);
				cm.sendOk("制作成功~");
				cm.dispose();
			}else{
				cm.sendOk("#v4001246#不足100个。");
				cm.dispose();
				}
		} else if (selection == 1) {
			if (cm.haveItem(4001246,200)){
                cm.gainItem(1102874,-1);
                cm.gainItem(1102376,20,20,20,20,200,200,20,20,0,0,0,0,0,0,0);
				cm.gainItem(4001246,-200);
				cm.sendOk("制作成功~");
				cm.dispose();
			}else{
				cm.sendOk("#v4001246#不足200个。");
				cm.dispose();
				}
		} else if (selection == 2) {
			if (cm.haveItem(4001246,300)){
                cm.gainItem(1102376,-1);
                cm.gainItem(1102709,30,30,30,30,300,300,30,30,0,0,0,0,0,0,0);
				cm.gainItem(4001246,-300);
				cm.sendOk("制作成功~");
				cm.dispose();
			}else{
				cm.sendOk("#v4001246#不足300个。");
				cm.dispose();
				
            }
		} else if (selection == 3) {
			if (cm.haveItem(4001246,400)){
                cm.gainItem(1102709,-1);
                cm.gainItem(1102349,40,40,40,40,400,400,40,40,0,0,0,0,0,0,0);
				cm.gainItem(4001246,-400);
				cm.sendOk("制作成功~");
				cm.dispose();
			}else{
				cm.sendOk("#v4001246#不足400个。");
				cm.dispose();
				}	
		} else if (selection == 4) {
			if (cm.haveItem(4001246,500)){
                cm.gainItem(1102349,-1);
                cm.gainItem(1102039,50,50,50,50,500,500,50,50,0,0,0,0,0,0,0);
				cm.gainItem(4001246,-500);
				cm.sendOk("制作成功~");
				cm.dispose();
			}else{
				cm.sendOk("#v4001246#不足500个。");
				cm.dispose();	
				}		
        }
    }
}}