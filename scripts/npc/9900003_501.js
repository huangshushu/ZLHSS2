/*
 脚本功能 竞技场积分兑换
 */

var a = 0;
var score = 0;

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
            cm.sendGetNumber("您现在一共有竞技场积分" + getMissionAddMinNum() + "。\r\n在这里，可以2：1兑换征服者币，你想兑换几个竞技者币呢？\r\n#e<竞技场积分可以在阿里安特竞技场获得>#n。", 0, 0, 9999);
        } else if (a == 1) {
            score = parseInt(selection);
            if ((getMissionAddMinNum() / 2) >= score) {
                if (cm.canHold(4310036, score)) {
                    cm.gainItem(4310036, score);
                    setMissionAddMinNum(-(score * 2));
                    cm.sendOk("兑换 " + score + "个征服者币 成功了，请检查你的背包。")
                    cm.worldMessage("[阿里安特竞技场] " + cm.getChar().getName() + "  成功兑换了许多征服者币。");
                } else {
                    cm.sendOk("对不起，其他栏不足，请腾出一些空位。");
                }
            } else {
                cm.sendOk("对不起，你没有足够的竞技场积分来兑换征服者币。" + score);
            }
            cm.dispose();
        }//a
    }//mode
}//f



function getMissionAddMinNum() {
    var CharData = cm.sql_Select("SELECT * FROM missionstatus where missionid = 105 and charid = " + cm.getPlayer().getId() + "")
    if (CharData.length > 0) {
        return parseInt(CharData[0].get("minnum"));
    }
}

function setMissionAddMinNum(Number) {
    var Times = cm.sql_Select("SELECT * FROM missionstatus where charid = " + cm.getPlayer().getId() + " and missionid = 105")
    if (Times.length == 0) {
        cm.sql_Insert("INSERT INTO `missionstatus` (`missionid`, `charid`, `minnum`) VALUES ('105', '" + cm.getPlayer().getId() + "', '" + Number + "');");
    } else {
        cm.sql_Update("UPDATE missionstatus SET `minnum` = `minnum` + ? WHERE missionid = ? and charid = ?", Number, 105, cm.getPlayer().getId());
    }
}