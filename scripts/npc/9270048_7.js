/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var money = 0;
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
			gsjb += "           "+小烟花 +"#r欢迎来到月月冒险岛中介系统#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                   #r你当前拥有#v4000313#*#c4000313#\r\n";
			gsjb += "         #L1##b"+小烟花 +"#v4000313#兑换点卷#r(比例1：50)"+小烟花 +"#l\r\n\r\n";	
            gsjb += "          #L2##b"+小烟花 +"点卷兑换#v4000313##r(比例60：1)"+小烟花 +"#l\r\n\r\n";					
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4000313) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4000313#，不能进行兑换！");
                    status = -1;
                } else {
                    money = 1;
					cm.sendGetNumber("#r请输入兑换点卷所要使用#v4000313#的数量:\r\n#b当前拥有#v4000313#的数量为：#r#c4000313#\r\n", 1, 1, 10000);
                }
            }    
           else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) < 60) {
                    cm.sendNext("#r你的账号没有足够的点卷，不能进行兑换！");
                    status = -1;
                } else {
                    money1 = 2;
					cm.sendGetNumber("#r请输入你所需换取的#v4000313#的数量:\r\n#b当前拥有的点卷数量为：#r"+cm.getPlayer().getCSPoints(1)+"\r\n", 1, 1, 100000);
                }
            }			
															
        } else if (status == 2) {
           if (money == 1) {
                 if (cm.haveItem(4000313, selection)) {
                    cm.gainItem(4000313, -selection);
					cm.gainNX(50*selection);
                    cm.sendOk("#r你已成功使用#v4000313#*"+selection+"兑换了"+selection*50+"点卷！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "中介系统" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个黄金枫叶兑换了"+selection*50+"点卷！"));
                } else {
                    cm.sendNext("#r你输入的数量大于你拥有的数量，请重新操作！");
                    cm.dispose();
                }
            }
		else if (money1 == 2) {
                 if (cm.getPlayer().getCSPoints(1) >= 60*selection) {
					cm.gainNX(-60*selection);
					cm.gainItem(4000313, selection);
                    cm.sendOk("#r你已成功使用"+selection*60+"点卷兑换了#v4000313#*"+selection+"！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "中介系统" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection*60+"点卷兑换了"+selection+"个黄金枫叶！"));
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