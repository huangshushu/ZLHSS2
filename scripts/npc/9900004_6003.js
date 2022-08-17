var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n           "+小烟花+"#r欢迎来到月月冒险岛七日补助"+小烟花+"\r\n\r\n";
			text += "       每个帐号只可以领取一次，请慎重选择角色！#l\r\n\r\n"//3
			text += "            完成当日的每日签到后才可领取！#l\r\n\r\n"//3
	        if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz1",1) == 0){
					text += "                #L1#"+小烟花+"#b第1日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz1",1) == 1){
					text += "               "+小烟花+"#r#b第1日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L1#"+小烟花+"#b第1日补助#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz2",1) == 0){
					text += "                #L2#"+小烟花+"#b第2日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz2",1) == 1){
					text += "               "+小烟花+"#r#b第2日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L2#"+小烟花+"#b第2日补助#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz3",1) == 0){
					text += "                #L3#"+小烟花+"#b第3日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz3",1) == 1){
					text += "               "+小烟花+"#r#b第3日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L3#"+小烟花+"#b第3日补助#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz4",1) == 0){
					text += "                #L4#"+小烟花+"#b第4日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz4",1) == 1){
					text += "               "+小烟花+"#r#b第4日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L4#"+小烟花+"#b第4日补助#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz5",1) == 0){
					text += "                #L5#"+小烟花+"#b第5日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz5",1) == 1){
					text += "               "+小烟花+"#r#b第5日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L5#"+小烟花+"#b第5日补助#n"+小烟花+"#l\r\n"//3
			}
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz6",1) == 0){
					text += "                #L6#"+小烟花+"#b第6日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz6",1) == 1){
					text += "               "+小烟花+"#r#b第6日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L6#"+小烟花+"#b第6日补助#n"+小烟花+"#l\r\n"//3
			}
			
			
			if(cm.getBossLog("每日任务_每周") == 0 && cm.getPlayer().getBossLog("qrbz7",1) == 0){
					text += "                #L7#"+小烟花+"#b第7日补助#n"+小烟花+"#l\r\n"//3
				} else if(cm.getPlayer().getBossLog("qrbz7",1) == 1){
					text += "               "+小烟花+"#r#b第7日补助领取完毕#n"+小烟花+"#l#k\r\n"//3
				} else {
					text += "                #L7#"+小烟花+"#b第7日补助#n"+小烟花+"#l\r\n"//3
			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz1",1) == 0){
				cm.gainMeso(1000000);
				cm.gainNX(1000);
				cm.getPlayer().setBossLog("qrbz1",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第1日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第1日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 2) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz2",1) == 0){
				cm.gainMeso(2000000);
				cm.gainNX(2000);
				cm.getPlayer().setBossLog("qrbz2",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第2日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第2日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz3",1) == 0){
				cm.gainMeso(3000000);
				cm.gainNX(3000);
				cm.getPlayer().setBossLog("qrbz3",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第3日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第3日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 4) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz4",1) == 0){
				cm.gainMeso(4000000);
				cm.gainNX(4000);
				cm.getPlayer().setBossLog("qrbz4",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第4日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第4日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 5) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz5",1) == 0){
				cm.gainMeso(5000000);
				cm.gainNX(5000);
				cm.getPlayer().setBossLog("qrbz5",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第5日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第5日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 6) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz6",1) == 0){
				cm.gainMeso(6000000);
				cm.gainNX(6000);
				cm.getPlayer().setBossLog("qrbz6",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第6日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第6日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		} else if (selection == 7) {
			if(cm.getBossLog("每日任务_每周") > 0 && cm.getPlayer().getBossLog("qrbz7",1) == 0){
				cm.gainMeso(7000000);
				cm.gainNX(7000);
				cm.getPlayer().setBossLog("qrbz7",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七日补助" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取了第7日账号补助，祝福他/她吧~"));
				cm.sendOk("领取成功第7日账号补助！");
				cm.dispose();
			}else{
				cm.sendOk("你还没完成今天的每日签到或该账号已经领取过该次补助！");
				cm.dispose();
			}
		}
    }
}
