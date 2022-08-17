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
	        text += "              #L1#"+小烟花+"#r领取10000档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			text += "#b#v1112900##z1112900#*1（升级至四维1200，攻魔600）\r\n"
			text += "#b#v2022662#漩涡武器自选*1\r\n"
			text += "#b#s4111006#2段跳*1\r\n"
			text += "#b#v4310108##z4310108#*10\r\n"
			text += "#b#v2049116##z2049116#*200\r\n"
			text += "#b#v4005004##z4005004#*600\r\n"
			text += "#b#v3992025##z3992025#*20000\r\n"
			text += "#b#v4001165##z4001165#*1250\r\n"
			text += "#b#v2028083##z2028083#*4\r\n"
			text += "#b#v4310010##z4310010#*3\r\n"
			text += "#b#v4032226##z4032226#*10\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 10000 && cm.haveItem(1112900,1) && cm.getPlayer().getBossLog("10000赞助物品礼包",1) == 0 && cm.getPlayer().getBossLog("7000赞助物品礼包",1) == 1){
				cm.gainItem(1112900,-1);
				cm.gainItem(1112900,1200,1200,1200,1200,0,0,600,600,0,0,0,0,0,0);//赞助戒指
				cm.gainItem(2022662,1);//漩涡武器自选
				cm.gainItem(3700040,1);//2段
				cm.gainItem(4310108,10);//UR时装附魔币
				cm.gainItem(2049116,200);//强化混沌卷轴
				cm.gainItem(4005004,600);//黑暗水晶
				cm.gainItem(3992025,20000);//圣诞大星
				cm.gainItem(4001165,1250);//太阳神的赐福
				cm.gainItem(2028083,4);//星火武器卷自选箱
				cm.gainItem(4310010,3);//20星必成币
				cm.gainItem(4032226,10);//黄金猪猪
				
				cm.getPlayer().setBossLog("10000赞助物品礼包",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了10000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了10000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功10000赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
