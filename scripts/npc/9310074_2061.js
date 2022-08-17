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
			text += "            #r欢迎来到月月冒险岛寻宝外套#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "         #b#L0#"+ 小烟花 +"#v1052929#寻宝外套（全属性60）"+ 小烟花 +"#l\r\n\r\n\r\n";
			text += "#b需要材料：    #v4002000#*50，#v4003004#*300，#v4000021#*300\r\n          #v4001006#*20，#v4011007#*1，#v4011008#*1，金币*3000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 0) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(4002000,50) && cm.haveItem(4003004,300) && cm.haveItem(4000021,300) && cm.haveItem(4001006,20)  && cm.haveItem(4011007,1) && cm.haveItem(4011008,1) && cm.getMeso() >= 25000000){
				cm.gainItem(4002000, -50);
				cm.gainItem(4003004, -300);
				cm.gainItem(4000021, -300);
				cm.gainItem(4001006, -20);
				cm.gainItem(4011007, -1);
				cm.gainItem(4011008, -1);
				cm.gainMeso(-30000000);
				cm.gainItem(1052929,60,60,60,60,0,0,60,60,0,0,0,0,0,0);
				cm.sendOk("#b恭喜你，成功制作了#v1052929#，快去亮出的全新外套吧！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "芬撒里尔外套制作" + " : " + "恭喜" + cm.getChar().getName() + "成功制作了寻宝外套，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的材料不足以进行制作，请确认！");
				cm.dispose();
			}
		}
    }
}


