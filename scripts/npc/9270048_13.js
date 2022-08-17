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
var choujiang = 0;
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
            gsjb += "                   #r你当前拥有#v4170018#*#c4170018#\r\n";
			gsjb += "     #L1##b"+小烟花 +"#v4170018#兑换#v4000463##z4000463##r(比例50：1)#l\r\n";
			gsjb += "     #L2##b"+小烟花 +"#v4170018#兑换#v4170012##z4170012##r(比例100：1)#l\r\n";
			gsjb += "     #L15##b"+小烟花 +"#v4170018#兑换#v4310108##z4310108##r(比例100：1)#l\r\n";
			gsjb += "     #L3##b"+小烟花 +"#v4170018#兑换#v1102042##z1102042##r(比例500：1)#l\r\n";
			gsjb += "     #L4##b"+小烟花 +"#v4170018#兑换#v1102041##z1102041##r(比例500：1)#l\r\n";
			//gsjb += "     #L5##b"+小烟花 +"#v4170018#兑换#v1382037##z1382037##r(比例150：1)#l\r\n";
			//gsjb += "     #L6##b"+小烟花 +"#v4170018#兑换#v1382049##z1382049##r(比例165：1)#l\r\n";
			//gsjb += "     #L7##b"+小烟花 +"#v4170018#兑换#v1382050##z1382050##r(比例165：1)#l\r\n";
			//gsjb += "     #L8##b"+小烟花 +"#v4170018#兑换#v1382051##z1382051##r(比例165：1)#l\r\n";
			//gsjb += "     #L9##b"+小烟花 +"#v4170018#兑换#v1382052##z1382052##r(比例165：1)#l\r\n";
			//gsjb += "     #L10##b"+小烟花 +"#v4170018#兑换#v1402037##z1402037##r(比例200：1)#l\r\n";
			gsjb += "     #L11##b"+小烟花 +"#v4170018#兑换#v1012319##z1012319##r(比例1000：1)#l\r\n";
			gsjb += "     #L12##b"+小烟花 +"#v4170018#兑换#v1113149##z1113149##r(比例1000：1)#l\r\n";
			gsjb += "     #L13##b"+小烟花 +"#v4170018#兑换#v4310009##z4310009##r(比例500：1)#l\r\n";
			gsjb += "     #L14##b"+小烟花 +"#v4170018#兑换#v4001255##z4001255##r(比例2000：1)#l\r\n";
			gsjb += "     #L10##b"+小烟花 +"#v4170018#兑换#v1112915##z1112915##r(比例3000：1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4170018) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    status = -1;
                } else {
                    choujiang = 1;
					cm.sendGetNumber("#r请输入需要使用#v4170018#兑换的#v4000463#的数量:\r\n#b当前拥有#v4170018#的数量为：#r#c4170018#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4170018) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    status = -1;
                } else {
                    choujiang = 2;
					cm.sendGetNumber("#r请输入需要使用#v4170018#兑换的#v4170012#的数量:\r\n#b当前拥有#v4170018#的数量为：#r#c4170018#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(1102042,1);
                    cm.sendOk("#r你已成功使用#v4170018#*125兑换了#v1102042##z1102042#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用500个点卷抽奖奖励蛋兑换了浪人披风（紫）！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            } 
			else if (selection == 4) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(1102041,1);
                    cm.sendOk("#r你已成功使用#v4170018#*130兑换了#v1102041##z1102041#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用500个点卷抽奖奖励蛋兑换了浪人披风（粉）！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4170018,150)) {
                    cm.gainItem(4170018,-150);
					cm.gainItem(1382037,1);
                    cm.sendOk("#r你已成功使用#v4170018#*150兑换了#v1382037##z1382037#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用150个点卷抽奖奖励蛋兑换了偃月之杖！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382049,1);
                    cm.sendOk("#r你已成功使用#v4170018#*165兑换了#v1382049##z1382049#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用165个点卷抽奖奖励蛋兑换了朱雀长杖！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382050,1);
                    cm.sendOk("#r你已成功使用#v4170018#*165兑换了#v1382050##z1382050#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用165个点卷抽奖奖励蛋兑换了玄武长杖！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382051,1);
                    cm.sendOk("#r你已成功使用#v4170018#*165兑换了#v1382051##z1382051#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用165个点卷抽奖奖励蛋兑换了白虎长杖！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382052,1);
                    cm.sendOk("#r你已成功使用#v4170018#*165兑换了#v1382052##z1382052#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用165个点卷抽奖奖励蛋兑换了青龙长杖！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4170018,3000)) {
                    cm.gainItem(4170018,-3000);
					cm.gainItem(1112915,288,288,288,288,1000,1000,288,288,0,0,0,0,0,0);
                    cm.sendOk("#r你已成功使用#v4170018#*200兑换了#v1112915##z1112915#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用3000个点卷抽奖奖励蛋兑换了288全属性蓝调戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4170018,1000)) {
                    cm.gainItem(4170018,-1000);
					cm.gainItem(1012319,1);
                    cm.sendOk("#r你已成功使用#v4170018#*21000兑换了#v1012319##z1012319#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用1000个点卷抽奖奖励蛋兑换了8周年点点红！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4170018,1000)) {
                    cm.gainItem(4170018,-1000);
					cm.gainItem(1113149,1);
                    cm.sendOk("#r你已成功使用#v4170018#*1000兑换了#v1113149##z1113149#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用1000个点卷抽奖奖励蛋兑换了银花戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(4310009,1);
                    cm.sendOk("#r你已成功使用#v4170018#*500兑换了#v4310148##z4310009#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用500个点卷抽奖奖励蛋兑换了10星必成币！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4170018,2000)) {
                    cm.gainItem(4170018,-2000);
					cm.gainItem(4001255,1);
                    cm.sendOk("#r你已成功使用#v4170018#*2000兑换了#v4001255##z4001255#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用2000个点卷抽奖奖励蛋兑换了15星必成币！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4170018,100)) {
                    cm.gainItem(4170018,-100);
					cm.gainItem(4310108,1);
                    cm.sendOk("#r你已成功使用#v4170018#*100兑换了#v4310108##z4310108#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用100个点卷抽奖奖励蛋兑换了UR时装附魔币！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4170018#，不能进行兑换！");
                    cm.dispose();
                }
            }
			

        } else if (status == 2) {
			if (choujiang == 1) {
                if (cm.haveItem(4170018, selection*50)) {
                    cm.gainItem(4170018, -selection*50);
					cm.gainItem(4000463, selection);
                    cm.sendOk("#r你已成功使用#v4170018#*"+selection*50+"兑换了#v4000463#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个点卷抽奖奖励蛋兑换了"+selection+"个七七中介币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (choujiang == 2) {
                if (cm.haveItem(4170018, selection*100)) {
                    cm.gainItem(4170018, -selection*100);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r你已成功使用#v4170018#*"+selection*100+"兑换了#v4170012#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*100+"个点卷抽奖奖励蛋兑换了"+selection+"个必成卷兑换蛋！"));
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