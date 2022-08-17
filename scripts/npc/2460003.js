/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 50009219
*/
var txt, Matrimonial, 位置;
var status = 0;
/*------------------------------------------------------------*/
var iconA = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var iconB = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var iconC = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var iconD = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var iconE = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var iconF = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var iconG = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var iconH = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#";//星星
var iconI = "#fUI/UIWindow2/MobGage/Mob/2510200#";//蓝色水晶
var iconJ = "#fUI/UIWindow3/Scenario/list/icon/icon7/11#";
var iconK = "#fUI/UIWindow3/Study/Fever/1#";//狂热
var iconL = "#fUI/UIWindowBT/MonsterBattleCollection2/Btstart/normal/0#";//开始战斗
var iconM = "#fEffect/ItemEff/1004122/effect/default/8#"
var IconO = "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#";//女神
var IconP = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var IconQ = "#fUI/GuildMark/Mark/Etc/00009001/1#";

var 标题 = ["情侣登记", "情侣签到", "情侣排行"];

var 登记奖品 = [
    [0, 4000000, 1],
    [0, 4000000, 1],
    [0, 4000000, 1]
]
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    Matrimonial = new Love();
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        switch (status) {
            case 0:           /* 目录 */
                txt = "\t\t\t\t" + IconO + "#k#n\r\n";
                txt += " " + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + "\r\n";
                for (var i in 标题) {
                    switch (parseInt(i)) {
                        case 0:
                            txt += "#b";
                            break;

                        case 1:
                            txt += "#r";
                            break;

                        case 2:
                            txt += "#d";
                            break;

                        default:
                            txt += "#k";
                            break
                    }
                    //if (!(i % 3)) txt += '\r\n'; 
                    txt += "#L" + i + "#" + iconM + " " + 标题[i] + "#l　";
                }

                txt += "\r\n\r\n\r\n";
                txt += " " + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + "\r\n";
                cm.sendSimpleS(txt, 2);
                break;

            case 1:
                switch (selection) {
                    case 0:
                        if (cm.getPlayer().getMarriageId() <= 0) {
                            cm.dropMessage(1, "\r\n一个单身狗也妄想登记情侣???呵\r\n");
                            cm.dispose();
                            return;
                        }
                        if (cm.getParty() == null || !cm.isLeader()) {
                            cm.dropMessage(1, "\r\n请组上你的玩伴 并且 由队长来登记\r\n");
                            cm.dispose();
                            return;
                        }
                        if (!cm.getParty().getMembers().size() == 2) {
                            cm.dropMessage(1, "\r\n请保证组队内只有玩伴两个人\r\n");
                            cm.dispose();
                            return;
                        }
                        if (!cm.allMembersHere()) {
                            cm.dropMessage(1, "\r\n你的玩伴当前与你不在相同地图\r\n");
                            cm.dispose();
                            return;
                        }
                        if (cm.getPlayer().getMarriageId() != cm.getPartyFormID()) {
                            cm.dropMessage(1, "\r\n请组上你的玩伴来进行登记\r\n");
                            cm.dispose();
                            return;
                        }
                        if (Matrimonial.Check() > 0) {
                            cm.dropMessage(1, "\r\n已登记过结缘石\r\n\r\n你这是要出轨阿 回头是岸\r\n");
                            cm.dispose();
                            return;
                        }
                        var curChar = cm.getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getMarriageId());

                        if (cm.getClient().getChannel() != curChar.getClient().getChannel()) {
                            cm.dropMessage(1, "\r\n你的玩伴当前与你不在相同频道\r\n");
                            cm.dispose();
                            return;
                        }
                        if (cm.getPlayerStat("GENDER") == 0) Matrimonial.Register(cm.getPlayer().getId(), cm.getPlayer().getName(), cm.getPlayer().getMarriageId(), curChar.getName());
                        if (cm.getPlayerStat("GENDER") == 1) Matrimonial.Register(cm.getPlayer().getMarriageId(), curChar.getName(), cm.getPlayer().getId(), cm.getPlayer().getName());
                        //curChar.getClient().getSession().write(Packages.tools.packet.UIPacket.showMapEffect("Effect/IUNPCEff.img/resurrectionNew"));
                        cm.showMapEffect("Effect/IUNPCEff.img/resurrectionNew");
                        for (var i in 登记奖品) {
                            cm.gainItem(登记奖品[i][1], 登记奖品[i][2], "结缘石");
                            curChar.gainItem(登记奖品[i][1], 登记奖品[i][2], "结缘石");
                        }
                        //cm.worldBrodcastEffect(5122015, "[ 结缘石 ] 　恭喜 " + cm.getPlayer().getName() + " 与 " + curChar.getName() + " 喜结连理 百年好合 并送上礼品祝福Ta们 有情人终成眷属", 40000);
                        for (var i = 0; i < 5; i++) {
                            cm.worldSpouseMessage(0x15, "[ 结缘石 ] 　恭喜 " + cm.getPlayer().getName() + " 与 " + curChar.getName() + " 喜结连理 ");
                            cm.worldSpouseMessage(0x16, "[ 结缘石 ] 　百年好合 并送上礼品祝福Ta们 有情人终成眷属");
                        }
                        cm.dropMessage(1, "\r\n婚姻结缘石\r\n\r\n恭喜你们喜结连理\r\n\r\n每天签到情侣福利享不停");
                        curChar.dropMessage(1, "\r\n婚姻结缘石\r\n\r\n恭喜你们喜结连理\r\n\r\n每天签到情侣福利享不停");
                        cm.dispose();
                        break;

                    case 1:
                        if (cm.getPlayer().getMarriageId() <= 0) {
                            cm.dropMessage(1, "\r\n单身狗也想签到??滚 \r\n");
                            cm.dispose();
                            return;
                        }
                        if (cm.getPQLog("情侣签到") >= 1) {
                            cm.dropMessage(1, "抱歉\r\n\r\n一天只能签到一回");
                            cm.dispose();
                            return;
                        }

                        if (cm.getPlayerStat("GENDER") == 0) {
                            Matrimonial.Sign(true, 10);
                            cm.gainItem(4000534, 1);
                            cm.dropMessage(1, "签到成功\r\n\r\n请将道具 " + cm.getItemName(4000534) + " 给予你的玩伴\r\n\r\n帮助她来进行签到");
                        } else if (cm.getPlayerStat("GENDER") == 1) {
                            if (!cm.haveItem(4000534)) {
                                cm.dropMessage(1, "抱歉\r\n\r\n你需要一个 " + cm.getItemName(4000534) + "\r\n\r\n从你的玩伴签到奖品来获取完成签到");
                                cm.dispose();
                                return;
                            }
                            cm.gainItem(4000534, -1);
                            Matrimonial.Sign(false, 10);
                            cm.dropMessage(1, "签到成功\r\n\r\n祝福你们 百年好合 喜结连理");
                        }
                        cm.setPQLog("情侣签到");
                        cm.dispose();
                        break;

                    case 2:
                        Matrimonial.Ranking();
                        break;

                    default:
                        cm.dispose();
                        break;
                }
                break;

            default:
                cm.dispose();
                break;
        }
    }
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}

var Love = function () {
    this.Register = function (boy, boyname, girl, girlname) {
        return cm.sql_Insert("INSERT INTO `cc_love` (`boy_id`, `boy_name`, `girl_id`, `girl_name`) VALUES ('" + boy + "', '" + boyname + "', '" + girl + "', '" + girlname + "')");
    }

    this.Check = function () {
        if (cm.getPlayerStat("GENDER") == 0) var ret = cm.sql_Select("SELECT `id` FROM cc_love where boy_id = " + cm.getPlayer().getId() + " LIMIT 1;");
        if (cm.getPlayerStat("GENDER") == 1) var ret = cm.sql_Select("SELECT `id` FROM cc_love where girl_id = " + cm.getPlayer().getId() + " LIMIT 1;");
        return ret.length;
    }

    this.Ranking = function () {
        var ret = cm.sql_Select("SELECT `boy_name`, `girl_name`, `love` FROM cc_love ORDER BY love DESC LIMIT 10;")
        txt = "\t\t\t\t\t#e#r情侣排行#k#n\r\n\r\n";
        for (var i in ret) {
            var signle = ret[i];
            txt += "#b第 #r" + (i + 1) + "#b 名 [ #r百年好合 喜结连理#b ] #r恩爱值 :#b " + signle["love"] + "\r\n";
            txt += "#r新郎 :#b " + format(" ", 12, signle["boy_name"].toString()) + "#r\t" + IconP + "　新娘 : #b" + signle["girl_name"] + "\r\n";
            txt += "---------------------------------------------\r\n";
        }
        if (ret.length <= 0) {
            cm.dropMessage(1, "抱歉\r\n\r\n目前没有人登记\r\n");
            cm.dispose();
            return;
        }
        cm.sendOkS(txt, 3);
        cm.dispose();
    }

    this.Sign = function (x, num) {
        if (x == true) {
            return cm.sql_Update("UPDATE `cc_love` SET `love`=love+'" + num + "', `boy_Sign`=boy_Sign+'1' WHERE (`boy_id`='" + cm.getPlayer().getId() + "')");
        } else {
            return cm.sql_Update("UPDATE `cc_love` SET `love`=love+'" + num + "', `girl_Sign`=girl_Sign+'1' WHERE (`girl_id`='" + cm.getPlayer().getId() + "')");
        }
    }

}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}