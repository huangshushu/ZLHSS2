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
			gsjb += "     #L1##b"+小烟花 +"制作#v4011000##z4011000##r(需要#v4010000#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L2##b"+小烟花 +"制作#v4011001##z4011001##r(需要#v4010001#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L3##b"+小烟花 +"制作#v4011002##z4011002##r(需要#v4010002#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L4##b"+小烟花 +"制作#v4011003##z4011003##r(需要#v4010003#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L5##b"+小烟花 +"制作#v4011004##z4011004##r(需要#v4010004#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L6##b"+小烟花 +"制作#v4011005##z4011005##r(需要#v4010005#*10+5W金币)"+小烟花 +"#l\r\n";
			gsjb += "     #L7##b"+小烟花 +"制作#v4011006##z4011006##r(需要#v4010006#*10+5W金币)"+小烟花 +"#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4010000) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010000#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 1;
					cm.sendGetNumber("#r请输入需要制作的#v4011000#的数量:\r\n#b当前拥有#v4010000#的数量为：#r#c4010000#\r\n", 1, 1, 1000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4010001) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010001#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 2;
					cm.sendGetNumber("#r请输入需要制作的#v4011001#的数量:\r\n#b当前拥有#v4010001#的数量为：#r#c4010001#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4010002) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010002#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 3;
					cm.sendGetNumber("#r请输入需要制作的#v4011002#的数量:\r\n#b当前拥有#v4010002#的数量为：#r#c4010002#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4010003) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010003#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 4;
					cm.sendGetNumber("#r请输入需要制作的#v4011003#的数量:\r\n#b当前拥有#v4010003#的数量为：#r#c4010003#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4010004) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010004#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 5;
					cm.sendGetNumber("#r请输入需要制作的#v4011004#的数量:\r\n#b当前拥有#v4010004#的数量为：#r#c4010004#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4010005) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010005#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 6;
					cm.sendGetNumber("#r请输入需要制作的#v4011005#的数量:\r\n#b当前拥有#v4010005#的数量为：#r#c4010005#\r\n", 1, 1, 1000);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4010006) == 0 || cm.getMeso() < 50000) {
                    cm.sendNext("#r你的背包内没有足够的#v4010006#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 7;
					cm.sendGetNumber("#r请输入需要制作的#v4011006#的数量:\r\n#b当前拥有#v4010006#的数量为：#r#c4010006#\r\n", 1, 1, 1000);
                }
            }
        } else if (status == 2) {
			if (zzks == 1) {
                if (cm.haveItem(4010000, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010000, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011000, selection);
                    cm.sendOk("#b你已成功使用#v4010000#*#r"+selection*10+"#b制作了#v4011000#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个青铜母矿制作了"+selection+"个青铜！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 2) {
                if (cm.haveItem(4010001, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010001, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011001, selection);
                    cm.sendOk("#b你已成功使用#v4010001#*#r"+selection*10+"#b制作了#v4011001#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个钢铁母矿制作了"+selection+"个钢铁！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 3) {
                if (cm.haveItem(4010002, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010002, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011002, selection);
                    cm.sendOk("#b你已成功使用#v4010002#*#r"+selection*10+"#b制作了#v4011002#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个锂矿石母矿制作了"+selection+"个锂矿石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 4) {
                if (cm.haveItem(4010003, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010003, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011003, selection);
                    cm.sendOk("#b你已成功使用#v4010003#*#r"+selection*10+"#b制作了#v4011003#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个朱矿石母矿制作了"+selection+"个朱矿石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 5) {
                if (cm.haveItem(4010004, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010004, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011004, selection);
                    cm.sendOk("#b你已成功使用#v4010004#*#r"+selection*10+"#b制作了#v4011004#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个银母矿制作了"+selection+"个银！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 6) {
                if (cm.haveItem(4010005, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010005, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011005, selection);
                    cm.sendOk("#b你已成功使用#v4010005#*#r"+selection*10+"#b制作了#v4011005#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个紫矿石母矿制作了"+selection+"个紫矿石！"));
                } else {
                    cm.sendNext("#r制作所需的母矿或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 7) {
                if (cm.haveItem(4010006, selection*10) && cm.getMeso() >= selection*50000) {
                    cm.gainItem(4010006, -selection*10);
					cm.gainMeso(-50000*selection);
					cm.gainItem(4011006, selection);
                    cm.sendOk("#b你已成功使用#v4010006#*#r"+selection*10+"#b制作了#v4011006#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "成品矿石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个黄金母矿制作了"+selection+"个黄金！"));
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