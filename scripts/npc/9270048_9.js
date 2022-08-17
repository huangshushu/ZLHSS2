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
var kuangshi = 0;
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
            gsjb += "                   #r你当前拥有#v4000487#*#c4000487#\r\n";
			gsjb += "        #L1##b"+小烟花 +"#v4000487#兑换#v4011000##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L2##b"+小烟花 +"#v4000487#兑换#v4011001##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L3##b"+小烟花 +"#v4000487#兑换#v4011002##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L4##b"+小烟花 +"#v4000487#兑换#v4011003##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L5##b"+小烟花 +"#v4000487#兑换#v4011004##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L6##b"+小烟花 +"#v4000487#兑换#v4011005##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L7##b"+小烟花 +"#v4000487#兑换#v4011006##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L8##b"+小烟花 +"#v4000487#兑换#v4021000##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L9##b"+小烟花 +"#v4000487#兑换#v4021001##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L10##b"+小烟花 +"#v4000487#兑换#v4021002##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L11##b"+小烟花 +"#v4000487#兑换#v4021003##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L12##b"+小烟花 +"#v4000487#兑换#v4021004##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L13##b"+小烟花 +"#v4000487#兑换#v4021005##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L14##b"+小烟花 +"#v4000487#兑换#v4021006##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L15##b"+小烟花 +"#v4000487#兑换#v4021007##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L16##b"+小烟花 +"#v4000487#兑换#v4021008##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L17##b"+小烟花 +"#v4000487#兑换#v4005000##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L18##b"+小烟花 +"#v4000487#兑换#v4005001##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L19##b"+小烟花 +"#v4000487#兑换#v4005002##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L20##b"+小烟花 +"#v4000487#兑换#v4005003##r(比例50：1)"+小烟花 +"#l\r\n";
			gsjb += "        #L21##b"+小烟花 +"#v4000487#兑换#v4005004##r(比例75：1)"+小烟花 +"#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 1;
					cm.sendGetNumber("#r请输入需要兑换的#v4011000#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 2;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011001#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 3;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011002#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 4;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011003#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 5;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011004#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 6;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011005#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 7;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4011006#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 8;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021000#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 9;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021001#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 10;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021002#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 11;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021003#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 12;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021004#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 13;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021005#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 14;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021006#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 15;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021007#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 16;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4021008#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 17;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4005000#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 18) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 18;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4005001#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 19) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 19;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4005002#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 20) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 20;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4005003#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 21) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000487#，不能进行兑换！");
                    status = -1;
                } else {
                    kuangshi = 21;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4005004#的数量:\r\n#b当前拥有#v4000487#的数量为：#r#c4000487#\r\n", 1, 1, 200);
                }
            }
        } else if (status == 2) {
			if (kuangshi == 1) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011000, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011000#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个青铜！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 2) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011001, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011001#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个钢铁！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 3) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011002, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011002#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个锂矿石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 4) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011003, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011003#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个朱矿石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 5) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011004, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011004#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个银！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 6) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011005, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011005#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个紫矿石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 7) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011006, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4011006#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个黄金！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 8) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021000, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021000#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个石榴石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 9) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021001, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021001#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个紫水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 10) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021002, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021002#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个海蓝宝石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 11) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021003, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021003#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个祖母绿！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 12) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021004, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021004#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个蛋白石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 13) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021005, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021005#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个蓝宝石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 14) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021006, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021006#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个黄晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 15) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021007, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021007#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个钻石！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 16) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021008, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4021008#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个黑水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 17) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005000, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4005000#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个力量水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 18) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005001, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4005001#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个智慧水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 19) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005002, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4005002#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个敏捷水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 20) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005003, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*50+"兑换了#v4005003#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*50+"个钓鱼兑换币兑换了"+selection+"个幸运水晶！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (kuangshi == 21) {
                if (cm.haveItem(4000487, selection*75)) {
                    cm.gainItem(4000487, -selection*75);
					cm.gainItem(4005004, selection);
                    cm.sendOk("#r你已成功使用#v4000487#*"+selection*75+"兑换了#v4005004#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*75+"个钓鱼兑换币兑换了"+selection+"个黑暗水晶！"));
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