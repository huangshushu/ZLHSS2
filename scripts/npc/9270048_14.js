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
var zhenbang = 0;
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
            gsjb += "                  #r你当前拥有#v4310149#*#c4310149#\r\n";
			gsjb += "        #L1##b"+小烟花 +"#v4310149#兑换金币#r(比例1：300W)#l\r\n";
			gsjb += "        #L2##b"+小烟花 +"#v4310149#兑换经验#r(比例1：1000W)#l\r\n";
			gsjb += "        #L3##b"+小烟花 +"#v4310149#兑换点卷#r(比例1：1000)#l\r\n";
			gsjb += "        #L4##b"+小烟花 +"#v4310149#兑换赞助余额#r(比例1：1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行兑换！");
                    status = -1;
                } else {
                    zhenbang = 1;
					cm.sendGetNumber("#r请输入需要使用#v4310149#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行兑换！");
                    status = -1;
                } else {
                    zhenbang = 2;
					cm.sendGetNumber("#r请输入需要使用#v4310149#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行兑换！");
                    status = -1;
                } else {
                    zhenbang = 3;
					cm.sendGetNumber("#r请输入需要使用#v4310149#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行兑换！");
                    status = -1;
                } else {
                    zhenbang = 4;
					cm.sendGetNumber("#r请输入需要使用#v4310149#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            } 
        } else if (status == 2) {
			if (zhenbang == 1) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainMeso(selection*3000000);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection+"兑换了金币*"+selection*150+"W！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个真棒兑换了"+selection*150+"W金币！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zhenbang == 2) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainExpR(selection*10000000);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection+"兑换了经验*"+selection*1000+"W！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个真棒兑换了"+selection*1000+"W经验！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zhenbang == 3) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainNX(+selection*1000);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection+"兑换了点卷*"+selection*1000+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个真棒兑换了"+selection*1000+"点卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zhenbang == 4) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.setmoneyb(+selection*1)
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection+"兑换了"+selection+"点赞助余额！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "道具兑换" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个真棒兑换了"+selection+"赞助余额！"));
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