var IconA = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var txt;
var status = -1;

var itemListA = Array(//  -  ID 积分 时间 数量
    Array(4001839, 50, 0, 500)/*, //星星
    Array(5062002, 100, 0, 2),  //高级神奇魔方
    Array(2049705, 50, 0, 1), //A级潜能附加券50%
    Array(2049124, 80, 0, 1), //正向混沌
    Array(5062001, 80, 0, 10), //混沌神奇魔方
    Array(4001785, 150, 0, 1), //定居500W币
    Array(1113069, 150, 0, 1),//黑暗暴击戒指
    Array(2431936, 80, 0, 1), //30技能书100%
    Array(4032733, 160, 0, 1),//彩虹枫叶 (不可交易)
    Array(5340001, 160, 0, 1),//高级钓鱼竿
    Array(1182156, 160, 0, 1),//步枪胸章
    Array(1112915, 160, 0, 1),//蓝调戒指
    Array(2028175, 160, 0, 1),//宿命箱子
    Array(2430692, 160, 0, 1),//星岩箱子
//========================================================
    Array(1032219, 1080, 0, 1),//遗忘之神话耳环
    Array(1402180, 1300, 0, 1) //解放的凯瑟利安*/
    );

var A = -1;
var B = -1;
var C = -1;
var D = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        txt = IconA + " #d尊敬的[ #r#h ##d ] 玩家 - 请选择您兑换的道具\r\n\r\n\t\t\t#r当前拥有钓鱼积分 [ " + getEnergyvalue() + " ]#k";
        for (var i = 0; i < itemListA.length; i++) {
            if (itemListA[i][2] <= 0) {
                txt += "\r\n#L" + i + "##d积分 [ #r" + itemListA[i][1] + " #d]　#i" + itemListA[i][0] + "#　#z" + itemListA[i][0] + "##l";
            } else {
                txt += "\r\n#L" + i + "##d积分 [ #r" + itemListA[i][1] + " #d]　#i" + itemListA[i][0] + "#　#z" + itemListA[i][0] + "# #b时间 [ #r" + itemListA[i][2] + " #d]#k#l";
            }
        }
        cm.sendYesNoS(txt, 2);
    } else if (status == 1) {
        var item = itemListA[selection];
        if (item != null) {
            A = item[0];//道具
            B = item[1];//积分
            C = item[2];//时间
            D = item[3];//数量
            if (C <= 0) {
                cm.sendYesNo("#b#r -  #n#k #i" + A + "# #b#t" + A + "##k \r\n\r\n#b#r - #n#k  物品个数：#b"+D+"#k#n\r\n\r\n#b#r - #n#k#e#r  你想使用 [ " + B + " ] 积分来兑换吗？\r\n");
            } else {
                cm.sendYesNo("你想使用 [ " + B + " ] 积分来兑换#i" + A + "# #b#t" + A + "##k 吗？ \r\n使用期限：#b" + C + "天#k。");
            }
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getSpace(1) < 2 && cm.getSpace(2) < 2 && cm.getSpace(3) < 2 && cm.getSpace(4) < 2 && cm.getSpace(5) < 2) {
            cm.sendOk("请确保您所有的背包栏都有2个以上的空格。");
            cm.dispose();
            return;
        }
        if (A <= 0 || B <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }

        if (getEnergyvalue() >= B) {
            if (C <= 0) {
                cm.gainItem(A, D);
            } else {
                cm.gainItemPeriod(A, D, C);
            }
            status = -1;
            setEnergyvalues(-B);
            cm.sendOk("领成功了！");
            //var gachaponItem = cm.gainGachaponItem(A, 0, "[ 钓鱼公告 ]", 3, true);
        } else {
            status = -1;
            cm.sendOk("对不起，你没有足够的积分领。");
        }
        cm.dispose();
    }
}


function getEnergyvalue() {
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM characters where id = " + cm.getPlayer().getId() + "").executeQuery();
    while (Times.next()) {
        i = Times.getString("dyjf");
    }
    Times.close();
    return parseInt(i);
}

function setEnergyvalues(count) {
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM characters where id = " + cm.getPlayer().getId() + "").executeQuery();
    while (Times.next()) {
        i++;
    }
    if (i == 0) {
        var insert = cm.getConnection().prepareStatement("INSERT INTO characters VALUES(?,?)");
        insert.setString(cm.getPlayer().getId(), count);
        insert.executeUpdate();
    } else {
        var update = cm.getConnection().prepareStatement("update characters set dyjf = ? ");
        update.setString(1, getEnergyvalue(cm.getPlayer().getId()) + count);
        update.executeUpdate();
    }
}
