
var status = -1;
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var victim;
var 建立师门等级 = 150;
var nx;
var nx1;
var 拜师收徒介绍 = "徒弟等级低于70级 师父等级大于150级 即可收徒  徒弟170级出师 150级有奖励双倍BUFF卡1个";
var 师徒奖励介绍 = ""
var 出师等级 = 170;
var SFMR1JID = 3992025;//教师等级为1奖励的道具
var SFMR1JNU = 10;//教师等级为1奖励道具的数量1

var SFMR2JID = 4000463;//教师等级为2奖励的道具
var SFMR2JNU = 3;//教师等级为2奖励道具的数量2
var SFMR2JID1 = 2049100;//教师等级为2奖励的道具
var SFMR2JNU1 = 3;//教师等级为2奖励道具的数量2


var SFMR3JID = 4000463;//教师等级为3奖励的道具
var SFMR3JNU = 5;//教师等级为3奖励道具的数量
var SFMR3JID1 = 2049100;//教师等级为3奖励的道具
var SFMR3JNU1 = 5;//教师等级为3奖励道具的数量
var SFMR3JID2 = 4005004;//教师等级为3奖励的道具
var SFMR3JNU2 = 10;//教师等级为3奖励道具的数量3
var SFMR3JID3 = 3992025;//教师等级为3奖励的道具
var SFMR3JNU3 = 100;//教师等级为3奖励道具的数量3

var SFMR4JID = 4000463;//教师等级为4奖励的道具
var SFMR4JNU = 8;//教师等级为4奖励道具的数量
var SFMR4JID1 = 2049100;//教师等级为4奖励的道具
var SFMR4JNU1 = 10;//教师等级为4奖励道具的数量
var SFMR4JID2 = 4005004;//教师等级为4奖励的道具
var SFMR4JNU2 = 20;//教师等级为4奖励道具的数量
var SFMR4JID3 = 2041315;//教师等级为4奖励的道具
var SFMR4JNU3 = 2;//教师等级为4奖励道具的数量4
var SFMR4JID4 = 3992025;//教师等级为4奖励的道具
var SFMR4JNU4 = 300;//教师等级为4奖励道具的数量4

var SFMR5JID = 4000463;//教师等级为5奖励的道具
var SFMR5JNU = 10;//教师等级为5奖励道具的数量
var SFMR5JID1 = 2049100;//教师等级为5奖励的道具
var SFMR5JNU1 = 15;//教师等级为5奖励道具的数量
var SFMR5JID2 = 4005004;//教师等级为5奖励的道具
var SFMR5JNU2 = 30;//教师等级为5奖励道具的数量
var SFMR5JID3 = 2040815;//教师等级为5奖励的道具
var SFMR5JNU3 = 2;//教师等级为5奖励道具的数量
var SFMR5JID4 = 3992025;//教师等级为5奖励的道具
var SFMR5JNU4 = 500;//教师等级为5奖励道具的数量

var SFMR6JID = 4000463;//教师等级为6奖励的道具
var SFMR6JNU = 20;//教师等级为6奖励道具的数量
var SFMR6JID1 = 2049100;//教师等级为6奖励的道具
var SFMR6JNU1 = 30;//教师等级为6奖励道具的数量
var SFMR6JID2 = 4005004;//教师等级为6奖励的道具
var SFMR6JNU2 = 50;//教师等级为6奖励道具的数量
var SFMR6JID3 = 2040903;//教师等级为6奖励的道具
var SFMR6JNU3 = 2;//教师等级为6奖励道具的数量
var SFMR6JID4 = 3992025;//教师等级为6奖励的道具
var SFMR6JNU4 = 1000;//教师等级为6奖励道具的数量


var TD160JLQID = 2450000;//徒弟160级可领取奖励
var TD160JLQNU = 1;//徒弟160级可领取奖励数量

var TDCSID1 = 2450000;//徒弟出师奖励1
var TDCSNU1 = 2;

var TDCSID2 = 4000463;//徒弟出师奖励2
var TDCSNU2 = 5;

var 师傅每日奖励道具;
var 师傅每日奖励数量;
var 称谓;
var 教学等级;
var 教学经验;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
			 称谓 = "未建师门";
		} else if (cm.getPlayer().getBossLog("出师积分",1) == 0) {
			 称谓 = "普通教师";
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 1 && cm.getPlayer().getBossLog("出师积分",1) <= 5) {
			 称谓 = "为人师表";
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 6 && cm.getPlayer().getBossLog("出师积分",1) <= 10) {
			 称谓 = "循循诱导";
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 11 && cm.getPlayer().getBossLog("出师积分",1) <= 20) {
			 称谓 = "诲人不倦";
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 21 && cm.getPlayer().getBossLog("出师积分",1) <= 40) {
			 称谓 = "厚得树人";
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 41 && cm.getPlayer().getBossLog("出师积分",1) <= 999) {
			 称谓 = "桃李天下";
		}
		if (cm.getPlayer().getBossLog("出师积分",1) == 0) {
			 教学等级 = 1;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 1 && cm.getPlayer().getBossLog("出师积分",1) <= 5) {
			 教学等级 = 2;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 6 && cm.getPlayer().getBossLog("出师积分",1) <= 10) {
			 教学等级 = 3;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 11 && cm.getPlayer().getBossLog("出师积分",1) <= 20) {
			 教学等级 = 4;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 21 && cm.getPlayer().getBossLog("出师积分",1) <= 40) {
			 教学等级 = 5;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 41 && cm.getPlayer().getBossLog("出师积分",1) <= 999) {
			 教学等级 = 6;
		}
		if (cm.getPlayer().getBossLog("出师积分",1) == 0) {
			 教学经验 = 0;
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 1 && cm.getPlayer().getBossLog("出师积分",1) <= 5) {
			 教学经验 = 6 - cm.getPlayer().getBossLog("徒弟",1);
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 6 && cm.getPlayer().getBossLog("出师积分",1) <= 10) {
			 教学经验 = 11 - cm.getPlayer().getBossLog("徒弟",1);
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 11 && cm.getPlayer().getBossLog("出师积分",1) <= 20) {
			 教学经验 = 21 - cm.getPlayer().getBossLog("徒弟",1);
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 21 && cm.getPlayer().getBossLog("出师积分",1) <= 40) {
			 教学经验 = 41 - cm.getPlayer().getBossLog("徒弟",1);
		} else if (cm.getPlayer().getBossLog("出师积分",1) >= 41 && cm.getPlayer().getBossLog("出师积分",1) <= 999) {
			 教学经验 ="☆巅  峰☆";
		}
			
		    var text = ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n";
			text += "              #r欢迎来到月月冒险岛师徒系统#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
			text += " #r注意：徒弟150奖励在170级前领取，170奖励在出师前领取#k\r\n\r\n"
			text += " 	┏━━━━━━━━基 本 信 息━━━━━━━┓#k\r\n"
			text += "					#d您当前有#k [#r"+cm.getPlayer().getBossLog("徒弟",1)+"#k]#d 位徒弟\r\n\r\n"
			text += "		您的教学等级为 #k[ #r"+教学等级+"#k ]#d 	 称谓 #k[#r"+称谓+"#k]#d\r\n\r\n"
			text += "		您的教学经验为#k [ #r"+cm.getPlayer().getBossLog("徒弟",1)+"#k ]#d	 还需 #k[ #r"+教学经验+"#k ]#d 升级#k\r\n\r\n"
			text += "	┗━━━━━━━━━━ ━━━━━━━━━━┛\r\n"
			text += "				   #r#L0#我要建立师门#l\r\n\r\n"
			text += "		#L90#拜师收徒介绍#l		#L91#师徒奖励介绍#l\r\n\r\n"
			text += "#b"
			text += " 	┏━━━━━━━━师 傅 选 项━━━━━━━┓#k\r\n"
			text += "		#L1#我要收徒#l #L2#逐出师门#l #L3#师傅奖励#l#b\r\n\r\n"
			text += "	┗━━━━━━━━━━ ━━━━━━━━━━┛\r\n"
			text += " 	┏━━━━━━━━徒 弟 选 项━━━━━━━┓#k\r\n"
			text += "		#L4#我要出师#l #L5#离开师门#l #L6#徒弟奖励#l#b\r\n\r\n"
			text += "	┗━━━━━━━━━━ ━━━━━━━━━━┛\r\n"
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 0){//建立师门
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 建立师门等级){ 
				cm.sendOk("你的等级不够 #r"+建立师门等级+" #k级。");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getBossLog("创建师门",1) == 0){
				cm.getPlayer().setBossLog("创建师门",1,1);
				cm.sendOk("创建师门成功。");
				cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门，要找师傅的赶紧了！");
				cm.dispose();
			} else {
				cm.sendOk("师门只能创建一次。");
				cm.dispose();
			}
			
        } else if (selection == 1){//我要收徒
		if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
			cm.sendOk("你还没有建立师门。");
			cm.dispose();
		} else {
		cm.sendYesNo("每位师傅最多同时收 3 名徒弟。");
		nx = 4;
		}

		} else if (selection == 2){//逐出师门
		          if (cm.getPlayer().getBossLog("收徒_1",1) == 0 && cm.getPlayer().getBossLog("收徒_2",1) == 0 && cm.getPlayer().getBossLog("收徒_3",1) == 0) {
					  cm.sendOk("你还没有收徒。");
					  cm.dispose();
				  } else {
                  cm.sendYesNo("你要将徒弟逐出师门吗？");
				  nx = 0;
				  }				  
		} else if (selection == 3){//师傅奖励#l#b
		          if (cm.getPlayer().getBossLog("创建师门",1) != 1) {
					  cm.sendOk("只有师傅才能获得该奖励");
					  cm.dispose();
				  } else {
                  cm.sendYesNo("师傅资质越高，每日可领取的奖励越好。\r\n是否要领取今日的奖励？");
				  nx = 1;
				  }	 
		} else if (selection == 4){//出师奖励
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("收徒_1",1) == victim.getId() || cm.getPlayer().getBossLog("收徒_2",1) == victim.getId() || cm.getPlayer().getBossLog("收徒_3",1) == victim.getId()) {
                		cm.sendNext("很好，你现在要带领你的徒弟 "+getname(victim.getId())+" 进行出师仪式吗？");
                		nx = 5;
					} else {
						cm.sendNext("请和徒弟组队后，再来找我。");
						cm.dispose();
                    }

		} else if (selection == 5){//退出师门
			if (cm.getPlayer().getBossLog("师傅",1) == 0) {
				cm.sendOk("你还没有师傅，无需退出师门。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("创建师门",1) > 0) {
				cm.sendOk("你是来搞笑的吗？");
				cm.dispose();
			} else {
				cm.sendYesNo("是否要退出 "+getname(cm.getPlayer().getBossLog("师傅",1))+" 的师门？");
				nx = 2;
			}
		} else if (selection == 6){//徒弟每日奖励
			if (cm.getPlayer().getBossLog("师傅",1) == 0) {
				cm.sendOk("你还没有师傅，无法领取。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 1) {
				cm.sendOk("你在搞笑吗？");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("师傅",1) != 0 && cm.getLevel() > 149 && cm.getLevel() < 170) {
				cm.sendYesNo("是否要领取徒弟150级奖励？");
			
				nx = 3;
			} else if (cm.getPlayer().getBossLog("师傅",1) != 0 && cm.getLevel() > 169) {
				cm.sendYesNo("是否要领取徒弟170级奖励？");
			
				nx = 11;
			} else {
				cm.sendOk("你不符合条件");			
				cm.dispose();
			}
		} else if (selection == 90){
			cm.sendOk(拜师收徒介绍);
		} else if (selection == 91){
					    var text = "\r\n";
			text += " 	#e#d┏━━━━━━━━师傅每日奖励━━━━━━━┓#n#k\r\n\r\n"
			text += "	  #r[普通教师]：每日可领取#k\r\n	#v"+SFMR1JID+"#*"+SFMR1JNU+"\r\n"
			text += "	  #r[为人师表]：每日可领取#k\r\n	#v"+SFMR2JID+"#*"+SFMR2JNU+"  #v"+SFMR2JID1+"#*"+SFMR2JNU1+"\r\n"
			text += "	  #r[循循善诱]：每日可领取#k\r\n	#v"+SFMR3JID+"#*"+SFMR3JNU+"  #v"+SFMR3JID1+"#*"+SFMR3JNU1+" #v"+SFMR3JID2+"#*"+SFMR3JNU2+" #v"+SFMR3JID3+"#*"+SFMR3JNU3+"\r\n"
			text += "	  #r[诲人不倦]：每日可领取#k\r\n	#v"+SFMR4JID+"#*"+SFMR4JNU+"  #v"+SFMR4JID1+"#*"+SFMR4JNU1+" #v"+SFMR4JID2+"#*"+SFMR4JNU2+" #v"+SFMR4JID3+"#*"+SFMR4JNU3+" #v"+SFMR4JID4+"#*"+SFMR4JNU4+"\r\n"
			text += "	  #r[厚得树人]：每日可领取#k\r\n	#v"+SFMR5JID+"#*"+SFMR5JNU+"  #v"+SFMR5JID1+"#*"+SFMR5JNU1+" #v"+SFMR5JID2+"#*"+SFMR5JNU2+" #v"+SFMR5JID3+"#*"+SFMR5JNU3+" #v"+SFMR5JID4+"#*"+SFMR5JNU4+"\r\n"
			text += "	  #r[桃李天下]：每日可领取#k\r\n	#v"+SFMR6JID+"#*"+SFMR6JNU+"  #v"+SFMR6JID1+"#*"+SFMR6JNU1+" #v"+SFMR6JID2+"#*"+SFMR6JNU2+" #v"+SFMR6JID3+"#*"+SFMR6JNU3+" #v"+SFMR6JID4+"#*"+SFMR6JNU4+"\r\n"
			text += "	#e#d┗━━━━━━━━━━ ━━━━━━━━━━┛#n#k\r\n"
			text += " 	#e#d┏━━━━━━━━徒弟可以领取━━━━━━━┓#n#k\r\n\r\n"
			text += "	  #r[徒弟等级达到150]：可领取#k\r\n				  #v"+TD160JLQID+"# * "+TD160JLQNU+"\r\n"
			text += "	  #r[徒弟成功出师等级170]：可领取#k\r\n				  #v"+TDCSID1+"# * "+TDCSNU1+" #v"+TDCSID2+"# * "+TDCSNU2+"\r\n"
			text += "	#e#d┗━━━━━━━━━━ ━━━━━━━━━━┛#n#k\r\n"
            cm.sendSimple(text);
		   }
		} else if (status == 2) {
		       if (nx == 0) {
				   				   if (cm.getPlayer().getBossLog("收徒_1",1) > 0) {
					   var 显示 = "#L3#将 "+getname(cm.getPlayer().getBossLog("收徒_1",1))+" 逐出师门！\r\n"
				   } else {
					   var 显示 = "";
					   }
				    if (cm.getPlayer().getBossLog("收徒_2",1) > 0) {
					   var 显示1 = "#L4#将 "+getname(cm.getPlayer().getBossLog("收徒_2",1))+" 逐出师门！\r\n"
				   } else {
					   var 显示1 = "";
					   }
				    if (cm.getPlayer().getBossLog("收徒_3",1) > 0) {
					   var 显示2 = "#L5#将 "+getname(cm.getPlayer().getBossLog("收徒_3",1))+" 逐出师门！\r\n"
				   } else {
					   var 显示2 = "";
					   }
					   var text = "请选择所要逐出师门的弟子：\r\n#r注：选择后结果将不可逆，请谨慎选择。#k\r\n";
				      text += 显示;
					  text += 显示1;
					  text += 显示2;
					  cm.sendSimple(text);	


				   
			   } else if (nx == 1) {//师傅每日奖励
				  		if (教学等级 == 1) {
			师傅每日奖励道具 = SFMR1JID;
			师傅每日奖励数量 = SFMR1JNU;
		} else if (教学等级 == 2) {
			师傅每日奖励道具 = SFMR2JID;
			师傅每日奖励数量 = SFMR2JNU;
			师傅每日奖励道具1 = SFMR2JID1;
			师傅每日奖励数量1 = SFMR2JNU1;
		} else if (教学等级 == 3) {
			师傅每日奖励道具 = SFMR3JID;
			师傅每日奖励数量 = SFMR3JNU;
			师傅每日奖励道具1 = SFMR3JID1;
			师傅每日奖励数量1 = SFMR3JNU1;
			师傅每日奖励道具2 = SFMR3JID2;
			师傅每日奖励数量2 = SFMR3JNU2;
			师傅每日奖励道具3 = SFMR3JID3;
			师傅每日奖励数量3 = SFMR3JNU3;
		} else if (教学等级 == 4) {
			师傅每日奖励道具 = SFMR4JID;
			师傅每日奖励数量 = SFMR4JNU;
			师傅每日奖励道具1 = SFMR4JID1;
			师傅每日奖励数量1 = SFMR4JNU1;
			师傅每日奖励道具2 = SFMR4JID2;
			师傅每日奖励数量2 = SFMR4JNU2;
			师傅每日奖励道具3 = SFMR4JID3;
			师傅每日奖励数量3 = SFMR4JNU3;
			师傅每日奖励道具4 = SFMR4JID4;
			师傅每日奖励数量4 = SFMR4JNU4;
		} else if (教学等级 == 5) {
			师傅每日奖励道具 = SFMR5JID;
			师傅每日奖励数量 = SFMR5JNU;
			师傅每日奖励道具1 = SFMR5JID1;
			师傅每日奖励数量1 = SFMR5JNU1;
			师傅每日奖励道具2 = SFMR5JID2;
			师傅每日奖励数量2 = SFMR5JNU2;
			师傅每日奖励道具3 = SFMR5JID3;
			师傅每日奖励数量3 = SFMR5JNU3;
			师傅每日奖励道具4 = SFMR5JID4;
			师傅每日奖励数量4 = SFMR5JNU4;
			//师傅每日奖励道具5 = SFMR5JID5;
			//师傅每日奖励数量5 = SFMR5JNU5;
        } else if (教学等级 == 6) {
			师傅每日奖励道具 = SFMR6JID;
			师傅每日奖励数量 = SFMR6JNU;
			师傅每日奖励道具1 = SFMR6JID1;
			师傅每日奖励数量1 = SFMR6JNU1;
			师傅每日奖励道具2 = SFMR6JID2;
			师傅每日奖励数量2 = SFMR6JNU2;
			师傅每日奖励道具3 = SFMR6JID3;
			师傅每日奖励数量3 = SFMR6JNU3;
			师傅每日奖励道具4 = SFMR6JID4;
			师傅每日奖励数量4 = SFMR6JNU4;
			//师傅每日奖励道具5 = SFMR6JID5;
			//师傅每日奖励数量5 = SFMR6JNU5;
		}
				   if (cm.getBossLog("师傅每日奖励") == 0 && cm.canHold(师傅每日奖励道具,师傅每日奖励数量)) {
					   cm.setBossLog("师傅每日奖励");
					   cm.gainItem(师傅每日奖励道具,师傅每日奖励数量);
					   cm.gainItem(师傅每日奖励道具1,师傅每日奖励数量1);
					   cm.gainItem(师傅每日奖励道具2,师傅每日奖励数量2);
					   cm.gainItem(师傅每日奖励道具3,师傅每日奖励数量3);
					   cm.gainItem(师傅每日奖励道具4,师傅每日奖励数量4);
					   cm.gainItem(师傅每日奖励道具5,师傅每日奖励数量5);
					   cm.sendOk("根据您目前的等级，今日的奖励 [ #d#v"+师傅每日奖励道具+"##z"+师傅每日奖励道具+"##k * #r"+师傅每日奖励数量+"#k ] 领取成功。");
					   cm.dispose();
				   }else{
					   cm.sendOk("今日奖励已领取或背包不足。");
					   cm.dispose();
    }
			   } else if (nx == 2) {	//退出师门
				   cm.getPlayer().setBossLog("师傅",1,- cm.getPlayer().getBossLog("师傅",1));
				   cm.sendOk("你以退出师门。");
				   cm.dispose();
			   } else if (nx == 3) {//徒弟150级奖励
				   if (cm.getPlayer().getBossLog("徒弟150级奖励",1) == 0  && cm.canHold(TD160JLQID,TD160JLQNU) && cm.getLevel() >= 150) {//cm.getPlayer().getBossLog("徒弟150级奖励",1) == 0
					   cm.gainItem(2450000, 1);
					   cm.setBossLog("徒弟150级奖励");
					   cm.sendOk("150级奖励领取成功~");
					   cm.dispose();
				   } else {
					   cm.sendOk("奖励已领取或者背包空间不足。");
					   cm.dispose();
				   }
			   } else if (nx == 11) {//徒弟170级奖励
				   if (cm.getPlayer().getBossLog("徒弟170级奖励",1) == 0  && cm.canHold(TD160JLQID,TD160JLQNU) && cm.getLevel() >= 170) {//cm.getPlayer().getBossLog("徒弟150级奖励",1) == 0
					   cm.gainItem(2450000, 2);
					   cm.gainItem(4000463, 5);
					   cm.setBossLog("徒弟170级奖励");
					   cm.sendOk("170级奖励领取成功~");
					   cm.dispose();
				   } else {
					   cm.sendOk("奖励已领取或者背包空间不足。");
					   cm.dispose();
				   }
			   } else if (nx == 4) {
				   if (cm.getPlayer().getBossLog("收徒_1",1) > 0) {
					   var 显示 = "   1.徒弟名字："+getname(cm.getPlayer().getBossLog("收徒_1",1))+"\r\n"
				   } else {
					   var 显示 = "#L0#1.当前徒弟位暂缺，可以收徒\r\n";
					   }
				    if (cm.getPlayer().getBossLog("收徒_2",1) > 0) {
					   var 显示1 = "2."+getname(cm.getPlayer().getBossLog("收徒_2",1))+"\r\n"
				   } else {
					   var 显示1 = "#L1#2.当前徒弟位暂缺，可以收徒\r\n";
					   }
				    if (cm.getPlayer().getBossLog("收徒_3",1) > 0) {
					   var 显示2 = "3."+getname(cm.getPlayer().getBossLog("收徒_3",1))+"\r\n"
				   } else {
					   var 显示2 = "#L2#3.当前徒弟位暂缺，可以收徒\r\n";
					   }
					   var text = "以下为当前收徒情况：\r\n";
				      text += 显示;
					  text += 显示1;
					  text += 显示2;
					  cm.sendSimple(text);	
					  
			   } else if (nx == 5) {
				   if (cm.getPlayer().getBossLog("收徒_1",1) == victim.getId()) {
					   var 显示 = "   #L6#带领徒弟 "+getname(cm.getPlayer().getBossLog("收徒_1",1))+" 出师。\r\n"
				   } else {
					   var 显示 = "";
					   }
				    if (cm.getPlayer().getBossLog("收徒_2",1) == victim.getId()) {
					   var 显示1 = "   #L7#带领徒弟 "+getname(cm.getPlayer().getBossLog("收徒_2",1))+" 出师。\r\n"
				   } else {
					   var 显示1 = "";
					   }
				    if (cm.getPlayer().getBossLog("收徒_3",1) == victim.getId()) {
					   var 显示2 = "   #L8#带领徒弟 "+getname(cm.getPlayer().getBossLog("收徒_3",1))+" 出师。\r\n"
				   } else {
					   var 显示2 = "";
					   }
					   var text = "请选择准备出师的徒弟：\r\n";
				      text += 显示;
					  text += 显示1;
					  text += 显示2;
					  cm.sendSimple(text);	
}
		} else if (status == 3) {
			if (selection == 0) {
				if (cm.getParty() == null) {
					cm.sendNext("请组队后在来找我！");
					cm.dispose();
					return;
				}
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("你的队友等级超过 70 级，无法拜入师门。");
				cm.dispose();
				return;
			} else if (victim.getBossLog("师傅",1) == cm.getPlayer().getId()){
				cm.sendOk("你已经收过这个徒弟了");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("收徒_1",1,victim.getId());
					victim.setBossLog("师傅",1,cm.getPlayer().getId());
					cm.sendOk("你成功收了"+victim.getName()+"为徒弟。");
					cm.worldMessage(6,"【师徒系统】：[" + cm.getChar().getName() + "]将["+victim.getName()+"]收为徒弟，大家恭喜他们~");
					cm.dispose();
					return;
			}
					
	} else if (selection == 1) {
			if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			}
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
			
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("你的队友等级超过 70 级，无法拜入师门。");
				cm.dispose();
				return;
			} else if (victim.getBossLog("师傅",1) == cm.getPlayer().getId()){
				cm.sendOk("你已经收过这个徒弟了");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("收徒_2",1,victim.getId());
					victim.setBossLog("师傅",1,cm.getPlayer().getId());
					cm.sendOk("你成功收了"+victim.getName()+"为徒弟。");
					cm.worldMessage(6,"【师徒系统】：[" + cm.getChar().getName() + "]将["+victim.getName()+"]收为徒弟，大家恭喜他们~");
					cm.dispose();
					return;
					}
					
			   } else if (selection == 2) {
				   if (cm.getParty() == null) {
						cm.sendNext("请组队后在来找我！");
						cm.dispose();
						return;
					}	
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("你的队友等级超过 70 级，无法拜入师门。");
				cm.dispose();
				return;
			} else if (victim.getBossLog("师傅",1) == cm.getPlayer().getId()){
				cm.sendOk("你已经收过这个徒弟了");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("收徒_3",1,victim.getId());
					victim.setBossLog("师傅",1,cm.getPlayer().getId());
					cm.sendOk("你成功收了"+victim.getName()+"为徒弟。");
					cm.worldMessage(6,"【师徒系统】：[" + cm.getChar().getName() + "]将["+victim.getName()+"]收为徒弟，大家恭喜他们~");
					cm.dispose();
					return;
					}
			   } else if (selection == 3) { 
			       cm.sendYesNo("是否要将 "+getname(cm.getPlayer().getBossLog("收徒_1",1))+" 逐出师门？");
				   nx1 = 1;
			   } else if (selection == 4) { 
			       cm.sendYesNo("是否要将 "+getname(cm.getPlayer().getBossLog("收徒_2",1))+" 逐出师门？");
				   nx1 = 2;
			   } else if (selection == 5) { 
			       cm.sendYesNo("是否要将 "+getname(cm.getPlayer().getBossLog("收徒_3",1))+" 逐出师门？");
				   nx1 = 3;
				   
			 } else if (selection == 6) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() < 出师等级){
				cm.sendOk("你的徒弟等级低于 "+出师等级+" 级，无法出师。");
				cm.dispose();
				return;
			} else {//====================================================出师奖励添加到这里↓↓↓↓↓
					cm.getPlayer().setBossLog("出师积分",1,1);
				cm.getPlayer().setBossLog("徒弟",1,1);
				cm.getPlayer().setBossLog("收徒_1",1,-cm.getPlayer().getBossLog("收徒_1",1));
				victim.setBossLog("师傅",1,-victim.getBossLog("师傅",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//徒弟出师奖励1【勿改，改动数值请写在上面】
                    victim.gainItem(TDCSID2, TDCSNU2);	//徒弟出师奖励2		【勿改，改动数值请写在上面】		
					cm.sendOk("恭喜你出师成功");
					cm.dispose();
					return;
					}	
			 } else if (selection == 7) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() < 出师等级){
				cm.sendOk("你的徒弟等级低于 "+出师等级+" 级，无法出师。");
				cm.dispose();
				return;
			} else {//====================================================出师奖励添加到这里↓↓↓↓↓
					cm.getPlayer().setBossLog("出师积分",1,1);
				cm.getPlayer().setBossLog("徒弟",1,1);
				cm.getPlayer().setBossLog("收徒_2",1,-cm.getPlayer().getBossLog("收徒_2",1));
				victim.setBossLog("师傅",1,-victim.getBossLog("师傅",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//徒弟出师奖励1【勿改，改动数值请写在上面】
                    victim.gainItem(TDCSID2, TDCSNU2);	//徒弟出师奖励2	【勿改，改动数值请写在上面】					
					cm.sendOk("恭喜你出师成功");
					cm.dispose();
					return;
					}	
			 } else if (selection == 8) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请保证你的队伍满足以下要求：\r\n1.队伍内只有 2 名玩家。\r\n2.你和你的队友都在同一张地图内。");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("创建师门",1) == 0) {
                cm.sendNext("请让师傅跟我对话。");
                cm.dispose();
                return;
			} else if (victim.getLevel() < 出师等级){
				cm.sendOk("你的徒弟等级低于 "+出师等级+" 级，无法出师。");
				cm.dispose();
				return;
			} else {//====================================================出师奖励添加到这里↓↓↓↓↓
					cm.getPlayer().setBossLog("出师积分",1,1);
				cm.getPlayer().setBossLog("徒弟",1,1);
				cm.getPlayer().setBossLog("收徒_3",1,-cm.getPlayer().getBossLog("收徒_3",1));
				victim.setBossLog("师傅",1,-victim.getBossLog("师傅",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//徒弟出师奖励1【勿改，改动数值请写在上面】
                    victim.gainItem(TDCSID2, TDCSNU2);	//徒弟出师奖励2	【勿改，改动数值请写在上面】					
					cm.sendOk("恭喜你出师成功");
					cm.dispose();
					return;
					}					
}
		} else if (status == 4) {
			   if (nx1 == 1) {
			   cm.sendOk("已将 "+getname(cm.getPlayer().getBossLog("收徒_1",1))+" 逐出师门！");
			   cm.getPlayer().setBossLog("收徒_1",1,-cm.getPlayer().getBossLog("收徒_1",1));
               cm.dispose();
			   } else if (nx1 == 2) {
			   cm.sendOk("已将 "+getname(cm.getPlayer().getBossLog("收徒_2",1))+" 逐出师门！");
			   cm.getPlayer().setBossLog("收徒_2",1,-cm.getPlayer().getBossLog("收徒_2",1));
               cm.dispose();
			   } else if (nx1 == 3) {
			   cm.sendOk("已将 "+getname(cm.getPlayer().getBossLog("收徒_3",1))+" 逐出师门！");
			   cm.getPlayer().setBossLog("收徒_3",1,-cm.getPlayer().getBossLog("收徒_3",1));
               cm.dispose();
}
}
}
function getname(id){
 var con1 = Packages.database.DatabaseConnection.getConnection();
 ps1 = con1.prepareStatement("SELECT name FROM characters WHERE id = ?");
 ps1.setInt(1, id);
 var rs1 = ps1.executeQuery();
 var name;
 if (rs1.next()) {
  name = rs1.getString("name");
 } else {
  name = "匿名人士";
 }
 rs1.close();
 ps1.close();
 return name;
}