
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
            var txt = "#e#b\t\t\t\t　装备分解中心#k#n\r\n\r\n";
            txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
            txt += "　　　　 #d#L0#" + icon3 + " 分解说明  [ #r□ 新手必看 □#d ] " + icon3 + "#l#k\r\n";
            //txt += "　　　　 #d#L1#" + icon4 + " 一键分解  [ #r□ FFN 装备 □#d ] " + icon4 + "#l#k\r\n";
            //txt += "　　　　 #d#L5#" + icon5 + " 一键分解  [ #r□ 真红装备 □#d ] " + icon5 + "#l#k\r\n";
            txt += "　　　　 #d#L6#" + icon5 + " 一键分解  [ #r□ 高级贝勒 □#d ] " + icon5 + "#l#k\r\n";
            txt += "　　　　 #d#L7#" + icon5 + " 一键分解  [ #r□ 最高贝勒 □#d ] " + icon5 + "#l#k\r\n";
            //txt += "　　　　 #d#L2#" + icon5 + " 一键分解  [ #r□ 埃苏装备 □#d ] " + icon5 + "#l#k\r\n";
            //txt += "　　　　 #d#L3#" + icon5 + " 一键分解  [ #r□ 旋涡装备 □#d ] " + icon5 + "#l#k\r\n";
            txt += "　　　　 #d#L4#" + icon6 + " 一键分解  [ #r□ 暴君装备 □#d ] " + icon6 + "#l#k\r\n\r\n";
            txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    text = icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
                    text += icon6 + "　　　　　　　　　　　　　　　　　　　　　　　　" + icon6 + "\r\n";
                    text += icon6 + "　　　　     　　#b分解说明 #k　　         　　　　 " + icon6 + "\r\n";
                    text += icon6 + " #d我是装备分解师，在我这里可以分解所有高级装备   " + icon6 + "\r\n";
                    //text += icon6 + "      #d分解之后获得[#v4031758##z4031758#]                 " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 FFN装备  可获得#z4031758#1-2个          " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 真红首饰 可获得#z4031758#1-3个          " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 高级贝勒 可获得#z4031758#1-4个          " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 最高贝勒 可获得#z4031758#3-5个          " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 暴君装备 可获得#z4031758#10-20个        " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 旋涡装备 可获得#z4310057#2-4个      " + icon6 + "\r\n";
                    text += icon6 + "       #d分解 埃苏装备 可获得#z4310057#5-10个      " + icon6 + "\r\n";
                    text += icon6 + "　　　　　　　　　　　　　　　　　　　　　      " + icon6 + "\r\n";
                    text += icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
                    cm.sendOkS(text, 2);
                    status = -1;
                    break;
                case 1:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1003797 && item.getItemId() != 1042254 && item.getItemId() != 1062165 && item.getItemId() != 1003798 && item.getItemId() != 1042255 && item.getItemId() != 1062166 && item.getItemId() != 1003799 && item.getItemId() != 1042256 && item.getItemId() != 1062167 && item.getItemId() != 1003800 && item.getItemId() != 1042257 && item.getItemId() != 1062168 && item.getItemId() != 1003801 && item.getItemId() != 1042258 && item.getItemId() != 1062169 && item.getItemId() != 1532098 && item.getItemId() != 1522094 && item.getItemId() != 1492179 && item.getItemId() != 1482168 && item.getItemId() != 1472214 && item.getItemId() != 1462193 && item.getItemId() != 1452205 && item.getItemId() != 1442223 && item.getItemId() != 1432167 && item.getItemId() != 1422140 && item.getItemId() != 1412135 && item.getItemId() != 1402196 && item.getItemId() != 1382208 && item.getItemId() != 1372177 && item.getItemId() != 1362090 && item.getItemId() != 1342082 && item.getItemId() != 1332225 && item.getItemId() != 1322203 && item.getItemId() != 1312153 && item.getItemId() != 1302275 && item.getItemId() != 1242061 && item.getItemId() != 1242060 && item.getItemId() != 1232057 && item.getItemId() != 1542063 && item.getItemId() != 1552063 && item.getItemId() != 1222058 && item.getItemId() != 1212063 && item.getItemId() != 1252015 && item.getItemId() != 1262016 && item.getItemId() != 1582016)
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 1;
                    cm.sendSimple(text);
                    break;
                case 2:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1102794 && item.getItemId() != 1152174 && item.getItemId() != 1152176 && item.getItemId() != 1152177 && item.getItemId() != 1152178 && item.getItemId() != 1152179 && item.getItemId() != 1004422 && item.getItemId() != 1004423 && item.getItemId() != 1004424 && item.getItemId() != 1004426 && item.getItemId() != 1102775 && item.getItemId() != 1102795 && item.getItemId() != 1102796 && item.getItemId() != 1102797 && item.getItemId() != 1082636 && item.getItemId() != 1082637 && item.getItemId() != 1082638 && item.getItemId() != 1082639 && item.getItemId() != 1082640 && item.getItemId() != 1052882 && item.getItemId() != 1052887 && item.getItemId() != 1052888 && item.getItemId() != 1052889 && item.getItemId() != 1052890 && item.getItemId() != 1073030 && item.getItemId() != 1073032 && item.getItemId() != 1073033 && item.getItemId() != 1073034 && item.getItemId() != 1212115 && item.getItemId() != 1222109 && item.getItemId() != 1232109 && item.getItemId() != 1402251 && item.getItemId() != 1242116 && item.getItemId() != 1262017 && item.getItemId() != 1302333 && item.getItemId() != 1312199 && item.getItemId() != 1322250 && item.getItemId() != 1332274 && item.getItemId() != 1342101 && item.getItemId() != 1362135 && item.getItemId() != 1372222 && item.getItemId() != 1382259 && item.getItemId() != 1412177 && item.getItemId() != 1422184 && item.getItemId() != 1432214 && item.getItemId() != 1442268 && item.getItemId() != 1452252 && item.getItemId() != 1462239 && item.getItemId() != 1472261 && item.getItemId() != 1482216 && item.getItemId() != 1492231 && item.getItemId() != 1522138 && item.getItemId() != 1532144 && item.getItemId() != 1552110 && item.getItemId() != 1252093 && item.getItemId() != 1542108 && item.getItemId() != 1073035 && item.getItemId() != 1004425)
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 2;
                    cm.sendSimple(text);
                    break;
                case 3:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        if (item.getItemId() != 1003976 && item.getItemId() != 1012438 && item.getItemId() != 1022211 && item.getItemId() != 1122269 && item.getItemId() != 1032224 && item.getItemId() != 1052669 && item.getItemId() != 1102623 && item.getItemId() != 1082556 && item.getItemId() != 1152160 && item.getItemId() != 1132247 && item.getItemId() != 1072870 && item.getItemId() != 1212089 && item.getItemId() != 1222084 && item.getItemId() != 1242090 && item.getItemId() != 1232084 && item.getItemId() != 1302297 && item.getItemId() != 1312173 && item.getItemId() != 1322223 && item.getItemId() != 1332247 && item.getItemId() != 1342090 && item.getItemId() != 1362109 && item.getItemId() != 1372195 && item.getItemId() != 1382231 && item.getItemId() != 1402220 && item.getItemId() != 1412152 && item.getItemId() != 1422158 && item.getItemId() != 1432187 && item.getItemId() != 1442242 && item.getItemId() != 1452226 && item.getItemId() != 1462213 && item.getItemId() != 1472235 && item.getItemId() != 1482189 && item.getItemId() != 1492199 && item.getItemId() != 1522113 && item.getItemId() != 1532118 && item.getItemId() != 1252033 && item.getItemId() != 1542072 && item.getItemId() != 1552072 && item.getItemId() != 1422158 && item.getItemId() != 1582025 && item.getItemId() != 1262029)
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 3;
                    cm.sendSimple(text);
                    break;
                case 4:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 4;
                    cm.sendSimple(text);
                    break;
                case 5://真红装备
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;//item.getItemId() != 装备id
                        if (item.getItemId() != 1032216 && item.getItemId() != 1152155 && item.getItemId() != 1113070)// && item.getItemId() != 1132176 && item.getItemId() != 1132177 && item.getItemId() != 1132178 && item.getItemId() != 1102481 && item.getItemId() != 1102482 && item.getItemId() != 1102483 && item.getItemId() != 1102484 && item.getItemId() != 1102485  && item.getItemId() != 1082543 && item.getItemId() != 1082544 && item.getItemId() != 1082545 && item.getItemId() != 1082546 && item.getItemId() != 1082547 && item.getItemId() != 1072743 && item.getItemId() != 1072744 && item.getItemId() != 1072745 && item.getItemId() != 1072746 && item.getItemId() != 1072747 
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 5;
                    cm.sendSimple(text);
                    break;
                case 6://高级贝勒
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 6;
                    cm.sendSimple(text);
                    break;
                case 7://最高级贝勒
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
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
                    text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
                    typed = 7;
                    cm.sendSimple(text);
                    break;
            }
        } else if (status == 2) {
            if (typed == 1) {//ffn
                var count = beDeletedArr.length;
                var ffnnum = java.lang.Math.floor(Math.random() * 1 + 1);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031758, count * ffnnum);
                text = "分解成功，获得了#v4031758#" + count * ffnnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 2) {//埃苏
                var count = beDeletedArr.length;
                var asnum = java.lang.Math.floor(Math.random() * 5 + 5);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4310057, count * asnum);
                text = "分解成功，获得了#v4310057#" + count * asnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 3) {//漩涡
                var count = beDeletedArr.length;
                var xwnum = java.lang.Math.floor(Math.random() * 2 + 2);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4310057, count * xwnum);
                text = "分解成功，获得了#v4310057#" + count * xwnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 4) {//暴君
                var bjnum = java.lang.Math.floor(Math.random() * 10 + 10);
                var count = beDeletedArr.length;
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031758, count * bjnum);
                text = "分解成功，获得了#v4031758#" + count * bjnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 5) {//真红
                var count = beDeletedArr.length;
                var zhnum = java.lang.Math.floor(Math.random() * 1 + 2);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031758, count * zhnum);
                text = "分解成功，获得了#v4031758#" + count * zhnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 6) {//高倍
                var count = beDeletedArr.length;
                var gbnum = java.lang.Math.floor(Math.random() * 1 + 3);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031758, count * gbnum);
                text = "分解成功，获得了#v4031758#" + count * gbnum + "个";
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 7) {//最高倍
                var count = beDeletedArr.length;
                var zgbnum = java.lang.Math.floor(Math.random() * 3 + 2);
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4031758, count * zgbnum);
                text = "分解成功，获得了#v4031758#" + count * zgbnum + "个";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    }
}

