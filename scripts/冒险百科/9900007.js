var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "你想购买#v5150040##z5150040#吗？!\r\n\r\n";
            text += "" + 蓝色箭头 + "#L1##r#v5150040##z5150040#\t数量:1张\t需要点卷：1000点\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L2##r#v5150040##z5150040#\t数量:11张\t需要点卷：10000点\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L3##r#v5150038##z5150038#\t数量:1张\t需要点卷：50000点\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L4##r#v5152001##z5152001#\t数量:1张\t需要点卷：1000点\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L5##r#v5153000##z5153000#\t数量:1张\t需要点卷：1000点\r\n\r\n"//3
           // text += "" + 蓝色箭头 + "#L6##r#v4310003##z4310003#11个\t需要点卷：8000点\r\n\r\n"//3
           // text += "" + 蓝色箭头 + "#L7##r#v2049100##z2049100#10个\t需要点卷：15000点\r\n\r\n"//3
           // text += "" + 蓝色箭头 + "#L8##r#v2340000##z2340000#10个\t需要点卷：15000点\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
if (cm.getPlayer().getCSPoints(1) >= 1000) {
cm.gainNX(-1000);
cm.gainItem(5150040,1);
cm.sendOk("恭喜你，成功购买1张#v5150040#");
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买皇家理发券 1张 ！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足，无法换购！");
            cm.dispose();
			}
        } else if (selection == 2) {
if (cm.getPlayer().getCSPoints(1) >= 10000) {
cm.gainNX(-9000);
cm.gainItem(5150040,10);
cm.sendOk("恭喜你，成功购买11张#v5150040#");
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买皇家理发券 11张 ！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法换购！");
cm.dispose();
}
        } else if (selection == 3) {
if (cm.getPlayer().getCSPoints(1) >= 50000) {
cm.gainNX(-5000);
cm.gainItem(5150038,1);
cm.sendOk("恭喜你，成功购买1张#v5150038#");
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买明星理发券 ！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法换购！");
cm.dispose();
}
       } else if (selection == 4) {
if (cm.getPlayer().getCSPoints(1) >= 1000) {
cm.gainNX(-1000);
cm.gainItem(5152001,1);
cm.sendOk("恭喜你，成功购买1张#v5152001#");
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买    射手村高级整形卡 ！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法换购！");
cm.dispose();
}
       } else if (selection == 5) {
if (cm.getPlayer().getCSPoints(1) >= 1000) {
cm.gainNX(-1000);
cm.gainItem(5153000,1);
cm.sendOk("恭喜你，成功购买1张#v5153000#");
cm.全服公告( "[" + cm.getPlayer().getName() + "]成功购买	射手村护肤中心会员卡 ！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法换购！");
cm.dispose();
}
        } else if (selection == 6) {
if (cm.getPlayer().getCSPoints(1) >= 8000) {
cm.gainNX(-8000);
cm.gainItem(4310003,11);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买(蛋糕馅饼纪念徽章)11个，快去抽奖吧！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法购买！");
cm.dispose();
}
        } else if (selection == 7) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2049100,10);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买混沌卷轴10个，恭喜！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法购买！");
cm.dispose();
}
        } else if (selection == 8) {
if (cm.getPlayer().getCSPoints(1) >= 15000) {
cm.gainNX(-15000);
cm.gainItem(2340000,10);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买祝福卷轴10个，恭喜！");
cm.dispose();
}else{
cm.sendOk("点卷不足，无法购买！");
cm.dispose();
}
		}
    }
}


