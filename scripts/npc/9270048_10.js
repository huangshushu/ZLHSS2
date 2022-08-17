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
            gsjb += "                   #r你当前拥有#v4170012#*#c4170012#\r\n";
			gsjb += "   #L1##b"+小烟花 +"#v4170012#兑换#v2043003##z2043003##r(比例1：1)#l\r\n";
			gsjb += "   #L2##b"+小烟花 +"#v4170012#兑换#v2044003##z2044003##r(比例1：1)#l\r\n";
			gsjb += "   #L3##b"+小烟花 +"#v4170012#兑换#v2044303##z2044303##r(比例1：1)#l\r\n";
			gsjb += "   #L4##b"+小烟花 +"#v4170012#兑换#v2044503##z2044503##r(比例1：1)#l\r\n";
			gsjb += "   #L5##b"+小烟花 +"#v4170012#兑换#v2044603##z2044603##r(比例1：1)#l\r\n";
			gsjb += "   #L6##b"+小烟花 +"#v4170012#兑换#v2043303##z2043303##r(比例1：1)#l\r\n";
			gsjb += "   #L7##b"+小烟花 +"#v4170012#兑换#v2043703##z2043703##r(比例1：1)#l\r\n";
			gsjb += "   #L8##b"+小烟花 +"#v4170012#兑换#v2043803##z2043803##r(比例1：1)#l\r\n";
			gsjb += "   #L9##b"+小烟花 +"#v4170012#兑换#v2044703##z2044703##r(比例1：1)#l\r\n";
			gsjb += "   #L10##b"+小烟花 +"#v4170012#兑换#v2044908##z2044908##r(比例1：1)#l\r\n";
			gsjb += "   #L11##b"+小烟花 +"#v4170012#兑换#v2044815##z2044815##r(比例1：1)#l\r\n";
			gsjb += "   #L12##b"+小烟花 +"#v4170012#兑换#v2044403##z2044403##r(比例1：1)#l\r\n";
			gsjb += "   #L13##b"+小烟花 +"#v4170012#兑换#v2044203##z2044203##r(比例1：1)#l\r\n";
			gsjb += "   #L14##b"+小烟花 +"#v4170012#兑换#v2044103##z2044103##r(比例1：1)#l\r\n";
			gsjb += "   #L15##b"+小烟花 +"#v4170012#兑换#v2043203##z2043203##r(比例1：1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 1;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2043003#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 2;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044003#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 3;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044303#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 4;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044503#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 5;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044603#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 6;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2043303#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 7) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 7;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2043703#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 8) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 8;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2043803#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 9) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 9;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044703#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 10) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 10;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044908#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 11) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 11;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044815#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 12) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 12;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044403#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 13) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 13;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044203#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 14) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 14;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2044103#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 15) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170012#，不能进行兑换！");
                    status = -1;
                } else {
                    bicheng = 15;
					cm.sendGetNumber("#r请输入需要使用#v4170012#兑换的#v2043203#的数量:\r\n#b当前拥有#v4170012#的数量为：#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
        } else if (status == 2) {
			if (bicheng == 1) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043003, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2043003#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"个单手剑攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 2) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044003, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044003#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张双手剑攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 3) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044303, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044303#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张枪攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 4) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044503, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044503#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张弓攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 5) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044603, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044603#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张弩攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 6) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043303, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2043303#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张短剑攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 7) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043703, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2043703#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张短杖攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 8) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043803, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2043803#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张长杖攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 9) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044703, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044703#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张拳套攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 10) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044908, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044908#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张短枪攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 11) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044815, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044815#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张指节攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 12) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044403, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044403#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张矛攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 13) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044203, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044203#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张双手钝器攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 14) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044103, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2044103#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张双手斧攻击必成卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (bicheng == 15) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043203, selection);
                    cm.sendOk("#r你已成功使用#v4170012#*"+selection+"兑换了#v2043203#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个必成币兑换蛋兑换了"+selection+"张单手钝器攻击必成卷！"));
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