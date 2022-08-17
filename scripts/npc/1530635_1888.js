/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 381991414
*/


var status = 0;
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#")
);


var txt;
var Care;
var time = new Date();
var Time_Cq = time.getDay();
switch (Time_Cq) {
    case 0:
        var Push = "星期日";
        break;
    case 1:
        var Push = "星期一";
        break;
    case 2:
        var Push = "星期二";
        break;
    case 3:
        var Push = "星期三";
        break;
    case 4:
        var Push = "星期四";
        break;
    case 5:
        var Push = "星期五";
        break;
    case 6:
        var Push = "星期六";
        break;
    default:
}

function start() {
    status = -1;
    action(1, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose()
    } else {
        if (mode == 1) status++;
        else {
            cm.dispose();
            return;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            txt = "\t\t　#b " + Icon[1][1] + " #r#e #fs16#爵位中心#fs12# #n#b " + Icon[1][1] + " #k\r\n\r\n";
            txt += Icon[35][1];
            for (var i = 0; i <= 260; i++) {
                txt += Icon[36][1];
            };
            txt += Icon[37][1] + "\r\n";

            txt += "#L0#" + Icon[68][1] + " #b爵位说明 [ #g阅读#b ]#l　　#L1#" + Icon[68][1] + " 查询爵位 [ #g全体#b ]#l#k\r\n\r\n";
            txt += "#L2#" + Icon[68][1] + " #r提升爵位 [ #g捐献#r ]#l　　#L3#" + Icon[68][1] + " 爵位奖品 [ #g个人#r ]#l#k\r\n\r\n\r\n";
            txt += " #b" + "  " + Icon[8][1] + " 尊敬的 #r" + cm.getName() + "#b 欢迎光临 - #r爵位中心#b -  " + Icon[8][1] + "\r\n\r\n";

            txt += Icon[35][1];
            for (var i = 0; i <= 260; i++) {
                txt += Icon[36][1];
            };
            txt += Icon[37][1] + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    txt = "\t\t　　#b " + Icon[1][1] + " #r#e 爵位说明 #n#b " + Icon[1][1] + " #k\r\n\r\n";
                    txt += Icon[62][1];
                    for (var i = 0; i <= 91; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n\r\n";

                    txt += "　#b" + Icon[4][1] + " 爵位中心 - 每周的 [ #r1#d ] - [ #r6#d ] 进行金币捐献\r\n";
                    txt += "　#b" + Icon[4][1] + " 爵位中心 - 每周的 [ #r6#d ] - 将结束捐献来确认爵位值\r\n";
                    txt += "　#b" + Icon[4][1] + " 领奖时间 - 在 #r周日#b 的时间段内领你的奖品\r\n";
                    txt += "　#b" + Icon[4][1] + " 奖励介绍：（勋章时间限制为7天）\r\n";
                    txt += "　#b" + Icon[4][1] + " 奖品信息 - 如下 请阅读爵位奖品\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + "　#g" + " 【国王】（第1名）\r\n\r\n";
                    txt += "　#r" + "　#g" + " #v1143059##b（全属性+100）#v2614005#x20\r\n";
                    txt += "　#r" + "　#g" + " #v1202173##v1202174##v1202175#\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + "　#g" + " 【公爵】（第2名）\r\n\r\n";
                    txt += "　#r" + "　#g" + " #v1142541##b（全属性+80）#v2614005#x15\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + "　#g" + " 【侯爵】（第3名）\r\n\r\n";
                    txt += "　#r" + "　#g" + " #v1142540##b（全属性+60）#v2614005#x10\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + "　#g" + " 【伯爵】（第4名）\r\n\r\n";
                    txt += "　#r" + "　#g" + " #v1142539##b（全属性+40）#v2614005#x5\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + "　#g" + " 【子爵】（第5名）\r\n\r\n";
                    txt += "　#r" + "　#g" + " #v1142538##b（全属性+20）#v2614005#x2\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";

                    /*txt += Icon[62][1];
                    for (var i = 0; i <= 91; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n";*/
                    cm.sendOkS(txt, 3);
                    status = -1;
                    break;

                case 1:
                    var result = cm.sql_Select("SELECT * FROM `Care_JueRank` ORDER BY (Meso+0) DESC LIMIT 10")
                    txt = "\t\t　　#b " + Icon[1][1] + " #r#e 爵位排行 #n#b " + Icon[1][1] + " #k\r\n\r\n";
                    txt += Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n\r\n";
                    txt += "#d#n    排序　　　 玩家名称  　　　 金币	　 　 爵位\r\n#k";
                    for (var i = 1; i <= 10; i++) {
                        if (i > result.length) {
                            break;
                        }
                        if (i == 1) {
                            txt += "#r";
                        } else if (i == 2) {
                            txt += "#b";
                        }
                        txt += "\t " + i + "\t　 　　";

                        // 填充名字空格
                        txt += format(" ", 14, result[i - 1].get("charname").toString());

                        txt += " " + format(" ", 16, (format(" ", 8, (result[i - 1].get("Meso") / 100000000).toFixed(2).toString()) + "亿").toString());
                        if (i == 1) {
                            txt += "#r国王#k";
                        }
                        if (i == 2) {
                            txt += "#b公爵#k";
                        }
                        if (i == 3) {
                            txt += "#d侯爵#k";
                        }
                        if (i == 4) {
                            txt += "#d伯爵#k";
                        }
                        if (i == 5) {
                            txt += "#d子爵#k";
                        }
                        txt += "#d\r\n";
                    }
                    txt += "\r\n" + Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n";
                    cm.sendOkS(txt, 3);
                    status = -1;
                    break;

                case 2:
                    if (Push == "星期日") {
                        cm.playerMessage(1, "抱歉\r\n\r\n周日是结算日 - 不能进行捐献");
                        cm.dispose();
                        return;
                    }
                    txt = "\t\t　　#b " + Icon[1][1] + " #r#e 捐献中心 #n#b " + Icon[1][1] + " #k\r\n\r\n";
                    txt += Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n\r\n";

                    txt += "　　　　#d" + Icon[4][1] + " 请输入你想捐献的 #r金币 #d数量 " + Icon[4][1] + "\r\n\r\n\r\n";

                    txt += Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n";
                    cm.sendGetText(txt);
                    break;

                case 3:
                    if (Push != "星期日") {
                        cm.playerMessage(1, "抱歉\r\n\r\n周日才可以领奖品 - 请捐献提升爵位");
                        cm.dispose();
                        return;
                    }
                    var sql = cm.sql_Select("SELECT * FROM `Care_JueRank` ORDER BY (Meso+0) DESC LIMIT 5")
                    for (var i = 1; i <= 5; i++) {
                        if (i > sql.length) {
                            break;
                        }
						
                        if (cm.getPQLog("爵位排名" + i + "奖品") > 0) {
                            cm.playerMessage(1, "抱歉\r\n\r\n奖品只能领一回");
                            cm.dispose();
                            return;
                        }
						
                        var charname = sql[i - 1].get("charname")
                        if (i == 1 && charname == cm.getName()) {
                            cm.setPQLog("爵位排名" + i + "奖品");
                            GainItemCare(1143059, 100, 100, 100, 100, 100, 100, 100, 100, "国王", 6);
                            cm.gainItemPeriod(1143059, 1, 7);//ID 数量 天
                            cm.gainItem(2614005, 20);
                            cm.gainItem(1202173, 1);
                            cm.gainItem(1202174, 1);
                            cm.gainItem(1202175, 1);
                            cm.playerMessage(1, "恭喜你领到了国王奖品");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了国王奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了国王奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了国王奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了国王奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了国王奖励~~~");
							
						cm.getMap().startMapEffect("爵位中心: 祝贺玩家 " + cm.getChar().getName() + " 领取了国王奖励！", 5120005);
							cm.dispose();
                            return;
                        }
                        if (i == 2 && charname == cm.getName()) {
                            cm.setPQLog("爵位排名" + i + "奖品");
                            GainItemCare(1142541, 80, 80, 80, 80, 80, 80, 80, 80, "公爵", 6);
                            cm.gainItemPeriod(1142541, 1, 7);//ID 数量 天
                            cm.gainItem(2614005, 15);
                            cm.playerMessage(1, "恭喜你领到了公爵奖品");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了公爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了公爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了公爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了公爵奖励~~~");
						cm.getMap().startMapEffect("爵位中心: 祝贺玩家 " + cm.getChar().getName() + " 领取了公爵奖励！", 5120005);
							cm.dispose();
                            return;
                        }
                        if (i == 3 && charname == cm.getName()) {
                            cm.setPQLog("爵位排名" + i + "奖品");
                            GainItemCare(1142540, 60, 60, 60, 60, 60, 60, 60, 60, "侯爵", 6);
						cm.getMap().startMapEffect("爵位中心: 祝贺玩家 " + cm.getChar().getName() + " 领取了侯爵奖励！", 5120005);
                            cm.gainItemPeriod(1142540, 1, 7);//ID 数量 天
                            cm.gainItem(2614005, 10);
                            cm.playerMessage(1, "恭喜你领到了侯爵奖品");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了侯爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了侯爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了侯爵奖励~~~");
							cm.dispose();
                            return;
                        }
                        if (i == 4 && charname == cm.getName()) {
                            cm.setPQLog("爵位排名" + i + "奖品");
                            GainItemCare(1142539, 40, 40, 40, 40, 40, 40, 40, 40, "伯爵", 6);
							cm.getMap().startMapEffect("爵位中心: 祝贺玩家 " + cm.getChar().getName() + " 领取了伯爵奖励！", 5120005);
                            cm.gainItemPeriod(1142539, 1, 7);//ID 数量 天
                            cm.gainItem(2614005, 5);
                            cm.playerMessage(1, "恭喜你领到了伯爵奖品");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了伯爵奖励~~~");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了伯爵奖励~~~");
							cm.dispose();
                            return;
                        }
                        if (i == 5 && charname == cm.getName()) {
                            cm.setPQLog("爵位排名" + i + "奖品");
                            GainItemCare(1142538, 20, 20, 20, 20, 20, 20, 20, 20, "子爵", 6);
							cm.getMap().startMapEffect("爵位中心: 祝贺玩家 " + cm.getChar().getName() + " 领取了子爵奖励！", 5120005);
                            cm.gainItemPeriod(1142538, 1, 7);//ID 数量 天
                            cm.gainItem(2614005, 2);
                            cm.playerMessage(1, "恭喜你领到了子爵奖品");
							cm.worldSpouseMessage(21,"【爵位】: " + "  " + cm.getName() + "  ~~~领取了子爵奖励~~~");
							cm.dispose();
                            return;
                        }//-------------
                    }
                    cm.playerMessage(1, "您并不是前5名哦！请下次努力！");
                    cm.dispose();
                    break;
            }
        } else if (status == 2) {
            if( cm.getText() > 9999999999) {
                cm.playerMessage(1, "请您输入99E以下的数字");
                cm.dispose();
                return;
            }
            if (cm.getMeso() < cm.getText()) {
                cm.playerMessage(1, "抱歉\r\n\r\n你没有那么多金币");
                cm.dispose();
                return;
            }
            cm.gainMeso(-parseInt(cm.getText()));
            Care_SetJue(parseInt(cm.getText()));
            cm.playerMessage(1, "恭喜\r\n\r\n捐献成功\r\n\r\n你捐献了 " + parseInt(cm.getText()) + "\r\n\r\n我们将取整并计入排行中");
            cm.dispose();
        }
    }
}

function GainItemCare(id, Str, Dex, Int, Luk, Watk, Matk, TotalDamage, BossDamage, Owner, time) {
    var toDrop = cm.getNewEquip(id);
    var timeStamp = java.lang.System.currentTimeMillis();
    toDrop.setStr(Str);
    toDrop.setDex(Dex);
    toDrop.setInt(Int);
    toDrop.setLuk(Luk);
    toDrop.setWatk(Watk);
    toDrop.setMatk(Matk);
    //toDrop.setTotalDamage(TotalDamage);
    //toDrop.setBossDamage(BossDamage);
    toDrop.setOwner(Owner);
    var expirationDate = timeStamp + (time) * 24 * 60 * 60 * 1000;
    toDrop.setExpiration(expirationDate);

    cm.addFromDrop(toDrop);
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

function Care_GetJue() {
    var i = 0;
    var Times = cm.sql_Select("SELECT * FROM `Care_JueRank` WHERE `charid` = ?", cm.getPlayer().getId())
    if (Times.length > 0) {
        i = Times[0].get("Meso");
    }
    return parseInt(i);
}

function Care_SetJue(Meso) {
    var Times = cm.sql_Select("SELECT * FROM `Care_JueRank` WHERE `charid` = ?", cm.getPlayer().getId())
    var i = Times.length;
    if (i == 0) {
        cm.sql_Insert("INSERT INTO Care_JueRank(id,charid,charname,Meso,RMB,Dianjuan,diyongjuan,time) values (?,?,?,?,?,?,?,CURRENT_TIMESTAMP())", null, cm.getPlayer().getId(), cm.getPlayer().getName(), Meso, 0, 0, 0);
    } else {
        cm.sql_Update("update Care_JueRank set Meso = Meso + ? WHERE charid=?", Meso, cm.getPlayer().getId())
    }
}