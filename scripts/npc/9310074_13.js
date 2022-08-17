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
			gsjb += "         "+小烟花 +"#r欢迎来到月月冒险岛高等水晶宝石#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			gsjb += "#L1##b"+小烟花 +"制作#v4250802##z4250802##r(需要#v4005000#*10+50W金币)"+小烟花 +"#l\r\n";
			gsjb += "#L2##b"+小烟花 +"制作#v4250902##z4250902##r(需要#v4005001#*10+50W金币)"+小烟花 +"#l\r\n";
			gsjb += "#L3##b"+小烟花 +"制作#v4251102##z4251102##r(需要#v4005002#*10+50W金币)"+小烟花 +"#l\r\n";
			gsjb += "#L4##b"+小烟花 +"制作#v4251002##z4251002##r(需要#v4005003#*10+50W金币)"+小烟花 +"#l\r\n";
			gsjb += "#L5##b"+小烟花 +"制作#v4251402##z4251402##r(需要#v4005004#*10+50W金币)"+小烟花 +"#l\r\n";
			gsjb += "             #L6##b"+小烟花 +"制作#v4251202##z4251202#"+小烟花 +"#l\r\n\r\n        #r(需要#v4250802##v4250902##v4251102##v4251002##v4251402#*1+100W)#l\r\n";
			//gsjb += "               #L7##b"+小烟花 +"制作#v4011007##z4011007#"+小烟花 +"#l\r\n\r\n#r(需要#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008#*10+500W)#l\r\n";
			//gsjb += "                #L8##b"+小烟花 +"制作#v4011008##z4011008#"+小烟花 +"#l\r\n\r\n     #r(需要#v4010000##v4010001##v4010002##v4010003##v4010004##v4010005##v4010006#*10+500W)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4005000) == 0 || cm.getMeso() < 500000) {
                    cm.sendNext("#r你的背包内没有足够的#v4005000#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 1;
					cm.sendGetNumber("#r请输入需要制作的#v4250802#的数量:\r\n#b当前拥有#v4005000#的数量为：#r#c4005000#\r\n", 1, 1, 100);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4005001) == 0 || cm.getMeso() < 500000) {
                    cm.sendNext("#r你的背包内没有足够的#v4005001#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 2;
					cm.sendGetNumber("#r请输入需要制作的#v4250902#的数量:\r\n#b当前拥有#v4005001#的数量为：#r#c4005001#\r\n", 1, 1, 100);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4005002) == 0 || cm.getMeso() < 500000) {
                    cm.sendNext("#r你的背包内没有足够的#v4005002#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 3;
					cm.sendGetNumber("#r请输入需要制作的#v4251102#的数量:\r\n#b当前拥有#v4005002#的数量为：#r#c4005002#\r\n", 1, 1, 100);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4005003) == 0 || cm.getMeso() < 500000) {
                    cm.sendNext("#r你的背包内没有足够的#v4005003#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 4;
					cm.sendGetNumber("#r请输入需要制作的#v4251002#的数量:\r\n#b当前拥有#v4005003#的数量为：#r#c4005003#\r\n", 1, 1, 100);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4005004) == 0 || cm.getMeso() < 500000) {
                    cm.sendNext("#r你的背包内没有足够的#v4005004#或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 5;
					cm.sendGetNumber("#r请输入需要制作的#v4251402#的数量:\r\n#b当前拥有#v4005004#的数量为：#r#c4005004#\r\n", 1, 1, 100);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4250802) == 0 || cm.haveItem(4250902) == 0 || cm.haveItem(4251102) == 0 || cm.haveItem(4251002) == 0 || cm.haveItem(4251402) == 0 || cm.getMeso() < 1000000) {
                    cm.sendNext("#r你的背包内没有足够的高等水晶材料或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 6;
					cm.sendGetNumber("#r请输入需要制作的#v4251202#的数量:\r\n", 1, 1, 100);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4020000) == 0 || cm.haveItem(4020001) == 0 || cm.haveItem(4020002) == 0 || cm.haveItem(4020003) == 0 || cm.haveItem(4020004) == 0 || cm.haveItem(4020005) == 0 || cm.haveItem(4020006) == 0 || cm.haveItem(4020007) == 0 || cm.haveItem(4020008) == 0 || cm.getMeso() < 5000000) {
                    cm.sendNext("#r你的背包内没有足够的成品宝石或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 7;
					cm.sendGetNumber("#r请输入需要制作的#v4011007#的数量:\r\n", 1, 1, 100);
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4010000) == 0 || cm.haveItem(4010001) == 0 || cm.haveItem(4010002) == 0 || cm.haveItem(4010003) == 0 || cm.haveItem(4010004) == 0 || cm.haveItem(4010005) == 0 || cm.haveItem(4010006) == 0 || cm.getMeso() < 5000000) {
                    cm.sendNext("#r你的背包内没有足够的成品矿石或金币，不能进行制作！");
                    status = -1;
                } else {
                    zzks = 8;
					cm.sendGetNumber("#r请输入需要制作的#v4011008#的数量:\r\n", 1, 1, 100);
                }
            }
        } else if (status == 2) {
			if (zzks == 1) {
                if (cm.haveItem(4005000, selection*10) && cm.getMeso() >= selection*500000) {
                    cm.gainItem(4005000, -selection*10);
					cm.gainMeso(-500000*selection);
					cm.gainItem(4250802, selection);
                    cm.sendOk("#b你已成功使用#v4005000#*#r"+selection*10+"#b制作了#v4250802#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个力量水晶制作了"+selection+"个高等力量水晶！"));
                } else {
                    cm.sendNext("#r制作所需的水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 2) {
                if (cm.haveItem(4005001, selection*10) && cm.getMeso() >= selection*500000) {
                    cm.gainItem(4005001, -selection*10);
					cm.gainMeso(-500000*selection);
					cm.gainItem(4250902, selection);
                    cm.sendOk("#b你已成功使用#v4005001#*#r"+selection*10+"#b制作了#v4250902#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个智慧水晶制作了"+selection+"个高等智慧水晶！"));
                } else {
                    cm.sendNext("#r制作所需的水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 3) {
                if (cm.haveItem(4005002, selection*10) && cm.getMeso() >= selection*500000) {
                    cm.gainItem(4005002, -selection*10);
					cm.gainMeso(-500000*selection);
					cm.gainItem(4251102, selection);
                    cm.sendOk("#b你已成功使用#v4005002#*#r"+selection*10+"#b制作了#v4251102#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个敏捷水晶制作了"+selection+"个高等敏捷水晶！"));
                } else {
                    cm.sendNext("#r制作所需的水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 4) {
                if (cm.haveItem(4005003, selection*10) && cm.getMeso() >= selection*500000) {
                    cm.gainItem(4005003, -selection*10);
					cm.gainMeso(-500000*selection);
					cm.gainItem(4251002, selection);
                    cm.sendOk("#b你已成功使用#v4005003#*#r"+selection*10+"#b制作了#v4251002#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个幸运水晶制作了"+selection+"个高等幸运水晶！"));
                } else {
                    cm.sendNext("#r制作所需的水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 5) {
                if (cm.haveItem(4005004, selection*10) && cm.getMeso() >= selection*500000) {
                    cm.gainItem(4005004, -selection*10);
					cm.gainMeso(-500000*selection);
					cm.gainItem(4251402, selection);
                    cm.sendOk("#b你已成功使用#v4005004#*#r"+selection*10+"#b制作了#v4251402#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*10+"个黑暗水晶制作了"+selection+"个高等黑暗水晶！"));
                } else {
                    cm.sendNext("#r制作所需的水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 6) {
                if (cm.haveItem(4250802, selection*1) && cm.haveItem(4250902, selection*1) && cm.haveItem(4251102, selection*1) && cm.haveItem(4251002, selection*1) && cm.haveItem(4251402, selection*1) && cm.getMeso() >= selection*1000000) {
                    cm.gainItem(4250802, -selection*1);
					cm.gainItem(4250902, -selection*1);
					cm.gainItem(4251102, -selection*1);
					cm.gainItem(4251002, -selection*1);
					cm.gainItem(4251402, -selection*1);
					cm.gainMeso(-1000000*selection);
					cm.gainItem(4251202, selection);
                    cm.sendOk("#b你已成功使用#v4250802##v4250902##v4251102##v4251002##v4251402#*#r"+selection*1+"#b制作了#v4251202#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用各种高等水晶各"+selection*1+"个制作了"+selection+"个万能水晶！"));
                } else {
                    cm.sendNext("#r制作所需的高等水晶或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 7) {
                if (cm.haveItem(4020000, selection*10) && cm.haveItem(4020001, selection*10) && cm.haveItem(4020002, selection*10) && cm.haveItem(4020003, selection*10) && cm.haveItem(4020004, selection*10) && cm.haveItem(4020005, selection*10) && cm.haveItem(4020006, selection*10) && cm.haveItem(4020007, selection*10) && cm.haveItem(4020008, selection*10) && cm.getMeso() >= selection*5000000) {
                    cm.gainItem(4020000, -selection*10);
					cm.gainItem(4020001, -selection*10);
					cm.gainItem(4020002, -selection*10);
					cm.gainItem(4020003, -selection*10);
					cm.gainItem(4020004, -selection*10);
					cm.gainItem(4020005, -selection*10);
					cm.gainItem(4020006, -selection*10);
					cm.gainItem(4020007, -selection*10);
					cm.gainItem(4020008, -selection*10);
					cm.gainMeso(-5000000*selection);
					cm.gainItem(4011007, selection);
                    cm.sendOk("#b你已成功使用#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008#*#r"+selection*10+"#b制作了#v4011007#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用各种成品宝石各"+selection*10+"个制作了"+selection+"个月石！"));
                } else {
                    cm.sendNext("#r制作所需的成品宝石或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzks == 8) {
                if (cm.haveItem(4010000, selection*10) && cm.haveItem(4010001, selection*10) && cm.haveItem(4010002, selection*10) && cm.haveItem(4010003, selection*10) && cm.haveItem(4010004, selection*10) && cm.haveItem(4010005, selection*10) && cm.haveItem(4010006, selection*10) && cm.getMeso() >= selection*5000000) {
                    cm.gainItem(4010000, -selection*10);
					cm.gainItem(4010001, -selection*10);
					cm.gainItem(4010002, -selection*10);
					cm.gainItem(4010003, -selection*10);
					cm.gainItem(4010004, -selection*10);
					cm.gainItem(4010005, -selection*10);
					cm.gainItem(4010006, -selection*10);
					cm.gainMeso(-5000000*selection);
					cm.gainItem(4011008, selection);
                    cm.sendOk("#b你已成功使用#v4010000##v4010001##v4010002##v4010003##v4010004##v4010005##v4010006#*#r"+selection*10+"#b制作了#v4011008#*#r"+selection+"#b！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "高等水晶宝石" + " : " + "恭喜" + cm.getChar().getName() + "成功使用各种成品矿石各"+selection*10+"个制作了"+selection+"个锂！"));
                } else {
                    cm.sendNext("#r制作所需的成品矿石或金币数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}