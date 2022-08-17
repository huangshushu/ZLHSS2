1var weapon = [1072732,1072733,1072734,1072735,1072736,1102473,1102474,1102471,1102472,1102475,1132168,1132164,1132165,1132166,1132167];
var req = [
    [4000487, 50],
	[4032398, 20],
    [4000313, 200]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d需要:#r金币3000W#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d想要兑换武器吗?\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])||cm.getMeso() < 30000000) {
                cm.sendNext("#b身上没有#r#i" + req[i][0] + "##t" + req[i][0] + "#x" + req[i][1] + "或者金币不足");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换武器#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
		cm.gainMeso(-30000000);
        cm.sendNext("#b已经兑换了武器 #i" + weapon[sels] + "#");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "月月冒险岛" + " : " + "恭喜『" + cm.getChar().getName() + "』成功制作了赫里希安极真装备，大家加油吧！"));
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}
