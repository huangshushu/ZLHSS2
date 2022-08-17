var a = 0;
var text;
var selects;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
	Array(1102828, 1102481, 1102623, 1102775),
	Array(1102828, 1102482, 1102623, 1102794),
	Array(1102828, 1102483, 1102623, 1102795),
	Array(1102828, 1102484, 1102623, 1102796),
	Array(1102828, 1102485, 1102623, 1102797)
	//Array(1402185, 1402205, 1402179, 1402180)
	
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } 
	else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } 
		else if (a == 0) {
			text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "              #r欢迎来到月月冒险岛装备神铸#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#r#L"+i+"#选择神铸#v"+itemlist[i][0]+"#"+蓝色箭头+""+蓝色箭头+"#v"+itemlist[i][1]+"#"+蓝色箭头+""+蓝色箭头+"#v"+itemlist[i][2]+"#"+蓝色箭头+""+蓝色箭头+"#v"+itemlist[i][3]+"##l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
			/*text += "#r#L16#选择神铸#v1402014#（无限次，每次消耗白板#v1402014#*1）#l\r\n\r\n";
			text += "#r#L17#选择神铸#v1402037#（无限次，每次消耗白板#v1402037#*1）#l\r\n\r\n";
			text += "#r#L18#选择神铸#v1382037#（无限次，每次消耗白板#v1382037#*1）#l\r\n\r\n";
			text += "#r#L19#选择神铸#v1382049#（无限次，每次消耗白板#v1382049#*1）#l\r\n\r\n";
			text += "#r#L20#选择神铸#v1382050#（无限次，每次消耗白板#v1382050#*1）#l\r\n\r\n";
			text += "#r#L21#选择神铸#v1382051#（无限次，每次消耗白板#v1382051#*1）#l\r\n\r\n";
			text += "#r#L22#选择神铸#v1382052#（无限次，每次消耗白板#v1382052#*1）#l\r\n\r\n";*/
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9310074,30601);
            }
			else if (selection == 1) {
				cm.dispose();
				cm.openNpc(9310074,30602);
            }
			else if (selection == 2) {
				cm.dispose();
				cm.openNpc(9310074,30603);
            }
			else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9310074,30604);
            }
			else if (selection == 4) {
				cm.dispose();
				cm.openNpc(9310074,30605);
            }
			else if (selection == 5) {
				cm.dispose();
				cm.openNpc(9310074,30106);
            }
			else if (selection == 6) {
				cm.dispose();
				cm.openNpc(9310074,30107);
            }
			else if (selection == 7) {
				cm.dispose();
				cm.openNpc(9310074,30108);
            }
			else if (selection == 8) {
				cm.dispose();
				cm.openNpc(9310074,30109);
            }
			else if (selection == 9) {
				cm.dispose();
				cm.openNpc(9310074,30110);
            }
			else if (selection == 10) {
				cm.dispose();
				cm.openNpc(9310074,30111);
            }
			else if (selection == 11) {
				cm.dispose();
				cm.openNpc(9310074,30112);
            }
			else if (selection == 12) {
				cm.dispose();
				cm.openNpc(9310074,30113);
            }
			else if (selection == 13) {
				cm.dispose();
				cm.openNpc(9310074,30114);
            }
			else if (selection == 14) {
				cm.dispose();
				cm.openNpc(9310074,30115);
            }
			else if (selection == 15) {
				cm.dispose();
				cm.openNpc(9310074,30116);
            }
			else if (selection == 16) {
				cm.dispose();
				cm.openNpc(9310074,30117);
            }
			else if (selection == 17) {
				cm.dispose();
				cm.openNpc(9310074,30118);
            }
			else if (selection == 18) {
				cm.dispose();
				cm.openNpc(9310074,30119);
            }
			else if (selection == 19) {
				cm.dispose();
				cm.openNpc(9310074,30120);
            }
			else if (selection == 20) {
				cm.dispose();
				cm.openNpc(9310074,30121);
            }
			else if (selection == 21) {
				cm.dispose();
				cm.openNpc(9310074,30122);
            }
			else if (selection == 22) {
				cm.dispose();
				cm.openNpc(9310074,30123);
            }
        }
    }
}	