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
            txt = "\t\t　　#b " + Icon[73][1] + " #r#e #fs16#爵位中心#fs12# #n#b " + Icon[74][1] + " #k\r\n";
            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n\r\n";

            txt += "#L0#" + Icon[68][1] + " #b爵位说明 [ #r阅#b ]#l　　#L1#" + Icon[68][1] + " 查询爵位 [ #r全体#b ]#l#k\r\n\r\n";
            txt += "#L2#" + Icon[68][1] + " #r提升爵位 [ #g捐#r ]#l　　#L3#" + Icon[68][1] + " 爵位奖品 [ #g个人#r ]#l#k\r\n\r\n\r\n";
            txt += " #b" + "     " + Icon[8][1] + " 尊敬的 #r" + cm.getName() + "#b 欢迎光临 - #d爵位中心#b -  " + Icon[8][1] + "\r\n";

            txt += Icon[65][1];
            for (var i = 0; i <= 22; i++) {
                txt += Icon[66][1];
            };
            txt += Icon[67][1] + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    txt = "\t\t　　#b " + Icon[73][1] + " #r#e 爵位说明 #n#b " + Icon[74][1] + " #k\r\n";
                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n\r\n";

                    txt += "　#d" + Icon[4][1] + " 爵位中心 - 每周的 [ #r1#d ] - [ #r6#d ] 进行金币捐献\r\n";
                    txt += "　#d" + Icon[4][1] + " 爵位中心 - 每周的 [ #r6#d ] - 将结束捐献来确认爵位值\r\n";
                    txt += "　#b" + Icon[4][1] + " 领奖时间 - 在 #r周日#b 的时间段内领你的奖品\r\n";
                    txt += "　#r" + Icon[4][1] + " 奖励介绍：（以下奖励道具时间限制为6天）\r\n";
                    txt += "　#r" + Icon[4][1] + " 奖品信息 - 如下 请阅读爵位奖品\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + Icon[4][1] + " 【国王】（第1名）\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " #v1142541#（全属性+666）#v2614057#x17\r\n";
                    txt += "　#r" + Icon[4][1] + " #v3991029#x1000 #v4031997#x150\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + Icon[4][1] + " 【公爵】（第2名）\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " #v1142540#（全属性+444）#v2614057#x15\r\n";
                    txt += "　#r" + Icon[4][1] + " #v3991029#x500 #v4031997#x100\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + Icon[4][1] + " 【侯爵】（第3名）\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " #v1142539#（全属性+222）#v2614057#x13\r\n";
                    txt += "　#r" + Icon[4][1] + " #v3991029#x300 #v4031997#x70\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";
                    txt += "　#r" + Icon[4][1] + " 【伯爵】（后续名次）\r\n\r\n";
                    txt += "　#r" + Icon[4][1] + " #v1142538#（全属性+111）\r\n";
                    txt += "　#r" + Icon[4][1] + " #v3991029#x100 #v4031997#x40\r\n";
                    txt += "　#r" + Icon[4][1] + " -----------------------------------------------\r\n";

                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n";
                    cm.sendOkS(txt, 3);
                    status = -1;
				break;

                case 1:
					var conn = cm.getConnection();
					var pstmt = conn.prepareStatement("SELECT * FROM `Care_JueRank` ORDER BY Meso DESC LIMIT 10;");
					var rs = pstmt.executeQuery();
                    txt = "\t\t　　#b " + Icon[73][1] + " #r#e 爵位排行 #n#b " + Icon[74][1] + " #k\r\n\r\n";
                    txt += Icon[62][1];
                    for (var i = 0; i <= 97; i++) {
                        txt += Icon[63][1];
                    };
                    txt += Icon[64][1] + "\r\n\r\n";
                    txt += "#d#n   排序　　　　　玩家名称　　　　金币	　 　 爵位\r\n#k";
					var rowCount = 0; 
					while(rs.next()){
						var name = format(" ", 14, rs.getString("charname").toString());
						var Meso = format(" ", 15, (Math.floor((Number(rs.getString("Meso"))/100000000)*100)/100).toString()+"亿");
						
						if (rowCount == 0) {
                            txt += "#r";
                        } else if (rowCount == 1) {
                            txt += "#b";
                        } else if (rowCount == 3) {
                            txt += "#d";
                        }
                        txt += "\t " + (rowCount+1) + "\t　　　   ";
                        txt += name;
                        txt += Meso;
                        if (rowCount == 0) {
                            txt += "#r国王#k";
                        }
                        if (rowCount == 1) {
                            txt += "#b公爵#k";
                        }
                        if (rowCount > 1 && i <= 3) {
                            txt += "#d侯爵#k";
                        }
                        if (rowCount > 3 && i <= 5) {
                            txt += "#s伯爵#k";
                        }
                        if (rowCount > 5 && i <= 7) {
                            txt += "#d子爵#k";
                        }
                        if (rowCount > 7 && rowCount <= 9) {
                            txt += "#d男爵#k";
                        }
                        txt += "\r\n";
						
						
						rowCount ++;
					}
					pstmt.close();
					
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
                    txt = "\t\t　　#b " + Icon[73][1] + " #r#e 捐献中心 #n#b " + Icon[74][1] + " #k\r\n";
                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n\r\n";

                    txt += "　　　　#d" + Icon[4][1] + " 请输入你想捐献的 #r金币 #d数量 " + Icon[4][1] + "\r\n\r\n\r\n";

                    txt += Icon[65][1];
                    for (var i = 0; i <= 22; i++) {
                        txt += Icon[66][1];
                    };
                    txt += Icon[67][1] + "\r\n\r\n";
                    cm.sendGetText(txt);
				break;

                case 3:
                    if (Push != "星期日") {
                        cm.playerMessage(1, "抱歉\r\n\r\n周日才可以领奖品 - 请捐献提升爵位");
                        cm.dispose();
                        return;
                    }
					var selectSql="SELECT * FROM `care_juerank` ORDER BY `Meso` DESC LIMIT 10";
					var list=cm.sql_Select(selectSql);
					if(list.size()>0)
					{
						for(var i in list)
						{
							var name = list[i].get("charname");
							if (cm.getPQLog("爵位排名" + (parseInt(i)+1) + "奖品") > 0) {
								cm.playerMessage(1, "抱歉\r\n\r\n奖品只能领一回");
								cm.dispose();
								return;
							}
							var rank=parseInt(i);
							if (rank == 0 && name == cm.getName()) {
								cm.setPQLog("爵位排名" + (rank+1) + "奖品");
								GainItemCare(1142541, 666, 666, 666, 666, 666, 666, 150, "最强王者", 6);
								cm.playerMessage(1, "恭喜你领到了第一名奖品");
								cm.gainItem(3991029, 1000);
								cm.gainItem(2614057, 17);
								cm.gainItem(4031997, 150);
								cm.dispose();
								return;
							}

							if (rank == 1 && name == cm.getName()) {
								cm.setPQLog("爵位排名" + (rank+1) + "奖品");
								GainItemCare(1142540, 444, 444, 444, 444, 444, 444, 130, "黄金勋章", 6);
								cm.playerMessage(1, "恭喜你领到了第二名奖品"); 							
								cm.gainItem(3991029, 500);
								cm.gainItem(2614057, 15);
								cm.gainItem(4031997, 100);
								cm.dispose();
								return;
							}

							if (rank == 2 && name == cm.getName()) {
								cm.setPQLog("爵位排名" + (rank+1) + "奖品");
								cm.playerMessage(1, "恭喜你领到了第三名奖品");
								GainItemCare(1142539, 222, 222, 222, 222, 222, 222, 100, "白银勋章", 6);
								cm.gainItem(3991029, 300);
								cm.gainItem(2614057, 13);
								cm.gainItem(4031997, 70);
								cm.dispose();
								return;
							}

							if (rank > 2 && rank < 10 && name == cm.getName()) {
								cm.setPQLog("爵位排名" + (rank+1) + "奖品");
								GainItemCare(1142538, 111, 111, 111, 111, 111, 111, 50, "青铜勋章", 6);
								cm.gainItem(3991029, 100);
								cm.gainItem(4031997, 40);
								cm.playerMessage(1, "恭喜你领到了后续的奖品");
								cm.dispose();
								return;
							}
						}
						cm.sendOk("抱歉，您没有获得排名。");
						cm.dispose();
						return;
					}
					else
					{
						cm.sendOk("抱歉，当前没有任何排名数据！");
						cm.dispose();
					}
				break;
            }
        } else if (status == 2) {
            if (cm.getMeso() < Number(cm.getText())) {
                cm.playerMessage(1, "抱歉\r\n\r\n你没有那么多金币");
                cm.dispose();
                return;
            }
            cm.gainMeso(-Number(cm.getText()));
            Care_SetJue(Number(cm.getText()));
            cm.playerMessage(1, "恭喜\r\n\r\n捐献成功\r\n\r\n你捐献了 " + Number(cm.getText()) + "\r\n\r\n我们将取整并计入排行中");
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
    toDrop.setTotalDamage(TotalDamage);
    toDrop.setBossDamage(BossDamage);
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
    var Times = sql_Select("SELECT * FROM `Care_JueRank` WHERE `charid` = " + cm.getPlayer().getId() + "");
    if (Times.length > 0) {
        i = Times.get(0).get("Meso");
    }
    return parseInt(i);
}

function Care_SetJue(Meso) {
	// var conn = cm.getConnection();
	// var pstmt = conn.prepareStatement("SELECT * FROM `Care_JueRank` WHERE `charid` = " + cm.getPlayer().getId());
	// var rs =pstmt.executeQuery();
    // if (rs.next()) {
		// pstmt = conn.prepareStatement("update Care_JueRank set Meso = Meso+"+Meso+" WHERE (charid='" + cm.getPlayer().getId() + "');");
		// pstmt.executeUpdate();
		// pstmt.close();
		
    // } else {
		// pstmt = conn.prepareStatement("INSERT INTO Care_JueRank(charid,charname,Meso,RMB,Dianjuan,diyongjuan) values (?,?,?,0,0,0)");
		// pstmt.setInt(1,cm.getPlayer().getId());
		// pstmt.setString(2,cm.getPlayer().getName());
		// pstmt.setString(3,Meso);
		// pstmt.executeUpdate();
		// pstmt.close();
    // }
	var selectSql="select * from Care_JueRank t where t.charid="+cm.getPlayer().getId();
	var list=cm.sql_Select(selectSql);
	if(list.size()>0)
	{
		var updateSql="update Care_JueRank set meso=meso+"+Meso+" where charid="+cm.getPlayer().getId();
		cm.sql_Update(updateSql);
	}
	else
	{
		var insertSql="insert into Care_JueRank(charid,charname,Meso,time) values("+cm.getPlayer().getId()+","+cm.getPlayer().getName()+","+Meso+",now())";
		cm.sql_Insert(insertSql);
	}
}
