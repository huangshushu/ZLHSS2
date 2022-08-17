var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 兔子1 = "#fEffect/CharacterEff/1082565/0/0#";
var 兔子2 = "#fEffect/CharacterEff/1082565/2/0#";
var 兔子3 = "#fEffect/CharacterEff/1082565/4/0#";
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
	cm.Lunpan();
           // cm.Guaguale();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(cm.获取推广人ID() == 0){
			var 推广状态 = "#r请填写推广人#k";
			} else {
			var 推广状态 = "";	
			}
			var text = "你好，这里是#r冒险小伙伴招募系统#k\r\n\r\n#d"+警报灯+"你的推广ID："+cm.getPlayer().getAccountID()+"#r  #d"+推广状态+"\r\n";	
			if(cm.获取推广人ID() == 0){
			text += "#L0#"+铅笔图标+"填写小伙伴#l#k\r\n\r\n";
			}
			text += "#L1#"+兔子1+"推广值商城[推广值为#e#r"+cm.获取推广值()+"#n#d]#l\r\n\r\n";
			text += "#L2#"+兔子2+"#b推广系统介绍 - 奖励推广值详细说明";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.获取推广人ID() > 0){
               cm.sendOk("你好，你已经填写过推广人了。请不要再次填写。");
               cm.dispose();
                }else{
               cm.openNpc(9900007,5);
                }
            } else if (selection == 1) {
                cm.openNpc(9900007,882);
            } else if (selection == 2) {
                cm.sendOk("推广系统说明：\r\n每个玩家都有一个自己的推广值。你的推广值是#r"+cm.getPlayer().getAccountID()+"#k。如果有玩家填写了推广人的推广值。被推广的玩家充值，推广人可以拿到相应充值金额的积分。\r\n比如：\r\n填写了你的推广值的玩家充值了#r1000#k元，你就可以领取#r1000#k的推广值奖励。\r\n被推广的玩家转生一次,推广人可以获得#r2#k的推广值奖励.\r\n推广人可以无限设置被推广人。也就是说，这个系统没有人数上限。");
                cm.dispose();
        }
    }
}
}


