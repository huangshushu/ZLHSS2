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
			text += "             #r欢迎来到月月冒险岛外星人之盾\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "          #b#L0#"+ 小烟花 +"#v1092111#外星人之盾#r（飞侠）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1092030#*1，#v1092029#*1，#v1092057#*1，#v1092058#*1\r\n          #v4251002#*10，#v4011007#*2，#v4011008#*2，金币*3500W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1092030,1) && cm.haveItem(1092029,1) && cm.haveItem(1092057,1) && cm.haveItem(1092058,1) && cm.haveItem(4251002,10) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.getMeso() >= 35000000){
				cm.gainItem(1092030, -1);
				cm.gainItem(1092029, -1);
				cm.gainItem(1092057, -1);
				cm.gainItem(1092058, -1);
				cm.gainItem(4251002, -10);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainMeso(-35000000);
				cm.gainItem(1092111,50,50,50,50,300,300,50,50,300,300,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1092111#，快去亮出的全新盾牌吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "外星人之盾制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了外星人之盾（飞侠），战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


