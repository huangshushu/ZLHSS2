var cost=0;
var chance=0;
var costitem=4310058;

function start() 
{
	status = -1;
	action(1, 0, 0);
	
}
function action(mode, type, selection) 
{
	if (mode == 1) 
		{
			status++
		}
	else
		{
			cm.dispose();
			return;
		}
	if (status == 0){
			var selStr = "#e#r 暴君抽取npc \r\n#b亲爱的#r#h ##b您好,我这里可以抽取暴君#n#k";
        
			selStr += "\r\n#L0#暴君抽取介绍#l";
			selStr += "\r\n#L1##b#e投币！抽！#l";
			cm.sendOk(selStr);
	}
	else if (status==1){
		if(selection==0){
			cm.sendOk("抽取暴君时，由投入#v"+costitem+"#的数量决定中奖概率\r\n根据投入数量，每枚#v"+costitem+"#增加的中奖概率也不一样\r\n#b#e1~10#n#k枚#v"+costitem+"#时：每枚#v"+costitem+"#增加#b#e3%#n#k中奖概率\r\n#b#e11~20#n#k枚#v"+costitem+"#时：每枚#v"+costitem+"#增加#b#e2%#n#k中奖概率\r\n#b#e21~40#n#k枚#v"+costitem+"#时：每枚#v"+costitem+"#增加#b#e1%#n#k中奖概率\r\n一次最多投入#b#e40#n#k枚#v"+costitem+"#(#b#e70%#n#k中奖概率)\r\n例1：投入#b#e31#n#k枚#v"+costitem+"#时，有#b#e10x3%+10x2%+11x1%=61%#n#k的中奖概率\r\n例2：投入#b#e11#n#k枚#v"+costitem+"#时，有#b#e10x3%1x2%=32%#n#k的中奖概率")
			cm.dispose();
		}else if(selection==1){
			cm.sendGetNumber("#e#d请输入投入的数量#r[1~40]",0,1,40)
		}	
	}
	else if (status==2){
			cost = selection;
			if(cost >0 && cost <=10){
				chance = cost * 3
			}else if(cost > 10 && cost <=20){
				chance = (cost - 10) * 2 +30
			}else if(cost > 20 && cost <=40){
				chance = (cost - 20) * 1 +50
			}else{
				cm.sendOk("奇怪，数量不对呢？")
				cm.dispose();
			}
			
			cm.sendOk("投入"+cost+"枚#v"+costitem+"#，中奖概率"+chance+"%\r\n#b#e【如果想反悔，可以按ESC】#n#k")
		
	}
	else if(status==3){
		/*
		//模拟抽取
		var gettime = 0
		var sumcost = 0
		for(var i=0;i<10000;i++){
			sumcost = sumcost +cost
			var random = Math.floor(Math.random() * +100);
			if(chance >= random){
				gettime++
			}
		}
		var cost1 = sumcost / gettime
		cm.sendOk("模拟10000次抽取，单次"+cost+"个币，共消耗"+sumcost+"币，获得"+gettime+"个暴君，平均需要"+cost1+"币")
		cm.dispose();
		*/
		if(cm.haveItem(costitem,cost)){
			cm.gainItem(costitem,-cost)
			var random = Math.floor(Math.random() * +100);
			if(chance >= random){
				cm.gainItem(2022466,1)
				cm.sendOk("你运气真好，还真让你抽中了")
				cm.全服黄色喇叭("[暴君抽奖] : 玩家 "+cm.getPlayer().getName()+" 使用"+cost+"个暴君币抽中[暴君自选礼盒]，羡煞他人！")
				if(cost == 1){
					cm.getPlayer().setOneTimeLog("一发入魂成就");
					cm.getPlayer().dropMessage(5,"一发入魂成就达成");
				}
				cm.dispose();
				return
			}else{
				cm.sendOk("没中奖，撒币了吧")
				if(cost == 40){
					cm.getPlayer().setOneTimeLog("暴君绝缘体成就");
					cm.getPlayer().dropMessage(5,"暴君绝缘体成就达成");
				}
				if(cost>=30){
					cm.全服黄色喇叭("[暴君抽奖] : 玩家 "+cm.getPlayer().getName()+" 使用"+cost+"个暴君币都没有抽中[暴君自选礼盒]，真是黑得一匹！")
				}else{
					cm.全服黄色喇叭("[暴君抽奖] : 玩家 "+cm.getPlayer().getName()+" 撒了"+cost+"个币！")
				}
				return
			}
			cm.dispose();
		}
		cm.sendOk("别闹，你没那么多#v"+costitem+"#")
		cm.dispose();
	}

}
