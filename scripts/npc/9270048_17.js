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
var beilede = 0;
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
			gsjb += "          "+小烟花 +"#r欢迎来到月月冒险岛贝勒德兑换#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                      #r你当前拥有\r\n                #v4310098#*#c4310098#      #v4310097#*#c4310097#\r\n";
			gsjb += "#L1##b"+小烟花 +"#v4310098#*10兑换#v4310097##z4310097##r#l\r\n";
			gsjb += "#L2##b"+小烟花 +"#v4310098#*40兑换#v1032220##z1032220##r#l\r\n";
			//gsjb += "#L3##b"+小烟花 +"#v4310098#*40兑换#v1113072##z1113072##r#l\r\n";
			gsjb += "#L4##b"+小烟花 +"#v4310098#*40兑换#v1122264##z1122264##r#l\r\n";
			gsjb += "#L5##b"+小烟花 +"#v4310098#*40兑换#v1132243##z1132243##r#l\r\n";
			gsjb += "#L6##b"+小烟花 +"#v4310098#*60+#v1032220#兑换#v1032221##z1032221##r#l\r\n";
			//gsjb += "#L7##b"+小烟花 +"#v4310098#*60+#v1113072#兑换#v1113073##z1113073##r#l\r\n";
			gsjb += "#L8##b"+小烟花 +"#v4310098#*60+#v1122264#兑换#v1122265##z1122265##r#l\r\n";
			gsjb += "#L9##b"+小烟花 +"#v4310098#*60+#v1132243#兑换#v1132244##z1132244##r#l\r\n";
			gsjb += "#L10##b"+小烟花 +"#v4310098#*90+#v1032221#兑换#v1032222##z1032222##r#l\r\n";
			//gsjb += "#L11##b"+小烟花 +"#v4310098#*90+#v1113073#兑换#v1113074##z1113074##r#l\r\n";
			gsjb += "#L12##b"+小烟花 +"#v4310098#*90+#v1122265#兑换#v1122266##z1122266##r#l\r\n";
			gsjb += "#L13##b"+小烟花 +"#v4310098#*90+#v1132244#兑换#v1132245##z1132245##r#l\r\n";
			gsjb += "#L14##b"+小烟花 +"#v4310097#*50+#v1032222#兑换#v1032223##z1032223##r#l\r\n";
			//gsjb += "#L15##b"+小烟花 +"#v4310097#*50+#v1113074#兑换#v1113075##z1113075##r#l\r\n";
			gsjb += "#L16##b"+小烟花 +"#v4310097#*50+#v1122266#兑换#v1122267##z1122267##r#l\r\n";
			gsjb += "#L17##b"+小烟花 +"#v4310097#*50+#v1132245#兑换#v1132246##z1132246##r#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310098) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#，不能进行兑换！");
                    status = -1;
                } else {
                    beilede = 1;
					cm.sendGetNumber("#r请输入需要兑换#v4310097#的数量:\r\n#b当前拥有#v4310098#的数量为：#r#c4310098#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1032220, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*40兑换了#v1032220##z1032220#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用40个低级贝勒德币兑换了低级贝勒德耳环！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1113072, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*40兑换了#v1113072##z1113072#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用40个低级贝勒德币兑换了低级贝勒德戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1122264, 1);
                    cm.sendOk("#r你已成功使用#v4310100#*40兑换了#v1122264##z1122264#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用40个低级贝勒德币兑换了低级贝勒德刻印吊坠！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1132243, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*40兑换了#v1132243##z1132243#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用40个低级贝勒德币兑换了低级贝勒德刻印腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1032220,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1032220, -1);
					cm.gainItem(1032221, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*60+#v1032220#兑换了#v1032221##z1032221#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个低级贝勒德币+低级贝勒德耳环兑换了中级贝勒德耳环！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1032220#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1113072,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1113072, -1);
					cm.gainItem(1113073, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*60+#v1113072#兑换了#v1113073##z1113073#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个低级贝勒德币+低级贝勒德戒指兑换了中级贝勒德戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1113072#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1122264,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1122264, -1);
					cm.gainItem(1122265, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*60+#v1122264#兑换了#v1122265##z1122265#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个低级贝勒德币+低级贝勒德刻印吊坠兑换了中级贝勒德刻印吊坠！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1122264#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1132243,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1132243, -1);
					cm.gainItem(1132244, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*60+#v1132243#兑换了#v1132244##z1132244#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用60个低级贝勒德币+低级贝勒德刻印腰带兑换了中级贝勒德刻印腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1132243#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1032221,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1032221, -1);
					cm.gainItem(1032222, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*90+#v1032221#兑换了#v1032222##z1032222#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用90个低级贝勒德币+中级贝勒德耳环兑换了高级贝勒德耳环！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1032221#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1113073,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1113073, -1);
					cm.gainItem(1113074, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*90+#v1113073#兑换了#v1113074##z1113074#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用90个低级贝勒德币+中级贝勒德戒指兑换了高级贝勒德戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1113073#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1122265,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1122265, -1);
					cm.gainItem(1122266, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*90+#v1122265#兑换了#v1122266##z1122266#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用90个低级贝勒德币+中级贝勒德刻印吊坠兑换了高级贝勒德刻印吊坠！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1122265#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1132244,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1132244, -1);
					cm.gainItem(1132245, 1);
                    cm.sendOk("#r你已成功使用#v4310098#*90+#v1132244#兑换了#v1132245##z1132245#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用90个低级贝勒德币+中级贝勒德刻印腰带兑换了高级贝勒德刻印腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310098#或#v1132244#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1032222,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1032222, -1);
					cm.gainItem(1032223, 1);
                    cm.sendOk("#r你已成功使用#v4310097#*50+#v1032222#兑换了#v1032223##z1032223#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个贝勒德币+高级贝勒德耳环兑换了最高级贝勒德耳环！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310097#或#v1032222#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1113074,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1113074, -1);
					cm.gainItem(1113075, 1);
                    cm.sendOk("#r你已成功使用#v4310097#*50+#v1113074#兑换了#v1113075##z1113075#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个贝勒德币+高级贝勒德戒指兑换了最高级贝勒德戒指！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310097#或#v1113074#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1122266,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1122266, -1);
					cm.gainItem(1122267, 1);
                    cm.sendOk("#r你已成功使用#v4310097#*50+#v1122266#兑换了#v1122267##z1122267#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个贝勒德币+高级贝勒德刻印吊坠兑换了最高级贝勒德刻印吊坠！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310097#或#v1122266#，不能进行兑换！");
                    cm.dispose();
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1132245,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1132245, -1);
					cm.gainItem(1132246, 1);
                    cm.sendOk("#r你已成功使用#v4310097#*50+#v1132245#兑换了#v1132246##z1132246#！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用50个贝勒德币+高级贝勒德刻印腰带兑换了最高级贝勒德刻印腰带！"));
                } else {
                    cm.sendNext("#r你的背包内没有足够的#v4310097#或#v1132245#，不能进行兑换！");
                    cm.dispose();
                }
            }
		} else if (status == 2) {
			if (beilede == 1) {
                if (cm.haveItem(4310098, selection*10)) {
                    cm.gainItem(4310098, -selection*10);
					cm.gainItem(4310097, selection);
                    cm.sendOk("#r你已成功使用#v4310098#*"+selection*10+"兑换了#v4310097#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "贝勒德兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*10+"个低级贝勒德币兑换了"+selection+"个贝勒德币！"));
                } else {
                    cm.sendNext("#r拥有的#v4310098#数量不足兑换输入的#v4310097#数量，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}