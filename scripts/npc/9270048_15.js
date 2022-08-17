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
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛暴君兑换#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                   #r你当前拥有#v4310058#*#c4310058#\r\n";
			gsjb += "     #L1##b"+小烟花 +"#v4310058#*20兑换#v1132174##z1132174##r#l\r\n";
			gsjb += "     #L2##b"+小烟花 +"#v4310058#*20兑换#v1132175##z1132175##r#l\r\n";
			gsjb += "     #L3##b"+小烟花 +"#v4310058#*20兑换#v1132176##z1132176##r#l\r\n";
			gsjb += "     #L4##b"+小烟花 +"#v4310058#*20兑换#v1132177##z1132177##r#l\r\n";
			gsjb += "     #L5##b"+小烟花 +"#v4310058#*20兑换#v1132178##z1132178##r#l\r\n";
			gsjb += "     #L6##b"+小烟花 +"#v4310058#*20兑换#v1072743##z1072743##r#l\r\n";
			gsjb += "     #L7##b"+小烟花 +"#v4310058#*20兑换#v1072744##z1072744##r#l\r\n";
			gsjb += "     #L8##b"+小烟花 +"#v4310058#*20兑换#v1072745##z1072745##r#l\r\n";
			gsjb += "     #L9##b"+小烟花 +"#v4310058#*20兑换#v1072746##z1072746##r#l\r\n";
			gsjb += "     #L10##b"+小烟花 +"#v4310058#*20兑换#v1072747##z1072747##r#l\r\n";
			gsjb += "     #L11##b"+小烟花 +"#v4310058#*24兑换#v1082543##z1082543##r#l\r\n";
			gsjb += "     #L12##b"+小烟花 +"#v4310058#*24兑换#v1082544##z1082544##r#l\r\n";
			gsjb += "     #L13##b"+小烟花 +"#v4310058#*24兑换#v1082545##z1082545##r#l\r\n";
			gsjb += "     #L14##b"+小烟花 +"#v4310058#*24兑换#v1082546##z1082546##r#l\r\n";
			gsjb += "     #L15##b"+小烟花 +"#v4310058#*24兑换#v1082547##z1082547##r#l\r\n";
			gsjb += "     #L16##b"+小烟花 +"#v4310058#*24兑换#v1102481##z1102481##r#l\r\n";
			gsjb += "     #L17##b"+小烟花 +"#v4310058#*24兑换#v1102482##z1102482##r#l\r\n";
			gsjb += "     #L18##b"+小烟花 +"#v4310058#*24兑换#v1102483##z1102483##r#l\r\n";
			gsjb += "     #L19##b"+小烟花 +"#v4310058#*24兑换#v1102484##z1102484##r#l\r\n";
			gsjb += "     #L20##b"+小烟花 +"#v4310058#*24兑换#v1102485##z1102485##r#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1132174, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1132174##z1132174#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君西亚戴斯腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1132175, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1132175##z1132175#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君赫尔梅斯腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1132176, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1132176##z1132176#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君凯伦腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1132177, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1132177##z1132177#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君利卡昂腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1132178, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1132178##z1132178#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君阿尔泰腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1072743, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1072743##z1072743#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君西亚戴斯靴！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1072744, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1072744##z1072744#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君赫尔梅斯靴！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1072745, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1072745##z1072745#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君凯伦靴！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1072746, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1072746##z1072746#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君利卡昂靴！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4310058, 20)) {
                    cm.gainItem(4310058, -20);
					cm.gainItem(1072747, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*20兑换了#v1072747##z1072747#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用20个暴君币兑换了暴君阿尔泰靴！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1082543, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1082543##z1082543#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君西亚戴斯手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1082544, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1082544##z1082544#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君赫尔梅斯手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1082545, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1082545##z1082545#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君凯伦手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1082546, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1082546##z1082546#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君利卡昂手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1082547, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1082547##z1082547#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君阿尔泰手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1102481, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1102481##z1102481#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君西亚戴斯披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1102482, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1102482##z1102482#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君赫尔梅斯披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 18) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1102483, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1102483##z1102483#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君凯伦披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 19) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1102484, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1102484##z1102484#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君利卡昂披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 20) {
                if (cm.haveItem(4310058, 24)) {
                    cm.gainItem(4310058, -24);
					cm.gainItem(1102485, 1);
                    cm.sendOk("#r你已成功使用#v4310058#*24兑换了#v1102485##z1102485#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "暴君兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用24个暴君币兑换了暴君阿尔泰披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310058#，不能进行兑换！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}