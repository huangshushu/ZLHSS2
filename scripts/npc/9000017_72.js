var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d#l这里是[冒险岛勋章]锻造处！【玩具组队任务获得】\r\n"//3
            text += "" + 红色箭头 + "#L1##e#d#v1142609#（4维15、攻击10）需要：#v4001324#x100个#l\r\n\r\n"//3
            text += "" + 蓝色箭头 + "#L2##e#d#v4001324#x100+#v1142609#升级至#v1142907#（4维20、攻击15）#l\r\n"//3
            text += "" + 蓝色箭头 + "#L3##e#d#v4001324#x120+#v1142907#升级至#v1142081#（4维30、攻击20）#l\r\n"//3
            text += "" + 蓝色箭头 + "#L4##e#d#v4001324#x150+#v1142081#升级至#v1142158#（4维40、攻击25）#l\r\n"//3
            text += "" + 蓝色箭头 + "#L5##e#d#v4001324#x150+#v1142158#升级至#v1142178#（4维50、攻击35）#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		         if(cm.haveItem(4001324,100)){
				cm.gainItem(4001324, -100);
				cm.gainItem(1142609,15,15,15,15,200,200,10,10,200,200,20,20,40,40);

            cm.sendOk("换购成功！");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『勋章制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了组队任务狂人勋章！"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
        } else if (selection == 2) {
		         if(cm.haveItem(4001324,100)&& cm.haveItem(1142609,1)){
				cm.gainItem(4001324, -100);
				cm.gainItem(1142609, -1);
				cm.gainItem(1142907,20,20,20,20,400,400,15,15,20,200,200,20,40,40);

            cm.sendOk("换购成功！");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『勋章制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了组队任务老司机勋章！"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
        } else if (selection == 3) {
		         if(cm.haveItem(4001324,120)&& cm.haveItem(1142907,1)){
				cm.gainItem(4001324, -120);
				cm.gainItem(1142907, -1);
				cm.gainItem(1142081,30,30,30,30,600,600,20,20,20,200,200,20,40,40);

            cm.sendOk("换购成功！");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『勋章制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了天使冒险岛最佳公民勋章！"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
        } else if (selection == 4) {
		         if(cm.haveItem(4001324,150)&& cm.haveItem(1142081,1)){
				cm.gainItem(4001324, -150);
				cm.gainItem(1142081, -1);
				cm.gainItem(1142158,40,40,40,40,800,800,25,25,20,200,200,20,40,40);

            cm.sendOk("换购成功！");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『勋章制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了天使冒险岛形象大使勋章！"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
        } else if (selection == 5) {
		         if(cm.haveItem(4001324,150)&& cm.haveItem(1142158,1)){
				cm.gainItem(4001324, -150);
				cm.gainItem(1142158, -1);
				cm.gainItem(1142178,50,50,50,50,1000,1000,35,35,20,200,200,20,40,40);

            cm.sendOk("换购成功！");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "『勋章制作』" + " : " + "[" + cm.getChar().getName() + "]成功制作了天使冒险岛英雄后裔勋章！"));
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}


