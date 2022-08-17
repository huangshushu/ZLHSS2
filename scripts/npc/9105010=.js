/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Cody
-- By --------------------------------------------------------------------------------------------------
	xQuasar
Note by Tykian: Minor fixes/additions
**/


var status = -1;
var oldWepName;
var oldWepId;
var newWepId;
var newWepName;
var leaves;
var Stimulator;
var cost;
var getNewWep;
var sel;

function start() {
    cm.sendSimple("你想怎么办 ? \r\n\r\n#b#L0#使35级武器#l \r\n\r\n#L1#使42级武器#l*\r\n\r\n#L2#使用64级武器#l\r\n\r\n#L4#使用77级武器#l\r\n\r\n#L3#贸易的经验#l#k");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	sel = selection;
	if (sel == 0) {
	    cm.sendSimple("所以，你会怎样想? \r\n#b#L0#枫剑#l \r\n#b#L1#枫华格纳#l \r\n#b#L2#枫员工#l \r\n#b#L3#枫叶弓#l \r\n#b#L4#枫乌鸦#l \r\n#b#L5#枫爪#l \r\n#b#L6#枫枪#l \r\n#b#L7#枫转向节#l \r\n#b#L8#枫叶之盾#l \r\n#b#L9#枫卡塔拉#l");
	} else if (sel == 2) {
	    cm.sendSimple("所以，你会怎样想? \r\n\r\n#b#L0#枫荣耀之剑 （单手剑）#l\r\n#L1#枫魂Rohen（双手剑）#l\r\n#L2#枫钢铁斧 （单手斧）#l\r\n#L3#枫恶魔之斧 (Two-Handed Axe)#l\r\n#L4#枫浩劫锤 (One-Handed Mace)#l\r\n#L5#枫贝尔泽 (两个手锤)#l\r\n#L6#枫叶弓 (Bow)#l\r\n#L7#枫Nishada (弩)#l\r\n#L8#枫韦驮 (爪)#l\r\n#L9#枫阿修罗匕首 (匕首)#l\r\n#L10#枫黑暗伴侣 (匕首)#l\r\n#L11#枫魂矛 (矛)#l\r\n#L12#枫Karstan (长柄)#l\r\n#L13#枫闪耀魔杖 (棍棒)#l\r\n#L14#枫员工的智慧 (员工)#l\r\n#L15#枫叶金爪 (Knuckler)#l\r\n#L16#枫大炮射击游戏（枪）#l\r\n#L17#枫战士盾（战士盾）#l\r\n#L18#枫魔术师之盾（魔术师盾）#l\r\n#L19#枫贼之盾（盗贼盾）#l\r\n#L20#枫夹板卡塔拉#l");
	} else if (sel == 1) {
	    cm.sendSimple("所以，你会怎样想? \r\n#b#L0#枫灵魂歌手#l \r\n#b#L1#枫喇嘛员工#l \r\n#b#L2#枫叶斧#l \r\n#b#L3#枫末日歌手#l \r\n#b#L4#枫Impaler#l \r\n#b#L5#枫天蝎座#l \r\n#b#L6#枫魂搜索器#l \r\n#b#L7#枫叶弩#l \r\n#b#L8#枫Kandayo#l \r\n#b#L9#枫风暴手枪#l \r\n#b#L10#枫风暴手指#l \r\n#b#L11#枫杜克卡塔拉#l");
	} else if (sel == 4) {
	    cm.sendSimple("所以，你会怎样想? \r\n#b#L0#枫叶红榴石剑#l \r\n#b#L1#枫叶红榴石斧#l \r\n#b#L2#枫叶红榴石锤#l \r\n#b#L3#枫叶红榴石月半#l \r\n#b#L4#Maple Pyrope 棍棒#l \r\n#b#L5#枫叶红榴石员工#l \r\n#b#L6#枫叶红榴石Rohen#l \r\n#b#L7#枫叶红榴石战斧#l \r\n#b#L8#枫叶红榴石槌#l \r\n#b#L9#枫叶红榴石矛#l \r\n#b#L10#枫叶红榴石地狱杀手#l \r\n#b#L11#枫叶红榴石弓#l \r\n#b#L12#枫叶红榴石乌鸦#l \r\n#b#L13#枫叶红榴石韦驮#l \r\n#b#L14#枫叶红榴石转向节#l \r\n#b#L15#枫叶红榴石射手#l \r\n#b#L16#枫叶红榴石卡塔拉#l");
	} else if (sel == 3) {
		if (!cm.haveItem(4001126, 1)) {
			cm.sendOk("您将需要至少一个叶接收经验!");
			cm.dispose();
			return;
		}
		cm.sendGetNumber("你有多少叶子喜欢交易?", 0, 0, 32767);
		status = 9;
	}
    } else if (status == 1) {
	if (sel == 0) {
	    if (selection == 0) {
		newWepName = "枫剑";
		newWepId = 1302020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 1) {
		newWepName = "枫华格纳";
		newWepId = 1332025;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "枫员工";
		newWepId = 1382009;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "枫叶弓";
		newWepId = 1452016;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "枫乌鸦";
		newWepId = 1462014;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "枫爪";
		newWepId = 1472030;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "枫枪";
		newWepId = 1492020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "枫转向节";
		newWepId = 1482020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "枫叶之盾";
		newWepId = 1092030;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "枫卡塔拉";
		newWepId = 1342025;
		leaves = 100;
		cost = 50000;
	    }
	    cm.sendYesNo("你确定你想使一个 #b" + newWepName + "#k? 下列物品和材料将被要求...\r\n\#i4001126# x" + leaves + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	// 1482020
	} else if (sel == 2) {
	    if (selection == 0) {
		oldWepName = "枫灵魂歌手";
		oldWepId = 1302030;
		newWepName = "枫荣耀之剑";
		newWepId = 1302064;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130002;
	    } else if (selection == 1) {
		oldWepName = "枫灵魂歌手";
		oldWepId = 1302030;
		newWepName = "枫魂Rohen";
		newWepId = 1402039;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130005;
	    } else if (selection == 2) {
		oldWepName = "枫叶斧";
		oldWepId = 1412011;
		newWepName = "枫钢铁斧";
		newWepId = 1312032;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130003;
	    } else if (selection == 3) {
		oldWepName = "枫叶斧";
		oldWepId = 1412011;
		newWepName = "枫恶魔之斧";
		newWepId = 1412027;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130006;
	    } else if (selection == 4) {
		oldWepName = "枫末日歌手";
		oldWepId = 1422014;
		newWepName = "枫浩劫锤";
		newWepId = 1322054;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130004;
	    } else if (selection == 5) {
		oldWepName = "枫末日歌手";
		oldWepId = 1422014;
		newWepName = "枫贝尔泽";
		newWepId = 1422029;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130007;
	    } else if (selection == 6) {
		oldWepName = "枫魂搜索器";
		oldWepId = 1452022;
		newWepName = "枫叶弓";
		newWepId = 1452045;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130012;
	    } else if (selection == 7) {
		oldWepName = "枫叶弩";
		oldWepId = 1462019;
		newWepName = "枫Nishada";
		newWepId = 1462040;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130013;
	    } else if (selection == 8) {
		oldWepName = "枫Kandayo";
		oldWepId = 1472032;
		newWepName = "枫韦驮";
		newWepId = 1472055;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130015;
	    } else if (selection == 9 || selection == 10) {
		oldWepName = "枫华格纳";
		oldWepId = 1332025;
		if (selection == 9) {
		    newWepName = "枫阿修罗匕首";
		    newWepId = 1332056;
		} else {
		    newWepName = "枫黑暗伴侣";
		    newWepId = 1332055;
		}
		leaves = 200;
		cost = 500000;
		Stimulator = 4130014;
	    } else if (selection == 11) {
		oldWepName = "枫Impaler";
		oldWepId = 1432012;
		newWepName = "枫魂矛";
		newWepId = 1432040;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130008;
	    } else if (selection == 12) {
		oldWepName = "枫天蝎座";
		oldWepId = 1442024;
		newWepName = "枫Karstan";
		newWepId = 1442051;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130009;
	    } else if (selection == 13) {
		oldWepName = "枫喇嘛员工";
		oldWepId = 1382012;
		newWepName = "枫闪耀魔杖";
		newWepId = 1372034;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130010;
	    } else if (selection == 14) {
		oldWepName = "枫喇嘛员工";
		oldWepId = 1382012;
		newWepName = "枫员工的智慧";
		newWepId = 1382039;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130011;
	    } else if (selection == 15){
		oldWepName = "枫风暴手指";
		oldWepId = 1482021;
		newWepName = "枫叶金爪";
		newWepId = 1482022;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130016;
	    } else if (selection == 16) {
		oldWepName = "枫风暴手枪";
		oldWepId = 1492021;
		newWepName = "枫大炮射击";
		newWepId = 1492022;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130017;
	    } else if (selection == 17) {
		oldWepName = "枫叶之盾";
		oldWepId = 1092030;
		newWepName = "枫战士盾";
		newWepId = 1092046;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 18) {
		oldWepName = "枫叶之盾";
		oldWepId = 1092030;
		newWepName = "枫魔术师盾";
		newWepId = 1092045;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 19) {
		oldWepName = "枫叶之盾";
		oldWepId = 1092030;
		newWepName = "枫贼盾";
		newWepId = 1092047;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 20) {
		oldWepName = "枫杜克卡塔拉";
		oldWepId = 1342026;
		newWepName = "枫夹板卡塔拉";
		newWepId = 1342027;
		leaves = 200;
		cost = 500000;
	    }
	    cm.sendYesNo("你确定你想使一个 #b" + newWepName + "#k? 下列物品和材料将被要求...\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	} else if (sel == 1) {
	    if (selection == 0) {
		newWepName = "枫灵魂歌手";
		newWepId = 1302030;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 1) {
		newWepName = "枫喇嘛员工";
		newWepId = 1382012;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "枫叶斧";
		newWepId = 1412011;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "枫末日歌手";
		newWepId = 1422014;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "枫Impaler";
		newWepId = 1432012;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "枫天蝎座";
		newWepId = 1442024;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "枫魂搜索器";
		newWepId = 1452022;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "枫叶弩";
		newWepId = 1462019;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "枫Kandayo";
		newWepId = 1472032;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "枫风暴手枪";
		newWepId = 1492021;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 10) {
		newWepName = "枫风暴手指";
		newWepId = 1482021;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 11) {
		newWepName = "枫杜克卡塔拉";
		newWepId = 1342026;
		leaves = 200;
		cost = 50000;
	    }
	    cm.sendYesNo("你确定你想使一个 #b" + newWepName + "#k? 下列物品和材料将被要求...\r\n\#i4001126# x" + leaves + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	} else if (sel == 4) {
	    if (selection == 0) {
		oldWepName = "枫荣耀之剑";
		oldWepId = 1302064;
		newWepName = "枫叶红榴石剑";
		newWepId = 1302142;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130002;
	    } else if (selection == 6) {
		oldWepName = "枫魂Rohen";
		oldWepId = 1402039;
		newWepName = "枫叶红榴石Rohen";
		newWepId = 1402085;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130005;
	    } else if (selection == 1) {
		oldWepName = "枫钢铁斧";
		oldWepId = 1312032;
		newWepName = "枫叶红榴石斧";
		newWepId = 1312056;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130003;
	    } else if (selection == 7) {
		oldWepName = "枫恶魔之斧";
		oldWepId = 1412027;
		newWepName = "枫叶红榴石战斧";
		newWepId = 1412055;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130006;
	    } else if (selection == 2) {
		oldWepName = "枫浩劫锤";
		oldWepId = 1322054;
		newWepName = "枫叶红榴石锤";
		newWepId = 1322084;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130004;
	    } else if (selection == 8) {
		oldWepName = "枫贝尔泽";
		oldWepId = 1422029;
		newWepName = "枫叶红榴石槌";
		newWepId = 1422057;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130007;
	    } else if (selection == 11) {
		oldWepName = "枫叶弓";
		oldWepId = 1452045;
		newWepName = "枫叶红榴石弓";
		newWepId = 1452100;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130012;
	    } else if (selection == 12) {
		oldWepName = "枫Nishada";
		oldWepId = 1462040;
		newWepName = "枫叶红榴石乌鸦";
		newWepId = 1462085;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130013;
	    } else if (selection == 13) {
		oldWepName = "枫韦驮";
		oldWepId = 1472055;
		newWepName = "Maple PyropeSkanda";
		newWepId = 1472111;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130015;
	    } else if (selection == 3) {
		oldWepName = "枫黑暗伴侣";
		oldWepId = 1332055;
		newWepName = "枫叶红榴石月半";
		newWepId = 1332114;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130014;
	    } else if (selection == 9) {
		oldWepName = "枫魂矛";
		oldWepId = 1432040;
		newWepName = "枫叶红榴石矛";
		newWepId = 1432075;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130008;
	    } else if (selection == 10) {
		oldWepName = "枫Karstan";
		oldWepId = 1442051;
		newWepName = "枫叶红榴石地狱杀手";
		newWepId = 1442104;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130009;
	    } else if (selection == 4) {
		oldWepName = "枫闪耀魔杖";
		oldWepId = 1372034;
		newWepName = "Maple Pyrope 棍棒";
		newWepId = 1372071;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130010;
	    } else if (selection == 5) {
		oldWepName = "枫员工的智慧";
		oldWepId = 1382039;
		newWepName = "枫叶红榴石员工";
		newWepId = 1382093;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130011;
	    } else if (selection == 14){
		oldWepName = "枫叶金爪";
		oldWepId = 1482022;
		newWepName = "枫叶红榴石转向节";
		newWepId = 1482073;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130016;
	    } else if (selection == 15) {
		oldWepName = "枫大炮射击";
		oldWepId = 1492022;
		newWepName = "枫叶红榴石射手";
		newWepId = 1492073;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130017;
	    } else if (selection == 16) {
		oldWepName = "枫夹板卡塔拉";
		oldWepId = 1342027;
		newWepName = "枫叶红榴石卡塔拉";
		newWepId = 1342028;
		leaves = 500;
		cost = 5000000;
	    }
	    cm.sendYesNo("你确定你想使一个 #b" + newWepName + "#k? 下列物品和材料将被要求...\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	}
    } else if (status == 2) {
	if (sel == 2 || sel == 4) {
	    if (mode != 1) {
		cm.sendOk("没有？也许你应该得到所需要的第一个项目，或者让你的心。我会在这里，等待.");
		cm.dispose();
	    } else {
		if ((cm.getMeso() < cost) || (!cm.haveItem(oldWepId,1)) || (!cm.haveItem(4001126,leaves))) {
		    cm.sendOk("Sorry, but you don't seem to have all the items. Please get them all, and try again.");
		    cm.dispose();
		} else if (Stimulator == null || !cm.haveItem(Stimulator)) {
		    if (cm.canHold(newWepId)) {
			cm.gainItem(oldWepId, -1);
			cm.gainItem(4001126, -leaves);
			cm.gainMeso(-cost);
			cm.gainItem(newWepId,1);
			cm.sendOk("在那里，全部完成！那是快，不是吗？如果您需要任何更多的项目，我会在这里等.");
		    } else {
			cm.sendOk("看样子，你是目前在全部清单，请检查.");
		    }
		    cm.dispose();
		} else {
		    status = 2;
		    cm.sendSimple("看来，你有一个#刺激#k为了这级武器. 你想创建级武器具有或不具有#r刺激#k? 如果创建无#r刺激#k, 项将总是 #b平均#k. 如果你做的创建 #rStimulator#k,该项目具有是随机的机会#b降低#k要么#b更高#k 高于平均水平.\r\n#b#L20#创建级武器 WITH 刺激#l\r\n#L21#创建级武器 WITHOUT 刺激#l#k");
		}
	    }
	} else if (sel == 0 || sel == 1) {
	    if ((cm.getMeso() < cost) || !cm.haveItem(4001126,leaves)) {
		cm.sendOk("很抱歉，但你似乎并没有把所有的项目。请让他们所有，然后再试一次.");
	    } else {
		if (cm.canHold(newWepId)) {
		    cm.gainItem(4001126, -leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("在那里，全部完成！那是快，不是吗？如果您需要任何更多的项目，我会在这里等.");
		} else {
		    cm.sendOk("看样子，你是目前在全部清单，请检查.");
		}
	    }
	    cm.dispose();
	}
    } else if (status == 3) {
	if (sel == 2 || sel == 4) {
	    if (cm.canHold(newWepId)) {
		if (selection == 21) {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("在那里，全部完成！那是快，不是吗？如果您需要任何更多的项目，我会在这里等.");
		} else {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainItem(Stimulator,-1);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId,1,true);
		    cm.sendOk("在那里，全部完成！那是快，不是吗？如果您需要任何更多的项目，我会在这里等.");
		}
	    } else {
		cm.sendOk("看样子，你是目前在全部清单，请检查.");
	    }
	    cm.dispose();
	}
	} else if (status == 10) {
		if (selection == 0) {
			cm.sendOk("如果你不希望交易的叶子，那么你就不会得到经验的.");
			cm.dispose();
			return;
		}
		if (!cm.haveItem(4001126, selection)) {
			cm.sendOk("你没有那么多的叶子.");
			cm.dispose();
			return;
		}
		if (cm.getPlayerStat("EXP") >= (Integer.MAX_VALUE - 200 * selection)) {
			cm.sendOk("您正在尝试交易我太多的叶子!");
			cm.dispose();
			return;
		}
		cm.gainItem(4001126, -selection);
		cm.gainExpR(200 * selection);
		cm.sendOk("你去那里!");
		cm.dispose();
    }
}