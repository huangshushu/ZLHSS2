var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = [];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var txt = "#e#b\t\t\t\t　 装备回收中心#k#n\r\n\r\n";
            txt += "　　　　 #d#L0#" + icon6 + " 萌新必看  [ #r 回收说明 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L5#" + icon6 + " 一键回收  [ #r 特米武器 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L7#" + icon6 + " 一键回收  [ #r 最高贝勒 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L4#" + icon6 + " 一键回收  [ #r 暴君装备 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L3#" + icon6 + " 一键回收  [ #r 神秘武器 #d ] " + icon6 + "#l#k\r\n";
            txt += "　　　　 #d#L2#" + icon6 + " 一键回收  [ #r 神秘装备 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L8#" + icon6 + " 一键回收  [ #r 漆黑装备 #d ] " + icon6 + "#l#k\r\n";
            txt += "　　　　 #d#L1#" + icon6 + " 一键回收  [ #r 创世武器 #d ] " + icon6 + "#l#k\r\n\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    text = icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";

                    text = " #r#e	 本脚本由于您的操作失误是不予补偿的#n	 \r\n";
					text += icon3 + " #d      特 米 武 器 = 蘑 菇 金 币 x 10        " + icon3 + "\r\n";
					text += icon3 + " #d      最 高 贝 勒 = 蘑 菇 金 币 x 20        " + icon3 + "\r\n";
					text += icon3 + " #d      暴 君 防 具 = 蘑 菇 金 币 x 30        " + icon3 + "\r\n";
					text += icon3 + " #d      神 秘 武 器 = 蘑 菇 金 币 x 120       " + icon3 + "\r\n";
					text += icon3 + " #d      神 秘 防 具 = 蘑 菇 金 币 x 40        " + icon3 + "\r\n";
					text += icon3 + " #d      漆 黑 装 备 = 蘑 菇 金 币 x 200       " + icon3 + "\r\n";
					text += icon3 + " #d      创 世 武 器 = 蘑 菇 金 币 x 300       " + icon3 + "\r\n";
                    cm.sendOkS(text, 2);
                    status = -1;
                    break;
                case 1:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1592021 && item.getItemId() != 1582043 && item.getItemId() != 1552129 && item.getItemId() != 1542127 && item.getItemId() != 1532156 && item.getItemId() != 1522151 && item.getItemId() != 1492244 && item.getItemId() != 1482231 && item.getItemId() != 1472274 && item.getItemId() != 1462251 && item.getItemId() != 1452265 && item.getItemId() != 1442284 && item.getItemId() != 1432226 && item.getItemId() != 1422196 && item.getItemId() != 1412188 && item.getItemId() != 1402267 && item.getItemId() != 1382273 && item.getItemId() != 1372236 && item.getItemId() != 1362148 && item.getItemId() != 1332288 && item.getItemId() != 1322263 && item.getItemId() != 1312212 && item.getItemId() != 1302354 && item.getItemId() != 1282039 && item.getItemId() != 1272039 && item.getItemId() != 1262050 && item.getItemId() != 1252105 && item.getItemId() != 1242140 && item.getItemId() != 1242138 && item.getItemId() != 1232121 && item.getItemId() != 1222121 && item.getItemId() != 1212128)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 150) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 1;
                    cm.sendSimpleS(text, 2);
                    break;
				case 8:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1012632 && item.getItemId() != 1022278 && item.getItemId() != 1672082 && item.getItemId() != 1672076 && item.getItemId() != 1132308 && item.getItemId() != 1122430 && item.getItemId() != 1182285 && item.getItemId() != 1162083 && item.getItemId() != 1162082 && item.getItemId() != 1162081 && item.getItemId() != 1162080)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 160) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 8;
                    cm.sendSimpleS(text, 2);
                    break;	
                case 2:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1152200 && item.getItemId() != 1152199 && item.getItemId() != 1152198 && item.getItemId() != 1152197 && item.getItemId() != 1152196 && item.getItemId() != 1102944 && item.getItemId() != 1102943 && item.getItemId() != 1102942 && item.getItemId() != 1102941 && item.getItemId() != 1102940 && item.getItemId() != 1082699 && item.getItemId() != 1082698 && item.getItemId() != 1082697 && item.getItemId() != 1082696 && item.getItemId() != 1082695 && item.getItemId() != 1073162 && item.getItemId() != 1073161 && item.getItemId() != 1073160 && item.getItemId() != 1073159 && item.getItemId() != 1073158 && item.getItemId() != 1053067 && item.getItemId() != 1053066 && item.getItemId() != 1053065 && item.getItemId() != 1053064 && item.getItemId() != 1053063 && item.getItemId() != 1004812 && item.getItemId() != 1004811 && item.getItemId() != 1004810 && item.getItemId() != 1004809 && item.getItemId() != 1004808)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 160) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 2;
                    cm.sendSimpleS(text, 2);
                    break;
                case 3:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1592020 && item.getItemId() != 1582023 && item.getItemId() != 1552119 && item.getItemId() != 1542117 && item.getItemId() != 1532150 && item.getItemId() != 1522143 && item.getItemId() != 1492235 && item.getItemId() != 1482221 && item.getItemId() != 1472265 && item.getItemId() != 1462243 && item.getItemId() != 1452257 && item.getItemId() != 1442274 && item.getItemId() != 1432218 && item.getItemId() != 1422189 && item.getItemId() != 1412181 && item.getItemId() != 1402259 && item.getItemId() != 1382265 && item.getItemId() != 1372228 && item.getItemId() != 1362140 && item.getItemId() != 1342104 && item.getItemId() != 1332279 && item.getItemId() != 1322255 && item.getItemId() != 1312203 && item.getItemId() != 1302343 && item.getItemId() != 1282017 && item.getItemId() != 1272017 && item.getItemId() != 1262039 && item.getItemId() != 1252098 && item.getItemId() != 1242122 && item.getItemId() != 1242121 && item.getItemId() != 1232113 && item.getItemId() != 1222113 && item.getItemId() != 1212120)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 160) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 3;
                    cm.sendSimpleS(text, 2);
                    break;
                case 4:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1132174 && item.getItemId() != 1132174 && item.getItemId() != 1132175 && item.getItemId() != 1132176 && item.getItemId() != 1132177 && item.getItemId() != 1132178 && item.getItemId() != 1102481 && item.getItemId() != 1102482 && item.getItemId() != 1102483 && item.getItemId() != 1102484 && item.getItemId() != 1102485 && item.getItemId() != 1082543 && item.getItemId() != 1082544 && item.getItemId() != 1082545 && item.getItemId() != 1082546 && item.getItemId() != 1082547 && item.getItemId() != 1072743 && item.getItemId() != 1072744 && item.getItemId() != 1072745 && item.getItemId() != 1072746 && item.getItemId() != 1072747)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 150) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 4;
                    cm.sendSimpleS(text, 2);
                    break;
                case 5://特米装备
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;//item.getItemId() != 装备id
                        if (item.getItemId() != 1582026 && item.getItemId() != 1552068 && item.getItemId() != 1532110 && item.getItemId() != 1522106 && item.getItemId() != 1492191 && item.getItemId() != 1482180 && item.getItemId() != 1472227 && item.getItemId() != 1462205 && item.getItemId() != 1452217 && item.getItemId() != 1442235 && item.getItemId() != 1432179  && item.getItemId() != 1422153 && item.getItemId() != 1412148 && item.getItemId() != 1402211 && item.getItemId() != 1382223 && item.getItemId() != 1372189 && item.getItemId() != 1362102 && item.getItemId() != 1342086 && item.getItemId() != 1332239 && item.getItemId() != 1322216 && item.getItemId() != 1302290 && item.getItemId() != 1282029 && item.getItemId() != 1272029 && item.getItemId() != 1262030 && item.getItemId() != 1252066 && item.getItemId() != 1242081 && item.getItemId() != 1232075 && item.getItemId() != 1222075 && item.getItemId() != 1212080 && item.getItemId() != 1092113 && item.getItemId() != 1542068 && item.getItemId() != 1312166)
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 135) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 5;
                    cm.sendSimpleS(text, 2);
                    break;
                case 6://高级贝勒
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;//item.getItemId() != 装备id
                        if (item.getItemId() != 1132245 && item.getItemId() != 1122266 && item.getItemId() != 1032222 && item.getItemId() != 1113074)// && item.getItemId() != 1132177 && item.getItemId() != 1132178 && item.getItemId() != 1102481 && item.getItemId() != 1102482 && item.getItemId() != 1102483 && item.getItemId() != 1102484 && item.getItemId() != 1102485  && item.getItemId() != 1082543 && item.getItemId() != 1082544 && item.getItemId() != 1082545 && item.getItemId() != 1082546 && item.getItemId() != 1082547 && item.getItemId() != 1072743 && item.getItemId() != 1072744 && item.getItemId() != 1072745 && item.getItemId() != 1072746 && item.getItemId() != 1072747
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 140) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 6;
                    cm.sendSimpleS(text, 2);
                    break;
                case 7://最高级贝勒
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;//item.getItemId() != 装备id
                        if (item.getItemId() != 1132246 && item.getItemId() != 1122267 && item.getItemId() != 1032223 && item.getItemId() != 1113075)// && item.getItemId() != 1132177 && item.getItemId() != 1132178 && item.getItemId() != 1102481 && item.getItemId() != 1102482 && item.getItemId() != 1102483 && item.getItemId() != 1102484 && item.getItemId() != 1102485  && item.getItemId() != 1082543 && item.getItemId() != 1082544 && item.getItemId() != 1082545 && item.getItemId() != 1082546 && item.getItemId() != 1082547 && item.getItemId() != 1072743 && item.getItemId() != 1072744 && item.getItemId() != 1072745 && item.getItemId() != 1072746 && item.getItemId() != 1072747
                            continue;
                        if (item == null)
                            continue;

                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel = 150) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(parseInt(item.getPosition()));
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n#r#e     回收操作不可逆，请确认是否要回收以上装备？#n#k";
                    typed = 7;
                    cm.sendSimpleS(text, 2);
                    break;
            }
        } else if (status == 2) {
            if (typed == 1) {//封印创世武器
                var count = beDeletedArr.length;
                var ffnnum = java.lang.Math.floor(Math.random() + 300);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * ffnnum);
                text = "回收成功，获得了#v4031997#" + count * ffnnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收创世武器获得了" + count * ffnnum + "金色枫叶。");                
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 2) {//神秘装备
                var count = beDeletedArr.length;
                var asnum = java.lang.Math.floor(Math.random() + 40);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * asnum);
                text = "回收成功，获得了#v4031997#" + count * asnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收神秘防具获得了" + count * asnum + "金色枫叶。");                
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 3) {//神秘武器
                var count = beDeletedArr.length;
                var xwnum = java.lang.Math.floor(Math.random() + 120);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * xwnum);
                text = "回收成功，获得了#v4031997#" + count * xwnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收神秘武器获得了" + count * xwnum + "金色枫叶。");                
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 4) {//暴君
                var bjnum = java.lang.Math.floor(Math.random() + 30);
                var count = beDeletedArr.length;
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * bjnum);
                text = "回收成功，获得了#v4031997#" + count * bjnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收暴君获得了" + count * bjnum + "金色枫叶。");               
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 5) {//特米武器
                var count = beDeletedArr.length;
                var zhnum = java.lang.Math.floor(Math.random() + 10);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * zhnum);
                text = "回收成功，获得了#v4031997#" + count * zhnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收特米武器获得了" + count * zhnum + "金色枫叶。");               
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 6) {//高倍
                var count = beDeletedArr.length;
                var gbnum = java.lang.Math.floor(Math.random() * 1 + 3);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * gbnum);
                text = "回收成功，获得了#v4031997#" + count * gbnum + "个";                
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 7) {//最高倍
                var count = beDeletedArr.length;
                var zgbnum = java.lang.Math.floor(Math.random() + 20);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * zgbnum);
                text = "回收成功，获得了#v4031997#" + count * zgbnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收最高倍获得了" + count * zgbnum + "金色枫叶。");                
                cm.sendOk(text);
                cm.dispose();
			} else if (typed == 8) {//漆黑装备
                var count = beDeletedArr.length;
                var zgbnum = java.lang.Math.floor(Math.random() + 200);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031997, count * zgbnum);
                text = "回收成功，获得了#v4031997#" + count * zgbnum + "个";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中回收最高倍获得了" + count * zgbnum + "金色枫叶。");                
                cm.sendOk(text);
                cm.dispose();	
            }
        }
    }
}

