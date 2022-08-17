
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

var yinhe = Array(
1352807, //银河
1099011, 
1099012, 
1353105, 
1342095,
1352009, 
1352109, 
1352206, 
1352216, 
1352226, 
1352276, 
1352286, 
1352296, 
1352406, 
1352506, 
1352707, 
1352815, 
1352906, 
1352916, 
1352935, 
1352945, 
1352957, 
1352967, 
1352975, 
1353006,
1352928,
1352824,
1353405,
1352236,
1352246,
1352256,
1353205,
1352266,
1353306,
1353505,
1352606
        );

var ljzbhs = Array(
1402184, //120-130
1152114, 
1132187, 
1122216, 
1112782,
1112751, 
1102498, 
1082490, 
1072730, 
1072695, 
1052545, 
1052529, 
1032162, 
1022155, 
1012339, 
1004838, 
1003689, 
1322108, 
1312073, 
1302174, 
1252022, 
1242018, 
1232018, 
1222018, 
1212018,
1122148,
1102311,
1532038,
1522021,
1492102,
1542034,
1552034,
1482103,
1472142,
1462119,
1442137, 
1432100, 
1422074,
1412072,
1402112,
1382125,
1372101,
1362023,
1342041,
1332151,
1332150,
1092094,
1092093,
1092092, 
1082337, 
1082336,
1382335,
1082334,
1082333,
1072553,
1072552,
1072551,
1072550,
1072549,
1052383,
1052382,
1052381, 
1052380, 
1052379,
1032108,
1003289,
1003288,
1003287,
1003286,
1003285,
1532149,
1492237,
1482223,
1242125,
1222115,


1532095,
1532068,
1522064,
1492135, 
1482165, 
1482135,
1472174,
1462152,
1452162,
1442170,
1432131,
1422102,
1412099,
1402142,
1382158,
1372130,
1362056, 
1342064, 
1332184,
1322150,
1312110,
1302207,
1252019,
1242052,
1242034,
1232034,
1222034,
1212034,
1152079,
1132141,
1112712,
1102366,
1102365,
1102364,
1102363,
1102362,
1082420,
1082419,
1082418,
1082417,
1082416,
1082415,
1072645,
1072644,
1072643,
1072642,
1072641,
1052433,
1052432,
1052431,
1052430,
1052429,
1003447,
1003446,
1003445,
1003444,
1003443,
1452130
        );

var aisuwq = Array(
	1242116,1242120,1242123,1242124,1262017,1262040,1302333,1302334,1312199,1312204,1322250,//埃苏武器
	1322256,1332274,1332280,1342101,1342105,1362135,1362141,1372222,1372229,1382259,1382266,
	1402251,1402260,1412177,1412182,1422184,1422190,1432214,1432219,1442268,1442276,1452252,
	1452258,1462239,1462244,1472261,1472266,1482216,1482222,1492231,1492236,1522138,1522144,
	1532144,1532148,1582017,1582027,1552110,1252093,1542108,1212115,1232109,1232114,1272016,
        1222114,11222114,1222109,1282016
); 
var aisufj = Array(
	1004422,1004423,1004424,1004425,1004426,1102775,1102794,1102795,1102796,1102797,1082636,//埃苏防具
	1082637,1082638,1082639,1082640,1052882,1052887,1052888,1052889,1052890,1073030,1073032,
	1073033,1073034,1073035,1152174,1152176,1152177,1152178,1152179
); 
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
            //var txt = "#e#b　（本功能位于4/19开放，请先查看回收说明）#k#n\r\n\r\n";
           // txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
			
			txt += "　　　　 #d#L0#" + icon6 + " 萌新必看  [ #r 回收说明 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L10#" + icon6 + " 一键回收  [ #r 120--130 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L1#" + icon6 + " 一键回收  [ #r 140--150 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L7#" + icon6 + " 一键回收  [ #r 银河副手 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L6#" + icon6 + " 一键回收  [ #r 法弗武器 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L3#" + icon6 + " 一键回收  [ #r 法弗防具 #d ] " + icon6 + "#l#k\r\n";
            txt += "　　　　 #d#L5#" + icon6 + " 一键回收  [ #r 埃苏武器 #d ] " + icon6 + "#l#k\r\n";
			txt += "　　　　 #d#L4#" + icon6 + " 一键回收  [ #r 埃苏防具 #d ] " + icon6 + "#l#k\r\n";
			
            //txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
					text = " #r#e	  本脚本由于您的操作失误是不予补偿的#n	 \r\n";
					text += icon3 + " #d   1 2 0 级 - 1 3 0 级 装 备 = 7 5 万 金 币    " + icon3 + "\r\n";
					text += icon3 + " #d  1 4 0 级 - 1 5 0 级 装 备 = 1 5 0 万 金 币   " + icon3 + "\r\n";
					text += icon3 + " #d      银 河 副 手 装 备 = 3 0 0 0 万 金 币     " + icon3 + "\r\n";
					text += icon3 + " #d        法 弗 纳 武 器 = 蘑 菇 金 币 x 5       " + icon3 + "\r\n";
					text += icon3 + " #d        法 弗 纳 防 具 = 蘑 菇 金 币 x 3       " + icon3 + "\r\n";
					text += icon3 + " #d     埃 苏 莱 布 斯 武 器 = 蘑 菇 金 币 x 3    " + icon3 + "\r\n";
					text += icon3 + " #d     埃 苏 莱 布 斯 防 具 = 蘑 菇 金 币 x 1    " + icon3 + "\r\n";
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
                        if (item.getItemId() != 1072732 && 
item.getItemId() != 1072733 && 
item.getItemId() != 1072734 && 
item.getItemId() != 1072735 && 
item.getItemId() != 1072736 && 
item.getItemId() != 1102471 && 
item.getItemId() != 1102472 && 
item.getItemId() != 1102473 && 
item.getItemId() != 1102474 && 
item.getItemId() != 1102475 && 
item.getItemId() != 1132164 && 
item.getItemId() != 1132165 && 
item.getItemId() != 1132166 && 
item.getItemId() != 1132167 && 
item.getItemId() != 1132168 && 
item.getItemId() != 1003601 && 
item.getItemId() != 1052509 && 
item.getItemId() != 1072711 && 
item.getItemId() != 1082472 && 
item.getItemId() != 1102456 && 
item.getItemId() != 1132156 && 
item.getItemId() != 1152094 && 
item.getItemId() != 1003603 && 
item.getItemId() != 1052511 && 
item.getItemId() != 1072713 && 
item.getItemId() != 1082474 && 
item.getItemId() != 1102458 && 
item.getItemId() != 1132158 && 
item.getItemId() != 1152096 && 
item.getItemId() != 1003602 && 
item.getItemId() != 1052510 && 
item.getItemId() != 1072712 && 
item.getItemId() != 1082473 && 
item.getItemId() != 1102457 && 
item.getItemId() != 1132157 && 
item.getItemId() != 1152095 && 
item.getItemId() != 1003604 && 
item.getItemId() != 1052512 && 
item.getItemId() != 1072714 && 
item.getItemId() != 1082475 && 
item.getItemId() != 1102459 && 
item.getItemId() != 1132159 && 
item.getItemId() != 1152097 && 
item.getItemId() != 1003605 && 
item.getItemId() != 1052513 && 
item.getItemId() != 1072715 && 
item.getItemId() != 1082476 && 
item.getItemId() != 1102460 && 
item.getItemId() != 1132160 && 
item.getItemId() != 1152098 && 
item.getItemId() != 1232072 && 
item.getItemId() != 1232119 && 
item.getItemId() != 1302229 && 
item.getItemId() != 1302349 && 
item.getItemId() != 1312118 && 
item.getItemId() != 1312209 && 
item.getItemId() != 1322164 && 
item.getItemId() != 1322261 && 
item.getItemId() != 1402153 && 
item.getItemId() != 1402265 && 
item.getItemId() != 1412106 && 
item.getItemId() != 1412186 && 
item.getItemId() != 1422109 && 
item.getItemId() != 1422194 && 
item.getItemId() != 1432140 && 
item.getItemId() != 1432224 && 
item.getItemId() != 1442184 && 
item.getItemId() != 1442282 && 
item.getItemId() != 1542045 && 
item.getItemId() != 1542124 && 
item.getItemId() != 1212057 && 
item.getItemId() != 1212126 && 
item.getItemId() != 1252056 && 
item.getItemId() != 1252102 && 
item.getItemId() != 1262028 && 
item.getItemId() != 1262046 && 
item.getItemId() != 1372141 && 
item.getItemId() != 1372234 && 
item.getItemId() != 1382170 && 
item.getItemId() != 1382271 && 
item.getItemId() != 1552045 && 
item.getItemId() != 1552126 && 
item.getItemId() != 1452172 && 
item.getItemId() != 1452263 && 
item.getItemId() != 1462161 && 
item.getItemId() != 1462249 && 
item.getItemId() != 1522073 && 
item.getItemId() != 1522149 && 
item.getItemId() != 1242077 && 
item.getItemId() != 1242134 && 
item.getItemId() != 1332195 && 
item.getItemId() != 1332286 && 
item.getItemId() != 1342071 && 
item.getItemId() != 1342109 && 
item.getItemId() != 1362069 && 
item.getItemId() != 1362146 && 
item.getItemId() != 1472181 && 
item.getItemId() != 1472271 && 
item.getItemId() != 1582030 && 
item.getItemId() != 1582037 && 
item.getItemId() != 1222052 && 
item.getItemId() != 1222119 && 
item.getItemId() != 1242078 && 
item.getItemId() != 1242135 && 
item.getItemId() != 1482142 && 
item.getItemId() != 1482229 && 
item.getItemId() != 1492154 && 
item.getItemId() != 1492241 && 
item.getItemId() != 1532076 && 
item.getItemId() != 1532154 && 
item.getItemId() != 1003172 && 
item.getItemId() != 1052314 && 
item.getItemId() != 1072485 && 
item.getItemId() != 1082295 && 
item.getItemId() != 1102275 && 
item.getItemId() != 1152108 && 
item.getItemId() != 1003173 && 
item.getItemId() != 1052315 && 
item.getItemId() != 1072486 && 
item.getItemId() != 1082296 && 
item.getItemId() != 1102276 && 
item.getItemId() != 1152110 && 
item.getItemId() != 1003174 && 
item.getItemId() != 1052316 && 
item.getItemId() != 1072487 && 
item.getItemId() != 1082297 && 
item.getItemId() != 1102277 && 
item.getItemId() != 1152111 && 
item.getItemId() != 1003175 && 
item.getItemId() != 1052317 && 
item.getItemId() != 1072488 && 
item.getItemId() != 1082298 && 
item.getItemId() != 1102278 && 
item.getItemId() != 1152112 && 
item.getItemId() != 1003176 && 
item.getItemId() != 1052318 && 
item.getItemId() != 1072489 && 
item.getItemId() != 1082299 && 
item.getItemId() != 1102279 && 
item.getItemId() != 1152113 && 
item.getItemId() != 1232014 && 
item.getItemId() != 1302152 && 
item.getItemId() != 1312065 && 
item.getItemId() != 1322096 && 
item.getItemId() != 1402095 && 
item.getItemId() != 1412065 && 
item.getItemId() != 1422066 && 
item.getItemId() != 1432086 && 
item.getItemId() != 1442116 && 
item.getItemId() != 1542015 && 
item.getItemId() != 1582015 && 
item.getItemId() != 1212014 && 
item.getItemId() != 1262015 && 
item.getItemId() != 1282014 && 
item.getItemId() != 1372084 && 
item.getItemId() != 1382104 && 
item.getItemId() != 1452111 && 
item.getItemId() != 1462099 && 
item.getItemId() != 1242042 && 
item.getItemId() != 1272014 && 
item.getItemId() != 1332130 && 
item.getItemId() != 1362019 && 
item.getItemId() != 1472122 && 
item.getItemId() != 1222014 && 
item.getItemId() != 1242014 && 
item.getItemId() != 1482084 && 
item.getItemId() != 1492085 && 
item.getItemId() != 1532018 && 
item.getItemId() != 1522018 && 
item.getItemId() != 1552015 && 
item.getItemId() != 1212077 && 
item.getItemId() != 1222072 && 
item.getItemId() != 1232071 && 
item.getItemId() != 1242076 && 
item.getItemId() != 1252058 && 
item.getItemId() != 1262035 && 
item.getItemId() != 1272018 && 
item.getItemId() != 1282018 && 
item.getItemId() != 1302285 && 
item.getItemId() != 1312162 && 
item.getItemId() != 1322213 && 
item.getItemId() != 1332235 && 
item.getItemId() != 1342084 && 
item.getItemId() != 1362099 && 
item.getItemId() != 1372186 && 
item.getItemId() != 1382220 && 
item.getItemId() != 1402204 && 
item.getItemId() != 1412144 && 
item.getItemId() != 1422149 && 
item.getItemId() != 1432176 && 
item.getItemId() != 1442232 && 
item.getItemId() != 1452214 && 
item.getItemId() != 1462202 && 
item.getItemId() != 1472223 && 
item.getItemId() != 1482177 && 
item.getItemId() != 1492188 && 
item.getItemId() != 1522103 && 
item.getItemId() != 1532106 && 
item.getItemId() != 1542075 && 
item.getItemId() != 1552075 && 
item.getItemId() != 1582022 &&  
item.getItemId() != 1072737 && 
item.getItemId() != 1072738 && 
item.getItemId() != 1072739 && 
item.getItemId() != 1072740 && 
item.getItemId() != 1552071 && 
item.getItemId() != 1542071 && 
item.getItemId() != 1532099 &&  
item.getItemId() != 1522095 && 
item.getItemId() != 1492180 && 
item.getItemId() != 1482169 && 
item.getItemId() != 1472215 && 
item.getItemId() != 1462194 && 
item.getItemId() != 1452206 && 
item.getItemId() != 1442224 && 
item.getItemId() != 1432168 && 
item.getItemId() != 1422141 && 
item.getItemId() != 1412136 && 
item.getItemId() != 1402197 && 
item.getItemId() != 1382209 && 
item.getItemId() != 1372178 && 
item.getItemId() != 1362142 && 
item.getItemId() != 1362091 && 
item.getItemId() != 1362019 &&  
item.getItemId() != 1342083 && 
item.getItemId() != 1332226 && 
item.getItemId() != 1322204 && 
item.getItemId() != 1312154 && 
item.getItemId() != 1302276 && 
item.getItemId() != 1252060 && 
item.getItemId() != 1242063 && 
item.getItemId() != 1242062 && 
item.getItemId() != 1232058 && 
item.getItemId() != 1222060 && 
item.getItemId() != 1212065 && 
item.getItemId() != 1072741 && 
item.getItemId() != 1102476 && 
item.getItemId() != 1102477 && 
item.getItemId() != 1102478 && 
item.getItemId() != 1102479 && 
item.getItemId() != 1102480 && 
item.getItemId() != 1132169 && 
item.getItemId() != 1132170 && 
item.getItemId() != 1382052 && 
item.getItemId() != 1382051 && 
item.getItemId() != 1382050 && 
item.getItemId() != 1382049 && 
item.getItemId() != 1132171 && 
item.getItemId() != 1132172 && 
item.getItemId() != 1102722 && 
item.getItemId() != 1102721 && 
item.getItemId() != 1102720 && 
item.getItemId() != 1102719 && 
item.getItemId() != 1102718 && 
item.getItemId() != 1082608 && 
item.getItemId() != 1082609 && 
item.getItemId() != 1082610 && 
item.getItemId() != 1082611 && 
item.getItemId() != 1082612 && 
item.getItemId() != 1072967 && 
item.getItemId() != 1072968 && 
item.getItemId() != 1072969 && 
item.getItemId() != 1072970 && 
item.getItemId() != 1072971 && 
item.getItemId() != 1052803 && 
item.getItemId() != 1052802 && 
item.getItemId() != 1052801 && 
item.getItemId() != 1052800 && 
item.getItemId() != 1052799 && 
item.getItemId() != 1004229 && 
item.getItemId() != 1004230 && 
item.getItemId() != 1004231 && 
item.getItemId() != 1004232 && 
item.getItemId() != 1004233 && 
item.getItemId() != 1132173)//140装备
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
                    typed = 1;
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
                        if (item.getItemId() != 1003797 && item.getItemId() 
							!= 1042254 && item.getItemId() != 1062165 && item.getItemId() != 1003798 && item.getItemId() 
						    != 1042255 && item.getItemId() != 1062166 && item.getItemId() != 1003799 && item.getItemId() 
							!= 1042256 && item.getItemId() != 1062167 && item.getItemId() != 1003800 && item.getItemId() 
							!= 1042257 && item.getItemId() != 1062168 && item.getItemId() != 1003801 && item.getItemId() 
							!= 1042258 && item.getItemId() != 1062169 )//FFN防具
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
						for(var ii=0;ii<yinhe.length;ii++){
							if(item.getItemId() == aisufj[ii]){
								newItemList[item.getPosition()] = item.getItemId();
								beDeletedArr.push(parseInt(item.getPosition()));
							}
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
                case 5:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
						for(var ii=0;ii<aisuwq.length;ii++){
							if(item.getItemId() == aisuwq[ii]){
								newItemList[item.getPosition()] = item.getItemId();
								beDeletedArr.push(parseInt(item.getPosition()));
							}
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
                case 6:
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
                        if (item.getItemId() != 1532098 &&item.getItemId() != 1282015 && item.getItemId() 
							!= 1522094 && item.getItemId() != 1492179 && item.getItemId() != 1482168 && item.getItemId() 
						    != 1472214 && item.getItemId() != 1462193 && item.getItemId() != 1452205 && item.getItemId() 
							!= 1442223 && item.getItemId() != 1432167 && item.getItemId() != 1422140 && item.getItemId() 
							!= 1412135 && item.getItemId() != 1402196 && item.getItemId() != 1382208 && item.getItemId() 
							!= 1372177 && item.getItemId() != 1362090 && item.getItemId() != 1342082 && item.getItemId() 
							!= 1332225 && item.getItemId() != 1322203 && item.getItemId() != 1312153 && item.getItemId() 
							!= 1302275 && item.getItemId() != 1242061 && item.getItemId() != 1242060 && item.getItemId() 
							!= 1232057 && item.getItemId() != 1542063 && item.getItemId() != 1552063 && item.getItemId() 
							!= 1222058 && item.getItemId() != 1212063 && item.getItemId() != 1252015 && item.getItemId() 
							!= 1262016 && item.getItemId() != 1582016)//FFN武器
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
                    typed = 6;
                    cm.sendSimpleS(text, 2);
                    break;

                case 7:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
						for(var ii=0;ii<yinhe.length;ii++){
							if(item.getItemId() == yinhe[ii]){
								newItemList[item.getPosition()] = item.getItemId();
								beDeletedArr.push(parseInt(item.getPosition()));
							}
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
					
				case 10:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#e- 以下是准备回收的装备,请核对仔细 -#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
						for(var ii=0;ii<ljzbhs.length;ii++){
							if(item.getItemId() == ljzbhs[ii]){
								newItemList[item.getPosition()] = item.getItemId();
								beDeletedArr.push(parseInt(item.getPosition()));
							}
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
                    typed = 10;
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
						for(var ii=0;ii<xuanwo.length;ii++){
							if(item.getItemId() == xuanwo[ii]){
								newItemList[item.getPosition()] = item.getItemId();
								beDeletedArr.push(parseInt(item.getPosition()));
							}
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
				
            }

        } else if (status == 2) {
            if (typed == 1) {//140-150
                var count = beDeletedArr.length;
				var asnum = java.lang.Math.floor(Math.random() + 5 );
				var count2 = 1500000;
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
                cm.gainMeso(count2*count);
                text = "回收成功，获得了金币" + count2 * count + "";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count2 * count + "金币。");
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 3) {//FFN防具
                var count = beDeletedArr.length;
				var asnum = java.lang.Math.floor(Math.random() + 3 );
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
				cm.gainItem(4031997, count * asnum);
				text="回收成功，获得了 #e" + count * asnum + "#n个 #i4031997#";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count * asnum + "个蘑菇金币。");
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 4) {//AS防具
                var count = beDeletedArr.length;
				var asnum = java.lang.Math.floor(Math.random() + 1 );
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
				cm.gainItem(4031997, count * asnum);
				text="回收成功，获得了 #e" + count * asnum + "#n个 #i4031997#";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count * asnum + "个蘑菇金币。");
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 5) {//AS武器
                var count = beDeletedArr.length;
				var asnum = java.lang.Math.floor(Math.random() + 3 );
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
				cm.gainItem(4031997, count * asnum);
				text="回收成功，获得了 #e" + count * asnum + "#n个 #i4031997#";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count * asnum + "个蘑菇金币。");
                cm.sendOk(text);
                cm.dispose();
            } else if (typed == 6) {//FFN武器
                var count = beDeletedArr.length;
				var asnum = java.lang.Math.floor(Math.random() + 6 );
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
				cm.gainItem(4031997, count * asnum);
				text="回收成功，获得了 #e" + count * asnum + "#n个 #i4031997#";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count * asnum + "个蘑菇金币。");
                cm.sendOk(text);
                cm.dispose();
            }else if (typed == 7) {//银河
                var count = beDeletedArr.length;
                var count2 = 30000000;
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
                cm.gainMeso(count2*count);
                text = "回收成功，获得了金币" + count2 * count + "";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count2 * count + "金币。");
                cm.sendOk(text);
                cm.dispose();
			}else if (typed == 10) {//120-130
                var count = beDeletedArr.length;
                var count2 = 750000;
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
                cm.gainMeso(count2*count);
                text = "回收成功，获得了金币" + count2 * count + "";
cm.worldSpouseMessage(0x17,"[回收系统] 恭喜玩家 "+ cm.getChar().getName() +" 在回收系统中获得了" + count2 * count + "金币。");
                cm.sendOk(text);
                cm.dispose();
            }else if (typed == 8) {//漩涡
                var count = beDeletedArr.length;
                for (var key in beDeletedArr) {
					if(beDeletedArr[key] == 128){
						count--;
						count2--;
					}else{
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
                }
				cm.gainItem(4310225,count)
				text="回收成功，获得了" + count +" 个#v4310225#";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    }
}

