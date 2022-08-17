/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */

var status = -1;
var beauty = 0;
var tosend = 0;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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
            gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";		
			gsjb += "              #r欢迎来到月月冒险岛点卷道具#k\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
            gsjb += "#L1#"+小烟花+"#b购买#v2022530##z2022530##r(#r需要点卷1500)#l\r\n\r\n";
			gsjb += "#L2#"+小烟花+"#b购买#v5211047##z5211047##r(#r需要点卷2000)#l\r\n\r\n";
			gsjb += "#L3#"+小烟花+"#b购买#v5360014##z5360014##r(#r需要点卷2000)#l\r\n\r\n";
			gsjb += "#L7#"+小烟花+"#b购买#v5220006##z5220006##r(#r需要点卷2000)#l\r\n\r\n";
			gsjb += "#L11#"+小烟花+"#b购买#v5530438##z5530438##r(#r需要点卷3000)#l\r\n\r\n";
			gsjb += "#L6#"+小烟花+"#b购买#v5150040##z5150040##r(#r需要点卷980)#l\r\n\r\n";
			gsjb += "#L4#"+小烟花+"#b购买#v5151001##z5151001##r(#r需要点卷980)#l\r\n\r\n";
			gsjb += "#L5#"+小烟花+"#b购买#v5152001##z5152001##r(#r需要点卷980)#l\r\n\r\n";
			gsjb += "#L10#"+小烟花+"#b购买#v5153000##z5153000##r(#r需要点卷490)#l\r\n\r\n";
			gsjb += "#L8#"+小烟花+"#b购买#v5520000##z5520000##r(#r需要点卷5000)#l\r\n\r\n";
			gsjb += "#L9#"+小烟花+"#b购买#v5590001##z5590001##r(#r需要点卷10000)#l\r\n\r\n";
			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("请输入需要购买#r#v2022530##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("请输入需要购买#r#v5211047##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 3) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 3;
					cm.sendGetNumber("请输入需要购买#r#v5360014##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 4) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 4;
					cm.sendGetNumber("请输入需要购买#r#v5151001##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 5;
					cm.sendGetNumber("请输入需要购买#r#v5152001##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 6) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 6;
					cm.sendGetNumber("请输入需要购买#r#v5150040##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 7) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 7;
					cm.sendGetNumber("请输入需要购买#r#v5220006##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 8) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 8;
					cm.sendGetNumber("请输入需要购买#r#v5520000##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 9) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 9;
					cm.sendGetNumber("请输入需要购买#r#v5590001##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 10) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 10;
					cm.sendGetNumber("请输入需要购买#r#v5153000##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 11) {
                if (cm.getPlayer().getCSPoints(1) == 0) {
                    cm.sendNext("#r你的点卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 11;
					cm.sendGetNumber("请输入需要购买#r#v5530438##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }
               
															
        } else if (status == 2) {
           if (beauty == 1) {
                 if (cm.getPlayer().getCSPoints(1) > selection*1500) {
                    cm.gainItem(2022530, selection);
					cm.gainNX(-1500*selection);
                    cm.sendOk("您成功购入#r#v2022530##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*1500+"点卷成功购买了"+selection+"个迎春花花语！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 2) {
                 if (cm.getPlayer().getCSPoints(1) > selection*2000) {
                    cm.gainItem(5211047, selection, 1);
					cm.gainNX(-2000*selection);
                    cm.sendOk("您成功购入#r#v5211047##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"点卷成功购买了"+selection+"个双倍经验卡！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 3) {
                 if (cm.getPlayer().getCSPoints(1) > selection*2000) {
                    cm.gainItem(5360014, selection, 1);
					cm.gainNX(-2000*selection);
                    cm.sendOk("您成功购入#r#v5360014##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"点卷成功购买了"+selection+"个双倍爆率卡！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 4) {
                 if (cm.getPlayer().getCSPoints(1) > selection*980) {
                    cm.gainItem(5151001, selection);
					cm.gainNX(-980*selection);
                    cm.sendOk("您成功购入#r#v5151001##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*980+"点卷成功购买了"+selection+"个射手村染色高级会员卡！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 5) {
                 if (cm.getPlayer().getCSPoints(1) > selection*980) {
                    cm.gainItem(5152001, selection);
					cm.gainNX(-980*selection);
                    cm.sendOk("您成功购入#r#v5152001##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*980+"点卷成功购买了"+selection+"个射手村整形手术高级会员卡！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 6) {
                 if (cm.getPlayer().getCSPoints(1) > selection*980) {
                    cm.gainItem(5150040, selection);
					cm.gainNX(-980*selection);
                    cm.sendOk("您成功购入#r#v5150040##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*980+"点卷成功购买了"+selection+"个皇家理发卷！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 7) {
                 if (cm.getPlayer().getCSPoints(1) > selection*2000) {
                    cm.gainItem(5220006, selection);
					cm.gainNX(-2000*selection);
                    cm.sendOk("您成功购入#r#v5220006##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"点卷成功购买了"+selection+"个黑龙入场券！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 8) {
                 if (cm.getPlayer().getCSPoints(1) > selection*5000) {
                    cm.gainItem(5520000, selection);
					cm.gainNX(-5000*selection);
                    cm.sendOk("您成功购入#r#v5520000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*5000+"点卷成功购买了"+selection+"个宿命剪刀！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 9) {
                 if (cm.getPlayer().getCSPoints(1) > selection*10000) {
                    cm.gainItem(5590001, selection);
					cm.gainNX(-10000*selection);
                    cm.sendOk("您成功购入#r#v5590001##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*10000+"点卷成功购买了"+selection+"个高级装备特许证！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 10) {
                 if (cm.getPlayer().getCSPoints(1) > selection*490) {
                    cm.gainItem(5153000, selection);
					cm.gainNX(-490*selection);
                    cm.sendOk("您成功购入#r#v5153000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*490+"点卷成功购买了"+selection+"个射手村护肤中心会员卡！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 11) {
                 if (cm.getPlayer().getCSPoints(1) > selection*3000) {
                    cm.gainItem(5530438, selection);
					cm.gainNX(-3000*selection);
                    cm.sendOk("您成功购入#r#v5530438##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "点卷道具" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*4000+"点卷成功购买了"+selection+"个品客缤邀请函！"));
                } else {
                    cm.sendNext("#r所需点卷超过了你所拥有的点卷，购买失败！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}