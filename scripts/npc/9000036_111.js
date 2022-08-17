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
			text += "          #r欢迎来到月月冒险岛累计赞助物品奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "              #L1#"+小烟花+"#r领取25000档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			text += "#b#v1112900##z1112900#*1（升级至四维6666，攻魔888）\r\n"
			text += "#b#v2028166##z2028166#*1\r\n"
			text += "#b#v4310108##z4310108#*100\r\n"
			text += "#b#v2049116##z2049116#*400\r\n"
			text += "#b#v4251202##z4251202#*300\r\n"
			text += "#b#v2028083##z2028083#*15\r\n"
			text += "#b#v4310148##z4310148#*3\r\n"
			text += "#b#v4001245##z4001245#*30\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 30000 && cm.haveItem(1112900,1) && cm.getPlayer().getBossLog("25000赞助物品礼包",1) == 0 ){
				cm.gainItem(1112900,-1);
				cm.gainItem(1112900,6666,6666,6666,6666,0,0,888,888,0,0,0,0,0,0);//赞助戒指
				cm.gainItem(2028166,1);//埃苏武器自选
				cm.gainItem(4310108,100);//UR时装附魔币
				cm.gainItem(2049116,400);//强化混沌卷轴
				cm.gainItem(4251202,300);//万能水晶
				cm.gainItem(2028083,15);//星火武器卷自选箱
				cm.gainItem(4310148,3);//25星必成币
				cm.gainItem(4001245,30);//金蛋
				
				cm.getPlayer().setBossLog("30000赞助物品礼包",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了30000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了30000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功30000赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
