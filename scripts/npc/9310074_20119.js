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
            text += "          #L1#"+小烟花+"#r我要制作#v1382049#朱雀长杖"+小烟花+"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1382049#*1，#v4000270#*300，#v4000082#*15，#v4310057#*20\r\n          #v4001126#*5000，#v4250902#*5，#v4011007#*2，#v4011008#*2\r\n\r\n          #v4310143#*30，金币*3000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1382049,1) && cm.haveItem(4000270,300) && cm.haveItem(4000082,15) && cm.haveItem(4310057,20) && cm.haveItem(4001126,5000) && cm.haveItem(4250902,5) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.haveItem(4310143,30)&& cm.getMeso() >= 30000000){
				cm.gainItem(1382049, -1);
				cm.gainItem(4000270, -300);
				cm.gainItem(4000082, -15);
				cm.gainItem(4310057, -20);
				cm.gainItem(4001126, -5000);
				cm.gainItem(4250902, -5);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainItem(4310143, -30);
				cm.gainMeso(-30000000);
				cm.gainItem(1382049,0,0,40,60,0,0,120,190,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1382049#，快去亮出的全新武器吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "布莱克缤武器制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了朱雀长杖，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


