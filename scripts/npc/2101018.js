/*
  64换黄金枫叶武器 By 梓条
 */

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
		var Editing = false //false 开始
          if(Editing){
          cm.sendOk("维修中");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b欢迎玩家 #r#h ##k 兑换黄金枫叶武器。" +
            "#k\r\n#L1##i1302064# #r+ #i4000313#x500 #b 换#i1302142#\r\n#L2##i1312032# #r+ #i4000313#x500 #b 换#i1312056#\r\n#L3##i1322054# #r+ #i4000313#x500 #b 换#i1322084#\r\n#L4##i1332055# #r+ #i4000313#x500 #b 换#i1332114#\r\n#L5##i1332056# #r+ #i4000313#x500 #b 换#i1332114#\r\n#L6##i1372034# #r+ #i4000313#x500 #b 换#i1372071#\r\n#L7##i1382039# #r+ #i4000313#x500 #b 换#i1382093#\r\n#L8##i1402039# #r+ #i4000313#x500 #b 换#i1402085#\r\n#L9##i1412027# #r+ #i4000313#x500 #b 换#i1412055#\r\n#L10##i1422029# #r+ #i4000313#x500 #b 换#i1422057#\r\n#L11##i1432040# #r+ #i4000313#x500 #b 换#i1432075#\r\n#L12##i1442051# #r+ #i4000313#x500 #b 换#i1442104#\r\n#L13##i1452045# #r+ #i4000313#x500 #b 换#i1452100#\r\n#L14##i1462040# #r+ #i4000313#x500 #b 换#i1462085#\r\n#L15##i1472055# #r+ #i4000313#x500 #b 换#i1472111#\r\n#L16##i1482022# #r+ #i4000313#x500 #b 换#i1482073#\r\n#L17##i1492022# #r+ #i4000313#x500 #b 换#i1492073#"
			+ "\r\n#L18##i1092030# #r+ #i4000313#x500 #b 换#i1092045#"
			+ "\r\n#L19##i1092030# #r+ #i4000313#x500 #b 换#i1092046#"
			+ "\r\n#L20##i1092030# #r+ #i4000313#x500 #b 换#i1092047#"
			);
        } else if (status == 1) {
            
            if (selection == 1) {
                if (cm.haveItem(1302064, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1302064, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1302142, 1, true);
                    cm.sendOk("获得#i1302142#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(1312032, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1312032, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1312056, 1, true);
                    cm.sendOk("获得#i1312056#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(1322054, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1322054, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1322084, 1, true);
                    cm.sendOk("获得#i1322084#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(1332055, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1332055, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1332114, 1, true);
                    cm.sendOk("获得#i1332114#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(1332056, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1332056, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1332114, 1, true);
                    cm.sendOk("获得#i1332114#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 6) {
                if (cm.haveItem(1372034, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1372034, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1372071, 1, true);
                    cm.sendOk("获得#i1372071#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 7) {
                if (cm.haveItem(1382039, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1382039, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1382093, 1, true);
                    cm.sendOk("获得#i1382093#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 8) {
                if (cm.haveItem(1402039, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1402039, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1402085, 1, true);
                    cm.sendOk("获得#i1402085#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 9) {
                if (cm.haveItem(1412027, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1412027, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1412055, 1, true);
                    cm.sendOk("获得#i1412055#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 10) {
                if (cm.haveItem(1422029, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1422029, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1422057, 1, true);
                    cm.sendOk("获得#i1422057#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 11) {
                if (cm.haveItem(1432040, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1432040, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1432075, 1, true);
                    cm.sendOk("获得#i1432075#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 12) {
                if (cm.haveItem(1442051, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1442051, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1442104, 1, true);
                    cm.sendOk("获得#i1442104#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 13) {
                if (cm.haveItem(1452045, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1452045, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1452100, 1, true);
                    cm.sendOk("获得#i1452100#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 14) {
                if (cm.haveItem(1462040, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1462040, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1462085, 1, true);
                    cm.sendOk("获得#i1462085#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 15) {
                if (cm.haveItem(1472055, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1472055, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1472111, 1, true);
                    cm.sendOk("获得#i1472111#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 16) {
                if (cm.haveItem(1482022, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1482022, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1482073, 1, true);
                    cm.sendOk("获得#i1482073#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 17) {
                if (cm.haveItem(1492022, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1492022, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1492073, 1, true);
                    cm.sendOk("获得#i1492073#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 18) {
                if (cm.haveItem(1092030, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1092030, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1092045, 1, true);
                    cm.sendOk("获得#i1092045#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 19) {
                if (cm.haveItem(1092030, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1092030, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1092046, 1, true);
                    cm.sendOk("获得#i1092046#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }else if (selection == 20) {
                if (cm.haveItem(1092030, 1) && cm.haveItem(4000313, 500) ) {
                    cm.gainItem(1092030, -1);
					cm.gainItem(4000313, -500);
                    cm.gainItem(1092047, 1, true);
                    cm.sendOk("获得#i1092047#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具,请在次确认");
                    cm.dispose();
                }
            }
}
}
}
