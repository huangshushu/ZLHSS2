
//function start() {
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

            text += "#L1##b赞助时装公式礼包！#l\r\n\r\n"//3
			text += "#v2510060#*1个#l\r\n\r\n"//1
			text += "#v2510061#*1个#l\r\n\r\n"//1
			text += "#v2510062#*1个#l\r\n\r\n"//1
			text += "#v2510063#*1个#l\r\n\r\n"//1
			text += "#v2510064#*1个#l\r\n\r\n"//1
			text += "#v2510065#*1个#l\r\n\r\n"//1
			text += "#v2510000#*1个#l\r\n\r\n"//1
			text += "#v2510001#*1个#l\r\n\r\n"//1
		    text += "#v2510002#*1个#l\r\n\r\n"//1
			text += "#v1022060#*1个#l\r\n\r\n"//1
			text += "#v1012307#*1个#l\r\n\r\n"//1
			
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028091,1) ){
				
                cm.gainItem(2028091, -1);//
				cm.gainItem(2510060, 1);//
				cm.gainItem(2510061, 1);//
				cm.gainItem(2510062, 1);//
				cm.gainItem(2510063, 1);//
				cm.gainItem(2510064, 1);//
				cm.gainItem(2510065, 1);//
				cm.gainItem(2510000, 1);//
				cm.gainItem(2510001, 1);//
				cm.gainItem(2510002, 1);//
				cm.gainItem(1022060, 1);//
                cm.gainItem(1012307, 1);//				
				//cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"周末充值礼包礼包" + " : " + cm.getPlayer().getName() +"恭喜获得了每周末750充值礼包 ！",true).getBytes());
						
            cm.sendOk("赞助时装公式礼包！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经领取一次了");
            cm.dispose();
			}
		}
    }
}
