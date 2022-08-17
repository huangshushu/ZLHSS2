/*
Care - 彩票 - 
唯一联系qq 381991414
欢迎各种脚本定制
2017年 3月 28日 23:47:30
肯特修整 彩票系统
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
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("红心", "#fUI/UIMiniGame/starPlanetRPS/heart#"),
    Array("大笑", "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#"),
    Array("花朵", "#fUI/NameTag/191/w#"),
    Array("花朵", "#fUI/NameTag/191/c#"),
    Array("花朵", "#fUI/NameTag/191/e#"),
    Array("羊羊", "#fUI/NameTag/155/w#"),
    Array("羊羊", "#fUI/NameTag/155/c#"),
    Array("羊羊", "#fUI/NameTag/155/e#"),
    Array("国足", "#fUI/NameTag/146/w#"),
    Array("国足", "#fUI/NameTag/146/c#"),
    Array("国足", "#fUI/NameTag/146/e#")
    );
/*------------------------------------------------------------*/
var txt;
var Iname;
var typed;
var itemid;
var em, eim, A, B, C;
var WishTimes = 1;
var wishstatus;
var record = new Array();

//彩票池
var desire = new Array(
        Array(1004808, 1),
		Array(1004809, 1),
		Array(1004810, 1),
		Array(1004811, 1),
		Array(1004812, 1),
		Array(1102940, 1),
		Array(1102941, 1),
		Array(1102942, 1),
		Array(1102943, 1),
		Array(1102944, 1),
		Array(1082695, 1),
		Array(1082696, 1),
		Array(1082697, 1),
		Array(1082698, 1),
        Array(1082699, 1),
		Array(1053063, 1),
		Array(1053064, 1),
		Array(1053065, 1),
		Array(1053066, 1),
		Array(1053067, 1),
		Array(1073158, 1),
        Array(1073159, 1),
		Array(1073160, 1),
		Array(1073161, 1),
		Array(1073162, 1),
		Array(1152196, 1),
		Array(1152197, 1),
		Array(1152198, 1),
        Array(1152199, 1),
		Array(1152200, 1),
		Array(1212120, 1),
		Array(1222113, 1),
		Array(1232113, 1),
		Array(1242121, 1),
		Array(1242122, 1),
		Array(1262039, 1),
		Array(1302343, 1),
		Array(1312203, 1),
		Array(1322255, 1),
		Array(1332279, 1),
		Array(1342104, 1),
		Array(1362140, 1),
		Array(1372228, 1),
		Array(1382265, 1),
		Array(1402259, 1),
		Array(1412181, 1),
		Array(1422189, 1),
		Array(1432218, 1),
		Array(1442274, 1),
        Array(1452257, 1),
		Array(1462243, 1),
		Array(1472265, 1),
		Array(1482221, 1),
		Array(1492235, 1),
		Array(1522143, 1),
		Array(1532150, 1),
        Array(1582023, 1),
		Array(1542117, 1),
		Array(1552119, 1),
		Array(1252098, 1),
		Array(1003801, 1),
		Array(1003800, 1),
		Array(1003797, 1),
        Array(1003799, 1),
		Array(1003798, 1),
		Array(1042255, 1),
		Array(1042254, 1),
		Array(1042257, 1),
		Array(1042256, 1),
		Array(1042258, 1),
	    Array(1062168, 1),
		Array(1062169, 1),
		Array(1062166, 1),
		Array(1062167, 1),
		Array(1062165, 1),
		Array(1412135, 1),
		Array(1532098, 1),
		Array(1542063, 1),
		Array(1472214, 1),
		Array(1362090, 1),
		Array(1242061, 1),
		Array(1242060, 1),
		Array(1432167, 1),
		Array(1302275, 1),
        Array(1492179, 1),
		Array(1522094, 1),
		Array(1372177, 1),
		Array(1212063, 1),
		Array(1222058, 1),
		Array(1262016, 1),
		Array(1552063, 1),
        Array(1442223, 1),
		Array(1462193, 1),
		Array(1232057, 1),
		Array(1422140, 1),
		Array(1382208, 1),
		Array(1332225, 1),
		Array(1402196, 1),
        Array(1322203, 1),
		Array(1482168, 1),
		Array(1582016, 1),
		Array(1452205, 1),
		Array(1312153, 1),
		Array(1342082, 1),
		Array(1252015, 1),
	    Array(1102481, 1),
		Array(1102485, 1),
		Array(1102484, 1),
		Array(1102483, 1),
		Array(1102482, 1),
		Array(1132174, 1),
		Array(1132175, 1),
		Array(1132176, 1),
		Array(1132177, 1),
		Array(1132178, 1),
		Array(1082544, 1),
		Array(1082545, 1),
		Array(1082546, 1),
		Array(1082547, 1),
        Array(1082543, 1),
		Array(1072744, 1),
		Array(1072743, 1),
		Array(1072746, 1),
		Array(1072745, 1),
		Array(1072747, 1),
		Array(1462239, 1),
        Array(1242116, 1),
		Array(1242120, 1),
		Array(1412177, 1),
		Array(1362135, 1),
		Array(1472261, 1),
		Array(1302333, 1),
		Array(1372222, 1),
        Array(1542108, 1),
		Array(1222109, 1),
		Array(1552110, 1),
		Array(1212115, 1),
		Array(1262017, 1),
		Array(1532144, 1),
		Array(1382259, 1),
	    Array(1442268, 1),
		Array(1522138, 1),
		Array(1332274, 1),
		Array(1312199, 1),
		Array(1322250, 1),
		Array(1492231, 1),
		Array(1432214, 1),
		Array(1232109, 1),
		Array(1402251, 1),
		Array(1582017, 1),
		Array(1252093, 1),
		Array(1482216, 1),
		Array(1452252, 1),
		Array(1342101, 1),
        Array(1422184, 1),
		Array(1102775, 1),
		Array(1102796, 1),
		Array(1102797, 1),
		Array(1102794, 1),
		Array(1102795, 1),
		Array(1152174, 1),
        Array(1152176, 1),
		Array(1152177, 1),
		Array(1152178, 1),
		Array(1152179, 1),
		Array(1082640, 1),
		Array(1082637, 1),
		Array(1082636, 1),
        Array(1082639, 1),
		Array(1082638, 1),
		Array(1052882, 1),
		Array(1052888, 1),
		Array(1052889, 1),
		Array(1052887, 1),
		Array(1052890, 1),
	    Array(1004423, 1),
		Array(1004424, 1),
		Array(1004422, 1),
		Array(1004425, 1),
		Array(1004426, 1),
		Array(1073034, 1),
		Array(1073035, 1),
		Array(1073032, 1),
		Array(1073033, 1),
		Array(1073030, 1),
		Array(1402014, 1),
		Array(1302063, 1),
		Array(1302106, 1),
		Array(1402044, 1),
        Array(1322051, 1),
		Array(1332021, 1),
		Array(1302035, 1),
		Array(1432037, 1),
		Array(1452050, 1),
		Array(1452049, 1),
		Array(1432043, 1),
        Array(1432044, 1),
		Array(1442058, 1),
		Array(1462044, 1),
		Array(1462045, 1),
		Array(1322058, 1),
		Array(1322057, 1),
		Array(1422034, 1),
        Array(1382044, 1),
		Array(1382043, 1),
		Array(1332060, 1),
		Array(1332061, 1),
		Array(1412030, 1),
		Array(1412031, 1),
		Array(1302076, 1),
        Array(1302075, 1),
		Array(1472059, 1),
		Array(1472060, 1),
		Array(1312035, 1),
		Array(1312036, 1),
		Array(1402042, 1),
		Array(4310088, 50),
		Array(4310143, 50),
		Array(4310234, 50),
		Array(4310233, 50),
		Array(4310049, 50),
        Array(4310085, 50)
        );//itemid,数量


function start() {
    status = -2;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == -1) {
        em = cm.getEventManager("WishTreeSystem");
        eim = em.getInstance("WishTreeSystem")
        if (eim == null) {
            cm.playerMessage(1, "抱歉\r\n\r\n管理员目前没有开放此状态 或 活动尚未开始");
            cm.dispose();
        } else {
            if (em.getProperty("WishName") == "null") {
                txt = "　　　　　　　 " + Icon[47][1] + "\r\n\r\n";
                txt += "#b　本日彩票幸运玩家还未公布 - 抓紧时间购买彩票吧#k";
                cm.sendNextS(txt, 3)
            } else {
                txt = "　　　　　　　 " + Icon[47][1] + "\r\n\r\n";
                txt += "#b　今日彩票幸运玩家是 #r" + em.getProperty("WishName") + "#b 恭喜你 ! #k";
                cm.sendNextS(txt, 2)
            }
        }
    } else if (status == 0) {
        if (eim == null) {
            cm.playerMessage(1, "抱歉\r\n\r\n管理员目前没有开放此状态 或 活动尚未开始");
            cm.dispose();
        } else {
            txt = "　　　#b欢迎光临 - #r彩票中心#b - 请选择你需的功能#k\r\n";
            txt += Icon[53][1];
            for (var i = 0; i <= 19; i++) {
                txt += Icon[54][1];
            };
            txt += Icon[55][1] + "\r\n";
            txt += "\t\t　#r#L0#" + Icon[6][1] + " 彩 票 直 售 中 心 #k" + Icon[6][1] + "#l\r\n\r\n";
            txt += "\t　 #d#L2#" + Icon[16][1] + " 查 询 我 的 彩 票 状 态 #k" + Icon[16][1] + "#l\r\n\r\n\r\n";
            txt += Icon[53][1];
            for (var i = 0; i <= 19; i++) {
                txt += Icon[54][1];
            };
            txt += Icon[55][1] + "\r\n";
            txt += "　#b#L1#" + Icon[4][1] + " 查 询 彩 票 中 心 正 确 购 买 指 针 #k" + Icon[4][1] + "#l";
            cm.sendSimpleS(txt, 2);
        }
    } else if (status == 1) {
        typed = selection;
        switch (selection) {
            case 2:
                var i = 0;
                text = "该期福利彩点卷金额为：\r\n#r - 如果显示已中奖，请点击领取奖励！\r\n#b"
                var AllRecordStore = cm.sql_Select("SELECT * FROM wishtreesystem_store where wishCharid = " + cm.getPlayer().getId() + " Order By  id Desc LIMIT 100")
                var AllRecord = cm.sql_Select("SELECT * FROM wishtreesystem where wishCharid = " + cm.getPlayer().getId() + "")
                for (var key in AllRecord) {//得到彩票仓库的记录数据
                    // 0 未公布 1 未中奖 2已中奖 3已领取
                    text += "\r\n#L" + i + "#[第#r" + AllRecord[key].get("id") + "#b个]  #v" + AllRecord[key].get("wishitem") + "#  #t" + AllRecord[key].get("wishitem") + "##l  #d - 未公布#b"
                    var recordPart = Array(AllRecord[key].get("id"), AllRecord[key].get("wishitem"), AllRecord[key].get("wishitemQty"), AllRecord[key].get("wishstatus"));
                    record.push(recordPart);
                    i++;
                }
                for (var key in AllRecordStore) {//得到记录数据
                    // 0 未公布 1 未中奖 2已中奖 3已领取
                    if (AllRecordStore[key].get("wishstatus") == 1) {//未中奖
                        text += "\r\n#L" + i + "#[第#r" + AllRecordStore[key].get("wishid") + "#b个]  #v" + AllRecordStore[key].get("wishitem") + "#  #t" + AllRecordStore[key].get("wishitem") + "##l  #d -未中奖#b"
                    } else if (AllRecordStore[key].get("wishstatus") == 2) {//已中奖
                        text += "\r\n#L" + i + "#[第#r" + AllRecordStore[key].get("wishid") + "#b个]  #v" + AllRecordStore[key].get("wishitem") + "#  #t" + AllRecordStore[key].get("wishitem") + "##l  #r - 已中奖#b"
                    } else if (AllRecordStore[key].get("wishstatus") == 0) {//未公布
                        text += "\r\n#L" + i + "#[第#r" + AllRecordStore[key].get("wishid") + "#b个]  #v" + AllRecordStore[key].get("wishitem") + "#  #t" + AllRecordStore[key].get("wishitem") + "##l  #d - 未公布#b"
                    } else if (AllRecordStore[key].get("wishstatus") == 3) {//已领取
                        text += "\r\n#L" + i + "#[第#r" + AllRecordStore[key].get("wishid") + "#b个]  #v" + AllRecordStore[key].get("wishitem") + "#  #t" + AllRecordStore[key].get("wishitem") + "##l  #d - 已领取#b"
                    }
                    i++;
                    var recordPart = Array(AllRecordStore[key].get("wishid"), AllRecordStore[key].get("wishitem"), AllRecordStore[key].get("wishitemQty"), AllRecordStore[key].get("wishstatus"));
                    record.push(recordPart);
                }
                if (i == 0) {
                    cm.sendOk("不好意思，现在暂时没有您的彩票清单。 \r\n彩票清单需要每日更新愿望之星之后，才能显示。");
                    status = -1;
                } else {
                    cm.sendSimple(text);
                    status = 3;
                }
                break;
            case 1:
                cm.sendNext("彩票每张为每次/8888888金币，彩票请点击彩票，选择目前彩票池的物品。这么多东西，肯定有一些是你想要的！选择好自己想要的东西之后，填写彩票感想，就可以载入愿望清单了！彩票系统每天固定时间将会找出愿望成真的人，并且全服公告。如果你想成为愿望之星的话，就来找我吧！\r\n#r材料类彩票  数量都为100个\r\n装备类彩票  数量都为1个")
                status = -1;
                break;
            case 0:
                if (em.getProperty("wish") == "open") {//如果是彩票开放状态
                    //---------------------------------------------
                    txt = Icon[56][1];
                    for (var i = 0; i <= 11; i++) {
                        txt += Icon[57][1];
                    };
                    txt += Icon[58][1] + "\r\n";
                    txt += "\t\t\t　#r#e- 彩 票 梦 想 中 心 - #k#n\r\n";
                    txt += "#r　 彩票中心有下列道具 - 请选择你想梦想成真的道具#k\r\n";
                    txt += "#d#n  　 图标		 数量	    道具\r\n#k"
                    var Rank = cm.sql_Select("SELECT `ItemId`,`Num`,`id`  FROM desire LIMIT 0,100")
                    var i = 1;
                    for (var key in Rank) {
                        txt += "　#L" + Rank[key].get("id") + "##v4021007#\t\t";
                        txt += "#b" + Rank[key].get("Num") + "#k";
                        for (var j = 10 - Rank[key].get("Num").getBytes().length; j > 0 ; j--) {
                            txt += " ";
                        }
                        if (Rank[key].get("ItemId") == 1) {
                            txt += "#r点卷#k";
                        }
                        if (Rank[key].get("ItemId") == 2) {
                            txt += "#r抵用卷#k";
                        }
                        if (Rank[key].get("ItemId") == 3) {
                            txt += "#r元宝#k";
                        }
                        txt += "#d#z" + Rank[key].get("ItemId") + "##k";

                        txt += "#l\r\n";
                        i++
                    }
                    txt += "\r\n\r\n";
                    txt += Icon[56][1];
                    for (var i = 0; i <= 11; i++) {
                        txt += Icon[57][1];
                    };
                    txt += Icon[58][1] + "\r\n";
                    cm.sendSimple(txt);
                } else {
                    cm.sendOk("现在是彩票池统计状态，暂时不能彩票。\r\n #r - 请等待1分钟后再试。");
                    status = -1;
                }
                break;
        }
    } else if (status == 2) {
        A = selection;
        if (cm.getBossLogAcc("彩票系统") >= WishTimes) {
            cm.sendOkS("抱歉\r\n\r\n一天一个帐号只能参与彩票" + WishTimes + "回\r\n\r\n您今天不能再彩票了！", 2);
            status = -1;
        } else if (cm.getMeso() < 5000000) {
            cm.playerMessage(1, "对不起，彩票一次需要500万金币。\r\n请确认您的金币是否足够。");
            cm.dispose();
        } else {
            var Rank = cm.sql_Select("SELECT `ItemId`,`Num`,`id`  FROM desire")
            for (var key in Rank) {
                if (Rank[key].get(3) == A) {
                    B = Rank[key].get(1);
                    C = Rank[key].get(2);
                }
                i++
            }

            txt = "　　　　　　　 " + Icon[47][1] + "\r\n\r\n";
            txt += "#r请输入您的愿望感想，感想写得越真实，获奖的几率将更高!!#k\r\n";
            typed = selection;
            cm.sendGetText(txt);
        }
    } else if (status == 3) {
        InsertWish(B, C, cm.getText());
        cm.playerMessage(1, "你的愿望已储存\r\n\r\n请等待每天定时更新的愿望之星\r\n希望名单上有你的名字~！\r\n - 花费了手续费88888888金币");
        cm.setBossLogAcc("彩票系统")
        cm.gainMeso(-8888888);
        cm.dispose();
    } else if (status == 4) {
        typed = selection;
        if (record[typed][3] != 2) {//如果不是已中奖状态
            cm.sendNext("选择的愿望已经领取或者还未领取或者已经领取了，不能继续进行。");
            status = -1;
        } else {// 奖励中奖部分
            if (cm.getSpace(1) < 1 || cm.getSpace(2) < 1 || cm.getSpace(3) < 1 || cm.getSpace(4) < 1 || cm.getSpace(5) < 1) {
                cm.sendOk("请让你所有的背包腾出一格后再试。");
                cm.dispose();
                return;
            }
            cm.gainItem(record[typed][1], record[typed][2]);//获得奖励
            UpdateData(record[typed][0], 3);//设置成已经领取了。
            cm.sendOk("领取彩票道具成功！！希望你能一直好运！！");
            status = -1;
        }
    }
}


function UpdateData(wishid, status) {
    cm.sql_Update("update wishtreesystem_store set wishstatus=? where wishid = ? and wishCharid = ?", status, wishid, cm.getPlayer().getId())
}

function InsertWish(wishitem, wishitemqty, wishnote) {
    cm.sql_Insert("INSERT INTO wishtreesystem(id,wishCharid,wishCharName,wishitem,wishitemQty,wishNote) values (?,?,?,?,?,?)", null, cm.getPlayer().getId(), cm.getPlayer().getName(), wishitem, wishitemqty, wishnote);
}
