/*
SnailMS½Å±¾Éú³ÉÆ÷
*/
var Òô·û = "#fEffect/CharacterEff/1003276/0/0#";
var °®ÐÄ = "#fEffect/CharacterEff/1022223/4/0#";
var ºìÉ«¼ýÍ· = "#fUI/UIWindow/Quest/icon6/7#";
var À¶É«½Çµã = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

var finishedCards = 0;

var cards = new Array(
	Array(2381048, 10000000),
	Array(2381049, 10000000),
	Array(2381050, 10000000),
	Array(2381051, 10000000),
	Array(2381052, 10000000),
	Array(2381053, 10000000),
	Array(2381054, 10000000),
	Array(2381055, 10000000),
	Array(2381056, 10000000),
	Array(2381057, 10000000),
	Array(2381058, 10000000),
	Array(2381059, 10000000),
	Array(2381060, 10000000),
	Array(2381061, 10000000),
	Array(2381062, 10000000),
	Array(2381063, 10000000),
	Array(2381064, 10000000),
	Array(2381065, 10000000),
	Array(2381066, 10000000),
	Array(2381067, 10000000),
	Array(2381068, 10000000),
	Array(2381069, 10000000),
	Array(2381070, 10000000),
	Array(2381071, 10000000),
	Array(2381072, 10000000),
	Array(2381073, 10000000),
	Array(2383048, 10000000),
	Array(2384010, 10000000),
	Array(2384037, 10000000),
	Array(2384038, 10000000),
	Array(2384039, 10000000),
	Array(2384040, 10000000),
	Array(2385023, 10000000),
	Array(2388021, 10000000),
	Array(2388027, 10000000),
	Array(2388028, 10000000),
	Array(2388035, 10000000),
	Array(2388044, 10000000),
	Array(2388052, 10000000),
	Array(2388046, 10000000),
	Array(2388053, 10000000),
	Array(2388054, 10000000),
	Array(2388067, 10000000),
	Array(2388068, 10000000),
	Array(2388069, 10000000),
	Array(2388070, 10000000),
	Array(2383049, 10000000),
	Array(2384041, 10000000)
	);

var choosed = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("¶Ô»°½áÊøÓï");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//ÔÚÕâÀï±àÐ´½Å±¾µÚÒ»²½Òª×öµÄÊÂ
		finishedCards = cm.getPlayer().getMonsterBook().getFinishQuantity(0, 5);
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+"\r\n"
	   text += " \t\t\t  #e#r #v4000005#  ÁÖÖÐÐ¡ÎÝ  #v4000005##k#n              \r\n"
		text += ""+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+Òô·û+"\r\n"
		text += "#d\t\t½ÇÉ«Ãû³Æ£º#b" + cm.getName() + "#k\t\tÂú#r5#k¼¶¿¨Æ¬×ÜÊý:#b" + finishedCards + "#k\r\n";
		
		for(var i = 0; i < cards.length; i++){
			text += "#L" + i + "##v" + cards[i][0] + "##r#z" + cards[i][0] + "##bx1#d£¬Ðè#b " + cards[i][1] + "#d½ð±Ò\r\n";   
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		choosed = selection;
		var chrMeso = cm.ÅÐ¶Ï½ð±Ò();
		var maxQuantity = parseInt(chrMeso / cards[choosed][1]);
		var text = "ÄãÑ¡ÔñÁË#v" + cards[choosed][0] + "##z" + cards[choosed][0] + "#£¬ËüµÄµ¥¼ÛÎª#b " + cards[choosed][1] + " #k£¬ÇëÊäÈëÄãÏëÒª¹ºÂòµÄÊýÁ¿£º\r\n";
		
		cm.sendGetNumber(text, 1, 1, maxQuantity);
		
	} else if (status == 2) {
		var quantity = selection;
		if(cm.ÅÐ¶Ï±³°üÏûºÄÀ¸().isFull()){
			cm.sendOk("Çë±£Ö¤ÄãµÄ±³°üÏûºÄÀ¸ÖÁÉÙÓÐ #r1#k ¸ñ¿Õ¼ä¡£");
			cm.dispose();
			return;
		}else if(cm.ÅÐ¶Ï½ð±Ò() < quantity * cards[choosed][1]){
			cm.sendOk("×Ü¹²ÐèÒª#r " + quantity * cards[choosed][1] + " #k½ð±Ò£¬ÄãÉíÉÏµÄ½ð±Ò²»¹»°¡£¡" );
			cm.dispose();
			return;
		}
		cm.ÊÕ½ð±Ò(quantity * cards[choosed][1]);
		cm.gainItem(cards[choosed][0], quantity);
		cm.sendOk("¹§Ï²Äã¹ºÂò³É¹¦£¡");
		
	}else {
		cm.dispose();
		cm.openNpc(9000038, 7);
		return;
	}
}

