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
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛漩涡兑换#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                   #r你当前拥有#v4310100#*#c4310100#\r\n";
			gsjb += "         #L1##b"+小烟花 +"#v4310100#*60兑换#v1302297##z1302297##r#l\r\n";
			gsjb += "         #L2##b"+小烟花 +"#v4310100#*60兑换#v1312173##z1312173##r#l\r\n";
			gsjb += "         #L3##b"+小烟花 +"#v4310100#*60兑换#v1322223##z1322223##r#l\r\n";
			gsjb += "         #L4##b"+小烟花 +"#v4310100#*60兑换#v1332247##z1332247##r#l\r\n";
			gsjb += "         #L5##b"+小烟花 +"#v4310100#*60兑换#v1372195##z1372195##r#l\r\n";
			gsjb += "         #L6##b"+小烟花 +"#v4310100#*60兑换#v1382231##z1382231##r#l\r\n";
			gsjb += "         #L7##b"+小烟花 +"#v4310100#*60兑换#v1402220##z1402220##r#l\r\n";
			gsjb += "         #L8##b"+小烟花 +"#v4310100#*60兑换#v1422158##z1422158##r#l\r\n";
			gsjb += "         #L9##b"+小烟花 +"#v4310100#*60兑换#v1432187##z1432187##r#l\r\n";
			gsjb += "         #L10##b"+小烟花 +"#v4310100#*60兑换#v1442242##z1442242##r#l\r\n";
			gsjb += "         #L11##b"+小烟花 +"#v4310100#*60兑换#v1452226##z1452226##r#l\r\n";
			gsjb += "         #L12##b"+小烟花 +"#v4310100#*60兑换#v1462213##z1462213##r#l\r\n";
			gsjb += "         #L13##b"+小烟花 +"#v4310100#*60兑换#v1472235##z1472235##r#l\r\n";
			gsjb += "         #L14##b"+小烟花 +"#v4310100#*60兑换#v1482189##z1482189##r#l\r\n";
			gsjb += "         #L15##b"+小烟花 +"#v4310100#*60兑换#v1492199##z1492199##r#l\r\n";
			gsjb += "         #L16##b"+小烟花 +"#v4310100#*50兑换#v1003976##z1003976##r#l\r\n";
			gsjb += "         #L17##b"+小烟花 +"#v4310100#*50兑换#v1012438##z1012438##r#l\r\n";
			gsjb += "         #L18##b"+小烟花 +"#v4310100#*50兑换#v1022211##z1022211##r#l\r\n";
			gsjb += "         #L19##b"+小烟花 +"#v4310100#*50兑换#v1032224##z1032224##r#l\r\n";
			gsjb += "         #L20##b"+小烟花 +"#v4310100#*50兑换#v1052669##z1052669##r#l\r\n";
			gsjb += "         #L21##b"+小烟花 +"#v4310100#*50兑换#v1082556##z1082556##r#l\r\n";
			gsjb += "         #L22##b"+小烟花 +"#v4310100#*50兑换#v1102623##z1102623##r#l\r\n";
			gsjb += "         #L23##b"+小烟花 +"#v4310100#*50兑换#v1122269##z1122269##r#l\r\n";
			gsjb += "         #L24##b"+小烟花 +"#v4310100#*50兑换#v1132247##z1132247##r#l\r\n";
			gsjb += "         #L25##b"+小烟花 +"#v4310100#*50兑换#v1072874##z1072874##r#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1302297, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1302297##z1302297#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡剑！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1312173, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1312173##z1312173#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡斧！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1322223, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1322223##z1322223#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡锤！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1332247, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1332247##z1332247#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡匕首！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1372195, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1372195##z1372195#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡双手剑！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1382231, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1382231##z1382231#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡巨锤！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1402220, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1402220##z1402220#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡枪！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1422158, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1422158##z1422158#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡矛！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1432187, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1432187##z1432187#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡弓！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1442242, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1442242##z1442242#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡弩！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1452226, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1452226##z1452226#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡拳甲！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1462213, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1462213##z1462213#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡冲拳！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1472235, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1472235##z1472235#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡手铳！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1482189, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1482189##z1482189#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡帽子！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4310100, 60)) {
                    cm.gainItem(4310100, -60);
					cm.gainItem(1492199, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*60兑换了#v1492199##z1492199#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个凯梅尔兹金币兑换了漩涡文身！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1003976, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1003976##z1003976#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡眼镜！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1012438, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1012438##z1012438#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡耳环！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 18) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1022211, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1022211##z1022211#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡皇家外套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 19) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1032224, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1032224##z1032224#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡手套！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 20) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1052669, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1052669##z1052669#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 21) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1082556, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1082556##z1082556#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡吊坠！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 22) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1102623, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1102623##z1102623#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 23) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1122269, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1122269##z1122269#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了暴君阿尔泰披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 24) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1132247, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1132247##z1132247#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了暴君阿尔泰披风！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
		        }
            }
			else if (selection == 25) {
                if (cm.haveItem(4310100,50)) {
                    cm.gainItem(4310100, -50);
					cm.gainItem(1072874, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*50兑换了#v1072874##z1072874#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "漩涡兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个凯梅尔兹金币兑换了漩涡鞋！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310100#，不能进行兑换！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}