var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var nx;
var 红枫叶 = "#fMap/MapHelper/weather/maple/1#";
var 银杏叶 = "#fMap/MapHelper/weather/maple/3#";
var 小烟花 = "#fMap/MapHelper/weather/squib/squib4/1#";
var status;
var selstatus = -1;
var inventoryType;
var saveSlot;
var saveQuantity;

var itemlist = Array(//在这添加道具  xxxx, 格式。
        4021000,
        4021001,
        4021002,
        4021003,
        4021004,
        4021005,
        4021006,
        4021007,
        4021008,
        4011006,
        4011005,
        4011004,
        4011003,
        4011002,
        4011001,
        4011000);
var itemlist1 = Array(
        4004000,
        4004001,
        4004002,
        4004003,
        4004004,
        4010000,
        4010001,
        4010002,
        4010003,
        4010004,
        4010005,
        4010006,
        4020000,
        4020001,
        4020002,
        4020003,
        4020004,
        4020005,
        4020006,
        4020007,
        4020008);
var bagitemlist = Array();
var stones = Array();
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
            text = "                     矿石仓库系统\r\n";
            text += "       #L0#存放成品矿石#l	    #L1#取回成品矿石#l\r\n\r\n";
            text += "       #L3##k存放散装母矿#l	    #L4#取回散装母矿#l\r\n\r\n";
            text += "     #L2##r一键存放成品矿石#l    #L5##r一键存放散装母矿#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 0) {
                nx = 0;
                text = "请选择所要存放的矿石：\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    text += "#L" + i + "##k存放：#b#v" + itemlist[i] + "##z" + itemlist[i] + "##l\r\n\r\n";
                    text += " #d- 当前背包内拥有：#r#c" + itemlist[i] + "##d 个。\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
            } else if (selection == 1) {
                nx = 1;
                text = "请选择所要取回的矿石：\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    text += "#L" + i + "##k取回：#b#v" + itemlist[i] + "##z" + itemlist[i] + "##l\r\n\r\n";
                    text += " #d- 当前仓库内拥有：#r" + cm.getPlayer().getBossLog("" + itemlist[i] + "", 1) + "#d 个。\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
            } else if (selection == 2) {
                nx = 2;
                text = "请确定所要存放的矿石：\r\n";
                var havestone = 0;
                //text += cm.getPlayer().getItemQuantity(itemlist[0], false);
                for (var i = 0; i < itemlist.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist[i], false);
                    if (stones[i] != 0) {
                        //cm.getPlayer().setBossLog("" + itemlist[i] + "", 1, stones[i]);
                        text += " #v" + itemlist[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone == 0) {
                    cm.sendOk("你的背包里没有任何母矿.");
                    cm.dispose();
                }
                cm.sendYesNo(text);
                a++;
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 3) {
                nx = 3;
                text = "请选择所要存放的母矿：\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    text += "#L" + i + "##k存放：#b#v" + itemlist1[i] + "##z" + itemlist1[i] + "##l\r\n\r\n";
                    text += " #d- 当前背包内拥有：#r#c" + itemlist1[i] + "##d 个。\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 4) {
                nx = 4;
                text = "请选择所要取回的母矿：\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    text += "#L" + i + "##k取回：#b#v" + itemlist1[i] + "##z" + itemlist1[i] + "##l\r\n\r\n";
                    text += " #d- 当前仓库内拥有：#r" + cm.getPlayer().getBossLog("" + itemlist1[i] + "", 1) + "#d 个。\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 5) {
                nx = 5;
                text = "请确定所要存放的母矿：\r\n";
                var havestone = 0;
                for (var i = 0; i < itemlist1.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist1[i], false);
                    if (stones[i] != 0) {
                        text += " #v" + itemlist1[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }

                }
                if (havestone == 0) {
                    cm.sendOk("你的背包里没有任何母矿.");
                    cm.dispose();
                }
                cm.sendYesNo(text);
                a++;
                if (selstatus == -1) {
                    selstatus = selection;
                }
            }
        } else if (a == 2) {
            if (nx == 0) {
                selects = selection;
                nx = 0;
                var txt = " - 当前存放矿石：#r#i" + itemlist[selects] + "\r\n\r\n"
                    txt += " #d- 当前背包内拥有：#r#c" + itemlist[selects] + "##d 个。\r\n"
                    txt += " #k- 请输入存放道具的数值：\r\n\r\n"
                    cm.sendGetNumber(txt, cm.itemQuantity(itemlist[selects]), 1, cm.itemQuantity(itemlist[selects]));
            } else if (nx == 1) {
                nx = 1;
                selects = selection;
                var txt = " - 当前取出矿石：#r#i" + itemlist[selects] + "\r\n\r\n"
                    txt += " #d- 当前仓库内拥有：#r" + cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + "#d 个。\r\n"
                    txt += " #k- 请输入取出道具的数值：\r\n\r\n"
                    cm.sendGetNumber(txt, cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1), 1, cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1));
            } else if (nx == 3) {
                nx = 3;
                selects = selection;
                var txt = " - 当前存放母矿：#r#i" + itemlist1[selects] + "\r\n\r\n"
                    txt += " #d- 当前背包内拥有：#r#c" + itemlist1[selects] + "##d 个。\r\n"
                    txt += " #k- 请输入存放母矿的数值：\r\n\r\n"
                    cm.sendGetNumber(txt, cm.itemQuantity(itemlist1[selects]), 1, cm.itemQuantity(itemlist1[selects]));
            } else if (nx == 4) {
                nx = 4;
                selects = selection;
                var txt = " - 当前取出矿石：#r#i" + itemlist1[selects] + "\r\n\r\n"
                    txt += " #d- 当前仓库内拥有：#r" + cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1) + "#d 个。\r\n"
                    txt += " #k- 请输入取出母矿的数值：\r\n\r\n"
                    cm.sendGetNumber(txt, cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1), 1, cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1));
            }

        } else if (a == 3) {
            if (nx == 0) {
                jg = selection
                    if ((cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + jg) > 30000) {
                        cm.sendOk("存储数量不能大于3W！");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setBossLog("" + itemlist[selects] + "", 1, jg);
                cm.gainItem(itemlist[selects], -jg);
                cm.sendOk("存入 #z" + itemlist[selects] + "# x " + jg + " 成功。");
                a = -1;
            } else if (nx == 1) {
                jg = selection
                    
                    cm.getPlayer().setBossLog("" + itemlist[selects] + "", 1, -jg);
                cm.gainItem(itemlist[selects], jg);
                cm.sendOk("取出 #z" + itemlist[selects] + "# x " + jg + " 成功。");
                a = -1;
            } else if (nx == 2) {
                var havestone = 0;
                var text1 = "成功存入\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist[i], false);
                    if (stones[i] != 0) {
						
						if ((cm.getPlayer().getBossLog("" + itemlist[i] + "", 1) + stones[i]) > 30000) {
							continue;//存储数量要超出的，直接不存。
						}
					
                        cm.gainItem(itemlist[i], -stones[i]);
                        cm.getPlayer().setBossLog("" + itemlist[i] + "", 1, stones[i]);
                        text1 += "#v" + itemlist[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone != 0) {
                    cm.sendOk(text1);
                    cm.dispose();
                } else {
                    cm.sendOk("你的背包里没有任何母矿.");
                    cm.dispose();
                }
            } else if (nx == 3) {
                jg = selection
                    if ((cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + jg) > 30000) {
                        cm.sendOk("存储数量不能大于3W！");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setBossLog("" + itemlist1[selects] + "", 1, jg);
                cm.gainItem(itemlist1[selects], -jg);
                cm.sendOk("存入 #v" + itemlist1[selects] + "# x " + jg + " 成功。");
                a = -1;
            } else if (nx == 4) {
                jg = selection
                    
                    cm.getPlayer().setBossLog("" + itemlist1[selects] + "", 1, -jg);
                cm.gainItem(itemlist1[selects], jg);
                cm.sendOk("取出 #v" + itemlist1[selects] + "# x " + jg + " 成功。");
                a = -1;
            } else if (nx == 5) {
                var havestone = 0;
                var text1 = "成功存入\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist1[i], false);
                    if (stones[i] != 0) {
						
						if ((cm.getPlayer().getBossLog("" + itemlist1[i] + "", 1) + stones[i]) > 30000) {
							continue;//存储数量要超出的，直接不存。
						}
						
                        cm.gainItem(itemlist1[i], -stones[i]);
                        cm.getPlayer().setBossLog("" + itemlist1[i] + "", 1, stones[i]);
                        text1 += "#v" + itemlist1[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone != 0) {
                    cm.sendOk(text1);
                    cm.dispose();
                } else {
                    cm.sendOk("你的背包里没有任何母矿.");
                    cm.dispose();
                }
            }
        } else if (a == 4) {
            cm.sendOk("祝你游戏愉快~");
            a = 0;
            cm.dispose();
        }
    }
}

// function action(mode, type, selection) {
// if (mode <= 0) {
// cm.dispose();
// return;
// } else {
// if (mode == 1) {
// status++;
// } else {
// status--;
// }
// switch (selstatus) {
// case 0:
// deleteItemBySlot(selection);
// break;
// case 1:
// cm.openNpc(cm.getNpc(), 501);
// }
// }
// }
// }