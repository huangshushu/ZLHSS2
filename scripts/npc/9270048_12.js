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
var bossbi = 0;
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
            gsjb += "                  #r你当前拥有#v4310143#*#c4310143#\r\n";
			gsjb += "     #L1##b"+小烟花 +"#v4310143#兑换#v2049100##z2049100##r(比例35：1)#l\r\n";
			gsjb += "     #L2##b"+小烟花 +"#v4310143#兑换#v4000463##z4000463##r(比例45：1)#l\r\n";
			gsjb += "     #L3##b"+小烟花 +"#v4310143#兑换#v3992025##z3992025##r(比例1：4)#l\r\n";
			gsjb += "     #L4##b"+小烟花 +"#v4310143#兑换#v4170012##z4170012##r(比例80：1)#l\r\n";
			gsjb += "     #L5##b"+小烟花 +"#v4310143#兑换#v2022530##z2022530##r(比例40：1)#l\r\n";
			gsjb += "     #L6##b"+小烟花 +"#v4310143#兑换#v4031138##z4031138##r(比例1：10W)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 1;
					cm.sendGetNumber("#r请输入需要使用#v4310143#兑换的#v2049100#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 2;
					cm.sendGetNumber("#r请输入需要使用#v4310143#兑换的#v4000463#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 3;
					cm.sendGetNumber("#r请输入兑换#v3992025#所使用的#v4310143#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 4;
					cm.sendGetNumber("#r请输入需要使用#v4310143#兑换的#v4170012#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 5;
					cm.sendGetNumber("#r请输入需要使用#v4310143#兑换的#v2022530#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310143#，不能进行兑换！");
                    status = -1;
                } else {
                    bossbi = 6;
					cm.sendGetNumber("#r请输入兑换#v4031138#所使用的#v4310143#的数量:\r\n#b当前拥有#v4310143#的数量为：#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
        } else if (status == 2) {
			if (bossbi == 1) {
                if (cm.haveItem(4310143, selection*35)) {
                    cm.gainItem(4310143, -selection*35);
					cm.gainItem(2049100, selection);
                    cm.sendOk("#r你已成功使用#v4310143#*"+selection*35+"兑换了#v2049100#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*35+"个BOSS币兑换了"+selection+"个混沌卷轴！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bossbi == 2) {
                if (cm.haveItem(4310143, selection*45)) {
                    cm.gainItem(4310143, -selection*45);
					cm.gainItem(4000463, selection);
                    cm.sendOk("#r你已成功使用#v4310143#*"+selection*45+"兑换了#v4000463#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*45+"个BOSS币兑换了"+selection+"个七七中介币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bossbi == 3) {
                if (cm.haveItem(4310143, selection)) {
                    cm.gainItem(4310143, -selection);
					cm.gainItem(3992025, selection*4);
                    cm.sendOk("#r你已成功使用#v4310143#*"+selection+"兑换了#v3992025#*"+selection*4+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个BOSS币兑换了"+selection*4+"个圣诞大星！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bossbi == 4) {
                if (cm.haveItem(4310143, selection*80)) {
                    cm.gainItem(4310143, -selection*80);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r你已成功使用#v4310143#*"+selection*80+"兑换了#v4170012#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*80+"个BOSS币兑换了"+selection+"个必成币兑换蛋！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bossbi == 5) {
                if (cm.haveItem(4310143, selection*40)) {
                    cm.gainItem(4310143, -selection*40);
					cm.gainItem(2022530, selection);
                    cm.sendOk("#r你已成功使用#v4310143#*"+selection*40+"兑换了#v2022530#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*40+"个BOSS币兑换了"+selection+"个迎春花花语！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bossbi == 6) {
                if (cm.haveItem(4310143, selection)) {
                    cm.gainItem(4310143, -selection);
					cm.gainMeso(selection*100000);
                    cm.sendOk("#r你已成功使用#4310143#*"+selection+"兑换了#v4031138#*"+selection*1+"W！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个BOSS币兑换了"+selection*1+"W金币！"));
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