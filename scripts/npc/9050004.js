/*合成NPC 作者:bay 廖*/
//function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("欢迎光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="    合成之前,请先检查 包包 每一个栏目 是否有两个空位以上? 再进行合成, 否则合成后不见,别哭哦!\r\n";
            text += "#L1##d#z1072743##v1072743#攻魔随机20-40#k#l\r\n";
            text += "#L2##d#z1072744##v1072744#攻魔随机20-40#k#l\r\n";
            text += "#L3##d#z1072745##v1072745#攻魔随机20-40#k#l\r\n";
            text += "#L4##d#z1072746##v1072746#攻魔随机20-40#k#l\r\n";
            text += "#L5##d#z1072747##v1072747#攻魔随机20-40#k#l\r\n";
            //text += "#L6##d四维 +15 HP/MP+ 150 双防 +90 命中 +12#v1032142##k#l\r\n";
			//text += "#L7##d四维/攻/魔 +25 HP/MP+ 150 双防+150 命中 +25#v1032191##k#l\r\n";
            cm.sendSimple(text);
			var r = Math.ceil(Math.random() * 1000);
        } else if (selection == 1) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072732, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//铁片
				cm.gainItem(4011007,-1);//月石
				cm.gainItem(1072369,-1);//鞋子
				cm.gainItem(1072732,-1);//鞋子
                cm.gainMeso(-20000000);
				cm.gainItem(1072743,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("合成#v1072737#成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"披风制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了不速之客耳环。O(∩_∩)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4001341#*100个#v4011007#*1个#v1072369#*1个#v1072732#*1个2000万金币");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072733, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//铁片
				cm.gainItem(4011007,-1);//月石
				cm.gainItem(1072369,-1);//鞋子
				cm.gainItem(1072733,-1);//鞋子
                cm.gainMeso(-20000000);
				cm.gainItem(1072744,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("合成#v1072744#成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"披风制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了不速之客耳环。O(∩_∩)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4001341#*100个#v4011007#*1个#v1072369#*1个#v1072733#*1个2000万金币");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072734, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//铁片
				cm.gainItem(4011007,-1);//月石
				cm.gainItem(1072369,-1);//鞋子
				cm.gainItem(1072734,-1);//鞋子
                cm.gainMeso(-20000000);
				cm.gainItem(1072745,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("合成#v1072745#成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"披风制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了不速之客耳环。O(∩_∩)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4001341#*100个#v4011007#*1个#v1072369#*1个#v1072734#*1个2000万金币");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072735, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//铁片
				cm.gainItem(4011007,-1);//月石
				cm.gainItem(1072369,-1);//鞋子
				cm.gainItem(1072735,-1);//鞋子
                cm.gainMeso(-20000000);
				cm.gainItem(1072746,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("合成#v1072746#成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"披风制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了不速之客耳环。O(∩_∩)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4001341#*100个#v4011007#*1个#v1072369#*1个#v1072735#*1个2000万金币");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072736, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//铁片
				cm.gainItem(4011007,-1);//月石
				cm.gainItem(1072369,-1);//鞋子
				cm.gainItem(1072736,-1);//鞋子
                cm.gainMeso(-20000000);
				cm.gainItem(1072747,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("合成#v1072747#成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"披风制作公告" + " : " + cm.getPlayer().getName() +"玩家成功制作了不速之客耳环。O(∩_∩)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4001341#*100个#v4011007#*1个#v1072369#*1个#v1072736#*1个2000万金币");
                cm.dispose();
            }
        } else if (selection == 6) {
           if (cm.haveItem(4000313, 400) && cm.haveItem(1032084, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.haveItem(4310143, 8) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//金枫叶
				cm.gainItem(1032084,-1);//busuzhike
				cm.gainItem(4031560,-30);//达克鲁
                cm.gainItem(4031561,-30);//弓手邮票
				cm.gainItem(4002000,-40);//绿蜗牛
				cm.gainItem(4002001,-40);//蓝蜗牛
				cm.gainItem(4002002,-30);//木妖
				cm.gainItem(4031456,-80);//枫叶珠
				cm.gainItem(4000245,-10);//linghun
				cm.gainItem(4310143,-8);
                cm.gainMeso(-2000000);
				cm.gainItem(1032142,15,15,15,15,150,150,15,15,90,90,12,12,0,0);
                cm.sendOk("合成#v1032142#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*400个 #v4011007#*1个 #v1032084#*1个  #v4031560#*30个  #v4031561#*30个  #v4002000#*40个  #v4002001#*40个 #v4002002#*30个 #v4031456#*80个  #v4000245#*10个 #v4310143#*8个 200万金币");
                cm.dispose();
            }
		} else if (selection == 7) {
           if (cm.haveItem(4000313, 800) && cm.haveItem(1032142, 1) && cm.haveItem(4031560, 60) && cm.haveItem(4031561, 60) && cm.haveItem(4002000, 80) && cm.haveItem(4002001, 80) && cm.haveItem(4002002, 60) && cm.haveItem(4031456, 160) && cm.haveItem(4021010, 5) && cm.haveItem(4000463, 10) && cm.getMeso() >=20000000) {
                cm.gainItem(4000313,-800);//金枫叶
				cm.gainItem(1032142,-1);//busuzhike
				cm.gainItem(4031560,-60);//达克鲁
                cm.gainItem(4031561,-60);//弓手邮票
				cm.gainItem(4002000,-80);//绿蜗牛
				cm.gainItem(4002001,-80);//蓝蜗牛
				cm.gainItem(4002002,-60);//木妖
				cm.gainItem(4031456,-160);//枫叶珠
				cm.gainItem(4021010,-5);//linghun
				cm.gainItem(4000463,-10);
                cm.gainMeso(-20000000);
				cm.gainItem(1032191,25,25,25,25,150,150,25,25,150,150,25,25,0,0);
                cm.sendOk("合成#v1032191#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v4000313#*800个  #v4011007#*1个 #v1032142#*1个  #v4031560#*60个  #v4031561#*60个  #v4002000#*80个 #v4002001#*80个 #v4002002#*60个 #v4031456#*160个  #v4021010#*5个 #v4000463#*10个 2000万金币");
                cm.dispose();
            }
			}
		}
    }


