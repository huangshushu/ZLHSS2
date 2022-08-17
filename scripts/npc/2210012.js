var weapon = [4001272];
var req = [
    [4000889, 10],
    [4000883, 10],
    [4000881, 10],
    [4000885, 10],
    [4000878, 10],
    [4033124, 30],
    [4033156, 1],
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
        msg += "\r\n#d需要:#b ";
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
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d你能带我走吗?这儿真不是一个能待下去的地方，听探险队的人说他们在山顶发现了一个洞穴里面有一只巨大蜘蛛支配这里一切，但是另探险队没有想到的是这里可不是一直蜘蛛就可以支配的一切，我前几天在深谷中发现了一个很怪异的事情，那就是这儿真正的主人不是它！令人意想不到的竟然是一个巨大已经成精的食人花！！！真是令人毛骨悚然，我在它的巢穴附近观察了几天发现了它的一个惊人的秘密，再过几天可能它就要下山袭击探险队了！！我得快点告诉他们。。。\r\n\r\n但是这巨型食人花神出鬼没，但是想要找到它，据我这几天的观察它似乎在提炼一种巨大的种子但是这种种子需要这满山怪物的萃取精华冶炼，如果你能搜集这些物品提炼巨大的种子的话，那巨型食人花肯定会被你引诱出来的！但是还有一件最为重要的东西就是#z4031171#我早些年听说在昏暗的沙漠地带吧，有商人卖这种粉末那是从西域带来的稀有粉末听说那个地方叫什么..阿...斯旺???\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有可萃取的材料。");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要提炼#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b已经提炼了 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}