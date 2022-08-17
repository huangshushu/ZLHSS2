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
			text = "请选择你要回收的武器：\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##k回收{#d#z"+itemlist[i]+"##k}#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			
		} else if (a == 1) {
			jg = selection
			    text = "";
				text += "   - 回收装备：#r#v"+itemlist[selection]+"##z"+itemlist[selection]+"##k\r\n";
				text += "   - 获得道具：#b#z4001246##k\r\n";
				text += "   - 获得数量：#r 1 ~ 5#k\r\n";
				text += "   							是否确认回收？\r\n";
            cm.sendYesNo(text);
				
        } else if (a == 2) {
			if (cm.haveItem(itemlist[jg], 1) == false) {
                cm.sendOk("道具数量不足，请确认！")
                cm.dispose();
				return;
			}
			if (cm.canHold(4001246,5) == false) {
                cm.sendOk("背包空间不足。")
                cm.dispose();
            } else {
				cm.gainItem(itemlist[jg], -1);
				cm.gainItem(4001246,Math.floor(Math.random()*4+1));
				cm.sendOk("回收成功");
                cm.dispose();
            }
        }
    }//mode
}