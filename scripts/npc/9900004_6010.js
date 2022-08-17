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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n           "+小烟花+"#r欢迎来到月月冒险岛新手任务"+小烟花+"\r\n\r\n"; 					
			text += "         "+小烟花+"#k可获得新手过渡宝石套装全属性10"+小烟花+"\r\n"; 	
			text += "         "+小烟花+"         #r注意依次领取         "+小烟花+"\r\n"; 	
			
			if(cm.haveItem(5064000,1) == false){
					text += "                 #L1#"+小烟花+"#b新手任务1#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,1)){
					text += "                  "+小烟花+"#r#b新手任务1完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L1#"+小烟花+"#b新手任务1#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064000,1) && cm.haveItem(5064000,2) == false && cm.haveItem(5064000,3) == false && cm.haveItem(5064000,4) == false && cm.haveItem(5064000,5) == false && cm.haveItem(5064000,6) == false){
					text += "                 #L2#"+小烟花+"#b新手任务2#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,2)){
					text += "                  "+小烟花+"#r#b新手任务2完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L2#"+小烟花+"#b新手任务2#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064000,2) && cm.haveItem(5064000,3) == false && cm.haveItem(5064000,4) == false && cm.haveItem(5064000,5) == false && cm.haveItem(5064000,6) == false){
					text += "                 #L3#"+小烟花+"#b新手任务3#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,3)){
					text += "                  "+小烟花+"#r#b新手任务3完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L3#"+小烟花+"#b新手任务3#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064000,3) && cm.haveItem(5064000,4) == false && cm.haveItem(5064000,5) == false && cm.haveItem(5064000,6) == false){
					text += "                 #L4#"+小烟花+"#b新手任务4#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,4)){
					text += "                  "+小烟花+"#r#b新手任务4完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L4#"+小烟花+"#b新手任务4#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064000,4) && cm.haveItem(5064000,5) == false && cm.haveItem(5064000,6) == false){
					text += "                 #L5#"+小烟花+"#b新手任务5#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,5)){
					text += "                  "+小烟花+"#r#b新手任务5完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L5#"+小烟花+"#b新手任务5#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.haveItem(5064000,5) && cm.haveItem(5064000,6) == false){
					text += "                 #L6#"+小烟花+"#b新手任务6#n"+小烟花+"#l\r\n"//3
				} else if(cm.haveItem(5064000,6)){
					text += "                  "+小烟花+"#r#b新手任务6完成#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                 #L6#"+小烟花+"#b新手任务6#n"+小烟花+"#l\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.haveItem(4000000,20) && cm.haveItem(4000019,20)){
				cm.gainItem(4000000,-20);//绿蜗牛壳
				cm.gainItem(4000019,-20);//蓝蜗牛壳
				cm.gainItem(1052357,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石外套
				cm.gainItem(2000004,100);//特殊药水
				cm.gainMeso(+1000000); //游戏币
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务1，获得兵书（司马法）*20，特殊药水*100，游戏币*100万，冒险岛宝石外套*1！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务1，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000000#*20    #v4000019#*20#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "          #v1052357#*1    #v2000004#*100    #v4031138#*100W#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 2) {
			if (cm.haveItem(4000002,20) && cm.haveItem(4000017,10)){
				cm.gainItem(4000002,-20);//蝴蝶结
				cm.gainItem(4000017,-10);//猪头
				cm.gainItem(1003242,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石贝雷帽
				cm.gainItem(1072521,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石靴
				cm.gainItem(4011000,1);//青铜
				cm.gainItem(4011001,1);//钢铁
				cm.gainItem(4011002,1);//锂矿石
				cm.gainItem(4011003,1);//朱矿石
				cm.gainItem(4011004,1);//银
				cm.gainItem(4011005,1);//紫矿石
				cm.gainItem(4011006,1);//黄金
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务2，获得青铜*1，钢铁*1，锂矿石*1，朱矿石*1，银*1，紫矿石*1，黄金*1，冒险岛宝石贝雷帽*1！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务2，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000002#*20    #v4000017#*10#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "       #v4011000#*1    #v4011001#*1    #v4011002#*1    #v4011003#*1#l#k\r\n\r\n"
				text += "       #v4011004#*1    #v4011005#*1    #v4011006#*1    #v1003242#*1#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 3) {
			if (cm.haveItem(4000020,20) && cm.haveItem(4000029,20)){
				cm.gainItem(4000020,-20);//野猪尖牙
				cm.gainItem(4000029,-20);//香蕉
				cm.gainItem(1072521,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石靴
				cm.gainItem(1003242,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石贝雷帽
				cm.gainItem(4005000,5);//力量水晶
				cm.gainItem(4005001,5);//智慧水晶
				cm.gainItem(4005002,5);//敏捷水晶
				cm.gainItem(4005003,5);//幸运水晶
				cm.gainItem(4005004,5);//黑暗水晶
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务3，获得力量水晶*5，智慧水晶*5，敏捷水晶*5，幸运水晶*10，黑暗水晶*5，冒险岛宝石靴*1！");
				cm.dispose();	
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务3，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000020#*20    #v4000029#*20#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "#v4005000#*10   #v4005001#*10   #v4005002#*10   #v4005003#*10   #v4005004#*10  #v1072521#*1 #l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 4) {
			if (cm.haveItem(4000059,20) && cm.haveItem(4000060,20)){
				cm.gainItem(4000059,-20);//星光精灵的星块
				cm.gainItem(4000060,-20);//月光精灵的月块
				cm.gainItem(1082314,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石手套
				cm.gainItem(2022530,1);//迎春花花语
				cm.gainItem(2022678,1);//黑龙箱子
				//cm.gainItem(2028074,2);//每日抽奖箱
				cm.gainDY(2000);
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务4，获得迎春花花语*1，黑龙箱子*1，冒险岛宝石手套*1，抵用卷*2000！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务4，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000059#*20    #v4000060#*20#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "     #v2022530#*1   #v2022670#*1   #v1082314#*1  #v5440000#抵用卷*2000#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 5) {
			if (cm.haveItem(4000106,20) && cm.haveItem(4000107,20)){
				cm.gainItem(4000106,-20);//玩具熊猫的棉花团
				cm.gainItem(4000107,-20);//玩具熊猫的黄色丝带
				cm.gainItem(1102294,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石披风
				cm.gainItem(3992025,200);//圣诞大星
				cm.gainItem(5390002,10);//爱心情景喇叭
				cm.gainItem(2049100,2);//混沌卷轴
				cm.gainMeso(+2000000);//游戏币
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务5，获得圣诞大星*200，爱心情景喇叭*10，混沌卷轴*2，冒险岛宝石披风，游戏币*200万！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务5，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000106#*20    #v4000107#*20#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "     #v3992025#*200   #v5390002#*10   #v2049100#*2   #v1102294#*1  #v4031138#*200W#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 6) {
			if (cm.haveItem(4000196,20) && cm.haveItem(4000197,20)){
				cm.gainItem(4000196,-20);//木板
				cm.gainItem(4000197,-20);//石板
				cm.gainItem(1132092,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//冒险岛宝石腰带
				cm.gainItem(3992025,200);//圣诞大星
				cm.gainItem(4170012,1);//必成卷兑换蛋
				cm.gainItem(4005004,10);//黑暗水晶
				cm.gainItem(4000463,2);//七七中介币
				cm.gainItem(5064000,1);
				cm.sendOk("完成了新手任务6，获得圣诞大星*200，必成卷兑换蛋*1，黑暗水晶*10，七七中介币*2，冒险岛宝石腰带！");
				cm.dispose();
			}else{
				text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				text += "           "+小烟花+"#r#b新手任务6，请提交以下物品#n"+小烟花+"#l#k\r\n\r\n"
				text += "                #v4000196#*20    #v4000197#*20#l#k\r\n\r\n"
				text += "                 "+小烟花+"#r完成后可获得#n"+小烟花+"#l#k\r\n\r\n"
				text += "        #v3992025#*200   #v4170012#*1   #v4005004#*10   #v4000463#*2  #v1132092#*1 #l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } 
    }
}
