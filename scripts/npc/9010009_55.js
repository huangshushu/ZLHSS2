var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "            "+爱心+" #e主线任务列表#n "+爱心+"\r\n"
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 0){
					text += "      #L1#"+音符+"#e主线任务1(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 0){
					text += "              "+爱心+"#r#e主线任务1#n"+爱心+"#l"+完成+"#k\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 1 && cm.getLevel() > 14){
					text += "      #L2#"+音符+"#e主线任务2(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 1 && cm.getLevel() > 14){
					text += "              "+爱心+"#r#e主线任务2#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 2 && cm.getLevel() > 20){
					text += "      #L3#"+音符+"#e主线任务3(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 2 && cm.getLevel() > 20){
					text += "              "+爱心+"#r#e主线任务3#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.21#k)主线任务3   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 3 && cm.getLevel() > 29){
					text += "      #L4#"+音符+"#e主线任务4(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 3 && cm.getLevel() > 29){
					text += "              "+爱心+"#r#e主线任务4#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.30#k)主线任务4   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 4 && cm.getLevel() > 34){
					text += "      #L5#"+音符+"#e主线任务5(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 4 && cm.getLevel() > 34){
					text += "              "+爱心+"#r#e主线任务5#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.35#k)主线任务5   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 5 && cm.getLevel() > 39){
					text += "      #L6#"+音符+"#e主线任务6(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 5 && cm.getLevel() > 39){
					text += "              "+爱心+"#r#e主线任务6#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.40#k)主线任务6   "+琴符+"#l\r\n"//3
			}
			
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 6 && cm.getLevel() > 44){
					text += "      #L7#"+音符+"#e主线任务7(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 6 && cm.getLevel() > 44){
					text += "              "+爱心+"#r#e主线任务7#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.45#k)主线任务7   "+琴符+"#l\r\n"//3
			}
			if(cm.getPlayer().getOneTimeLog("主线任务") == 7 && cm.getLevel() > 49){
					text += "      #L8#"+音符+"#e主线任务8(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 7 && cm.getLevel() > 49){
					text += "              "+爱心+"#r#e主线任务8#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.50#k)主线任务8   "+琴符+"#l\r\n"//3
			}
			
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 8 && cm.getLevel() > 59){
					text += "      #L9#"+音符+"#e主线任务9(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 8 && cm.getLevel() > 59){
					text += "              "+爱心+"#r#e主线任务9#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.60#k)主线任务9   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 9 && cm.getLevel() > 64){
					text += "      #L10#"+音符+"#e主线任务10(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 9 && cm.getLevel() > 64){
					text += "              "+爱心+"#r#e主线任务10#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.65#k)主线任务10   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 10 && cm.getLevel() > 69){
					text += "      #L11#"+音符+"#e主线任务11(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 10 && cm.getLevel() > 69){
					text += "              "+爱心+"#r#e主线任务11#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.70#k)主线任务11   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 11 && cm.getLevel() > 74){
					text += "      #L12#"+音符+"#e主线任务12(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 11 && cm.getLevel() > 74){
					text += "              "+爱心+"#r#e主线任务12#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.75#k)主线任务12   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 12 && cm.getLevel() > 79){
					text += "      #L13#"+音符+"#e主线任务13(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 12 && cm.getLevel() > 79){
					text += "              "+爱心+"#r#e主线任务13#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.80#k)主线任务13   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 13 && cm.getLevel() > 89){
					text += "      #L14#"+音符+"#e主线任务14(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 13 && cm.getLevel() > 89){
					text += "              "+爱心+"#r#e主线任务14#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.90#k)主线任务14   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 14 && cm.getLevel() > 99){
					text += "      #L15#"+音符+"#e主线任务15(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 14 && cm.getLevel() > 99){
					text += "              "+爱心+"#r#e主线任务15#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.100#k)主线任务15   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 15 && cm.getLevel() > 109){
					text += "      #L16#"+音符+"#e主线任务16(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 15 && cm.getLevel() > 109){
					text += "              "+爱心+"#r#e主线任务16#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.110#k)主线任务16   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 16 && cm.getLevel() > 119){
					text += "      #L17#"+音符+"#e主线任务17(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 16 && cm.getLevel() > 119){
					text += "              "+爱心+"#r#e主线任务17#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.120#k)主线任务17   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 17 && cm.getLevel() > 129){
					text += "      #L18#"+音符+"#e主线任务18(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 17 && cm.getLevel() > 129){
					text += "              "+爱心+"#r#e主线任务18#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.130#k)主线任务18   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 18 && cm.getLevel() > 139){
					text += "      #L19#"+音符+"#e主线任务19(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 18 && cm.getLevel() > 139){
					text += "              "+爱心+"#r#e主线任务19#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.140#k)主线任务19   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLog("主线任务") == 19 && cm.getLevel() > 149){
					text += "      #L20#"+音符+"#e主线任务20(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLog("主线任务") > 19 && cm.getLevel() > 149){
					text += "              "+爱心+"#r#e主线任务20#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.150#k)主线任务20   "+琴符+"#l\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.haveItem(4000002,50) && cm.haveItem(4000017,10)){
				cm.gainItem(4000002, -50);//获得物品
				cm.gainItem(4000017, -10);//获得物品
				cm.gainExp(10000);//个人给经验
				cm.gainItem(1442012,20,20,20,20,20,20,20,20,0,0,0,0,0,0);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务1，获得经验值奖励全属性40天空雪板！");
				cm.getPlayer().setOneTimeLog("主线任务");
				cm.sendOk("完成了主线任务，获得全属性40天空雪板！");
				cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入主线剧情1。#k\r\n还记得初次来到冒险岛的时候吗？我们从七七岛一点一滴的故事。\r\n来到明珠港以后，我们不断前行，掉落在一个叫#r（猪的海岸）#k的地方。\r\n请你到那里寻找回忆，并且收集50个#v4000002#10个#v4000017#。\r\n奖励：#v1442012# 全属性40。");
			cm.dispose();
	    }
        } else if (selection == 2) {
		if (cm.haveItem(4000015,50) && cm.haveItem(4000008,50)){
			cm.gainItem(4000015, -50);//获得物品
			cm.gainItem(4000008, -50);//获得物品
			cm.gainMeso(+200000); //加减金币
			 cm.gainExp(50000);//个人给经验
				cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务2，获得经验值奖励20W金币！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入主线剧情2。#k\r\n是在某个深处，让我们停留了无数次，无脑的敲打着键盘。\r\n请到一个叫#r（蚂蚁洞Ⅰ）#k的地方。\r\n收集50个#v4000015#50个#v4000008#。\r\n奖励：#v4031138# 20W。");
			cm.dispose();
	    }
        } else if (selection == 3) {
		if (cm.haveItem(4250602,5)){
			cm.gainItem(4250602,-5);
			cm.gainItem(1142107,5,5,5,5,5,5,5,5,0,0,0,0,0,0);
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务3，获得经验值奖励:新手勋章各属性5 攻/魔5！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();	
		}else{

		 cm.sendOk(感叹号+"#r欢迎进入主线剧情3。#k\r\n请到#r（废弃都市组队任务）#k，收集5个#v4250602#给我。\r\n奖励：#v1142107# 各属性5 攻/魔5！");
		 cm.dispose();
		
	    }
        } else if (selection == 4) {
			
		if (cm.haveItem(4000106,50) && cm.haveItem(4000107,20)){
			cm.gainItem(4000106, -50);//获得物品
			cm.gainItem(4000107, -20);//获得物品
			cm.gainItem(1032243,5,5,5,5,0,0,5,5,10,10,5,5,0,0);
			cm.gainItem(2000006, 200);//获得物品
			cm.gainExp(92000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务4，获得经验值进阶眼镜！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情4。#k\r\n请到#r（露台大厅）#k收集50个#v4000106#20个#v4000107#给我。\r\n奖励：#v2022003#×200#v2000006#×200。");
			cm.dispose();
	    }
        } else if (selection == 5) {
			
		if (cm.haveItem(4000170,50) && cm.haveItem(4000169,50)){
			cm.gainItem(1113165,5,5,5,5,0,0,2,2,0,0,0,0,0,0);
			cm.gainExp(122000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务5，获得经验值奖励进阶戒指属性5 攻/魔2！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情5。#k\r\n请到童话村-乌山入口收集#v4000170##v4000169#各50个交给我。\r\n奖励：#v1082245#各属性5 攻/魔2");
			cm.dispose();
	    }
        } else if (selection == 6) {
			if (cm.haveItem(4000276 ,100) && cm.haveItem(4000277 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000276, -100);//获得物品
			cm.gainItem(4000277, -50);//获得物品
			cm.gainItem(1012101,5,5,5,5,0,0,2,2,0,0,0,0,0,0);
			cm.gainExp(252000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务6，获得经验值奖励脸饰各属性2 攻/魔1！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情6。#k\r\n请到#r（通天林入口）#k收集100个#v4000276#50个#v4000277#交给我。\r\n奖励：#v1012101#各属性5 攻/魔2");
			cm.dispose();
	    }
        } else if (selection == 7) {
			if (cm.haveItem(4000115 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000115, -50);//获得物品
			cm.gainItem(1032243,5,5,5,5,0,0,5,5,10,10,5,5,0,0);
			cm.gainExp(30000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务7，获得经验值奖励进阶耳环各属性5 攻/魔5！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情7。#k\r\n请到#r（时间之路4）#k收集50个#v4000115#交给我。\r\n奖励：#v1032098#各属性2 攻/魔2");
			cm.dispose();
	    }
        } else if (selection == 8) {
			if (cm.haveItem(4000088 ,50) && cm.haveItem(4000086 ,50)){
			cm.gainDY(+10000);
			cm.gainItem(4000086, -50);//获得物品
			cm.gainItem(4000088, -1);//获得物品
			
			cm.gainExp(400000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务8，获得经验值奖励10000抵用券");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情8。#k\r\n请到#r（雪域附近）#k收集50个#v4000088#和#v4000086#交给我。\r\n奖励：10000抵用券");
			cm.dispose();
	    }
		} else if (selection == 9) {
			if (cm.haveItem(4000177 ,50) && cm.haveItem(4000025 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000177, -50);//获得物品
			cm.gainItem(4000025, -50);//获得物品
			cm.gainItem(1102082,5,5,5,5,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(812000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务9，获得经验值奖励披风各属性5 攻/魔2！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情9。#k\r\n请到#r（巨人之林）#k收集50个#v4000177#50个#v4000025#交给我。\r\n奖励：#v1102082#各属性5 攻/魔2");
			cm.dispose();
	    }
		} else if (selection == 10) {
			if (cm.haveItem(4000289 ,100)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000289, -100);//获得物品
			cm.gainItem(1113164,2,2,2,2,0,0,5,5,10,10,5,5,0,0);
			cm.gainExp(1000000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务10，获得经验值奖励戒指各属性2 攻/魔5！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情10。#k\r\n请到#r（妖怪森林）#k收集100个#v4000289#交给我。\r\n奖励：#v1113165#各属性2 攻/魔5");
			cm.dispose();
	    }	
		} else if (selection == 11) {
			if (cm.haveItem(4170005 ,5)){
			cm.gainItem(4170005, -5);//获得物品
			cm.gainItem(1132088,5,5,5,5,0,0,3,3,10,10,5,5,0,0);
			cm.gainExp(1200000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务11，获得经验值奖励腰带各属性5 攻/魔3！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情11。#k\r\n请完成#r（玩具组队副本）#k把5个#v4170005#交给我。\r\n奖励：#v1132088#各属性5 攻/魔3");
			cm.dispose();
	    }
		} else if (selection == 12) {
			if (cm.haveItem(4000226 ,60) && cm.haveItem(4000229 ,60)){
			//cm.gainItem(1142107,15,15,15,15,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000226, -60);//获得物品
			cm.gainItem(4000229, -60);//获得物品
			cm.gainItem(1072718,15,15,15,15,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(1200000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务12，获得经验值奖励鞋子各属性15 攻/魔1！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情12。#k\r\n请到#r（神木村西边森林）#k收集60个#v4000226#60个#v4000229#交给我。\r\n奖励：#v1072718#各属性15 攻/魔1");
			cm.dispose();
	    }
		} else if (selection == 13) {
			if (cm.haveItem(4000238 ,150)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000238, -150);//获得物品
			//cm.gainItem(4000229, -100);//获得物品
			//cm.gainItem(1072718,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(1500000);//个人给经验
			cm.gainMeso(+10000000); //加减金币
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务13，获得经验值奖励金币1000W！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情13。#k\r\n请到#r（天空之巢路口）#k收集150个#v4000238#交给我。\r\n奖励#v4031138#：1000W");
			cm.dispose();
	    }
		} else if (selection == 14) {
			if (cm.haveItem(4000182 ,100)){
			cm.gainItem(4000182, -100);//获得物品
			cm.gainItem(1022129,5,5,5,5,0,0,3,3,10,10,5,5,0,0);
			cm.gainExp(2000000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务14，获得经验值奖励眼镜各属性5 攻/魔3！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情14。#k\r\n请到#r（深海峡谷1）#k收集100个#v4000182#交给我。\r\n奖励：#v1022129#各属性5 攻/魔3");
			cm.dispose();
	    }	
		} else if (selection == 15) {
			if (cm.haveItem(4250602 ,10) && cm.haveItem(4170005 ,5)){
			cm.gainItem(4250602, -10);//获得物品
			cm.gainItem(4170005, -5);//获得物品
		cm.gainNX(+5000);//获得物品
			cm.gainExp(2212000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务15，获得经验值奖励5000点券！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情15。#k\r\n请完成废弃和玩具副本把#v4250602#10个和5个#v4170005#交给我。\r\n奖励：5000点券");
			cm.dispose();
	    }
		} else if (selection == 16) {
			if (cm.haveItem(4000180 ,100) && cm.haveItem(4000181 ,100)){
			cm.gainItem(4000180, -100);//获得物品
			cm.gainItem(4000181, -100);//获得物品
			cm.gainItem(1112676,20,20,20,20,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(4012000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务16，获得经验值奖励戒指属性20 攻/魔2！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情16。#k\r\n请到#r（受难船的墓地）#k收集100个#v4000180#100个#v4000181#交给我。\r\n奖励：#v1112676#各属性20 攻/魔2");
			cm.dispose();
	    }	
		} else if (selection == 17) {
			if (cm.haveItem(4001266 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			cm.gainItem(4001266, -1);//获得物品
			if (cm.getJob()==2112){
                cm.teachSkill(20001003 ,1,1); //Magic Armor战神
                cm.teachSkill(20001004 ,1,1); //Magic Armor战神
				cm.gainItem(1912011, 1);//获得物品
				cm.gainItem(1902015, 1);//获得物品
				cm.gainItem(1902016, 1);//获得物品
				cm.gainItem(1902017, 1);//获得物品
				cm.gainItem(1902018, 1);//获得物品
				cm.gainExp(17212000);//个人给经验
				cm.getPlayer().setOneTimeLog("主线任务");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务17，获得经验值奖励坐骑技能与坐骑一只！");
				cm.sendOk("完成了主线任务，获得奖励！");
				cm.safeDispose(); //结束脚本
				return;
			}
			cm.gainItem(1912000, 1);//获得物品
			cm.gainItem(1902001, 1);//获得物品
            cm.teachSkill(1003,1,1); //Magic Armor
            cm.teachSkill(1004,1,1); //Magic Armor
			//cm.gainItem(1112676,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(17212000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务17，获得经验值奖励坐骑技能与坐骑一只！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
				if (!cm.canHold(4001266,1)) {
				cm.sendOk("请检查你的背包是否已满。");
				cm.dispose();
				return;
				}
			cm.gainItem(4001266, 1);//获得物品
			cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.dispose();
	    }
		} else if (selection == 18) {
			if (cm.haveItem(4000235 ,1) && cm.haveItem(4000243 ,1) && cm.haveItem(4000460 ,1) && cm.haveItem(4000461 ,1) && cm.haveItem(4000462 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4000235, -1);//获得物品
			cm.gainItem(4000243, -1);//获得物品
			cm.gainItem(4000460, -1);//获得物品
			cm.gainItem(4000461, -1);//获得物品
			cm.gainItem(4000462, -1);//获得物品
			cm.gainItem(1052457  ,20,20,20,20,0,0,2,2,100,100,50,50,0,0);
			cm.gainExp(37212000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务18，获得经验值奖励套服各属性20 攻/魔2！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情18。#k\r\n请打败#r（喷火龙，天鹰，多多，玄冰独角兽，雷卡）#k\r\n收集#v4000235##v4000243##v4000460##v4000461##v4000462#各1个交给我。\r\n奖励：#v1052457#各属性10 攻/魔2");
			cm.dispose();
	    }	
		} else if (selection == 19) {
			if (cm.haveItem(4001083 ,1) && cm.haveItem(4001085 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4001083, -1);//获得物品
			cm.gainItem(4001085, -1);//获得物品
			cm.gainItem(1112661  ,15,15,15,15,0,0,5,5,0,0,30,30,0,0);
			cm.gainExp(57212000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务19，获得经验值奖励戒指各属性15 攻/魔5！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情19。#k\r\n请打败#r（扎昆，鱼王）#k收集#v4001083##v4001085#各1个证明你的实力。\r\n奖励：#v1112661#各属性5 攻/魔5");
			cm.dispose();
	    }	
		} else if (selection == 20) {
		if (cm.haveItem(4020009 ,20) && cm.haveItem(4000245 ,20)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4020009, -10);//获得物品
			cm.gainItem(4000245, -10);//获得物品
			cm.gainItem(1702224  ,18,18,18,18,200,200,20,20,50,50,30,30,10,10);
			cm.gainNX(+30000);//获得物品
			cm.gainExp(47212000);//个人给经验
			cm.getPlayer().setOneTimeLog("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务20，获得经验值奖励;点券3万以及透明武器各属性18 攻/魔20！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情20。#k\r\n请到#r（死龙巢穴和时间神殿）#k收集#v4020009##v4000245#各20个交给我。\r\n奖励：#v1702224#各属性18 攻/魔20以及点券3万");
			cm.dispose();
	    }20
		}
    }
}
