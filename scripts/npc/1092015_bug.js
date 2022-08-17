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
	
	var texts = ""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+"欢迎来到#r" + cm.getChannelServer().getServerName() + "装备升级中心"+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+""+红色小爱心1+"\r\n";
		texts += "#L1##d"+草莓+"装备次数提升#l\r\n";
		texts += "#L2##d"+草莓1+"星之力·强化#l\r\n";
		texts += "#L3##b"+草莓+"进阶星之力#l\r\n";
		texts += "#L8##b"+草莓1+"材料强化#l\r\n";
		//texts += "#L18##b"+草莓1+"多功能强化#l\r\n";
		texts += "#L20##b"+草莓1+"魔化星之力#l\r\n";
		texts += "#L5##k"+草莓+"#d特殊装备强化#l\r\n";
		texts += "#L522##k"+草莓+"#d时装觉醒#l\r\n";
		//texts += "#L6#"+草莓1+"#r[惊人混沌卷]强化中心#k\r\n\r\n";
		texts += "#L4#购买#r[星之力]#k*1000    价格: #r30#k 积分#l\r\n";
		texts += "#L7#购买#r[星之力]#n*1000    价格: #r40000#n 点券#l\r\n";
		texts += "#L9#购买#r[魔化星之力]#n*1000    价格: #r50#n 积分#l\r\n";
		
		cm.sendSimple(texts);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
		cm.openNpc(1092015, 1);
	}else if (selection==2){
		cm.openNpc(1092015, 2);
			}else if (selection==20){
		cm.openNpc(1092015, 20);
	}else if (selection == 3){
		cm.openNpc(1092015,3);
	}else if (selection == 4){
		if(cm.getzb() < 30){
			cm.sendOk("余额不足");
			cm.dispose();
		}else {
			cm.setzb(cm.getzb()-30)
			cm.gainItem(3992025,1000);
			cm.sendOk("购买成功！");
			cm.dispose();
		}
	}else if (selection == 5){
		cm.openNpc(1092015,4);
			}else if (selection == 522){
		cm.openNpc(1092015,522);
	}else if (selection ==6){
		cm.openNpc(1092015,5);
	}else if (selection == 7){
		if (cm.getPlayer().getNX() < 40000) {
			cm.sendOk("点券不足");
			cm.dispose();
		}else {
			cm.gainNX(-40000);
			cm.gainItem(3992025,1000);
			cm.sendOk("购买成功！");
			cm.dispose();
		}
	}else if (selection ==8){
		cm.openNpc(1092015,6);
			}else if (selection ==18){
		cm.openNpc(9900004,2132);
	}else if (selection == 9){
		if(cm.getzb() < 50){
			cm.sendOk("余额不足");
			cm.dispose();
		}else {
			cm.setzb(cm.getzb()-50)
			cm.gainItem(3992010,1000);
			cm.sendOk("购买成功！");
			cm.dispose();
		}
}
}