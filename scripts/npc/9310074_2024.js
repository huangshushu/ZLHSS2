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
			text += "            #r欢迎来到月月冒险岛进阶扎昆头盔#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "#L1#"+小烟花+"#b#v1003112#进阶扎昆头盔#r（运气50，敏捷25，攻击30）"+小烟花+"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1002357#*1，#v4001080#*1，#v4001081#*1，#v4001082#*1\r\n          #v4000313#*200，#v4251002#*3，#v4011007#*4，#v4011008#*4\r\n\r\n          ，金币*5000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1002357,1) && cm.haveItem(4001080,1) && cm.haveItem(4001081,1) && cm.haveItem(4001082,1) && cm.haveItem(4000313,200) && cm.haveItem(4251002,3) && cm.haveItem(4011007,4) && cm.haveItem(4011008,4)&& cm.getMeso() >= 50000000){
				cm.gainItem(1002357, -1);
				cm.gainItem(4001080, -1);
				cm.gainItem(4001081, -1);
				cm.gainItem(4001082, -1);
				cm.gainItem(4000313, -200);
				cm.gainItem(4251002, -3);
				cm.gainItem(4011007, -4);
				cm.gainItem(4011008, -4);
				//cm.gainItem(4310143, -80);
				cm.gainMeso(-50000000);
				cm.gainItem(1003112,0,25,50,0,0,0,30,0,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1003112#，快去亮出的全新头盔吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "进阶扎昆头盔制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了进阶扎昆头盔（运气版），战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


