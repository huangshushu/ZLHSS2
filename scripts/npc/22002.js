importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);
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
	    
            text += "#e#r" + 星星 + "这里可以帮你召唤黑龙BOSS" + 星星 + ".\r\n"//3     
        //    text += "#L1##d" + 小烟花 + "（首先）进入召唤地图" + 小烟花 + "\r\n"//3
            text += "#L3##d" + 小烟花 + "召唤黑龙BOSS x1 #v4000186#x1" + 小烟花 + "\r\n"//3
			text += "#L4##d" + 小烟花 + "召唤黑龙BOSS x5 #v4000186#x5" + 小烟花 + "\r\n"//3
		    text += "#L5##d" + 小烟花 + "召唤黑龙BOSS x10 #v4000186#x10" + 小烟花 + "\r\n\r\n"//3
			text += "#L2##d" + 小烟花 + "VIP装备回收#r（装备栏96格全部回收）" + 小烟花 + "\r\n\r\n"//3
			text += "#L6##d" + 小烟花 + "返回自由市场" + 小烟花 + "\r\n"//3
		//	text += "#L9##d" + 小烟花 + "召唤雷昂（#v4001248#）" + 小烟花 + "\r\n"//3
		//	text += "#L11##d" + 小烟花 + "召唤黑魔法师（#v4001248#）" + 小烟花 + "\r\n"//3
		//	text += "#L10##d" + 小烟花 + "召唤皇帝（#v4001248#）" + 小烟花 + "\r\n\r\n"//3
        //    text += "#L1##d" + 小烟花 + "返回扎昆入口" + 小烟花 + "\r\n\r\n"//3
        //    text += "#L5##d" + 小烟花 + "回城自由" + 小烟花 + "\r\n\r\n"//3
         //   text += "#L2##d" + 小烟花 + "拉回掉线队友" + 小烟花 + "\r\n\r\n"//3
   
            cm.sendSimple(text);
}
        


else if (selection == 1) {
	if (cm.getPlayerCount(400052200) > 1) {
	            cm.sendOk("已经有人你无法进入!");		
                cm.dispose();
	}
	  else if(cm.getPlayer().haveItem(4000186, 1) ){//判断火焰
	//	   cm.判断每日值("麦格纳斯") <= 5
		    {
 //   cm.sendOk("你好,队伍中有人没有次数或者门票!");
   }
		   cm.gainItem(4000186, -0);
		    cm.warpParty(400052200);
		//         cm.清除当前地图怪物(); 
		   	//	   cm.spawnMobOnMap(8880000,1,2236,-1347,401060300);
			//	   cm.给团队每日("麦格纳斯");
		   Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "『系统公告』" + " : " + "[" + cm.getChar().getName() + "]开始挑战暗黑龙王，大家一起为他(她)鼓掌!"));			cm.dispose();
		   
		  	}else{
                        cm.sendOk("队伍中有人没有黑龙角");
                        cm.dispose();
	 }
}else if (selection == 6) {
	cm.warpParty(910000000);
	cm.dispose();
} else if (selection == 2) {
				if(cm.haveItem(2022564)< 1 ){//cm.getmoneyb()>=100
                    cm.sendOk("您没有#v2022564#不能使用哦，请找群主购买一件回收权限获取哦！");
                    cm.dispose();
                    return;
				}
				var 回收金币 = 0;
                for (var i = 1; i < 99; i++) {
                    if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i) == null) {
                        //cm.sendOk("第一格没有装备,无法回收.");
						cm.dispose();
                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getExpiration() == 1) {
                        //cm.sendOk("限时装备不能使用该功能.");
                        cm.dispose();
                    } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId())) {
                        //cm.sendOk("点卷装备不能强化.");
                        cm.dispose();
                    } else {

                        var statup = new java.util.ArrayList();
                        //cm.gainItem(高等五彩水晶, -1)
                        var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var ii = MapleItemInformationProvider.getInstance();
                        if (item.getWatk() < 20000 && item.getMatk() < 20000 && item.getStr() > 20000 && item.getInt() > 20000 && item.getLuk() > 20000 && item.getDex() > 20000) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6666666);
							回收金币 += 6666666;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 60 && item.getMatk() < 60 && item.getStr() > 20 && item.getInt() > 20 && item.getLuk() > 20 && item.getDex() > 20) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
             //               //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 50 && item.getMatk() < 50) {
                            //cm.sendOk("#r#e装备不行哦!不想回收！请大侠换一件装备吧!#k");
                            cm.dispose();

                        } else if (item.getWatk() > 99 && item.getMatk() > 99 && item.getStr() > 99 && item.getInt() > 99 && item.getLuk() > 99 && item.getDex() > 99) {
                         //   cm.sendOk("#r#e勋章不可回收!#k");
                            cm.dispose();
							
                        } else if (item.getWatk() < 100 && item.getMatk() < 100) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(500000);
							回收金币 += 500000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1000000);
							回收金币 += 1000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1500000);
							回收金币 += 1500000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(2000000);
							回收金币 += 2000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(3000000);
							回收金币 += 3000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(5000000);
							回收金币 += 5000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6000000);
							回收金币 += 6000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(8000000);
							回收金币 += 8000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(10000000);
							回收金币 += 10000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							回收金币 += 15000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(18000000);
	//						回收金币 += 18000000;
							cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(20000000);
							回收金币 += 20000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                           // cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(25000000);
                            回收金币 += 25000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(30000000);
                            回收金币 += 30000000;
		//					cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
							//cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(40000000);
							回收金币 += 40000000;
			//				cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();

                        } else {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(50000000);
							回收金币 += 50000000;
					//		cm.全服黄色喇叭("[回收系统] : 土豪玩家 "+cm.getPlayer().getName()+" 使用了高级装备回收")
                            //cm.sendOk("#r#e装备回收成功,送你了一笔冒险币!#k");
                            cm.dispose();
                        }

                    }
                }
				if(回收金币 > 0){
					cm.sendOk("#r#e装备回收成功,一共获得"+回收金币+" 金币!#k");
					cm.dispose();
				}else{
					cm.sendOk("#r#e目前你的背包内没有能回收的装备!#k");
					cm.dispose();
				}
        
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
		   
   else if (cm.getBossLog("黑龙") >= 9999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次黑龙！");
    cm.dispose();
   
   }
               //5
           else if(cm.haveItem(4000186,1)){//判断火焰
                   cm.gainItem(4000186, -1);//扣去火焰
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

    cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("黑龙");
    cm.sendOk("召唤成功！");	
	cm.worldMessage(6,"[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在暗黑龙王洞穴入口 召唤出暗黑龙王")
	
    cm.dispose();
}else{
    cm.sendOk("可以在快捷商店里购买！");
    cm.dispose();
    }
	} else if (selection == 4) {
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
		   
   else if (cm.getBossLog("黑龙") >= 9999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次黑龙！");
    cm.dispose();
   
   }
               //5
           else if(cm.haveItem(4000186,5)){//判断火焰
                   cm.gainItem(4000186, -5);//扣去火焰
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

       cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	   cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	   cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	   cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	   cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 

	

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("黑龙");
    cm.sendOk("召唤成功！");	
	cm.worldMessage(6,"[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在暗黑龙王洞穴入口 召唤出暗黑龙王")
	
    cm.dispose();
}else{
    cm.sendOk("可以在快捷商店里购买！");
    cm.dispose();
    }
	} else if (selection == 5) {
			
    if (cm.getParty() == null) 
                { // 没有组队
                       cm.sendOk("请组队后和我谈话。");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("请让你的队长和我说话~");
               cm.dispose();
           }
		   
   else if (cm.getBossLog("黑龙") >= 9999)//召唤20次
   {
    cm.sendOk("今天已经挑战过20次黑龙！");
    cm.dispose();
   
   }
               //5
           else if(cm.haveItem(4000186,10)){//判断火焰
                   cm.gainItem(4000186, -10);//扣去火焰
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

      cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	  cm.spawnMobOnMap(8810026,1,2170,29,400052200);//定点位子咋混 
	

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("黑龙");
    cm.sendOk("召唤成功！");	
	cm.worldMessage(6,"[BOSS召唤] : 玩家 "+cm.getPlayer().getName()+"  在暗黑龙王洞穴入口 召唤出暗黑龙王")
	
    cm.dispose();
}else{
    cm.sendOk("可以在快捷商店里购买！");
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
    cm.givePartyBossLog("黑龙");
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


