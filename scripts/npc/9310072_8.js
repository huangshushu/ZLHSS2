var 红色小爱心1 ="#fEffect/CharacterEff/1112905/0/1#";
var 浅黄小爱心 ="#fMap/MapHelper/weather/balloon/5#";
var 黑色小爱心 ="#fMap/MapHelper/weather/sweetHeart/0#";
var 黑色小爱心1 ="#fMap/MapHelper/weather/sweetHeart/1#";
var 黑色小爱心2 ="#fMap/MapHelper/weather/sweetHeart/2#";
var 黑色小爱心3 ="#fMap/MapHelper/weather/sweetHeart/3#";
var 淡黄小爱心 ="#fMap/MapHelper/weather/sweetHeart/5#";
var 蝴蝶 = "#fEffect/CharacterEff/1051366/1/0#"; // 蓝色蝴蝶
var 草莓 = "#fUI/GuildMark/Mark/Plant/00003000/1#"; // 红色草莓
var 草莓1 = "#fUI/GuildMark/Mark/Plant/00003000/10#"; // 淡蓝色草莓
var 草莓2 = "#fUI/GuildMark/Mark/Plant/00003000/11#"; // 紫色草莓
var 草莓3 = "#fUI/GuildMark/Mark/Plant/00003000/15#"; // 白色草莓
var 草莓4 = "#fUI/GuildMark/Mark/Plant/00003000/3#"; // 黄色草莓
var 草莓5 = "#fUI/GuildMark/Mark/Plant/00003000/8#"; // 绿色草莓
function start() {
	
	var texts = "     邮票无限强化 不消耗上卷次数 每天各10次#l\r\n";
	    //texts += "#L100##d130武器火花 #v2048717##l    #L200##d灵魂宝珠附魔#v2591008##l\r\n";
	    //texts += "#L0##d"+蝴蝶+"FFN武器火花 #v2048717##l   #L8##d"+蝴蝶+"FFN防具火花 #v2048716##l\r\n";
	    //texts += "#L10##r宿命武器卷轴#v2046913##l    #L12##r星火混沌卷轴#v2613000##l\r\n";
		//texts += "#L8##d"+蝴蝶+"FFN防具火花强化#v2048716##l\r\n";
		texts += "#L1##d暴君腰带强化#v1132174##l    #L2##d暴君披风强化#v1102481##l\r\n\r\n";

		texts += "#L3##d暴君鞋子强化#v1072743##l     #L4##d暴君手套强化#v1082543##l\r\n";
		//texts += "#L4##d"+蝴蝶+"暴君手套强化#v1082543##l\r\n";
		//texts += "#L5##d阿尔耳环强化#v1032101##l    #L2##d混沌瞳印强化#v1022232##l\r\n";
		//texts += "#L2##d"+蝴蝶+"混沌瞳印强化#v1022232##l\r\n";
		//texts += "#L6##d勋章潜能强化#v1142541##l    #L7##d副本戒指强化#v1113076##l\r\n";
		//texts += "#L200##d"+蝴蝶+"灵魂宝珠附魔#v2591008##l\r\n";
		//texts += "#L7##d"+蝴蝶+"副本戒指强化#v1113076##l\r\n";
		//texts += "#L5##k"+草莓+"#d特殊装备强化#l\r\n";
		//texts += "#L522##k"+草莓+"#d时装觉醒#l\r\n";
		//texts += "#L6#"+草莓1+"#r[惊人混沌卷]强化中心#k\r\n\r\n";
		//texts += "#L11#"+草莓1+"#r130级毕业武器攻击随机重置 重置后再强化上卷#k\r\n\r\n";
		//texts += "#L10#"+草莓1+"#r[惊人混沌卷]强化中心#k\r\n\r\n";
		//texts += "#L4#购买#k[星之力]#k*300    价格: #k5000#k 点券#l\r\n";
		//texts += "#L7#购买#k[星之力]#k*900    价格: #k15000#k 点券#l\r\n";
		//texts += "#L9#购买#k[幸运日]#v2530004##k*5  价格: #k10000#k 点券#l\r\n";
		
		cm.sendSimple(texts);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
		cm.openNpc(9310072,81);
	}else if (selection == 2){
		cm.openNpc(9310072,82);
	}else if (selection == 3){
		cm.openNpc(9310072,83);
	}else if (selection == 4){
		cm.openNpc(9310072,84);
	}else if (selection == 5){
		cm.openNpc(9310014,5);	
	}else if (selection == 6){
		cm.openNpc(1092015,20);
	}else if (selection == 7){
		cm.openNpc(1092015,21);
	}else if (selection ==8){
		cm.openNpc(2041008,1);
	}else if (selection == 0){
		cm.openNpc(9310014,6);
	}else if (selection ==80){
		cm.openNpc(1092015,6);
	}else if (selection ==11){
		cm.openNpc(9310014,11);
	}else if (selection ==10){
		cm.openNpc(1092015,22);
	}else if (selection ==12){
	    cm.openNpc(1092015,23);
	}else if (selection ==100){
	    cm.openNpc(9310014,60);
	}else if (selection ==200){
	    cm.openNpc(9900004,70);
    }else if (selection ==1000){
	    cm.openNpc(9310072,0);
	}else if (selection == 90){
		if (cm.getPlayer().getCSPoints(1) >= 10000) {
               cm.gainNX(-10000);
               cm.gainItem(2530004, 5);
			cm.dispose();
		}else {
			//cm.setmoneyb(-100);
			//cm.gainItem(2061000,1);
			cm.sendOk("点券不足！");
			cm.dispose();
		}
}
}