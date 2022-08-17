/*
	制作：dgms
	功能：元宝、点券、中介币的相互兑换
	时间：2016年12月22日
*/
var status = -1;
var selected = 0;
var ttt = "#fUI/UIWindow/Quest/icon2/7#";
var ico = "#fEffect/CharacterEff/1112905/0/1#";	//ICO美化图标
var rmbtonx = 1;	//兑换1000点券需要的元宝数量
var tonx = 1000;	//1个元宝兑换来的点券数量
var nxtofy = 1000;	//兑换1个金色枫叶需要的点券数量
var tofy = 1;		//1000点点券兑换来的金色枫叶数量
var itemtonx = 1;	//兑换950个点券需要的金色枫叶数量
var tonx2 = 950;	//1个金色枫叶兑换来的点券数量
var item = 4033248;	//金色枫叶-中介币



function start () {
	action(1,0,0);
}
function action (mode,type,selection) {
	if (mode == -1 || mode == 0 && status == 0) {
		cm.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}
	
	if (status == 0) {
		var I = ico;
		text = (I+I+I+I+I+I+I+I+I+I+I+"#e  金融中心  #n"+I+I+I+I+I+I+I+I+I+I+I);
		text +=("\r\n\r\n\t\t（金色枫叶#i4033248#可以交易给其他玩家）\r\n");
		text +=("\r\n#n#b#L0#元宝 >>> 点券\t\t#d比例：(1 ：1000)\t#r[兑换]");
		text +=("\r\n#n#b#L1#点券 >>> 枫叶\t\t#d比例：(1000 ：1)\t#r[兑换]");
		text +=("\r\n#n#b#L2#枫叶 >>> 点券\t\t#d比例：(1 ：1000)\t#r[兑换]#l\r\n\r\n");
		text +=(I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I+I);
		text +=("\r\n\t\t\t\t#L3##b" + ttt + " 返回上一页#k#l\r\n\r\n");
		cm.sendNextPrev(text);
	} else if (status == 1){
		//元宝换点券
		if (selection == 0){
			if (cm.getRMB() < rmbtonx) {
				cm.sendOk("您的元宝不足，无法进行兑换！");
				cm.dispose();
				return;
			} else {
				selected = 1;
				text = "\r\n#d剩余元宝：#r" + cm.getRMB() + " 个\t\t#b可兑换"+cm.getRMB()*tonx+"点券";
				text+= "\r\n#d点券元宝：#r" + cm.getNX(1) + " 点";
				text+= "\r\n#d兑换比例：#r1个元宝 = 1000点券";
				text+= "\r\n\r\n#r请输入要兑换成点券的#e元宝数量："
				cm.sendGetNumber(text , 1, 1, cm.getRMB());
			}
		//点券换金色枫叶
		} else if (selection == 1) {
			if (cm.getNX(1) < nxtofy) {
				cm.sendOk("您的点券不足，无法进行兑换！");
				cm.dispose();
				return;
			} else {
				selected = 2;
				text = "\r\n#d剩余点券：#r" + cm.getNX(1) + " 点\t\t#b可兑换"+Math.floor(cm.getNX(1)/nxtofy)+"枫叶";
				text+= "\r\n#d剩余枫叶：#r" + cm.getItemQuantity(item) + " 个";
				text+= "\r\n#d兑换比例：#r1000点券 = 1个金色枫叶";
				text+= "\r\n\r\n#r请输入你要得到的#e枫叶数量："
				cm.sendGetNumber(text , 1, 1, cm.getNX(1)/nxtofy);
			}
		//金色枫叶换点券
		}else if (selection == 2) {
			if (cm.getItemQuantity(item) < itemtonx) {
				cm.sendOk("您的#v"+item+"#不足，无法进行兑换！");
				cm.dispose();
				return;
			} else {
				selected = 3;
				text = "\r\n#d剩余点券：#r" + cm.getNX(1) + " 点";
				text+= "\r\n#d剩余枫叶：#r" + cm.getItemQuantity(item) + " 个\t\t#b可兑换"+cm.getItemQuantity(item)*tonx2+"点券";
				text+= "\r\n#d兑换比例：#r1个金色枫叶 = 950点券";
				text+= "\r\n\r\n#r请输入要兑换成点券的#e枫叶数量："
				cm.sendGetNumber(text , 1, 1, cm.getItemQuantity(item));
			}
		}else if (selection == 3) {
			cm.dispose();
			cm.openNpc(1530635, 0);
		}
		//元宝成功兑换点券
	} else if (status == 2){
		if (selected == 1) {
			cm.gainRMB(-selection);
			cm.gainNX(selection * tonx);
			cm.sendOk("#b你成功用#r "+selection+" #b个元宝兑换了#r "+(selection*tonx)+" #b点券");
			cm.dispose();
		//点券成功兑换金色枫叶
		} else if (selected == 2){
			cm.gainNX(-selection * nxtofy);
			cm.gainItem(item,selection);
			cm.sendOk("#b你成功用#r "+ (selection*nxtofy) +" #b点券兑换了#r "+selection+" #b个金色枫叶");
			cm.dispose();
		//金色枫叶成功兑换点券
		} else if (selected == 3){
			cm.gainItem(item,-selection);
			cm.gainNX(selection * tonx2);
			cm.sendOk("#b你成功用#r "+selection+" #b个元宝兑换了#r "+(selection*tonx2)+" #b点券");
			cm.dispose();
		} else {
			cm.sendOk("未知错误");
			cm.dispose();
			return;
		}
	}

}