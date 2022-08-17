var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
    if (mode == -1) {
		//eim.setProperty("charid_"+cm.getPlayer().getId(), "0");
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
			//放弃需求
			eim.setProperty("charid_"+cm.getPlayer().getId(), "0");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var text="";
			if (eim.getProperty("giftcount")!=1) {
				text= "上一次物品得主#b"+eim.getProperty("rewardplayer")+"#k\r\n";
			}
			cm.sendYesNo(text+"本次物品#v"+eim.getProperty("rewarditem")+"##b#z"+eim.getProperty("rewarditem")+"##k,请选择您是否需要该物品?\r\n\r\n#e#r请在#b10#r秒内做出选择，否则将被踢下线。");
        } else if (status == 1) {
			var randomNum = Math.floor(Math.random()*100+1);
			eim.setProperty("charid_"+cm.getPlayer().getId(), randomNum);
			cm.getPlayer().dropMessage(6, "[Roll - 点数] 您掷出了 "+randomNum+"点，5秒后会公布结果。");
			cm.dispose();
		}
    }
}