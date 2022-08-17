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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"//3
			text += "          #r欢迎来到月月冒险岛赞助物品奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "               #L1#"+小烟花+"#r活动500赞助礼包"+小烟花+"#l\r\n\r\n"
			cm.sendSimple(text);
        } else if (selection == 1) {

		if(cm.haveItem(2028154,1)){
			cm.gainItem(2028154, -1)
				cm.gainItem(2028175, 1);
			    cm.gainItem(4310010, 1);
				cm.gainItem(2046913, 3);
			    cm.gainItem(4310108, 40);
				cm.gainItem(4310060, 3);
				cm.gainItem(4001165, 888);
			    cm.gainItem(3992025, 10000);
				cm.gainItem(3992025, 10000);
				cm.gainItem(3992025, 10000);
				cm.gainItem(2022530, 15);
				cm.gainItem(2450000, 15);	
				cm.gainItem(2613000, 15);
				cm.gainItem(4011008, 2);
				cm.gainItem(4011007, 2);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领500礼包！"));
				cm.dispose();			
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
