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
			text += "           #r欢迎来到月月冒险岛寻宝腰带#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "           #b#L0#"+ 小烟花 +"#v1132287##z1132287#"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：#v4031227#*20，#v4002002#*20，#v4011007#*1，#v4011008#*1\r\n          #v4310143#*20，金币*2500W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(  cm.haveItem(4031227,20) && cm.haveItem(4002002,20)  && cm.haveItem(4011007,1) && cm.haveItem(4011008,1) && cm.haveItem(4310143,20)&& cm.getMeso() >= 25000000){
				
				
				cm.gainItem(4031227, -20);
				cm.gainItem(4002002, -20);

				cm.gainItem(4011007, -1);
				cm.gainItem(4011008, -1);
				cm.gainItem(4310143, -20);
				cm.gainMeso(-25000000);
				cm.gainItem(1132287,50,50,50,50,0,0,50,50,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1132287#，快去亮出的全新腰带吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "寻宝腰带制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了寻宝腰带，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


