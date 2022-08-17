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
			text += "            #r欢迎来到月月冒险岛外星人之戒指\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "    #b#L0#"+ 小烟花 +"#v1112738#外星人之戒指#r（四维45，攻魔45）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v4310025#*500，#v4000082#*30，#v4000125#*30\r\n          #v4000235#*10，#v4000243#*10，#v4000244#*10，#v4000245#*10\r\n\r\n         #v4310143#*100， 金币*3000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(4310025,500) && cm.haveItem(4000082,30) && cm.haveItem(4000125,30) && cm.haveItem(4000235,10) && cm.haveItem(4000243,10) && cm.haveItem(4000244,10) && cm.haveItem(4000245,10) && cm.haveItem(4310143,100)&& cm.getMeso() >= 30000000){
				cm.gainItem(4310025, -500);
				cm.gainItem(4000082, -30);
				cm.gainItem(4000125, -30);
				cm.gainItem(4000235, -10);
				cm.gainItem(4000243, -10);
				cm.gainItem(4000244, -10);
				cm.gainItem(4000245, -10);
				cm.gainItem(4310143, -100);
				cm.gainMeso(-30000000);
				cm.gainItem(1112738,45,45,45,45,0,0,45,45,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1112738#，快去亮出的全新戒指吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "戒指制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了外星人之戒指，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


