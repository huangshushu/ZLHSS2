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
			text += "           #r欢迎来到月月冒险岛恐怖鬼娃的伤口#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "  #L1#"+小烟花+"#b#v1012173#恐怖鬼娃的伤口#r（四维40，攻魔30）"+小烟花+"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v4002000#*20，#v4002001#*20，#v4002002#*20，#v4002003#*20\r\n          #v4310143#*50，#v4011007#*2，#v4011008#*2，金币*1E\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(4002000,20) && cm.haveItem(4002001,20) && cm.haveItem(4002002,20) && cm.haveItem(4002003,20) && cm.haveItem(4310143,50)  && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.getMeso() >= 100000000){
				cm.gainItem(4002000, -20);
				cm.gainItem(4002001, -20);
				cm.gainItem(4002002, -20);
				cm.gainItem(4002003, -20);
				cm.gainItem(4310143, -50);
				//cm.gainItem(4251402, -10);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainMeso(-100000000);
				cm.gainItem(1012173,40,40,40,40,0,0,30,30,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1012173#，快去亮出的全新脸饰吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "恐怖鬼娃的伤口制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了恐怖鬼娃的伤口，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


