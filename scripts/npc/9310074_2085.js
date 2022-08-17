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
			text += "            #r欢迎来到月月冒险岛芬撒里尔手套#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "         #b#L0#"+ 小烟花 +"#v1082612#芬撒里尔手套#r（海盗）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1082232#*1，#v1082393#*1，#v4001158#*20，#v4310008#*20\r\n          #v4031456#*200，#v4250802#*5，#v4251102#*5，#v4011007#*2\r\n          #v4011008#*2，#v4310143#*80，金币*5000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1082232,1) && cm.haveItem(1082393,1) && cm.haveItem(4001158,20) && cm.haveItem(4310008,20) && cm.haveItem(4031456,200) && cm.haveItem(4250802,5) && cm.haveItem(4251102,5) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.haveItem(4310143,80)&& cm.getMeso() >= 50000000){
				cm.gainItem(1082232, -1);
				cm.gainItem(1082393, -1);
				cm.gainItem(4001158, -20);
				cm.gainItem(4310008, -20);
				cm.gainItem(4031456, -200);
				cm.gainItem(4250802, -5);
				cm.gainItem(4251102, -5);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainItem(4310143, -80);
				cm.gainMeso(-50000000);
				cm.gainItem(1082612,60,60,0,0,0,0,50,0,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1082612#，快去亮出的全新手套吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "芬撒里尔手套制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了芬撒里尔手套（海盗），战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


