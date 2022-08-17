
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

var 是否开启 = false;
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
			if(!是否开启){
				cm.sendOk("你好啊，冒险家~");
				cm.dispose();
				return;
			}
			
		var a0 = "        #L0##b"+ 小烟花 +"制作#r#v1112435##z1112435##k"+ 小烟花 +"#l\r\n\r\n                  （全属性10攻魔10）\r\n                     #r需要材料如下\r\n\r\n   #v1112738#*1     #v4310025#*50     #v4000094#*5     #v4031138#500万\r\n";
		var a1 = "        #L1##b"+ 小烟花 +"制作#r#v1112436##z1112436##k"+ 小烟花 +"#l\r\n\r\n                  （全属性20攻魔20）\r\n                     #r需要材料如下\r\n\r\n   #v1112435#*1     #v4310025#*100     #v4000094#*10     #v4031138#1000万\r\n";
		var a2 = "        #L2##b"+ 小烟花 +"制作#r#v1112437##z1112437##k"+ 小烟花 +"#l\r\n\r\n                  （全属性30攻魔30）\r\n                     #r需要材料如下\r\n\r\n   #v1112436#*1     #v4310025#*200     #v4000094#*15     #v4031138#1500万\r\n";
		var a3 = "        #L3##b"+ 小烟花 +"制作#r#v1112438##z1112438##k"+ 小烟花 +"#l\r\n\r\n                  （全属性40攻魔40）\r\n                     #r需要材料如下\r\n\r\n   #v1112437#*1     #v4310025#*300     #v4000094#*20     #v4031138#2500万\r\n";
		var a4 = "        #L4##b"+ 小烟花 +"制作#r#v1112439##z1112439##k"+ 小烟花 +"#l\r\n\r\n                  （全属性50攻魔60）\r\n                     #r需要材料如下\r\n\r\n   #v1112438#*1     #v4310025#*450     #v4000094#*30     #v4031138#3500万\r\n";

	    
            cm.sendSimple(""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\t        "+ 小烟花 +"#r欢迎来到初阶毕业戒指制作"+ 小烟花 +"\r\n"+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"+a0+""+a1+""+a2+""+a3+""+a4+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(1112738,1)&&cm.haveItem(4310025,50)&&cm.haveItem(4000094,5)&&cm.getMeso()>=5000000) {
			cm.gainItem(1112738,-1);
			cm.gainItem(4310025,-50);
			cm.gainItem(4000094,-5);
			cm.gainMeso(-5000000);
			cm.gainItem(1112435,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"初阶毕业戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了一代不速之客戒指，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1112435,1)&&cm.haveItem(4310025,100)&&cm.haveItem(4000094,10)&&cm.getMeso()>=10000000) {
			cm.gainItem(1112435,-1);
			cm.gainItem(4310025,-100);
			cm.gainItem(4000094,-10);
			cm.gainMeso(-10000000);
			cm.gainItem(1112436,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"初阶毕业戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了二代不速之客戒指，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1112436,1)&&cm.haveItem(4310025,200)&&cm.haveItem(4000094,15)&&cm.getMeso()>=15000000) {
			cm.gainItem(1112436,-1);
			cm.gainItem(4310025,-200);
			cm.gainItem(4000094,-15);
			cm.gainMeso(-15000000);
			cm.gainItem(1112437,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"初阶毕业戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了三代不速之客戒指，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		} 
		} else if (selection == 3) {
		if (cm.haveItem(1112437,1)&&cm.haveItem(4310025,300)&&cm.haveItem(4000094,20)&&cm.getMeso()>=25000000) {
			cm.gainItem(1112437,-1);
			cm.gainItem(4310025,-300);
			cm.gainItem(4000094,-20);
			cm.gainMeso(-25000000);
			cm.gainItem(1112438,40,40,40,40,0,0,40,40,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"初阶毕业戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了末代不速之客戒指，大家恭喜他/她！",true).getBytes());
			cm.sendOk("已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(1112438,1)&&cm.haveItem(4310025,450)&&cm.haveItem(4000094,30)&&cm.getMeso()>=35000000) {
			cm.gainItem(1112438,-1);
			cm.gainItem(4310025,-450);
			cm.gainItem(4000094,-30);
			cm.gainMeso(-35000000);
			cm.gainItem(1112439,50,50,50,50,0,0,60,60,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"初阶毕业戒指制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了至尊不速之客戒指，大家恭喜他/她！",true).getBytes());
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