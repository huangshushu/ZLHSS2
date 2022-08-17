var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var a = 0;
var text;
var selection;
var itemlist = Array(
1002926,1002927,1002357,1122000,1022144);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n           #r欢迎来到月月冒险岛通用版装备回收#k\r\n"+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n                  #b请选择你要回收的装备\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "             #L"+i+"#"+小烟花+"#b回收#v"+itemlist[i]+"##r#z"+itemlist[i]+"#"+小烟花+"#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			
		} else if (a == 1) {
			jg = selection
			    text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "           #r欢迎来到月月冒险岛通用版装备回收#b\r\n";
				text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
				text += "               回收装备：#r#v"+itemlist[selection]+"##z"+itemlist[selection]+"#\r\n";
				text += "               获得道具：#b#v3992025##z3992025#\r\n\r\n";
				text += "               获得数量：#r 98～398\r\n\r\n";
				text += "   					是否确认进行回收\r\n";
            cm.sendYesNo(text);
				
        } else if (a == 2) {
			if(cm.getPlayer().getBossLog("回收1") >=10){
				cm.sendOk("今日回收已经超过10次，无法继续回收了！");
				cm.dispose();
				return;
			}
			
			var rand = Math.floor(Math.random()*300+98);
			if (cm.haveItem(itemlist[jg], 1) == false) {
                cm.sendOk("#b很遗憾，你的背包内并没有这个装备，请确认！");
                cm.dispose();
				return;
			}
			if (cm.canHold(3992025,398) == false ) {
                cm.sendOk("#b抱歉，你的背包空间不足，无法放下回收的#v3992025#，请确认！");
                cm.dispose();
            } else {
				cm.gainItem(itemlist[jg], -1);
				cm.setBossLog("回收1");
				cm.gainItem(3992025,rand);
				cm.sendOk("#r恭喜你，成功回收了#v"+itemlist[jg]+"#，获得#v3992025#*"+rand+"");
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "通用版装备回收" + " : " + "恭喜" + cm.getChar().getName() + "成功回收了BOSS装备，获得了圣诞大星*"+rand+"！大家祝贺他/她吧！"));           
				cm.dispose();
            }
        }
	}	
}