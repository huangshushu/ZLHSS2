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
			text += "            #r欢迎来到月月冒险岛环游世界戒指\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "    #b#L0#"+ 小烟花 +"#v1113162#环游世界戒指#r（四维50，攻魔50）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v4310057#*100，#v4310143#*100，#v4001241#*15，#v4001242#*15\r\n          #v4000435#*10，#v4021010#*10，金币*8000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(4310057,100) && cm.haveItem(4310143,100)&& cm.haveItem(4001241,15) && cm.haveItem(4001242,15) && cm.haveItem(4000435,10) && cm.haveItem(4021010,10) && cm.getMeso() >= 80000000){
				cm.gainItem(4310057, -100);
				cm.gainItem(4310143, -100);
				cm.gainItem(4001241, -15);
				cm.gainItem(4001242, -15);
				cm.gainItem(4000435, -10);
				cm.gainItem(4021010, -10);
				cm.gainMeso(-80000000);
				cm.gainItem(1113162,50,50,50,50,0,0,50,50,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1113162#，快去亮出的全新戒指吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "戒指制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了环游世界戒指，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


