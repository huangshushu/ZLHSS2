/*
	内容：个人排行榜
*/

var status = -1;
var Icon = Array(
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#")
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        var text = "\t\t  #e- 月光冒险岛排行榜单 -#n#r\r\n";
        //text += "\t\t\t#L2#????排行榜#l\r\n";
        //text += "\t\t\t#L0#个人等级排行榜#l\r\n";
        text += "\t\t\t#L4#冒险金币排行榜#l\r\n";
        //text += "\t\t\t#L5#点券财富排行榜#l\r\n";
        //text += "\t\t\t#L6#种植高手排行榜#l\r\n";
        text += "\t\t\t#L7#突破上限排行榜#l\r\n";
        text += "\t\t\t#L3#十大家族排行榜#l\r\n";
        text += "\t\t\t#L1#魅力人气排行榜#l\r\n";
        //text += "\t\t\t#L8#个人能力排行榜#l\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            var conn = cm.getConnection();
            var sql = "select name,level,gender from characters where gm<=0 order by level desc, exp desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            var text = "\t\t\t\t #e#d★ 个人等级排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家昵称#n\t\t  #e等级#n\t\t#e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!result.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充名字空格
                text += result.getString("name");
                for (var j = 16 - result.getString("name").getBytes().length; j > 0; j--) {
                    text += " ";
                }
                text += "\t" + result.getString("level");
                if (i == 1) {
                    text += "  \t#r★天下第一★#k";
                } else if (i == 2) {
                    text += "  \t#g★冲级狂魔★#k";
                } else if (i == 3) {
                    text += "  \t#b★等级宗师★#k";
                }
                text += "\r\n";
            }
            result.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 7) {
            var sql = "SELECT ii.limitbreak,i.itemid, c.name FROM inventoryitems i, inventoryequipment ii, characters c WHERE c.id = i.characterid AND ii.inventoryitemid = i.inventoryitemid AND limitbreak > 0 and c.gm<=0 ORDER BY limitbreak DESC LIMIT 0, 50";
            var conn = cm.getConnection();
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            var rankingData = new Array();
            while (result.next()) {
                var data = {};
                data.name = result.getString("name");
                data.itemid = result.getInt("itemid");
                data.limitbreak = result.getLong("limitbreak");
                rankingData.push(data);
            }
            result.close();
            pstmt.close();
            var text = "\t\t\t\t#e#d★ 突破上限排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家昵称#n\t\t  #e突破上限的武器及伤害#n\r\n";

            for (var i = 0; i < rankingData.length; i++) {
                if (i + 1 == 1) {
                    text += "#r";
                } else if (i + 1 == 2) {
                    text += "#g";
                } else if (i + 1 == 3) {
                    text += "#b";
                }
                text += "\t " + (i + 1) + "\t\t ";

                // 填充名字空格
                text += rankingData[i].name;
                var itemid = rankingData[i].itemid;
                for (var j = 16 - rankingData[i].name.toString().getBytes().length; j > 0; j--) {
                    text += " ";
                }
                var limitBreak = rankingData[i].limitbreak;
                var limitBreakText = limitBreak;
                if (limitBreak > 99999999) {
                    var currentBreak = new Number(limitBreak / 100000000).toFixed(3);
                    limitBreakText = currentBreak + "亿";
                } else if (limitBreak > 9999999 && limitBreak < 100000000) {
                    var currentBreak = new Number(limitBreak / 10000000).toFixed(3);
                    limitBreakText = currentBreak + "千万";
                } else if (limitBreak > 99999 && limitBreak < 10000000) {
                    var currentBreak = new Number(limitBreak / 10000).toFixed(3);
                    limitBreakText = currentBreak + "万";
                }
                text += "\t #v" + itemid + "#" + limitBreakText;

                text += "\r\n";
            }
            cm.sendOkS(text, 2);
            cm.dispose();
        } else if (selection == 1) {
            var conn = cm.getConnection();
            var sql = "select name,fame,gender from characters where gm<=0 order by fame desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var list = pstmt.executeQuery();
            var text = "\t\t\t\t #e#d★ 魅力人气排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家昵称#n\t\t  #e人气#n\t\t #e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!list.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充名字空格
                text += list.getString("name");
                for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
                    text += " ";
                }

                // 填充人气度
                text += "\t" + list.getInt("fame");
                var famevalues = list.getInt("fame");
                var famelength = 0;
                while (famevalues > 0) {
                    famevalues = Math.floor(famevalues / 10);
                    famelength += 1;
                }
                for (var j = 8 - famelength; j > 0; j--) {
                    text += " ";
                }

                if (i == 1) {
                    if (list.getInt("gender") == 0) {
                        text += " ★世界偶像★#k";
                    } else {
                        text += " ★魅力宝贝★#k";
                    }
                } else if (i == 2) {
                    text += "\t #k";
                } else if (i == 3) {
                    text += "\t #k";
                }
                text += "\r\n";
            }
            list.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 2) {
            var conn = cm.getConnection();
            var sql = "select distinct h.accname as zhanghao, h.pay+h.payUsed-h.gift as payMax from hypay h, characters c, accounts a where a.id = c.accountid and c.gm<=0 and a.id = h.accid order by payMax desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            var text = "\t\t\t\t#e#d★ 赞助总额排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家账号#n\t  #e赞助总额#n\t\t#e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!result.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充账号
                var Name = result.getString("zhanghao").substr(0, 4) + "****";
                text += Name;
                for (var j = 14 - Name.length; j > 0; j--) {
                    text += " ";
                }

                // 填充点券
                var zc = "≌" + (result.getString("payMax") / 10).toFixed(1) + "元";
                text += zc;
                var RMB = result.getString("payMax");
                var RMBlength = 0;
                while (RMB > 0) {
                    RMB = Math.floor(RMB / 10);
                    RMBlength += 1;
                }
                for (var j = 8 - RMBlength; j > 0; j--) {
                    text += " ";
                }

                if (i == 1) {
                    text += " ★一掷千金★";
                }
                text += "\r\n";
            }
            result.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 3) {
            var conn = cm.getConnection();
            var sql = "select c.name as leadername, g.name from characters c, guilds g where g.leader=c.id and c.gm<=0 order by g.gp desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var list = pstmt.executeQuery();
            var text = "\t\t\t\t #e#d★ 十大家族排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e家族名称#n\t\t    #e族长#n\t\t\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!list.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充名字空格
                text += list.getString("name");
                for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
                    text += " ";
                }

                // 填充族长名称
                text += "\t " + list.getString("leadername");
                var leadername = list.getString("leadername");

                for (var j = 16 - list.getString("leadername").getBytes().length; j > 0; j--) {
                    text += " ";
                }


                text += "\t #k";

                text += "\r\n";
            }
            list.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 4) {
            var conn = cm.getConnection();
            var sql = "select c.name as name, c.meso + s.meso as meso, c.gender as gender from characters c, storages s where c.gm<=0 and c.accountid = s.accountid order by meso desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var list = pstmt.executeQuery();
            var text = "\t\t\t\t #e#d★ 冒险金币排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家昵称#n\t\t #e资产#n\t\t  #e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!list.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充名字空格
                text += list.getString("name");
                for (var j = 15 - list.getString("name").getBytes().length; j > 0; j--) {
                    text += " ";
                }

                // 填充资产
                var zc = " ≌" + (list.getLong("meso") / 100000000).toFixed(2) + "亿";
                text += zc;
                var meso = list.getLong("meso");
                var mesolength = 0;
                while (meso > 0) {
                    meso = Math.floor(meso / 10);
                    mesolength += 1;
                }
                for (var j = 8 - mesolength; j > 0; j--) {
                    text += " ";
                }

                if (i == 1) {
                    text += "  ★富可敌国★";
                }

                text += "#k\r\n";
            }
            list.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 6) {
            var conn = cm.getConnection();
            var sql = "select c.name,g.level from characters c, memory_garden g where c.gm<=0 and c.id=g.charid order by g.level desc, g.exp desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            var text = "\t\t\t\t#e#d★ 种植高手排行 ★#k#n\r\n\r\n";
            text += "\t#k#e名次#n\t#e玩家昵称#n\t\t#e花园等级#n\t\t #e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!result.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t " + i + "\t\t ";

                // 填充名字空格
                text += result.getString("name");
                for (var j = 16 - result.getString("name").getBytes().length; j > 0; j--) {
                    text += " ";
                }
                text += "\t " + result.getString("level");
                if (i == 1) {
                    text += "\t\t ★天工开物★#k";
                } else if (i == 2) {
                    text += "\t\t ★妙手回春★#k";
                } else if (i == 3) {
                    text += "\t\t ★熟能生巧★#k";
                }
                text += "\r\n";
            }
            result.close();
            pstmt.close();
            conn.close();
            cm.sendOkS(text, 2);
            cm.dispose();
        } else if (selection == 5) {
            var conn = cm.getConnection();
            var sql = "select distinct a.name,a.ACash from accounts a, characters c where c.gm<=0 and a.id = c.accountid order by a.ACash desc limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            var text = "\t\t\t\t #e#d★ 点券财富排行 ★#k#n\r\n\r\n";
            text += "\t#e名次#n\t#e玩家账号#n\t  #e点券总数#n\t\t #e称号#n\r\n";
            for (var i = 1; i <= 10; i++) {
                if (!result.next()) {
                    break;
                }
                if (i == 1) {
                    text += "#r";
                } else if (i == 2) {
                    text += "#g";
                } else if (i == 3) {
                    text += "#b";
                }
                text += "\t #fUI/UIWindow4.img/bossRanking/number/" + (i - 1) + "#\t ";

                // 填充账号
                var Name = result.getString("a.name").substr(0, 4) + "****";
                text += Name;
                for (var j = 14 - Name.length; j > 0; j--) {
                    text += " ";
                }

                // 填充点券
                var zc = "≌" + (result.getLong("a.ACash") / 10000).toFixed(2) + "万";
                text += zc;
                var ACash = result.getLong("a.ACash");
                var ACashlength = 0;
                while (ACash > 0) {
                    ACash = Math.floor(ACash / 10);
                    ACashlength += 1;
                }
                for (var j = 9 - ACashlength; j > 0; j--) {
                    text += " ";
                }

                if (i == 1) {
                    text += "      ★壕★";
                }
                text += "\r\n";
            }
            result.close();
            pstmt.close();
            cm.sendOkS(text, 3);
            cm.dispose();
        } else if (selection == 8) {

            var conn = cm.getConnection();
            var sql = "SELECT str+dex+luk+`int` as maxCare,str,dex,luk,`int`,name from characters ORDER BY maxCare DESC limit 10;";
            var pstmt = conn.prepareStatement(sql);
            var result = pstmt.executeQuery();
            txt = "\t\t　　　　　 #e#r能力值排名中心#k#n\r\n\r\n";
            txt += Icon[0][1];
            for (var i = 0; i <= 97; i++) {
                txt += Icon[1][1];
            };
            txt += Icon[2][1] + "\r\n\r\n";
            txt += "#d#n\r\n   排名　玩家名称  　 力量　　敏捷　　运气　　智力\r\n#k";
            for (var i = 1; i <= 10; i++) {
                if (!result.next()) {
                    break;
                }
                if (i == 1) {
                    txt += "#r";
                } else if (i == 2) {
                    txt += "#g";
                } else if (i == 3) {
                    txt += "#b";
                }
                txt += "\t " + i + "\t ";

                // 填充名字空格
                txt += result.getString("name");
                for (var j = 12 - result.getString("name").getBytes().length; j > 0; j--) {
                    txt += " ";
                }
                txt += " " + result.getString("str");
                for (var j = 7 - result.getString("str").getBytes().length; j > 0; j--) {
                    txt += " ";
                }
                txt += " " + result.getString("dex");
                for (var j = 7 - result.getString("dex").getBytes().length; j > 0; j--) {
                    txt += " ";
                }
                txt += " " + result.getString("luk");
                for (var j = 7 - result.getString("luk").getBytes().length; j > 0; j--) {
                    txt += " ";
                }
                txt += " " + result.getString("int");
                for (var j = 7 - result.getString("int").getBytes().length; j > 0; j--) {
                    txt += " ";
                }
                txt += "#k";

                txt += "\r\n";
            }
            txt += "\r\n" + Icon[0][1];
            for (var i = 0; i <= 97; i++) {
                txt += Icon[1][1];
            };
            txt += Icon[2][1] + "\r\n";
            result.close();
            pstmt.close();
            cm.sendOkS(txt, 2);
            cm.dispose();
        }
    }
}