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
			gsjb += "           "+小烟花 +"#r欢迎来到七七兑换#k"+小烟花 +"\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
            gsjb += "                 #r你当前拥有#v4001245#*#c4001245#\r\n";
			gsjb += "        #L1##b"+小烟花 +"#v4001245#兑换时装强化石#r(比例1：5)"+小烟花 +"#l\r\n\r\n";			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4001245) == 0) {
                    cm.sendNext("#r你的背包内没有足够的#v4310149#，不能进行兑换！");
                    status = -1;
                } else {
                    money = 1;
					cm.sendGetNumber("#r请输入兑换时装强化石所要使用#v4310149#的数量:\r\n#b当前拥有#v4310149#的数量为：#r#c4310149#\r\n", 1, 1, 1000);
                }
            }               
															
        } else if (status == 2) {
           if (money == 1) {
                 if (cm.haveItem(4001245, selection)) {
                    cm.gainItem(4001245, -selection);
					cm.gainItem(4001197, 5);
					//cm.gainNX(25000*selection);
                    cm.sendOk("#r你已成功使用#v4001245#*"+selection+"兑换了"+selection*5+"时装强化石！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "中介系统" + " : " + "恭喜『" + cm.getChar().getName() + "』成功使用"+selection+"个游戏币兑换了"+selection*5+"时装强化石！"));
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