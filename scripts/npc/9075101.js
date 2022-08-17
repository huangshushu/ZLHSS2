/*
 脚本功能：拍卖脚本V2版
 */

var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var un = "#fUI/CN_Chat.img/roomList/BtPageup/normal/0#";  //红星花
var a = 0;
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
    if (status == 0) {
            var selStr = "\r\n";
		selStr +="#e#r#L0#"+un+"开通翅膀#l  #n";		
		selStr +="#e#r#L1#"+un+"#v1102000#强化#l#n";
		selStr +="#e#r#L2#"+un+"#v1102001#强化#l#n\r\n\r\n";
		selStr +="#e#r#L3#"+un+"#v1102002#强化#l#n";
		selStr +="#e#r#L4#"+un+"#v1102003#强化#l#n";
		selStr +="#e#r#L5#"+un+"#v1102004#强化#l#n\r\n\r\n            ";	
		selStr +="#e#r#L6#"+un+"火焰羽毛获得方式#l#n\r\n\r\n";	
		selStr +="            #e#r#L7#"+un+"#i1102724#替换#i1102039##l#n";		
;
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if (cm.getBossLog("领取翅膀",1) == 0 && cm.getSpace(1) > 1) {
	    cm.gainItem(1102000, 1);
	    cm.setBossLog("领取翅膀",1);
	    cm.worldSpouseMessage(0x20, "『进阶翅膀』 : 玩家 " + cm.getChar().getName() + " 领取了初阶段翅膀开启了进阶之路。");
	    cm.sendOk(" #b成功领取了初阶段翅膀一个。请妥善保管每次进阶的翅膀。下次再无法从我这里领取初级翅膀了。");
            cm.dispose();
	} else {
	    cm.sendOk("#b您已经领取过。或者背包已满。#k\r\n\r\n"+aaa+"\r\n- #d#e进阶翅膀说明#k#n\r\n\r\n#b1). 请点击领取翅膀领取初阶翅膀。\r\n#r2). 请把要进阶的翅膀放在背包第一格。");
	    cm.dispose();
	}
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9000062,"翅膀升级1");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000062,"翅膀升级2");
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9000062,"翅膀升级3");
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9000062,"翅膀升级4");
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9000062,"翅膀升级5");
            break;
	case 6:
	    cm.sendOk("#b您当前一共有火焰羽毛： #r" + cm.getItemQuantity("4310143") + " #b个#k\r\n\r\n\r\n- #d#e火焰羽毛获得方式#k#n\r\n\r\n#b1. 怪物掉落。\r\n#r2. 每日任务。\r\n");
	    cm.dispose();
	    break;
        case 7:
			if (cm.getItemQuantity(1102724) == 1 && cm.getSpace(1) > 1) {
			cm.gainItem(1102724, -1);
			var ii = cm.getItemInfo();
			var toDrop = cm.getNewEquip(1102039); // 生成一个Equip类 
                        toDrop.setStr(450); //装备力量
                        toDrop.setDex(450); //装备敏捷
                        toDrop.setInt(450); //装备智力
                        toDrop.setLuk(450); //装备运气
                        toDrop.setMatk(450); //魔法攻击
                        toDrop.setWatk(450); //攻击攻击 
			cm.addFromDrop(toDrop);
			cm.sendOk("替换完成！");
			cm.dispose();
                                } else {
			cm.sendOk("您的背包没有#v1102724#\r\n或者装备栏空间不足，请整理后重新制作！");
			cm.dispose();

			}


        }
    }
}

