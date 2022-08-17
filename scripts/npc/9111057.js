var Icon = "#fEffect/ItemEff/1112811/0/0#";//黄金音符GuildMark/Mark/Animal/00002006/16#";
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var revenue = cm.getNX(1);
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendOk("\r\n\r\n\r\n\t#b当前点卷数量：#r" + revenue.formatMoney(0, "") + " #b点 请继续加油！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt = Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n";
            txt += " #r [ #h # ] 您好 欢迎光临 #b土豪戒指商店15W点卷一个戒指\r\n";
            txt += "#b   土豪戒指全属性 [ 50 ] #r#z1112956# 可以购买4枚#k\r\n"
            txt += "#d 　　　　　　当前拥有点卷：#r" + revenue.formatMoney(0, "") + "#k\r\n\r\n";
            txt += "　　　　　　　　　　　　 #i1112956# 　　　　　　　　　　\r\n\r\n";
            txt += "　　　　#b确认点卷达标单击 [ #r是#b ]  否则 [ #r否#b ]#k\r\n\r\n\r\n";
            txt += Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n\r\n";
            cm.sendYesNoS(txt,2);
        } else if (status == 1) {   
            if (cm.getNX(1) >= 150000) {
                if (cm.getPQLog("枫叶土豪戒指", 1) <= 3) {
                    var ii = cm.getItemInfo();
			        var toDrop = cm.getNewEquip(1112956); // 生成一个Equip类 耳环
                    toDrop.setStr(50); //装备力量
                    toDrop.setDex(50); //装备敏捷
                    toDrop.setInt(50); //装备智力
                    toDrop.setLuk(50); //装备运气
                    toDrop.setMatk(50); //魔法攻击
                    toDrop.setWatk(50); //攻击攻击 
                    toDrop.setWdef(50);//物理防御
                    toDrop.setMdef(50);//魔攻防御
                    toDrop.setOwner("土豪");//签名
                    cm.addFromDrop(toDrop);
                    cm.worldSpouseMessage(0xA, "※　土豪戒指　※：恭喜玩家 " + cm.getChar().getName() + " 购买了神器戒指 【闪耀之星土豪戒指】羡慕");
                    cm.worldSpouseMessage(0xA, "※　土豪戒指　※：恭喜玩家 " + cm.getChar().getName() + " 购买了神器戒指 【闪耀之星土豪戒指】羡慕");
                    cm.getMap().startMapEffect(1, "　" + cm.getChar().getName() + "\r\n\r\n恭喜购买到超值道具\r\n\r\n【土豪戒指】\r\n\r\n感谢您的支持 祝您游戏愉快", 5121027);
                    cm.setPQLog("枫叶土豪戒指", 1);
                    cm.gainNX(1, -150000);
                    cm.dispose();
                } else {
                    cm.sendOkS("\r\n\r\n#r\t\t尊敬的玩家 - 此项奖品每个角色可购买四枚", 3);
                    cm.dispose();
                    return;
                }
            } else {
                var ount = 150000 - cm.getNX(1);
                cm.sendOkS("\r\n\r\n#r　　　　　尊敬的玩家 - 当前点卷未达标\r\n\r\n　　当前点卷：#b" + revenue.formatMoney(0, "") + "#r 点卷 还需充值：#b" + ount + "#r 点卷 即可达标", 3);
                cm.dispose();
                return;
            }
        }
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};