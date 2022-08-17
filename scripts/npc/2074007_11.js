var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var epp = "#fEffect/SetEff/11/effect/3#"; 
var xxx = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黄星星
var xx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var xxcb = "#fEffect/ItemEff/1102537/effect/ladder/0#";//星星翅膀
var xh = "#fEffect/ItemEff/1048001/0/0#";//初恋
var iconMeso = "#fEffect/ItemEff/1048001/0/0#";//初恋


var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var t = "#d#e女神认证通过可以获得以下福利哦~\r\n\r\n";
			t +="#d#e#i1142574# #t1142574##k[#b全属性：#r100#k #b双攻：#r100#k]\r\n";
			t +="#d#e#i2049389# #t2049389##k x #r1#k\r\n";
			t +="#d#e#i4031997# #t4031997##k x #r188#k\r\n";
			t +="#d#e#i2614069# #t2614069##k x #r10#k\r\n";
			t +="#d#e#i2436626# FFN自选武器箱#k x #r1#k\r\n\r\n";
			t +="#d#e#i2439491# 女神认证每日奖励礼盒#k x #r1#k\r\n\r\n";
			t +="#d#e每日奖励：#i2431256#随机椅子X2、#i2431296#随机坐骑X1、#i2614074#X2、#i4031997#X28、#i5062024#X50、#i2049616#X20、#i2048717#X20、#i2049325#X20、#i2430683#X20、#i2435824#X1、#i4033360#X20、#i4310011#X10、#i2438084#X5\r\n\r\n";
            t +="#e心动不如行动，快来领取吧~\r\n";
			t +="#e认证方式：拿纸写上岛名+游戏id，自拍发给七七即可~";
            cm.sendYesNo(t);	
		} else if (status == 1) {
                if (cm.haveItem(4001158) == false) {
					cm.sendOk("领取失败，请找管理认证后再来领取。");
					cm.dispose();
					} else {
                    cm.gainItem(4001158,-1);
		            var toDrop = cm.getNewEquip(1142574) ; // 生成一个Equip类      
                    toDrop.setStr(100); //装备力量
                    toDrop.setDex(100); //装备敏捷
                    toDrop.setInt(100); //装备智力
                    toDrop.setLuk(100); //装备运气
                    toDrop.setMatk(100); //物理攻击
                    toDrop.setWatk(100); //魔法攻击 
                    toDrop.setOwner("月光女神");
                    cm.addFromDrop(toDrop);
        		    cm.gainItem(2049389,1);//星之力20星强化券
					cm.gainItem(4031997,188);//蘑菇金币
					cm.gainItem(2614069,10);//5000W破攻
					cm.gainItem(2436626,1);//FFN自选武器箱
			        cm.gainItem(2439491,1);//女神认证每日奖励礼盒
                    cm.sendOk("恭喜您成功兑换月光女神勋章.");
			cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 成功兑换女神勋章。", 5120012);
			cm.worldSpouseMessage(0x28, "[女神认证] : 恭喜 " + cm.getChar().getName() + " 成功领取了月光岛女神勋章并获得了大量奖励！！！");
			cm.dispose();
                } 
				}
      }
   }
 