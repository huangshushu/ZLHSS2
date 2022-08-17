
var status = 1;
var n = 3;
var job = 0;
//物品ID，权重，物品数量，(0/不广播，1广播)
var itemList =
        Array(
			Array(1082234,100,1,1),//战士手套0
			Array(1082235,100,1,1),//法师1
			Array(1082236,100,1,1),//弓手2
			Array(1082237,100,1,1),//飞侠3
		    Array(1082238,100,1,1),//海盗手套4
			Array(1072355,100,1,1),//5
			Array(1072356,100,1,1),//6
		    Array(1072357,100,1,1),//7
		    Array(1072358,100,1,1),//8
		    Array(1072359,100,1,1),//鞋9
		    Array(1052155,100,1,1),//10
		    Array(1052156,100,1,1),//11
		    Array(1052157,100,1,1),//12
			Array(1052158,100,1,1),//13
			Array(1052159,100,1,1),//衣服14
		    Array(1002776,100,1,1),//15
		    Array(1002777,100,1,1),//16
		    Array(1002778,100,1,1),//17
		    Array(1002779,100,1,1),//18
		    Array(1002780,100,1,1),//头盔19
		    Array(1312037,50,1,1),//单手斧20
			Array(1322060,50,1,1),//单手钝器21
			Array(1332073,50,1,1),//短刀22
		    Array(1332074,50,1,1),//短刀23
		    Array(1372044,50,1,1),//短杖24
		    Array(1382057,100,1,1),//长杖25
		    Array(1402046,100,1,1),//双手剑26
		    Array(1412033,50,1,1),//双手斧27
		    Array(1422037,50,1,1),//双手钝器28
		    Array(1432047,100,1,1),//长枪29
		    Array(1442063,100,1,1),//矛30
		    Array(1452057,100,1,1),//弓31
		    Array(1462050,100,1,1),//弩32
		    Array(1472068,100,1,1),//拳套33
		    Array(1482023,100,1,1),//拳甲34
		    Array(1492023,100,1,1), //短枪35
			Array(1302081,100,1,1), //单手剑36
			Array(1092058,50,1,1), //战士盾37
			Array(1092057,100,1,1), //法师盾38
			Array(1092059,100,1,1) //飞侠盾39
			);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk(cm.显示物品(4001084) + " 都不舍得给？赶紧滚！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		if (cm.haveItem(4001084, 1) & cm.haveItem(4000148,100)){
			
            var str1 = "";
            for (var i = 0; i < itemList.length; i++) {
                str1 += "#v" + itemList[i][0] + "#";
            }
			job = cm.判断职业();
			if(job == 110 || job == 111 || job == 112 || job == 120 || job == 121 || job == 122 || job == 1100 || job == 1110 || job == 1111 || job == 1112){
				itemList[0][1] =  itemList[0][1] * n;
				itemList[5][1] =  itemList[5][1] * n;
				itemList[10][1] =  itemList[10][1] * n;
				itemList[15][1] =  itemList[15][1] * n;
				itemList[26][1] =  itemList[26][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[0][0]+"#" +"#v"+itemList[5][0]+"#" +"#v"+itemList[10][0]+"#" +"#v"+itemList[15][0]+"#" +"#v"+itemList[26][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");
			}else if(job == 130 || job == 131 || job == 132){
				itemList[0][1] =  itemList[0][1] * n;
				itemList[5][1] =  itemList[5][1] * n;
				itemList[10][1] =  itemList[10][1] * n;
				itemList[15][1] =  itemList[15][1] * n;
				itemList[29][1] =  itemList[29][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[0][0]+"#" +"#v"+itemList[5][0]+"#" +"#v"+itemList[10][0]+"#" +"#v"+itemList[15][0]+"#" +"#v"+itemList[29][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");
			}else if(job == 2000 || job == 2100 || job == 2110 || job == 2111 || job == 2112){
				itemList[0][1] =  itemList[0][1] * n;
				itemList[5][1] =  itemList[5][1] * n;
				itemList[10][1] =  itemList[10][1] * n;
				itemList[15][1] =  itemList[15][1] * n;
				itemList[30][1] =  itemList[30][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[0][0]+"#" +"#v"+itemList[5][0]+"#" +"#v"+itemList[10][0]+"#" +"#v"+itemList[15][0]+"#" +"#v"+itemList[30][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");
			}else if(job == 200 || job == 210 || job == 211 || job == 212 || job == 220 || job == 221 || job == 222 || job == 230 || job == 231 || job == 232 || job == 1200 || job == 1210 || job == 1211 || job == 1212){
				itemList[1][1] =  itemList[1][1] * n;
				itemList[6][1] =  itemList[6][1] * n;
				itemList[11][1] =  itemList[11][1] * n;
				itemList[16][1] =  itemList[16][1] * n;
				itemList[25][1] =  itemList[25][1] * n;
				itemList[38][1] =  itemList[38][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[1][0]+"#" +"#v"+itemList[6][0]+"#" +"#v"+itemList[11][0]+"#" +"#v"+itemList[16][0]+"#" +"#v"+itemList[25][0]+"#"+"#v"+itemList[38][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");
			}else if(job == 310 || job == 311 || job == 312 || job == 1300 || job == 1310 || job == 1311 || job == 1312){
				itemList[2][1] =  itemList[2][1] * n;
				itemList[7][1] =  itemList[7][1] * n;
				itemList[12][1] =  itemList[12][1] * n;
				itemList[17][1] =  itemList[17][1] * n;
				itemList[31][1] =  itemList[31][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[2][0]+"#" +"#v"+itemList[7][0]+"#" +"#v"+itemList[12][0]+"#" +"#v"+itemList[17][0]+"#" +"#v"+itemList[31][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");
			}else if(job == 320 || job == 321 || job == 322){
				itemList[2][1] =  itemList[2][1] * n;
				itemList[7][1] =  itemList[7][1] * n;
				itemList[12][1] =  itemList[12][1] * n;
				itemList[17][1] =  itemList[17][1] * n;
				itemList[32][1] =  itemList[32][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[2][0]+"#" +"#v"+itemList[7][0]+"#" +"#v"+itemList[12][0]+"#" +"#v"+itemList[17][0]+"#" +"#v"+itemList[32][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");	
			}else if(job == 410 || job == 411 || job == 412 || job == 1400 || job == 1410 || job == 1411 || job == 1412){
				itemList[3][1] =  itemList[3][1] * n;
				itemList[8][1] =  itemList[8][1] * n;
				itemList[13][1] =  itemList[13][1] * n;
				itemList[18][1] =  itemList[18][1] * n;
				itemList[33][1] =  itemList[33][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[3][0]+"#" +"#v"+itemList[8][0]+"#" +"#v"+itemList[13][0]+"#" +"#v"+itemList[18][0]+"#" +"#v"+itemList[33][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");	
			}else if(job == 420 || job == 421 || job == 422){
				itemList[3][1] =  itemList[3][1] * n;
				itemList[8][1] =  itemList[8][1] * n;
				itemList[13][1] =  itemList[13][1] * n;
				itemList[18][1] =  itemList[18][1] * n;
				itemList[22][1] =  itemList[22][1] * n;
				itemList[23][1] =  itemList[23][1] * n;
				itemList[39][1] =  itemList[39][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[3][0]+"#" +"#v"+itemList[8][0]+"#" +"#v"+itemList[13][0]+"#" +"#v"+itemList[18][0]+"#" +"#v"+itemList[22][0]+"#"+"#v"+itemList[23][0]+"#"+"#v"+itemList[39][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");		
			}else if(job == 510 || job == 511 || job == 512 || job == 1500 || job == 1510 || job == 1511 || job == 1512){
				itemList[4][1] =  itemList[4][1] * n;
				itemList[9][1] =  itemList[9][1] * n;
				itemList[14][1] =  itemList[14][1] * n;
				itemList[19][1] =  itemList[19][1] * n;
				itemList[34][1] =  itemList[34][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[4][0]+"#" +"#v"+itemList[9][0]+"#" +"#v"+itemList[14][0]+"#" +"#v"+itemList[19][0]+"#" +"#v"+itemList[34][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");		
			}else if(job == 520 || job == 521 || job == 522){
				itemList[4][1] =  itemList[4][1] * n;
				itemList[9][1] =  itemList[9][1] * n;
				itemList[14][1] =  itemList[14][1] * n;
				itemList[19][1] =  itemList[19][1] * n;
				itemList[35][1] =  itemList[35][1] * n;
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b根据您的职业#k，您获得"+"#v"+itemList[4][0]+"#" +"#v"+itemList[9][0]+"#" +"#v"+itemList[14][0]+"#" +"#v"+itemList[19][0]+"#" +"#v"+itemList[35][0]+"#"+"的概率变为#b"+n*100+"%#k哟~~~");		
			}else{
				cm.sendYesNo("我是#b永恒装备#k抽奖NPC\r\n#b#h  ##k 给我 " + cm.显示物品(4001084) + " x #r1#k " + cm.显示物品(4000148) + " x #r100#k ,就可以抽奖了。\r\n#b您的职业不在检测范围内，您获得基础抽奖概率，如果想要本职业概率变为建议冒险家战士、弓手、飞侠、海盗二转，其他职业一转以后再来抽取~#k");
			};
		} else {
            var str1 = "\r\n";
            for (var i = 0; i < itemList.length; i++) {
                str1 += "#v" + itemList[i][0] + "#";
            }
            cm.sendOk("我是#b永恒装备#k抽奖NPC，我不管你没有 " + cm.显示物品(4001084)+"还是没有"+cm.显示物品(4000148) +" ! 反正穷逼赶紧滚！别耽误劳资做生意！\r\n\r\n#v1082234# #v1072355# #v1052155# #v1002776# #v1302081#");
            cm.safeDispose();
        }
    } else if (status == 1) {
		var sum = 0;
		for (var i = 0; i <itemList.length; i++){
			sum += itemList[i][1]; 
		}
		var chance = Math.floor(Math.random() * +sum);
		for (var i = 0; i <itemList.length; i++){
			chance -= itemList[i][1];
			if(chance <= 0){	
				var finalchance = i;
				break;				
			}
		}
        var itemId = itemList[finalchance][0];
        var quantity = itemList[finalchance][2];
        var notice = itemList[finalchance][3];
        item = cm.gainGachaponItem(itemId, quantity, "永恒装备抽奖", notice);
        if (item != -1) {
            cm.gainItem(4001084, -1);
            cm.gainItem(4000148, -100);
            cm.sendOk("你获得了 " + cm.显示物品(item) + " x #b"+quantity+"#k");
        } else {
            cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
        }
            cm.safeDispose();
    }
}