/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var beauty = 0;
var tosend = 0;
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
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
				gsjb = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				gsjb += "              #r欢迎来到月月冒险岛洗血洗蓝#k\r\n";
				gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
				gsjb += "   #r注意：HP及MP上限不可超过3W，否则角色将出线掉线BUG#k\r\n";
				gsjb += "         #L1#"+小烟花+"#b金币洗血#r（比例25000：1）"+小烟花+"#l\r\n\r\          #L2#"+小烟花+"#b金币洗蓝#r（比例20000：1）"+小烟花+"#l\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.getMeso() < 24000) {
                    cm.sendNext("你所拥有的金币不足！");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("请输入你所需获得的#rHP上限值#k:\r\n#b当前拥有金币数量：#r"+cm.getMeso()+"\r\n", 1, 1, 10000);
                }
            }
			else if (selection == 2) {
                if (cm.getMeso() < 20000) {
                    cm.sendNext("你所拥有的金币不足！");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("请输入你所需获得的#rMP上限值#k:\r\n#b当前拥有金币数量：#r"+cm.getMeso()+"\r\n", 1, 1, 10000);
                }
            }
        } else if (status == 2) {
			if (beauty == 1) {
				var HP = cm.getPlayer().getStat().getMaxHp()
                 if (cm.getMeso() >= 25000*selection) {
                    cm.gainMeso(-25000*selection);
					cm.getPlayer().getStat().setMaxHp(HP+selection);
				    cm.getPlayer().fakeRelog();
                    cm.sendOk("你成功花费#r金币*"+selection*25000+"#k获得#r"+selection+"HP上限！#k#n");
                } else {
                    cm.sendNext("你拥有的金币不足以支付所需费用！");
                    cm.dispose();
                }
            }
			else if (beauty == 2) {
				var MP = cm.getPlayer().getStat().getMaxMp()
                 if (cm.getMeso() >= 20000*selection) {
                    cm.gainMeso(-20000*selection);
					cm.getPlayer().getStat().setMaxMp(MP+selection);
				    cm.getPlayer().fakeRelog();
                    cm.sendOk("你成功花费#r金币*"+selection*20000+"#k获得#r"+selection+"MP上限！#k#n");
                } else {
                    cm.sendNext("你拥有的金币不足以支付所需费用！");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
