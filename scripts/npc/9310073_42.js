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
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升奖励#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n" 
			text += "      #r每种奖励只能领取一次，达到指定次数方可领取#k  #n\r\n\r\n"					
			
			if(cm.haveItem(5064300,1) && cm.haveItem(5064002,1) == false && cm.haveItem(5064002,2) == false){
					text += "            #L1#"+小烟花+"#b1次飞升奖励(#r可领取#b)#n"+小烟花+"#l\r\n\r\n"//3
				} else if(cm.haveItem(5064002,1)){
					text += "               "+小烟花+"#r#b1次飞升奖励领取完毕#n"+小烟花+"#l\r\n\r\n"//3
			    }else {
					text += "                #L5#"+小烟花+"#b1次飞升奖励"+小烟花+"#l\r\n\r\n"//3
			}
			
			if(cm.haveItem(5064300,3) && cm.haveItem(5064002,1) && cm.haveItem(5064002,2) == false){
					text += "            #L2#"+小烟花+"#b3次飞升奖励(#r可领取#b)#n"+小烟花+"#l\r\n\r\n"//3
				} else if(cm.haveItem(5064002,2)){
					text += "               "+小烟花+"#r#b3次飞升奖励领取完毕#n"+小烟花+"#l\r\n\r\n"//3
				} else {
					text += "                #L6#"+小烟花+"#b3次飞升奖励"+小烟花+"#l\r\n\r\n"//3
			}
			
			if(cm.haveItem(5064300,5) && cm.haveItem(5064002,1) && cm.haveItem(5064002,2) && cm.haveItem(5064002,3) == false){
					text += "            #L3#"+小烟花+"#b5次飞升奖励(#r可领取#b)#n"+小烟花+"#l\r\n\r\n"//3
				} else if(cm.haveItem(5064002,3)){
					text += "               "+小烟花+"#r#b5次飞升奖励领取完毕#n"+小烟花+"#l\r\n\r\n"//3
				} else {
					text += "                #L7#"+小烟花+"#b5次飞升奖励"+小烟花+"#l\r\n\r\n"//3
			}
			
			if(cm.haveItem(5064300,10) && cm.haveItem(5064002,1) && cm.haveItem(5064002,2) && cm.haveItem(5064002,3) && cm.haveItem(5064002,4) == false){
					text += "            #L4#"+小烟花+"#b10次飞升奖励(#r可领取#b)#n"+小烟花+"#l\r\n\r\n"//3
				} else if(cm.haveItem(5064002,4)){
					text += "               "+小烟花+"#r#b10次飞升奖励领取完毕#n"+小烟花+"#l\r\n\r\n"//3
				} else {
					text += "                #L8#"+小烟花+"#b10次飞升奖励"+小烟花+"#l\r\n\r\n"//3
			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.haveItem(5064300,1)){
				cm.gainItem(2450000,1);
				cm.gainItem(3700051,1);//技能
				cm.gainItem(3992025,2500);//
				cm.gainMeso(+20000000);
				cm.gainAp(50);
				cm.gainNX(7500);
				cm.gainItem(5064002,1);
				cm.sendOk("恭喜你，成功领取了1次羽化飞升奖励，获得金币*2000W，幸运的狩猎*1，圣诞大星*2500，属性点50，点券*7500！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "羽化飞升奖励" + " : " + "恭喜『" + cm.getChar().getName() + "』领取了1次羽化飞升奖励，大家恭喜他/她吧！"));
				cm.dispose();
			}else{
				cm.sendOk("#r你的羽化飞升次数并未达到要求，请继续努力！");
				cm.dispose();
			}
        } else if (selection == 2) {
			if (cm.haveItem(5064300,3) && cm.haveItem(5064002,1)){
				cm.gainItem(3992025, 5000);
				cm.gainItem(3700051,1);//技能
				cm.gainItem(4011007, 1);
				cm.gainItem(4011008, 1);
				cm.gainItem(2049116, 20);
				cm.gainMeso(+100000000); //加减金币
				cm.gainAp(150);
				cm.gainNX(15000);
				cm.gainItem(5064002,1);
				cm.sendOk("恭喜你，成功领取了3次羽化飞升奖励，获得金币*1E，圣诞大星*5000，月石*1，锂*1，强化混沌卷*20，属性点*150，点券*1.5W！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "羽化飞升奖励" + " : " + "恭喜『" + cm.getChar().getName() + "』领取了3次羽化飞升奖励，大家恭喜他/她吧！"));
				cm.dispose();
			}else{
				cm.sendOk("#r你的羽化飞升次数并未达到要求，请继续努力！");
				cm.dispose();
			}
        } else if (selection == 3) {
			if (cm.haveItem(5064300,5) && cm.haveItem(5064002,2)){
				cm.gainItem(3700051,1);//技能
				cm.gainItem(3992025, 10000);
				cm.gainItem(4001165, 500);
				//cm.gainItem(2028175, 2);
				cm.gainItem(4310009, 1);
				cm.gainMeso(+200000000); //加减金币
				cm.gainAp(300);
				cm.gainNX(30000);
				cm.gainItem(5064002,1);
				cm.sendOk("恭喜你，成功领取了5次羽化飞升奖励，获得金币*2E，圣诞大星*10000，太阳神的赐福*500，10星必成币*1，属性点*300，点券*3W！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "羽化飞升奖励" + " : " + "恭喜『" + cm.getChar().getName() + "』领取了5次羽化飞升奖励，大家恭喜他/她吧！"));
				cm.dispose();
			}else{
				cm.sendOk("#r你的羽化飞升次数并未达到要求，请继续努力！");
				cm.dispose();
			}
        } else if (selection == 4) {
			if (cm.haveItem(5064300,10) && cm.haveItem(5064002,3)){
				cm.gainItem(3992025, 18888);
				cm.gainItem(3700051,1);//技能
				cm.gainItem(2028083, 2);
				cm.gainItem(4251202, 30);
				cm.gainItem(4001255, 1);
				cm.gainItem(4310027, 45);
				cm.gainMeso(+400000000); //加减金币
				cm.gainAp(500);
				cm.gainNX(60000);
				cm.gainItem(5064002,1);
				cm.sendOk("恭喜你，成功领取了10次羽化飞升奖励，获得金币*4E，圣诞大星*18888，星火武器卷轴自选箱*2，万能水晶*30，15星必成币*1，SSR时装附魔币*45，属性点*500，点券*6W！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "羽化飞升奖励" + " : " + "恭喜『" + cm.getChar().getName() + "』领取了10次羽化飞升奖励，大家恭喜他/她吧！"));
				cm.dispose();
			}else{
				cm.sendOk("#r你的羽化飞升次数并未达到要求，请继续努力！");
				cm.dispose();
			}
        } else if (selection == 5) {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升奖励#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n             #b完成1次羽化飞升可获得以下奖励\r\n\r\n#r#v4031138#*2000W  #v2450000#*1  #v3992025#*2500  属性点*50  点卷*7500\r\n\r\n        并可学习一次技能");
				cm.dispose();
        } else if (selection == 6) {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升奖励#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n             #b完成3次羽化飞升可获得以下奖励\r\n\r\n #r#v4031138#*1E   #v3992025#*5000   #v4011007#*1   #v4011008#*1   #v2049116#*20\r\n\r\n          并可学习一次技能      属性点*150   点卷*15000");
				cm.dispose();
        } else if (selection == 7) {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升奖励#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n             #b完成5次羽化飞升可获得以下奖励\r\n\r\n  #r#v4031138#*2E  #v3992025#*10000  #v4001165#*500    #v4310009#*1\r\n\r\n            并可学习一次技能    属性点*300   点卷*30000");
				cm.dispose();
        } else if (selection == 8) {
				cm.sendOk(""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n                 #r欢迎来到羽化飞升奖励#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n             #b完成10次羽化飞升可获得以下奖励\r\n\r\n#r#v4031138#*4E #v3992025#*18888 #v2028083#*2 #v4251202#*30 #v4310010#*1 #v4310027#*45\r\n\r\n        并可学习一次技能        属性点*500   点卷*60000");
				cm.dispose();
        }
    }
}
