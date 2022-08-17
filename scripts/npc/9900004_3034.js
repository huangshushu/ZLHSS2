var weapon = [

//10周年白色防具
    1102944,
	1102943,  
	1102942,
	1102941,
	1102940,
	1082699,
	1082698,
	1082697,
    1082696,
    1082695,
	1073162,
	1073161,
	1073160,
	1073159,
	1073158,
	1053067,
	1053066,
	1053065,
	1053064,
	1053063,
	1004812,
	1004811,
	1004810,
	1004809,
	1004808

];
var req = [
    [4310014, 5000],//绿色邮票
    [1003797, 1],//红色蜗牛壳
	[1003798, 1],//红色蜗牛壳
	[1003799, 1],//红色蜗牛壳
	[1003800, 1],//红色蜗牛壳
    [1003801, 1],//蓝色蜗牛壳
	[1062165, 1],//红色蜗牛壳
	[1062166, 1],//红色蜗牛壳
	[1062167, 1],//红色蜗牛壳
	[1062168, 1],//红色蜗牛壳
	[1062169, 1],//红色蜗牛壳
	[1042254, 1],//红色蜗牛壳
	[1042255, 1],//红色蜗牛壳
	[1042256, 1],//红色蜗牛壳
	[1042257, 1],//红色蜗牛壳
	[1042258, 1]//红色蜗牛壳
	//[4000040, 1],//蘑菇王芽孢
	//[4001002, 1],//小说书
	//[4310030, 20],//运动会币
	//[4031546, 1],//小红包
	
    //[4310027, 5],
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
            msg += "#i" + req[ii][0] + "##z" + req[ii][0] + "#x" + req[ii][1];
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
        cm.sendSimple("#b#e您好，制作#r神秘套装#b需要以下材料，没有材料可不行哦\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换#r10周年系列#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『合成中心』" + " : " + "[" + cm.getChar().getName() + "]成功合成了10周年装备！！")); 
        cm.sendNext("#b已经兑换好了，请前往背包查看 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}