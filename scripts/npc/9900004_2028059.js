
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
			text += "#k世界随机收集任务14 达到一定值可获取对应奖励\r\n\r\n"//3
			text += "#r收集#v4000068#666\r\n"//3
	        text += "#r收集#v4000074#666\r\n\r\n"//3
			text += "#k奖励:#v4000463#*30#v2613000#*2#v2028048#3000万\r\n\r\n"//3
            text += "#L1##b世界随机任务收集17！#l\r\n\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(4000068,77)  && cm.haveItem(4000074,777) && cm.haveItem(2028059,1)&& cm.getPlayer().getBossLog("世界任务收集17",1) == 0){
				cm.gainItem(4000068, -666);//蝴蝶精的触角
				cm.gainItem(4000074, -666);//黑色飞狮尾
                cm.gainItem(2028059, -1);//钻石17
				cm.gainItem(4000463, 30);//国庆币
				cm.gainItem(2613000, 2);//国庆币
				cm.gainMeso(30000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
				cm.getPlayer().setBossLog("世界任务收集17",1,1);
				cm.getPlayer().setBossLog("世界任务收集",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界随机任务收集" + " : " + cm.getPlayer().getName() +"恭喜完成了世界随机任务收集17 获得成就值加1",true).getBytes());
						
            cm.sendOk("任务17成功！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经完成一次了");
            cm.dispose();
			}
		}
    }
}
