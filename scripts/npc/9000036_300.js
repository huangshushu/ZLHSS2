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
var zzbi = 0;
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
			gsjb += "          "+小烟花 +"#r欢迎来到月月冒险岛赞助币商店#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            gsjb += "                 #r你当前拥有#v4310149#*#c4310149#\r\n";
			gsjb += "#L1##b"+小烟花 +"#v4310149#购买#v2049116##z2049116##r(比例4：1)#l\r\n";
			gsjb += "#L2##b"+小烟花 +"#v4310149#购买#v2613000##r(比例40：1)#l\r\n";
			gsjb += "#L3##b"+小烟花 +"#v4310149#购买#v2046913##r(比例50：1)#l\r\n";
			//gsjb += "#L4##b"+小烟花 +"#v4310149#购买#v1402037#龙背刃#r(比例160：1)#l\r\n";
			gsjb += "#L5##b"+小烟花 +"#v4310149#购买#v2028164##z2028164##r(比例350：1)#l\r\n";
			//gsjb += "#L6##b"+小烟花 +"#v4310149#购买#v1402180#解放的凯瑟利安#r(比例800：1)#l\r\n";
			//gsjb += "#L7##b"+小烟花 +"#v4310149#购买#v1382235#阿丽莎之光辉#r(比例800：1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 1;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v2049116#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 2;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v2613000#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 3;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v2046913#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 2000);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 4;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v1402037#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 1);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 5;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v2028164#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 5);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 6;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v1402180#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 1);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行购买！");
                    status = -1;
                } else {
                    zzbi = 7;
					cm.sendGetNumber("#r请输入需要使用#v4310149#购买的#v1382235#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 1);
                }
            }
        } else if (status == 2) {
			if (zzbi == 1) {
                if (cm.haveItem(4310149, selection*4)) {
                    cm.gainItem(4310149, -selection*4);
					cm.gainItem(2049116, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*4+"购买了#v2049116#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*4+"个七七赞助币购买了"+selection+"个强化混沌卷轴！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 2) {
                if (cm.haveItem(4310149, selection*40)) {
                    cm.gainItem(4310149, -selection*40);
					cm.gainItem(2613000, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*40+"购买了#v2613000#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*40+"个七七赞助币购买了"+selection+"个星火武器卷轴！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 3) {
                if (cm.haveItem(4310149, selection*50)) {
                    cm.gainItem(4310149, -selection*50);
					cm.gainItem(2046913, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*50+"购买了#v2046913#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*50+"个七七赞助币购买了"+selection+"个宿命正义武器卷轴！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 4) {
                if (cm.haveItem(4310149, selection*160)) {
                    cm.gainItem(4310149, -selection*160);
					cm.gainItem(1402037, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*160+"购买了#v1402037#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*160+"个七七赞助币购买了"+selection+"个龙背刃！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 5) {
                if (cm.haveItem(4310149, selection*350)) {
                    cm.gainItem(4310149, -selection*350);
					cm.gainItem(2028164, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*350+"购买了#v2028164#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*350+"个七七赞助币购买了"+selection+"个FFN装备自选箱！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 6) {
                if (cm.haveItem(4310149, selection*800)) {
                    cm.gainItem(4310149, -selection*800);
					cm.gainItem(1402180, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*800+"购买了#v1402180#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*800+"个七七赞助币购买了"+selection+"个解放的凯瑟利安！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
			else if (zzbi == 7) {
                if (cm.haveItem(4310149, selection*800)) {
                    cm.gainItem(4310149, -selection*800);
					cm.gainItem(2049116, selection);
                    cm.sendOk("#r你已成功使用#v4310149#*"+selection*800+"购买了#v2049116#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "七七赞助币商店" + " : " + "恭喜" + cm.getChar().getName() + "成功使用"+selection*4+"个七七赞助币购买了"+selection+"个强化混沌卷轴！"));
                } else {
                    cm.sendNext("#r购买所花费的#v4310149#数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}