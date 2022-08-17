var 星星 = "#fEffect/CharacterEff/1112903/0/0#";
var 爱心 = "#fEffect/CharacterEff/1032063/0/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
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
            //text += "\t\t\t  #e#爱情冒险岛副本专区 #k#n\r\n"
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#L1##b" + 红色箭头 + "月妙组队副本(10-250) 可兑换小鱼戒指\r\n"
            text += "#L2##b" + 蓝色箭头 + "废弃组队副本(15-250) 可兑换绿黏液鞋子\r\n"
            text += "#L3##b" + 蓝色箭头 + "玩具组队副本(30-250) 随机出最强工作，浪人披风\r\n"//3

            text += "#L4##b" + 红色箭头 + "天空组队副本(51-250) 可兑换女神手镯\r\n"
            text += "#L5##b" + 红色箭头 + "毒物组队副本(60-250) 可兑换阿尔泰耳环\r\n"
           text += "#L6##b" + 蓝色箭头 + "海盗组队副本(105-250) 可获得初阶毕业腰带制作材料\r\n"
		   text += "#L7##b" + 蓝色箭头 + "七七属性时装披风(100-250)  可兑换属性时装披风\r\n"

            //text += "#L1##b" + 红色箭头 + "月妙组队副本(10-200)#l #L9##b" + 红色箭头 + "英语学院副本\r\n"//3
             
        
           
            //text += "#L10#"+xxx+"怪物嘉年华(组队对抗副本.最低2V2)等级(30-100)#l\r\n"//3
         //   text += "#L8#"+ttt+""+xxx+ "遗址公会对抗战(家族副本)#l\r\n"//3
            text += "#b#L27#"+红色箭头+ "BOSS大星祭  可兑换外星人装备，水晶，星星\r\n"//3  
           text += "#L38##b" +红色箭头+"武陵道场  可兑换必成币，强化水晶，锂\r\n"//3
         
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"  
	  //  text += " #L11#"+ttt+""+xxx+"远征闹钟(100级)#l#b#L12#"+ttt+""+xxx+"远征扎昆(120级)#l#b\r\n";
            
           // text += " #L23#"+ttt+""+xxx+"大王蜈蚣(70级)#l#b#L22#"+ttt+""+xxx+"巨大蝙蝠(90)#l#b\r\n";
	    //text += " #L13#"+ttt+""+xxx+"远征大树(130级)#l#b#L14#"+ttt+""+xxx+"远征妖僧(140级)#l#b\r\n";

            //text += " #L15#"+ttt+""+xxx+"绯红(120级)#l#b#L16#"+ttt+""+xxx+"鱼王(120级)#l#b\r\n\r\n";

            //text += "#L11##dLv120.千年树精王遗迹Ⅱ#l\r\n\r\n"//3
            //text += "#L12##dLv130.人偶师BOSS挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L13##rLv120级以上.绯红副本挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L14##rLv140级以上.御姐副本挑战#l\r\n\r\n"//3
           //text += "" + 蓝色箭头 + "#L60##rLv160级以上.挑战高级boss#l\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //月妙组队副本 //100000020
            cm.warp(100000200);
            cm.dispose();
        } else if (selection == 2) {  //废弃组队副本
            cm.warp(103000000);
            cm.dispose();
        } else if (selection == 3) { //玩具组队副本
            cm.warp(221024500);
            cm.dispose();
        } else if (selection == 4) {//天空组队副本
            cm.warp(200080101);
            cm.dispose();
        } else if (selection == 5) {//毒物组队副本
	    cm.warp(300030100);
            cm.dispose();
        } else if (selection == 6) {//海盗组队副本
            cm.warp(251010404);
            cm.dispose();
        } else if (selection == 7) {//罗密欧与朱丽叶组队副本
	    cm.warp(261000001);
            cm.dispose();
        } else if (selection == 8) {//遗址公会对抗战
	    cm.warp(101030104);
            cm.dispose();
        } else if (selection == 9) {//英语学院副本
            cm.warp(702090400);
            cm.dispose();
         } else if (selection == 21) {//怪物公园
            cm.warp(951000000);
            cm.dispose();
        } else if (selection == 28) {//演练副本
            cm.warp(130020000);
            cm.dispose();
       } else if (selection == 29) {//金字塔副本
            cm.warp(926010000);
            cm.dispose();
       } else if (selection == 23) {//大王蜈蚣
            cm.warp(701010320);
            cm.dispose();
            
        } else if (selection == 22) {//巨大蝙蝠
            cm.warp(105100100);
            cm.dispose();

        } else if (selection == 11) {//闹钟
            cm.warp(220080000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//扎
            cm.warp(211042400);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//大树
            if (cm.getLevel() < 180 && cm.party.size() < 2) {  
            cm.sendOk("本地图限制等级180级。您的能力没有资格挑战副本");
                cm.dispose();
              }else{
			cm.warp(541020800);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//妖僧
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("本地图限制等级140级。您的能力没有资格挑战副本");
                cm.dispose();
              }else{
			cm.warp(702070400);  
                cm.dispose();
                return;
	      }
        } else if (selection == 15) {//绯红
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战副本");
                cm.dispose();
              }else{
			cm.warp(803001200);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 16) {//鱼王
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战副本");
                cm.dispose();
              }else{
			cm.warp(230040420);  
                cm.dispose();
                return;
	      }
        } else if (selection == 10) {//.怪物嘉年华
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
          } else if (selection == 60) {//.怪物嘉年华
            cm.warp(970030001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 15) {//.阿里安特
            cm.openNpc(2101018, 0); 
        } else if (selection == 27) {//.二十七宫
            cm.warp(970030000);
            cm.showInstruction("#r[二十七宫材料说明]#k\r\n\r\n", 240, 60);
            cm.dispose();
       } else if (selection == 38) {//.武陵道场
            cm.warp(925020000);
            cm.showInstruction("#r[武陵道场材料说明]#k获取腰带\r\n\r\n", 240, 60);
            cm.dispose();
           
        } else if (selection == 31) {//.废弃扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
           cm.gainExp(50000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
      else if (selection == 32) {//.玩具扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
             cm.gainExp(50000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
else if (selection == 33) {//.天空扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
             cm.gainExp(50000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
else if (selection == 34) {//.男女扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
             cm.gainExp(50000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
else if (selection == 35) {//.毒物扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
             cm.gainExp(100000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
else if (selection == 36) {//.海盗扫荡
           if (cm.haveItem(4031890) > 0){
           cm.gainItem(4001322,10);
           cm.gainItem(4002000,1);//绿蜗牛邮票
            cm.gainExp(100000);
           cm.gainItem(4031890,-1);
            cm.dispose();
           }
         else{
              cm.sendOk("你没有扫荡卡，不能扫荡副本");
              cm.dispose();
             }
        }
    }
}


