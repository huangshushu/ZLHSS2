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
	        text += "               #L1#"+小烟花+"#r领取1000礼包"+小烟花+"#l\r\n\r\n"
			cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.haveItem(2028172,1)){
				cm.gainItem(2028172, -1);
				cm.gainItem(3992025,30000);//圣诞大星
				cm.gainItem(4001165,1300);//太阳神的赐福
				cm.gainItem(4251202,150);//万能水晶
				cm.gainItem(2028158,2);//随机公式箱子
				cm.gainItem(4001245,8);//猪美美的金蛋
				cm.gainItem(4310148,3);//25星
				cm.gainItem(2028175,2);//自选技能书
				cm.gainItem(4310108,60);//UR时装附魔币
				cm.gainItem(2450000,6);//幸运的狩猎
				cm.gainItem(2022529,6);//花语
				cm.gainItem(4011007,7);//月石
				cm.gainItem(4011008,7);//锂
				cm.gainItem(4251202,120);//万能水晶
				cm.gainItem(2049100,120);//混沌卷轴
				cm.gainItem(4005004,1200);//黑水晶
				cm.gainItem(4310060,3);//进化币
				
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "1000礼包" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了1000礼包奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.dispose();			
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();						
			}
		}
    }
}
