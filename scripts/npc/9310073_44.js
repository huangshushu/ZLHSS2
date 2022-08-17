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
			text += "               #r技能修仙兑换随机属性#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            text += "       #L1#"+小烟花+"#r我要使用#v3700051#随机兑换一次属性10-100"+小烟花+"#l\r\n\r\n\r\n";
			text += "       #L2#"+小烟花+"#r我要使用#v3700051#固定兑换一次属性40"+小烟花+"#l\r\n\r\n\r\n";
			//text += "#b需要材料：#v1302249#*1，#v4000270#*300，#v4000082#*30，#v4310057#*100\r\n          #v4001126#*5000，#v4250802#*5，#v4011007#*2，#v4011008#*2\r\n\r\n          金币*3000W\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(3700051,1)){
				var r = Math.ceil(Math.random() * 90+10);
				cm.gainItem(3700051, -1);
				cm.gainAp(r);
				cm.sendOk("#b恭喜你，成功兑换了随机属性10-100！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "技能修仙" + " : " + "恭喜" + cm.getChar().getName() + "技能修仙成功兑换了随机属性10-100，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的#v3700051#材料不足以进行兑换，请确认！");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b你的背包装备栏空间不足1格，请确认后再进行制作！");
                cm.dispose();
			} 
			else if(cm.haveItem(3700051,1)){
				cm.gainItem(3700051, -1);
				cm.gainAp(40);
				cm.sendOk("#b恭喜你，成功兑换了固定属性40！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "技能修仙" + " : " + "恭喜" + cm.getChar().getName() + "技能修仙成功兑换了固定属性40，战斗力又获得了进一步提升，大家恭喜他/她吧！"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b很遗憾，你的#v3700051#材料不足以进行兑换，请确认！");
				cm.dispose();
			}
		}
    }
}


