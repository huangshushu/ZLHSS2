
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
			text += "#k世界随机收集任务8 达到一定值可获取对应奖励\r\n\r\n"//3
			text += "#r收集#v4310143#666个\r\n"//3
	        text += "#r收集#v4310057#222个\r\n\r\n"//3
			text += "#k奖励:#v1112119#*1全属性30\r\n\r\n"//3
            text += "#L1##b世界随机任务收集7！#l\r\n\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(4310143,666)  && cm.haveItem(4310057,222) && cm.haveItem(2028056,1)&& cm.getPlayer().getBossLog("世界任务收集8",1) == 0){
				cm.gainItem(4310143, -666);//抽奖蛋
				cm.gainItem(4310057, -222);//钓鱼币
                cm.gainItem(2028056, -1);//果实盒子8
				cm.gainItem(1112119,30,30,30,30,1000,1000,30,30,0,0,0,0,0,0);
				//cm.gainMeso(30000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
				cm.getPlayer().setBossLog("世界任务收集8",1,1);
				cm.getPlayer().setBossLog("世界任务收集",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"世界随机任务收集" + " : " + cm.getPlayer().getName() +"恭喜完成了世界随机任务收集8 获得成就值加1",true).getBytes());
						
            cm.sendOk("任务8成功！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经完成一次了");
            cm.dispose();
			}
		}
    }
}
