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
			text += "            #r欢迎来到月月冒险岛芬撒里尔披风#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "         #b#L0#"+ 小烟花 +"#v1102721#芬撒里尔披风#r（飞侠）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v4001241#*10，#v4001242#*10，#v4000244#*5，#v4000245#*5\r\n          #v1102041#*1，#v4251002#*5，#v4011007#*2，#v4011008#*2\r\n          #v4310143#*80，金币*3500W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(4001241,10) && cm.haveItem(4001241,10) && cm.haveItem(4000244,5) && cm.haveItem(4000245,5) && cm.haveItem(1102041,1) && cm.haveItem(4251002,5) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2) && cm.haveItem(4310143,80)&& cm.getMeso() >= 35000000){
				cm.gainItem(4001241, -10);
				cm.gainItem(4001242, -10);
				cm.gainItem(4000244, -5);
				cm.gainItem(4000245, -5);
				cm.gainItem(1102041, -1);
				cm.gainItem(4251002, -5);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainItem(4310143, -80);
				cm.gainMeso(-35000000);
				cm.gainItem(1102721,0,35,50,0,0,0,35,0,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1102721#，快去亮出的全新披风吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "芬撒里尔披风制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了芬撒里尔披风（飞侠），战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


