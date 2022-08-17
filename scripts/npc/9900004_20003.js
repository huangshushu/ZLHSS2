/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：副本
 */
var 魔法石 = 4006000;
//传送地点，消耗金币，文字
var maps = Array(
		[100000005, 5,"蘑菇王"],// 6130101 4000040
		[105070002, 5,"僵尸蘑菇王"], //6300005 4000176
		[250010503, 5,"妖怪禅师"], //7220002 4031789
		[105090900, 5,"蝙蝠怪"],//8130100	4031216			
		[230040420, 5,"鱼王"], //8510000 4001085
		[240020402, 5,"喷火龙"], //8180000 4000235
		[240020101, 5,"天鹰"],		//8180001	4000243	
		[270010500, 5,"多多"], //8220004  4000460
		[270020500, 5,"玄冰独角兽"], //8220005  4000461
		[270030500, 5,"雷卡"], //8220006  4000462
		[240040401, 5,"大海兽(掉国庆币)"], //8220003  掉国庆币
		[220080000, 5,"闹钟boss"], 
		[541020800, 5,"树精王boss"],		
		[551030100, 5,"暴力熊boss"],	
		[211042300, 5,"扎昆boss"],		
		[240040700, 5,"黑龙boss"],
		[910000015, 5,"黑龙boss[防卡]"],
		[910000020, 5,"黑龙boss[防卡]"],
		[702070400, 5,"妖僧boss"],		
		[270050000, 5,"品克缤boss"]
		












        );
var status = 0;
var show;
var sCost;
var selectedMap = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.说明文字(" 等你想去哪里了，记得找我哦！");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
    } else if (status == 1) {
        var selStr = "  #d#e请选择你要去的副本：#k#n#b";
        for (var i = 0; i < maps.length; i++) {
			 selStr += "\r\n#L" + i + "# #b#m" + maps[i] + "#（"+maps[i][2]+"） #l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        show = maps[selection][1];
        cm.sendYesNo("\t传送目标: #b#m" + maps[selection] + "#（"+maps[selection][2]+"）#k\r\n\t需要 "+cm.显示物品(魔法石)+" x #b" + show + "#k");
        selectedMap = selection;
    } else if (status == 3) {
        if (!cm.判断物品数量(魔法石,5)) {
            cm.sendNext("你没有 "+cm.显示物品(魔法石)+" 无法启动空间传送阵。");
            cm.safeDispose();
        } else {
            cm.收物品(魔法石,5);
            cm.warp(maps[selectedMap][0]);
            cm.dispose();
        }
    }
}