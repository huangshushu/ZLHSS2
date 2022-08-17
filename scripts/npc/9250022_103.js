
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var a0 = "         #L0##b"+ 小烟花 +"制作#r#v1142076##z1142076##k"+ 小烟花 +"#l\r\n\r\n                  （全属性20攻魔5）\r\n                     #r需要材料如下\r\n\r\n   #v1142358#*1   #v4000017#*50  #v4000002#*100  #v4000012#*100  #v4000008#*100\r\n             #v2210006#*2              #v4001266#*2\r\n";
		var a1 = "      #L1##b"+ 小烟花 +"制作#r#v1142079##z1142079##k"+ 小烟花 +"#l\r\n\r\n                  （全属性40攻魔10）\r\n                     #r需要材料如下\r\n\r\n  #v1142076#*1   #v4003004#*150  #v4003005#*150  #v4000021#*150  #v4000040#*5\r\n             #v4000176#*5              #v4001266#*4\r\n";
		var a2 = "          #L2##b"+ 小烟花 +"制作#r#v1142140##z1142140##k"+ 小烟花 +"#l\r\n\r\n                  （全属性60攻魔20）\r\n                     #r需要材料如下\r\n\r\n  #v1142079#*1    #v4002000#*5     #v4002001#*5    #v4002002#*5    #v4002003#*5\r\n             #v4005004#*10              #v4001266#*4\r\n";
		var a3 = "          #L3##b"+ 小烟花 +"制作#r#v1142404##z1142404##k"+ 小烟花 +"#l\r\n\r\n                  （全属性80攻魔40）\r\n                     #r需要材料如下\r\n\r\n  #v1142140#*1    #v4005000#*15   #v4005001#*15  #v4005002#*15  #v4005003#*15\r\n             #v4000463#*5     #v4001266#*6     #v4031138#1000万\r\n";
		var a4 = "        #L4##b"+ 小烟花 +"制作#r#v1142384##z1142384##k"+ 小烟花 +"#l\r\n\r\n                 （全属性100攻魔60）\r\n                     #r需要材料如下\r\n\r\n  #v1142404#*1   #v4000243#*2    #v4000235#*2    #v4000175#*2    #v4001084#*1\r\n        #v4001085#*1    #v4001083#*1   #v4001266#*6    #v4031138#2000万\r\n";
		var a5 = "    #L5##b"+ 小烟花 +"制作#r#v1142788##z1142788##k"+ 小烟花 +"#l\r\n\r\n                 （全属性120攻魔80）\r\n                     #r需要材料如下\r\n\r\n  #v1142384#*1    #v4001080#*2    #v4001094#*2    #v4251202#*5    #v4000463#*5\r\n             #v4031456#*150  #v4001266#*8    #v4031138#4000万\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n\t          "+ 小烟花 +"#r欢迎来到毕业勋章制作"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a0+""+a1+""+a2+""+a3+""+a4+""+a5+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(1142358,1)&&cm.haveItem(4000017,50)&&cm.haveItem(4000002,100)&&cm.haveItem(4000012,100)&&cm.haveItem(4000008,100)&&cm.haveItem(2210006,2)&&cm.haveItem(4001266,2)) {
			cm.gainItem(1142358,-1);
			cm.gainItem(4000017,-50);
			cm.gainItem(4000002,-100);
			cm.gainItem(4000012,-100);
			cm.gainItem(4000008,-100);
			cm.gainItem(2210006,-2);
			cm.gainItem(4001266,-2);
			cm.gainItem(1142076,20,20,20,20,0,0,5,5,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了荣誉冒险人勋章，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1142076,1)&&cm.haveItem(4003004,150)&&cm.haveItem(4003005,150)&&cm.haveItem(4000021,150)&&cm.haveItem(4000040,5)&&cm.haveItem(4000176,5)&&cm.haveItem(4001266,4)) {
			cm.gainItem(1142076,-1);
			cm.gainItem(4003004,-150);
			cm.gainItem(4003005,-150);
			cm.gainItem(4000021,-150);
			cm.gainItem(4000040,-5);
			cm.gainItem(4000176,-5);
			cm.gainItem(4001266,-4);
			cm.gainItem(1142079,40,40,40,40,0,0,10,10,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了特利斯坦接班人的勋章，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1142079,1)&&cm.haveItem(4002000,5)&&cm.haveItem(4002001,5)&&cm.haveItem(4002002,5)&&cm.haveItem(4002003,5)&&cm.haveItem(4005004,10)&&cm.haveItem(4001266,4)) {
			cm.gainItem(1142079,-1);
			cm.gainItem(4002000,-5);
			cm.gainItem(4002001,-5);
			cm.gainItem(4002002,-5);
			cm.gainItem(4002003,-5);
			cm.gainItem(4005004,-10);
			cm.gainItem(4001266,-4);
			cm.gainItem(1142140,60,60,60,60,0,0,20,20,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了神圣驱魔勋章，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(1142140,1)&&cm.haveItem(4005000,15)&&cm.haveItem(4005001,15)&&cm.haveItem(4005002,15)&&cm.haveItem(4005003,15)&&cm.haveItem(4000463,5)&&cm.haveItem(4001266,6)&&cm.getMeso()>=10000000) {
			cm.gainItem(1142140, -1);
			cm.gainItem(4005000, -15);
			cm.gainItem(4005001, -15);
			cm.gainItem(4005002, -15);
			cm.gainItem(4005003, -15);
			cm.gainItem(4000463, -5);
			cm.gainItem(4001266, -6);
			cm.gainMeso(-10000000);
			cm.gainItem(1142404,80,80,80,80,0,0,40,40,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了英雄意志勋章，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(1142404,1)&&cm.haveItem(4000243,2)&&cm.haveItem(4000235,2)&&cm.haveItem(4000175,2)&&cm.haveItem(4001084,1)&&cm.haveItem(4001083,1)&&cm.haveItem(4001085,1)&&cm.haveItem(4001266,6)&&cm.getMeso()>=20000000) {
			cm.gainItem(1142404, -1);
			cm.gainItem(4000243, -2);
			cm.gainItem(4000235, -2);
			cm.gainItem(4000175, -2);
			cm.gainItem(4001084, -1);
			cm.gainItem(4001085, -1);
			cm.gainItem(4001083, -1);
			cm.gainItem(4001266, -6);
			cm.gainMeso(-20000000);
			cm.gainItem(1142384,100,100,100,100,0,0,60,60,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了七七冒险巨星勋章，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
        }else if (selection == 5) {
		if (cm.haveItem(1142384,1)&&cm.haveItem(4001080,2)&&cm.haveItem(4001094,2)&&cm.haveItem(4251202,5)&&cm.haveItem(4000463,5)&&cm.haveItem(4031456,150)&&cm.haveItem(4001266,8)&&cm.getMeso()>=40000000) {
			cm.gainItem(1142384, -1);
			cm.gainItem(4001080, -2);
			cm.gainItem(4001094, -2);
			cm.gainItem(4251202, -5);
			cm.gainItem(4000463, -5);
			cm.gainItem(4031456, -150);
			cm.gainItem(4001266, -8);
			cm.gainMeso(-40000000);
			cm.gainItem(1142788,120,120,120,120,0,0,80,80,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"毕业勋章制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了月月冒险岛官方认证男神，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
				}
			}
        }
    }
}