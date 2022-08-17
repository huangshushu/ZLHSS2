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
			gsjb += "              #r欢迎来到月月冒险岛抵用商城#k\r\n";
			gsjb += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			gsjb += "#L1##b购买#v5510000##z5510000##r(#r需要抵用100)#l\r\n\r\n";
			gsjb += "#L2##b购买#v5030008##z5030008##r(#r需要抵用2000)#l\r\n\r\n";
			gsjb += "#L3##b购买#v5211047##z5211047##r(#r需要抵用5000)#l\r\n\r\n";
			gsjb += "#L4##b购买#v5030020##z5030020##r(#r需要抵用2000)#l\r\n\r\n";
			gsjb += "#L5##b购买#v5390000##z5390000##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L6##b购买#v5390001##z5390001##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L7##b购买#v5390002##z5390002##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L10##b购买#v5390003##z5390003##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L11##b购买#v5390004##z5390004##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L8##b购买#v5390005##z5390005##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L12##b购买#v5390006##z5390006##r(#r需要抵用500)#l\r\n\r\n";
			gsjb += "#L13##b购买#v5370000##z5370000##r(#r需要抵用700)#l\r\n\r\n";
			gsjb += "#L9##b购买#v5041000##z5041000##r(#r需要抵用200)#l\r\n\r\n";
			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换。");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("请输入需要购买#r#v5510000##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("请输入需要购买#r#v5030008##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 3) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 3;
					cm.sendGetNumber("请输入需要购买#r#v5211047##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 4) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 4;
					cm.sendGetNumber("请输入需要购买#r#v5030020##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 5;
					cm.sendGetNumber("请输入需要购买#r#v5390000##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 6) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 6;
					cm.sendGetNumber("请输入需要购买#r#v5390001##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 7) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 7;
					cm.sendGetNumber("请输入需要购买#r#v5390002##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 8) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 8;
					cm.sendGetNumber("请输入需要购买#r#v5390005##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 9) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 9;
					cm.sendGetNumber("请输入需要购买#r#v5041000##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 10) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 10;
					cm.sendGetNumber("请输入需要购买#r#v5390003##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 11) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 11;
					cm.sendGetNumber("请输入需要购买#r#v5390004##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 12) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 12;
					cm.sendGetNumber("请输入需要购买#r#v5390006##k的数量:\r\n\r\n", 1, 1, 100000);
                }
            }else if (selection == 13) {
                if (cm.getPlayer().getCSPoints(2) == 0) {
                    cm.sendNext("#r你的抵用卷不足，不能购买！");
                    status = -1;
                } else {
                    beauty = 13;
					cm.sendGetNumber("请输入需要购买#r#v5370000##k的数量:\r\n\r\n", 1, 1, 1);
                }
            }
               
															
        } else if (status == 2) {
           if (beauty == 1) {
                 if (cm.getPlayer().getCSPoints(2) > selection*100) {
                    cm.gainItem(5510000, selection);
					cm.gainDY(-100*selection);
                    cm.sendOk("您成功购入#r#v5510000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*100+"抵用成功购买了"+selection+"个原地复活术！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 2) {
                 if (cm.getPlayer().getCSPoints(2) > selection*2000) {
                    cm.gainItem(5030008, selection);
					cm.gainDY(-2000*selection);
                    cm.sendOk("您成功购入#r#v5030008##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"抵用成功购买了"+selection+"个小甜商人！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 3) {
                 if (cm.getPlayer().getCSPoints(2) > selection*5000) {
                    cm.gainItem(5211047, selection);
					cm.gainDY(-5000*selection);
                    cm.sendOk("您成功购入#r#v5211047##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"抵用成功购买了"+selection+"个精灵商人！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 4) {
                 if (cm.getPlayer().getCSPoints(2) > selection*2000) {
                    cm.gainItem(5030020, selection);
					cm.gainDY(-2000*selection);
                    cm.sendOk("您成功购入#r#v5030020##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*2000+"抵用成功购买了"+selection+"熊猫商人！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 5) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390000, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个炽热情景喇叭！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 6) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390001, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390001##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个绚烂情景喇叭！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 7) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390002, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390002##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个爱心情景喇叭！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 8) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390005, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390005##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个小老虎情景喇叭！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 9) {
                 if (cm.getPlayer().getCSPoints(2) > selection*200) {
                    cm.gainItem(5041000, selection);
					cm.gainDY(-200*selection);
                    cm.sendOk("您成功购入#r#v5041000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*200+"抵用成功购买了"+selection+"个高级瞬移之石！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 10) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390003, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390003##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个新年庆祝喇叭1！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 11) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390004, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390004##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个新年庆祝喇叭2！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 12) {
                 if (cm.getPlayer().getCSPoints(2) > selection*500) {
                    cm.gainItem(5390006, selection);
					cm.gainDY(-500*selection);
                    cm.sendOk("您成功购入#r#v5390006##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个咆哮老虎情景喇叭！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }else if (beauty == 13) {
                 if (cm.getPlayer().getCSPoints(2) > selection*700) {
                    cm.gainItem(5370000, selection);
					cm.gainDY(-700*selection);
                    cm.sendOk("您成功购入#r#v5370000##k * #r" + selection + " #k个！#k#n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "抵用商城" + " : " + "恭喜『" + cm.getChar().getName() + "』用"+selection*500+"抵用成功购买了"+selection+"个黑板（7天权）！"));
                } else {
                    cm.sendNext("#r所需抵用卷超过了你所拥有的抵用卷，购买失败！");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}