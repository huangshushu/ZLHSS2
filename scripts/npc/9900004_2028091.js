
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

            text += "#L1##b活动750充值礼包！#l\r\n\r\n"//3
			text += "#v4310148#*1个 25星必成#l\r\n"//1
			text += "#v4310060#*5个进化币 #l\r\n"//1
			text += "#v2613000#*30个 星火#l\r\n"//1
			text += "#v3992025#*100000个 圣诞大星！#l\r\n"//3
			text += "#v4001165#*1000个 太阳神的赐福#l\r\n"//3
			text += "#v4005004#*200个 黑暗水晶#l\r\n"//3
			text += "#v4251202#*200个 万能水晶#l\r\n"//3
			text += "#v2049100#*200个 混沌卷#l\r\n"//3
		    text += "#v4011008#*4个 锂#l\r\n"//3
			text += "#v4011007#*4个 月石#l\r\n"//3
			text += "#v4310108#*60个 UR时装附魔币#l\r\n"//3
			text += "#v2046913#*5个 卷#l\r\n"//3
			text += "#v2028175#*1个 自选进阶#l\r\n"//3
			text += "#v2450000#*20个 狩猎#l\r\n"//3
			text += "#v2022530#*20个 花语#l\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028091,1) ){
				
                cm.gainItem(2028091, -1);//
				cm.gainItem(4310148, 1);//25星必成
				cm.gainItem(4310060, 5);//25进化币
				cm.gainItem(2028175, 1);//自选进阶技能
				//cm.gainItem(3992025, 10000);//强化星星
				//cm.gainItem(3992025, 10000);//强化星星
				cm.gainItem(3992025, 10000);//强化星星
				cm.gainItem(3992025, 10000);//强化星星
				cm.gainItem(3992025, 10000);//强化星星
				cm.gainItem(3992025, 10000);//强化星星
				cm.gainItem(3992025, 10000);//强化星星
			    cm.gainItem(4001165, 1288);//太阳
				cm.gainItem(4005004, 200);//黑暗水晶 
				cm.gainItem(4251202, 200);//万能水晶
				cm.gainItem(2613000, 30);//随机公式
				cm.gainItem(4011008, 4);//锂
				cm.gainItem(4011007, 4);//月石
				cm.gainItem(4310108, 60);//UR币
				cm.gainItem(2049100, 200);//卷
				cm.gainItem(2046913, 5);//腰带卷
				cm.gainItem(2450000, 20);//狩猎
				cm.gainItem(2022530, 20);//花语
				
				//cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"周末充值礼包礼包" + " : " + cm.getPlayer().getName() +"恭喜获得了每周末750充值礼包 ！",true).getBytes());
						
            cm.sendOk("活动750充值礼包！");
            cm.dispose();
			}else{
            cm.sendOk("材料不足,或者已经领取一次了");
            cm.dispose();
			}
		}
    }
}
