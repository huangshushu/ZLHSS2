/* 功能:旗帜奖励
   *************
*/
var status = 0;
var GP = Array(100,10000,8000,6000,4000,2000);
var rewarditem = Array(
	Array(1,4001839,10000),//星星
	Array(1,2614064,2),//破功
	Array(1,4031997,15),//蘑菇
	Array(1,2049387,1),//星卷

	Array(2,4001839,8000),//星星
	Array(2,2614064,1),//破功
	Array(2,2614063,1),//破功50%
	Array(2,4031997,15),//蘑菇
	Array(2,2049386,1),//星卷


	Array(3,4001839,6000),//星星
	Array(3,2614064,1),///破功
	Array(3,2614063,1),//破功50%
	Array(3,4031997,10),//蘑菇
	Array(3,2049385,1),//星卷

	Array(4,4001839,4000),//星星
	Array(4,2614064,1),//破功
	Array(4,2614062,1),//破功30%
	Array(4,4031997,5),//蘑菇


	Array(5,4001839,2000),//星星
	Array(5,2614064,1), //破功
	Array(5,2614062,1), //破功30%破功
	Array(5,4031997,5),//蘑菇

	Array(6,4001839,2000),//星星
	Array(6,2614064,1), //破功
	Array(6,2614062,1), //破功30%破功
	Array(6,4031997,5),//蘑菇

	Array(7,4001839,2000),//星星
	Array(7,2614064,1), //破功
	Array(7,2614062,1), //破功30%破功
	Array(7,4031997,5),//蘑菇

	Array(8,4001839,2000),//星星
	Array(8,2614064,1), //破功
	Array(8,2614062,1), //破功30%破功
	Array(8,4031997,5),//蘑菇

	Array(9,4001839,2000),//星星
	Array(9,2614064,1), //破功
	Array(9,2614062,1), //破功30%破功
	Array(9,4031997,5),//蘑菇

	Array(10,4001839,2000),//星星
	Array(10,2614064,1), //破功
	Array(10,2614062,1), //破功30%破功
	Array(10,4031997,5),//蘑菇

	Array(11,4001839,2000),//星星
	Array(11,2614064,1), //破功
	Array(11,2614062,1), //破功30%破功
	Array(11,4031997,5),//蘑菇

	Array(12,4001839,2000),//星星
	Array(12,2614064,1), //破功
	Array(12,2614062,1), //破功30%破功
	Array(12,4031997,5),//蘑菇

	Array(13,4001839,2000),//星星
	Array(13,2614064,1), //破功
	Array(13,2614062,1), //破功30%破功
	Array(13,4031997,5),//蘑菇

	Array(14,4001839,2000),//星星
	Array(14,2614064,1), //破功
	Array(14,2614062,1), //破功30%破功
	Array(14,4031997,5),//蘑菇

	Array(15,4001839,2000),//星星
	Array(15,2614064,1), //破功
	Array(15,2614062,1), //破功30%破功
	Array(15,4031997,5),//蘑菇

	Array(16,4001839,2000),//星星
	Array(16,2614064,1), //破功
	Array(16,2614062,1), //破功30%破功
	Array(16,4031997,5),//蘑菇

	Array(17,4001839,2000),//星星
	Array(17,2614064,1), //破功
	Array(17,2614062,1), //破功30%破功
	Array(17,4031997,5),//蘑菇

	Array(18,4001839,2000),//星星
	Array(18,2614064,1), //破功
	Array(18,2614062,1), //破功30%破功
	Array(18,4031997,5),//蘑菇

	Array(19,4001839,2000),//星星
	Array(19,2614064,1), //破功
	Array(19,2614062,1), //破功30%破功
	Array(19,4031997,5),//蘑菇

	Array(20,4001839,2000),//星星
	Array(20,2614064,1), //破功
	Array(20,2614062,1), //破功30%破功
	Array(20,4031997,5)//蘑菇



);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        } 
    else if (status == 0) {
		var em = cm.getEventManager("PQS");
		var selStr ="#b#e                   此次活动排名:#k\r\n";
		for (var i =1;i<21 ;i++ ){
			selStr += "               第 "+i+" 名玩家：#r"+em.getProperty("rank"+i)+"#k\r\n\r\n";
		}
		for (var d =1;d<21 ;d++ ){
			if (em.getProperty("rank"+d)==""+cm.getName()){
				selStr +="     #r#L0#领取排名奖励#l";
				break;
			}
		}
			selStr +="     #b#L1#查看排名奖励#l\r\n\r\n";
			selStr +="     #r#L2##b领取混子奖励#r(前5切勿点击,后果自负)#l\r\n";
        cm.sendSimpleS(selStr,2);
    } else if (status == 1) {
        if (selection==0) {
			var em = cm.getEventManager("PQS");
			for (var b=1;b<21 ;b++ ){
				if (em.getProperty("rank"+b)==cm.getName()){
					for (var a =0;a<rewarditem.length ; a++){
						if (rewarditem[a][0]==b){
							cm.gainItem(rewarditem[a][1],rewarditem[a][2]);
						}
					}
					break;
				}
			}
			em.setProperty("rank"+b,"0");
			em.setProperty("Round"+cm.getName(),"0");
			cm.setEventCount("旗帜次数1");
			cm.gainGP(GP[b]);
			cm.warp(101050000,0);
cm.worldSpouseMessage(0x17,"[跑旗活动] 恭喜玩家 "+ cm.getChar().getName() +" 在跑旗活动中获得大量奖励。");
cm.worldSpouseMessage(0x17,"[跑旗活动] 恭喜玩家 "+ cm.getChar().getName() +" 在跑旗活动中获得大量奖励。");
cm.worldSpouseMessage(0x17,"[跑旗活动] 恭喜玩家 "+ cm.getChar().getName() +" 在跑旗活动中获得大量奖励。");
			cm.dispose();
		}
		if (selection==1) {
			var text ="\t\t       #e#r奖励中心(#b6-20名奖励一致#r)#k\r\n";
			for (var i=1;i<7 ;i++ ){
				text += "#L"+i+"#查看#r第"+i+"名#k的物品奖励\r\n\r\n";
			}
			cm.sendSimpleS(text,2);
		}
		if (selection==2){
			if (cm.getEventCount("旗帜次数") == 1 && cm.getEventCount("旗帜次数1") == 0){
			var em = cm.getEventManager("PQS");
			em.setProperty("rank"+b,"0");
			em.setProperty("Round"+cm.getName(),"0");
			cm.gainGP(GP[0]);
			cm.gainItem(4001839,2000);
			cm.setEventCount("旗帜次数1");
			cm.gainItem(2614062,1);
			cm.warp(101050000,0);
cm.worldSpouseMessage(0x17,"[跑旗活动] 恭喜玩家 "+ cm.getChar().getName() +" 在跑旗活动中获得混子奖励。");
                        cm.sendOk("#e#r混子奖励为:#i4001839#X2000   #i2614062#X1");
			cm.dispose();
			} else {
			cm.warp(101050000,0);
cm.sendOk("#e#r混子的前提是必须完成一圈,而然你没有!\r\n所以你将一无所有的被传送出去");
			cm.dispose();
				}
}
    }else if(status == 2){
		var textt = "\t\t\t\t\t\t#b奖励如下#k\r\n\r\n";
		for (var s=0;s<rewarditem.length ;s++ ){
			if(rewarditem[s][0]==selection){
				textt += "物品:#v"+rewarditem[s][1]+"# 数量：#r"+rewarditem[s][2]+"#k\r\n\r\n";
			}
		}
		cm.sendSimpleS(textt,2);
		cm.dispose();
	}
}
