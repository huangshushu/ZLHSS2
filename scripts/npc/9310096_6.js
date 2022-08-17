var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
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
            text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"//3
			text += "\t        "+ 小烟花 +"#r欢迎来到初阶毕业戒指制作"+ 小烟花 +"\r\n"
			text += ""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+""+星星+"\r\n"
            text += "             #L1#"+ 小烟花 +"#b重置#v1113149##z1113149##k"+ 小烟花 +"#l\r\n\r\n              （全属性45-88，攻魔45-88）\r\n                 #r每次重置需要材料如下\r\n\r\n                        #v4000463#*2\r\n";

            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000463, 2) && cm.haveItem(1113149, 1)) {
				var r = Math.ceil(Math.random() * 43+45);
                cm.gainItem(4000463,-2);//中介币材料
                cm.gainItem(1113149,-1);//银花戒指
				cm.gainItem(1113149,r,r,r,r,888,888,r,r,0,0,0,0,0,0);//银花升级
                cm.sendOk("重置#z1113149#属性成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"银花戒指重置" + " : " + cm.getPlayer().getName() +"玩家成功重置了银花戒指属性，大家恭喜他/她吧！",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("您的材料不足！");
                cm.dispose();
            }
        } 
	}
}


