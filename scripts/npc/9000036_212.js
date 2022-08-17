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
			text += "          #r欢迎来到月月冒险岛累计赞助坐骑奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "               #L1#"+小烟花+"#r领取100档奖励"+小烟花+"#l\r\n\r\n"
			text += "      #r领取该奖励前请先领取对应的累计赞助坐骑奖励#l\r\n\r\n"
			text += "         #b#v1902346##z1902346#*1（四维38，攻魔38）\r\n"
			text += "         #b#v1912346##z1912346#*1（四维38，攻魔38）\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 100 && cm.getPlayer().getBossLog("100赞助坐骑礼包",1) == 0 ){
				cm.gainItem(1902346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性坐骑
				cm.gainItem(1912346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//属性鞍子
				cm.getPlayer().setBossLog("100赞助坐骑礼包",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助坐骑奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了100档累计赞助坐骑奖励！战斗力大幅度提升，祝福他/她吧！"));
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助坐骑奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了100档累计赞助坐骑奖励！战斗力大幅度提升，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功100赞助坐骑奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r累计额度不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
