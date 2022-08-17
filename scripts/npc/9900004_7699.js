/*
*   交换商店，增强版  NPC
*   By: ZreHy_MS               如果需要改动，请自行修改，本人开服用的~
*/

var status = 0;
var 长乐符 = "#fEffect/CharacterEff/1032063/0/0#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			 var text = "";
			text +="#e#d欢迎来到#r月月冒险岛#d     #k#n#l\r\n\r\n"
			text +="#L12#领取 内测8000赞助积分 #k#n#l\r\n\r\n"
			text +="#L9#领取 满技能材料 #k#n#l\r\n\r\n"
			text +="#L0#领取5E金币#k#n#l\r\n\r\n"
			text +="#L1#领取100W点券#k#n#l\r\n\r\n"
			//text +="#L2#领取1000黄金枫叶#k#n#l\r\n\r\n"
			text +="#L3#领取1000钓鱼币#k#n#l\r\n\r\n"
			text +="#L4#领取100出席勋章#k#n#l\r\n\r\n"
			text +="#L5#领取1000水晶 邮票 #k#n#l\r\n\r\n"
			text +="#L6#领取50个必成#k#n#l\r\n\r\n"
			text +="#L7#领取500个混沌卷#k#n#l\r\n\r\n"
			text +="#L8#领取 副本 500个枫叶珠#k#n#l\r\n\r\n"
			//text +="#L9#领取 满技能材料 #k#n#l\r\n\r\n"
			text +="#L10#领取 二段跳修仙飞升龙咆哮技能兑换书#k#n#l\r\n\r\n"
			//text +="#L11#领取 经验书100个 #k#n#l\r\n\r\n"
			//text +="#L13#领取 重置武器 #k#n#l\r\n\r\n"
			//text +="#L14#领取100个各种邮票#k#n#l\r\n\r\n"
			//text +="#L15#领取20个月石和锂#k#n#l\r\n\r\n"
			//text +="#L16#领取100个劳动奖章#k#n#l\r\n\r\n"
			//text +="#L17#领取100个装备强化水晶#k#n#l\r\n\r\n"
			
			
            cm.sendSimple (text);
        } else if (status == 1) {
            switch(selection) {

			case 0:
				cm.gainMeso(500000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试5E金币！"));
				cm.dispose();
				break;
			case 1: 
				cm.gainNX(1000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试100W点券！"));
				cm.dispose();
				break;
			case 2: 
				cm.gainItem(4000313,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试1000黄金枫叶！"));
				cm.dispose();
            break;
            case 3: 
				cm.gainItem(4000487,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试1000暗影币！"));
				cm.dispose();
				break;
            case 4: 
				cm.gainItem(4032398,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试100出席图章！"));
				cm.dispose();
				break;
			case 15: 
				cm.gainItem(4011007,20);
				cm.gainItem(4011008,20);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试20月石和锂！"));
				cm.dispose();
				break;
			case 16: 
				cm.gainItem(4001266,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试100劳动奖章！"));
				cm.dispose();
				break;
			case 17: 
				cm.gainItem(4251202,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试100装备强化水晶！"));
				cm.dispose();
				break;
				case 5: 
				cm.gainItem(4251202,1000);
				cm.gainItem(4002000,1000);
				cm.gainItem(4002001,1000);
				cm.gainItem(4002002,1000);
				cm.gainItem(4002003,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试水晶邮票！"));
				cm.dispose();
				break;
				case 6: 
				cm.gainItem(4310012,50);
				cm.gainItem(2044003,50);
				cm.gainItem(2044303,50);
				cm.gainItem(2044503,50);
				cm.gainItem(2044603,50);
				cm.gainItem(2043303,50);
				cm.gainItem(2043703,50);
				cm.gainItem(2043803,50);
				cm.gainItem(2044703,50);
				cm.gainItem(2044908,50);
				cm.gainItem(2044815,50);
				cm.gainItem(2044403,50);
				cm.gainItem(2044203,50);
				cm.gainItem(2044103,50);
				cm.gainItem(2043203,50);
				
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试50必成币！"));
				cm.dispose();
				break;
				case 7: 
				cm.gainItem(2049100,500);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试500混沌卷轴！"));
				cm.dispose();
				break;
				case 8: 
				cm.gainItem(4031456,500);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试500副本枫叶珠！"));
				cm.dispose();
				break;
				case 9: 
				cm.gainItem(4000011, 50);
			    cm.gainItem(4000009, 50);
			    cm.gainItem(4000002, 50);
				cm.gainItem(4000034, 50);
				cm.gainItem(4000017, 50);
				cm.gainMeso(10000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试满技能材料！"));
				cm.dispose();
				break;
				case 10: 
				cm.gainItem(3700040,1);
				cm.gainItem(3700048,1);
				cm.gainItem(3700051,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试 二段跳飞升技能兑换书！"));
				cm.dispose();
				break;
				case 11: 
				cm.gainItem(2370000,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试  经验书100个！"));
				cm.dispose();
				break;
				case 12: 
				//cm.setmonezb(+8000)
				cm.setzb(+8000)
				cm.setmoneyb(+8000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试  赞助积分！"));
				cm.dispose();
				break;
				case 13: 
				
				cm.gainItem(1402016, 3);
				cm.gainItem(1432030, 3);
				cm.gainItem(1472053, 3);
				cm.gainItem(1382035, 3);
				cm.gainItem(1452019, 3);
				cm.gainItem(1462015, 3);
				cm.gainItem(1492012, 3);
				cm.gainItem(1332052, 3);
				cm.gainItem(1442044, 3);
				cm.gainItem(1482012, 3);
				//cm.gainItem(4011007, 1);
				//cm.setmoneyb(+100000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试  重置武器！"));
				cm.dispose();
				break;
				case 14: 
				
				cm.gainItem(4002000, 100);
				cm.gainItem(4002001, 100);
				cm.gainItem(4002002, 100);
				cm.gainItem(4002003, 100);
				//cm.gainItem(4011007, 1);
				//cm.setmoneyb(+100000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功领取测试100各种邮票！"));
				cm.dispose();
				break;
            }
        }
    }
}
