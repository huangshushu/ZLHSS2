var weapon = [
//防具
1003946,
1052647,
1072853,
1082540,
1102612,
//1113288,//革命套装戒指
//1122262,//革命吊坠
1132242,

//武器
1302289,//革命剑
1312165,//革命战斧
1402210,//革命双手剑
1412147,//革命双手战斧
1432178,//革命之矛
1442234,//革命枪

1332238,//革命切割者
1472226,//革命拳甲

1372188,//革命短杖
1382222,//革命长杖

1452216,//革命弓
1462093,//革命弩

1482179,//革命冲拳
1492190//革命红杰克

];
var req = [
    [4000402, 200],//银心
    //[4000406, 200],//金心
	//[4021008, 50],//黑水晶
	//[4021006, 50],//黄晶
	//[4021009, 20],//星石
	[4001126, 500],//枫叶
	[4000313, 500],//黄金枫叶
	[4001083, 1],//扎昆
	[4001084, 1]//闹钟
	//[4000463, 100],//国庆币
	//[4000487, 100],//暗影币
	
	
    
	
	
    
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
        cm.sendSimple("#b#e您好，制作#r革命套装#b需要以下材料，没有材料可不行哦\r\n\r\n" + msg + "");
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
        cm.sendYesNo("#b是否要兑换#r布莱克武器系列#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『合成中心』" + " : " + "[" + cm.getChar().getName() + "]成功合成了革命装备！！")); 
        cm.sendNext("#b已经兑换好了，请前往背包查看 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}