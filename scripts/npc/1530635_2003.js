﻿/*伤害皮肤*/
var status = 0;
var choice;
/*这里表示的是你要添加道具的ID*/var itemxh=new Array("2431965","2432131","2432154","2432207","2432465","2432479","2432532","2432592","2432710","2432836","2432749","2432804","2433038","2433182","2433183","2433569","2432084","2432354","2432355","2432637","2432638","2432640","2432658","2432659","2432710","2433804","2432603","2432591","2432695","2432526","2432836","2433063","2433178","2433456","2432748","2432749","2433104","2433106","2433112","2433113","2433132","2433038","2433197","2433715","2433913","2433919","2433980","2433981","2433587","2433588","2433568","2433569","2433570","2433570","2433571","2433572","2433362","2433184","2433775","2433776","2433777","2433558","2434040","2433883","2434081","2433828","2433829","2433830","2433831","2433832","2433833","2434375","2434147","2434519","2434566","2434601","2434619","2434658","2434659","2434868",);
/*这里是价格*/ var itemxhcost=new Array("0","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "请选择您要购买的道具：\r\n#r#e请注意购买以后无法交易，请在24小时内使用。#n#b";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#b#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d点卷#k#l";
            }
            cm.sendSimpleS("" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("你选择的商品为#b#v" + itemxh[selection] + "#售价为：" + itemxhcost[selection] + "点卷/张\r\n请输入你购买的数量",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 1) {
            cm.sendOk("不能输入0.或者你没有足够的点卷支付你要买的数量.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("购买失败，你没有" + money + "点卷");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice],fee);
                cm.worldSpouseMessage(0x0D,"[伤害皮肤] :  "+ cm.getChar().getName() +"  在点卷商店购买了伤害皮肤!");
            cm.sendOk("恭喜，购买成功。");
            cm.dispose();
             }
        }
    }
}
