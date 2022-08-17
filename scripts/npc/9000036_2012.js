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
			text += "          #r欢迎来到月月冒险岛第二阶段累计赞助物品奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "               #L1#"+小烟花+"#r领取200档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			//text += "#b#v1112900##z1112900#*1（四维50，攻魔30）\r\n"
			text += "#b#v4310060##z4310060#*2\r\n"
			text += "#b#v4310143##z4310143#*40\r\n"
			text += "#b#v4005004##z4005004#*80\r\n"
			text += "#b#v4251202##z4251202#*10\r\n"
			text += "#b#v2049100##z2049100#*20\r\n"
			text += "#b#v4310108##z4310108#*10\r\n"
			text += "#b#v3992025##z3992025#*3000\r\n"
			text += "#b#v4001165##z4001165#*1000\r\n"
			text += "#b#v2450000##z2450000#*5\r\n"
			text += "#b#v2041315##z2041315#*4\r\n"
			text += "#b#v2613000##z2613000#*4\r\n"
			text += "#b#v2046913##z2046913#*2\r\n"
			text += "#b#v4031138#金币*8000W\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 8200 && cm.getPlayer().getBossLog("200赞助物品礼包2",1) == 0){
				//cm.gainItem(1112900,-1);
				//cm.gainItem(1112900,50,50,50,50,0,0,30,30,0,0,0,0,0,0);//赞助戒指
				cm.gainItem(4310060,2);//进化石
				cm.gainItem(4310143,40);//BOSS币
				cm.gainItem(4005004,80);//黑水晶
				cm.gainItem(4251202,10);//万能水晶
				cm.gainItem(2049100,20);//混沌
				cm.gainItem(4310108,10);//UR时装附魔币
				cm.gainItem(3992025,3000);//圣诞大星
				cm.gainItem(4001165,1000);//太阳神的赐福
				cm.gainItem(2450000,5);//幸运的狩猎
				cm.gainItem(2041315,4);//腰带卷
				cm.gainItem(2613000,4);//星火
				cm.gainItem(2046913,2);//宿命正义
				cm.gainMeso(80000000);//8000W
				
				cm.getPlayer().setBossLog("200赞助物品礼包2",1,1);
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了200档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了200档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功200赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
