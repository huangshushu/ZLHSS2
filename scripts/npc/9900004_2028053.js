
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
			text += "#r收集#v4000032#666个\r\n"//3
	        text += "#r收集#v4000033#666个\r\n\r\n"//3
			text += "#k奖励:#v4000463#*30#v4000313#*300#v2028048#3000万\r\n\r\n"//3
            text += "#L1##b世界随机任务收集14！#l\r\n\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(4000032,666)  && cm.haveItem(4000033,666) && cm.haveItem(2028053,1)&& cm.getPlayer().getBossLog("世界任务收集14",1) == 0){
				cm.gainItem(4000032, -666);//鳄鱼皮
				cm.gainItem(4000033, -666);//黑鳄鱼皮
                cm.gainItem(2028053, -1);//钻石14
				cm.gainItem(4000463, 30);//属性箱子
				cm.gainItem(4000313, 300);
				cm.gainMeso(30000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
				cm.getPlayer().setBossLog("世界任务收集14",1,1);
				cm.getPlayer().setBossLog("世界任务收集",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界随机任务收集" + " : " + cm.getPlayer().getName() +"恭喜完成了世界随机任务收集14 获得成就值加1",true).getBytes());
						
            cm.sendOk("任务14成功！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经完成一次了");
            cm.dispose();
			}
		}
    }
}
