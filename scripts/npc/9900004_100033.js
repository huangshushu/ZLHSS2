var weapon = [

1332055, 
1332056, 
1482022,
1372034, 
1382039, 
1402039, 
1412027, 
1432040, 
1452045, 
1462040, 
1472055,
1092045,
1092046,
1092047,
1302064,
1492022,
1442125,
1422017

];

var req = [
	[4001126, 1000],
    [4031456, 20]
];

var 全属性 = 5;
var 攻击力 = 80;
var 魔法力 = 80;

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
        msg += "\r\n#d需要:#b\r\n\r\n金币200W ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
		msg += "#b 基准：全属性+" + 全属性 + "，攻击力+" + 攻击力 + "，魔法力+" + 魔法力 + "#k#r\r\n\t  （不同职业自动修正攻击力、魔法力）#k\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#r         #v4000110# 我乃铸造炉 #v4000110#\r\n 想要铸造吗？\r\n" + msg + "");
    } else if (status == 1) {
	
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
		

        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b身上没有#r#i" + req[i][0] + "##t" + req[i][0] + "#x" + req[i][1] + "");
                cm.dispose();
                return;
            }
           if (cm.getPlayer().getMeso() < 2000000){
                cm.sendNext("金币不足");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要铸造武器#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
		var itemId = weapon[sels];
		if(itemId >= 1200000 && itemId < 1800000){
			var itemIdS = itemId + "";
			itemIdS = itemIdS.substr(0, 3);
			if(itemIdS.equals("147")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*40/100), parseInt(魔法力*40/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("148")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*75/100), parseInt(魔法力*75/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("149")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*75/100), parseInt(魔法力*75/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("133")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*90/100), parseInt(魔法力*90/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("137")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*120/100), parseInt(魔法力*120/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("138")){
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*120/100), parseInt(魔法力*120/100), 0, 0, 0, 0, 0, 0, 0);
			}else{
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, 攻击力, 魔法力, 0, 0, 0, 0, 0, 0, 0);
			}
		}else{
			cm.gainItem(itemId, 1);
		}
        //cm.gainItem(weapon[sels], 1);
		cm.gainMeso(-2000000);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『合成中心』" + " : " + "[" + cm.getChar().getName() + "]成功合成了60级武器！！")); 
        cm.sendNext("#b已经铸造了武器 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}