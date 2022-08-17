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
	        text += "              #L1#"+小烟花+"#r领取4000档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			//text += "#b#v1112900##z1112900#*1（升级至四维400，攻魔200）\r\n"
			text += "#b#v4310060##z4310060#*10\r\n"
			text += "#b#v2028158##z2028158#*1\r\n"
			text += "#b#v2028068##z2028068#*1\r\n"
			text += "#b#v4310057##z4310057#*20\r\n"
			text += "#b#v4310143##z4310143#*50\r\n"
			text += "#b#v4310027##z4310027#*35\r\n"
			text += "#b#v4251202##z4251202#*20\r\n"
			text += "#b#v2613000##z2613000#*5\r\n"
			text += "#b#v3992025##z3992025#*10000\r\n"
			text += "#b#v4001165##z4001165#*3000\r\n"
			text += "#b#v2450000##z2450000#*4\r\n"
			text += "#b#v4170012##z4170012#*3\r\n"
			text += "#b#v2046913##z2046913#*3\r\n"
			text += "#b#v4310009##z4310009#*2\r\n"
			text += "#b#v4031138#金币*5000W\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 4000 && cm.haveItem(1112949,1) && cm.getPlayer().getBossLog("4000赞助物品礼包",1) == 0 ){
				//cm.gainItem(1112900,-1);
				//cm.gainItem(1112900,400,400,400,400,0,0,200,200,0,0,0,0,0,0);//赞助戒指
				cm.gainItem(4310060,10);//进化石
				cm.gainItem(2028158,1);//随机公式箱子
				cm.gainItem(2028068,1);//暴君自选
				cm.gainItem(4310057,20);//跑商币
				cm.gainItem(4310143,50);//BOSS币
				cm.gainItem(4310027,35);//SSR时装附魔币
				cm.gainItem(4251202,20);//万能水晶
				cm.gainItem(2613000,5);//星火武器卷自选箱
				cm.gainItem(3992025,10000);//圣诞大星
				cm.gainItem(4001165,3000);//太阳神的赐福
				cm.gainItem(2450000,4);//幸运的狩猎
				cm.gainItem(4170012,3);//必成卷兑换蛋
				cm.gainItem(2046913,3);//宿命正义自选
				cm.gainItem(4310009,2);//10星必成币
				cm.gainMeso(50000000);//5000W
				
				cm.getPlayer().setBossLog("4000赞助物品礼包",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了4000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了4000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功4000赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
