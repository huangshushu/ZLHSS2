var weapon = [
//防具

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
1382121,//革命长杖

1452216,//革命弓
1462093,//革命弩

1482179,//革命冲拳
1492190,//革命红杰克
1422107


];

var 武器扣除数量 = 1;
var weaponToRequire = [

//上一级武器
	1302212,//紫金枫叶剑
	1312114,//紫金枫叶斧
	1402145,//紫金枫叶双手剑
	1412102,//紫金枫叶双手战斧
	1432135,//紫金枫叶之枪
	1442173,//紫金枫叶矛
	1332186,//紫金枫叶龙牙破
	1472177,//紫金枫叶拳甲
	1372131,//紫金枫叶治愈短杖
	1382160,//紫金枫叶治愈长杖
	1452165,//紫金枫叶弓
	1462156,//紫金枫叶弩
	1482138,//紫金枫叶冲拳
	1492138, //紫金枫叶红杰克
	1422126
	
];
var req = [
	[4031456, 50],//黄晶
	[4011007, 5],//星石
	[4021009, 5]//枫叶
	
    
	
	
    
];

var 全属性 = 15;
var 攻击力 = 130;
var 魔法力 = 130;

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
        msg += "\r\n#d需要:#b\r\n\r\n金币1000W ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
		msg += "\r\n#k任意在我这里制作的#b80级#k武器#b" + 武器扣除数量 + "件#k！";
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
           if (cm.getPlayer().getMeso() < 10000000){
                cm.sendNext("金币不足");
                cm.dispose();
                return;
            }
        }
		if(!haveWeapenToRequire(weaponToRequire, 武器扣除数量)){
			cm.sendNext("你身上没有足够的在我这里制作的#r80级武器#k。");
			cm.dispose();
			return;
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
				cm.给属性装备(itemId, 0, 0, 全属性, 全属性, 全属性, 全属性, 0, 0, parseInt(攻击力*50/100), parseInt(魔法力*50/100), 0, 0, 0, 0, 0, 0, 0);
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
		cm.gainMeso(-10000000);
		takeWeapenToRequire(weaponToRequire, 武器扣除数量);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『合成中心』" + " : " + "[" + cm.getChar().getName() + "]成功合成了100级武器！！")); 
        cm.sendNext("#b已经铸造了武器 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}

function haveWeapenToRequire(weaponToRequire, mount){
	var isHave = false;
	var m = 0;
	for(var i = 0; i < weaponToRequire.length; i++){
		if(cm.haveItem(weaponToRequire[i])){
			m++;
			if(m >= mount){
				isHave = true;
				break;
			}
		}
	}
	return isHave;
}

function takeWeapenToRequire(weaponToRequire, mount){
	var m = 0;
	for(var i = 0; i < weaponToRequire.length; i++){
		if(cm.haveItem(weaponToRequire[i])){
			cm.gainItem(weaponToRequire[i], -1);
			m++;
			if(m >= mount){
				break;
			}
		}
	}	
}