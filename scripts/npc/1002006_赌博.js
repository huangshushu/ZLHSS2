/*
* 赌博21点
*
*
*/

var text = "";
var text1 = "";
var score = 0;
var selectionMeso = 0;
var zhuangScore = 0;
var xianScore = 0;
var paiArray = Array(1,3,4,5);
var paiArray2 = Array(3,5,6,7);
var ran = -1;


function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status == 0 && mode == 0) {
		
			cm.sendOk("欢迎下次光临。");
			cm.dispose();
			return;                    
		}
		if (mode == 1) {
			status++;
		}
		else {
			 if (status == 0) {
                cm.sendNext("欢迎下次光临。");
                cm.dispose();
            }
			status--;
		} 
		if (status == 0) {
			score = cm.getNX();
			text += "#fUI/UIWindow/Quest/icon3/6# ";
			text += "我这里可以玩21点,";
			text += "您当前剩余点券为 #r" + score + "#k";
			text += " #fUI/UIWindow/Quest/icon3/6#\r\n";
			text += "#L0# 开始游戏 #l\r\n";
			cm.sendSimple(text);
		} 
		else if (status == 1) { 
			
			if(selection == 0){		
	
				cm.sendGetNumber("赌友你要下注多少？\r\n", 1, 1000,10000000);
				
			}else if(selection == 1){
				text1 += "#fUI/UIWindow/Quest/icon3/6# ";
				text1 += "玩法说明：";
				text1 += " #fUI/UIWindow/Quest/icon3/6#\r\n";
				text1 += "    庄家的点数会在15点-22点之间（庄家也有可能爆掉），你有4次要牌的机会，如果您的点数大于庄家的点数即赢得你下注的金额，如果大于21点或者小于等于庄家的点数，即输掉你所下注的金额，10、J、Q、K都算十点，小赌怡情，大赌伤人，请慎重。";
				cm.sendOk(text1);
				cm.dispose();
			}
		}
		//-------------第一次要牌-----------------//
		else if (status == 2) {
			selectionNX = selection;
			if(selectionNX > score){
				cm.sendOk("穷鬼。。。");
				cm.dispose();
			}else{
				cm.gainNX(-selectionNX);
				zhuangScore = parseInt(Math.random()*8+15); 
				for(var i = 0; i < 2; i++){
					if(zhuangScore >= 22 || zhuangScore <= 17){
						zhuangScore = parseInt(Math.random()*8+15); 
					}
				}
				
				ran = parseInt(Math.random()*paiArray.length);
				xianScore = paiArray2[ran];
				var text2 = "";
				text2 += "#n#k,您目前的点数为： #r#e" + xianScore + "#n#k ，";
				text2 += "您继续要牌吗？ \r\n";
				text2 += "#L2# 要  \r\n";
				text2 += "#L3# 不要  \r\n";
				cm.sendSimple(text2);
			}
			
		}
		
		//------------第二次要牌------------------//
		
		else if (status == 3) { 
			if(selection == 2){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("对不起，您的数字大于21，您输了。");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();	
				}else{
					text2 = "";
					text2 += "#n#k,您目前的点数为： #r#e" + xianScore + "#n#k ，";
					text2 += "您继续要牌吗？ \r\n";
					text2 += "#L4# 要  \r\n";
					text2 += "#L5# 不要  \r\n";
					cm.sendSimple(text2);
				}
			}
			else if(selection == 3){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您输了。");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您赢了。");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[搏一搏] : 恭喜 " + cm.getPlayer().getName() + " 点券搏一搏赢了" );
					cm.dispose();	
				}
			}
			
			
		}
		//-----------第三次要牌---------------
		else if (status == 4) { 
			if(selection == 4){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("对不起，您的数字大于21，您输了。");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();	
				}else{
					text2 = "";
					text2 += "#n#k,您目前的点数为： #r#e" + xianScore + "#n#k ，";
					text2 += "您继续要牌吗？ \r\n";
					text2 += "#L6# 要  \r\n";
					text2 += "#L7# 不要  \r\n";
					cm.sendSimple(text2);
				}
			}
			else if(selection == 5){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您输了。");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您赢了。");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[搏一搏] : 恭喜 " + cm.getPlayer().getName() + " 点券搏一搏赢了" );
					cm.dispose();	
				}
			}
			
			
		}
		
		//--------第四次要牌----------
		else if (status == 5) { 
			if(selection == 6){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("对不起，您的数字大于21，您输了。");
					//cm.gainNX(-selectionNX);
											cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();	
				}else{
					if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
						cm.sendOk("庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您输了。");
						//cm.gainNX(-selectionNX);
						cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
						cm.dispose();
					}else{
						cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您赢了。");
						cm.gainNX(selectionNX * 2);
						cm.worldMessage(6, "[搏一搏] : 恭喜 " + cm.getPlayer().getName() + " 点券搏一搏赢了" );
						cm.dispose();	
					}
				}
				
			}
			else if(selection == 7){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您输了。");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[搏一搏] :  " + cm.getPlayer().getName() + " 点券搏一搏输了" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  庄家的点数为 #r#e"+zhuangScore+"#n#k,您的点数为 #r#e"+xianScore+"#n#k,您赢了。");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[搏一搏] : 恭喜 " + cm.getPlayer().getName() + " 点券搏一搏赢了" );
					cm.dispose();	
				}
			}
			
			
		}
		//------------结束-------------
		
	}
}