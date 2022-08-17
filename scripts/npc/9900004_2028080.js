
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

            text += "#L1##b推广福利礼包！#l\r\n\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028080,1) ){
				
                cm.gainItem(2028080, -1);//
				cm.gainItem(3992025, 500);//圣诞大星
				cm.gainItem(4001165, 50);//太阳神的赐福
				//cm.gainItem(2028158, 1);//随机公式
				//cm.gainItem(4011007, 1);//月石
				//cm.gainItem(4011008, 1);//锂
				cm.gainItem(4000463, 10);//中介币
				cm.gainItem(2022530, 1);//双爆
				cm.gainItem(2450000, 1);//幸运的狩猎
                //cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"b推广活动礼包！" + " : " + cm.getPlayer().getName() +"恭喜获得了推广福利礼包！",true).getBytes());
						
            cm.sendOk("恭喜获得推广活动礼包！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经领取一次了");
            cm.dispose();
			}
		}
    }
}
