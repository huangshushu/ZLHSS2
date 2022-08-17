/*
 脚本：拍卖主菜单
 */
//时间引用
importClass(Packages.handling.channel.ChannelServer);

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 最低等级 = 1;
var 最高等级 = 255;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.对话结束();
        return;
    }
     if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(cm.getPlayer().赌博房间>0){
		cm.对话结束();
		cm.打开NPC(9900004,303);
		return;
	}

	var 疲劳值 = cm.getPlayer().判断疲劳值();
	//显示的进度，需要改成和控制台1号的时间一样。分制
	var 疲劳值限制 = 600;
	var 进度 = 疲劳值/疲劳值限制*100;
	if(疲劳值>疲劳值限制){
		进度=100;
	}
	//显示
    if (status == 0) {
		if(cm.haveItem(2022552,1)==false){
			cm.gainItem(2022552,1)
			if (cm.getOneTimeLog("新手驾到") < 9999 && cm.getPlayerStat("LVL") < 31) 
			if(cm.haveItem(2022670,1)==false)
			cm.gainItem(2022670,1)
		}
		var time = cm.getGamePoints()
		if(cm.getPlayer().getOneTimeLog("金肝卡") > 0){
			time = 1440
		}
		/* if(cm.getPlayer().getOneTimeLog("出生伤害皮肤") <= 0){
			cm.getPlayer().dropMessage(1,"[MapleHD] [DmgSkin] #fEffect/BasicEff.img/NoRed0/0#");//原始伤害皮肤
			cm.setOneTimeLog("出生伤害皮肤");
		} */
		if(cm.getPlayer().getOneTimeLog("出生技能皮肤") <= 0){
			cm.openNpc(1540940);
			cm.safeDispose();
			return;
		}
		
		/* if(cm.getPlayer().getOneTimeLog("定点生怪权限") <= 0){
			cm.setOneTimeLog("定点生怪权限");
		} */
		
		if(cm.getPlayer().getOneTimeLog("限时技能皮肤特效") <= 0){
			if(!cm.haveItem(2614101)){
				cm.gainItemPeriod(2614101, 1, 15);
			}
			cm.setOneTimeLog("限时技能皮肤特效");
			cm.sendOk("技能皮肤特效更换权限限时免费开放体验，多套技能皮肤可随意切换，赠与您皮肤更换道具#i2614101:#");
			cm.dispose();
			return;
		}
		
var selStr = " \t\t\t\t#k" + 闹钟图标 + "北京时间:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k #d#r#n#l\r\n";
	selStr += "  \t\t#k" + 音符 + "亲爱的[#r#e#h ##n#k#r]#d,欢迎来到#r"+ cm.开服名称() +"" + 音符 + "\r\n";
    // selStr += "\t\#d"+ 邪恶小兔 + "当前战力:#r" + cm.获取角色战斗力() + "   " + 邪恶小兔 + "累计赞助:#r" + cm.读取累计赞助() + "#d\r\n"; //"邪恶小兔 + "钻石:#r" + cm.getzb() +"#l\r\n";
	// selStr += "\t\#d" + 邪恶小兔 + "点卷余额:#r" + cm.getPlayer().getCSPoints(1) + " #d" + 邪恶小兔 + "抵用余额:#r" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
	selStr += "\t\t\t  #L1#" + 星星 + "个人中心" + 星星 + "#l\t\r\n\r\n";
  //selStr += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 初 + 一 + 冒 + 险 + 欢 + 迎 + 你 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "";

	//selStr += "疲劳:#B"+(100-进度)+"# ["+(100-进度).toFixed(2)+"%]\r\n\r\n";
	//selStr += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";
		//selStr += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";

		//selStr += "#L9999##r【无限点券/金币】#k#l \r\n\r\n#L1000##rGM地图传送#l #L1001##d新手#n#k#r(初始化角色)#l\r\n";
		//selStr += "#L9991##r#e【#d高级装备#r】#k#l #L9992##r#e【#d皇家坐骑#r】#k#l\r\n";
		//selStr += "#L1010##r#e【指定地图NPC召唤怪物 -#k进去后在点开召唤-#r高级#r#e】#l#n\r\n";
		//selStr += "#L1011##r#e【指定地图NPC召唤怪物 -#k进去后在点开召唤-#b普通#r#e】#l#n\r\n";
	
		if(cm.getPlayer().getJob() == 2110 || cm.getPlayer().getJob() == 2111 || cm.getPlayer().getJob() == 2112){
			selStr += "\t\t\t\t#k#r#L3003#战神键位设置#l\r\n\r\n"
		}
		selStr += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";
		//selStr += "   \t\t\t#r#L1009#内测福利，超级给力#l\r\n"
		//selStr += "   \t\t\t\t#b#L1012#重置每日#l\r\n"
		
		selStr += " #k#L8#快捷商店#l\t\t\t\t\t\t#k#L9##r里程商店#k#l\r\n"
        selStr += " #L2##b快速传送#k#l \t\t\t\t\t\t#L3##b副本装备#k#l \r\n #L6##b每日中心#k#l \t\t\t\t\t\t#L11##b荣誉排行#k#l\r\n #L105##r累计赞助#k#l  \t\t\t\t\t\t#L201##r在线奖励#k#l\r\n #L4455##b师徒中心#l \t\t\t\t\t\t#L9000031##b卷轴回收#k#l\r\n"
		selStr += " #L3001##r爆率查询#l \t\t\t\t\t\t#L3002##rBOSS重返#k#l\r\n"
		// selStr += "\t\t\t\t#L9000031#   卷轴回收#l \r\n\r\n";
		if (cm.getPlayer().isGM()) {
			selStr += "\r\n" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n";
			selStr += " \r\n\t\t#r以下功能，仅管理员可见，普通玩家看不见\r\n"
			selStr += "#L1234#在线玩家"
			if(cm.getPlayer().getGMLevel() == 100){
				selStr += "#l#L9999#刷点卷金币#l#L1000#GM地图#l#L592868#满技能#l#L5#清理背包#l#L553#快捷转职#l";
				selStr += " #L1002##d新手#n#k#r(初始化角色)#l#L1003##d重置当前地图#l\r\n";
				selStr += " #L1008##d测试#l\t#L1013##d活动管理#l\t#L1014##d召唤扎昆#l\t#L1015##d召唤字母#l\r\n";
				selStr += "#L1004##d克隆#k#l\t#L1005##d取消克隆#k#l\t#L1006##d增加角色位#k#l\t#L1007##d自由转职#k#l\r\n#L1020##d删除所有玩家指定道具#k#l  #L1021##d给玩家转职#k#l  #L1022##d备份与恢复玩家背包#k#l\r\n\r\n";
			}
		}
		if (cm.getPlayer().getName() == "甜甜泡芙"){//给指定玩家发功能
			selStr += "#L10000##d快速移动#k#l\r\n\r\n";
		}
        cm.是否说明文字(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1010:
				if(cm.判断地图()>=910000018 && cm.判断地图()<=910000022){
					cm.对话结束();
					cm.打开NPC(9900004, 5000);
				}else{
              cm.warp(910000018, 0);
					cm.说明文字("请在市场18-22洞内使用该召唤怪物功能。");
					cm.对话结束();

				}
			break;
            case 1011:
                if(cm.判断地图()>=910000007 && cm.判断地图()<=910000012){
					cm.对话结束();
					cm.打开NPC(9900004, 6000);
				}else{
              cm.warp(910000007, 0);
					cm.说明文字("请在市场7-12洞内使用该召唤怪物功能。");
					cm.对话结束();

				}
			break;
            case 1:
                cm.对话结束();
                cm.openNpc(9900004, 1);
			break;
			case 9000031:
                cm.对话结束();
                cm.openNpc(9000031, 0);
                break;
			case 109:
                cm.对话结束();
                cm.openNpc(1204033,2022564 );
                break;
			 case 1238:
                cm.对话结束();
                cm.openNpc(2000, 3);
                break;
			 case 1234:
                cm.对话结束();
                cm.openNpc(9900004, 71447500);
                break;
			case 204:
                cm.对话结束();
                cm.openNpc(1102002, 0);
                break;
				case 205:
                cm.对话结束();
                cm.openNpc(9900004, 26);
                break;
       case 9992:
                cm.对话结束();
                cm.openNpc(9900004, 5009);
                break;
            case 9902:
                cm.对话结束();
                cm.openNpc(9900004, 5010);
                break;
            case 9991:
                cm.对话结束();
                cm.openNpc(9900004, 5008);
                break;
            case 990:
                cm.对话结束();
cm.openWeb("https://jq.qq.com/?_wv=1027&k=oz3M16xW");
                break;
            case 999:
                cm.对话结束();
                cm.openNpc(9900004, 9888);
                break;
            case 88:
                cm.对话结束();
                cm.openNpc(9900004, 553);
                break;
            case 998:
                cm.对话结束();
                //cm.打开网页(zm8au.cn);
                cm.给当前频道发点卷(1,2);
                break;
           case 9999:
                cm.对话结束();
                //cm.打开网页(zm8au.cn);
  cm.给金币(1000000000);
  cm.给点券(10000000);
  cm.给抵用券(10000000);
  cm.setzb(15000);
        cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了1千万点卷,\r\n金币10E,\r\n抵用卷1千万!\r\n15000赞助");
                break;
            case 2:
            cm.对话结束();
                cm.打开NPC(9900004, 2);
 //cm.gainItem(5211047, -1000);
             //cm.gainItem(5360014, -1000);
                break;
			//自由银行
			case 100:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 100);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			//金币商行
            case 3:
              cm.对话结束();
                cm.openNpc(9000039);
                break;
            case 111:
              cm.对话结束();
                cm.openNpc(2030013, 100);
                break;
            case 112:
              cm.对话结束();
                cm.openNpc(9900004, 555);
                break;
			case 3001:
			  cm.对话结束();
                cm.openNpc(9900004, 8002);
				break;
			case 3002:
			  cm.对话结束();
                cm.openNpc(9900004, 8003);
				break;
			case 3003:
				cm.对话结束();
				cm.openNpc(9900004, 8004);
				break;
			case 3010:
			  cm.对话结束();
                cm.openNpc(9900004, 3010);
				break;
			case 592868:
			  cm.对话结束();
                cm.openNpc(9900004, 592868);
				break;
			case 7758521:
			  cm.对话结束();
                cm.openNpc(9900004, 7758521);
				break;
			case 4455:
			  cm.对话结束();
                cm.openNpc(9900004, 4455);
				break;
            case 113:
              cm.对话结束();
                cm.openNpc(9900004, 502);
                break;
            case 115:
              cm.对话结束();
                cm.openNpc(9900004, 9892);
                break;
            case 116:
              cm.对话结束();
                cm.openNpc(9900004, 9889);
                break;
            case 117:
              cm.对话结束();
                cm.openNpc(9900004, 505);
                break;
            case 118:
            cm.对话结束();
                cm.openNpc(9900004, 506);

                break;
            case 101:
                cm.对话结束();
                cm.openNpc(9900004, 99);
                break;
            case 102:
                cm.对话结束();
                cm.openNpc(9900004, 9906);
                break;
            case 103:
                cm.对话结束();
                cm.openNpc(9900004, 97);
                break;
            case 104:
                cm.对话结束();
                cm.openNpc(9900004, 9904);
                break;
           case 105:
                 cm.对话结束();
		   cm.openNpc(9900004, 93);
                break;
           case 106:
                 cm.对话结束();
		   cm.openNpc(9000008);
                break;
            case 1000:
              cm.对话结束();
              cm.warp(180000000, 0);
                break;
            case 1001:
              cm.对话结束();
               cm.openNpc(9900004, 3010);
                break;
			case 1002:
              cm.对话结束();
               cm.openNpc(9900004, 3100);
                break;
			case 1003:
				var mapid = cm.getPlayer().getMapId();
				cm.重置目标地图(mapid);
                cm.对话结束();
                break;
			case 1004:
				cm.克隆();
				cm.sendOk("克隆成功");
                cm.对话结束();
                break;
			case 1005:
				cm.取消克隆();
				cm.sendOk("取消克隆成功");
                cm.对话结束();
                break;
			case 1006:
				if(cm.读取角色位() >= 15){
					cm.sendOk("抱歉，你的角色数量已达到可添加的上限值");
					cm.dispose();
					return;
				}else{
					cm.增加角色位(1);
					cm.sendOk("恭喜你增加成功，当前角色位数量为 #b" + cm.读取角色位() + "#k 个，请重新登陆确认。");
					cm.对话结束();
					break;
				}
			case 1007:
				// cm.getPlayer().getMap().startMapEffect("通过这个黑暗中找到自己的方式", 5120021);
				cm.safeDispose();
				cm.openNpc(9900004,2501);
                break;
			case 1008:
				// cm.getPlayer().getMap().startMapEffect("通过这个黑暗中找到自己的方式", 5120021);
				 //cm.getPlayer().setMorph(2210015, 110, 10000, true);
				// cm.getPlayer().sendItemEffect(2022108);
				 //cm.getPlayer().sendSkillEffect(5121004, 1);
				//cm.召唤假人(29);
				
				//cm.getPlayer().giveBuff(2438000, 30000, 10000, 800, 800, 999, 999, 999, 999, 60, 60, 10000, true);
				
				// cm.sendMobSkill(117, 1);1
				// cm.playPortalSE();
				// cm.指定地图召唤怪物(9300344, 910510001, 355, 400);
				// cm.getPlayer().sendCenterMessage("哈哈", 5120021, 5000);
				 // cm.getPlayer().setSkillSkinAll(2);
				 //cm.getPlayer().dropMessage(cm.getItemName(4000000));
				 //cm.getPlayer().cloneLook_extra(cm.getPlayer().getPosition());
				 //cm.getPlayer().setShowChair(false);
				 //cm.增加里程(7999);
				 // cm.showEffect(true, "quest/party/clear");
				 // cm.playSound(true, "Coconut/Failed");
				//cm.startOxQuiz(cm.getChannel());
				//cm.startCoconut(cm.getChannel());
				//cm.startSnowBall(cm.getChannel());
				//cm.startOla(cm.getChannel());
				// var count = 删除所有玩家道具(3018378);
				// cm.sendOk("共删除掉 " + count + " 个玩家的道具");
				/* var point = cm.getPlayer().getPosition();//召唤扎昆
				cm.getPlayer().getMap().spawnZakum(point.x, point.y);//召唤扎昆 */
				
				//给指定玩家BUFF("蜗牛", 2438000, 30000, 30000, 100, 100, 9999, 9999, 9999, 9999, 60, 60, 600 * 1000, true);
				//给当前地图玩家BUFF(2438000, 30000, 30000, 100, 100, 9999, 9999, 30000, 9999, 60, 60, 600 * 1000, true);
				//cm.saveChrSkillMapToDB();
				
				//cm.sendBlueDamageToAllMobs(10086, true);
				//cm.sendBlueDamageToAllMobs(2147483647, cm.getPlayer());
				
				//cm.sendYellowDamageToAllMobs(1000000, true);
				//cm.sendYellowDamageToAllMobs(1000000000, cm.getPlayer());
				
				//Packages.snail.SkillSkin.saveChrSkillMapToDB();
				//cm.getPlayer().setShowEquip(false);
				//cm.teachSkill(1013, 0, 0);
				
				// var mob = Packages.server.life.MapleLifeFactory.getMonster(8850011);
				// mob.setPosition(cm.getPlayer().getPosition());
				// mob.setFake(true);
				// cm.getPlayer().getMap().spawnFakeMonster(mob);
				
				//var mob = cm.getPlayer().getMap().getMonsterById(8850011);
				// mob.sendAttack(cm.getPlayer(), 2, 10086, 0, 1, 0, false, 0, 0, true);
				// mob.sendSkill(cm.getPlayer(), 44, 220201604);
				//mob.sendSkillResPose(cm.getPlayer(), 1000, 132, 2, true, true);
				//cm.getPlayer().setMountId(1932132);
				
				//cm.changeJob("蜗牛", 112);
				cm.dispose();
				return;
                break;
			case 1009:
				if(cm.getBossLoga("内测福利") < 1){
					cm.给金币(1000000000);
					cm.给点券(10000000);
					cm.给抵用券(10000000);
					cm.增加赞助余额(30000);
					cm.setBossLoga("内测福利");
					cm.sendOk("恭喜你领取成功！");
					cm.全服喇叭(9, "恭喜 " + cm.getPlayer().getName() + " 成功领取了内测福利：10E金币、1000W点券、1000W抵用、30000累计赞助！");
				}else{
					cm.sendOk("领取失败，你的账号已经领取过内测福利了！");
				}
				cm.dispose();
				return;
                break;
			case 1012:
				var 角色每日 = cm.重置角色每日();
				var 账号每日 = cm.重置账号每日();
				if(角色每日 && 账号每日){
					cm.sendOk("角色每日记录与账号每日记录均已成功重置！");
				}else{
					if(角色每日 && !账号每日){
						cm.sendOk("角色每日记录重置成功，账号每日记录重置失败！");
					}else if (!角色每日 && 账号每日){
						cm.sendOk("账号每日记录重置成功，角色每日记录重置失败！");
					}else{
						cm.sendOk("每日记录重置失败！");
					}
					
				}
				cm.dispose();
				return;
                break;
			case 1013:
				/* cm.startOxQuiz(cm.getChannel());
				cm.sendOk("开启成功，活动开始！");
				cm.dispose(); */
				cm.safeDispose();
				cm.openNpc(9900000, 2);
				return;
			case 1014:
				var point = cm.getPlayer().getPosition();//召唤扎昆
				cm.getPlayer().getMap().spawnZakum(point.x, point.y);//召唤扎昆
				cm.sendOk("扎昆已召唤！");
				cm.dispose();
				return;
			case 1015:
				cm.safeDispose();
				cm.openNpc(9900000, 3);
				return;
			case 1020:
				cm.safeDispose();
				cm.openNpc(9900000, 1);
				return;
			case 1021:
				cm.safeDispose();
				cm.openNpc(9900000, 4);
				return;
			case 1022:
				cm.safeDispose();
				cm.openNpc(9900000, 5);
				return;
            case 4:
                cm.对话结束();
                cm.openNpc(9900004, 4);
                break;
            case 5:
                cm.对话结束();
                cm.openNpc(9062509);
                break;
			case 99:
			//	cm.getPlayer().懒人捡物=0;
				cm.说明文字("\t\t聊天窗口输入  #r*指令大全#k   即可查看所有指令！\r\n\r\n#d\t\t玩家指令: @帮助");
                cm.对话结束();
			    //cm.打开NPC(9900004, 99999);
                break;
            case 6:
     			cm.对话结束();
                //cm.打开NPC(9900004, 22);
				cm.打开NPC(9330042, 0);
                break;
            case 7:
                cm.对话结束();
                cm.openNpc(9900004, 7);
                break;
            case 8:
                cm.对话结束();
            cm.打开商店(94);
                break;
			case 9:
                cm.对话结束();
                cm.openNpc(9900004, 9);
                break;
			case 10:
                cm.对话结束();
                cm.openNpc(9900007, 0);
                break;
			case 11:
                cm.对话结束();
           cm.openNpc(9900004, 11);
          
                break;
			case 26:
                cm.对话结束();
           cm.openNpc(9900004, 94);
          
                break;
			case 53:
                cm.对话结束();
			    cm.打开NPC(2000, 1);
                break;
			case 553:
                cm.对话结束();
			    cm.打开NPC(9900004, 553);
                break;
			case 12:
                cm.对话结束();
                cm.openNpc(9900004, 12);
                break;
			case 13:
                cm.对话结束();
                cm.openNpc(2007, 11);
                break;
			case 14:
                cm.对话结束();
                cm.openNpc(9900004, 14);
                break;
			case 15:
                cm.对话结束();
                cm.openNpc(9900004, 9905);
                break;
			case 54:
                cm.对话结束();
			    cm.openNpc(9900004, 21);
                break;
			case 25:
                cm.对话结束();
                cm.打开NPC(9900004, 25);
                break;
            case 30:
                cm.对话结束();
                cm.打开NPC(1204033, 2022564);
                break;
			case 31:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 30);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
			case 100:
				if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
					cm.对话结束();
					cm.打开NPC(9900004, 100);
				}else{
					cm.说明文字("请在市场内使用该功能。");
					cm.对话结束();
				}
                break;
				case 1235:
                cm.对话结束();
                cm.openNpc(9900004, 71447501);
                break;
			case 1236:
                cm.对话结束();
                cm.openNpc(1204033, 2022564);
                break;
			case 1237:
                cm.对话结束();
                cm.openNpc(9900004, 1237);
                break;
			case 16:
                cm.对话结束();
                cm.openNpc(9900004, 5002);
                break;
			case 200:
                cm.对话结束();
                cm.openNpc(9900004, 9908);
                break;
			case 201:
                cm.对话结束();
                cm.openNpc(9900004, 9911);
				break;
			case 202:
                cm.对话结束();
                cm.openNpc(9900004, 9916);
				break;
			case 203:
                cm.对话结束();
                cm.openNpc(9900004, 9918);
				break;
			case 10000:
                cm.teachSkill(2301001, 20, 20);
				cm.sendOk("你已学习快速移动！");
				cm.dispose();
				break;
			default:
                cm.对话结束();
                break;
        }
    }
}

function 金币商行() {
	var 文本 = "金币商行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 点券商行() {
	var 文本 = "点券商行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 自由银行() {
	var 文本 = "自由银行";
	if(cm.判断地图()>=910000000 && cm.判断地图()<=910000024){
		var result = "#b"+文本+"#k";
	}else{
		var result = "#d"+文本+"#k";
	}
	return result;
}

function 删除所有玩家道具(itemId){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	var i = 0;
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			chrIt.next().removeAll(itemId);
			i++;
		}
	}
	return i;
	
}

function 给当前地图玩家BUFF(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel){
	var chrList = cm.getPlayer().getMap().getAllPlayersThreadsafe();
	var chrIt = chrList.iterator();
	var i = 0;
	while (chrIt.hasNext()){
		var chr = chrIt.next();
		chr.giveBuff(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel);
		i++;
	}
	return i;
	
}

function 给指定玩家BUFF(name, itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			var chr = chrIt.next();
			if(chr.getName().equals(name)){
				chr.giveBuff(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel);
				return;
			}
		}
	}
	
}