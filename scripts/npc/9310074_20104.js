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
			text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "               #r欢迎来到布莱克缤武器制作#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "        #L1#"+小烟花+"#r我要制作#v1332214#布莱克缤短刀"+小烟花+"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1332207#*1，#v4000270#*200，#v4000082#*10，#v4310057#*10\r\n          #v4000268#*200，#v4011007#*2，#v4011008#*2， #v4310143#*10\r\n\r\n         金币*1E\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1332207,1) && cm.haveItem(4000270,200) && cm.haveItem(4000082,10) && cm.haveItem(4310057,10) && cm.haveItem(4000268,200) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2)  && cm.haveItem(4310143,10)&& cm.getMeso() >= 100000000){
				cm.gainItem(1332207, -1);
				cm.gainItem(4000270, -200);
				cm.gainItem(4000082, -10);
				cm.gainItem(4310057, -10);
				cm.gainItem(4000268, -200);
				cm.gainItem(4250802, -5);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainItem(4310143, -10);
				cm.gainMeso(-100000000);
				cm.gainItem(1332214,0,30,50,0,0,0,150,0,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1332214#，快去亮出的全新武器吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "布莱克缤武器制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了布莱克缤短刀，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


