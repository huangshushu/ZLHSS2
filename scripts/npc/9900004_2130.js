var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
                        text += " #e自助赚钱系统#b【概率爆爱心宝石 暗影金币 值钱武器】 #k#n\r\n"
            text += "     "+ 蓝色箭头 +"#L21##rLv50.大王蜈蚣副本#l\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			text += "\t  #e初级boss传送#b 【难度越高 爆出材料几率越高】#k!#n\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#L1##e#d" + 蓝色箭头 + "红蜗牛王副本#l#L2##d " + 蓝色箭头 + "木妖王副本#l\r\n\r\n"//3
            text += "#L3##d" + 蓝色箭头 + "蘑菇王副本  #l#L4##d " + 蓝色箭头 + "寄居蟹副本#l\r\n\r\n"//3
            text += "#L5##d" + 蓝色箭头 + "僵尸菇王副本#l#L6##d " + 蓝色箭头 + "肯德熊副本#l\r\n\r\n"//3
            text += "#L23##d" + 蓝色箭头 + "蓝蘑菇王副本#l#L24##d " + 蓝色箭头 + "提莫副本#l\r\n\r\n"//3
            text += "#L7##d" + 蓝色箭头 + "妖怪禅师副本#l#L8##d " + 蓝色箭头 + "鳄鱼王副本#l\r\n\r\n"//3
            text += "#L9##d" + 蓝色箭头 + "艾利杰副本  #l#L10##d " + 蓝色箭头 + "歇尔夫副本#l\r\n\r\n"//3
            text += "#L11##d" + 蓝色箭头 + "九尾狐副本  #l#L12##d " + 蓝色箭头 + "蝙蝠怪副本#l\r\n\r\n"//3
            text += "#L13##d" + 蓝色箭头 + "格瑞分多副本#l#L14##d " + 蓝色箭头 + "喷火龙副本#l\r\n\r\n"//3 
            text += "#L19##d" + 蓝色箭头 + "大海兽副本#l  #L20##d " + 蓝色箭头 + "雷卡副本#l\r\n\r\n"//3
            text += "#L15##d" + 蓝色箭头 + "多多副本#l    #L16##d " + 蓝色箭头 + "玄冰独角兽副本#l\r\n\r\n"//3
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//红蜗牛王
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("本地图限制等级10级。您的能力没有资格挑战红蜗牛王副本");
                cm.dispose();
              }else{
			cm.warp(104000400);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 2) {//木妖王
            if (cm.getLevel() < 20 ) {  
            cm.sendOk("本地图限制等级20级。您的能力没有资格挑战木妖王副本");
                cm.dispose();
              }else{
			cm.warp(101030404);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 3) {//蘑菇王
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("本地图限制等级30级。您的能力没有资格挑战蘑菇王副本");
                cm.dispose();
              }else{
			cm.warp(100000005);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 4) {//寄居蟹
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("本地图限制等级30级。您的能力没有资格挑战寄居蟹副本");
                cm.dispose();
              }else{
			cm.warp(110040000);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 5) {//僵尸蘑菇王
            if (cm.getLevel() < 40 ) {  
            cm.sendOk("本地图限制等级40级。您的能力没有资格挑战僵尸蘑菇王副本");
                cm.dispose();
              }else{
			cm.warp(105070002);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 6) {//肯德熊
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战肯德熊副本");
                cm.dispose();
              }else{
			cm.warp(250010304);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 7) {//妖怪禅师
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战妖怪禅师副本");
                cm.dispose();
              }else{
			cm.warp(250010503);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 8) {//鳄鱼王
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战鳄鱼王副本");
                cm.dispose();
              }else{
			cm.warp(107000300);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 9) {//艾利杰
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战艾利杰副本");
                cm.dispose();
              }else{
			cm.warp(200010300);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 10) {//歇尔夫
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战歇尔夫副本");
                cm.dispose();
              }else{
			cm.warp(230020100);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//九尾狐
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战九尾狐副本");
                cm.dispose();
              }else{
			cm.warp(222010310);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 12) {//蝙蝠怪
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格挑战蝙蝠怪副本");
                cm.dispose();
              }else{
			cm.warp(105090900);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 13) {//格瑞分多
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战格瑞分多副本");
                cm.dispose();
              }else{
			cm.warp(240020101);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//喷火龙
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战喷火龙副本");
                cm.dispose();
              }else{
			cm.warp(240020402);  
				cm.dispose();
                return;
	      }
        } else if (selection == 15) {//多多
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战多多副本");
                cm.dispose();
              }else{
			cm.warp(270010500);  
				cm.dispose();
                return;
	      }
        } else if (selection == 16) {//玄冰独角兽
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战玄冰独角兽副本");
                cm.dispose();
              }else{
			cm.warp(270020500);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 17) {//鱼王
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战鱼王副本");
                cm.dispose();
              }else{
			cm.warp(230040420);  
				cm.dispose();
                return;
	      }
        } else if (selection == 18) {//闹钟
            if (cm.getLevel() < 100 ) {  
            cm.sendOk("本地图限制等级100级。您的能力没有资格闹钟副本");
                cm.dispose();
              }else{
			cm.warp(220080001);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 19) {//扎昆
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格大海兽副本");
                cm.dispose();
              }else{
			cm.warp(240040401);  
				cm.dispose();
                return;
	      }
        } else if (selection == 20) {//暗黑龙王
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格雷卡副本");
                cm.dispose();
              }else{
			cm.warp(270030500);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 21) {//大王蜈蚣
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("本地图限制等级30级。您的能力没有资格大王蜈蚣副本");
                cm.dispose();
              }else{
			cm.warp(701010322);  
				cm.dispose();
                return;
	      }
              } else if (selection == 22) {//马来西亚
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("本地图限制等级70级。您的能力没有资格马来西亚副本");
                cm.dispose();
              }else{
			cm.warp(551030100);  
				cm.dispose();
                return;
 }
 } else if (selection == 23) {//进阶扎昆
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格蓝蘑菇王副本");
                cm.dispose();
              }else{
			cm.warp(800010100);  
				cm.dispose();
                return;
}
 } else if (selection == 24) {//进阶黑龙
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("本地图限制等级50级。您的能力没有资格提莫副本");
                cm.dispose();
              }else{
			cm.warp(220050100);  
				cm.dispose();
                return;
	      }  
        }
    }
}
