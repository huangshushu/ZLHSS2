
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1"; // 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var 菊花 = "#fUI/PredictHarmony/card/19#"; //卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //笑脸
var 金枫叶 = "#fMap/MapHelper/weather/maple/2#";
var 红枫叶 = "#fMap/MapHelper/weather/maple/1#";
var 巫女 = "#fMap/MapHelper/weather/witch/0#"; //巫女
var 气球 = "#fMap/MapHelper/weather/balloon/4#"; //气球
var 射箭 = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //射箭
var 玫瑰 = "#fMap/MapHelper/weather/rose/0#"; //玫瑰花
var 烟花 = "#fMap/MapHelper/weather/squib/squib1/3#"; //烟花

var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //蓝兔子
var 邪恶小兔 = ""; //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#"; //邪恶小兔 【大】
var 花草 = "#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 = "#fEffect/SetEff/208/effect/walk2/3#";
var 小花 = "#fMap/MapHelper/weather/birthday/2#";
var 桃花 = "#fMap/MapHelper/weather/rose/4#";
var 银杏叶 = "#fMap/MapHelper/weather/maple/3#";
var 小烟花 = "#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 = "#fMap/MapHelper/weather/witch/3#";
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
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	    
            text += "#e#r" + 星星 + "这里是练功房" + 星星 + ".\r\n"//3     
         // text += "#L4##r召唤扎昆BOSS（BOSS门票月卡）【免费20次】\r\n\r\n"//3
            text += "#L3##d" + 小烟花 + "召唤经验猪（#v5252001#）每日5次" + 小烟花 + "\r\n\r\n"//3
		//	text += "  #d" + 小烟花 + "注:#r当经验值到达99.99%*使用快捷商店里的#v2022452#\r\n"
		//	text += "  #d" + 小烟花 + "#r不然可能不会升级" + 小烟花 + "\r\n"//3
			
   
            cm.sendSimple(text);
}
        


else if (selection == 1) {
  //  cm.刷新地图();//不然无法召唤怪物
    cm.warpParty(211042400);//扎昆入口
    cm.dispose();
} else if (selection == 5) {
    cm.warp(910000000);//回城自由
    cm.dispose();
} else if (selection == 2) {
    cm.warpParty(209000014);//群体传送
    cm.dispose();
        
} else if (selection == 3) {
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
		   
   else if (cm.getBossLog("zhakun") >= 5)//召唤20次
   {
    cm.sendOk("今天已经召唤过5次了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(209000014) > 100)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(5252001,1)){//判断火焰
                   cm.gainItem(5252001, -1);//扣去火焰
//cm.changeMusic("Bgm06/FinalFight");//改变背景声音
   // cm.spawnMonster(8800000, 1);
   // cm.spawnMonster(8800003, 1);
   // cm.spawnMonster(8800004, 1);
   // cm.spawnMonster(8800005, 1);
   // cm.spawnMonster(8800006, 1);
   // cm.spawnMonster(8800007, 1);
   // cm.spawnMonster(8800008, 1);
   // cm.spawnMonster(8800009, 1);
   // cm.spawnMonster(8800010, 1);

    cm.spawnMobOnMap(9500143,1,-284,154,209000014);//定点位子咋混 
	cm.spawnMobOnMap(9500143,1,-365,154,209000014);//定点位子咋混	
   // cm.spawnMobOnMap(9500143,1,-6,-230,209000014);//定点位子咋混 
    

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.worldMessage(6,"[练功房] : 玩家 "+cm.getPlayer().getName()+"  在练功房召唤出了可乐猪")
	cm.worldMessage(6,"[练功房] : 玩家 "+cm.getPlayer().getName()+"  在练功房召唤出了可乐猪")
	
    cm.dispose();
}else{
    cm.sendOk("你要有#v5252001#才能帮你召唤可乐猪哦~！");
    cm.dispose();
    }
	} else if (selection == 6) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(9601013,1,-364,-154,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS黄龙")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你召唤黄龙哦~！");
    cm.dispose();
    }
	} else if (selection == 7) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(9601014,1,-6,-230,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS赤虎")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你召唤赤虎哦~！");
    cm.dispose();
    }
	} else if (selection == 8) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(9601015,1,-6,-230,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS邪蛇双兄弟")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你邪蛇双兄弟哦~！");
    cm.dispose();
    }
	} else if (selection == 9) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(8840000,1,-6,-230,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS 雷昂狮")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你召唤班·雷昂哦~！");
    cm.dispose();
    }
	} else if (selection == 10) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(9410224,1,-6,-230,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS 秦始皇")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你召唤班·雷昂哦~！");
    cm.dispose();
   }
   } else if (selection == 11) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("只有 #r200级#k 才可以召唤该BOSS。");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次BOSS了！");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//判断火焰
                   cm.gainItem(4001248, -1);//扣去火焰


    cm.spawnMobOnMap(9300028,1,-6,-230,280030000);//定点位子咋混 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("召唤成功！");	
	cm.全服黄色喇叭("[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在扎昆祭坛 召唤出高级BOSS 黑魔法师")
    cm.dispose();
}else{
    cm.sendOk("你要有#v4001248#才能帮你召唤班·雷昂哦~！");
    cm.dispose();
   }


} else if (selection == 4) {//BOSS门票月卡
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 20)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次扎昆！如果想召唤可以用火眼召唤！");
    cm.dispose();
   }
//   else if(cm.getMonsterCount(910000022) > 0)
//   {
//     cm.sendOk("请先消灭掉该地图已经召唤出的BOSS!");
//      cm.dispose();
//   }
               //5
           else if(cm.haveItem(3994713,1)){//判断石像

            cm.spawnMobOnMap(8800000,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800003,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800004,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800005,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800006,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800007,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800008,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800009,1,-6,-230,280030000);//定点位子咋混 
            cm.spawnMobOnMap(8800010,1,-6,-230,280030000);//定点位子咋混 

     cm.givePartyBossLog("zhakun");
               cm.sendOk("召唤成功！");	
               cm.dispose();
               }else{
               cm.sendOk("你要有#v3994713#才能帮你召唤BOSS哦~！");
               cm.dispose();
               }


        }  
    }
}


