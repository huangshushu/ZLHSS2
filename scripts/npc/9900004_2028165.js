
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

            text += "#L1##b副本礼包！#l\r\n\r\n"//3
			text += "#v4002000#*10个#l\r\n"//1
			text += "#v4002001#*10个#l\r\n"//1
			text += "#v4002003#*10个#l\r\n"//1
			text += "#v4002002#*10个#l\r\n"//3
			text += "#v4001198#*10个#l\r\n"//3
			text += "#v4001158#*10个#l\r\n"//3
			//text += "#v4251202#*100个 万能水晶#l\r\n"//3
			//text += "#v2028158#*5个 随机公式#l\r\n"//3
		    //text += "#v4011008#*6个 锂#l\r\n"//3
			//text += "#v4011007#*6个 月石#l\r\n"//3
			//text += "#v4310108#*80个 UR时装附魔币#l\r\n"//3
			//text += "#v2040815#*10个 手套增幅卷#l\r\n"//3
			//text += "#v2041315#*10个 腰带增幅卷#l\r\n"//3
			//text += "#v2450000#*10个 狩猎#l\r\n"//3
			//text += "#v2022530#*10个 花语#l\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028165,1) ){
				
                cm.gainItem(2028165, -1);//
				cm.gainItem(4002000, 10);//
				cm.gainItem(4002001, 10);//
				cm.gainItem(4002002, 10);//
				cm.gainItem(4002003, 10);//
				cm.gainItem(4001198, 10);//
				cm.gainItem(4001158, 10);//
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(4001165, 1000);//太阳
				//cm.gainItem(4005004, 200);//黑暗水晶 
				//cm.gainItem(4251202, 100);//万能水晶
				//cm.gainItem(2028158, 5);//随机公式
				//cm.gainItem(4011008, 6);//锂
				//cm.gainItem(4011007, 6);//月石
				//cm.gainItem(4310108, 80);//UR币
				//cm.gainItem(2040815, 10);//手套卷
				//cm.gainItem(2041315, 10);//腰带卷
				//cm.gainItem(2450000, 10);//狩猎
				//cm.gainItem(2022530, 10);//花语
				
				//cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"邮票礼包" + " : " + cm.getPlayer().getName() +"恭喜获得了邮品礼包 ！",true).getBytes());
						
            cm.sendOk("邮票礼包礼包！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经领取一次了");
            cm.dispose();
			}
		}
    }
}
