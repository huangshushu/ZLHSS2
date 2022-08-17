
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
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
		var a1 = "#L1#" + 正方箭头 + "#r制作四维+2 双攻+1 命中+30 双防+10#v1022228##l\r\n\r\n需要20个#v4002000#和20个#v4002001#和40个#v4031456#和50万冒险币制作\r\n";
	    var a2 = "#L2#" + 正方箭头 + "#r升级四维+3 双攻+2 命中+50 双防+20#v1022224##l\r\n\r\n需要50个#v4002000#和50个#v4002001#和10个#v4002002#和200个#v4031456#和500万冒险币制作\r\n";//1个#v1132243#和40个#v4002000#和40个#v4002001#和40个#v4002002#和1个#v4001084#和3个#v4000463#和8个#v4021010#和2000万冒险币制作
	    var a3 = "#L3#" + 正方箭头 + "#r升级四维+4 双攻+3 命中+100 双防+50#r#v1022225##l\r\n\r\n需要100个#v4002000#和100个#v4002001#和30个#v4002002#和10个#v4002003#和500个#v4031456#和2000万冒险币制作\r\n";//1个#v1132244#和60个#v4002000#和60个#v4002001#和60个#v4002002#和1个#v4001083#和6个#v4000463#和12个#v4021010#和3000万冒险币制作
	    var a4 = "#L4#" + 正方箭头 + "#r升级四维+15 双攻+10 命中+100 回避+50 双防+150 #r#v1022226##l\r\n\r\n需要300个#v4002000#和300个#v4002001#和60个#v4002002#和30个#v4002003#和1000个#v4031456#和5000万冒险币制作\r\n";//1个#v1132244#和60个#v4002000#和60个#v4002001#和60个#v4002002#和1个#v4001083#和6个#v4000463#和12个#v4021010#和3000万冒险币制作
	    

            cm.sendSimple("这里是腰带制作和升级哟，请选择：\r\n" + a1 + ""+a2+""+a3+""+a4+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法合成.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(4002000,20)&&cm.haveItem(4002001,20)&&cm.haveItem(4031456,40)&&cm.getMeso()>=500000) {
			cm.gainItem(4002000, -20);
			cm.gainItem(4002001, -20);
			cm.gainItem(4031456, -40);
			cm.gainMeso(-500000);
			cm.gainItem(1022228,2,2,2,2,0,0,1,1,10,10,0,30,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,回避率,命中率,移动速度,跳跃力
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制作了低级独眼巨人之眼。大家赶紧围观",true).getBytes());
			cm.sendOk("赶紧戴上尝试下回顾冒险岛版谷歌眼镜吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1022228,1)&&cm.haveItem(4002000,50)&&cm.haveItem(4002002,10)&&cm.haveItem(4002001,50)&&cm.haveItem(4031456,200)&&cm.getMeso()>=5000000) {
			cm.gainItem(1022228,-1);
			cm.gainItem(4002000, -50);
			cm.gainItem(4002001, -50);
			cm.gainItem(4002002, -10);
			cm.gainItem(4031456, -200);
			cm.gainMeso(-5000000);
			cm.gainItem(1022224,3,3,3,3,0,0,2,2,20,20,0,50,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功升级了中级独眼巨人之眼。大家赶紧围观",true).getBytes());
			cm.sendOk("赶紧戴上尝试下回顾冒险岛版谷歌眼镜吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1022224,1)&&cm.haveItem(4002000,100)&&cm.haveItem(4002002,30)&&cm.haveItem(4002003,10)&&cm.haveItem(4002001,100)&&cm.haveItem(4031456,500)&&cm.getMeso()>=20000000) {
			cm.gainItem(1022224, -1);
			cm.gainItem(4002000, -100);
			cm.gainItem(4002001, -100);
			cm.gainItem(4002002, -30);
			cm.gainItem(4002003, -10);
			cm.gainItem(4031456, -500);
			cm.gainMeso(-5000000);
			cm.gainItem(1022225,4,4,4,4,0,0,3,3,50,50,0,100,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功制升级了高级独眼巨人之眼。大家赶紧围观",true).getBytes());
			cm.sendOk("赶紧戴上尝试下回顾冒险岛版谷歌眼镜吧！");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的材料不足!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1022225,1)&&cm.haveItem(4002000,300)&&cm.haveItem(4002002,60)&&cm.haveItem(4002003,30)&&cm.haveItem(4002001,300)&&cm.haveItem(4031456,1000)&&cm.getMeso()>=500000000) {
			cm.gainItem(1022225, -1);
			cm.gainItem(4002000, -300);
			cm.gainItem(4002001, -300);
			cm.gainItem(4002002, -60);
			cm.gainItem(4002003, -30);
			cm.gainItem(4031456, -1000);
			cm.gainMeso(-50000000);
			cm.gainItem(1022226,15,15,15,15,0,0,10,10,150,150,50,150,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"装备制作" + " : " + cm.getPlayer().getName() +"玩家成功升级了最高级独眼巨人之眼。大家赶紧围观",true).getBytes());
			cm.sendOk("赶紧戴上尝试下回顾冒险岛版谷歌眼镜吧！");
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
