var status = -1;
var zzks = 0;
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
                cm.sendNext("如果需要矿石制作服务再来找我吧！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
            gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛成品矿石#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			gsjb += "   #L1##b"+小烟花 +"制作#v4021000##z4021000##r(需要#v4020000#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L2##b"+小烟花 +"制作#v4021001##z4021001##r(需要#v4020001#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L3##b"+小烟花 +"制作#v4021002##z4021002##r(需要#v4020002#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L4##b"+小烟花 +"制作#v4021003##z4021003##r(需要#v4020003#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L5##b"+小烟花 +"制作#v4021004##z4021004##r(需要#v4020004#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L6##b"+小烟花 +"制作#v4021005##z4021005##r(需要#v4020005#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L7##b"+小烟花 +"制作#v4021006##z4021006##r(需要#v4020006#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L8##b"+小烟花 +"制作#v4021007##z4021007##r(需要#v4020007#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L9##b"+小烟花 +"制作#v4021008##z4021008##r(需要#v4020008#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L10##b"+小烟花 +"制作#v4005000##z4005000##r(需要#v4004000#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L11##b"+小烟花 +"制作#v4005001##z4005001##r(需要#v4004001#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L12##b"+小烟花 +"制作#v4005002##z4005002##r(需要#v4004002#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L13##b"+小烟花 +"制作#v4005003##z4005003##r(需要#v4004003#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "   #L14##b"+小烟花 +"制作#v4005004##z4005004##r(需要#v4004004#*10+5W金币)"+小烟花 +"#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4020000) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020000#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 1;
					cm.sendGetNumber("#r请输入需要制作的#v4021000#的数量:\r\n#b当前拥有#v4020000#的数量为：#r#c4020000#\r\n", 1, 1, 1000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4020001) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020001#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 2;
					cm.sendGetNumber("#r请输入需要制作的#v4021001#的数量:\r\n#b当前拥有#v4020001#的数量为：#r#c4020001#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4020002) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020002#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 3;
					cm.sendGetNumber("#r请输入需要制作的#v4021002#的数量:\r\n#b当前拥有#v4020002#的数量为：#r#c4020002#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4020003) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020003#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 4;
					cm.sendGetNumber("#r请输入需要制作的#v4021003#的数量:\r\n#b当前拥有#v4020003#的数量为：#r#c4020003#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4020004) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020004#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 5;
					cm.sendGetNumber("#r请输入需要制作的#v4021004#的数量:\r\n#b当前拥有#v4020004#的数量为：#r#c4020004#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4020005) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020005#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 6;
					cm.sendGetNumber("#r请输入需要制作的#v4021005#的数量:\r\n#b当前拥有#v4020005#的数量为：#r#c4020005#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4020006) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020006#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 7;
					cm.sendGetNumber("#r请输入需要制作的#v4021006#的数量:\r\n#b当前拥有#v4020006#的数量为：#r#c4020006#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4020007) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020007#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 8;
					cm.sendGetNumber("#r请输入需要制作的#v4021007#的数量:\r\n#b当前拥有#v4020007#的数量为：#r#c4020007#\r\n", 1, 1, 1000);
                }
            }               
			else if (selection == 9) {
                if (cm.haveItem(4020008) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4020008#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 9;
					cm.sendGetNumber("#r请输入需要制作的#v4021008#的数量:\r\n#b当前拥有#v4020008#的数量为：#r#c4020008#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4004000) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4004000#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 10;
					cm.sendGetNumber("#r请输入需要制作的#v4005000#的数量:\r\n#b当前拥有#v4004000#的数量为：#r#c4004000#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4004001) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4004001#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 11;
					cm.sendGetNumber("#r请输入需要制作的#v4005001#的数量:\r\n#b当前拥有#v4004001#的数量为：#r#c4004001#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4004002) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4004002#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 12;
					cm.sendGetNumber("#r请输入需要制作的#v4005002#的数量:\r\n#b当前拥有#v4004002#的数量为：#r#c4004002#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4004003) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4004003#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 13;
					cm.sendGetNumber("#r请输入需要制作的#v4005003#的数量:\r\n#b当前拥有#v4004003#的数量为：#r#c4004003#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4004004) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4004004#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 14;
					cm.sendGetNumber("#r请输入需要制作的#v4005004#的数量:\r\n#b当前拥有#v4004004#的数量为：#r#c4004004#\r\n", 1, 1, 1000);
                }
            }
        } else if (status == 2) {
			if (zzks == 1) {
                if (cm.haveItem(4020000, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020000, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021000, selection);
                    cm.sendOk("#b你已成功使用#v4020000#*#r"+selection*10+"#b制作了#v4021000#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个石榴石母矿制作了"+selection+"个石榴石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 2) {
                if (cm.haveItem(4020001, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020001, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021001, selection);
                    cm.sendOk("#b你已成功使用#v4020001#*#r"+selection*10+"#b制作了#v4021001#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个紫水晶母矿制作了"+selection+"个紫水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 3) {
                if (cm.haveItem(4020002, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020002, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021002, selection);
                    cm.sendOk("#b你已成功使用#v4020002#*#r"+selection*10+"#b制作了#v4021002#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个海蓝石母矿制作了"+selection+"个海蓝宝石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 4) {
                if (cm.haveItem(4020003, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020003, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021003, selection);
                    cm.sendOk("#b你已成功使用#v4020003#*#r"+selection*10+"#b制作了#v4021003#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个祖母绿母矿制作了"+selection+"个祖母绿！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 5) {
                if (cm.haveItem(4020004, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020004, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021004, selection);
                    cm.sendOk("#b你已成功使用#v4020004#*#r"+selection*10+"#b制作了#v4021004#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个蛋白石母矿制作了"+selection+"个蛋白石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 6) {
                if (cm.haveItem(4020005, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020005, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021005, selection);
                    cm.sendOk("#b你已成功使用#v4020005#*#r"+selection*10+"#b制作了#v4021005#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个蓝宝石母矿制作了"+selection+"个蓝宝石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 7) {
                if (cm.haveItem(4020006, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020006, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021006, selection);
                    cm.sendOk("#b你已成功使用#v4020006#*#r"+selection*10+"#b制作了#v4021006#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个黄晶母矿制作了"+selection+"个黄晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 8) {
                if (cm.haveItem(4020007, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020007, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021007, selection);
                    cm.sendOk("#b你已成功使用#v4020007#*#r"+selection*10+"#b制作了#v4021007#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个钻石母矿制作了"+selection+"个钻石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 9) {
                if (cm.haveItem(4020008, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4020008, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4021008, selection);
                    cm.sendOk("#b你已成功使用#v4020008#*#r"+selection*10+"#b制作了#v4021008#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个黑水晶母矿制作了"+selection+"个黑水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 10) {
                if (cm.haveItem(4004000, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4004000, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4005000, selection);
                    cm.sendOk("#b你已成功使用#v4004000#*#r"+selection*10+"#b制作了#v4005000#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个力量母矿制作了"+selection+"个力量水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 11) {
                if (cm.haveItem(4004001, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4004001, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4005001, selection);
                    cm.sendOk("#b你已成功使用#v4004001#*#r"+selection*10+"#b制作了#v4005001#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个智慧母矿制作了"+selection+"个智慧水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 12) {
                if (cm.haveItem(4004002, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4004002, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4005002, selection);
                    cm.sendOk("#b你已成功使用#v4004002#*#r"+selection*10+"#b制作了#v4005002#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个敏捷母矿制作了"+selection+"个敏捷水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 13) {
                if (cm.haveItem(4004003, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4004003, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4005003, selection);
                    cm.sendOk("#b你已成功使用#v4004003#*#r"+selection*10+"#b制作了#v4005003#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个幸运母矿制作了"+selection+"个幸运水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 14) {
                if (cm.haveItem(4004004, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4004004, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4005004, selection);
                    cm.sendOk("#b你已成功使用#v4004004#*#r"+selection*10+"#b制作了#v4005004#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个黑暗水晶母矿制作了"+selection+"个黑暗水晶！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}