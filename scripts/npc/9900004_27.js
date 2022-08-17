/*
 * 玩家贩卖点装 装备 后台系统
 * 奇幻冒险岛工作室制作
 * 备份数据库 cashtradesystemStore
 */
var status = 0;
var AllRecord;
var TradeId;
var giveback = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.sendOk("祝您游戏愉快!!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "你好管理员:\r\n#b"
        text += "#L0# 管理现有的交易信息。\r\n"
        text += "#L1# 上架自定义的道具！(New~)\r\n"
        text += "#L2# 查看上架自定义的道具的总收入(New~)"
        text += "\r\n#L3# #r查看销售情况(New~)。\r\n#L4# #r查看销售日志(最新100条)。"
        cm.sendSimple(text);


    } else if (status == 1) {
        if (selection == 0) {
            var text = "目前所有交易信息:\r\n(点击即可移动到仓库)\r\n#d"
            text += "#r#L99999# 将所有数据转移到仓库！\r\n#d"
            AllRecord = cm.sql_Select("SELECT id,itemid FROM cashtradesystem")
            for (var key in AllRecord) {//得到记录数据
                text += "#L" + AllRecord[key].get("id") + "#[第" + AllRecord[key].get("id") + "号]  #i" + AllRecord[key].get("itemid") + "#\t#t" + AllRecord[key].get("itemid") + "# #l\r\n"
            }
            if (text == "目前所有交易信息:\r\n(点击即可移动到仓库)\r\n#d#r#L99999# 将所有数据转移到仓库！\r\n#d") {
                cm.sendOk("目前暂时没有任何交易发起。");
                cm.dispose();
            } else {
                cm.sendSimple(text);
            }
        } else if (selection == 1) {//上架自定义的道具！
            cm.dispose();
            cm.openNpc(9900000, 2);
        } else if (selection == 2) {//查看销量
            var i = 0;
            var text = "以下是你的数据：\r\n";
            var CharRecord = cm.sql_Select("SELECT * FROM TradeSystemGiveBack where cid = '-1'")
            for (var key in CharRecord) {//得到记录数据
                giveback[0] = CharRecord[key].get("meso");
                giveback[1] = CharRecord[key].get("dianquan");
                giveback[2] = CharRecord[key].get("diyong");
                i++;
            }
            if (i == 0) {
                cm.sendOk("暂时还没有卖出去的数据。");
                cm.dispose();
            } else {
                if (giveback[0] == 0 && giveback[1] == 0 && giveback[2] == 0) {
                    cm.sendOk("目前没有金额可以查询。")
                    cm.dispose();
                } else {
                    cm.sendOk("截至目前一共卖出了" + i + "个道具。\r\n目前的收入为：\r\n金币：" + giveback[0] + "\r\金币：" + giveback[1] + "\r\n元宝：" + giveback[2] + "\r\n希望您的生意蒸蒸日上~");
                    cm.dispose();
                }
            }
        } else if (selection == 3) {
            status = 2;
            cm.sendGetNumber("管理员你好，你想查看几天内的销售情况？", 0, 0, 365);
        } else if (selection == 4) {
            var LogRecord = cm.sql_Select("SELECT tid,cid,boughtByCid,boughtByCName,boughtTradeType,boughtPrice,boughtItemid,DATE_FORMAT(boughtDate,'%m月%d日') as boughtDate FROM cashtradesystemLog  Order By  boughtDate Desc LIMIT 100")
            var text = "以下是最近100条的贩卖讯息：\r\n#b"
            for (var i in LogRecord) {//得到记录数据
                if (LogRecord[i].get("boughtTradeType") == 0) {//金币
                    text += "第" + (i + 1) + "条：" + LogRecord[i].get("boughtDate") + " #i" + LogRecord[i].get("boughtItemid") + "#被" + LogRecord[i].get("boughtByCName") + "以" + LogRecord[i].get("boughtPrice") + " 金币买走。\r\n"
                } else if (LogRecord[i].get("boughtTradeType") == 1) {//点券
                    text += "第" + (i + 1) + "条：" + LogRecord[i].get("boughtDate") + " #i" + LogRecord[i].get("boughtItemid") + "#被" + LogRecord[i].get("boughtByCName") + "以" + LogRecord[i].get("boughtPrice") + " 金币1买走。\r\n"
                } else if (LogRecord[i].get("boughtTradeType") == 2) {
                    text += "第" + (i + 1) + "条：" + LogRecord[i].get("boughtDate") + " #i" + LogRecord[i].get("boughtItemid") + "#被" + LogRecord[i].get("boughtByCName") + "以" + LogRecord[i].get("boughtPrice") + " 元宝买走。\r\n"
                }
            }
            status = -1;
            cm.sendNext(text);
        }
    } else if (status == 2) {//移动到仓库
        if (selection == 99999) {
            TradeId = selection;
            var AllRecords = cm.sql_Select("SELECT * FROM cashtradesystem where id = " + TradeId + "")
            var AllRecordAll = cm.sql_Select("SELECT * FROM cashtradesystem")
            //得到数据，并且加入到仓库数据库
            for (var key in AllRecordAll) {//得到记录数据
                cm.sql_Insert("INSERT INTO cashtradesystemStore(id,cid,itemid,itemtype,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,ignorePDR,totalDamage,allStat,karmaCount,tradeType,itemPrice,hands,ViciousHammer,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    AllRecordAll[key].get("id"),
                    AllRecordAll[key].get("cid"),
                    AllRecordAll[key].get("itemid"),
                    AllRecordAll[key].get("itemtype"),
                    AllRecordAll[key].get("str"),
                    AllRecordAll[key].get("dex"),
                    AllRecordAll[key].get("ints"),
                    AllRecordAll[key].get("luk"),
                    AllRecordAll[key].get("hp"),
                    AllRecordAll[key].get("mp"),
                    AllRecordAll[key].get("watk"),
                    AllRecordAll[key].get("matk"),
                    AllRecordAll[key].get("wdef"),
                    AllRecordAll[key].get("mdef"),
                    AllRecordAll[key].get("acc"),
                    AllRecordAll[key].get("avoid"),
                    AllRecordAll[key].get("speed"),
                    AllRecordAll[key].get("jump"),
                    AllRecordAll[key].get("upgradeSlots"),
                    AllRecordAll[key].get("limitBreak"),
                    AllRecordAll[key].get("potential1"),
                    AllRecordAll[key].get("potential2"),
                    AllRecordAll[key].get("potential3"),
                    AllRecordAll[key].get("potential4"),
                    AllRecordAll[key].get("potential5"),
                    AllRecordAll[key].get("potential6"),
                    AllRecordAll[key].get("enhance"),
                    AllRecordAll[key].get("reqLevel"),
                    AllRecordAll[key].get("yggdrasilWisdom"),
                    AllRecordAll[key].get("bossDamage"),
                    AllRecordAll[key].get("ignorePDR"),
                    AllRecordAll[key].get("totalDamage"),
                    AllRecordAll[key].get("allStat"),
                    AllRecordAll[key].get("karmaCount"),
                    AllRecordAll[key].get("tradeType"),
                    AllRecordAll[key].get("itemPrice"),
                    AllRecordAll[key].get("hands"),
                    AllRecordAll[key].get("ViciousHammer"),
                    AllRecordAll[key].get("ItemEXP"),
                    AllRecordAll[key].get("sealedlevel"),
                    AllRecordAll[key].get("sealedExp"),
                    AllRecordAll[key].get("Owner"),
                    AllRecordAll[key].get("level"),
                    AllRecordAll[key].get("expiredate")
                ); // 载入数据
                // DeleteDataById(AllRecordAll[key].get("id"));
            }
            DeleteDataAll();
            cm.sendNext("移植所有数据成功！");
            cm.dispose();
        } else {
            TradeId = selection;
            var AllRecords = cm.sql_Select("SELECT * FROM cashtradesystem where id = " + TradeId + "")
            //得到数据，并且加入到仓库数据库
            for (var key in AllRecords) {//得到记录数据
                if (AllRecords[key].get("id") == TradeId) {
                    i = 1;
                    cm.sql_Insert("INSERT INTO cashtradesystemStore(id,cid,itemid,itemtype,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,ignorePDR,totalDamage,allStat,karmaCount,tradeType,itemPrice,hands,ViciousHammer,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        AllRecords[key].get("id"),
                        AllRecords[key].get("cid"),
                        AllRecords[key].get("itemid"),
                        AllRecords[key].get("itemtype"),
                        AllRecords[key].get("str"),
                        AllRecords[key].get("dex"),
                        AllRecords[key].get("ints"),
                        AllRecords[key].get("luk"),
                        AllRecords[key].get("hp"),
                        AllRecords[key].get("mp"),
                        AllRecords[key].get("watk"),
                        AllRecords[key].get("matk"),
                        AllRecords[key].get("wdef"),
                        AllRecords[key].get("mdef"),
                        AllRecords[key].get("acc"),
                        AllRecords[key].get("avoid"),
                        AllRecords[key].get("speed"),
                        AllRecords[key].get("jump"),
                        AllRecords[key].get("upgradeSlots"),
                        AllRecords[key].get("limitBreak"),
                        AllRecords[key].get("potential1"),
                        AllRecords[key].get("potential2"),
                        AllRecords[key].get("potential3"),
                        AllRecords[key].get("potential4"),
                        AllRecords[key].get("potential5"),
                        AllRecords[key].get("potential6"),
                        AllRecords[key].get("enhance"),
                        AllRecords[key].get("reqLevel"),
                        AllRecords[key].get("yggdrasilWisdom"),
                        AllRecords[key].get("bossDamage"),
                        AllRecords[key].get("ignorePDR"),
                        AllRecords[key].get("totalDamage"),
                        AllRecords[key].get("allStat"),
                        AllRecords[key].get("karmaCount"),
                        AllRecords[key].get("tradeType"),
                        AllRecords[key].get("itemPrice"),
                        AllRecords[key].get("hands"),
                        AllRecords[key].get("ViciousHammer"),
                        AllRecords[key].get("ItemEXP"),
                        AllRecords[key].get("sealedlevel"),
                        AllRecords[key].get("sealedExp"),
                        AllRecords[key].get("Owner"),
                        AllRecords[key].get("level"),
                        AllRecords[key].get("expiredate")
                    ); // 载入数据
                }
            }
            DeleteDataById(TradeId);
            status = 0;
            cm.sendNext("移植成功！" + TradeId);
        }
    }
    else if (status == 3) {
        var meso = 0, nx = 0, hypay = 0;
        var LogRecord = cm.sql_Select("SELECT tid,cid,boughtByCid,boughtByCName,boughtTradeType,boughtPrice,boughtItemid,DATE_FORMAT(boughtDate,'%m月%d日') as boughtDate FROM cashtradesystemLog where DATE_SUB(CURDATE(), INTERVAL " + selection + " DAY) <= date(boughtDate)")
        var text = "以下是系统在" + selection + "天内的销售情况：\r\n#b"
        for (var key in LogRecord) {//得到记录数据
            if (LogRecord[key].get("boughtTradeType") == 0) {//金币
                meso += parseInt(LogRecord[key].get("boughtPrice"));
            }
            if (LogRecord[key].get("boughtTradeType") == 1) {//点券
                nx += parseInt(LogRecord[key].get("boughtPrice"));
            }
            if (LogRecord[key].get("boughtTradeType") == 0) {//元宝
                hypay += parseInt(LogRecord[key].get("boughtPrice"));
            }
        }
        text += "一共有" + LogRecord.length + "起交易发布成功！\r\n"
        text += "元宝销售量：" + hypay + "\r\n";
        text += "金币销售量：" + meso + "\r\n";
        text += "金币销售量：" + meso + "\r\n";
        status = -1;
        cm.sendOk(text);
    } else if (status == 4) {

    }
}

function DeleteDataById(id) { //删除数据
    cm.sql_Update("delete from cashtradesystem where id = ?", id)
}

function DeleteDataAll() {//删除数据
    cm.sql_Update("delete from cashtradesystem");
}
