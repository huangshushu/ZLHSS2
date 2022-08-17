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
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 0){
					text += "      #L1#"+音符+"#e主线任务1(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 0){
					text += "              "+爱心+"#r#e主线任务1#n"+爱心+"#l"+完成+"#k\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 1 && cm.getLevel() > 14){
					text += "      #L2#"+音符+"#e主线任务2(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 1 && cm.getLevel() > 14){
					text += "              "+爱心+"#r#e主线任务2#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "		  "+琴符+"#e   (#rlv.15#k)主线任务2   "+琴符+"#l\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 2 && cm.getLevel() > 20){
					text += "      #L3#"+音符+"#e主线任务3(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 2 && cm.getLevel() > 20){
					text += "              "+爱心+"#r#e主线任务3#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.21#k)主线任务3   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 3 && cm.getLevel() > 29){
					text += "      #L4#"+音符+"#e主线任务4(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 3 && cm.getLevel() > 29){
					text += "              "+爱心+"#r#e主线任务4#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.30#k)主线任务4   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 4 && cm.getLevel() > 34){
					text += "      #L5#"+音符+"#e主线任务5(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 4 && cm.getLevel() > 34){
					text += "              "+爱心+"#r#e主线任务5#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.35#k)主线任务5   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 5 && cm.getLevel() > 39){
					text += "      #L6#"+音符+"#e主线任务6(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 5 && cm.getLevel() > 39){
					text += "              "+爱心+"#r#e主线任务6#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.40#k)主线任务6   "+琴符+"#l\r\n"//3
			}
			
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 6 && cm.getLevel() > 44){
					text += "      #L7#"+音符+"#e主线任务7(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 6 && cm.getLevel() > 44){
					text += "              "+爱心+"#r#e主线任务7#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.45#k)主线任务7   "+琴符+"#l\r\n"//3
			}
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 7 && cm.getLevel() > 49){
					text += "      #L8#"+音符+"#e主线任务8(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 7 && cm.getLevel() > 49){
					text += "              "+爱心+"#r#e主线任务8#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.50#k)主线任务8   "+琴符+"#l\r\n"//3
			}
			
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 8 && cm.getLevel() > 59){
					text += "      #L9#"+音符+"#e主线任务9(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 8 && cm.getLevel() > 59){
					text += "              "+爱心+"#r#e主线任务9#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.60#k)主线任务9   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 9 && cm.getLevel() > 64){
					text += "      #L10#"+音符+"#e主线任务10(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 9 && cm.getLevel() > 64){
					text += "              "+爱心+"#r#e主线任务10#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.65#k)主线任务10   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 10 && cm.getLevel() > 69){
					text += "      #L11#"+音符+"#e主线任务11(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 10 && cm.getLevel() > 69){
					text += "              "+爱心+"#r#e主线任务11#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.70#k)主线任务11   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 11 && cm.getLevel() > 74){
					text += "      #L12#"+音符+"#e主线任务12(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 11 && cm.getLevel() > 74){
					text += "              "+爱心+"#r#e主线任务12#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.75#k)主线任务12   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 12 && cm.getLevel() > 79){
					text += "      #L13#"+音符+"#e主线任务13(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 12 && cm.getLevel() > 79){
					text += "              "+爱心+"#r#e主线任务13#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.80#k)主线任务13   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 13 && cm.getLevel() > 89){
					text += "      #L14#"+音符+"#e主线任务14(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 13 && cm.getLevel() > 89){
					text += "              "+爱心+"#r#e主线任务14#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.90#k)主线任务14   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 14 && cm.getLevel() > 99){
					text += "      #L15#"+音符+"#e主线任务15(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 14 && cm.getLevel() > 99){
					text += "              "+爱心+"#r#e主线任务15#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.100#k)主线任务15   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 15 && cm.getLevel() > 109){
					text += "      #L16#"+音符+"#e主线任务16(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 15 && cm.getLevel() > 109){
					text += "              "+爱心+"#r#e主线任务16#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.110#k)主线任务16   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 16 && cm.getLevel() > 119){
					text += "      #L17#"+音符+"#e主线任务17(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 16 && cm.getLevel() > 119){
					text += "              "+爱心+"#r#e主线任务17#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.120#k)主线任务17   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 17 && cm.getLevel() > 129){
					text += "      #L18#"+音符+"#e主线任务18(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 17 && cm.getLevel() > 129){
					text += "              "+爱心+"#r#e主线任务18#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.130#k)主线任务18   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 18 && cm.getLevel() > 139){
					text += "      #L19#"+音符+"#e主线任务19(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 18 && cm.getLevel() > 139){
					text += "              "+爱心+"#r#e主线任务19#n"+爱心+"#l"+完成+"#k\r\n"//3
				} else {
					text += "         "+琴符+"#e   (#rlv.140#k)主线任务19   "+琴符+"#l\r\n"//3
			}
			
			if(cm.getPlayer().getOneTimeLoga("主线任务") == 19 && cm.getLevel() > 149){
					text += "      #L20#"+音符+"#e主线任务20(#r可开始#k)#n"+音符+"#l\r\n\r\n"//3
				} else if(cm.getPlayer().getOneTimeLoga("主线任务") > 19 && cm.getLevel() > 149){
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
				//cm.gainItem(1112540,8,8,8,8,0,0,5,5,0,0,0,0,0,0);
				cm.给属性装备(1112540, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0);
				cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务1，获得经验值奖励 专属戒指");
				cm.getPlayer().setOneTimeLoga("主线任务");
				cm.sendOk("完成了主线任务，小青蛇专属戒指！");
				cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入主线剧情1。#k\r\n还记得初次来到冒险岛的时候吗？我们从彩虹岛一点一滴的故事。\r\n来到明珠港以后，我们不断前行，掉落在一个叫#r（猪的海岸）#k的地方。\r\n请你到那里寻找回忆，并且收集50个#v4000002#10个#v4000017#。\r\n奖励：#v1112540# 专属戒指。");
			cm.dispose();
	    }
        } else if (selection == 2) {
		if (cm.haveItem(4000015,50) && cm.haveItem(4000008,50)){
			cm.gainItem(4000015, -50);//获得物品
			cm.gainItem(4000008, -50);//获得物品
			//cm.gainItem(5211047, 1);//获得物品
			cm.gainMeso(+1000000); //加减金币
			 cm.gainExp(50000);//个人给经验
				cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务2，获得100W金币！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{

			cm.sendOk(感叹号+"#r欢迎进入主线剧情2。#k\r\n是在某个深处，让我们停留了无数次，无脑的敲打着键盘。\r\n请到一个叫#r（蚂蚁洞Ⅰ）#k的地方。\r\n收集50个#v4000015#50个#v4000008#。\r\n奖励：100W金币。");
			cm.dispose();
	    }
        } else if (selection == 3) {
		if (cm.haveItem(4000006,200)){
			cm.gainItem(4000006,-200);
			cm.gainItem(2450000,1);
//cm.给属性装备(1142107, 1, 0, 15, 15, 15, 15, 0, 0, 5, 5,0, 0, 0, 0, 0, 0, 0);
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务3，双倍经验药x1！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();	
		}else{

		 cm.sendOk(感叹号+"#r欢迎进入主线剧情3。#k\r\n请到#r（废都南方工地）#k，收集200个#v4000006#给我。\r\n奖励：#v2450000# x1！");
		 cm.dispose();
		
	    }
        } else if (selection == 4) {
			
		if (cm.haveItem(4000106,50) && cm.haveItem(4000107,20)){
			cm.gainItem(4000106, -50);//获得物品
			cm.gainItem(4000107, -20);//获得物品
			cm.给属性装备(1102510, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(92000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务4，获得全属性+3的点装！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情4。#k\r\n请到#r（露台大厅）#k收集50个#v4000106#20个#v4000107#给我。\r\n奖励：#v1102510#全属性+3。");
			cm.dispose();
	    }
        } else if (selection == 5) {
			
		if (cm.haveItem(4000170,50) && cm.haveItem(4000169,50)){
		        cm.gainItem(4000170, -50);//获得物品
			cm.gainItem(4000169, -50);//获得物品
			cm.gainItem(5510000, 10);//获得物品
			//cm.gainItem(1082245,6,6,6,6,0,0,5,5,0,0,0,0,0,0);
//cm.给属性装备(1082245, 1, 0, 6, 6, 6, 6, 0, 0, 5, 5,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(122000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务5，获得10个复活女神！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情5。#k\r\n请到童话村-乌山入口收集#v4000170##v4000169#各50个交给我。\r\n奖励：#v5510000#x10");
			cm.dispose();
	    }
        } else if (selection == 6) {
			if (cm.haveItem(4000276 ,100) && cm.haveItem(4000277 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000276, -100);//获得物品
			cm.gainItem(4000277, -50);//获得物品
			cm.gainItem(2450000, 1);//获得物品
			//cm.gainItem(1012101,2,2,2,2,0,0,1,1,0,0,0,0,0,0);
cm.给属性装备(1012512, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(252000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务6，获得全属+3脸饰！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情6。#k\r\n请到#r（通天林入口）#k收集100个#v4000276#50个#v4000277#交给我。\r\n奖励：#v2450000#x1 + 全属+3脸饰");
			cm.dispose();
	    }
        } else if (selection == 7) {
			if (cm.haveItem(4000115 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000115, -50);//获得物品
			cm.gainItem(4001126, 300);//获得物品
			//cm.gainItem(1032098,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
//cm.给属性装备(1032098, 1, 0, 2, 2, 2, 2, 0, 0, 2, 2,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(30000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务7，获得枫叶x300");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情7。#k\r\n请到#r（时间之路4）#k收集50个#v4000115#交给我。\r\n奖励：#v4001126#x300");
			cm.dispose();
	    }
        } else if (selection == 8) {
			if (cm.haveItem(4000088 ,50) && cm.haveItem(4000086 ,50)){
			
			cm.gainItem(4000086, -50);//获得物品
			cm.gainItem(4000088, -50);//获得物品
			cm.gainItem(4000463, 3);//获得物品
			cm.gainExp(300000);//个人给经验
			cm.gainNX(1000);
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务8，获得1000点卷");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情8。#k\r\n请到#r（雪域附近）#k收集50个#v4000088#和#v4000086#交给我。\r\n奖励：1000点卷");
			cm.dispose();
	    }
		} else if (selection == 9) {
			if (cm.haveItem(4000177 ,50) && cm.haveItem(4000025 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000177, -50);//获得物品
			cm.gainItem(4000025, -50);//获得物品
			cm.gainItem(2022678, 5);//获得物品
			//cm.gainItem(1102082,5,5,5,5,0,0,2,2,10,10,5,5,0,0);
//cm.给属性装备(1102082, 1, 0, 5, 5, 5, 5, 0, 0, 2, 2,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(512000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务9，获得随机骑宠x5！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情9。#k\r\n请到#r（巨人之林）#k收集50个#v4000177#50个#v4000025#交给我。\r\n奖励：#v2022678#随机骑宠x5");
			cm.dispose();
	    }
		} else if (selection == 10) {
			if (cm.haveItem(4000289 ,100)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000289, -100);//获得物品
			cm.gainItem(2022154, 10);//获得物品
			//cm.gainItem(1113164,2,2,2,2,0,0,5,5,10,10,5,5,0,0);
//cm.给属性装备(1113164, 1, 0, 2, 2, 2, 2, 0, 0, 5, 5,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(600000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务10，获得火红玫瑰x10！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情10。#k\r\n请到#r（妖怪森林）#k收集100个#v4000289#交给我。\r\n奖励：#v2022154#x10");
			cm.dispose();
	    }	
		} else if (selection == 11) {
			if (cm.haveItem(4170007 ,5)){
			cm.gainItem(4170007,-5);//获得物品
			cm.gainItem(2000019,50);//获得物品
			//cm.gainItem(1132088,5,5,5,5,0,0,3,3,10,10,5,5,0,0);
//cm.给属性装备(1132088, 1, 0, 5, 5, 5, 5, 0, 0, 3, 3,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(750000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务11");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情11。#k\r\n请完成#r（玩具组队副本）#k把5个#v4170007#交给我。\r\n奖励：#v2000019#*50");
			cm.dispose();
	    }
		} else if (selection == 12) {
			if (cm.haveItem(4000226 ,60) && cm.haveItem(4000229 ,60)){
			//cm.gainItem(1142107,15,15,15,15,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000226, -60);//获得物品
			cm.gainItem(4000229, -60);//获得物品
			cm.gainItem(4031196, 30);//获得物品
			//cm.gainItem(1072718,15,15,15,15,0,0,1,1,10,10,5,5,0,0);
//cm.给属性装备(1072718, 1, 0, 15, 15, 15, 15, 0, 0, 1, 1,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(900000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务12，获得黑泰克因x30");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情12。#k\r\n请到#r（神木村西边森林）#k收集60个#v4000226#60个#v4000229#交给我。\r\n奖励：#v4031196#x30");
			cm.dispose();
	    }
		} else if (selection == 13) {
			if (cm.haveItem(4000238 ,150)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000238, -150);//获得物品
			//cm.gainItem(4000229, -100);//获得物品
			//cm.gainItem(1072718,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainItem(4000463, 6);//获得物品
			cm.gainExp(1100000);//个人给经验
			cm.gainMeso(+1500000); //加减金币
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务13，获得国庆纪念币x6！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情13。#k\r\n请到#r（天空之巢路口）#k收集150个#v4000238#交给我。\r\n奖励#v4310098#x6");
			cm.dispose();
	    }
		} else if (selection == 14) {
			if (cm.haveItem(4000182 ,100)){
			cm.gainItem(4000182, -100);//获得物品
			//cm.gainItem(1022129,5,5,5,5,0,0,3,3,10,10,5,5,0,0);
cm.给属性装备(1112675, 0, 0, 8, 8, 8, 8, 0, 0, 8, 8,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(1800000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务14，获得全属性8装备！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情14。#k\r\n请到#r（深海峡谷1）#k收集100个#v4000182#交给我。\r\n奖励：#v1112675#全属性8");
			cm.dispose();
	    }	
		} else if (selection == 15) {
			if (cm.haveItem(4001084 ,1)){
			cm.gainItem(4001084, -1);//获得物品
			//cm.gainItem(4170006, -10);//获得物品
	   cm.gainNX(5000);
		cm.gainItem(4001126, 500);//获得物品
			cm.gainExp(2000000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务15，获得5000点券！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情15。#k\r\n请击杀帕普拉图斯把帕普拉图斯象征交给我。\r\n奖励：5000点券，");
			cm.dispose();
	    }
		} else if (selection == 16) {
			if (cm.haveItem(4000180 ,100) && cm.haveItem(4000181 ,100)){
			cm.gainItem(4000180, -100);//获得物品
			cm.gainItem(4000181, -100);//获得物品
			cm.gainDY(5000);//获得物品
			//cm.gainItem(1112676,12,12,12,12,0,0,2,2,10,10,5,5,0,0);
//cm.给属性装备(1112676, 1, 0, 12, 12, 12, 12, 0, 0, 2, 2,0, 0, 0, 5, 5, 10, 10);
			cm.gainExp(2501200);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务16，获得5000抵用券！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			cm.sendOk(感叹号+"#r欢迎进入主线剧情16。#k\r\n请到#r（受难船的墓地）#k收集100个#v4000180#100个#v4000181#交给我。\r\n奖励：5000抵用券");
			cm.dispose();
	    }	
		} else if (selection == 17) {
	if (cm.haveItem(4000235 ,1) && cm.haveItem(4000243 ,1) && cm.haveItem(4000460 ,1) && cm.haveItem(4000461 ,1) && cm.haveItem(4000462 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4000235, -1);//获得物品
			cm.gainItem(4000243, -1);//获得物品
			cm.gainItem(4000460, -1);//获得物品
			cm.gainItem(4000461, -1);//获得物品
			cm.gainItem(4000462, -1);//获得物品
			cm.gainItem(4000464, 5);//获得物品
			//cm.gainItem(1052457  ,20,20,20,20,0,0,2,2,100,100,50,50,0,0);
//cm.给属性装备(1052457, 1, 0, 20, 20, 20, 20, 0, 0, 2, 2,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(3000000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务17");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情17。#k\r\n请打败#r（喷火龙，天鹰，多多，玄冰独角兽，雷卡）#k\r\n收集#v4000235##v4000243##v4000460##v4000461##v4000462#各1个交给我。\r\n奖励：#v4000464#x5");
			cm.dispose();
	    }	
		} else if (selection == 18) {
			if (cm.haveItem(4031739 ,1) && cm.haveItem(4031740 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4031739, -1);//获得物品
			cm.gainItem(4031740, -1);//获得物品
			cm.gainItem(4310097,2);
			cm.gainExp(37212000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务18");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情18。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情18。#k\r\n请打败#r（暴力熊，心疤狮王）#k\r\n收集#v4031739##v4031740#各1个交给我。\r\n奖励：#v4251202#x5");
			cm.dispose();
	    }	
		} else if (selection == 19) {
			if (cm.haveItem(4001083 ,1) && cm.haveItem(4001085 ,1)){
			//cm.gainItem(4000180, -200);//获得物品
			//cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4001083, -1);//获得物品
			cm.gainItem(4001085, -1);//获得物品
			cm.gainItem(4310036, 2);//获得物品
			//cm.gainItem(1112661  ,15,15,15,15,0,0,5,5,0,0,30,30,0,0);
//cm.给属性装备(1112661, 1, 0, 15, 15, 15, 15, 0, 0, 5, 5,0, 0, 0, 0, 0, 0, 0);
			cm.gainExp(4212000);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了主线任务19");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情19。#k\r\n请打败#r（扎昆，鱼王）#k收集#v4001083##v4001085#各1个证明你的实力。\r\n奖励：#v4310036#x2");
			cm.dispose();
	    }	
		} else if (selection == 20) {
		if (cm.haveItem(4020009 ,5) && cm.haveItem(4000245 ,5)&& cm.haveItem(4000180 ,200)&& cm.haveItem(4000181 ,200)){
			cm.gainItem(4000180, -200);//获得物品
			cm.gainItem(4000181, -200);//获得物品
			cm.gainItem(4020009, -5);//获得物品
			cm.gainItem(4000245, -5);//获得物品
			//cm.gainItem(1702224  ,18,18,18,18,200,200,20,20,50,50,30,30,10,10);
cm.给属性装备(1102556, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5,0, 0, 0, 0, 0, 0, 0);
			cm.gainNX(+5000);//获得物品
			cm.gainExp(4721200);//个人给经验
			cm.getPlayer().setOneTimeLoga("主线任务");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了全部主线任务，获得经验值奖励;全属5披风+5000点券，！");
			cm.sendOk("完成了主线任务，获得奖励！");
			cm.dispose();
		}else{
			//cm.sendOk(感叹号+"#r欢迎进入主线剧情17。冒险岛祝你玩的开心！\r\n无需完成，再次点我奖励：奖励坐骑技能与坐骑一只！");
			cm.sendOk(感叹号+"#r欢迎进入主线剧情20。#k\r\n请到#r（死龙巢穴和时间神殿）#k收集#v4020009##v4000245#各5个交给我，《#v4000181#和#v4000180#各200个给我》\r\n奖励：#v1102556#全属5披风");
			cm.dispose();
	    }20
		}
    }
}
