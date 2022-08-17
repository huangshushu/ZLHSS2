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
			text += "            #r欢迎来到月月冒险岛芬撒里尔鞋子#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "         #b#L0#"+ 小烟花 +"#v1072971#芬撒里尔鞋子#r（海盗）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v1072369#*1，#v1072768#*1，#v4001341#*30，#v4310057#*30\r\n          #v4310143#*80，#v4000435#*5，#v4250802#*3，#v4251102#*3\r\n          #v4011007#*1，#v4011008#*1，金币*3000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(1072369,1) && cm.haveItem(1072768,1) && cm.haveItem(4001341,30) && cm.haveItem(4310057,30) && cm.haveItem(4310143,80)&& cm.haveItem(4000435,5) && cm.haveItem(4250802,3) && cm.haveItem(4251102,3) && cm.haveItem(4011007,1) && cm.haveItem(4011008,1) && cm.getMeso() >= 30000000){
				cm.gainItem(1072369, -1);
				cm.gainItem(1072768, -1);
				cm.gainItem(4001341, -30);
				cm.gainItem(4310057, -30);
				cm.gainItem(4310143, -80);
				cm.gainItem(4000435, -5);
				cm.gainItem(4250802, -3);
				cm.gainItem(4251102, -3);
				cm.gainItem(4011007, -1);
				cm.gainItem(4011008, -1);
				cm.gainMeso(-30000000);
				cm.gainItem(1072971,40,40,0,0,0,0,35,0,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1072971#，快去亮出的全新鞋子吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "芬撒里尔鞋子制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了芬撒里尔鞋子（海盗），战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


