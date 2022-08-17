/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮  
/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var bicheng = 0;
var tosend = 0;
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var sl;
var mats;
var dds;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
            gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛道具兑换#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                  #r你当前拥有#v4032398#*#c4032398#\r\n";
			gsjb += "     #L1##b"+小烟花 +"#v4032398#兑换#v4251202##z4251202##r(比例1：1)#l\r\n";
			gsjb += "     #L2##b"+小烟花 +"#v4032398#兑换#v4170012##z4170012##r(比例2：1)#l\r\n";
			gsjb += "     #L3##b"+小烟花 +"#v4032398#兑换#v2049116##z2049116##r(比例3：1)#l\r\n";
			gsjb += "     #L4##b"+小烟花 +"#v4032398#兑换#v2450000##z2450000##r(比例4：1)#l\r\n";
			gsjb += "     #L5##b"+小烟花 +"#v4032398#兑换#v4011007##z4011007##r(比例5：1)#l\r\n";
			gsjb += "     #L6##b"+小烟花 +"#v4032398#兑换#v4011008##z4011008##r(比例6：1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 1;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v4251202#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 2;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v4170012#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 3;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v2049116#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 4;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v2450000#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 5;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v4011007#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4032398#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 6;
					cm.sendGetNumber("#r请输入需要使用#v4032398#兑换的#v4011008#的数量:\r\n#b当前拥有#v4032398#的数量为：#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
        } else if (status == 2) {
			if (bicheng == 1) {
                if (cm.haveItem(4032398, selection)) {
                    cm.gainItem(4032398, -selection);
					cm.gainItem(4251202, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection+"兑换了#v4251202#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个出席图章兑换了"+selection+"个万能水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 2) {
                if (cm.haveItem(4032398, selection*2)) {
                    cm.gainItem(4032398, -selection*2);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection*2+"兑换了#v4170012#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*2+"个出席图章兑换了"+selection+"个必成卷兑换蛋！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 3) {
                if (cm.haveItem(4032398, selection*3)) {
                    cm.gainItem(4032398, -selection*3);
					cm.gainItem(2049116, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection*3+"兑换了#v2049116#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*3+"个出席图章兑换了"+selection+"个强化混沌卷轴！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 4) {
                if (cm.haveItem(4032398, selection*4)) {
                    cm.gainItem(4032398, -selection*4);
					cm.gainItem(2450000, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection*4+"兑换了#v2450000#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*4+"个出席图章兑换了"+selection+"个幸运的狩猎！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 5) {
                if (cm.haveItem(4032398, selection*5)) {
                    cm.gainItem(4032398, -selection*5);
					cm.gainItem(4011007, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection*5+"兑换了#v4011007#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*5+"个出席图章兑换了"+selection+"个月石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 6) {
                if (cm.haveItem(4032398, selection*6)) {
                    cm.gainItem(4032398, -selection*6);
					cm.gainItem(4011008, selection);
                    cm.sendOk("#r你已成功使用#v4032398#*"+selection*6+"兑换了#v4011008#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*6+"个出席图章兑换了"+selection+"个锂！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}