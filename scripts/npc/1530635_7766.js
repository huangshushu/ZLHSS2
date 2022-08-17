var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
	Array(5211060, 100000 ,1), //	三倍经验
	
	Array(2500000, 100000 ,1), //	初始化技能点
	
	Array(2501000, 5, 1),//	能力值初始化卷轴
	
	Array(5390035, 500000 ,20), //	狗年情景喇叭
	
	Array(5390034, 500000 ,20), //	鸡年情景喇叭
	
	Array(5390004, 500000 ,20), //	新年庆祝喇叭2喇叭
	
	Array(5390003, 500000 ,20), //	新年庆祝喇叭1喇叭

	Array(5062024, 3000000 ,5), //	闪炫魔方
	
	Array(5062500, 1000000 ,100), //	大师附加神奇魔方

	Array(5062010, 1000000 ,100), //	终极神奇魔方
	
	Array(2048717, 1000000 ,1), //	永远的涅磐焰火
	
	Array(2049116, 1000000 ,1), //	强化混沌
	
	Array(2340000, 3000000 ,10), //	祝福卷轴
	
	Array(2049762, 500000 ,10), //	S级潜能卷轴
	
	Array(2048306, 500000 ,10), //	特殊附加潜能附加古卷
	
	Array(2049509, 500000 ,10), //	金色刻印的印章
	
	Array(5570000, 100000 ,1), //	金锤子

	Array(5750001, 100000 ,10), //	星岩电钻机
	
	Array(5520001, 3000000 ,1), //	白金宿命剪刀
	
	Array(5520000, 1000000 ,1), //	宿命剪刀

	Array(5062400, 100000 ,1) //	神奇铁砧
	
	

);

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
			text = " 尊敬的#r#h0##k,您好！欢迎来到“#b 月光点券商店 #k”。\r\n";
			text += " 您当前剩余的点券数量为：#r#e "+ cm.getPlayer().getCSPoints(1) +" #n #k\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "#购买#v"+itemlist[i][0]+"##z"+itemlist[i][0]+"# [#b道具数量：#d"+itemlist[i][2]+"#k]#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
			var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "##t" + itemlist[selects][0] + "\r\n\r\n"
			   txt += "\r\n #k- 购买道具数量：#d" + itemlist[selects][2] + "#k\r\n\r\n"
			   txt += " - 当前道具单价：#r" + itemlist[selects][1] + "#k 点券。\r\n\r\n"
			   txt += " - 请输入所需兑换数值：\r\n\r\n"
			   cm.sendGetNumber(txt,1,1,100);
        } else if (a == 2) {
			jg = selection
			var itemid = itemlist[selects][0];
			if (cm.canHold(itemlist[selects][0]) == false) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (cm.getPlayer().getCSPoints(1) <= itemlist[selects][1] * jg) {
				cm.sendOk("请保证你背包内有足够的点券。");
				cm.dispose();
				return; 
			}
            if (cm.getPlayer().getCSPoints(1) >= itemlist[selects][1] * jg) {
                cm.gainNX( -itemlist[selects][1] * jg);
                cm.gainItem(itemlist[selects][0], jg * itemlist[selects][2]);
                cm.sendOk("恭喜你花费了#r "+itemlist[selects][1] * jg+" #k点卷购买了#v"+itemlist[selects][0]+"# * #r"+jg * itemlist[selects][2]+"#k个。");
               // cm.dispose();
			   a = -1;
            } else {
                cm.sendOk("对不起，你没有足够的点券。");
                cm.dispose();
            }
        }
    }//mode
}//f