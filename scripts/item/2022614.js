/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 制作时间: 2015/5/12
 */



var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;

var 熊1 = "#fUI/GuildMark/Mark/Animal/00002011/6#";
var 熊2 = "#fUI/GuildMark/Mark/Animal/00002011/7#";
var 熊3 = "#fUI/GuildMark/Mark/Animal/00002011/8#";
var 熊4 = "#fUI/GuildMark/Mark/Animal/00002011/9#";
var 熊5 = "#fUI/GuildMark/Mark/Animal/00002011/5#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";


function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
		

		//var 总计 = cm.getHyPay(2)+cm.getHyPay(1);
	//	var VIP等级 = cm.getVip()+1;
		
        if (status == 0) {
            var text = "";
            
			
            //text += "#e#b\t\t\t"+cm.serverName()+"银行#k\r\n";
			text += ""+正方形+"#e\t\t\tBOSS战利品兑换中心#k#n\r\n";
			

            text += "#L0##b#v1332242##z1332242# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";//这是第一排显示
            text += "#L1##b#v1492194##z1492194# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L2##b#v1482183##z1482183# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L3##b#v1472230##z1472230# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L4##b#v1462208##z1462208# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L5##b#v1452220##z1452220# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L6##b#v1432182##z1432182# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L7##b#v1422156##z1422156# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L8##b#v1402214##z1402214# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L9##b#v1382226##z1382226# 兑换#v3994731# #b比例 - (#r1 = 3#b)#l\r\n";
			text += "#L10##b#v1102481##z1102481# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L11##b#v1102482##z1102482# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L12##b#v1102483##z1102483# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L13##b#v1102484##z1102484# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L14##b#v1102485##z1102485# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L15##b#v1082543##z1082543# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L16##b#v1082544##z1082544# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L17##b#v1082545##z1082545# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L18##b#v1082546##z1082546# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L19##b#v1082547##z1082547# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L20##b#v1072743##z1072743# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L21##b#v1072744##z1072744# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L22##b#v1072745##z1072745# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L23##b#v1072746##z1072746# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L24##b#v1072747##z1072747# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L25##b#v1132174##z1132174# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L26##b#v1132175##z1132175# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L27##b#v1132176##z1132176# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L28##b#v1132177##z1132177# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L29##b#v1132178##z1132178# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L30##b#v1332279##z1332279# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L31##b#v1322255##z1322255# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L32##b#v1312203##z1312203# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L33##b#v1302343##z1302343# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L34##b#v1492235##z1492235# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L35##b#v1482221##z1482221# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L36##b#v1472265##z1472265# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L37##b#v1462243##z1462243# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L38##b#v1452257##z1452257# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L39##b#v1442274##z1442274# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L40##b#v1432218##z1432218# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L41##b#v1402259##z1402259# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L42##b#v1382265##z1382265# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L43##b#v1372228##z1372228# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L44##b#v1132215##z1132215# 兑换#v5570000# #b比例 - (#r1 = 1#b)#l\r\n";
			text += "#L45##b#v1032219##z1032219# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L46##b#v1102944##z1102944# 兑换#v4000463# #b比例 - (#r1 = 50#b)#l\r\n";
			text += "#L47##b#v1102943##z1102943# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L48##b#v1102942##z1102942# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L49##b#v1102941##z1102941# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L50##b#v1102940##z1102940# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L51##b#v1082699##z1082699# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L52##b#v1082698##z1082698# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L53##b#v1082697##z1082697# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L54##b#v1082696##z1082696# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L55##b#v1082695##z1082695# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L56##b#v1073162##z1073162# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L57##b#v1073161##z1073161# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L58##b#v1073160##z1073160# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L59##b#v1073159##z1073159# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L60##b#v1073158##z1073158# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L61##b#v1053067##z1053067# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L62##b#v1053066##z1053066# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L63##b#v1053065##z1053065# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L64##b#v1053064##z1053064# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L65##b#v1053063##z1053063# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L66##b#v1004812##z1004812# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L67##b#v1004811##z1004811# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L68##b#v1004810##z1004810# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L69##b#v1004809##z1004809# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			text += "#L70##b#v1004808##z1004808# 兑换#v2613050# #b比例 - (#r1 = 2#b)#l\r\n";
			
			
			
			
			
			
			
           
            cm.sendSimple(text);
			}
			
			
		//这里是结束首页显示界面	
			
			
			
         else if (status == 1) {//这里是第二个大门入口
            if (selection == 0) { 
                    beauty = 0;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1332242# 个#r \r\n", 1, 1, 100000);
                   }					


//------------------------------------这是第一个指向----------------------------------
            if (selection == 1) { 
                    beauty = 1;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1492194# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 2) { 
                    beauty = 2;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1482183# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 3) { 
                    beauty = 3;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1472230# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 4) { 
                    beauty = 4;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1462208# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 5) { 
                    beauty = 5;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1452220# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 6) { 
                    beauty = 6;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1432182# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 7) { 
                    beauty = 7;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1422156# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 8) { 
                    beauty = 8;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1402214# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 9) { 
                    beauty = 9;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1382226# 个#r \r\n", 1, 1, 100000);
                   }
		    if (selection == 10) { 
                    beauty = 10;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102481# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 11) { 
                    beauty = 11;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102482# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 12) { 
                    beauty = 12;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102483# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 13) { 
                    beauty = 13;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102484# 个#r \r\n", 1, 1, 100000);
                   }
			if (selection == 14) { 
                    beauty = 14;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102484# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 15) { 
                    beauty = 15;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082543# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 16) { 
                    beauty = 16;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082544# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 17) { 
                    beauty = 17;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082545# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 18) { 
                    beauty = 18;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082546# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 19) { 
                    beauty = 19;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082547# 个#r \r\n", 1, 1, 100000);
                   }
			if (selection == 20) { 
                    beauty = 20;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1072743# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 21) { 
                    beauty = 21;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1072744# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 22) { 
                    beauty = 22;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1072745# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 23) { 
                    beauty = 23;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1072746# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 24) { 
                    beauty = 24;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1072747# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 25) { 
                    beauty = 25;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132174# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 26) { 
                    beauty = 26;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132175# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 27) { 
                    beauty = 27;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132176# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 28) { 
                    beauty = 28;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132177# 个#r \r\n", 1, 1, 100000);
                   }
			if (selection == 29) { 
                    beauty = 29;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132178# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 30) { 
                    beauty = 30;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1332279# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 31) { 
                    beauty = 31;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1322255# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 32) { 
                    beauty = 32;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1312203# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 33) { 
                    beauty = 33;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1302343# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 34) { 
                    beauty = 34;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1492235# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 35) { 
                    beauty = 35;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1482221# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 36) { 
                    beauty = 36;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1472265# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 37) { 
                    beauty = 37;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1462243# 个#r \r\n", 1, 1, 100000);
                   }
			if (selection == 38) { 
                    beauty = 38;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1452257# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 39) { 
                    beauty = 39;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1442274# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 40) { 
                    beauty = 40;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1432218# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 41) { 
                    beauty = 41;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1402259# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 42) { 
                    beauty = 42;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1382265# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 43) { 
                    beauty = 43;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1372228# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 44) { 
                    beauty = 44;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1132215# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 45) { 
                    beauty = 45;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1032219# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 46) { 
                    beauty = 46;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102944# 个#r \r\n", 1, 1, 100000);
                   }
			 if (selection == 47) { 
                    beauty = 47;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102943# 个#r \r\n", 1, 1, 100000);
                   }					

            if (selection == 48) { 
                    beauty = 48;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102942# 个#r \r\n", 1, 1, 100000);
                   }	
                 
            if (selection == 49) { 
                    beauty = 49;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102941# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 50) { 
                    beauty = 50;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1102940# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 51) { 
                    beauty = 51;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082699# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 52) { 
                    beauty = 52;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082698# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 53) { 
                    beauty = 53;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082697# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 54) { 
                    beauty = 54;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082696# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 55) { 
                    beauty = 55;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1082695# 个#r \r\n", 1, 1, 100000);
                   }
		    if (selection == 56) { 
                    beauty = 56;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1073162# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 57) { 
                    beauty = 57;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1073161# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 58) { 
                    beauty = 58;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1073160# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 59) { 
                    beauty = 59;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1073159# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 60) { 
                    beauty = 60;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1073158# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 61) { 
                    beauty = 61;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1053067# 个#r \r\n", 1, 1, 100000);
                   }
			if (selection == 62) { 
                    beauty = 62;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1053066# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 63) { 
                    beauty = 63;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1053065# 个#r \r\n", 1, 1, 100000);
                   }
		    if (selection == 64) { 
                    beauty = 64;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1053064# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 65) { 
                    beauty = 65;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1053063# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 66) { 
                    beauty = 66;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1004812# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 67) { 
                    beauty = 67;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1004811# 个#r \r\n", 1, 1, 100000);
                   }

            if (selection == 68) { 
                    beauty = 68;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1004810# 个#r \r\n", 1, 1, 100000);
                   }
            if (selection == 69) { 
                    beauty = 69;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1004809# 个#r \r\n", 1, 1, 100000);
                   }
		     if (selection == 70) { 
                    beauty = 70;
                    cm.sendGetNumber("请输入数量:\r\n#b比例 - (#r1 = 1#b)\r\n  当前拥有数量: #c1004808# 个#r \r\n", 1, 1, 100000);
                   }





				 
//============================================下半启动部分============================================				 

        
        
			        } else if (status == 2) { //第三个大门入口
            if (beauty == 0) {
                if (cm.haveItem(1332242, selection)){
					 cm.gainItem(1332242, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                     cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 1) {
                if (cm.haveItem(1492194, selection)){
					 cm.gainItem(1492194, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 2) {
                if (cm.haveItem(1482183, selection)){
					 cm.gainItem(1482183, -selection);
                   cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 3) {
                if (cm.haveItem(1472230, selection)){
					 cm.gainItem(1472230, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 4) {
                if (cm.haveItem(1462208, selection)){
					 cm.gainItem(1462208, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 5) {
                if (cm.haveItem(1452220, selection)){
					 cm.gainItem(1452220, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                     cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 6) {
                if (cm.haveItem(1432182, selection)){
					 cm.gainItem(1432182, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 7) {
                if (cm.haveItem(1422156, selection)){
					 cm.gainItem(1422156, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 8) {
                if (cm.haveItem(1402214, selection)){
					 cm.gainItem(1402214, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 9) {
                if (cm.haveItem(1382226, selection)){
					 cm.gainItem(1382226, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*3)+"#k]个#v3994731#");
                      cm.gainItem(3994731, selection*3);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个利琳的情人节金币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
            if (beauty == 10) {
                if (cm.haveItem(1102481, selection)){
					 cm.gainItem(1102481, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 11) {
                if (cm.haveItem(1102482, selection)){
					 cm.gainItem(1102482, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                      cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 12) {
                if (cm.haveItem(1102483, selection)){
					 cm.gainItem(1102483, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 13) {
                if (cm.haveItem(1102484, selection)){
					 cm.gainItem(1102484, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 14) {
                if (cm.haveItem(1102485, selection)){
					 cm.gainItem(1102485, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 15) {
                if (cm.haveItem(1082543, selection)){
					 cm.gainItem(1082543, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 16) {
                if (cm.haveItem(1082544, selection)){
					 cm.gainItem(1082544, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                   cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 17) {
                if (cm.haveItem(1082545, selection)){
					 cm.gainItem(1082545, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, selection*50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 18) {
                if (cm.haveItem(1082546, selection)){
					 cm.gainItem(1082546, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 19) {
                if (cm.haveItem(1082547, selection)){
					 cm.gainItem(1082547, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				if (beauty == 20) {
                if (cm.haveItem(1072743, selection)){
					 cm.gainItem(1072743, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 21) {
                if (cm.haveItem(1072744, selection)){
					 cm.gainItem(1072744, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 22) {
                if (cm.haveItem(1072745, selection)){
					 cm.gainItem(1072745, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 23) {
                if (cm.haveItem(1072746, selection)){
					 cm.gainItem(1072746, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 24) {
                if (cm.haveItem(1072747, selection)){
					 cm.gainItem(1072747, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 25) {
                if (cm.haveItem(1132174, selection)){
					 cm.gainItem(1132174, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 26) {
                if (cm.haveItem(1132175, selection)){
					 cm.gainItem(1132175, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 27) {
                if (cm.haveItem(1132176, selection)){
					 cm.gainItem(1132176, -selection);
                   cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 28) {
                if (cm.haveItem(1132177, selection)){
					 cm.gainItem(1132177, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 29) {
                if (cm.haveItem(1132178, selection)){
					 cm.gainItem(1132178, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
				     cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				if (beauty == 30) {
                if (cm.haveItem(1332279, selection)){
					 cm.gainItem(1332279, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 31) {
                if (cm.haveItem(1322255, selection)){
					 cm.gainItem(1322255, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 32) {
                if (cm.haveItem(1312203, selection)){
					 cm.gainItem(1312203, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 33) {
                if (cm.haveItem(1302343, selection)){
					 cm.gainItem(1302343, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 34) {
                if (cm.haveItem(1492235, selection)){
					 cm.gainItem(1492235, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 35) {
                if (cm.haveItem(1482221, selection)){
					 cm.gainItem(1482221, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 36) {
                if (cm.haveItem(1472265, selection)){
					 cm.gainItem(1472265, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 37) {
                if (cm.haveItem(1462243, selection)){
					 cm.gainItem(1462243, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 38) {
                if (cm.haveItem(1452257, selection)){
					 cm.gainItem(1452257, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 39) {
                if (cm.haveItem(1442274, selection)){
					 cm.gainItem(1442274, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				if (beauty == 40) {
                if (cm.haveItem(1432218, selection)){
					 cm.gainItem(1432218, -selection);
                      cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 41) {
                if (cm.haveItem(1402259, selection)){
					 cm.gainItem(1402259, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 42) {
                if (cm.haveItem(1382265, selection)){
					 cm.gainItem(1382265, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 43) {
                if (cm.haveItem(1372228, selection)){
					 cm.gainItem(1372228, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*1)+"#k]个#v5570000#");
                     cm.gainItem(5570000, 1);
				cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*3)+"个金锤子,大家一起祝贺他/她吧!");
					 cm.dispose()
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 44) {
                if (cm.haveItem(1132215, selection)){
					 cm.gainItem(1132215, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
					cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 45) {
                if (cm.haveItem(1032219, selection)){
					 cm.gainItem(1032219, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*50)+"#k]个#v4000463#");
                     cm.gainItem(4000463, 50);
					cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*50)+"个国庆纪念币,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 46) {
                if (cm.haveItem(1102944, selection)){
					 cm.gainItem(1102944);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 47) {
                if (cm.haveItem(1102943, selection)){
					 cm.gainItem(1102943, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 48) {
                if (cm.haveItem(1102942, selection)){
					 cm.gainItem(1102942, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 49) {
                if (cm.haveItem(1102941, selection)){
					 cm.gainItem(1102941, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				if (beauty == 50) {
                if (cm.haveItem(1102940, selection)){
					 cm.gainItem(1102940, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 51) {
                if (cm.haveItem(1082699, selection)){
					 cm.gainItem(1082699, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 52) {
                if (cm.haveItem(1082698, selection)){
					 cm.gainItem(1082698, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 53) {
                if (cm.haveItem(1082697, selection)){
					 cm.gainItem(1082697, -selection);
                   cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 54) {
                if (cm.haveItem(1082696, selection)){
					 cm.gainItem(1082696, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 55) {
                if (cm.haveItem(1082695, selection)){
					 cm.gainItem(1082695, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 56) {
                if (cm.haveItem(1073162, selection)){
					 cm.gainItem(1073162, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 57) {
                if (cm.haveItem(1073161, selection)){
					 cm.gainItem(1073161, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 58) {
                if (cm.haveItem(1073160, selection)){
					 cm.gainItem(1073160, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 59) {
                if (cm.haveItem(1073159, selection)){
					 cm.gainItem(1073159, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				if (beauty == 60) {
                if (cm.haveItem(1073158, selection)){
					 cm.gainItem(1073158, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }
			
			
            if (beauty == 61) {
                if (cm.haveItem(1053067, selection)){
					 cm.gainItem(1053067, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }			
			
            if (beauty == 62) {
                if (cm.haveItem(1053066, selection)){
					 cm.gainItem(1053066, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 63) {
                if (cm.haveItem(1053065, selection)){
					 cm.gainItem(1053065, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }				
			
            if (beauty == 64) {
                if (cm.haveItem(1053064, selection)){
					 cm.gainItem(1053064, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
            if (beauty == 65) {
                if (cm.haveItem(1053063, selection)){
					 cm.gainItem(1053063, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
						
            if (beauty == 66) {
                if (cm.haveItem(1004812, selection)){
					 cm.gainItem(1004812, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }		
			
            if (beauty == 67) {
                if (cm.haveItem(1004811, selection)){
					 cm.gainItem(1004811, -selection);
                     cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			
			
            if (beauty == 68) {
                if (cm.haveItem(1004810, selection)){
					 cm.gainItem(1004810, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }					
			if (beauty == 69) {
                if (cm.haveItem(1004809, selection)){
					 cm.gainItem(1004809, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
			if (beauty == 70) {
                if (cm.haveItem(1004808, selection)){
					 cm.gainItem(1004808, -selection);
                    cm.sendOk("兑换成功。你一共兑换了:[#r"+(selection*2)+"#k]个#v2613050#");
                     cm.gainItem(2613050, 2);
					 cm.worldMessage(6,"[神装回收] 玩家 "+cm.getName()+ "成功回收神装获得"+(selection*2)+"张X卷轴,大家一起祝贺他/她吧!");
					 cm.dispose();
                } else {
                    cm.sendOk("条件不足，无法兑换。");
                    cm.dispose()
                }
                }	
				
				
			
			
			
			
	
			
			
            status = -1;   //这里是最终脚本结尾
        } else {
            cm.dispose();
        }
    }
}
