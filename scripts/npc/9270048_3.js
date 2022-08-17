/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var money1 = 0;
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
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛金币储存#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "         #r你当前拥有#v4001245#*#c4001245#  金币：#b"+cm.getMeso()+"\r\n";
			gsjb += "       #L1##b"+小烟花 +"#v4001245#兑换金币#r(比例1：9800W)"+小烟花 +"#l\r\n";
			gsjb += "        #L2##b"+小烟花 +"金币兑换#v4001245##r(比例1亿：1)"+小烟花 +"#l\r\n";
			gsjb += "       #L3##b"+小烟花 +"#v4031504#兑换金币#r(比例1：1000W)"+小烟花 +"#l\r\n";
			gsjb += "       #L4##b"+小烟花 +"#v4031505#兑换金币#r(比例1：2000W)"+小烟花 +"#l\r\n";
			gsjb += "       #L5##b"+小烟花 +"#v4031506#兑换金币#r(比例1：3000W)"+小烟花 +"#l\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4001245) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4001245#，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 1;
					cm.sendGetNumber("#r请输入兑换金币所要使用#v4001245#的数量:\r\n#b当前拥有#v4001245#的数量为：#r#c4001245#\r\n", 1, 1, 21);
                }
            }
			else if (selection == 2) {
                if (cm.getMeso() < 100000000) {
                    cm.sendNext("#r你的账号没有足够的金币，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 2;
					cm.sendGetNumber("#r请输入你所需换取的#v4001245#的数量:\r\n#b当前拥有的金币数量为：#r"+cm.getMeso()+"\r\n", 1, 1, 21);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4031504) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4031504#，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 3;
					cm.sendGetNumber("#r请输入兑换金币所要使用#v4031504#的数量:\r\n#b当前拥有#v4031504#的数量为：#r#c4031504#\r\n", 1, 1, 21);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4031505) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4031505#，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 4;
					cm.sendGetNumber("#r请输入兑换金币所要使用#v4031505#的数量:\r\n#b当前拥有#v4031505#的数量为：#r#c4031505#\r\n", 1, 1, 21);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4031506) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4031506#，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 5;
					cm.sendGetNumber("#r请输入兑换金币所要使用#v4031506#的数量:\r\n#b当前拥有#v4031506#的数量为：#r#c4031506#\r\n", 1, 1, 21);
                }
            }
        } else if (status == 2) {
           if (money1 == 1) {
                 if (cm.haveItem(4001245, selection)) {
                    cm.gainItem(4001245, -selection);
					cm.gainMeso(98000000*selection);
                    cm.sendOk("#r你已成功使用#v4001245#*"+selection+"换回了"+selection*98000000+"金币！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "金币储存" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个黄金蛋换回了"+selection*98000000+"金币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (money1 == 2) {
                 if (cm.getMeso() >= 100000000*selection) {
					cm.gainMeso(-100000000*selection);
					cm.gainItem(4001245, selection);
                    cm.sendOk("#r你已成功使用"+selection*100000000+"金币储存了#v4001245#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "金币储存" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*100000000+"金币储存了"+selection+"个黄金蛋！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (money1 == 3) {
                 if (cm.haveItem(4031504, selection)) {
                    cm.gainItem(4031504, -selection);
					cm.gainMeso(10000000*selection);
                    cm.sendOk("#r你已成功使用#v4031504#*"+selection+"兑换了"+selection*10000000+"金币！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "礼物盒兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个蓝色礼物盒换回了"+selection*10000000+"金币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (money1 == 4) {
                 if (cm.haveItem(4031505, selection)) {
                    cm.gainItem(4031505, -selection);
					cm.gainMeso(20000000*selection);
                    cm.sendOk("#r你已成功使用#v4031505#*"+selection+"兑换了"+selection*20000000+"金币！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "礼物盒兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个黄色礼物盒换回了"+selection*20000000+"金币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (money1 == 5) {
                 if (cm.haveItem(4031506, selection)) {
                    cm.gainItem(4031506, -selection);
					cm.gainMeso(30000000*selection);
                    cm.sendOk("#r你已成功使用#v4031506#*"+selection+"兑换了"+selection*30000000+"金币！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "礼物盒兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个绿色礼物盒换回了"+selection*30000000+"金币！"));
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