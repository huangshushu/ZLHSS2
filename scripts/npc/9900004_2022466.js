
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

            text += "#L1##b赞助750礼包！#l\r\n\r\n"//3
			text += "#v2028175#*1个#l\r\n\r\n"//1
			text += "#v4310148#*1个#l\r\n\r\n"//1
			text += "#v4001165#*1888个#l\r\n\r\n"//1
			text += "#v2046913#*8个#l\r\n\r\n"//1
			text += "#v4011008#*6个#l\r\n\r\n"//1
			text += "#v4011007#*6个#l\r\n\r\n"//1
			text += "#v4310060#*5个#l\r\n\r\n"//1
			text += "#v4310108#*80个#l\r\n\r\n"//1
			text += "#v2450000#*20个#l\r\n\r\n"//1
		    text += "#v2022529#*20个#l\r\n\r\n"//1
			text += "#v2022530#*20个#l\r\n\r\n"//1
			text += "#v4001245#*5个#l\r\n\r\n"//1
			
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028091,1) ){
				
                cm.gainItem(2028091, -1);//
				cm.gainItem(2028175, 1);//
				cm.gainItem(4310148, 1);//
				cm.gainItem(4001165, 1888);//
				cm.gainItem(2046913, 8);//
				cm.gainItem(4011008, 6);//
				cm.gainItem(4011007, 6);//
				cm.gainItem(4310060, 5);//
				cm.gainItem(4310108, 80);//
				cm.gainItem(2450000, 20);//
				cm.gainItem(2022529, 20);//
				cm.gainItem(2022530, 20);//
                cm.gainItem(4001245, 5);//				
				//cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"周末充值礼包礼包" + " : " + cm.getPlayer().getName() +"恭喜获得了每周末750充值礼包 ！",true).getBytes());
						
            cm.sendOk("赞助750礼包！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经领取一次了");
            cm.dispose();
			}
		}
    }
}
