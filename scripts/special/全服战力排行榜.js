var status = -1;
var typea;
var wenhIcon="";
var numIcon="";
var Icona="";
var Iconb="";
var Iconc="";
//自己是否在排行榜
var selfIn = false;
//奖励
var giftid = [
	//奖励id，力量 敏捷 智力 运气 物攻 魔攻
	[1032266, 30, 30, 30, 30, 25, 25],
	[1032265, 20, 20, 20, 20, 15, 15],
	[1032264, 10, 10, 10, 10, 5, 5],

];

var eff1 = "#fUI/GuildMark/Mark/Etc/00009023/11#";
var eff2 = "#fUI/GuildMark/Mark/Etc/00009023/1#";
var eff3 = "#fUI/GuildMark/Mark/Etc/00009023/7#";
var eff = "#fUI/GuildMark/Mark/Etc/00009004/4#";

var effs = [
	"#fUI/GuildMark/Mark/Letter/00005030/1#",
	"#fUI/GuildMark/Mark/Letter/00005031/10#",
	"#fUI/GuildMark/Mark/Letter/00005032/12#",
	"#fUI/GuildMark/Mark/Letter/00005033/9#",
	"#fUI/GuildMark/Mark/Letter/00005034/15#",
	"#fUI/GuildMark/Mark/Letter/00005035/7#"
];
//排名
var paiming = -1;

function start() {
    
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
	if (status == 0) {
		var text = "#d┏━━━━━━━━个人战力一周排名━━━━━━━━┓#k\r\n\r\n";
        text += "#L1#本周排行#l\t\t";
        text += "#L2#上周排行#l\t\t";
        text += "#L3#上传战力#l\r\n\r\n";
		text += format(" ", 30, "") + format(" ", 20, "#r当前本人战力值：" + getEquipScore()) + "\r\n\r\n"; 
		text += "#d     每一星期刷新一次  排在前三名  领取专属奖励#k\r\n";
		text += "#d┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
		//cm.gainGP(45);
        cm.sendSimple(text);
		//cm.sendSimple("欢迎来到战斗力排行榜，请选择：\r\n#L1#查看本周排行榜#l\t\t#L2#查看上周排行榜#l");
	}	 else if (status == 1) {
        if (selection == 3) {
			cm.dispose();
			cm.openNpc(9040008, "战斗力信息上传")
		} else {
			var dbName = "";
			if (selection == 1) {
				dbName = "equip_score"
			} else {
				dbName = "equip_score_before"
			}
			var selectSql = "select t.character_id,t.job,t.name,t.total_score from " + dbName + " t order by t.total_score desc limit 9";
			var list = cm.sql_Select(selectSql);
			//var txtx = "#r注意：同账号每天只能领取一次奖励#k\r\n"
			var txtx = "\t\t\t\t#e#d"+eff+" - 战斗力排行榜 - "+eff+"#k#n\r\n\r\n";
			if (list.length == 0) {
				cm.sendOk(" #r目前还没有玩家战力排行数据哦！#k\r\n");
				cm.dispose();
				return;
			}
			var txt = txtx + "  #e#d" + format(" ", 13, "名次") + format(" ", 16, "角色名") + format(" ", 16, "战力评分")+"#k#n\r\n";
			for (var i in list) {
				if (i == 0) {
					txt += eff1;
				} else if (i == 1) {
					txt += eff2;
				} else if (i == 2) {
					txt += eff3;
				} else {
					txt += effs[i-3]+" "
				}
				var jobName = cm.职业(list[i].get("job"));
				var charName = list[i].get("name");
				var charId = list[i].get("character_id");
				if (!selfIn && charId == cm.getPlayer().getId()) {
					selfIn = true;
					paiming = i;
				}
				var score = list[i].get("total_score");
				txt += " ";
				txt += "#r"+format(" ", 13, ("第 "+(i+1)+" 名").toString());
				txt += "#k"+format(" ", 20, charName.toString());
				txt += "#b"+format(" ", 16, score.toString());
				
				
				//txt += "" + (i + 1) + "." + format(" ", 16, jobName.toString()) + format(" ", 20, charName.toString()) + score + "";
				txt += "#k\r\n";
			}
			if (selection == 2) {
				txt += "\r\n#r#L41#领取排行榜奖励#l"
			} else {
				cm.dispose();
			}
			cm.sendOk(txt);
		}
    } else if (status == 2) {
        typea = selection;
        if (typea == 41) {
            var txt = "\t\t\t\t#e#r领取详情\r\n\r\n";
            //txt += "#e#r第一名#v"+giftid[0][0]+"#  一周后消失\r\n\r\n";
            //txt += "#e#r第二名给个一个一周使用的勋章  一周后消失\r\n\r\n";
            //txt += "#e#r第三名给个一个一周使用的勋章  一周后消失\r\n\r\n";
			
			for (var i in giftid) {
				txt+= "#e#r第"+(parseInt(i)+1)+"名#v"+giftid[i][0]+"#力量"+giftid[i][1]+"敏捷"+giftid[i][2]+"智力"+giftid[i][3]+"运气"+giftid[i][4]+"物攻"+giftid[i][5]+"魔攻"+giftid[i][6]+" 周一消失\r\n"
			}
            txt += "是否要领取？";
            cm.sendYesNo(txt);

        } else {
            cm.dispose();
        }

    } else if (status == 3) {
        if (typea == 41) {
            if (!selfIn) {
                cm.sendOk("你不在排行榜中哦，无法领取奖励");
            } else if (getlog() > 0) {
                cm.sendOk("你本周已经领取过奖励了，每个账号每周只能领一次哦！");
            } else {
				
                var cal = java.util.Calendar.getInstance();
                var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
                if (hour >= 21 && false) {
                    cm.sendOk("0-21点之间才可以领取奖励哦！");
                } else if (!cm.canHold(giftid[paiming][0], 1)) {
					cm.sendOk("背包空间不足或已有奖励道具#v"+giftid[paiming][0]+"#，无法领取奖励");
				} else {
					
                    if (paiming < 0) {
                        cm.sendOk("排名有误");
                    } else if (paiming <= 2) {
                        var eq = cm.getEquip(giftid[paiming][0]);
                        eq.setExpiration(calTime());
                        eq.setStr(giftid[paiming][1])
                        eq.setDex(giftid[paiming][2])
                        eq.setInt(giftid[paiming][3])
                        eq.setLuk(giftid[paiming][4])
                        eq.setWatk(giftid[paiming][5])
                        eq.setMatk(giftid[paiming][6])
						cm.addFromDrop(eq);
                        cm.setBossLog2("战斗力排行榜奖励");
                        cm.getPlayer().dropMessage(1, "领取成功");
                    } else {
                        cm.sendOk("前三名才可以领取奖励");
                    }

                }
            }
        }
        cm.dispose();
    }
}

function getEquipScore() {
	var sql = cm.sql_Select("select total_score from equip_score where character_id = ?", cm.getPlayer().getId());
	if (sql.length > 0) {
		return sql[0].get("total_score");
	} else {
		return 0;
	}
}

function getlog () {
	var sql = cm.sql_Select("SELECT * FROM bosslog2 WHERE characterid = ? AND bossid = '战斗力排行榜奖励' AND WEEKOFYEAR(time) = WEEKOFYEAR(NOW())", cm.getPlayer().getId());
	return sql.length;
}

function format(c, length, content) {
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

function calTime() {
	var cal = java.util.Calendar.getInstance();

	// 设置周一为第一天
	cal.setFirstDayOfWeek(java.util.Calendar.MONDAY);
	// 日期减去7天
	cal.add(java.util.Calendar.DATE, 7);
	// 时间设置到周一，此时时间为周一的日期
	cal.set(java.util.Calendar.DAY_OF_WEEK, java.util.Calendar.MONDAY);
	cal.set(java.util.Calendar.HOUR_OF_DAY, 0);
	cal.set(java.util.Calendar.MINUTE, 0);
	cal.set(java.util.Calendar.SECOND, 0);
	return cal.getTimeInMillis();
}