var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fUI/UIWindow/Quest/icon0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 爱心1 = "#fEffect/CharacterEff/1032063/0/0#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";

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
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n           "+小烟花+"#r欢迎来到月月冒险岛等级奖励"+小烟花+"\r\n\r\n"; 					
			
			if(cm.haveItem(5064100,1) == false && cm.getLevel() > 29){
					text += "              #L1#"+小烟花+"#b等级奖励lv.30#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,1)){
					text += "             "+小烟花+"#r#b等级奖励lv.30领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L1#"+小烟花+"#b等级奖励lv.30#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,1) && cm.haveItem(5064100,2) == false && cm.haveItem(5064100,3) == false && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 49){
					text += "              #L2#"+小烟花+"#b等级奖励lv.50#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,2)){
					text += "             "+小烟花+"#r#b等级奖励lv.50领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L2#"+小烟花+"#b等级奖励lv.50#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,2) && cm.haveItem(5064100,3) == false && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 69){
					text += "              #L3#"+小烟花+"#b等级奖励lv.70#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,3)){
					text += "             "+小烟花+"#r#b等级奖励lv.70领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L3#"+小烟花+"#b等级奖励lv.70#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,3) && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 99){
					text += "              #L4#"+小烟花+"#b等级奖励lv.100#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,4)){
					text += "             "+小烟花+"#r#b等级奖励lv.100领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L4#"+小烟花+"#b等级奖励lv.100#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,4) && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 119){
					text += "              #L5#"+小烟花+"#b等级奖励lv.120#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,5)){
					text += "             "+小烟花+"#r#b等级奖励lv.120领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L5#"+小烟花+"#b等级奖励lv.120#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,5) && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 149){
					text += "              #L6#"+小烟花+"#b等级奖励lv.150#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,6)){
					text += "             "+小烟花+"#r#b等级奖励lv.150领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L6#"+小烟花+"#b等级奖励lv.150#n"+小烟花+"#l\r\n"//3
			}
			
			
			if(cm.haveItem(5064100,6) && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 179){
					text += "              #L7#"+小烟花+"#b等级奖励lv.180#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,7)){
					text += "             "+小烟花+"#r#b等级奖励lv.180领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L7#"+小烟花+"#b等级奖励lv.180#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,7) && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 199){
					text += "              #L8#"+小烟花+"#b等级奖励lv.200#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,8)){
					text += "             "+小烟花+"#r#b等级奖励lv.200领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L8#"+小烟花+"#b等级奖励lv.200#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,8) && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 219){
					text += "              #L9#"+小烟花+"#b等级奖励lv.220#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,9)){
					text += "             "+小烟花+"#r#b等级奖励lv.220领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L9#"+小烟花+"#b等级奖励lv.220#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064100,9) && cm.haveItem(5064100,10) == false && cm.getLevel() > 239){
					text += "              #L10#"+小烟花+"#b等级奖励lv.240#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064100,10)){
					text += "             "+小烟花+"#r#b等级奖励lv.240领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "              #L10#"+小烟花+"#b等级奖励lv.240#n"+小烟花+"#l\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.haveItem(5064100,1) == false && cm.getLevel() > 29){
				//cm.getPlayer().setBossLog("djjl1",1,1)
				cm.gainItem(2450000,1);//双倍经验
				cm.gainItem(2000005,100);//超级药水
				cm.gainMeso(+1000000); //游戏币
				cm.gainDY(2000);
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.30，获得幸运的狩猎*1，超级药水*100，游戏币*100万，抵用卷*2000！");
				cm.sendOk("领取了等级奖励lv.30，获得幸运的狩猎*1，超级药水*100，游戏币*100万，抵用卷*2000！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.30后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "   #v2450000#*1  #v2000005#*100  #v4031138#*100W  #v5440000#抵用卷*2000#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 2) {
			if (cm.haveItem(5064100,1) && cm.haveItem(5064100,2) == false && cm.haveItem(5064100,3) == false && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 49){
				//cm.getPlayer().setBossLog("djjl2",1,1)
				cm.gainItem(2022530, 1);//双倍爆率
				cm.gainItem(5150040, 3);//皇家发型
				cm.gainItem(2049100, 5);//混沌卷轴
				cm.gainMeso(+2000000); //游戏币
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.50，获得迎春花花语*1，皇家发型卡*3，混沌卷轴*5，游戏币*200万！");
				cm.sendOk("领取了等级奖励lv.50，获得迎春花花语*1，皇家发型卡*3，混沌卷轴*5，游戏币*200万！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.50后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "      #v2022530#*1   #v5150040#*3   #v2049100#*5   #v4031138#*200W#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 3) {
			if (cm.haveItem(5064100,2) && cm.haveItem(5064100,3) == false && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 69){
			//cm.getPlayer().setBossLog("djjl3",1,1)
				cm.gainItem(4001165,10);//太阳神的赐福
				//cm.gainItem(2370000,25);//孙子兵法10W经验
				cm.gainItem(5390001,20);//绚烂情景喇叭
				cm.gainItem(2022171,10);//草莓味果糖
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.70，获得太阳神的赐福*10，绚烂情景喇叭*20，草莓味果糖*10！");
				cm.sendOk("领取了等级奖励lv.70，获得太阳神的赐福*10，，绚烂情景喇叭*20，草莓味果糖*10！");
				cm.dispose();	
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.70后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "      #v4001165#*10     #v5390001#*20   #v2022171#*10#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 4) {
			if (cm.haveItem(5064100,3) && cm.haveItem(5064100,4) == false && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 99){
				//cm.getPlayer().setBossLog("djjl4",1,1)
				cm.gainItem(4001165,100);//太阳神的赐福
				cm.gainItem(2049100,5);//混沌卷轴
				cm.gainItem(4031456,50);//枫叶珠
				cm.gainItem(4000487,500);//钓鱼兑换币
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.100，太阳神的赐福*100，混沌卷轴*5，枫叶珠*50，钓鱼兑换币*500！");
				cm.sendOk("领取了等级奖励lv.100，太阳神的赐福*100，混沌卷轴*5，枫叶珠*50，钓鱼兑换币*500！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.100后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "      #v4001165#*100   #v2049100#*5   #v4031456#*50   #v4000487#*500#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 5) {
			if (cm.haveItem(5064100,4) && cm.haveItem(5064100,5) == false && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 119){
				//cm.getPlayer().setBossLog("djjl5",1,1)
				cm.gainItem(3992025,200);//圣诞大星
				cm.gainItem(4310025,50);//勇闯禁地纪念币
				cm.gainItem(4001126,500);//枫叶
				cm.gainItem(4170012,1);//必成卷兑换蛋
				cm.gainMeso(+5000000);//游戏币
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.120，获得圣诞大星*200，勇闯禁地纪念币*50，枫叶*500，必成卷兑换蛋*1，游戏币*500万！");
				cm.sendOk("领取了等级奖励lv.120，获得圣诞大星*200，勇闯禁地纪念币*50，枫叶*500，必成卷兑换蛋*1，游戏币*500万！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.120后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "#v3992025#*200   #v4310025#*50   #v4001126#*500   #v4170012#*1   #v4031138#*500W#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 6) {
			if (cm.haveItem(5064100,5) && cm.haveItem(5064100,6) == false && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 149){
				//cm.getPlayer().setBossLog("djjl6",1,1)
				cm.gainItem(3992025,200);//圣诞大星
				//cm.gainItem(2370000,50);//孙子兵法10W
				cm.gainItem(4005004,30);//黑暗水晶
				cm.gainItem(4310143,25);//BOSS币
				cm.gainItem(4000313,50);//黄金枫叶
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.150，获得圣诞大星*200，黑暗水晶*30，BOSS币*25，黄金枫叶*50！");
				cm.sendOk("领取了等级奖励lv.150，获得圣诞大星*200，，黑暗水晶*30，BOSS币*25，黄金枫叶*50！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.150后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "#v3992025#*200      #v4005004#*30   #v4310143#*25   #v4000313#*50#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 7) {
			if (cm.haveItem(5064100,6) && cm.haveItem(5064100,7) == false && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 179){
				//cm.getPlayer().setBossLog("djjl7",1,1)
				cm.gainItem(3992025,400);//圣诞大星
				cm.gainItem(2049100,10);//混沌卷轴
				cm.gainItem(4170012,1);//必成卷兑换蛋
				cm.gainItem(4000463,20);//七七中介币
				cm.gainItem(2450000,1);//双倍经验
				//cm.gainItem(5211060,1,1);//三倍
				cm.gainAp(10);
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.180，获得圣诞大星*400，混沌卷轴*10，必成卷兑换蛋*1，七七中介币*20，幸运的狩猎*1，属性点*10！");
				cm.sendOk("领取了等级奖励lv.180，获得圣诞大星*400，混沌卷轴*10，必成卷兑换蛋*1，七七中介币*20，幸运的狩猎*1，属性点*10！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.180后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "           #v3992025#*400     #v2049100#*10     #v4170012#*1#l#k\r\n"
				text += "        #v4000463#*20     #v2450000#*1    #v5211060#*1   属性点*10#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 8) {
			if (cm.haveItem(5064100,7) && cm.haveItem(5064100,8) == false && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 199){
				//cm.getPlayer().setBossLog("djjl8",1,1)
				cm.gainItem(3992025,400);//圣诞大星
				cm.gainItem(4001165,30);//太阳神的赐福
				cm.gainItem(4251202,5);//万能水晶
				cm.gainItem(2022678,2);//黑龙箱子
				cm.gainItem(4031456,100);//枫叶珠
				cm.gainAp(10);
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.200，获得圣诞大星*400，太阳神的赐福*30，万能水晶*5，黑龙箱子*2，枫叶珠*100，属性点*10！");
				cm.sendOk("领取了等级奖励lv.200，获得圣诞大星*400，太阳神的赐福*30，万能水晶*5，黑龙箱子*2，枫叶珠*100，属性点*10！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.200后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "           #v3992025#*400     #v4001165#*30     #v4251202#*5#l#k\r\n"
				text += "           #v2022678#*2      #v4031456#*100     属性点*10#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 9) {
			if (cm.haveItem(5064100,8) && cm.haveItem(5064100,9) == false && cm.haveItem(5064100,10) == false && cm.getLevel() > 219){
				//cm.getPlayer().setBossLog("djjl9",1,1)
				cm.gainItem(3992025,400);//圣诞大星
				cm.gainItem(4002000,5);//蜗牛邮票
				cm.gainItem(4002001,5);//蓝蜗牛邮票
				cm.gainItem(4002002,5);//木妖邮票
				cm.gainItem(4002003,5);//绿水灵邮票
				cm.gainItem(4011007,1);//月石
				cm.gainItem(4251202,5);//万能水晶
				//cm.gainItem(5211060,1,1);//三倍
				cm.gainAp(10);
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.220，获得圣诞大星400个，4种邮票各*5，月石*1，万能水晶*5，属性点10点！");
				cm.sendOk("领取了等级奖励lv.220，获得圣诞大星400个，4种邮票各*5，月石*1，万能水晶*5，属性点10点！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.220后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "       #v3992025#*400   #v4002000#*5   #v4002001#*5   #v4002002#*5#l#k\r\n"
				text += "     #v4002003#*5   #v4011007#*1   #v4251202#*5   #v5211060#*1  属性点*10#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 10) {
			if (cm.haveItem(5064100,9) && cm.haveItem(5064100,10) == false && cm.getLevel() > 239){
				//cm.getPlayer().setBossLog("djjl10",1,1)
				cm.gainItem(3992025,400);//圣诞大星
				cm.gainItem(2022564,3);//品客缤的礼箱
				cm.gainItem(2049116,5);//强化混沌卷轴
				cm.gainItem(4011008,1);//锂
				cm.gainItem(4001165,50);//太阳神的赐福
				//cm.gainItem(5211060,1,1);//三倍
				cm.gainAp(10);
				cm.gainItem(5064100,1);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了等级奖励lv.240，获得圣诞大星*400，锂*1，品客缤的礼箱*3，强化混沌卷轴*5，太阳神的赐福*50，属性点10点！");
				cm.sendOk("领取了等级奖励lv.240，获得圣诞大星*400，锂*1，品客缤的礼箱*3，强化混沌卷轴*5，太阳神的赐福*50，属性点10点！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b达到lv.240后可领取以下奖励#n"+小烟花+"#l#k\r\n\r\n"
				text += "           #v3992025#*400     #v2022564#*3     #v2049116#*5#l#k\r\n"
				text += "         #v4011008#*1      #v4001165#*50     #v5211060#*1  属性点*10#l#k\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } 
    }
}
