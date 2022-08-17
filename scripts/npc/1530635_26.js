/*
/*
 *兑换
 */
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
var IconA = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var selects; //记录玩家的选项
var num = 0;
var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
		selects = selection;
	    cm.sendGetNumber("" + epp + "" + epp + "" + epp + "" + epp + "\r\n#e#d                  字母Q兑换冒险币\r\n" + epp + "" + epp + "" + epp + "" + epp + "\r\n#e#r- "+xxx+"您好,欢迎使用字母Q兑换冒险币.每个字母Q可以兑换8000W冒险币。\r\n\r\n- "+xxx+"目前拥有字母Q：#d" + cm.getItemQuantity(3994075) + " #k个\r\n\r\n#r#e#r- "+xxx+"注：请输入..最大兑换数量不能超过1000个,否则出错不负责.兑换前请注意兑换后冒险币是否会超出99E",0,0,1000);
        } else if (status == 1) { 
	num = selection;
            if (num <= 0 || isNaN(num)) {
                cm.sendOk("单次输入的数字不能小于1。且不能大于1000.");
                cm.dispose();
	} else if (num > 1000 || isNaN(num)) {
                cm.sendOk("单次输入的数字不能小于1。且不能大于1000.");
                cm.dispose();
	} else {
	    cm.sendYesNo("您好,欢迎使用字母Q兑换冒险币.\r\n兑换#r" + num + "#k个字母Q将会获得#r" + num * 8000+ "#k万冒险币\r\n请确认后使用。"); 
	    } 
        } else if (status == 2) { 
	if (cm.haveItem(3994075,num)) { 
		   cm.gainMeso(num * 80000000);
		   cm.gainItem(3994075,-num);
           cm.worldSpouseMessage(0x2,"[皇冠理财字母Q兑换金币] ：恭喜玩家 "+ cm.getChar().getName() +" 在兑换中心使用 "+ num  +" 个字母Q兑换了 "+ num *8000 +" 万冒险币");
           cm.sendOk("成功增加了"+num * 8000+"万冒险币。");
           cm.dispose();
        } else {
           cm.sendOk("您没有足够的字母Q.请检查.");
           cm.dispose();
	 }
      } 
   }
}

