/*
 ZEVMS冒险岛(079)游戏服务端
 作  者：小z
 联  系：71447500
 */
var jt = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/13#";
var 心1 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var 心2 = "#fUI/GuildMark.img/Mark/Etc/00009001/15#";
var sl0items = null;
var character_auctionItems = null;
var select_type_sell_auctionItems = null;
var auctionPoint = null;
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
        var selStr = "  " + 心 + "   " + 心 + "  #d#e < 冒险求生安全区域情况 > #k#n  " + 心 + "   " + 心 + "\r\n\r\n";
		
		selStr += "\t\t\t\t存活 : #r"+cm.冒险求生存活人数()+"#k\r\n";
		
		if(cm.判断地图安全(100000000)==0){
			selStr += "\t\t\t\t#r#m100000000##k\r\n";
		}else{
			selStr += "\t\t\t\t#b#m100000000##k\r\n";
		}
		if(cm.判断地图安全(100000001)==0){
			selStr += "\t\t\t\t#r#m100000001##k\r\n";
		}else{
			selStr += "\t\t\t\t#b#m100000001##k\r\n";
		}
		for (var n = 100000100; n <= 100000105; n++) {
			if(cm.判断地图安全(n)==0){
				selStr += "\t\t\t\t#r#m"+n+"##k\r\n";
			}else{
				selStr += "\t\t\t\t#b#m"+n+"##k\r\n";
			}	
		}
		for (var n = 100000200; n <= 100000204; n++) {
			if(n!=100000202){
				if(cm.判断地图安全(n)==0){
					selStr += "\t\t\t\t#r#m"+n+"##k\r\n";
				}else{
					selStr += "\t\t\t\t#b#m"+n+"##k\r\n";
				}	
			}
		}
		if(cm.判断地图安全(749030000)==0){
			selStr += "\t\t\t\t#r#m749030000##k\r\n";
		}else{
			selStr += "\t\t\t\t#b#m749030000##k\r\n";
		}
		if(cm.判断地图安全(809030000)==0){
			selStr += "\t\t\t\t#r#m809030000##k";
		}else{
			selStr += "\t\t\t\t#b#m809030000##k";
		}
		
		
		
		
		
		
		
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            default:
                cm.dispose();
                break;

        }
    }
}


 function  活动地图(a) {
	switch (a) {
		case 100000000:
		case 100000100:
		case 100000101:
		case 100000102:
		case 100000103:
		case 100000104:
		case 100000105:
		case 100000200:
		case 100000201:
		case 100000203:
		case 100000204:
		case 749030000:
		case 809030000:
			return 1;
		default:
			return 0;
	}
}